 import React from 'react';

const kpis = [
  { label: 'Total records',      value: '1.1M+',  color: ''       },
  { label: 'Unique patients',    value: '202K+',  color: ''       },
  { label: 'Viral suppression',  value: '47.1%',  color: 'green'  },
  { label: 'Active on ART',      value: '72%',    color: 'green'  },
  { label: 'Lost to follow-up',  value: '18%',    color: 'red'    },
  { label: 'Hypertension',       value: '5.2%',   color: 'amber'  },
];

const recommendations = [
  { num: '01', title: 'Retention',        body: 'Strengthen LTFU tracing, especially for working-age adults 35–54' },
  { num: '02', title: 'Early diagnosis',  body: 'Scale up community testing to reduce late-stage enrollment among older males' },
  { num: '03', title: 'Adherence support',body: 'Targeted support for females and 35–54 age group to improve suppression' },
  { num: '04', title: 'Data quality',     body: 'Address 59.7% nutritional status gap at facility level' },
  { num: '05', title: 'Geographic focus', body: 'Prioritize western Kenya counties — Homa Bay, Busia, Kisumu' },
];

// ── Reusable components ──────────────────────────────────────

function ChartFrame({ src, alt, caption }) {
  return (
    <div style={styles.chartFrame}>
      {src
        ? <img src={src} alt={alt} style={styles.chartImg} />
        : (
          <div style={styles.placeholder}>
            <span style={styles.placeholderIcon}>📊</span>
            <strong style={{ fontSize: 12 }}>{alt}</strong>
            <span style={styles.placeholderSub}>Place chart: charts/{src || alt}</span>
          </div>
        )
      }
    </div>
  );
}

function InsightBox({ children, type = 'info' }) {
  const s = type === 'warning' ? styles.warnBox : styles.insightBox;
  return <div style={s}><p style={styles.insightText}>{children}</p></div>;
}

function Section({ icon, title, subtitle, children }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionTitle}>
        <span>{icon}</span> {title}
      </div>
      {subtitle && <p style={styles.sectionSub}>{subtitle}</p>}
      {children}
    </div>
  );
}

// ── Main Report ──────────────────────────────────────────────

export default function Report() {
  return (
    <div style={styles.report}>

      {/* Header */}
      <header style={styles.header}>
    <a href="/" >  <span style={styles.badge}>Palladium Kenya — Intern Assessment</span></a>
        <h1 style={styles.h1}>HIV Program Data Analysis</h1>
        <p style={styles.headerSub}>
          Exploratory analysis of ART program metrics, viral suppression, retention,
          and comorbidity data · 25 May 2026
        </p>
      </header>

      {/* KPI Cards */}
      <div style={styles.kpiGrid}>
        {kpis.map((k) => (
          <div key={k.label} style={styles.kpi}>
            <div style={styles.kpiLabel}>{k.label}</div>
            <div style={{
              ...styles.kpiVal,
              color: k.color === 'green' ? '#15803d'
                   : k.color === 'red'   ? '#dc2626'
                   : k.color === 'amber' ? '#d97706'
                   : 'inherit'
            }}>
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* Demographics */}
      <Section icon="👥" title="Patient demographics"
        subtitle="Sex distribution, age at ART enrollment, and top counties by patient volume">
        <ChartFrame src="charts/demographics.png" alt="demographics.png" />
        <InsightBox>
          <strong>Key finding:</strong> Two thirds of patients are female, driven by antenatal
          testing. Median enrollment age is 34 years. Nairobi and Uasin Gishu lead in volume;
          Homa Bay and Busia reflect the Lake Victoria high-prevalence corridor.
        </InsightBox>
      </Section>

      {/* ART Enrollment Trend */}
      <Section icon="📈" title="ART enrollment trend"
        subtitle="New patients starting ART per year — 2000 to 2026">
        <ChartFrame src="charts/art_enrollment_trend.png" alt="art_enrollment_trend.png" />
        <InsightBox>
          <strong>Key finding:</strong> Enrollment grew steadily from 2004 and peaked 2016–2019,
          aligned with Kenya's Universal Test and Treat rollout. A visible post-2020 dip reflects
          COVID-19 disruptions to facility attendance.
        </InsightBox>
      </Section>

      {/* Viral Suppression */}
      <Section icon="🧬" title="Viral suppression"
        subtitle="Overall rate, by sex, and by age group">
        <div style={styles.twoCol}>
          <ChartFrame src="charts/viral_suppression_overall.png" alt="viral_suppression_overall.png" />
          <ChartFrame src="charts/viral_suppression_sex.png"    alt="viral_suppression_sex.png" />
        </div>
        <div style={{ marginTop: 10 }}>
          <ChartFrame src="charts/viral_suppression_age.png" alt="viral_suppression_age.png" />
        </div>
        <InsightBox>
          <strong>Key finding:</strong> Overall suppression stands at 47.1% — below the UNAIDS
          95-95-95 target. Males suppress better (50.4%) than females (45.5%). Children under 14
          and adults over 65 perform best; working-age adults 35–54 lag behind.
        </InsightBox>
      </Section>

      {/* Treatment Outcomes */}
      <Section icon="📋" title="Treatment outcomes"
        subtitle="Active vs lost to follow-up vs deceased, and outcome by WHO stage">
        <div style={styles.twoCol}>
          <ChartFrame src="charts/treatment_outcomes.png"    alt="treatment_outcomes.png" />
          <ChartFrame src="charts/outcome_by_who_stage.png"  alt="outcome_by_who_stage.png" />
        </div>
        <InsightBox>
          <strong>Key finding:</strong> 72% remain active on treatment. 18% are lost to follow-up
          — the single biggest program gap. WHO Stage 1 patients have an 86% active rate; Stage 4
          patients face 44% mortality, confirming late diagnosis as a key driver of death.
        </InsightBox>
      </Section>

      {/* Clinical Indicators */}
      <Section icon="❤️" title="Clinical indicators"
        subtitle="Nutritional status and hypertension prevalence">
        <div style={styles.twoCol}>
          <ChartFrame src="charts/nutritional_status.png" alt="nutritional_status.png" />
          <ChartFrame src="charts/hypertension.png"       alt="hypertension.png" />
        </div>
        <InsightBox type="warning">
          <strong>Data quality note:</strong> 59.7% of nutritional status records were missing —
          flagged as a facility-level recording gap. Nutritional findings should be interpreted
          with caution.
        </InsightBox>
      </Section>

      {/* Marital Status */}
      <Section icon="📊" title="Marital status profile"
        subtitle="Social demographics of enrolled patients">
        <ChartFrame src="charts/marital_status.png" alt="marital_status.png" />
        <InsightBox>
          <strong>Key finding:</strong> Married patients form the largest cohort, followed by
          single patients. Implications for couples testing, disclosure support, and partner
          notification programs.
        </InsightBox>
      </Section>

      {/* Age Distribution */}
      <Section icon="📦" title="Age distribution analysis"
        subtitle="Age at ART by sex and by treatment outcome — Seaborn violin and box plots">
        <div style={styles.twoCol}>
          <ChartFrame src="charts/age_distribution_by_sex.png" alt="age_distribution_by_sex.png" />
          <ChartFrame src="charts/age_by_outcome.png"          alt="age_by_outcome.png" />
        </div>
        <InsightBox>
          <strong>Key finding:</strong> Female patients cluster strongly in 25–35 years, driven
          by antenatal testing. Patients with a deceased outcome enrolled at a slightly older
          median age, confirming late diagnosis as a mortality driver.
        </InsightBox>
      </Section>

      {/* Recommendations */}
      <Section icon="✅" title="Key recommendations">
        <div style={styles.recGrid}>
          {recommendations.map((r) => (
            <div key={r.num} style={styles.recCard}>
              <div style={styles.recNum}>{r.num}</div>
              <div style={styles.recTitle}>{r.title}</div>
              <div style={styles.recBody}>{r.body}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer style={styles.footer}>
        <span>Abdinoor Mohamed Ali · BSc IT, Technical University of Mombasa</span>
        <span>Palladium Kenya Assessment · 25 May 2026</span>
      </footer>

    </div>
  );
}

// ── Styles ───────────────────────────────────────────────────

const styles = {
  report: {
    fontFamily: 'Segoe UI, sans-serif',
    color: '#1e293b',
    padding: '1.5rem',
    maxWidth: 960,
    margin: '0 auto',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
  },
  header: {
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '1.25rem',
    marginBottom: '1.5rem',
  },
  badge: {
    display: 'inline-block',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '3px 10px',
    borderRadius: 6,
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    marginBottom: 10,
  },
  h1: {
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 1.3,
    color: '#0f172a',
  },
  headerSub: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
  kpiGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: 10,
    marginBottom: '1.5rem',
  },
  kpi: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    padding: '14px 16px',
  },
  kpiLabel: {
    fontSize: 11,
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: 6,
  },
  kpiVal: {
    fontSize: 22,
    fontWeight: 700,
    color: '#0f172a',
  },
  section: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '1.25rem',
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#0f172a',
  },
  sectionSub: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: '1rem',
  },
  chartFrame: {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 180,
  },
  chartImg: {
    maxWidth: '100%',
    maxHeight: 320,
    objectFit: 'contain',
    borderRadius: 4,
  },
  placeholder: {
    textAlign: 'center',
    color: '#94a3b8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  placeholderIcon: {
    fontSize: 28,
  },
  placeholderSub: {
    fontSize: 11,
    color: '#cbd5e1',
  },
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 10,
  },
  insightBox: {
    marginTop: '1rem',
    borderLeft: '3px solid #3b82f6',
    padding: '10px 12px',
    backgroundColor: '#eff6ff',
    borderRadius: '0 8px 8px 0',
  },
  warnBox: {
    marginTop: '1rem',
    borderLeft: '3px solid #f59e0b',
    padding: '10px 12px',
    backgroundColor: '#fffbeb',
    borderRadius: '0 8px 8px 0',
  },
  insightText: {
    fontSize: 12,
    color: '#334155',
    lineHeight: 1.6,
    margin: 0,
  },
  recGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: 8,
    marginTop: '0.75rem',
  },
  recCard: {
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    padding: '10px 12px',
    backgroundColor: '#f8fafc',
  },
  recNum: {
    fontSize: 11,
    fontWeight: 600,
    color: '#94a3b8',
    marginBottom: 4,
  },
  recTitle: {
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 4,
    color: '#0f172a',
  },
  recBody: {
    fontSize: 11,
    color: '#64748b',
    lineHeight: 1.5,
  },
  footer: {
    marginTop: '1.5rem',
    paddingTop: '1rem',
    borderTop: '1px solid #e2e8f0',
    fontSize: 11,
    color: '#94a3b8',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
};