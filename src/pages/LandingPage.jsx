 import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const EXPERIENCES = [
  {
    role: "Software Developer & Data Analyst",
    org: "Twiga Foods",
    location: "Nairobi, Kenya",
    period: "2023 – 2024",
    points: [
      "Built dashboards and data pipelines that informed supply chain decisions across East Africa.",
      "Integrated AI-powered tools to automate reporting and improve workflow efficiency.",
      "Developed full-stack features for internal operational systems using Laravel and Python.",
    ],
  },
  {
    role: "Social Media Manager Assistant",
    org: "United Nations Volunteer (UNV)",
    location: "Kenya",
    period: "2023",
    points: [
      "Produced digital knowledge products including reports, infographics, and advocacy content.",
      "Conducted research and literature reviews to support UN communications strategy.",
      "Monitored media trends and compiled timely programme briefings.",
    ],
  },
  {
    role: "Administrative & Programme Support",
    org: "Kenya Red Cross Society",
    location: "Nairobi, Kenya",
    period: "2022 – 2023",
    points: [
      "Coordinated logistics for humanitarian workshops, training sessions, and field missions.",
      "Prepared activity summaries, donor updates, and programme reports.",
      "Supported scheduling, calendar management, and documentation for senior staff.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Property254",
    tag: "Full-Stack Platform",
    color: "#FFDD00",
    desc: "Kenya real estate platform — competitive alternative to BuyRentKenya. Laravel + Tailwind CSS + Leaflet.js + Cloudinary + Claude AI natural language search. Two-tier pricing with agent approval flow.",
    stack: ["Laravel", "Tailwind CSS", "Leaflet.js", "Cloudinary", "Claude API"],
    status: "Active",
  },
  {
    name: "AI Crop Disease Detection",
    tag: "Machine Learning",
    color: "#e8f5e9",
    desc: "ML-based system for detecting crop diseases and pests from field images. Built to support smallholder farmers across East Africa with low-cost diagnostic tooling.",
    stack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    status: "Built",
  },
  {
    name: "HRMS System",
    tag: "Enterprise Software",
    color: "#e3f2fd",
    desc: "Full-stack human resource management system covering onboarding, payroll, leave management, and performance tracking for mid-size organisations.",
    stack: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS"],
    status: "Built",
  },
  {
    name: "Human Rights News Tracker",
    tag: "Civic Tech · Concept",
    color: "#fce4ec",
    desc: "Tool for tracking, aggregating, and categorising human rights news and incidents in Kenya. Designed to support civil society organisations and journalists.",
    stack: ["Python", "NLP", "React", "FastAPI"],
    status: "Concept",
  },
];

const SKILLS = {
  "Software Development": ["Laravel / PHP", "Python", "JavaScript", "Vue.js / React", "MySQL / PostgreSQL", "REST APIs"],
  "Data & AI": ["Data Analysis", "Pandas / NumPy", "Matplotlib", "Machine Learning", "Claude API Integration", "Dashboard Dev"],
  "Tools & Platforms": ["Git / GitHub", "Cloudinary", "Leaflet.js / Maps", "Microsoft Office 365", "Figma", "Linux"],
  "Languages": ["English (Fluent)", "Kiswahili (Fluent)", "Somali (Fluent)", "German (Basic)"],
};

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible((v) => ({ ...v, [e.target.id]: true }));
            const sec = NAV_LINKS.find((l) => l.toLowerCase() === e.target.id);
            if (sec) setActive(sec);
          }
        });
      },
      { threshold: 0.15 }
    );
    Object.values(refs.current).forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    refs.current[id] = el;
  };

  const fadeIn = (id, delay = 0) => ({
    opacity: visible[id] ? 1 : 0,
    transform: visible[id] ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#fafaf8", color: "#111", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(250,250,248,0.94)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e5e5e0",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2rem", height: "56px",
      }}>
        <span style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: "18px", letterSpacing: "-0.03em" }}>
          Noor<span style={{ color: "#FFDD00", textShadow: "0 0 0 #000", WebkitTextStroke: "1px #888" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "13px", letterSpacing: "0.05em",
                fontFamily: "Helvetica Neue, sans-serif",
                color: active === l ? "#111" : "#777",
                fontWeight: active === l ? 600 : 400,
                borderBottom: active === l ? "2px solid #FFDD00" : "2px solid transparent",
                paddingBottom: "2px", transition: "all 0.2s",
              }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" ref={setRef("home")}
        style={{
          minHeight: "100vh", display: "flex", alignItems: "center",
          justifyContent: "center", padding: "80px 2rem 2rem",
          background: "linear-gradient(160deg, #fafaf8 60%, #fff9d6 100%)",
        }}>
        <div style={{ maxWidth: "640px", width: "100%" }}>
          <div style={{
            display: "inline-block",
            background: "#FFDD00", color: "#111",
            fontFamily: "Helvetica Neue, sans-serif",
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
            padding: "4px 12px", marginBottom: "1.5rem",
            ...fadeIn("home", 0),
          }}>
            NAIROBI, KENYA · BSC INFORMATION TECHNOLOGY
          </div>

          <h1 style={{
            fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 700,
            lineHeight: 1.05, margin: "0 0 1rem",
            letterSpacing: "-0.03em",
            ...fadeIn("home", 0.1),
          }}>
            Noor
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)", color: "#444",
            lineHeight: 1.6, margin: "0 0 0.5rem",
            fontFamily: "Helvetica Neue, sans-serif",
            ...fadeIn("home", 0.2),
          }}>
            Software Developer · Data Analyst · Civic Tech Builder
          </p>

          <p style={{
            fontSize: "1rem", color: "#666", lineHeight: 1.8,
            maxWidth: "520px", fontFamily: "Helvetica Neue, sans-serif",
            margin: "0.75rem 0 2rem",
            ...fadeIn("home", 0.3),
          }}>
            I build digital systems that matter — from real estate platforms to AI-powered tools,
            with a commitment to transparency, data integrity, and human rights.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", ...fadeIn("home", 0.4) }}>
            <button onClick={() => scrollTo("Projects")} style={{
              background: "#111", color: "#FFDD00",
              border: "none", padding: "12px 28px",
              fontFamily: "Helvetica Neue, sans-serif",
              fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em",
              cursor: "pointer", transition: "transform 0.15s",
            }}
              onMouseOver={e => e.target.style.transform = "translateY(-2px)"}
              onMouseOut={e => e.target.style.transform = "translateY(0)"}>
              VIEW PROJECTS
            </button>
            <button onClick={() => scrollTo("Contact")} style={{
              background: "transparent", color: "#111",
              border: "1.5px solid #111", padding: "12px 28px",
              fontFamily: "Helvetica Neue, sans-serif",
              fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em",
              cursor: "pointer", transition: "all 0.15s",
            }}
              onMouseOver={e => { e.target.style.background = "#111"; e.target.style.color = "#fff"; }}
              onMouseOut={e => { e.target.style.background = "transparent"; e.target.style.color = "#111"; }}>
              GET IN TOUCH
            </button>
          </div>

          <div style={{
            display: "flex", gap: "2rem", marginTop: "3rem",
            fontFamily: "Helvetica Neue, sans-serif",
            ...fadeIn("home", 0.5),
          }}>
            {[["3+", "Years Experience"], ["10+", "Projects Built"], ["3", "Languages"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: "1.8rem", fontWeight: 700, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: "11px", color: "#888", letterSpacing: "0.06em", marginTop: "4px" }}>{l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={setRef("about")}
        style={{ padding: "6rem 2rem", background: "#fff", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div style={fadeIn("about", 0)}>
            <div style={{
              fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px",
              letterSpacing: "0.12em", color: "#999", marginBottom: "0.75rem",
            }}>ABOUT ME</div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, margin: "0 0 1.25rem", letterSpacing: "-0.02em" }}>
              Tech for people,<br />not just systems.
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.85, fontFamily: "Helvetica Neue, sans-serif", marginBottom: "1rem" }}>
              I'm an Information Technology graduate from Technical University of Mombasa with hands-on experience
              spanning software development, data analysis, AI integration, and programme support.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.85, fontFamily: "Helvetica Neue, sans-serif" }}>
              My work bridges the gap between technical execution and real-world impact — from building platforms
              that serve thousands of Kenyan property seekers, to supporting humanitarian and UN programmes through
              data, research, and digital tools. I believe technology is most powerful when it serves communities.
            </p>
          </div>

          <div style={{ ...fadeIn("about", 0.15), display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { icon: "🎓", label: "Education", val: "BSc Information Technology\nTechnical University of Mombasa, 2021–2025" },
              { icon: "📍", label: "Location", val: "Nairobi, Kenya" },
              { icon: "🌍", label: "Languages", val: "English · Kiswahili · Somali · German (Basic)" },
              { icon: "💡", label: "Focus Areas", val: "Civic Tech · Data Systems · AI Integration · Human Rights" },
            ].map(({ icon, label, val }) => (
              <div key={label} style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                padding: "1rem 1.25rem",
                border: "0.5px solid #e8e8e3",
                borderLeft: "3px solid #FFDD00",
              }}>
                <span style={{ fontSize: "18px", lineHeight: 1 }}>{icon}</span>
                <div>
                  <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", fontWeight: 600, color: "#999", letterSpacing: "0.08em", marginBottom: "4px" }}>{label.toUpperCase()}</div>
                  <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13.5px", color: "#333", whiteSpace: "pre-line", lineHeight: 1.5 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" ref={setRef("experience")}
        style={{ padding: "6rem 2rem", background: "#fafaf8", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ ...fadeIn("experience"), marginBottom: "3rem" }}>
            <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "0.75rem" }}>EXPERIENCE</div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>Where I've worked</h2>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "148px", top: 0, bottom: 0, width: "1px", background: "#e8e8e0" }} />
            {EXPERIENCES.map((exp, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "140px 1fr",
                gap: "2rem", marginBottom: "3rem",
                ...fadeIn("experience", i * 0.1),
              }}>
                <div style={{ textAlign: "right", paddingTop: "2px" }}>
                  <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "12px", color: "#888", lineHeight: 1.5 }}>
                    {exp.period}
                  </div>
                  <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "10px", color: "#bbb", marginTop: "4px" }}>
                    {exp.location}
                  </div>
                </div>
                <div style={{ paddingLeft: "2rem", position: "relative" }}>
                  <div style={{
                    position: "absolute", left: "-6px", top: "7px",
                    width: "11px", height: "11px", borderRadius: "50%",
                    background: "#FFDD00", border: "2px solid #fff",
                    boxShadow: "0 0 0 1px #ccc",
                  }} />
                  <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "2px" }}>
                    {exp.org}
                  </div>
                  <div style={{ fontFamily: "'Georgia', serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                    {exp.role}
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13.5px", color: "#555", lineHeight: 1.7, marginBottom: "4px", paddingLeft: "1rem", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "#FFDD00", fontWeight: 900 }}>—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" ref={setRef("projects")}
        style={{ padding: "6rem 2rem", background: "#fff", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ ...fadeIn("projects"), marginBottom: "3rem" }}>
            <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "0.75rem" }}>PROJECTS</div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>Things I've built</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "1.25rem" }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{
                border: "0.5px solid #e8e8e3",
                padding: "1.75rem",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "default",
                ...fadeIn("projects", i * 0.08),
              }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <span style={{
                    fontFamily: "Helvetica Neue, sans-serif", fontSize: "10px",
                    fontWeight: 700, letterSpacing: "0.1em",
                    background: p.color, color: "#333",
                    padding: "3px 10px",
                  }}>{p.tag.toUpperCase()}</span>
                  <span style={{
                    fontFamily: "Helvetica Neue, sans-serif", fontSize: "10px",
                    color: p.status === "Active" ? "#1a7a3c" : p.status === "Concept" ? "#666" : "#444",
                    fontWeight: 600, letterSpacing: "0.06em",
                  }}>{p.status === "Active" ? "● ACTIVE" : p.status === "Concept" ? "◌ CONCEPT" : "✓ BUILT"}</span>
                </div>

                <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.6rem" }}>{p.name}</h3>
                <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13.5px", color: "#555", lineHeight: 1.7, margin: "0 0 1rem" }}>{p.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.stack.map((t) => (
                    <span key={t} style={{
                      fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px",
                      color: "#666", border: "0.5px solid #ddd",
                      padding: "2px 8px",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={setRef("skills")}
        style={{ padding: "6rem 2rem", background: "#fafaf8", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ ...fadeIn("skills"), marginBottom: "3rem" }}>
            <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "#999", marginBottom: "0.75rem" }}>SKILLS</div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>What I work with</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <div key={cat} style={{ ...fadeIn("skills", i * 0.1) }}>
                <div style={{
                  fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px",
                  fontWeight: 700, letterSpacing: "0.1em", color: "#999",
                  borderBottom: "2px solid #FFDD00", paddingBottom: "8px", marginBottom: "1rem",
                }}>{cat.toUpperCase()}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {items.map((skill) => (
                    <span key={skill} style={{
                      fontFamily: "Helvetica Neue, sans-serif", fontSize: "13.5px", color: "#333", lineHeight: 1.5,
                    }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* BLOG */}
<section id="blog" style={{ padding: "6rem 2rem", background: "#fafaf8", borderTop: "1px solid #eee" }}>
  <div style={{ maxWidth: "900px", margin: "0 auto" }}>
    <div style={{ marginBottom: "2.5rem" }}>
      <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", letterSpacing: ".12em", color: "#999", marginBottom: ".6rem" }}>WRITING</div>
      <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "2rem", fontWeight: 700, letterSpacing: "-.02em", margin: 0 }}>
        Thoughts on tech, rights &amp; governance
      </h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
      {[
        { num: "01", tag: "TECH & RIGHTS", title: "The Role of Technology in Advancing Human Rights in Kenya", desc: "From mobile documentation tools to AI-powered legal aid, technology is reshaping how rights are claimed and defended — but only if built with communities.", href: "/article1", mins: 8 },
        { num: "02", tag: "DATA & GOV", title: "How Data Can Improve Accountability in Governance", desc: "Public data, properly collected and openly published, can be one of the most powerful checks on state power — if civil society knows how to use it.", href: "/article2", mins: 7 },
        { num: "03", tag: "DIGITAL RIGHTS", title: "Digital Rights Are Human Rights: Closing the Gap in Kenya", desc: "Access, privacy, and freedom of expression online have life-and-death stakes for Kenya's most marginalised communities.", href: "/article3", mins: 6 },
        { num: "04", tag: "CIVIC TECH", title: "Building Civic Technology That Communities Actually Use", desc: "Most civic tech fails — not because it doesn't work, but because it was built without the communities it was meant to serve.", href: "/article4", mins: 7 },
        { num: "05", tag: "AI & SOCIETY", title: "AI in Africa: Opportunity, Risk, and the Need for Local Governance", desc: "Africa is not a passive recipient of the AI revolution. Without locally-led governance, the continent risks importing both the technology and its harms.", href: "/article5", mins: 8 },
      ].map(({ num, tag, title, desc, href, mins }) => (
        <Link key={num} to={href} style={{ background: "#fff", border: "0.5px solid #e8e8e3", borderRadius: "12px", padding: "1.4rem 1.5rem", textDecoration: "none", display: "flex", flexDirection: "column", gap: ".75rem", transition: "transform .18s, border-color .18s" }}
          onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "#aaa"; }}
          onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#e8e8e3"; }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: ".1em", background: "#FFDD00", color: "#333", padding: "3px 9px" }}>{tag}</span>
            <span style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", fontSize: "1.5rem", fontWeight: 700, color: "#ddd", lineHeight: 1 }}>{num}</span>
          </div>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: "1rem", fontWeight: 700, color: "#111", lineHeight: 1.4, margin: 0 }}>{title}</p>
          <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "13px", color: "#666", lineHeight: 1.65, margin: 0, flex: 1 }}>{desc}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: ".75rem", borderTop: "0.5px solid #eee" }}>
            <span style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", color: "#bbb" }}>{mins} min read · April 2026</span>
            <span style={{ color: "#666" }}>→</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" ref={setRef("contact")}
        style={{
          padding: "6rem 2rem",
          background: "#111", color: "#fff",
          borderTop: "1px solid #eee",
        }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center", ...fadeIn("contact") }}>
          <div style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "#FFDD00", marginBottom: "0.75rem" }}>CONTACT</div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0 0 1rem", letterSpacing: "-0.02em", color: "#fff" }}>
            Let's build something.
          </h2>
          <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "1rem", color: "#aaa", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Open to software development roles, data analysis positions, and civic tech collaborations.
            Based in Nairobi, available for hybrid and remote work.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", marginBottom: "2.5rem" }}>
            {[
              { label: "Email", val: "mohamedabdinoor701@gmail.com", href: "mailto:mohamedabdinoor701@gmail.com" },
              { label: "LinkedIn", val: "linkedin.com", href: "https://www.linkedin.com/in/abdinoor-mohamed-3935b0229" },
              { label: "GitHub", val: "github.com", href: "https://github.com/abdinoor12345" },
            ].map(({ label, val, href }) => (
              <a key={label} href={href} style={{
                display: "flex", alignItems: "center", gap: "1rem",
                textDecoration: "none",
                fontFamily: "Helvetica Neue, sans-serif",
                fontSize: "14px",
                transition: "color 0.2s",
              }}
                onMouseOver={e => e.currentTarget.style.color = "#FFDD00"}
                onMouseOut={e => e.currentTarget.style.color = "#fff"}>
                <span style={{ color: "#FFDD00", fontSize: "11px", letterSpacing: "0.08em", fontWeight: 700, minWidth: "70px", textAlign: "right" }}>{label.toUpperCase()}</span>
                <span style={{ color: "#ccc" }}>{val}</span>
              </a>
            ))}
          </div>

          <div style={{ borderTop: "0.5px solid #333", paddingTop: "1.5rem" }}>
            <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "12px", color: "#555" }}>
              Nairobi, Kenya · Available May 2026
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}