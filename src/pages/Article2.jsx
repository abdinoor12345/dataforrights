import React from 'react';
import { Link } from 'react-router-dom';
import './Article2.css';

function Article2() {
  return (
    <>
      <nav>
        <a className="nav-brand" href="/">Noor<span>.</span></a>
        <a className="nav-back" href="/">← Back to Portfolio</a>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <div>
              <div className="hero-left-label">DATA & GOVERNANCE</div>
              <div className="hero-num">02</div>
            </div>
            <div>
              <h1>How Data Can Improve Accountability in Governance</h1>
              <div className="hero-meta">
                <span>Noor</span>
                <span>April 2026</span>
                <span>7 min read</span>
              </div>
              <p className="hero-lead">
                Public data, properly collected and openly published, can be one of the most powerful
                checks on state power — if civil society and citizens know how to use it.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="stat-strip">
        <div className="stat-strip-inner">
          <div className="stat">
            <div className="stat-num">KSh 2T+</div>
            <div className="stat-label">Estimated annual public procurement in Kenya</div>
          </div>
          <div className="stat">
            <div className="stat-num">143rd</div>
            <div className="stat-label">Kenya's rank on Corruption Perceptions Index (2023)</div>
          </div>
          <div className="stat">
            <div className="stat-num">47</div>
            <div className="stat-label">Counties with devolved budgets — most underreported</div>
          </div>
        </div>
      </div>

      <article className="article">
        <div style={{marginBottom: '1.5rem'}}>
          <span className="tag">DATA</span>
          <span className="tag">GOVERNANCE</span>
          <span className="tag">ACCOUNTABILITY</span>
          <span className="tag">OPEN DATA</span>
        </div>

        <p>
          Every year, the Kenyan government spends billions of shillings on public contracts. Every year,
          a significant portion of that spending is difficult to track, prone to manipulation, and largely
          invisible to the citizens it is meant to serve. The gap between what government says it does with
          public money and what actually happens is not primarily a technology problem — but technology,
          and specifically data, can dramatically narrow it.
        </p>

        <p>
          Accountability is fundamentally an information problem. Corrupt practices thrive in opacity.
          When data about public spending, service delivery, and government decision-making is not collected,
          not published, or not accessible, accountability mechanisms break down — regardless of how strong
          the legal frameworks on paper are.
        </p>

        <h2>What Open Data Can Expose</h2>
        <p>
          The argument for open government data is not abstract. In Kenya, data-driven accountability work
          has produced concrete results. The OCCRP and local investigative outlets have used procurement
          datasets to trace inflated contracts. Budget analysis tools built by organisations like the
          Institute of Economic Affairs have enabled county-level tracking of development funds.
          Satellite imagery and geographic data have been used to verify whether roads, schools, and
          health facilities actually exist where government records claim they do.
        </p>

        <div className="data-box">
          <div className="data-box-label">CASE STUDY — PROCUREMENT TRANSPARENCY</div>
          <p>When Kenya's Open Contracting Portal was launched, civil society organisations were able
          for the first time to systematically compare awarded contract values against market rates.
          Analysis revealed hundreds of contracts awarded at two to three times reasonable cost —
          findings that informed parliamentary investigations and donor accountability reviews.</p>
        </div>

        <h2>The Data Literacy Gap</h2>
        <p>
          Open data is only as powerful as the people and institutions equipped to use it. In Kenya,
          as in much of sub-Saharan Africa, there is a significant gap between data availability and
          data literacy — particularly at the county level, where much of the most consequential
          resource allocation now happens under devolution.
        </p>
        <p>
          Local journalists, community monitors, and civil society organisations often lack the
          technical skills to access, clean, and analyse even publicly available datasets. This creates
          a situation where data exists but accountability does not follow — because the infrastructure
          of analysis, interpretation, and communication is absent.
        </p>

        <div className="pullquote">
          "Open data without open capacity is just open filing. The data must be matched
          with the skills and tools to turn it into accountability."
        </div>

        <h2>From Data to Accountability: The Chain That Must Hold</h2>
        <p>
          Effective data-driven accountability requires each link in a chain to function. If any link
          breaks, the accountability impact is lost:
        </p>
        <ul className="article-list">
          <li><strong>Data collection:</strong> Governments must be required by law to collect and record standardised data on spending, service delivery, and decisions.</li>
          <li><strong>Data publication:</strong> Collected data must be published in machine-readable, accessible formats — not locked in PDFs or restricted portals.</li>
          <li><strong>Data analysis:</strong> Civil society, journalists, and researchers must have the capacity and tools to interrogate the data.</li>
          <li><strong>Data communication:</strong> Findings must be translated into narratives and evidence that non-technical audiences, including courts and legislators, can act on.</li>
          <li><strong>Institutional response:</strong> Accountability mechanisms — oversight bodies, courts, electoral processes — must be willing and able to respond to data-based evidence.</li>
        </ul>

        <h2>The Role of Technology Builders</h2>
        <p>
          As someone who builds data systems and dashboards, I think about these questions constantly.
          Every design decision in a public-facing data tool carries accountability implications.
          Is the data presented in a way that makes patterns visible or that obscures them?
          Are visualisations designed to inform or to overwhelm? Who has access and who is excluded?
        </p>
        <p>
          The most valuable contribution that data practitioners can make to governance accountability
          is not building the most sophisticated analytical tool — it is building tools that lower the
          barrier for communities to engage with data about their own lives and resources.
        </p>

        <h2>Recommendations for the Kenyan Context</h2>
        <ul className="article-list">
          <li>Mandate machine-readable publication of all county procurement and budget data under PFMA regulations.</li>
          <li>Fund civil society organisations to run data literacy programmes at the ward level.</li>
          <li>Build and open-source standardised data tools for community monitoring of public projects.</li>
          <li>Require beneficiary feedback mechanisms — not just input data — to be published alongside project completion reports.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Data is not a silver bullet. A government determined to be unaccountable will find ways to
          manipulate or withhold data. But the absence of data removes any possibility of accountability.
          Building cultures, systems, and institutions that treat public data as a public good —
          transparently collected, openly published, and widely used — is one of the most concrete
          investments a society can make in governance accountability.
        </p>
        <p>
          In Kenya, the foundation is being laid. The question is whether the political will and
          civic capacity to build on it will keep pace.
        </p>

        <hr/>
        <div className="author-card">
          <div className="author-avatar">N</div>
          <div>
            <div className="author-name">Noor</div>
            <div className="author-bio">Data analyst and software developer based in Nairobi. Builds dashboards and data pipelines with a focus on systems that improve transparency and access to information.</div>
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
            <Link className="more-card" to="/article3">
              <div className="more-card-tag">DIGITAL RIGHTS</div>
              <div className="more-card-title">Digital Rights Are Human Rights: Closing the Gap in Kenya</div>
            </Link>
            <Link className="more-card" to="/article4">
              <div className="more-card-tag">CIVIC TECH</div>
              <div className="more-card-title">Building Civic Technology That Communities Actually Use</div>
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

export default Article2;