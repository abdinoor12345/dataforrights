import React from 'react';
import { Link } from 'react-router-dom';
import './Article5.css';

function Article5() {
  return (
    <>
      <nav>
        <a className="nav-brand" href="/">Noor<span>.</span></a>
        <a className="nav-back" href="/">← Back to Portfolio</a>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <div className="hero-label">AI & SOCIETY · ISSUE 05</div>
            <div className="hero-line"></div>
          </div>
          <h1>AI in Africa:<br/><em>Opportunity, Risk,</em><br/>and the Need for Local Governance</h1>
          <div className="hero-bottom">
            <div>
              <div className="hero-meta-block">
                <span className="hero-meta-label">AUTHOR</span>
                <span className="hero-meta-val">Noor</span>
              </div>
              <div className="hero-meta-block" style={{marginTop: '1rem'}}>
                <span className="hero-meta-label">DATE</span>
                <span className="hero-meta-val">April 2026 · 8 min read</span>
              </div>
            </div>
            <p className="hero-lede">
              Africa is not a passive recipient of the global AI revolution. But without deliberate,
              locally-led governance frameworks, the continent risks importing both the technology
              and its harms.
            </p>
          </div>
        </div>
      </header>

      <div className="tension">
        <div className="tension-inner">
          <div className="tension-label">THE CORE TENSION</div>
          <div className="tension-text">AI offers transformative potential for health, agriculture, education, and governance in Africa — and poses equally transformative risks of bias, displacement, and surveillance.</div>
        </div>
      </div>

      <article className="article">
        <div style={{marginBottom: '1.5rem'}}>
          <span className="tag">AI</span>
          <span className="tag">AFRICA</span>
          <span className="tag">GOVERNANCE</span>
          <span className="tag">RIGHTS</span>
        </div>

        <p>
          Every week brings a new headline about artificial intelligence transforming some sector of African
          life — a diagnostic AI detecting tuberculosis in Kenyan clinics, a crop disease model deployed
          across smallholder farms in Uganda, a chatbot delivering legal information in Kinyarwanda.
          These are not hypothetical. They are happening.
        </p>
        <p>
          At the same time, the risks are also not hypothetical. Facial recognition systems with documented
          bias against darker skin tones are being deployed in urban surveillance programmes. Predictive
          policing algorithms trained on biased historical data are being piloted. Hiring and credit-scoring
          AI systems that encode discrimination against women and rural communities are being adopted
          by financial institutions. These are also happening.
        </p>
        <p>
          The question is not whether AI will reshape Africa. It will. The question is who shapes the AI.
        </p>

        <h2>The Landscape: Opportunity</h2>
        <div className="two-col">
          <div className="col-card opportunity">
            <div className="col-card-label">OPPORTUNITIES</div>
            <ul>
              <li>AI-assisted diagnostics in under-resourced health facilities</li>
              <li>Crop disease and pest detection for smallholder farmers</li>
              <li>Natural language legal aid in local languages</li>
              <li>Early warning systems for climate and disaster risk</li>
              <li>Automated translation enabling civic participation</li>
              <li>Fraud detection in public procurement</li>
            </ul>
          </div>
          <div className="col-card risk">
            <div className="col-card-label">RISKS</div>
            <ul>
              <li>Biased facial recognition in surveillance systems</li>
              <li>Discriminatory credit and hiring algorithms</li>
              <li>Displacement of workers without safety nets</li>
              <li>Data extraction with no local benefit</li>
              <li>Concentration of AI power in foreign corporations</li>
              <li>Chilling effects on civil society and expression</li>
            </ul>
          </div>
        </div>

        <h2>The Data Colonialism Problem</h2>
        <p>
          Much of the AI being deployed in Africa was trained predominantly on data from the Global North.
          This is not a minor technical limitation — it has profound implications for how well these systems
          work, whose values they embed, and who benefits from the value they create.
        </p>
        <p>
          When a facial recognition system trained primarily on lighter-skinned faces is deployed in
          Nairobi, it does not perform equally across the population. When a credit scoring model trained
          on European financial behaviour is applied to Kenyan informal workers, it systematically
          disadvantages people whose economic lives look different from its training data.
        </p>

        <div className="pullquote">
          "Training AI on the world's data and deploying it in Africa is not innovation for Africa.
          It is extraction — of data, of value, and of the opportunity to build locally owned AI infrastructure."
        </div>

        <h2>Kenya's Position</h2>
        <p>
          Kenya is better positioned than most African countries to engage with AI governance meaningfully.
          A growing tech ecosystem, a relatively active civil society, an independent judiciary, and a
          constitutional rights framework that includes provisions applicable to digital contexts all
          provide foundations.
        </p>
        <p>
          The 2022 National AI Policy is a starting point — but it remains light on enforcement mechanisms,
          civil society participation, and specific provisions for high-risk AI applications in areas
          like policing, healthcare, and financial services.
        </p>

        <div className="dark-box">
          <div className="dark-box-label">THE DEVELOPER'S RESPONSIBILITY</div>
          <p>As someone who builds AI-integrated systems — including natural language search powered by
          large language models — I think constantly about these questions. The decision to use a particular
          model, to collect particular data, or to deploy a system in a particular context are not neutral
          technical choices. They are choices with distributional consequences — about who benefits,
          who bears risk, and who has no say in the matter.</p>
        </div>

        <h2>What Local AI Governance Requires</h2>
        <ul className="article-list">
          <li><strong>Mandatory impact assessments</strong> for AI systems deployed in high-risk domains — policing, healthcare, financial services, employment.</li>
          <li><strong>Data localisation and sovereignty</strong> provisions that ensure communities whose data trains AI systems share in the value created.</li>
          <li><strong>Meaningful civil society participation</strong> in AI policymaking — not just consultation after decisions are made.</li>
          <li><strong>Investment in local AI research</strong> capacity, so that African AI is not merely applied AI developed elsewhere.</li>
          <li><strong>Algorithmic transparency</strong> requirements for AI systems used in public-sector decision-making.</li>
          <li><strong>Accessible redress mechanisms</strong> for communities harmed by AI system decisions.</li>
        </ul>

        <h2>The Role of African AI Practitioners</h2>
        <p>
          Those of us building AI-integrated systems in the Kenyan context — whether in health, agriculture,
          civic tech, or commercial platforms — have both a practical and an ethical stake in getting this right.
        </p>
        <p>
          Practically: systems that don't account for local context, language, and data realities simply
          don't work as well. The AI search feature I built for Property254 performs better because it was
          designed around how Kenyan users actually search — not how users in San Francisco do.
        </p>
        <p>
          Ethically: we are building infrastructure that will shape people's access to services, information,
          and rights for years. That responsibility does not disappear because the tool is digital.
        </p>

        <h2>Conclusion</h2>
        <p>
          The global AI conversation is dominated by voices from a handful of countries. Africa's participation
          in shaping the rules, norms, and governance frameworks for AI is not just a matter of fairness —
          it is essential for producing systems that work for and are accountable to African communities.
        </p>
        <p>
          Kenya has the talent, the institutional foundations, and the civic energy to lead that work
          regionally. What is needed is the political investment to make it happen — and a generation of
          practitioners who refuse to separate technical excellence from social responsibility.
        </p>

        <hr/>
        <div className="author-card">
          <div className="author-avatar">N</div>
          <div>
            <div className="author-name">Noor</div>
            <div className="author-bio">Software developer and AI integrations practitioner in Nairobi. Builds systems including Property254's AI-powered search. Writes on technology, rights, and governance in East Africa.</div>
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
            <Link className="more-card" to="/article4">
              <div className="more-card-tag">CIVIC TECH</div>
              <div className="more-card-title">Building Civic Technology That Communities Actually Use</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article5;