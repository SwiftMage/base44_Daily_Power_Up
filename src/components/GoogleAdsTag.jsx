import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GOOGLE_ADS_TAG_ID = "AW-17371664680";

let tagLoadPromise;

function loadGoogleAdsTag() {
  if (tagLoadPromise) return tagLoadPromise;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());

  tagLoadPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    const finish = () => resolve();

    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GOOGLE_ADS_TAG_ID}`;
    script.dataset.googleAdsTag = GOOGLE_ADS_TAG_ID;
    script.addEventListener("load", finish, { once: true });
    script.addEventListener("error", finish, { once: true });
    document.head.appendChild(script);
    window.setTimeout(finish, 1200);
  });

  return tagLoadPromise;
}

export default function GoogleAdsTag() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/app" || pathname.startsWith("/app/")) return undefined;

    void loadGoogleAdsTag();
    return undefined;
  }, [pathname]);

  return null;
}
