import React from 'react';
import { Link } from 'react-router-dom';
import './Article1.css';

function Article1() {
  return (
    <>
      <nav>
        <a className="nav-brand" href="/">Noor<span>.</span></a>
        <a className="nav-back" href="/">← Back to Portfolio</a>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-cat">TECHNOLOGY & HUMAN RIGHTS</div>
          <h1>The Role of Technology in Advancing Human Rights in Kenya</h1>
          <div className="hero-meta">
            <span>Noor</span>
            <span>April 2026</span>
            <span>8 min read</span>
          </div>
          <p className="hero-lead">
            From mobile documentation tools to AI-powered legal aid, technology is reshaping how rights are
            claimed, monitored, and defended across Kenya — but only if built with the communities it serves.
          </p>
        </div>
      </header>

      <article className="article">
        <div style={{marginBottom: '1.5rem'}}>
          <span className="tag">CIVIC TECH</span>
          <span className="tag">HUMAN RIGHTS</span>
          <span className="tag">KENYA</span>
          <span className="tag">AI</span>
        </div>

        <p>
          In 2007, Kenya's post-election violence killed over a thousand people and displaced hundreds of thousands more.
          In the aftermath, a critical failure was documented: the absence of real-time, reliable reporting tools meant
          that violations were undercounted, victims were unheard, and accountability was delayed. From that crisis emerged
          Ushahidi — a Kenyan-built platform that would become one of the most influential civic technology tools in the world.
        </p>

        <p>
          That moment marked a turning point. It demonstrated that technology, when designed deliberately and deployed
          locally, could serve as infrastructure for human rights — not merely a convenience layer on top of it.
        </p>

        <h2>The Kenyan Context</h2>
        <p>
          Kenya sits at a unique intersection: a country with significant human rights challenges — including land
          displacement, police brutality, restrictions on civic space, and digital rights violations — and one of
          Africa's most vibrant technology ecosystems. Nairobi's "Silicon Savannah" hosts thousands of developers,
          startups, and NGOs working at the frontier of digital innovation.
        </p>
        <p>
          This creates both an opportunity and a responsibility. The tools being built here don't just serve Kenya —
          they are increasingly shaping how rights work is done across the continent.
        </p>

        <div className="pullquote">
          "The most powerful human rights technology is not the most sophisticated — it is the most accessible
          to those whose rights are most at risk."
        </div>

        <h2>Three Areas Where Tech Is Making a Difference</h2>

        <h3>1. Documentation and Evidence Collection</h3>
        <p>
          Mobile-first documentation tools have transformed how violations are recorded. Activists and community
          paralegal networks now use encrypted apps to collect testimonies, geotag incidents, and upload evidence
          to secure servers — all from a smartphone. Platforms like Uwiano and adaptations of Kobo Toolbox
          have been used by Kenyan civil society organisations to systematically document enforced disappearances,
          brutality during protests, and electoral irregularities.
        </p>
        <p>
          The challenge is not just building these tools — it is building them with communities, not for them.
          Documentation tools that require digital literacy or consistent internet access exclude precisely the
          communities that face the highest risks.
        </p>

        <h3>2. Legal Aid and Access to Justice</h3>
        <p>
          Access to legal information remains deeply unequal in Kenya. Rural communities, low-income urban residents,
          and marginalised groups often lack the means to navigate complex legal processes. AI-powered legal aid
          chatbots — some already piloted by organisations like Sheria Mtandaoni — are beginning to fill this gap
          by helping users understand their rights, draft complaints, and identify relevant legal aid providers.
        </p>

        <div className="highlight-box">
          <p><strong>Case in point:</strong> During the 2024 #OccupyParliament protests, several young Kenyans who
          were arrested used mobile-accessible legal guides to understand bail processes and connect with human
          rights lawyers — tools that were built and maintained by local civil society organisations.</p>
        </div>

        <h3>3. Monitoring and Accountability</h3>
        <p>
          Data journalism and open-data platforms have created new pathways for accountability. Initiatives like
          Kenya's Open Data Initiative and tools built on public procurement data have exposed corruption, enabled
          investigative journalism, and provided citizens with evidence to challenge government actions in court.
        </p>

        <h2>The Risks We Cannot Ignore</h2>
        <p>
          Technology is not inherently liberatory. In the wrong hands — or with the wrong design assumptions —
          it becomes a tool of surveillance, exclusion, and repression.
        </p>
        <ul className="article-list">
          <li>Government deployment of facial recognition technology in public spaces raises serious concerns about mass surveillance and chilling effects on protest.</li>
          <li>Targeted shutdowns of mobile internet during periods of unrest — documented in Kenya and across the region — demonstrate that the same infrastructure that enables rights work can be weaponised against it.</li>
          <li>Algorithmic systems embedded in welfare, policing, and border management can encode and amplify discrimination if they are not audited for bias.</li>
          <li>Data collected by rights organisations, if not properly secured, can become a liability — exposing victims and activists to retaliation.</li>
        </ul>

        <h2>What Responsible Tech for Rights Looks Like</h2>
        <p>
          Across my work in data systems and civic technology, I've come to believe that responsible technology
          for human rights requires three commitments: community ownership, security by design, and
          accountability structures that outlast any individual project or funding cycle.
        </p>
        <p>
          It also requires that technologists — developers, data analysts, product builders — see themselves
          as stakeholders in rights outcomes. The code we write, the systems we build, and the data we collect
          are never politically neutral. They reflect choices about whose needs matter and whose voices are heard.
        </p>

        <div className="pullquote">
          "In Kenya, the most urgent human rights technology challenge is not building new tools —
          it is ensuring that existing tools reach those who need them most."
        </div>

        <h2>Conclusion</h2>
        <p>
          Ushahidi was built in a crisis, by Kenyans, for Kenyans. That origin story matters. The most durable
          and effective rights technologies are not imported solutions — they are locally rooted, community-governed,
          and built by people who understand the terrain.
        </p>
        <p>
          As Kenya's tech ecosystem continues to grow, the question is not whether technology can advance human rights.
          It clearly can, and it is. The question is who gets to build it, who it serves, and who is accountable
          when it fails.
        </p>

        <hr className="divider"/>

        <div className="author-card">
          <div className="author-avatar">N</div>
          <div>
            <div className="author-name">Noor</div>
            <div className="author-bio">Software developer and data analyst based in Nairobi. BSc Information Technology, Technical University of Mombasa. Interested in civic tech, data systems, and the intersection of technology and human rights.</div>
          </div>
        </div>
      </article>

      <div className="more-posts">
        <div className="more-posts-inner">
          <div className="more-label">MORE FROM THIS SERIES</div>
          <div className="more-grid">
            <Link className="more-card" to="/article2">
              <div className="more-card-tag">DATA & GOVERNANCE</div>
              <div className="more-card-title">How Data Can Improve Accountability in Governance</div>
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

export default Article1;