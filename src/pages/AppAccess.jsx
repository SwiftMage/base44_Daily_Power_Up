import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft, BookOpen, Check, Heart,
  Infinity as InfinityIcon, ListMusic, LoaderCircle, LogOut,
  Pause, Play, Plus, Repeat, Search, Settings, Sparkles, Star,
  Volume2, X,
} from "lucide-react";
import "./AppAccess.css";

const TOPICS = [
  { name: "Building Resilience", description: "Bounce back when things feel hard.", icon: InfinityIcon },
  { name: "Self Esteem", description: "Celebrate my strengths and wins.", icon: Heart },
  { name: "Anxiety", description: "Turn tough thoughts into helpful ones.", icon: Sparkles },
  { name: "School", description: "For homework, tests, and class.", icon: BookOpen },
];
const THEMES = [
  { id: "blueberry", name: "Blueberry Cream", color: "#378fe9" },
  { id: "candy", name: "Candy Store", color: "#e83d91" },
  { id: "mint", name: "Cool Mint", color: "#20a79b" },
  { id: "neon", name: "Neon Lights", color: "#8c4de8" },
  { id: "lava", name: "The App is Lava", color: "#f47938" },
  { id: "snow", name: "Soft Snow", color: "#9b91e8" },
];
const STORAGE_PREFIX = "daily-power-up-web-shared-teacher-v1";
const TEACHER_PROFILE_ID = "teacher-profile";

function makeTeacherProfile() {
  return {
    id: TEACHER_PROFILE_ID,
    isTeacherMode: true,
    name: "Teacher",
    avatar: 29,
    theme: "blueberry",
    stars: 0,
    streak: 0,
    lastPracticeDate: "",
    selectedIds: Array.from({ length: 31 }, (_, index) => `teacher-${String(index + 1).padStart(2, "0")}`),
    customAffirmations: [],
    playlists: [],
  };
}

function readLocalState() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_PREFIX) || "{}");
    const saved = Array.isArray(value.profiles) ? value.profiles.find((item) => item.id === TEACHER_PROFILE_ID) : null;
    const defaults = makeTeacherProfile();
    const profile = {
      ...defaults,
      ...(saved || {}),
      id: TEACHER_PROFILE_ID,
      isTeacherMode: true,
      selectedIds: defaults.selectedIds,
      customAffirmations: [],
    };
    return { profiles: [profile], activeId: TEACHER_PROFILE_ID };
  } catch {
    return { profiles: [makeTeacherProfile()], activeId: TEACHER_PROFILE_ID };
  }
}

function getTopicIcon(category) {
  const topic = TOPICS.find((item) => item.name === category);
  return topic?.icon || Heart;
}

export default function AppAccess() {
  const [session, setSession] = useState(null);
  const [directAccess, setDirectAccess] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/shared-session", { cache: "no-store" })
      .then((response) => response.json())
      .then((result) => {
        if (!active || !result.authenticated) return;
        setSession(true);
        setDirectAccess(Boolean(result.directAccess));
      })
      .catch(() => {})
      .finally(() => { if (active) setCheckingSession(false); });
    return () => {
      active = false;
    };
  }, []);

  if (checkingSession) {
    return <div className="dpu-auth-loading"><LoaderCircle className="dpu-spin" /> Opening your teacher profile…</div>;
  }
  if (!session) return <LoginScreen onSignedIn={setSession} />;
  return <AppWorkspace directAccess={directAccess} onSignOut={async () => {
    try {
      await fetch("/api/shared-logout", { method: "POST" });
    } finally {
      setSession(null);
      setDirectAccess(false);
    }
  }} />;
}

function LoginScreen({ onSignedIn }) {
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function signIn(event) {
    event.preventDefault();
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/shared-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "That password did not match.");
        return;
      }
      onSignedIn(true);
    } catch {
      setError("The sign-in service is unavailable. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="dpu-app-root dpu-login-root">
      <header className="dpu-login-top"><a href="/" className="dpu-back-link"><ArrowLeft size={17} /> Back to Daily Power Up!</a><span className="dpu-beta-chip">Web beta</span></header>
      <main className="dpu-login-card">
        <div className="dpu-brand-mark"><span className="dpu-brand-star">★</span><span>Daily Power Up!</span><span className="dpu-brand-star">★</span></div>
        <div className="dpu-login-icon"><Heart size={26} /></div>
        <h1>Your teacher profile, on the web.</h1>
        <p className="dpu-login-copy">Enter the shared password to open the Teacher profile.</p>
        <form onSubmit={signIn} className="dpu-login-form">
          <label htmlFor="dpu-password">Password</label>
          <input id="dpu-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" />
          <button className="dpu-button dpu-button-primary dpu-login-submit" type="submit" disabled={sending}>
            {sending ? <LoaderCircle className="dpu-spin" size={19} /> : <Heart size={18} />}
            {sending ? "Signing in…" : "Sign in"}
          </button>
        </form>
        {error && <p className="dpu-error-message" role="alert">{error}</p>}
        <p className="dpu-invite-note">One shared teacher profile for everyone using this login.</p>
        <a href="/Privacy" className="dpu-privacy-link">Privacy</a>
      </main>
    </div>
  );
}

function AppWorkspace({ onSignOut, directAccess }) {
  const local = useMemo(() => readLocalState(), []);
  const [profiles, setProfiles] = useState(local.profiles);
  const [library, setLibrary] = useState([]);
  const [libraryLoading, setLibraryLoading] = useState(true);
  const [libraryError, setLibraryError] = useState("");
  const [screen, setScreen] = useState("home");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [customDialog, setCustomDialog] = useState(false);
  const [playerTracks, setPlayerTracks] = useState(null);
  const [guideTopics, setGuideTopics] = useState([]);
  const [guidePicks, setGuidePicks] = useState([]);
  const [guideChosen, setGuideChosen] = useState([]);
  const [guideOffset, setGuideOffset] = useState(0);
  const [playlistName, setPlaylistName] = useState("");
  const [toast, setToast] = useState("");
  const profile = profiles[0] || makeTeacherProfile();
  const userKey = STORAGE_PREFIX;

  useEffect(() => {
    let active = true;
    fetch("/api/affirmations", { cache: "no-store" })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Couldn't load the teacher affirmations.");
        return result;
      })
      .then((result) => { if (active) setLibrary(result); })
      .catch((loadError) => { if (active) setLibraryError(loadError.message); })
      .finally(() => { if (active) setLibraryLoading(false); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    localStorage.setItem(userKey, JSON.stringify({ profiles: [profile], activeId: TEACHER_PROFILE_ID }));
  }, [profile, userKey]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const customItems = profile?.customAffirmations || [];
  const allItems = useMemo(() => [...library, ...customItems], [library, customItems]);
  const chosenIds = profile?.selectedIds || [];
  const selectedItems = chosenIds.map((id) => allItems.find((item) => item.id === id)).filter(Boolean);

  function updateProfile(patch) {
    if (!profile) return;
    if (profile.isTeacherMode && ("selectedIds" in patch || "customAffirmations" in patch)) return;
    setProfiles((current) => current.map((item) => item.id === profile.id ? { ...item, ...patch } : item));
  }

  function toggleAffirmation(id, shouldAdd) {
    if (profile?.isTeacherMode) return;
    const next = shouldAdd
      ? [...new Set([...chosenIds, id])]
      : chosenIds.filter((value) => value !== id);
    updateProfile({ selectedIds: next });
  }

  function addMany(ids) {
    if (profile?.isTeacherMode) return;
    const next = [...new Set([...chosenIds, ...ids])];
    updateProfile({ selectedIds: next });
    setToast(`${next.length - chosenIds.length} added to ${profile?.name || "your list"}`);
    setScreen("home");
  }

  function startPlayer(items) {
    if (items.length) setPlayerTracks(items);
  }

  function markPractice() {
    if (!profile) return;
    const today = new Date();
    const todayKey = today.toLocaleDateString("en-CA");
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toLocaleDateString("en-CA");
    const last = profile.lastPracticeDate || "";
    const streak = last === todayKey ? (profile.streak || 1) : last === yesterdayKey ? (profile.streak || 0) + 1 : 1;
    updateProfile({ stars: (profile.stars || 0) + 1, streak, lastPracticeDate: todayKey });
    setToast("A star for you! Great practice.");
  }

  function showGuidedPicks(offset = 0) {
    const existing = new Set(chosenIds);
    const available = guideTopics.flatMap((topic) => {
      const matches = allItems.filter((item) => item.category === topic && !existing.has(item.id));
      return matches.slice(offset, offset + 4);
    });
    setGuideOffset(offset);
    setGuidePicks(available);
    setGuideChosen(available.map((item) => item.id));
  }

  function createPlaylist(event) {
    event.preventDefault();
    const name = playlistName.trim();
    if (!name || !chosenIds.length) return;
    updateProfile({ playlists: [...(profile.playlists || []), { id: crypto.randomUUID(), name, ids: [...chosenIds] }] });
    setPlaylistName("");
    setToast("Playlist created from your list.");
  }

  function removePlaylist(id) {
    updateProfile({ playlists: (profile.playlists || []).filter((item) => item.id !== id) });
  }

  const navItems = [
    { id: "home", label: "My list", icon: Heart },
    { id: "browse", label: "Browse all", icon: Search },
    ...(!profile?.isTeacherMode ? [{ id: "guide", label: "Guided picks", icon: Sparkles }] : []),
    { id: "playlists", label: "Playlists", icon: ListMusic },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  if (libraryLoading) return <div className="dpu-auth-loading"><LoaderCircle className="dpu-spin" /> Loading the teacher affirmations…</div>;
  if (libraryError) return <div className="dpu-auth-loading"><p>{libraryError}</p><button className="dpu-button dpu-button-glass" onClick={() => window.location.reload()}>Try again</button></div>;

  return (
    <div className="dpu-app-root" data-theme={profile?.theme || "blueberry"}>
      <header className="dpu-app-topbar">
        <a className="dpu-app-brand" href="/"><span className="dpu-brand-burst">★</span><span>Daily Power Up!</span></a>
        <div className="dpu-topbar-right">
          <span className="dpu-beta-chip">Web beta</span>
          <span className="dpu-access-label">{directAccess ? "Teacher profile" : "Shared access"}</span>
          {!directAccess && <button className="dpu-icon-button dpu-signout" onClick={onSignOut} aria-label="Sign out" title="Sign out"><LogOut size={18} /></button>}
        </div>
      </header>
      <div className="dpu-app-frame">
        <aside className="dpu-sidebar">
          <div className="dpu-profile-switcher">
            <div className="dpu-profile-heading">Shared teacher profile</div>
            <div className="dpu-profile-select-row">
              <img src="/app-assets/avatars/29.png" alt="" className="dpu-avatar-small" />
              <span className="dpu-shared-profile-name">Teacher</span>
            </div>
            <small className="dpu-shared-profile-note">One profile on this browser</small>
          </div>
          <nav className="dpu-side-nav" aria-label="App sections">
            {navItems.map(({ id, label, icon: Icon }) => <button key={id} className={`dpu-nav-item ${screen === id ? "is-active" : ""}`} onClick={() => setScreen(id)}><Icon size={18} />{label}</button>)}
          </nav>
          {profile && <div className="dpu-sidebar-progress"><div className="dpu-progress-top"><Star size={17} fill="currentColor" /><strong>{profile.stars || 0}</strong><span>stars</span></div>{!profile.isTeacherMode && <div className="dpu-progress-bar"><span style={{ width: `${Math.min(100, ((profile.stars || 0) % 20) * 5)}%` }} /></div>}<small>{profile.streak || 0} day streak</small></div>}
          <div className="dpu-local-note">Saved on this browser<br />and this device</div>
        </aside>
        <main className="dpu-main">
          <>
              <div className="dpu-mobile-profile"><img src={`/app-assets/avatars/${profile.avatar || 1}.png`} alt="" /><span>{profile.name}</span><span className="dpu-streak-pill">🔥 {profile.streak || 0} day streak</span></div>
              {screen === "home" && <HomeScreen profile={profile} items={selectedItems} onBrowse={() => setScreen("browse")} onGuide={() => { setGuidePicks([]); setGuideTopics([]); setScreen("guide"); }} onPlay={() => startPlayer(selectedItems)} onPlayOne={(item) => startPlayer([item])} onRemove={(id) => toggleAffirmation(id, false)} onCustom={() => setCustomDialog(true)} />}
              {screen === "browse" && <BrowseScreen allItems={allItems} selectedIds={chosenIds} isTeacherMode={profile.isTeacherMode} category={category} setCategory={setCategory} query={query} setQuery={setQuery} onToggle={toggleAffirmation} onPlay={(item) => startPlayer([item])} />}
              {screen === "guide" && !profile.isTeacherMode && <GuidedScreen topics={guideTopics} setTopics={setGuideTopics} picks={guidePicks} chosen={guideChosen} setChosen={setGuideChosen} offset={guideOffset} onBuild={() => showGuidedPicks(0)} onRefresh={() => showGuidedPicks(guideOffset + 4)} onChangeTopics={() => setGuidePicks([])} onAdd={() => addMany(guideChosen)} onPlay={(item) => startPlayer([item])} />}
              {screen === "playlists" && <PlaylistsScreen profile={profile} playlistName={playlistName} setPlaylistName={setPlaylistName} onCreate={createPlaylist} onRemove={removePlaylist} onPlay={(ids) => startPlayer(ids.map((id) => allItems.find((item) => item.id === id)).filter(Boolean))} />}
              {screen === "settings" && <SettingsScreen profile={profile} updateProfile={updateProfile} />}
          </>
        </main>
      </div>
      <nav className="dpu-mobile-nav" aria-label="App sections" style={{ gridTemplateColumns: `repeat(${navItems.length}, minmax(0, 1fr))` }}>
        {navItems.map(({ id, label, icon: Icon }) => <button key={id} className={screen === id ? "is-active" : ""} onClick={() => setScreen(id)}><Icon size={19} /><span>{label}</span></button>)}
      </nav>
      {customDialog && profile && !profile.isTeacherMode && <CustomAffirmationDialog onClose={() => setCustomDialog(false)} onSave={(item) => { updateProfile({ customAffirmations: [...customItems, item], selectedIds: [...new Set([...chosenIds, item.id])] }); setCustomDialog(false); setToast("Your affirmation was added."); }} />}
      {playerTracks && <PlayerDialog tracks={playerTracks} onClose={() => setPlayerTracks(null)} onComplete={markPractice} />}
      {toast && <div className="dpu-toast" role="status"><Check size={17} />{toast}</div>}
    </div>
  );
}

function HomeScreen({ profile, items, onBrowse, onGuide, onPlay, onPlayOne, onRemove, onCustom }) {
  return (
    <>
      <div className="dpu-page-heading">
        <div><p className="dpu-eyebrow">A bright moment starts here</p><h1>Hi, {profile.name.split(" ")[0]} <span>✦</span></h1><p>{profile.isTeacherMode ? "Listen to a Teacher affirmation or play the whole collection." : "Pick a kind thought or listen to your whole collection."}</p></div>
        {!profile.isTeacherMode && <div className="dpu-heading-actions"><button className="dpu-button dpu-button-glass" onClick={onGuide}><Sparkles size={17} /> Guided picks</button><button className="dpu-button dpu-button-glass" onClick={onCustom}><Plus size={17} /> Add your own</button></div>}
      </div>
      {!profile.isTeacherMode && <div className="dpu-home-banner">
        <div className="dpu-home-banner-copy"><span className="dpu-banner-icon"><Star size={26} fill="currentColor" /></span><div><strong>{profile.stars || 0} stars</strong><span>{(profile.stars || 0) >= 100 ? "Confidence Champion" : "Every kind thought counts"}</span></div></div>
        <div className="dpu-banner-streak"><span>🔥</span><strong>{profile.streak || 0}</strong><span>day streak</span></div>
        <div className="dpu-banner-progress"><span style={{ width: `${Math.min(100, ((profile.stars || 0) % 20) * 5)}%` }} /></div>
      </div>}
      <button className="dpu-start-listening" onClick={items.length ? onPlay : onBrowse}>
        <span className="dpu-start-play"><Play size={24} fill="currentColor" /></span><span className="dpu-start-copy"><strong>{items.length ? "Start listening" : "Build your list"}</strong><small>{items.length ? `${items.length} kind ${items.length === 1 ? "thought" : "thoughts"} to say` : "Choose affirmations that feel right for you"}</small></span><span className="dpu-start-arrow">{items.length ? "About " + Math.max(1, Math.round(items.length * 0.14)) + " min" : "Browse the library"}</span>
      </button>
      <section className="dpu-content-section">
        <div className="dpu-section-heading"><div><h2>{profile.isTeacherMode ? "Teacher affirmations" : "Your kind thoughts"}</h2><p>{items.length ? (profile.isTeacherMode ? `${items.length} predefined affirmations` : `${items.length} in your collection`) : "Your collection is ready for its first affirmation."}</p></div><button className="dpu-text-button" onClick={onBrowse}>Browse all <ArrowLeft className="dpu-arrow-right" size={16} /></button></div>
        {items.length ? <div className="dpu-affirmation-grid">{items.map((item) => <AffirmationCard key={item.id} item={item} selected canEdit={!profile.isTeacherMode} onToggle={() => onRemove(item.id)} onPlay={() => onPlayOne(item)} />)}</div> : profile.isTeacherMode ? <div className="dpu-empty-list"><strong>Teacher affirmations aren't available right now.</strong><p>Refresh the page to try loading them again.</p></div> : <div className="dpu-empty-list"><div className="dpu-empty-orbit"><Sparkles /></div><div><strong>Let's add a few kind thoughts.</strong><p>Pick your own or let us choose a helpful starting set.</p></div><div className="dpu-empty-actions"><button className="dpu-button dpu-button-primary" onClick={onGuide}><Sparkles size={17} /> Guide me</button><button className="dpu-button dpu-button-glass" onClick={onBrowse}>Pick my own</button></div></div>}
      </section>
    </>
  );
}

function BrowseScreen({ allItems, selectedIds, isTeacherMode, category, setCategory, query, setQuery, onToggle, onPlay }) {
  const visible = allItems.filter((item) => (category === "All" || item.category === category) && (!query || item.text.toLowerCase().includes(query.toLowerCase())));
  return (
    <section className="dpu-library-screen">
      <div className="dpu-page-heading"><div><p className="dpu-eyebrow">Find words that fit today</p><h1>Browse affirmations</h1><p>{isTeacherMode ? "Explore the predefined affirmations in the Teacher profile." : "Choose a topic, then add anything you like to your list."}</p></div><span className="dpu-count-pill">{allItems.length} affirmations</span></div>
      <div className="dpu-category-bar"><div className="dpu-category-label">Choose a topic</div><div className="dpu-category-chips"><button className={category === "All" ? "is-selected" : ""} onClick={() => setCategory("All")}>All topics</button>{TOPICS.map((topic) => { const Icon = topic.icon; return <button key={topic.name} className={category === topic.name ? "is-selected" : ""} onClick={() => setCategory(topic.name)}><Icon size={16} />{topic.name}</button>; })}</div></div>
      <label className="dpu-search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search affirmations" /><span>{visible.length} shown</span></label>
      {visible.length ? <div className="dpu-affirmation-grid">{visible.map((item) => <AffirmationCard key={item.id} item={item} selected={selectedIds.includes(item.id)} canEdit={!isTeacherMode} onToggle={() => onToggle(item.id, !selectedIds.includes(item.id))} onPlay={() => onPlay(item)} />)}</div> : <div className="dpu-empty-list"><strong>No affirmations found.</strong><p>Try another word or topic.</p></div>}
    </section>
  );
}

function GuidedScreen({ topics, setTopics, picks, chosen, setChosen, offset, onBuild, onRefresh, onChangeTopics, onAdd, onPlay }) {
  const isShowingPicks = picks.length > 0;
  function toggleTopic(topic) { setTopics((current) => current.includes(topic) ? current.filter((item) => item !== topic) : [...current, topic]); }
  function togglePick(id) { setChosen((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]); }
  return (
    <section className="dpu-guide-screen">
      <div className="dpu-page-heading"><div><p className="dpu-eyebrow">A gentle place to start</p><h1>{isShowingPicks ? "Guided picks" : "What would help today?"}</h1><p>{isShowingPicks ? "Here are a few ideas. Remove any you don't want." : "Choose a few topics and we'll suggest affirmations to get you started."}</p></div>{isShowingPicks && <button className="dpu-button dpu-button-glass" onClick={onChangeTopics}>Change topics</button>}</div>
      {!isShowingPicks ? (
        <>
          <div className="dpu-topic-grid">{TOPICS.map((topic) => { const Icon = topic.icon; const active = topics.includes(topic.name); return <button key={topic.name} className={`dpu-topic-card ${active ? "is-selected" : ""}`} onClick={() => toggleTopic(topic.name)}><span className="dpu-topic-icon"><Icon size={24} /></span><span className="dpu-topic-copy"><strong>{topic.name === "Building Resilience" ? "Grow through tough times" : topic.name === "Self Esteem" ? "Feel proud of me" : topic.name === "Body Image" ? "Feel good in my body" : topic.name === "Anxiety" ? "Quiet my worries" : topic.name === "School" ? "Feel confident at school" : topic.name === "Sports" ? "Feel strong in sports" : "Rest easy at bedtime"}</strong><small>{topic.description}</small></span><span className="dpu-topic-check">{active && <Check size={17} />}</span></button>; })}</div>
          <button className="dpu-button dpu-button-primary dpu-guide-continue" onClick={onBuild} disabled={!topics.length}><Sparkles size={18} /> Show my picks <span>({topics.length} {topics.length === 1 ? "topic" : "topics"})</span></button>
        </>
      ) : (
        <>
          <div className="dpu-picks-toolbar"><span>Suggested from {topics.join(", ")}</span><button className="dpu-text-button" onClick={onRefresh}>See different picks <Sparkles size={16} /></button></div>
          <div className="dpu-pick-list">{picks.map((item) => <SelectableAffirmation key={item.id} item={item} selected={chosen.includes(item.id)} onToggle={() => togglePick(item.id)} onPlay={() => onPlay(item)} />)}</div>
          <div className="dpu-sticky-action"><button className="dpu-button dpu-button-add-large" onClick={onAdd} disabled={!chosen.length}>Add {chosen.length} to My List</button></div>
        </>
      )}
      {!isShowingPicks && <p className="dpu-local-note dpu-inline-note">You can change or remove these any time.</p>}
    </section>
  );
}

function AffirmationCard({ item, selected, canEdit = true, onToggle, onPlay }) {
  const Icon = getTopicIcon(item.category);
  return (
    <article className="dpu-affirmation-card">
      <div className="dpu-card-top"><span className={`dpu-category-icon category-${slug(item.category)}`}><Icon size={20} /></span><span className="dpu-card-category">{item.category}</span><button className="dpu-play-button" onClick={onPlay} aria-label={`Play ${item.text}`}><Play size={17} fill="currentColor" /></button></div>
      <p>{item.text}</p>
      {canEdit && <button className={`dpu-card-toggle ${selected ? "is-added" : ""}`} onClick={onToggle}>{selected ? <><Check size={15} /> In My List</> : <><Plus size={15} /> Add to My List</>}</button>}
    </article>
  );
}

function SelectableAffirmation({ item, selected, onToggle, onPlay }) {
  const Icon = getTopicIcon(item.category);
  return <div className={`dpu-selectable-row ${selected ? "is-selected" : ""}`}><button className="dpu-row-check" onClick={onToggle} aria-label={selected ? "Remove from picks" : "Select affirmation"}>{selected && <Check size={17} />}</button><span className={`dpu-category-icon category-${slug(item.category)}`}><Icon size={18} /></span><p>{item.text}</p><button className="dpu-row-play" onClick={onPlay} aria-label={`Play ${item.text}`}><Play size={16} fill="currentColor" /></button></div>;
}

function PlaylistsScreen({ profile, playlistName, setPlaylistName, onCreate, onRemove, onPlay }) {
  const playlists = profile.playlists || [];
  return <section className="dpu-playlist-screen"><div className="dpu-page-heading"><div><p className="dpu-eyebrow">A little routine for any moment</p><h1>Playlists</h1><p>Group the affirmations you want to hear together.</p></div></div><form className="dpu-create-playlist" onSubmit={onCreate}><label htmlFor="playlist-name">New playlist</label><div><input id="playlist-name" value={playlistName} onChange={(event) => setPlaylistName(event.target.value)} placeholder="Morning confidence" required /><button className="dpu-button dpu-button-primary" type="submit" disabled={!profile.selectedIds?.length}><Plus size={17} /> Create from My List</button></div><small>A new playlist starts with the affirmations in this profile's list.</small></form>{playlists.length ? <div className="dpu-playlist-grid">{playlists.map((list) => <article className="dpu-playlist-card" key={list.id}><div className="dpu-playlist-art"><ListMusic size={30} /></div><strong>{list.name}</strong><span>{list.ids.length} affirmations</span><div><button className="dpu-button dpu-button-primary" onClick={() => onPlay(list.ids)} disabled={!list.ids.length}><Play size={16} fill="currentColor" /> Play</button><button className="dpu-icon-button" onClick={() => onRemove(list.id)} aria-label={`Delete ${list.name}`}><X size={18} /></button></div></article>)}</div> : <div className="dpu-empty-list"><div className="dpu-empty-orbit"><ListMusic /></div><strong>No playlists yet</strong><p>Add a few affirmations to My List, then name your first playlist.</p></div>}</section>;
}

function SettingsScreen({ profile, updateProfile }) {
  return (
    <section className="dpu-settings-screen">
      <div className="dpu-page-heading">
        <div>
          <p className="dpu-eyebrow">Make this space yours</p>
          <h1>Profile settings</h1>
          <p>Choose a color theme for the shared teacher profile.</p>
        </div>
      </div>
      <div className="dpu-settings-panel">
        <div className="dpu-settings-profile">
          <img src="/app-assets/avatars/29.png" alt="" />
          <div><strong>Teacher</strong><span>One shared profile on this browser</span></div>
        </div>
        <div className="dpu-settings-section-title">Themes</div>
        <div className="dpu-theme-grid">{THEMES.map((theme) => <button key={theme.id} className={`dpu-theme-option ${profile.theme === theme.id ? "is-selected" : ""}`} onClick={() => updateProfile({ theme: theme.id })}><span style={{ background: theme.color }}><span /></span><small>{theme.name}</small></button>)}</div>
      </div>
      <div className="dpu-local-note dpu-settings-note">This browser keeps its own local copy of the shared teacher profile. Its changes do not sync to other devices.</div>
    </section>
  );
}

function CustomAffirmationDialog({ onClose, onSave }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Self Esteem");
  function submit(event) {
    event.preventDefault();
    const clean = text.trim();
    if (!clean) return;
    onSave({ id: crypto.randomUUID(), category, categoryIcon: "heart", text: clean, audioSrc: null, custom: true });
  }
  return <div className="dpu-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><form className="dpu-modal" onSubmit={submit}><button type="button" className="dpu-modal-close" onClick={onClose} aria-label="Close"><X /></button><p className="dpu-eyebrow">Words that feel like you</p><h2>Add your own affirmation</h2><label className="dpu-field-label" htmlFor="custom-text">Your affirmation</label><textarea id="custom-text" autoFocus value={text} onChange={(event) => setText(event.target.value)} placeholder="I am learning and growing every day." maxLength={180} required /><label className="dpu-field-label" htmlFor="custom-category">Topic</label><select id="custom-category" value={category} onChange={(event) => setCategory(event.target.value)}>{TOPICS.map((item) => <option key={item.name}>{item.name}</option>)}</select><div className="dpu-modal-actions"><button type="button" className="dpu-button dpu-button-glass" onClick={onClose}>Cancel</button><button type="submit" className="dpu-button dpu-button-primary">Add affirmation</button></div></form></div>;
}

function PlayerDialog({ tracks, onClose, onComplete }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("playing");
  const [practiceMessage, setPracticeMessage] = useState("");
  const [completed, setCompleted] = useState([]);
  const [repeatRemaining, setRepeatRemaining] = useState(0);
  const [repeatToken, setRepeatToken] = useState(0);
  const audioRef = useRef(null);
  const item = tracks[index];
  const repeatDuration = repeatWindowFor(item?.text || "");

  function nextTrack() {
    setPracticeMessage("");
    setRepeatRemaining(0);
    if (index < tracks.length - 1) {
      setIndex((current) => current + 1);
      setPhase("playing");
    } else {
      setPhase("ready");
    }
  }

  function startRepeatWindow() {
    if (!item) return;
    setPracticeMessage("");
    setRepeatRemaining(repeatDuration);
    setRepeatToken((current) => current + 1);
    setPhase("repeat");
  }

  useEffect(() => {
    if (!item || phase !== "playing") return undefined;
    let cancelled = false;
    let utterance = null;
    const fallbackSpeech = () => {
      if (cancelled) return;
      if (!window.speechSynthesis) {
        setPracticeMessage("Audio isn't available here. Read the affirmation while the timer runs.");
        setRepeatRemaining(repeatWindowFor(item.text));
        setRepeatToken((current) => current + 1);
        setPhase("repeat");
        return;
      }
      window.speechSynthesis.cancel();
      utterance = new SpeechSynthesisUtterance(item.text);
      utterance.rate = 0.86;
      utterance.onend = () => {
        if (cancelled) return;
        setPracticeMessage("");
        setRepeatRemaining(repeatWindowFor(item.text));
        setRepeatToken((current) => current + 1);
        setPhase("repeat");
      };
      window.speechSynthesis.speak(utterance);
    };
    if (item.audioSrc) {
      const audio = new Audio(item.audioSrc);
      audioRef.current = audio;
      audio.onended = () => {
        if (cancelled) return;
        setPracticeMessage("");
        setRepeatRemaining(repeatWindowFor(item.text));
        setRepeatToken((current) => current + 1);
        setPhase("repeat");
      };
      audio.onerror = fallbackSpeech;
      audio.play().catch(fallbackSpeech);
    } else fallbackSpeech();
    return () => {
      cancelled = true;
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
    // Playback starts again intentionally whenever the affirmation or player phase changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.id, phase]);

  useEffect(() => {
    if (phase !== "repeat" || !item) return undefined;
    const endsAt = Date.now() + repeatDuration;
    setRepeatRemaining(repeatDuration);
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, endsAt - Date.now());
      setRepeatRemaining(remaining);
      if (remaining > 0) return;
      window.clearInterval(timer);
      if (index < tracks.length - 1) {
        setPracticeMessage("");
        setIndex((current) => current + 1);
        setPhase("playing");
      } else {
        setPracticeMessage("Great practice. You can listen again whenever you're ready.");
        setPhase("ready");
      }
    }, 100);
    return () => window.clearInterval(timer);
    // The repeat token restarts the countdown when someone asks for more time.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, item?.id, repeatToken]);

  function completeOnce() {
    if (!completed.includes(item.id)) {
      setCompleted((current) => [...current, item.id]);
      onComplete();
    }
    setPracticeMessage("You did it! A star for practicing this thought.");
  }

  function repeatAfterMe() {
    startRepeatWindow();
  }

  if (!item) return null;
  const Icon = getTopicIcon(item.category);
  const progress = repeatDuration ? (repeatRemaining / repeatDuration) * 100 : 0;
  const countdownLabel = phase === "playing" ? "Pause" : phase === "paused" ? "Play affirmation" : "Listen again";
  return <div className="dpu-modal-backdrop dpu-player-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><section className="dpu-player-modal" role="dialog" aria-modal="true" aria-label="Affirmation player"><button className="dpu-modal-close" onClick={onClose} aria-label="Close player"><X /></button><span className={`dpu-category-icon dpu-player-category category-${slug(item.category)}`}><Icon size={21} /></span><p className="dpu-eyebrow">{item.category} · {index + 1} of {tracks.length}</p><h2>{item.text}</h2><div className="dpu-player-actions"><button className="dpu-player-control" onClick={() => setPhase(phase === "playing" ? "paused" : "playing")}>{phase === "playing" ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}{countdownLabel}</button><button className="dpu-player-control dpu-player-repeat" onClick={repeatAfterMe}><Repeat size={20} />{phase === "repeat" ? "More time" : "Listen & repeat"}</button></div>{phase === "repeat" ? <div className="dpu-repeat-timer"><div className="dpu-repeat-timer-heading"><strong>Your turn to repeat</strong><span aria-live="polite">{Math.ceil(repeatRemaining / 1000)} sec</span></div><div className="dpu-repeat-timer-track" role="progressbar" aria-label="Time to repeat the affirmation" aria-valuemin={0} aria-valuemax={repeatDuration} aria-valuenow={repeatRemaining}><span style={{ width: `${progress}%` }} /></div><p>{practiceMessage || "Say the affirmation out loud before the next one plays."}</p></div> : <div className="dpu-repeat-feedback" aria-live="polite">{practiceMessage || "Listen, then repeat this affirmation out loud."}</div>}<button className="dpu-button dpu-button-add-large dpu-said-it" onClick={completeOnce} disabled={completed.includes(item.id) || phase === "playing" || phase === "paused"}>{completed.includes(item.id) ? <><Check size={19} /> Star earned</> : "I said it!"}</button><div className="dpu-player-footer"><span>{item.audioSrc ? <><Volume2 size={15} /> Recorded audio</> : <><Volume2 size={15} /> Device voice</>}</span>{tracks.length > 1 && <button onClick={nextTrack}>{index < tracks.length - 1 ? "Next affirmation" : "Finish session"} <ArrowLeft className="dpu-arrow-right" size={15} /></button>}</div></section></div>;
}

function repeatWindowFor(text) {
  const wordCount = String(text).trim().split(/\s+/).filter(Boolean).length;
  return Math.min(12000, Math.max(6500, wordCount * 450));
}

function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
