// Pise Network wordmark — italic serif "pise" + bold sans "network" + red dot
// Renders as styled HTML (using web fonts) so it's crisp at any size.
function Wordmark({ tone = "dark", size = 28, accent = "#C8102E", className = "" }) {
  const color = tone === "light" ? "#FFFFFF" : "#0A0A0A";
  return (
    <span
      className={"pn-wordmark " + className}
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: size * 0.18,
        fontSize: size,
        lineHeight: 1,
        color,
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontFamily: "'PT Serif', 'Times New Roman', serif", fontStyle: "italic", fontWeight: 400 }}>
        pise
      </span>
      <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}>
        network
      </span>
      <span
        style={{
          display: "inline-block",
          width: size * 0.18,
          height: size * 0.18,
          borderRadius: "50%",
          background: accent,
          alignSelf: "center",
          marginLeft: size * 0.04,
        }}
        aria-hidden="true"
      />
    </span>
  );
}

window.Wordmark = Wordmark;
