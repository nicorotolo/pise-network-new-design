// =====================================================================
// DIRECTION A — Modern Academic
// LSE / Stanford / United Italian Societies feel.
// Red accent (Ca' Foscari), generous white space, clean grotesk type,
// thin rules, modular grid. Photography-forward but restrained.
// =====================================================================

const A_COPY = {
  en: {
    nav: ["Home", "About", "Events", "Editorial", "Collaborate"],
    join: "Join the network",
    heroEyebrow: "Ca' Foscari University of Venice — Bachelor's Programme",
    heroTitle: "Where philosophy, international studies and economics meet the world.",
    heroBody:
    "PISE Network is the student and alumni community of Ca' Foscari's PISE programme. We bring together students, graduates, academics and professionals through events, editorial work, and mentorship.",
    primaryCta: "Become a member",
    secondaryCta: "Read our editorial",
    statsLabel: "The network in numbers",
    upcomingLabel: "Upcoming",
    upcomingTitle: "PISE Days 2026 — three days of talks to unlock innovation",
    upcomingMeta: "April 15–17, 2026 · Ca' Foscari University, Venice",
    upcomingBody:
    "With guest speakers from LSE, King's College, Crédit Agricole Italia, KPMG, MAG, Bank of Italy and more.",
    upcomingCta: "See full programme",
    pillarsTitle: "What we do",
    pillars: [
    {
      n: "01", sym: "◐",
      t: "Public events & roundtables",
      d: "Talks with academics, professionals, institutions and alumni — in Venice and beyond."
    },
    {
      n: "02", sym: "§",
      t: "Editorial",
      d: "Student-led writing on politics, economics, society and international affairs."
    },
    {
      n: "03", sym: "◐",
      t: "Mentorship",
      d: "One-to-one guidance between current students and graduates working across sectors."
    },
    {
      n: "04", sym: "✱",
      t: "Collaboration",
      d: "Support for student-led initiatives within and around the PISE community."
    }],

    editorialLabel: "Latest from the editorial",
    editorialMore: "All articles",
    eventsLabel: "Upcoming events",
    eventsMore: "Full calendar",
    joinLabel: "Become part of it",
    joinTitle: "The PISE experience is bigger than the classroom.",
    joinBody:
    "Join 300+ students and alumni building careers across Italy, Europe and beyond — and contribute to a community that turns academic work into real conversations.",
    joinPrimary: "Apply to join",
    joinSecondary: "Talk to us"
  }
};

const A_ARTICLES = [
{
  cat: "International Affairs",
  title: "Mediterranean migration and the limits of European policy",
  author: "Giulia Marchetti",
  date: "Apr 12, 2026",
  read: "8 min"
},
{
  cat: "Economics",
  title: "Why Italy's productivity gap won't close on its own",
  author: "Luca Romano",
  date: "Apr 04, 2026",
  read: "11 min"
},
{
  cat: "Philosophy",
  title: "On punishment: a conversation with Lewis Ross",
  author: "Editorial Board",
  date: "Mar 28, 2026",
  read: "6 min"
}];


const A_EVENTS = [
{
  date: { d: "16", m: "Apr" },
  title: "Crime, Punishment and Forgiveness",
  speaker: "Lewis Ross — Associate Professor, LSE",
  where: "Aula Silvio Trentin, Ca' Dolfin",
  time: "11:30 — 13:00",
  tag: "Philosophy"
},
{
  date: { d: "16", m: "Apr" },
  title: "Innovare tra pubblico e privato",
  speaker: "Di Biagi · Strummiello · Fuorlo — Le Village, MAG, KPMG",
  where: "Aula Silvio Trentin, Ca' Dolfin",
  time: "14:30 — 16:00",
  tag: "Economics"
},
{
  date: { d: "16", m: "Apr" },
  title: "L'America's Cup a Napoli",
  speaker: "Valeria Panzironi · Dino Falconio",
  where: "Aula Silvio Trentin, Ca' Dolfin",
  time: "16:30 — 18:00",
  tag: "Society"
}];


const A_STATS = [
{ n: "300+", l: "Students & alumni" },
{ n: "40+", l: "Events since 2022" },
{ n: "24", l: "Editorial contributors" },
{ n: "12", l: "Partner institutions" }];


// ---- Building blocks --------------------------------------------------

function ANav({ active = "Home", lang, setLang }) {
  return (
    <header className="a-nav">
      <div className="a-nav-inner">
        <a className="a-brand" href="#">
          <Wordmark size={22} tone="dark" accent="var(--a-accent)" />
        </a>
        <nav className="a-links">
          {A_COPY.en.nav.map((n) =>
          <a key={n} href="#" className={"a-link " + (n === active ? "is-active" : "")}>
              {n}
            </a>
          )}
        </nav>
        <div className="a-nav-right">
          <button className="a-lang" onClick={() => setLang(lang === "en" ? "it" : "en")}>
            <span className={lang === "en" ? "on" : "off"}>EN</span>
            <span className="sep">/</span>
            <span className={lang === "it" ? "on" : "off"}>IT</span>
          </button>
          <a className="a-btn a-btn-primary" href="#">
            {A_COPY.en.join} <span className="a-arrow">→</span>
          </a>
        </div>
      </div>
    </header>);

}

// Hero — three variants cycled by tweak
function AHero({ variant = 0 }) {
  if (variant === 0) {
    // Classic editorial: text left, photo right
    return (
      <section className="a-hero a-hero-v0">
        <div className="a-hero-grid">
          <div className="a-hero-text">
            <div className="a-eyebrow">{A_COPY.en.heroEyebrow}</div>
            <h1 className="a-h1">{A_COPY.en.heroTitle}</h1>
            <p className="a-lead">{A_COPY.en.heroBody}</p>
            <div className="a-cta-row">
              <a className="a-btn a-btn-primary a-btn-lg" href="#">
                {A_COPY.en.primaryCta} <span className="a-arrow">→</span>
              </a>
              <a className="a-btn a-btn-ghost a-btn-lg" href="#">
                {A_COPY.en.secondaryCta}
              </a>
            </div>
          </div>
          <div className="a-hero-media">
            <img src="assets/san-marco.jpeg" alt="PISE graduates in Piazza San Marco, Venice" />
            <span className="a-anno a-anno-note a-anno-hero-note">our 2025 cohort,<br/>Piazza San Marco ↘</span>
            <div className="a-hero-caption">
              <span>Graduation ceremony · Piazza San Marco</span>
            </div>
          </div>
        </div>
      </section>);

  }
  if (variant === 1) {
    // Full-bleed photo with text overlay bottom-left
    return (
      <section className="a-hero a-hero-v1">
        <div className="a-hero-photo">
          <img src="assets/san-marco.jpeg" alt="PISE graduates in Piazza San Marco" />
          <div className="a-hero-overlay" />
          <div className="a-hero-caption-photo">Piazza San Marco · 2025 cohort</div>
        </div>
        <div className="a-hero-text-overlay">
          <div className="a-eyebrow a-eyebrow-light">{A_COPY.en.heroEyebrow}</div>
          <h1 className="a-h1 a-h1-light">{A_COPY.en.heroTitle}</h1>
          <div className="a-cta-row">
            <a className="a-btn a-btn-primary a-btn-lg" href="#">
              {A_COPY.en.primaryCta} <span className="a-arrow">→</span>
            </a>
            <a className="a-btn a-btn-ghost-light a-btn-lg" href="#">
              {A_COPY.en.secondaryCta}
            </a>
          </div>
        </div>
      </section>);

  }
  // Variant 2: typographic, no photo
  return (
    <section className="a-hero a-hero-v2">
      <div className="a-hero-typo">
        <div className="a-eyebrow">{A_COPY.en.heroEyebrow}</div>
        <h1 className="a-h1-xl">
          Where <em>philosophy</em>, international studies and economics meet the world.
        </h1>
        <div className="a-hero-side">
          <p className="a-lead a-lead-narrow">{A_COPY.en.heroBody}</p>
          <div className="a-cta-row">
            <a className="a-btn a-btn-primary a-btn-lg" href="#">
              {A_COPY.en.primaryCta} <span className="a-arrow">→</span>
            </a>
            <a className="a-btn a-btn-ghost a-btn-lg" href="#">
              {A_COPY.en.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>);

}

function AStats() {
  return (
    <section className="a-stats">
      <div className="a-section-head">
        <span className="a-section-label">{A_COPY.en.statsLabel}</span>
      </div>
      <div className="a-stats-grid">
        {A_STATS.map((s) =>
        <div key={s.l} className="a-stat">
            <div className="a-stat-n">{s.n}</div>
            <div className="a-stat-l">{s.l}</div>
          </div>
        )}
      </div>
    </section>);

}

function AFeatured() {
  return (
    <section className="a-featured">
      <div className="a-section-head">
        <span className="a-section-label">{A_COPY.en.upcomingLabel}</span>
        <a className="a-section-more" href="#">All events <span className="a-arrow">→</span></a>
      </div>
      <div className="a-featured-card">
        <div className="a-featured-text">
          <div className="a-feat-meta">{A_COPY.en.upcomingMeta}</div>
          <h2 className="a-h2">{A_COPY.en.upcomingTitle}</h2>
          <p className="a-feat-body">{A_COPY.en.upcomingBody}</p>
          <div className="a-feat-partners">
            <span>LSE</span>
            <span>·</span>
            <span>King's College</span>
            <span>·</span>
            <span>Crédit Agricole</span>
            <span>·</span>
            <span>KPMG</span>
            <span>·</span>
            <span>MAG</span>
            <span>·</span>
            <span>Bank of Italy</span>
          </div>
          <a className="a-btn a-btn-primary" href="#">
            {A_COPY.en.upcomingCta} <span className="a-arrow">→</span>
          </a>
        </div>
        <div className="a-featured-aside">
          <div className="a-feat-day">
            <span className="a-feat-day-num">15<span className="a-feat-day-sep">—</span>17</span>
            <span className="a-feat-day-month">April 2026</span>
          </div>
          <div className="a-feat-where">
            <span className="a-feat-label">Where</span>
            <span>Ca' Foscari University<br />Venice</span>
          </div>
          <div className="a-feat-where">
            <span className="a-feat-label">Format</span>
            <span>3 days · 9 talks · open to all</span>
          </div>
        </div>
      </div>
    </section>);

}

function APillarMark({ i }) {
  // Tiny editorial marks — each conveys the pillar's meaning. Red, hand-drawn-ish.
  const c = "var(--a-accent)";
  if (i === 0) return (
    <svg viewBox="0 0 40 40" width="40" height="40" className="a-pillar-svg" aria-hidden="true">
      <circle cx="20" cy="20" r="15" fill="none" stroke={c} strokeWidth="1.4" />
      <circle cx="13" cy="18" r="2.2" fill={c} />
      <circle cx="22" cy="15" r="2.2" fill={c} />
      <circle cx="27" cy="24" r="2.2" fill={c} />
      <path d="M13 18 L22 15 L27 24" stroke={c} strokeWidth="1" fill="none" />
    </svg>);
  if (i === 1) return (
    <svg viewBox="0 0 40 40" width="40" height="40" className="a-pillar-svg" aria-hidden="true">
      <rect x="8" y="8" width="24" height="24" fill="none" stroke={c} strokeWidth="1.4" />
      <line x1="12" y1="14" x2="28" y2="14" stroke={c} strokeWidth="1.2" />
      <line x1="12" y1="19" x2="24" y2="19" stroke={c} strokeWidth="1.2" />
      <line x1="12" y1="24" x2="28" y2="24" stroke={c} strokeWidth="1.2" />
      <line x1="12" y1="29" x2="20" y2="29" stroke={c} strokeWidth="1.2" />
    </svg>);
  if (i === 2) return (
    <svg viewBox="0 0 40 40" width="40" height="40" className="a-pillar-svg" aria-hidden="true">
      <circle cx="14" cy="16" r="5" fill="none" stroke={c} strokeWidth="1.4" />
      <circle cx="26" cy="24" r="5" fill="none" stroke={c} strokeWidth="1.4" />
      <path d="M18 19 L22 21" stroke={c} strokeWidth="1.4" />
      <path d="M14 22 v6" stroke={c} strokeWidth="1.2" />
      <path d="M26 12 v6" stroke={c} strokeWidth="1.2" />
    </svg>);
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" className="a-pillar-svg" aria-hidden="true">
      <circle cx="20" cy="20" r="4" fill={c} />
      <circle cx="20" cy="20" r="11" fill="none" stroke={c} strokeWidth="1.2" strokeDasharray="2 3" />
      <line x1="20" y1="4" x2="20" y2="9" stroke={c} strokeWidth="1.4" />
      <line x1="20" y1="31" x2="20" y2="36" stroke={c} strokeWidth="1.4" />
      <line x1="4" y1="20" x2="9" y2="20" stroke={c} strokeWidth="1.4" />
      <line x1="31" y1="20" x2="36" y2="20" stroke={c} strokeWidth="1.4" />
    </svg>);

}

function APillars() {
  return (
    <section className="a-pillars">
      <div className="a-section-head">
        <span className="a-section-label">{A_COPY.en.pillarsTitle}</span>
      </div>
      <div className="a-pillars-grid">
        {A_COPY.en.pillars.map((p, i) =>
        <div key={p.n} className="a-pillar">
            <div className="a-pillar-rule" />
            <div className="a-pillar-head">
              <span className="a-pillar-n">{p.n}</span>
              <APillarMark i={i} />
            </div>
            <h3 className="a-pillar-t">{p.t}</h3>
            <svg className="a-pillar-flourish" viewBox="0 0 90 8" width="60" height="8" aria-hidden="true">
              <path d="M0 4 Q 15 0, 30 4 T 60 4 T 90 4" stroke="currentColor" strokeWidth="0.9" fill="none"/>
            </svg>
            <p className="a-pillar-d">{p.d}</p>
            <div className="a-pillar-foot">
              <span className="a-pillar-tag">{["Talks", "Writing", "1:1", "Projects"][i]}</span>
              <span className="a-pillar-cta">{["see all →", "submit →", "apply →", "join →"][i]}</span>
            </div>
          </div>
        )}
      </div>
    </section>);

}

function AEditorial() {
  return (
    <section className="a-editorial">
      <span className="a-anno a-anno-circle a-anno-editorial-circle">new<br/>this<br/>week</span>
      <div className="a-section-head">
        <span className="a-section-label">{A_COPY.en.editorialLabel}</span>
        <a className="a-section-more" href="#">{A_COPY.en.editorialMore} <span className="a-arrow">→</span></a>
      </div>
      <div className="a-articles">
        {A_ARTICLES.map((a, i) =>
        <article key={i} className="a-article">
            <div className="a-art-cat">{a.cat}</div>
            <h3 className="a-art-title">{a.title}</h3>
            <div className="a-art-meta">
              <span>{a.author}</span>
              <span className="a-dot">·</span>
              <span>{a.date}</span>
              <span className="a-dot">·</span>
              <span>{a.read}</span>
            </div>
          </article>
        )}
      </div>
    </section>);

}

function AEvents() {
  return (
    <section className="a-events">
      <div className="a-section-head">
        <span className="a-section-label">{A_COPY.en.eventsLabel}</span>
        <a className="a-section-more" href="#">{A_COPY.en.eventsMore} <span className="a-arrow">→</span></a>
      </div>
      <ul className="a-event-list">
        {A_EVENTS.map((e, i) =>
        <li key={i} className="a-event-row">
            <div className="a-event-date">
              <span className="a-event-d">{e.date.d}</span>
              <span className="a-event-m">{e.date.m}</span>
            </div>
            <div className="a-event-main">
              <div className="a-event-tag">{e.tag}</div>
              <h3 className="a-event-title">{e.title}</h3>
              <div className="a-event-speaker">{e.speaker}</div>
            </div>
            <div className="a-event-meta">
              <div>{e.time}</div>
              <div className="a-event-where">{e.where}</div>
            </div>
            <div className="a-event-cta">
              <span className="a-arrow-large">→</span>
            </div>
          </li>
        )}
      </ul>
    </section>);

}

function AJoin() {
  return (
    <section className="a-join">
      <div className="a-join-inner">
        <span className="a-section-label a-join-label">{A_COPY.en.joinLabel}</span>
        <h2 className="a-h2 a-join-title">{A_COPY.en.joinTitle}</h2>
        <p className="a-join-body">{A_COPY.en.joinBody}</p>
        <div className="a-cta-row">
          <a className="a-btn a-btn-primary a-btn-lg" href="#">
            {A_COPY.en.joinPrimary} <span className="a-arrow">→</span>
          </a>
          <a className="a-btn a-btn-ghost a-btn-lg" href="#">
            {A_COPY.en.joinSecondary}
          </a>
        </div>
      </div>
    </section>);

}

function APhotoStrip() {
  // Editorial-style photo carousel of past events. Photo crops are
  // simulated with layered gradients + a stamped date/location.
  const photos = [
    { d: "21·03·2026", loc: "Aula Magna", tag: "Talk", h: "212 38 64", s: "245 233 218" },
    { d: "07·03·2026", loc: "Sala San Sebastiano", tag: "Roundtable", h: "29 50 76", s: "230 216 200" },
    { d: "14·02·2026", loc: "PISE Library", tag: "Editorial", h: "108 70 58", s: "238 230 215" },
    { d: "30·01·2026", loc: "Aula Baratto", tag: "Lecture", h: "200 50 90", s: "230 218 196" },
    { d: "15·01·2026", loc: "Cortile Grande", tag: "Workshop", h: "60 38 80", s: "240 224 200" },
    { d: "12·12·2025", loc: "Ca' Bottacin", tag: "Talk", h: "10 38 70", s: "232 220 205" },
  ];
  return (
    <section className="a-photostrip">
      <div className="a-photostrip-head">
        <span className="a-section-label">In pictures</span>
        <a className="a-section-more" href="#">Photo archive <span className="a-arrow">→</span></a>
      </div>
      <div className="a-photostrip-track">
        {photos.map((p, i) => (
          <figure key={i} className="a-photo-card" style={{
            background: `linear-gradient(${135 + i*8}deg, rgb(${p.s}) 0%, rgb(${p.h}) 100%)`,
          }}>
            <div className="a-photo-grain" />
            <span className="a-photo-tag">{p.tag}</span>
            <div className="a-photo-meta">
              <div className="a-photo-date">{p.d}</div>
              <div className="a-photo-loc">{p.loc}</div>
            </div>
            <div className="a-photo-corners">
              <span /><span /><span /><span />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

function APastCarousel() {
  const items = [
    { d: "21 Mar", title: "AI, automation and European labour", speaker: "Prof. Sofia Bianchi · Bocconi", tag: "Economics" },
    { d: "07 Mar", title: "Foreign policy after Ukraine", speaker: "Amb. Stefano Pontecorvo (ret.)", tag: "International" },
    { d: "14 Feb", title: "Reading Hannah Arendt today", speaker: "Editorial board roundtable", tag: "Philosophy" },
    { d: "30 Jan", title: "Italy & the new EU fiscal rules", speaker: "Prof. Lorenzo Codogno · LSE", tag: "Economics" },
    { d: "15 Jan", title: "Climate, conflict, migration", speaker: "Dr. Anna Triandafyllidou", tag: "Society" },
  ];
  return (
    <section className="a-past-carousel">
      <span className="a-anno a-anno-stamp a-anno-past-stamp">recap<br/>archive '24–'25</span>
      <div className="a-section-head">
        <span className="a-section-label">Past events · Recap</span>
        <a className="a-section-more" href="#">Archive <span className="a-arrow">→</span></a>
      </div>
      <div className="a-past-track">
        {items.map((it, i) => (
          <article key={i} className="a-past-card">
            <div className="a-past-thumb" style={{ background: `linear-gradient(135deg, hsl(${(i*48)%360} 20% 82%), hsl(${(i*48+30)%360} 22% 70%))` }}>
              <span className="a-past-thumb-tag">{it.tag}</span>
            </div>
            <div className="a-past-d">{it.d}</div>
            <h3 className="a-past-t">{it.title}</h3>
            <div className="a-past-s">{it.speaker}</div>
            <a className="a-past-link" href="#">Read recap →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---- The PISE Lens card system ----------------------------------------

const LENS_PALETTE = {
  Economics:       "#4A5C2A",
  Philosophy:      "#5A6880",
  Politics:        "#9B3423",
  Society:         "#7A5C3A",
  "Int'l Affairs": "#3A5C68",
  Interviews:      "#5A4878",
};
const LENS_GHOST_MAP = {
  Economics:       "E",
  Philosophy:      "Φ",
  Politics:        "Π",
  Society:         "Σ",
  "Int'l Affairs": "I",
  Interviews:      "Q",
};

function LensStamp({ symbol, color }) {
  const uid = `lsp${String(symbol).codePointAt(0)}`;
  return (
    <svg viewBox="0 0 100 100" width="72" height="72" aria-hidden="true"
      style={{ color, display: "block", transform: "rotate(-12deg)" }}>
      <defs>
        <path id={uid} d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
      </defs>
      <circle cx="50" cy="50" r="46" fill="rgba(232,227,210,0.55)" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="50" cy="50" r="37" fill="none" stroke="currentColor" strokeWidth="0.65" strokeDasharray="1.5 2.8" />
      <text fontFamily="'JetBrains Mono',monospace" fontSize="7" letterSpacing="2.4" fill="currentColor">
        <textPath href={`#${uid}`} startOffset="4%">THE · PISE · LENS · EDITORIAL ·</textPath>
      </text>
      <text x="50" y="57" textAnchor="middle" fontFamily="'Newsreader',serif" fontStyle="italic" fontSize="26" fill="currentColor" fontWeight="500">{symbol}</text>
    </svg>
  );
}

function LensCard({ cat, question }) {
  const color = LENS_PALETTE[cat] || "#9B3423";
  const ghost = LENS_GHOST_MAP[cat] || cat.charAt(0);
  return (
    <article className="a-lens-card" style={{ "--lens-color": color }}>
      <div className="a-lens-top">
        <div className="a-lens-brand">
          <span className="a-lens-brand-it">pise</span>
          <strong className="a-lens-brand-bd"> network</strong>
          <span className="a-lens-brand-dot">•</span>
        </div>
        <span className="a-lens-dateline">THE.PISE.LENS / 2026 / MAY.2026</span>
      </div>
      <div className="a-lens-ghost" aria-hidden="true">{ghost}</div>
      <div className="a-lens-cat">—{cat.toUpperCase()}</div>
      <div className="a-lens-body">
        <div className="a-lens-circle">
          <p className="a-lens-q">{question}</p>
        </div>
        <div className="a-lens-stamp-wrap">
          <LensStamp symbol={ghost} color={color} />
        </div>
      </div>
      <div className="a-lens-foot">
        <div className="a-lens-dashes" aria-hidden="true">
          <span /><span /><span className="a-lens-dash-hi" /><span /><span />
        </div>
        <span className="a-lens-foot-arrow">→</span>
      </div>
    </article>
  );
}

function AEditorialCall() {
  return (
    <section className="a-ed-callout">
      <div className="a-ed-callout-inner">
        <div className="a-ed-callout-accent-bar" />
        <div className="a-ed-callout-body">
          <span className="a-ed-callout-eyebrow">Call of the month</span>
          <h2 className="a-ed-callout-hl">Submit your perspective.</h2>
          <div className="a-ed-callout-meta">
            <div className="a-ed-callout-row">
              <span className="a-ed-callout-label">THEME</span>
              <span className="a-ed-callout-val">Exclusions at the Venice Biennale</span>
            </div>
            <div className="a-ed-callout-row">
              <span className="a-ed-callout-label">FORMAT</span>
              <span className="a-ed-callout-val">100–200 word abstract</span>
            </div>
            <div className="a-ed-callout-row">
              <span className="a-ed-callout-label">DEADLINE</span>
              <span className="a-ed-callout-val">May 22, 2026</span>
            </div>
          </div>
          <a className="a-btn a-btn-primary" href="#">Submit a pitch <span className="a-arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}
function AFooter() {
  return (
    <footer className="a-footer">
      <div className="a-foot-grid">
        <div className="a-foot-brand">
          <Wordmark size={26} tone="light" accent="var(--a-accent)" />
          <p className="a-foot-tag">Student & alumni community of the PISE programme<br />at Ca' Foscari University of Venice.</p>
        </div>
        <div className="a-foot-col">
          <div className="a-foot-h">Explore</div>
          <a href="#">About</a>
          <a href="#">Events</a>
          <a href="#">Editorial</a>
          <a href="#">Collaborate</a>
        </div>
        <div className="a-foot-col">
          <div className="a-foot-h">Get involved</div>
          <a href="#">Become a member</a>
          <a href="#">Mentorship</a>
          <a href="#">Write for us</a>
          <a href="#">Partner with PISE</a>
        </div>
        <div className="a-foot-col">
          <div className="a-foot-h">Follow</div>
          <div className="a-foot-socials">
            <a href="#" aria-label="Instagram" className="a-foot-soc">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="a-foot-soc">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8h4.55v13H.22zM8.34 8h4.36v1.78h.06c.61-1.07 2.1-2.2 4.32-2.2 4.62 0 5.47 3.04 5.47 6.99V21h-4.55v-5.96c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.55-2.28 3.15V21H8.34z"/></svg>
            </a>
            <a href="#" aria-label="Newsletter" className="a-foot-soc">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7l9 6 9-6"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>
            </a>
            <a href="mailto:hello@pisenetwork.com" aria-label="Email" className="a-foot-soc">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 13c1 1.4 2.4 2 4 2s3-.6 4-2"/><circle cx="9" cy="10" r=".8" fill="currentColor"/><circle cx="15" cy="10" r=".8" fill="currentColor"/></svg>
            </a>
          </div>
          <a href="mailto:hello@pisenetwork.com" className="a-foot-email">hello@pisenetwork.com</a>
        </div>
      </div>
      <div className="a-foot-base">
        <span>© 2026 PISE Network · Ca' Foscari University of Venice</span>
        <span>Dorsoduro 3246, 30123 Venezia</span>
      </div>
    </footer>);

}

// ---- Pages ------------------------------------------------------------

function ADirectionHomepage({ heroVariant = 0, accent = "#C8102E" }) {
  const [lang, setLang] = React.useState("en");
  return (
    <div className="a-root" style={{ "--a-accent": accent }}>
      <ANav active="Home" lang={lang} setLang={setLang} />
      <AHero variant={heroVariant} />
      <AStats />
      <AFeatured />
      <APillars />
      <AEditorial />
      <AEditorialCall />
      <AEvents />
      <APhotoStrip />
      <APastCarousel />
      <AJoin />
      <AFooter />
    </div>);

}

// Events page artboard
const EVENTS_UPCOMING = [
  {
    d: "16", m: "Apr", dayName: "Thu", year: "2026",
    title: "Crime, Punishment and Forgiveness",
    speaker: "Lewis Ross — Associate Professor, LSE",
    where: "Aula Silvio Trentin, Ca' Dolfin",
    time: "11:30 — 13:00",
    tag: "Philosophy",
    open: true,
  },
  {
    d: "16", m: "Apr", dayName: "Thu", year: "2026",
    title: "Innovare tra pubblico e privato",
    speaker: "Di Biagi · Strummiello · Fuorlo — Le Village, MAG, KPMG",
    where: "Aula Silvio Trentin, Ca' Dolfin",
    time: "14:30 — 16:00",
    tag: "Economics",
    open: true,
  },
  {
    d: "23", m: "Apr", dayName: "Thu", year: "2026",
    title: "Mediterranean migration and EU policy: a dialogue",
    speaker: "Dr. Anna Triandafyllidou — European University Institute",
    where: "Auditorium Santa Margherita",
    time: "18:00 — 19:30",
    tag: "International Affairs",
    open: true,
  },
  {
    d: "05", m: "May", dayName: "Tue", year: "2026",
    title: "Philosophy of language: meaning and use",
    speaker: "Prof. Francesca Boccuni — Vita-Salute San Raffaele",
    where: "Aula B, Ca' Foscari",
    time: "17:00 — 18:30",
    tag: "Philosophy",
    open: false,
  },
];

const EVENTS_PAST = [
  { d: "21", m: "Mar", title: "AI, automation and the future of European labour", speaker: "Prof. Sofia Bianchi · Bocconi", where: "Aula Mario Baratto", time: "18:30", tag: "Economics" },
  { d: "07", m: "Mar", title: "Foreign policy after the war in Ukraine", speaker: "Amb. Stefano Pontecorvo (ret.)", where: "Auditorium Santa Margherita", time: "18:00", tag: "International" },
  { d: "14", m: "Feb", title: "Reading Hannah Arendt today", speaker: "Editorial board roundtable", where: "Ca' Bottacin", time: "17:00", tag: "Philosophy" },
  { d: "30", m: "Jan", title: "Italy & the new EU fiscal rules", speaker: "Prof. Lorenzo Codogno · LSE", where: "Aula Baratto", time: "18:30", tag: "Economics" },
  { d: "15", m: "Jan", title: "Climate, conflict and migration: a geopolitical view", speaker: "Dr. Triandafyllidou · EUI", where: "Ca' Bottacin", time: "18:00", tag: "Society" },
];

function AEventsPageHero({ activeFilter, setActiveFilter }) {
  const filters = ["All", "Philosophy", "Economics", "International Affairs", "Society", "Mentorship"];
  return (
    <section className="a-ev-hero">
      <div className="a-ev-hero-inner">
        <div className="a-ev-hero-left">
          <div className="a-eyebrow">Events</div>
          <h1 className="a-ev-hero-title">
            Talks, roundtables<br />and <em>gatherings.</em>
          </h1>
          <p className="a-ev-hero-body">
            Open to the PISE community and beyond — held in Venice and, occasionally, further afield.
          </p>
        </div>
        <div className="a-ev-hero-right">
          <div className="a-ev-cal-block">
            <div className="a-ev-cal-month">April — May</div>
            <div className="a-ev-cal-year">2026</div>
            <div className="a-ev-cal-rule" />
            <div className="a-ev-cal-stat">
              <span className="a-ev-cal-n">4</span>
              <span className="a-ev-cal-l">upcoming<br />events</span>
            </div>
          </div>
        </div>
      </div>
      <div className="a-ev-filter-row">
        {filters.map((f) => (
          <button
            key={f}
            className={"a-chip" + (activeFilter === f ? " is-active" : "")}
            onClick={() => setActiveFilter(f)}
          >{f}</button>
        ))}
      </div>
    </section>
  );
}

function AEventsFeature() {
  return (
    <section className="a-ev-feature">
      <div className="a-ev-feature-inner">
        <div className="a-ev-feature-badge">
          <span className="a-ev-feature-badge-label">Featured event</span>
        </div>
        <div className="a-ev-feature-grid">
          <div className="a-ev-feature-dates">
            <div className="a-ev-feature-date-block">
              <span className="a-ev-feature-d">15</span>
              <span className="a-ev-feature-sep">—</span>
              <span className="a-ev-feature-d">17</span>
            </div>
            <div className="a-ev-feature-month">April 2026</div>
            <div className="a-ev-feature-loc">
              <svg viewBox="0 0 16 20" width="11" height="14" aria-hidden="true"><path d="M8 0 C 3.6 0, 0 3.6, 0 8 C 0 13, 8 20, 8 20 C 8 20, 16 13, 16 8 C 16 3.6, 12.4 0, 8 0 Z" fill="currentColor"/><circle cx="8" cy="8" r="3" fill="white"/></svg>
              Ca' Foscari, Venice
            </div>
          </div>
          <div className="a-ev-feature-body">
            <div className="a-ev-feature-eyebrow">PISE Days 2026</div>
            <h2 className="a-ev-feature-title">Three days of talks to unlock innovation.</h2>
            <p className="a-ev-feature-deck">
              Guest speakers from LSE, King's College, Crédit Agricole Italia, KPMG, MAG, Bank of Italy and more.
              Nine talks · open to all.
            </p>
            <div className="a-ev-feature-partners">
              {["LSE", "King's College", "Crédit Agricole", "KPMG", "MAG", "Bank of Italy"].map((p, i, arr) => (
                <React.Fragment key={p}>
                  <span>{p}</span>
                  {i < arr.length - 1 && <span className="a-ev-fp-dot">·</span>}
                </React.Fragment>
              ))}
            </div>
            <a className="a-btn a-btn-primary" href="#">
              See full programme <span className="a-arrow">→</span>
            </a>
          </div>
          <div className="a-ev-feature-format">
            <div className="a-ev-ff-row">
              <span className="a-ev-ff-label">Format</span>
              <span className="a-ev-ff-val">3 days · 9 talks</span>
            </div>
            <div className="a-ev-ff-row">
              <span className="a-ev-ff-label">Admission</span>
              <span className="a-ev-ff-val">Open to all</span>
            </div>
            <div className="a-ev-ff-row">
              <span className="a-ev-ff-label">Where</span>
              <span className="a-ev-ff-val">Aula Silvio Trentin, Ca' Dolfin</span>
            </div>
            <div className="a-ev-ff-row">
              <span className="a-ev-ff-label">Hosted by</span>
              <span className="a-ev-ff-val">PISE Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AUpcomingEvents({ activeFilter }) {
  const filtered = activeFilter === "All"
    ? EVENTS_UPCOMING
    : EVENTS_UPCOMING.filter(e => e.tag === activeFilter);
  return (
    <section className="a-ev-upcoming">
      <div className="a-section-head">
        <span className="a-section-label">Upcoming events</span>
        <a className="a-section-more" href="#">Full calendar <span className="a-arrow">→</span></a>
      </div>
      <ul className="a-ev-up-list">
        {filtered.map((e, i) => (
          <li key={i} className="a-ev-up-row">
            <div className="a-ev-up-date">
              <span className="a-ev-up-day">{e.dayName}</span>
              <span className="a-ev-up-d">{e.d}</span>
              <span className="a-ev-up-m">{e.m}</span>
            </div>
            <div className="a-ev-up-line" aria-hidden="true" />
            <div className="a-ev-up-main">
              <div className="a-ev-up-head">
                <span className="a-event-tag">{e.tag}</span>
                {e.open && <span className="a-ev-up-open">Open to all</span>}
              </div>
              <h3 className="a-ev-up-title">{e.title}</h3>
              <div className="a-ev-up-speaker">{e.speaker}</div>
            </div>
            <div className="a-ev-up-info">
              <div className="a-ev-up-time">{e.time}</div>
              <div className="a-ev-up-where">{e.where}</div>
            </div>
            <a className="a-btn a-btn-ghost a-ev-up-cta" href="#">
              Register <span className="a-arrow">→</span>
            </a>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="a-ev-up-empty">No upcoming events in this category.</li>
        )}
      </ul>
    </section>
  );
}

function AEventsProposeCall() {
  return (
    <section className="a-ev-propose">
      <div className="a-ev-propose-inner">
        <div className="a-ev-propose-mark">"</div>
        <div className="a-ev-propose-body">
          <p className="a-ev-propose-text">
            We welcome proposals from students, alumni, academics and professionals.<br />
            <em>If you have an idea for a talk — get in touch.</em>
          </p>
          <a className="a-btn a-btn-primary" href="#">Propose a talk <span className="a-arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

function APastEvents() {
  return (
    <section className="a-ev-past">
      <div className="a-section-head">
        <span className="a-section-label">Past events · 2025 — 2026</span>
        <a className="a-section-more" href="#">Full archive <span className="a-arrow">→</span></a>
      </div>
      <ul className="a-ev-past-list">
        {EVENTS_PAST.map((e, i) => (
          <li key={i} className="a-ev-past-row">
            <div className="a-ev-past-date">
              <span className="a-ev-past-d">{e.d}</span>
              <span className="a-ev-past-m">{e.m}</span>
            </div>
            <div className="a-ev-past-main">
              <div className="a-ev-past-tag">{e.tag}</div>
              <h3 className="a-ev-past-title">{e.title}</h3>
              <div className="a-ev-past-speaker">{e.speaker}</div>
            </div>
            <div className="a-ev-past-meta">
              <div>{e.time} · {e.where}</div>
            </div>
            <a className="a-ev-past-recap" href="#">Read recap →</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ADirectionEvents({ accent = "#C8102E" }) {
  const [lang, setLang] = React.useState("en");
  const [activeFilter, setActiveFilter] = React.useState("All");
  return (
    <div className="a-root a-events-page" style={{ "--a-accent": accent }}>
      <ANav active="Events" lang={lang} setLang={setLang} />
      <AEventsPageHero activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <AEventsFeature />
      <AUpcomingEvents activeFilter={activeFilter} />
      <AEventsProposeCall />
      <APastEvents />
      <APhotoStrip />
      <AFooter />
    </div>
  );
}

// About page helpers

function AAboutHero() {
  return (
    <section className=”a-ab-hero”>
      <div className=”a-ab-hero-inner”>
        <div className=”a-ab-hero-top”>
          <div className=”a-eyebrow”>About</div>
          <div className=”a-ab-hero-founded”>
            <span className=”a-ab-hero-est”>est.</span>
            <span className=”a-ab-hero-year”>2018</span>
          </div>
        </div>
        <h1 className=”a-ab-hero-title”>
          A bridge between the<br /><em>classroom and the world.</em>
        </h1>
        <div className=”a-ab-hero-body-row”>
          <p className=”a-ab-hero-body”>
            PISE Network is the student and alumni community of Ca’ Foscari’s PISE programme —
            connecting people around politics, economics, philosophy and international affairs.
          </p>
          <div className=”a-ab-hero-stats”>
            {[[“300+”, “Students & alumni”], [“40+”, “Events since 2022”], [“4”, “Active rubrics”], [“12”, “Partner institutions”]].map(([n, l]) => (
              <div key={l} className=”a-ab-hero-stat”>
                <div className=”a-ab-hero-stat-n”>{n}</div>
                <div className=”a-ab-hero-stat-l”>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=”a-ab-hero-rule” />
    </section>
  );
}

function AAboutMission() {
  return (
    <section className=”a-ab-mission”>
      <div className=”a-ab-mission-inner”>
        <div className=”a-ab-mission-header”>
          <span className=”a-section-label”>Mission & Vision</span>
          <svg className=”a-page-flourish” viewBox=”0 0 140 12” width=”140” height=”12” aria-hidden=”true”><path d=”M0 6 Q 24 0, 48 6 T 96 6 T 140 6” stroke=”currentColor” strokeWidth=”1” fill=”none”/><circle cx=”70” cy=”6” r=”2.4” fill=”currentColor”/></svg>
        </div>
        <div className=”a-ab-mission-grid”>
          <article className=”a-ab-mv”>
            <span className=”a-ab-mv-num”>i.</span>
            <h2 className=”a-ab-mv-head”>Mission</h2>
            <blockquote className=”a-ab-mv-quote”>
              “To create a bridge between university and the outside world — helping PISE students turn their academic background into <em>real conversations</em>, opportunities, and professional pathways.”
            </blockquote>
            <div className=”a-ab-mv-foot”>— The board</div>
          </article>
          <article className=”a-ab-mv”>
            <span className=”a-ab-mv-num”>ii.</span>
            <h2 className=”a-ab-mv-head”>Vision</h2>
            <blockquote className=”a-ab-mv-quote”>
              “A strong, active, long-lasting community where students and alumni support each other, exchange ideas, and contribute to <em>public debate</em> on politics, economics, society and international affairs.”
            </blockquote>
            <div className=”a-ab-mv-foot”>— The board</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function AAboutTimeline() {
  const events = [
    { y: “2018”, t: “Founded”, d: “PISE Network is established by a group of first-year PISE students at Ca’ Foscari.” },
    { y: “2019”, t: “First public talk”, d: “The network hosts its inaugural public talk series, open to the university community.” },
    { y: “2021”, t: “Editorial launch”, d: “The PISE Lens is launched as the network’s flagship editorial rubric.” },
    { y: “2022”, t: “PISE Days”, d: “The first edition of PISE Days brings together 8 speakers over two days.” },
    { y: “2024”, t: “Alumni mentorship”, d: “A formal mentorship programme pairs current students with PISE graduates.” },
    { y: “2026”, t: “Today”, d: “300+ members, 40+ events, 12 partner institutions, and still growing.”, accent: true },
  ];
  return (
    <section className=”a-ab-timeline”>
      <div className=”a-ab-timeline-inner”>
        <div className=”a-section-head”>
          <span className=”a-section-label”>A brief history</span>
        </div>
        <div className=”a-ab-tl-track”>
          {events.map((e, i) => (
            <div key={e.y} className={“a-ab-tl-item” + (e.accent ? “ is-now” : “”)}>
              <div className=”a-ab-tl-year”>{e.y}</div>
              <div className=”a-ab-tl-dot” />
              <div className=”a-ab-tl-body”>
                <div className=”a-ab-tl-title”>{e.t}</div>
                <div className=”a-ab-tl-desc”>{e.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AAboutTeam() {
  const members = [
    [“Alessandro Rossi”, “President”, “Final-year PISE student. Coordinates board strategy and external partnerships.”],
    [“Chiara Vianello”, “Editorial Lead”, “Curates the editorial calendar. Writes on European politics and public policy.”],
    [“Marco De Luca”, “Events”, “Programmes the talk series and PISE Days. Background in cultural management.”],
    [“Sofia Conti”, “Mentorship”, “Pairs students with alumni mentors. PISE ‘24, now at Crédit Agricole.”],
    [“Tommaso Greco”, “Partnerships”, “Builds relationships with institutions, NGOs and partner universities.”],
    [“Elena Furlan”, “Communications”, “Runs the channels and brand. PISE ‘25, design background.”],
  ];
  return (
    <section className=”a-ab-team”>
      <span className=”a-anno a-anno-stamp a-anno-team-stamp”>est. 2018<br/>Venezia</span>
      <div className=”a-section-head”>
        <span className=”a-section-label”>The board, 2025 — 26</span>
      </div>
      <div className=”a-ab-team-grid”>
        {members.map(([n, r, b]) => (
          <article key={n} className=”a-ab-team-card”>
            <div className=”a-ab-team-photo” />
            <div className=”a-ab-team-info”>
              <div className=”a-ab-team-name”>{n}</div>
              <div className=”a-ab-team-role”>{r}</div>
              <p className=”a-ab-team-bio”>{b}</p>
              <div className=”a-ab-team-links”>
                <a href=”#”>LinkedIn →</a>
                <a href=”#”>Email →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ADirectionAbout({ accent = “#C8102E” }) {
  const [lang, setLang] = React.useState(“en”);
  return (
    <div className=”a-root a-about-page” style={{ “--a-accent”: accent }}>
      <ANav active=”About” lang={lang} setLang={setLang} />
      <AAboutHero />
      <AAboutMission />
      <APillars />
      <AAboutTimeline />
      <AAboutTeam />
      <AEditorial />
      <AJoin />
      <AFooter />
    </div>
  );
}

// Editorial page — editorial section header + rubric structure
function ADirectionEditorial({ accent = "#C8102E" }) {
  const [lang, setLang] = React.useState("en");
  const [activeRubric, setActiveRubric] = React.useState("lens");

  const rubrics = [
    { id: "lens",       label: "The PISE Lens" },
    { id: "interviews", label: "Interviews" },
    { id: "editors",    label: "Editor’s Take" },
    { id: "archive",    label: "Archive" },
  ];

  const archiveGroups = [
    {
      cat: "International Affairs", ghost: "I", color: "#3A5C68",
      articles: [
        { title: "Mediterranean migration and the limits of European policy", author: "Giulia Marchetti", date: "Apr 12", read: "8 min" },
      ]
    },
    {
      cat: "Economics", ghost: "E", color: "#4A5C2A",
      articles: [
        { title: "Why Italy’s productivity gap won’t close on its own", author: "Luca Romano", date: "Apr 04", read: "11 min" },
        { title: "Italy & the new EU fiscal rules", author: "Prof. Lorenzo Codogno", date: "Jan 30", read: "9 min" },
      ]
    },
    {
      cat: "Philosophy", ghost: "Φ", color: "#5A6880",
      articles: [
        { title: "On punishment: a conversation with Lewis Ross", author: "Editorial Board", date: "Mar 28", read: "6 min" },
        { title: "Reading Hannah Arendt in 2026", author: "Sofia Lanza", date: "Mar 15", read: "9 min" },
      ]
    },
    {
      cat: "Politics", ghost: "Π", color: "#9B3423",
      articles: [
        { title: "What Italy’s centre-left needs to do next", author: "Tommaso Greco", date: "Mar 02", read: "12 min" },
        { title: "The slow normalisation of Western Balkans accession", author: "Elena Furlan", date: "Feb 22", read: "8 min" },
      ]
    },
  ];

  return (
    <div className="a-root a-editorial-page" style={{ "--a-accent": accent }}>
      <ANav active="Editorial" lang={lang} setLang={setLang} />

      {/* —— Editorial section header —— */}
      <section className="a-ed-section-head">
        <div className="a-ed-sh-inner">
          <div className="a-ed-sh-top">
            <div className="a-eyebrow">Editorial</div>
            <a className="a-btn a-btn-ghost" href="#">Subscribe <span className="a-arrow">→</span></a>
          </div>
          <h1 className="a-ed-sh-title">Writing that<br /><em>thinks out loud.</em></h1>
          <p className="a-ed-sh-body">Student and alumni essays on politics, economics, philosophy and international affairs — published across four rubrics.</p>
          <nav className="a-ed-rubric-nav">
            {rubrics.map(r => (
              <button key={r.id}
                className={"a-ed-rubric-btn" + (activeRubric === r.id ? " is-active" : "")}
                onClick={() => setActiveRubric(r.id)}>
                {r.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* —— The PISE Lens rubric — parchment section —— */}
      <section className="a-ed-lens-section">

        {/* Rubric header */}
        <div className="a-ed-lens-hd">
          <div className="a-ed-lens-hd-row">
            <div className="a-ed-lens-brand-row">
              <span className="a-lens-brand-it">pise</span>
              <strong className="a-lens-brand-bd"> network</strong>
              <span className="a-lens-brand-dot">•</span>
              <span className="a-ed-lens-pub-name">THE PISE LENS</span>
            </div>
            <span className="a-ed-lens-dateline">Vol. IV · Issue 12 · May 2026</span>
          </div>
          <h2 className="a-ed-lens-title">The <em>PISE</em> Lens</h2>
          <p className="a-ed-lens-sub">Slow writing on politics, economics, philosophy and international affairs — by students, alumni and faculty of Ca’ Foscari’s PISE programme.</p>
        </div>

        {/* Feature article */}
        <div className="a-ed-feature">
          <div className="a-ed-feature-grid">
            <figure className="a-ed-feature-photo">
              <img src="assets/san-marco.jpeg" alt="Lead feature" />
              <figcaption>Cover · Issue 12</figcaption>
            </figure>
            <div className="a-ed-feature-text">
              <div className="a-ed-feature-cat">—INTERNATIONAL AFFAIRS</div>
              <h2 className="a-ed-feature-h">Mediterranean migration and the limits of European policy.</h2>
              <p className="a-ed-feature-deck">Why the EU’s external dimension keeps producing the same crises — and what a different framework might look like, drawing on a decade of failed experiments from Tunis to Tripoli.</p>
              <div className="a-ed-feature-byline">
                <span>By <em>Giulia Marchetti</em></span>
                <span className="a-dot">·</span>
                <span>April 12, 2026</span>
                <span className="a-dot">·</span>
                <span>14 min read</span>
              </div>
              <a className="a-btn a-btn-primary a-btn-lg" href="#">Read the essay <span className="a-arrow">→</span></a>
            </div>
          </div>
        </div>

        {/* Archive grouped by discipline with ghost symbols */}
        <div className="a-ed-archive-groups">
          <div className="a-section-head a-ed-ag-head">
            <span className="a-section-label">From the archive</span>
            <a className="a-section-more" href="#">All issues <span className="a-arrow">→</span></a>
          </div>
          {archiveGroups.map(g => (
            <div key={g.cat} className="a-ed-archive-group" style={{ "--ag-color": g.color }}>
              <div className="a-ed-ag-ghost" aria-hidden="true">{g.ghost}</div>
              <div className="a-ed-ag-cat">—{g.cat.toUpperCase()}</div>
              <div className="a-ed-ag-articles">
                {g.articles.map((a, i) => (
                  <div key={i} className="a-ed-ag-article">
                    <h3 className="a-ed-ag-atitle">{a.title}</h3>
                    <div className="a-ed-ag-ameta">
                      <span className="a-ed-ag-author">{a.author}</span>
                      <span>{a.date} · {a.read}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* —— Pull-quote —— */}
      <section className="a-ed-pullquote">
        <div className="a-ed-pq-mark">“</div>
        <blockquote>
          The point of student writing isn’t to imitate the professional press — it’s to think out loud, in public, before the habits of the profession harden.
        </blockquote>
        <div className="a-ed-pq-attrib">— From the editor’s letter, Issue 12</div>
      </section>

      {/* —— Editorial call —— */}
      <AEditorialCall />

      {/* —— Subscribe —— */}
      <section className="a-ed-subscribe">
        <div className="a-ed-subscribe-inner">
          <div className="a-eyebrow">Newsletter</div>
          <h2 className="a-h2">A new essay every month, in your inbox.</h2>
          <p className="a-ed-subscribe-body">Slow reading, no marketing — just the editorial board’s picks from the week, with a short note on why we chose them.</p>
          <form className="a-ed-form" onSubmit={(e) => e.preventDefault()}>
            <input className="a-ed-input" type="email" placeholder="your@email.com" />
            <button className="a-btn a-btn-primary a-btn-lg" type="submit">Subscribe <span className="a-arrow">→</span></button>
          </form>
          <div className="a-ed-form-note">Free · Unsubscribe anytime · No spam, ever.</div>
        </div>
      </section>

      <AFooter />
    </div>
  );
}
window.ADirectionHomepage = ADirectionHomepage;
window.ADirectionEvents = ADirectionEvents;
window.ADirectionAbout = ADirectionAbout;
window.ADirectionEditorial = ADirectionEditorial;