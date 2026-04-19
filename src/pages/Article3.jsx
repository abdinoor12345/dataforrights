import React from 'react';
import { Link } from 'react-router-dom';
import './Article3.css';

function Article3() {
  return (
    <>
      <nav>
        <a className="nav-brand" href="#">Noor<span>.</span></a>
        <a className="nav-back" href="/">← Back to Portfolio</a>
      </nav>

      <header className="hero">
        <div className="hero-left">
          <div className="hero-cat">DIGITAL RIGHTS</div>
          <h1>Digital Rights Are <em>Human</em> Rights:<br/>Closing the Gap in Kenya</h1>
          <div className="hero-meta">
            <span>Noor</span>
            <span>April 2026</span>
            <span>6 min read</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-issue-count">ISSUE 03 OF 05</div>
          <p className="hero-led text-gray-700">
            Access to the internet, freedom of expression online, and protection from digital surveillance
            are not technical niceties — they are fundamental rights with life-and-death stakes
            for Kenya's most marginalised communities.
          </p>
        </div>
      </header>

      <article className="article">
        <div style={{marginBottom: '1.5rem'}}>
          <span className="tag">DIGITAL RIGHTS</span>
          <span className="tag">PRIVACY</span>
          <span className="tag">ACCESS</span>
          <span className="tag">KENYA</span>
        </div>

        <p>
          In June 2024, young Kenyans filled the streets to oppose a Finance Bill they believed would
          impose unjust tax burdens. They organised primarily through social media — WhatsApp, X, TikTok —
          and documented police violence in real time. The government's response included not just physical
          force but digital pressure: accounts were reported and suspended, there were credible reports of
          digital surveillance of organisers, and calls were made by some officials to regulate online speech.
        </p>
        <p>
          That moment crystallised what digital rights advocates have been arguing for years: in the digital
          age, your ability to organise, speak, access information, and be heard depends on whether your
          digital rights are protected. And in Kenya, those rights remain deeply uneven.
        </p>

        <h2>What Digital Rights Actually Means</h2>
        <div className="rights-grid">
          <div className="rights-item">
            <div className="rights-item-title">ACCESS</div>
            <p>The right to meaningfully access the internet — not just technically, but affordably and in your own language.</p>
          </div>
          <div className="rights-item">
            <div className="rights-item-title">PRIVACY</div>
            <p>Freedom from unlawful surveillance, data collection, and interference with your digital communications.</p>
          </div>
          <div className="rights-item">
            <div className="rights-item-title">EXPRESSION</div>
            <p>The right to speak, publish, and organise online without censorship, harassment, or disproportionate legal liability.</p>
          </div>
          <div className="rights-item">
            <div className="rights-item-title">REMEDY</div>
            <p>Accessible legal recourse when digital rights are violated — including by private companies and state actors.</p>
          </div>
        </div>

        <h2>The Access Gap</h2>
        <p>
          Despite Kenya's reputation as a tech hub, internet access remains deeply unequal. Mobile internet
          penetration in Nairobi vastly outpaces rural counties. Data costs, while declining, still represent
          a disproportionate share of income for low-wage workers. And "access" is not just about connectivity —
          it includes digital literacy, accessible interfaces, and content in Kiswahili and local languages.
        </p>
        <p>
          When rights information, government services, and civic participation move online — as they increasingly
          are — the access gap becomes a rights gap. Those without meaningful internet access are systematically
          excluded from an expanding domain of civic and social life.
        </p>

        <div className="pullquote">
          "If democracy moves online and only half the country can get there, we have not digitised democracy.
          We have digitised exclusion."
        </div>

        <h2>Surveillance and the Chilling Effect</h2>
        <p>
          Kenya has invested significantly in surveillance infrastructure. CCTV networks in Nairobi,
          use of social media monitoring tools by the National Intelligence Service, and the acquisition
          of commercial spyware capabilities have all been documented or credibly alleged by civil society
          and investigative journalists.
        </p>
        <p>
          The harm of surveillance is not only what it catches — it is what it stops. When activists,
          journalists, and ordinary citizens believe they may be monitored, they self-censor. They avoid
          certain searches, conversations, and associations. This chilling effect is a human rights violation
          even when no one is ever arrested.
        </p>

        <div className="warning-box">
          <p><strong>The Data Protection Act (2019)</strong> created a framework for privacy rights in Kenya —
          but enforcement has been weak. The Office of the Data Protection Commissioner remains under-resourced,
          and some of the Act's provisions include broad national security exemptions that can be used to
          justify surveillance programmes that would otherwise violate the law.</p>
        </div>

        <h2>Platform Accountability</h2>
        <p>
          Digital rights violations don't only come from governments. Social media platforms make decisions
          about content moderation, algorithmic amplification, and data collection that profoundly affect
          Kenyan users — often with minimal transparency, local language support, or contextual understanding.
        </p>
        <p>
          The 2023 case that emerged from Facebook content moderation in Kenya — in which moderators
          described exposure to deeply traumatic content with inadequate psychological support — raised
          serious questions about the labour rights and digital rights dimensions of platform operations
          in the Global South.
        </p>

        <h2>What Needs to Change</h2>
        <ul className="article-list">
          <li>Strengthen and adequately resource the Office of the Data Protection Commissioner.</li>
          <li>Close national security loopholes in the Data Protection Act that enable unchecked surveillance.</li>
          <li>Enact a clear legal framework governing government acquisition and use of surveillance technology.</li>
          <li>Require platforms operating in Kenya to publish transparency reports covering content removals and government requests.</li>
          <li>Invest in affordable internet access as a public good, not only a commercial service.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          The separation between "online rights" and "human rights" is an artificial one. The same principles —
          dignity, freedom, equality, accountability — apply in digital spaces as they do everywhere else.
          The challenge is building the legal, institutional, and civic infrastructure to enforce them there.
        </p>
        <p>
          In Kenya, the legal foundations exist. The 2010 Constitution's Bill of Rights, the Data Protection Act,
          and international commitments all provide a framework. What is needed now is the political will and
          civil society pressure to make those frameworks real — online, and for everyone.
        </p>

        <hr/>
        <div className="author-card">
          <div className="author-avatar">N</div>
          <div>
            <div className="author-name">Noor</div>
            <div className="author-bio">Software developer and civic tech practitioner based in Nairobi. Writes on the intersection of technology, rights, and governance in East Africa.</div>
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

export default Article3;