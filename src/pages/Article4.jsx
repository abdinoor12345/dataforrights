import React from 'react';
import { Link } from 'react-router-dom';
import './Article4.css';

function Article4() {
  return (
    <>
      <nav>
        <a className="nav-brand" href="/">Noor<span>.</span></a>
        <a className="nav-back" href="/">← Back to Portfolio</a>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-strip">
            <div className="hero-strip-label">CIVIC TECH · ISSUE 04</div>
            <div className="hero-strip-line"></div>
          </div>
          <h1>Building Civic Technology<br/>That Communities <span className="accent">Actually Use</span></h1>
          <div className="hero-bottom">
            <div className="hero-by">
              BY<strong>Noor</strong>
              <span>April 2026 · 7 min</span>
            </div>
            <p className="hero-lede">
              Most civic technology fails — not because it doesn't work, but because it was
              built without the communities it was meant to serve. Here's what changes when
              you build the other way around.
            </p>
          </div>
        </div>
      </header>

      <article className="article">
        <div style={{marginBottom: '1.5rem'}}>
          <span className="tag">CIVIC TECH</span>
          <span className="tag">DESIGN</span>
          <span className="tag">COMMUNITY</span>
          <span className="tag">KENYA</span>
        </div>

        <p>
          There is a graveyard of civic technology. It is full of well-funded apps that nobody uses,
          platforms with beautiful interfaces that don't work in low-bandwidth environments, reporting
          tools that require a smartphone most users don't own, and budget tracking dashboards that
          speak only to wonks. Most of this technology was built by people who care deeply about
          their cause — and yet it failed the communities it was meant to serve.
        </p>
        <p>
          The failure is almost never technical. It is methodological. It is what happens when
          technology is built <em>for</em> communities rather than <em>with</em> them.
        </p>

        <h2>Why Civic Tech Fails</h2>
        <p>
          The typical civic tech project goes something like this: an organisation identifies a problem
          (say, citizens don't report police brutality), assumes a technology solution (a reporting app),
          raises donor funding, hires developers, builds the app, launches it with a press release,
          and then quietly watches the usage metrics flatline over the following months.
        </p>
        <p>
          The problem was almost always visible in the earliest stages, if anyone had been looking.
          The communities who would theoretically use the app were never consulted about whether
          an app was the right solution, what barriers existed to reporting, or whether they trusted
          the organisation enough to submit sensitive information to its servers.
        </p>

        <div className="pullquote">
          "A reporting tool people don't trust is not a reporting tool. It is a <span>risk to the people</span>
          who might use it."
        </div>

        <h2>A Different Approach: What Community-Led Looks Like</h2>
        <p>
          The alternative is not more user testing. It is genuine co-design — where communities are not
          just consulted after the product is built, but are involved from the very first question:
          <em>is technology even the right solution here?</em>
        </p>

        <div className="process-steps">
          <div className="step">
            <div className="step-num">01</div>
            <div>
              <div className="step-title">START WITH THE PROBLEM, NOT THE TOOL</div>
              <div className="step-text">Spend more time than feels comfortable understanding the actual problem — not the assumed one. Talk to community members, not just community leaders. Map the informal systems already in place.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div>
              <div className="step-title">TEST THE ASSUMPTIONS FIRST</div>
              <div className="step-text">Before writing any code, test whether a digital tool is needed at all. Sometimes the better solution is a printed guide, a community radio spot, or a WhatsApp group — things that already work in the user's context.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div>
              <div className="step-title">BUILD FOR THE LOWEST-BANDWIDTH USER</div>
              <div className="step-text">In Kenya, the median internet user is on a mobile connection that is slow, intermittent, and expensive. If your tool requires stable 4G to function, you have designed for Nairobi's CBD, not for the people who most need civic tools.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <div>
              <div className="step-title">DESIGN FOR TRUST, NOT JUST USABILITY</div>
              <div className="step-text">In high-risk contexts — documenting violations, reporting corruption — trust is the most important design variable. Users need to understand who holds their data, what it will be used for, and what protections exist.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">05</div>
            <div>
              <div className="step-title">BUILD MAINTENANCE INTO THE PLAN</div>
              <div className="step-text">Most civic tech dies when the grant ends. Tools that persist are owned by communities or organisations with the capacity and motivation to maintain them. Handover plans should begin at the start of a project, not the end.</div>
            </div>
          </div>
        </div>

        <h2>Lessons from Property254</h2>
        <p>
          Building Property254 — a Kenyan real estate platform — taught me versions of all of these lessons
          in a commercial context, but the principles transfer directly to civic tech. The AI-powered
          natural language search feature I built using the Claude API was not technically complex — what
          made it work was understanding that most Kenyan users search conversationally in Kiswahili-inflected
          English, not in the structured query syntax most property platforms assume.
        </p>
        <p>
          That insight came not from analytics but from conversations. The same principle applies in civic
          technology — the design insight that makes a tool actually useful usually comes from listening,
          not from the codebase.
        </p>

        <div className="example-box">
          <div className="example-box-label">EXAMPLE — KENYA ELECTION MONITORING</div>
          <p>The most effective election monitoring tools deployed in Kenya have consistently relied on
          SMS-based submission — not smartphone apps. Because SMS works on any phone, does not require
          internet access, and is already deeply familiar to Kenyan users. The "lower-tech" solution
          generated dramatically higher participation.</p>
        </div>

        <h2>What the Civic Tech Community Needs More Of</h2>
        <ul className="article-list">
          <li>Developers who see community engagement as a core technical skill, not a soft add-on.</li>
          <li>Funding models that reward adoption and sustainability rather than launches and feature counts.</li>
          <li>Tools designed first in Kiswahili and local languages, then translated to English — not the reverse.</li>
          <li>Honest post-mortems when tools fail, so the sector learns rather than repeating the same mistakes.</li>
          <li>Community members paid fairly for their expertise in co-design processes — not just consulted for free.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Civic technology is not a genre of software. It is a practice of relationship-building,
          trust-earning, and problem-solving that happens to involve code. The tools that endure —
          Ushahidi, M-Pesa's early civic adaptations, SMS-based accountability platforms — endured
          because they were built in genuine partnership with the people whose lives depended on them working.
        </p>
        <p>
          That is the standard. It is achievable. But it requires a different kind of humility from
          developers — one that puts community expertise ahead of technical elegance.
        </p>

        <hr/>
        <div className="author-card">
          <div className="author-avatar">N</div>
          <div>
            <div className="author-name">Noor</div>
            <div className="author-bio">Software developer based in Nairobi. Builds platforms including Property254, a Kenya real estate tool with AI natural language search. Interested in civic technology and community-centred design.</div>
          </div>
        </div>
      </article>

      <div className="more-posts">
        <div className="more-posts-inner">
          <div className="more-label">MORE FROM THIS SERIES</div>
          <div className="more-grid">
            <Link className="more-card" to="/article1">
              <div className="more-card-tag">TECHNOLOGY & RIGHTS</div>
              <div className="more-card-title">The Role of Technology in Advancing Human Rights in Kenya</div>
            </Link>
            <Link className="more-card" to="/article2">
              <div className="more-card-tag">DATA & GOVERNANCE</div>
              <div className="more-card-title">How Data Can Improve Accountability in Governance</div>
            </Link>
            <Link className="more-card" to="/article3">
              <div className="more-card-tag">DIGITAL RIGHTS</div>
              <div className="more-card-title">Digital Rights Are Human Rights: Closing the Gap in Kenya</div>
            </Link>
            <Link className="more-card" to="/article5">
              <div className="more-card-tag">AI & SOCIETY</div>
              <div className="more-card-title">AI in Africa: Opportunity, Risk, and the Need for Local Governance</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article4;