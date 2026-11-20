import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GOOGLE_ADS_TAG_ID = "AW-17371664680";
const APP_STORE_CLICK_SEND_TO = "AW-17371664680/ZQvICL66nbwdEKiiuttA";
const DAILY_POWER_UP_APP_ID = "6744414135";
const NAVIGATION_FALLBACK_MS = 1200;

let tagLoadPromise;

function loadGoogleAdsTag() {
  if (tagLoadPromise) return tagLoadPromise;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_ADS_TAG_ID);

  tagLoadPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    const finish = () => resolve();

    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`;
    script.dataset.googleAdsTag = GOOGLE_ADS_TAG_ID;
    script.addEventListener("load", finish, { once: true });
    script.addEventListener("error", finish, { once: true });
    document.head.appendChild(script);
    window.setTimeout(finish, NAVIGATION_FALLBACK_MS);
  });

  return tagLoadPromise;
}

function getDailyPowerUpAppStoreLink(target) {
  if (!(target instanceof Element)) return null;

  const link = target.closest("a[href]");
  if (!link) return null;

  try {
    const destination = new URL(link.href, window.location.href);
    const pathParts = destination.pathname.split("/");
    if (
      destination.hostname !== "apps.apple.com" ||
      !pathParts.includes(`id${DAILY_POWER_UP_APP_ID}`)
    ) {
      return null;
    }

    return { link, destination };
  } catch {
    return null;
  }
}

function trackDailyPowerUpAppStoreClick(event) {
  if (event.defaultPrevented) return;

  const match = getDailyPowerUpAppStoreLink(event.target);
  if (!match || typeof window.gtag !== "function") return;

  const { link, destination } = match;
  const opensInAnotherContext =
    link.target === "_blank" ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey;

  if (opensInAnotherContext) {
    window.gtag("event", "conversion", {
      send_to: APP_STORE_CLICK_SEND_TO,
      transport_type: "beacon",
    });
    return;
  }

  event.preventDefault();

  let navigated = false;
  const navigateToAppStore = () => {
    if (navigated) return;
    navigated = true;
    window.location.assign(destination.href);
  };

  window.gtag("event", "conversion", {
    send_to: APP_STORE_CLICK_SEND_TO,
    transport_type: "beacon",
    event_callback: navigateToAppStore,
    event_timeout: 1000,
  });
  window.setTimeout(navigateToAppStore, NAVIGATION_FALLBACK_MS);
}

export default function GoogleAdsTag() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/app" || pathname.startsWith("/app/")) return undefined;

    void loadGoogleAdsTag();
    document.addEventListener("click", trackDailyPowerUpAppStoreClick, true);

    return () => {
      document.removeEventListener("click", trackDailyPowerUpAppStoreClick, true);
    };
  }, [pathname]);

  return null;
}
