// =====================================================================
// DIRECTION B — Editorial Italian
// Serif-led, magazine-style. Cream paper, ink, red. Italic accents.
// Inspired by Il Post, NYRB, Foreign Affairs.
// =====================================================================

const B_ARTICLES = [
  { num: "N° 24", cat: "International Affairs", title: "Mediterranean migration and the limits of European policy", excerpt: "Why the EU's external dimension keeps producing the same crises — and what a different framework might look like.", author: "Giulia Marchetti", date: "Apr 12" },
  { num: "N° 23", cat: "Economics", title: "Italy's productivity gap won't close on its own", excerpt: "Two decades of stagnation, and the structural answers we keep refusing to give.", author: "Luca Romano", date: "Apr 04" },
  { num: "N° 22", cat: "Philosophy", title: "On punishment: a conversation with Lewis Ross", excerpt: "What we owe — and don't owe — to those who break the rules of the community.", author: "Editorial Board", date: "Mar 28" },
  { num: "N° 21", cat: "Society", title: "Reading Hannah Arendt in 2026", excerpt: "Banality, again, and the slow erosion of the political imagination.", author: "Sofia Lanza", date: "Mar 15" },
];

const B_EVENTS = [
  { d: "16", m: "APR", title: "Crime, Punishment and Forgiveness", speaker: "Lewis Ross · LSE", time: "11.30 — 13.00", where: "Aula Silvio Trentin" },
  { d: "16", m: "APR", title: "Innovare tra pubblico e privato", speaker: "Di Biagi · Strummiello · Fuorlo", time: "14.30 — 16.00", where: "Aula Silvio Trentin" },
  { d: "16", m: "APR", title: "L'America's Cup a Napoli", speaker: "Panzironi · Falconio", time: "16.30 — 18.00", where: "Aula Silvio Trentin" },
];

function BNav({ active = "Home", lang, setLang }) {
  const items = ["Home", "About", "Events", "Editorial", "Collaborate"];
  return (
    <header className="b-nav">
      <div className="b-nav-top">
        <div className="b-nav-date">Venezia · {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</div>
        <a className="b-brand" href="#"><Wordmark size={36} accent="var(--b-accent)" /></a>
        <div className="b-nav-actions">
          <button className="b-lang" onClick={() => setLang(lang === "en" ? "it" : "en")}>
            <span className={lang === "en" ? "on" : ""}>EN</span>
            <span className="sep">·</span>
            <span className={lang === "it" ? "on" : ""}>IT</span>
          </button>
          <a className="b-btn-pill" href="#">Subscribe</a>
        </div>
      </div>
      <nav className="b-nav-bottom">
        {items.map((n) => (
          <a key={n} href="#" className={"b-link " + (n === active ? "is-active" : "")}>{n}</a>
        ))}
        <span className="b-nav-spacer" />
        <span className="b-nav-issue">Issue 24 · Spring 2026</span>
      </nav>
    </header>
  );
}

function BHero({ variant = 0 }) {
  if (variant === 0) {
    // Magazine cover: huge serif statement
    return (
      <section className="b-hero b-hero-v0">
        <div className="b-hero-eyebrow">
          <span className="b-eyebrow-num">№ 01</span>
          <span>The PISE Network — student & alumni community of Ca' Foscari's PISE programme.</span>
        </div>
        <h1 className="b-h1-display">
          Bigger than <em>the</em><br />
          <em>classroom</em>.
        </h1>
        <div className="b-hero-grid">
          <div className="b-hero-lead">
            <p>
              We bring together students, graduates, academics and professionals through
              public events, editorial work and mentorship — around politics, economics,
              philosophy and international affairs.
            </p>
            <div className="b-hero-cta">
              <a className="b-btn b-btn-primary" href="#">Become a member <span>→</span></a>
              <a className="b-btn-text" href="#">Read the editorial →</a>
            </div>
          </div>
          <figure className="b-hero-photo">
            <img src="assets/san-marco.jpeg" alt="" />
            <figcaption>Graduation in Piazza San Marco — the closing ritual of every PISE cohort.</figcaption>
          </figure>
        </div>
      </section>
    );
  }
  if (variant === 1) {
    // Editorial spread: pull-quote + drop cap
    return (
      <section className="b-hero b-hero-v1">
        <div className="b-spread">
          <div className="b-spread-left">
            <div className="b-eyebrow-num">№ 01 — Welcome</div>
            <h1 className="b-h1-display b-h1-display-small">
              <em>Where</em> philosophy,<br/> international studies <em>&</em><br /> economics meet <em>the</em> world.
            </h1>
          </div>
          <div className="b-spread-right">
            <p className="b-dropcap">
              <span className="b-drop">P</span>ISE Network is the student and alumni
              community of Ca' Foscari's Bachelor's programme in Philosophy, International
              Studies, and Economics. We exist to make the PISE experience bigger than
              the classroom — connecting people, ideas and opportunities across politics,
              economics, society and international affairs.
            </p>
            <p>
              Public events. Editorial work. One-to-one mentorship. Student-led
              initiatives. The bridge between an academic background and a real
              professional pathway.
            </p>
            <div className="b-hero-cta">
              <a className="b-btn b-btn-primary" href="#">Become a member <span>→</span></a>
              <a className="b-btn-text" href="#">Editorial →</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  // Variant 2: Pull-quote led
  return (
    <section className="b-hero b-hero-v2">
      <div className="b-pullquote">
        <span className="b-quote-mark">“</span>
        <blockquote>
          A community of students and alumni who care about <em>politics</em>,{" "}
          <em>economics</em>, <em>philosophy</em> and <em>international affairs</em> —
          and who want to do something with that.
        </blockquote>
        <div className="b-pq-byline">— PISE Network manifesto, 2022</div>
      </div>
      <div className="b-hero-cta b-hero-cta-center">
        <a className="b-btn b-btn-primary" href="#">Become a member <span>→</span></a>
        <a className="b-btn-text" href="#">Read what we publish →</a>
      </div>
    </section>
  );
}

function BFeaturedEvent() {
  return (
    <section className="b-featured">
      <div className="b-section-rule">
        <span className="b-section-label">Upcoming · In focus</span>
        <span className="b-section-rule-line" />
      </div>
      <div className="b-featured-grid">
        <div className="b-featured-text">
          <div className="b-featured-when">15 — 17 April 2026 · Ca' Foscari, Venice</div>
          <h2 className="b-h2"><em>PISE Days</em> 2026 — three days of talks to unlock innovation.</h2>
          <p className="b-featured-body">
            Nine conversations across philosophy, economics, public policy and international affairs,
            with guest speakers from LSE, King's College, Crédit Agricole Italia, KPMG, MAG, Bank of
            Italy and more.
          </p>
          <div className="b-featured-meta">
            <div><span className="b-meta-l">Format</span><span>Talks · Roundtables · Open</span></div>
            <div><span className="b-meta-l">Where</span><span>Aula Silvio Trentin · Ca' Dolfin</span></div>
            <div><span className="b-meta-l">Languages</span><span>English · Italian</span></div>
          </div>
          <a className="b-btn b-btn-primary" href="#">See full programme <span>→</span></a>
        </div>
        <figure className="b-featured-photo">
          <img src="assets/poster-pisedays.png" alt="PISE Days 2026 poster" />
        </figure>
      </div>
    </section>
  );
}

function BEditorial() {
  return (
    <section className="b-editorial">
      <div className="b-section-rule">
        <span className="b-section-label">From the editorial</span>
        <span className="b-section-rule-line" />
        <a className="b-section-more" href="#">All articles →</a>
      </div>
      <div className="b-articles">
        <article className="b-article b-article-lead">
          <div className="b-art-num">{B_ARTICLES[0].num} · {B_ARTICLES[0].cat}</div>
          <h3 className="b-art-h">{B_ARTICLES[0].title}</h3>
          <p className="b-art-excerpt">{B_ARTICLES[0].excerpt}</p>
          <div className="b-art-byline">By <em>{B_ARTICLES[0].author}</em> · {B_ARTICLES[0].date}, 2026</div>
        </article>
        <div className="b-articles-secondary">
          {B_ARTICLES.slice(1).map((a) => (
            <article key={a.num} className="b-article-sec">
              <div className="b-art-num">{a.num} · {a.cat}</div>
              <h3 className="b-art-h-sec">{a.title}</h3>
              <p className="b-art-excerpt-sec">{a.excerpt}</p>
              <div className="b-art-byline">By <em>{a.author}</em> · {a.date}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BPillars() {
  const pillars = [
    { n: "I", t: "Public events & roundtables", d: "Talks with academics, professionals, institutions and alumni — in Venice and beyond." },
    { n: "II", t: "Editorial", d: "Student-led writing on politics, economics, society and international affairs." },
    { n: "III", t: "Mentorship", d: "One-to-one guidance between current students and graduates." },
    { n: "IV", t: "Collaboration", d: "Support for student-led initiatives within and around PISE." },
  ];
  return (
    <section className="b-pillars">
      <div className="b-section-rule">
        <span className="b-section-label">What we do</span>
        <span className="b-section-rule-line" />
      </div>
      <div className="b-pillars-grid">
        {pillars.map((p) => (
          <div key={p.n} className="b-pillar">
            <div className="b-pillar-n">{p.n}</div>
            <h3 className="b-pillar-t">{p.t}</h3>
            <p className="b-pillar-d">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BAgenda() {
  return (
    <section className="b-agenda">
      <div className="b-section-rule">
        <span className="b-section-label">Agenda · Coming up</span>
        <span className="b-section-rule-line" />
        <a className="b-section-more" href="#">Full calendar →</a>
      </div>
      <table className="b-agenda-table">
        <tbody>
          {B_EVENTS.map((e, i) => (
            <tr key={i}>
              <td className="b-ag-date"><span className="b-ag-d">{e.d}</span><span className="b-ag-m">{e.m}</span></td>
              <td className="b-ag-time">{e.time}</td>
              <td className="b-ag-title"><h4>{e.title}</h4><span>{e.speaker}</span></td>
              <td className="b-ag-where">{e.where}</td>
              <td className="b-ag-cta"><a href="#">Details →</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function BMembership() {
  return (
    <section className="b-membership">
      <div className="b-membership-inner">
        <div className="b-membership-eyebrow">An invitation</div>
        <h2 className="b-h2-display">Three hundred members.<br/><em>One conversation</em> across years and cohorts.</h2>
        <p className="b-membership-body">
          The PISE Network is open to current students, graduates, faculty and friends of the programme.
          Become a member to receive the editorial, get invited to closed roundtables, and access the
          mentorship pool.
        </p>
        <div className="b-hero-cta b-hero-cta-center">
          <a className="b-btn b-btn-primary" href="#">Apply to join <span>→</span></a>
          <a className="b-btn-text" href="#">Talk to us first →</a>
        </div>
      </div>
    </section>
  );
}

function BFooter() {
  return (
    <footer className="b-footer">
      <div className="b-foot-top">
        <div className="b-foot-brand">
          <Wordmark size={32} tone="dark" accent="var(--b-accent)" />
          <p>Student & alumni community of the PISE programme<br/>at Ca' Foscari University of Venice.</p>
        </div>
        <div className="b-foot-cols">
          <div>
            <div className="b-foot-h">Read</div>
            <a href="#">Latest issue</a>
            <a href="#">Archive</a>
            <a href="#">Subscribe</a>
          </div>
          <div>
            <div className="b-foot-h">Network</div>
            <a href="#">About</a>
            <a href="#">Mentorship</a>
            <a href="#">Become a member</a>
          </div>
          <div>
            <div className="b-foot-h">Follow</div>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="mailto:hello@pisenetwork.com">hello@pisenetwork.com</a>
          </div>
        </div>
      </div>
      <div className="b-foot-base">
        <span>© 2026 PISE Network · Dorsoduro 3246, Venezia</span>
        <span>Set in <em>Newsreader</em> & <em>Inter</em> · Printed on screen</span>
      </div>
    </footer>
  );
}

function BDirectionHomepage({ heroVariant = 0, accent = "#9C1B2A" }) {
  const [lang, setLang] = React.useState("en");
  return (
    <div className="b-root" style={{ "--b-accent": accent }}>
      <BNav active="Home" lang={lang} setLang={setLang} />
      <BHero variant={heroVariant} />
      <BFeaturedEvent />
      <BPillars />
      <BEditorial />
      <BAgenda />
      <BMembership />
      <BFooter />
    </div>
  );
}

function BDirectionEvents({ accent = "#9C1B2A" }) {
  const [lang, setLang] = React.useState("en");
  return (
    <div className="b-root" style={{ "--b-accent": accent }}>
      <BNav active="Events" lang={lang} setLang={setLang} />
      <section className="b-page-head">
        <div className="b-eyebrow-num">Section II — Events</div>
        <h1 className="b-h1-display b-h1-display-small">
          <em>Where</em> we gather. <em>What</em> we discuss.
        </h1>
        <p className="b-page-lead">
          Public talks, closed roundtables and seasonal gatherings — open to the PISE community
          and to anyone interested in serious conversation about the world.
        </p>
      </section>
      <BFeaturedEvent />
      <BAgenda />
      <section className="b-agenda">
        <div className="b-section-rule">
          <span className="b-section-label">Past · Selected</span>
          <span className="b-section-rule-line" />
        </div>
        <table className="b-agenda-table b-agenda-past">
          <tbody>
            {[
              { d: "21", m: "MAR", title: "AI, automation and European labour", speaker: "Prof. Sofia Bianchi · Bocconi", time: "Recap available", where: "Aula M. Baratto" },
              { d: "07", m: "MAR", title: "Foreign policy after the war in Ukraine", speaker: "Amb. Stefano Pontecorvo (ret.)", time: "Recap available", where: "Auditorium S. Margherita" },
              { d: "14", m: "FEB", title: "Reading Hannah Arendt today", speaker: "Editorial board roundtable", time: "Notes published", where: "Ca' Bottacin" },
            ].map((e, i) => (
              <tr key={i}>
                <td className="b-ag-date"><span className="b-ag-d">{e.d}</span><span className="b-ag-m">{e.m}</span></td>
                <td className="b-ag-time">{e.time}</td>
                <td className="b-ag-title"><h4>{e.title}</h4><span>{e.speaker}</span></td>
                <td className="b-ag-where">{e.where}</td>
                <td className="b-ag-cta"><a href="#">Read recap →</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <BFooter />
    </div>
  );
}

function BDirectionAbout({ accent = "#9C1B2A" }) {
  const [lang, setLang] = React.useState("en");
  return (
    <div className="b-root" style={{ "--b-accent": accent }}>
      <BNav active="About" lang={lang} setLang={setLang} />
      <section className="b-page-head">
        <div className="b-eyebrow-num">Section I — About</div>
        <h1 className="b-h1-display b-h1-display-small">
          A <em>bridge</em> between the classroom <em>&</em> the world.
        </h1>
      </section>
      <section className="b-spread b-mission-spread">
        <div className="b-spread-left">
          <div className="b-section-label">Mission</div>
          <p className="b-mission-text">
            To create a bridge between university and the outside world — helping PISE students
            turn their academic background into real conversations, opportunities, and
            professional pathways.
          </p>
        </div>
        <div className="b-spread-right">
          <div className="b-section-label">Vision</div>
          <p className="b-mission-text">
            A strong, active, long-lasting community where students and alumni support each other,
            exchange ideas, and contribute to public debate on politics, economics, society, and
            international affairs.
          </p>
        </div>
      </section>
      <BPillars />
      <section className="b-board">
        <div className="b-section-rule">
          <span className="b-section-label">The board · 2025—26</span>
          <span className="b-section-rule-line" />
        </div>
        <div className="b-board-grid">
          {[["Alessandro Rossi", "President"], ["Chiara Vianello", "Editorial Lead"], ["Marco De Luca", "Events"], ["Sofia Conti", "Mentorship"], ["Tommaso Greco", "Partnerships"], ["Elena Furlan", "Communications"]].map(([n, r]) => (
            <div key={n} className="b-board-card">
              <div className="b-board-photo" />
              <div className="b-board-name">{n}</div>
              <div className="b-board-role">{r}</div>
            </div>
          ))}
        </div>
      </section>
      <BMembership />
      <BFooter />
    </div>
  );
}

window.BDirectionHomepage = BDirectionHomepage;
window.BDirectionEvents = BDirectionEvents;
window.BDirectionAbout = BDirectionAbout;
