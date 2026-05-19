// =====================================================================
// DIRECTION C — Civic Type-Driven
// Big condensed-uppercase headlines (echoing the posters), asymmetric
// grid, monochrome with red as the only color. Confident, civic, alive.
// =====================================================================

const C_ARTICLES = [
  { num: "01", cat: "Int'l Affairs", title: "Mediterranean migration and the limits of European policy", author: "G. Marchetti", date: "12.04.26" },
  { num: "02", cat: "Economics", title: "Italy's productivity gap won't close on its own", author: "L. Romano", date: "04.04.26" },
  { num: "03", cat: "Philosophy", title: "On punishment: a conversation with Lewis Ross", author: "Editorial", date: "28.03.26" },
];

const C_EVENTS = [
  { d: "16.04", title: "Crime, Punishment and Forgiveness", speaker: "Lewis Ross / LSE", time: "11.30—13.00" },
  { d: "16.04", title: "Innovare tra pubblico e privato", speaker: "Di Biagi / Strummiello / Fuorlo", time: "14.30—16.00" },
  { d: "16.04", title: "L'America's Cup a Napoli", speaker: "Panzironi / Falconio", time: "16.30—18.00" },
];

function CNav({ active = "Home", lang, setLang }) {
  const items = ["Home", "About", "Events", "Editorial", "Collaborate"];
  return (
    <header className="c-nav">
      <a className="c-brand" href="#"><Wordmark size={22} accent="var(--c-accent)" /></a>
      <nav className="c-links">
        {items.map((n, i) => (
          <a key={n} href="#" className={"c-link " + (n === active ? "is-active" : "")}>
            <span className="c-link-n">{String(i + 1).padStart(2, "0")}</span>{n}
          </a>
        ))}
      </nav>
      <div className="c-nav-right">
        <button className="c-lang" onClick={() => setLang(lang === "en" ? "it" : "en")}>
          {lang.toUpperCase()} <span className="c-lang-alt">/ {lang === "en" ? "IT" : "EN"}</span>
        </button>
        <a className="c-btn-join" href="#">Join <span className="c-btn-join-dot" /></a>
      </div>
    </header>
  );
}

function CHero({ variant = 0 }) {
  if (variant === 0) {
    return (
      <section className="c-hero c-hero-v0">
        <div className="c-hero-meta">
          <div className="c-meta-row"><span>Est. 2022</span><span>Venezia, IT</span><span>300+ members</span></div>
        </div>
        <h1 className="c-h1">
          <span className="c-h1-line">Bigger than</span>
          <span className="c-h1-line c-h1-italic"><em>the classroom.</em></span>
        </h1>
        <div className="c-hero-foot">
          <p className="c-hero-lead">
            The student & alumni community of Ca' Foscari's Bachelor's programme in
            Philosophy, International Studies and Economics. Public events, editorial work,
            mentorship — the bridge between academic work and the world.
          </p>
          <div className="c-hero-cta">
            <a className="c-btn c-btn-primary" href="#">Become a member <span>→</span></a>
            <a className="c-btn c-btn-text" href="#">What we publish</a>
          </div>
        </div>
        <div className="c-marquee">
          <span>Philosophy</span><span>·</span>
          <span>International Studies</span><span>·</span>
          <span>Economics</span><span>·</span>
          <span>Public Affairs</span><span>·</span>
          <span>Society</span><span>·</span>
          <span>Politics</span><span>·</span>
          <span>Philosophy</span><span>·</span>
          <span>International Studies</span><span>·</span>
          <span>Economics</span>
        </div>
      </section>
    );
  }
  if (variant === 1) {
    // Asymmetric: photo + huge type
    return (
      <section className="c-hero c-hero-v1">
        <div className="c-hero-grid">
          <div className="c-hero-text">
            <div className="c-meta-row"><span>№ 24</span><span>Spring 2026</span></div>
            <h1 className="c-h1 c-h1-stack">
              <span>Where</span>
              <span className="c-h1-italic"><em>thinking</em></span>
              <span>meets</span>
              <span>the world.</span>
            </h1>
          </div>
          <figure className="c-hero-figure">
            <img src="assets/san-marco.jpeg" alt="Graduation in Piazza San Marco" />
            <figcaption>↘ Piazza San Marco · Class of 2025</figcaption>
          </figure>
        </div>
        <div className="c-hero-foot c-hero-foot-v1">
          <p className="c-hero-lead">
            PISE Network — student & alumni community at Ca' Foscari, Venice. We organise
            public events with academics, professionals and institutions, publish
            student-led editorial work, and run mentorship between students and graduates.
          </p>
          <div className="c-hero-cta">
            <a className="c-btn c-btn-primary" href="#">Become a member <span>→</span></a>
            <a className="c-btn c-btn-text" href="#">Editorial</a>
          </div>
        </div>
      </section>
    );
  }
  // Variant 2: Manifesto numbered list
  return (
    <section className="c-hero c-hero-v2">
      <div className="c-meta-row"><span>The PISE Network</span><span>—</span><span>A short manifesto</span></div>
      <ol className="c-manifesto">
        <li><span className="c-manif-n">01</span><span><strong>We connect.</strong> Students, alumni, faculty, friends of the programme.</span></li>
        <li><span className="c-manif-n">02</span><span><strong>We publish.</strong> Student-led editorial work on the world we live in.</span></li>
        <li><span className="c-manif-n">03</span><span><strong>We gather.</strong> Public talks and roundtables with people worth listening to.</span></li>
        <li><span className="c-manif-n">04</span><span><strong>We mentor.</strong> Real conversations between students and the graduates ahead of them.</span></li>
        <li><span className="c-manif-n">05</span><span><em>And we make the PISE experience bigger than the classroom.</em></span></li>
      </ol>
      <div className="c-hero-cta c-hero-cta-center">
        <a className="c-btn c-btn-primary" href="#">Become a member <span>→</span></a>
        <a className="c-btn c-btn-text" href="#">About PISE Network</a>
      </div>
    </section>
  );
}

function CFeaturedEvent() {
  return (
    <section className="c-featured">
      <div className="c-section-head">
        <span className="c-section-num">↘ 01</span>
        <span className="c-section-label">Upcoming · Headline</span>
      </div>
      <div className="c-featured-card">
        <div className="c-featured-side">
          <div className="c-feat-date">15<span className="c-feat-sep">—</span>17<br/><span className="c-feat-month">April 2026</span></div>
          <div className="c-feat-where">
            <div className="c-feat-l">Where</div>
            <div>Ca' Foscari University<br/>Venezia</div>
          </div>
          <div className="c-feat-where">
            <div className="c-feat-l">Format</div>
            <div>3 days · 9 talks<br/>Open to all</div>
          </div>
        </div>
        <div className="c-featured-main">
          <div className="c-feat-tag">PISE Days · Annual</div>
          <h2 className="c-h2-display">Three days<br />to <em>unlock</em><br/>innovation.</h2>
          <p className="c-feat-body">
            With guest speakers from LSE, King's College, Crédit Agricole Italia, KPMG, MAG,
            Bank of Italy and more — across philosophy, public policy, economics and
            international affairs.
          </p>
          <div className="c-feat-partners">
            <span>LSE</span><span>King's College</span><span>Crédit Agricole</span>
            <span>KPMG</span><span>MAG</span><span>Bank of Italy</span>
          </div>
          <a className="c-btn c-btn-primary" href="#">Full programme <span>→</span></a>
        </div>
      </div>
    </section>
  );
}

function CPillars() {
  const pillars = [
    { n: "↘ 01", t: "Events", d: "Public talks and roundtables with academics, professionals and alumni." },
    { n: "↘ 02", t: "Editorial", d: "Student-led writing on politics, economics, society and the world." },
    { n: "↘ 03", t: "Mentorship", d: "One-to-one guidance between current students and graduates." },
    { n: "↘ 04", t: "Initiatives", d: "Support for student-led projects within the PISE community." },
  ];
  return (
    <section className="c-pillars">
      <div className="c-section-head">
        <span className="c-section-num">↘ 02</span>
        <span className="c-section-label">What we do</span>
      </div>
      <div className="c-pillars-grid">
        {pillars.map((p) => (
          <div key={p.n} className="c-pillar">
            <div className="c-pillar-n">{p.n}</div>
            <h3 className="c-pillar-t">{p.t}</h3>
            <p className="c-pillar-d">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CEditorial() {
  return (
    <section className="c-editorial">
      <div className="c-section-head">
        <span className="c-section-num">↘ 03</span>
        <span className="c-section-label">Editorial · Recent</span>
        <a className="c-section-more" href="#">All articles ↗</a>
      </div>
      <ul className="c-articles">
        {C_ARTICLES.map((a) => (
          <li key={a.num} className="c-article">
            <div className="c-art-num">{a.num}</div>
            <div className="c-art-cat">{a.cat}</div>
            <h3 className="c-art-h">{a.title}</h3>
            <div className="c-art-meta"><span>{a.author}</span><span>{a.date}</span></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CAgenda() {
  return (
    <section className="c-agenda">
      <div className="c-section-head">
        <span className="c-section-num">↘ 04</span>
        <span className="c-section-label">Agenda</span>
        <a className="c-section-more" href="#">Full calendar ↗</a>
      </div>
      <ul className="c-agenda-list">
        {C_EVENTS.map((e, i) => (
          <li key={i} className="c-agenda-row">
            <span className="c-ag-d">{e.d}</span>
            <span className="c-ag-t">{e.time}</span>
            <span className="c-ag-title">{e.title}</span>
            <span className="c-ag-speaker">{e.speaker}</span>
            <span className="c-ag-cta">↗</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CJoin() {
  return (
    <section className="c-join">
      <div className="c-join-bar">
        <span>↘</span><span>Become a member</span><span>↘</span><span>Become a member</span><span>↘</span><span>Become a member</span><span>↘</span>
      </div>
      <div className="c-join-inner">
        <h2 className="c-h1-join">
          <em>300</em> members.<br/>
          <span>One conversation across cohorts.</span>
        </h2>
        <p className="c-join-body">
          Open to current students, graduates, faculty and friends of the PISE programme.
        </p>
        <div className="c-hero-cta c-hero-cta-center">
          <a className="c-btn c-btn-light" href="#">Apply to join <span>→</span></a>
          <a className="c-btn c-btn-text c-btn-text-light" href="#">Talk to us</a>
        </div>
      </div>
    </section>
  );
}

function CFooter() {
  return (
    <footer className="c-footer">
      <div className="c-foot-top">
        <Wordmark size={56} tone="dark" accent="var(--c-accent)" />
      </div>
      <div className="c-foot-grid">
        <div className="c-foot-col">
          <div className="c-foot-h">Index</div>
          <a href="#">↘ Home</a>
          <a href="#">↘ About</a>
          <a href="#">↘ Events</a>
          <a href="#">↘ Editorial</a>
          <a href="#">↘ Collaborate</a>
        </div>
        <div className="c-foot-col">
          <div className="c-foot-h">Network</div>
          <a href="#">↘ Become a member</a>
          <a href="#">↘ Mentorship</a>
          <a href="#">↘ Write for us</a>
          <a href="#">↘ Partner</a>
        </div>
        <div className="c-foot-col">
          <div className="c-foot-h">Channels</div>
          <a href="#">↘ Instagram</a>
          <a href="#">↘ LinkedIn</a>
          <a href="#">↘ Newsletter</a>
        </div>
        <div className="c-foot-col">
          <div className="c-foot-h">Contact</div>
          <a href="mailto:hello@pisenetwork.com">hello@pisenetwork.com</a>
          <a href="#">Dorsoduro 3246<br/>30123 Venezia, IT</a>
        </div>
      </div>
      <div className="c-foot-base">
        <span>© 2026 PISE Network</span>
        <span>Ca' Foscari University of Venice</span>
        <span>v.2026.04</span>
      </div>
    </footer>
  );
}

function CDirectionHomepage({ heroVariant = 0, accent = "#C8102E" }) {
  const [lang, setLang] = React.useState("en");
  return (
    <div className="c-root" style={{ "--c-accent": accent }}>
      <CNav active="Home" lang={lang} setLang={setLang} />
      <CHero variant={heroVariant} />
      <CFeaturedEvent />
      <CPillars />
      <CEditorial />
      <CAgenda />
      <CJoin />
      <CFooter />
    </div>
  );
}

function CDirectionEvents({ accent = "#C8102E" }) {
  const [lang, setLang] = React.useState("en");
  return (
    <div className="c-root" style={{ "--c-accent": accent }}>
      <CNav active="Events" lang={lang} setLang={setLang} />
      <section className="c-page-head">
        <div className="c-meta-row"><span>↘ Section 03</span><span>Events</span></div>
        <h1 className="c-h1 c-h1-page">
          <span>Talks. Roundtables.</span>
          <span className="c-h1-italic"><em>Conversations.</em></span>
        </h1>
        <div className="c-page-filters">
          {["All", "Philosophy", "Economics", "Int'l Affairs", "Society", "Past"].map((f, i) => (
            <button key={f} className={"c-chip " + (i === 0 ? "is-active" : "")}>{f}</button>
          ))}
        </div>
      </section>
      <CFeaturedEvent />
      <CAgenda />
      <section className="c-agenda">
        <div className="c-section-head">
          <span className="c-section-num">↘ 05</span>
          <span className="c-section-label">Past · Selected</span>
        </div>
        <ul className="c-agenda-list c-agenda-past">
          {[
            { d: "21.03", title: "AI, automation and European labour", speaker: "Prof. Sofia Bianchi · Bocconi", time: "Recap" },
            { d: "07.03", title: "Foreign policy after Ukraine", speaker: "Amb. Stefano Pontecorvo (ret.)", time: "Recap" },
            { d: "14.02", title: "Reading Hannah Arendt today", speaker: "Editorial roundtable", time: "Notes" },
          ].map((e, i) => (
            <li key={i} className="c-agenda-row">
              <span className="c-ag-d">{e.d}</span>
              <span className="c-ag-t">{e.time}</span>
              <span className="c-ag-title">{e.title}</span>
              <span className="c-ag-speaker">{e.speaker}</span>
              <span className="c-ag-cta">↗</span>
            </li>
          ))}
        </ul>
      </section>
      <CJoin />
      <CFooter />
    </div>
  );
}

function CDirectionAbout({ accent = "#C8102E" }) {
  const [lang, setLang] = React.useState("en");
  return (
    <div className="c-root" style={{ "--c-accent": accent }}>
      <CNav active="About" lang={lang} setLang={setLang} />
      <section className="c-page-head">
        <div className="c-meta-row"><span>↘ Section 02</span><span>About</span></div>
        <h1 className="c-h1 c-h1-page">
          <span>A bridge between</span>
          <span className="c-h1-italic"><em>the classroom</em></span>
          <span>& the world.</span>
        </h1>
      </section>
      <section className="c-mission">
        <div className="c-mission-grid">
          <div>
            <div className="c-mission-l">↘ Mission</div>
            <p>To create a bridge between university and the outside world — helping PISE
            students turn their academic background into real conversations,
            opportunities, and professional pathways.</p>
          </div>
          <div>
            <div className="c-mission-l">↘ Vision</div>
            <p>A strong, active, long-lasting community where students and alumni support
            each other, exchange ideas, and contribute to public debate on politics,
            economics, society, and international affairs.</p>
          </div>
        </div>
      </section>
      <CPillars />
      <section className="c-board">
        <div className="c-section-head">
          <span className="c-section-num">↘ 03</span>
          <span className="c-section-label">The board · 2025—26</span>
        </div>
        <div className="c-board-grid">
          {[["Alessandro Rossi", "President"], ["Chiara Vianello", "Editorial"], ["Marco De Luca", "Events"], ["Sofia Conti", "Mentorship"], ["Tommaso Greco", "Partnerships"], ["Elena Furlan", "Comms"]].map(([n, r], i) => (
            <div key={n} className="c-board-card">
              <div className="c-board-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="c-board-photo" />
              <div className="c-board-name">{n}</div>
              <div className="c-board-role">↘ {r}</div>
            </div>
          ))}
        </div>
      </section>
      <CJoin />
      <CFooter />
    </div>
  );
}

window.CDirectionHomepage = CDirectionHomepage;
window.CDirectionEvents = CDirectionEvents;
window.CDirectionAbout = CDirectionAbout;
