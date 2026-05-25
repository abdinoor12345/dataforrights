 
 import React from 'react';

export default function Report() {
  const totalPatients = 1099235;

  return (
    <div className="min-h-screen bg-slate-100 p-6 lg:p-10 font-sans text-slate-800">
      
      {/* Executive Header */}
      <header className="mb-8 border-b border-slate-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Internal Evaluation</span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-2">Palladium Patient Assessment Report</h1>
          <p className="text-slate-500 mt-1">Cross-sectional analysis of ART program metrics, clinical retention data, and comorbidity prevalence.</p>
        </div>
        <div className="flex gap-2 text-xs font-semibold text-slate-500 bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
          <span>Data Snapshot: Active Cohort</span>
        </div>
      </header>

      {/* Topline Aggregated Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        {/* Metric 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Enrolled Registry</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{totalPatients.toLocaleString()}</h3>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Viral Suppression Rate</p>
            <h3 className="text-3xl font-black text-emerald-600 mt-1">47.1%</h3>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Median Intake Age</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">34 Yrs</h3>
          </div>
          <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hypertension Comorbidity</p>
            <h3 className="text-3xl font-black text-rose-600 mt-1">5.2%</h3>
          </div>
          <div className="p-3 bg-rose-50 rounded-xl text-rose-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
        </div>
      </section>

      {/* Main Analysis Sections */}
      <div className="space-y-8">
        
        {/* Section 1: Macro Enrollment Trends */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></span> 
              Longitudinal Intake Velocity
            </h2>
            <p className="text-sm text-slate-500">Historical enrollment trajectory showing program acceleration phases scaling up to peak capacity timelines.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex justify-center items-center">
            <img src="/charts/art_enrollment_trend.png" alt="New ART Enrollments Trend" className="max-h-[350px] object-contain rounded" />
          </div>
        </div>

        {/* Section 2: Clinical Retention & WHO Status Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-amber-500"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span> 
                Treatment Outcomes & WHO Staging Relationship
              </h2>
              <p className="text-sm text-slate-500 mb-6">Evaluating mortality scale thresholds against baseline clinical staging indicators.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-center items-center">
                <img src="/charts/treatment_outcomes.png" alt="Overall Outcomes" className="max-h-[260px] object-contain" />
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-center items-center">
                <img src="/charts/outcome_by_who_stage.png" alt="Outcomes by WHO Stage" className="max-h-[260px] object-contain" />
              </div>
            </div>

            <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1">
              <p><strong>Key Matrix Insights:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-slate-500">
                <li>Baseline WHO Stage 1 demonstrates highly stable active retention rates (<span className="text-emerald-600 font-semibold">86.0%</span>).</li>
                <li>Stage 4 markers transition rapidly into explicit survival anomalies, escalating localized cohort attrition to <span className="text-rose-600 font-semibold">44.1% mortality risk</span>.</li>
              </ul>
            </div>
          </div>

          {/* Age Demographics Correlation */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-purple-500"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span> 
                Age Attrition Profiling
              </h2>
              <p className="text-sm text-slate-500 mb-4">Boxplot distribution models exploring age deviations against retention status flags.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex justify-center items-center my-auto">
              <img src="/charts/age_by_outcome.png" alt="Age Variance by Outcome" className="max-h-[280px] object-contain" />
            </div>
            <p className="text-xs text-slate-400 mt-4 italic">Noticeable systemic age drift: Loss-to-follow-up patterns concentrate noticeably within younger age medians (~31 Yrs).</p>
          </div>

        </div>

        {/* Section 3: Population Demographics & Structural Baselines */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
          <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="text-orange-500"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg></span> 
            Demographic and Regional Core Allocations
          </h2>
          <p className="text-sm text-slate-500 mb-6">Patient distribution mapping cross-referencing sex distributions, intake age densities, and geographic county density spikes.</p>
          
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex justify-center items-center">
            <img src="/charts/demographics.png" alt="Demographics Dashboard Overview" className="w-full object-contain max-h-[340px]" />
          </div>
        </div>

        {/* Section 4: Secondary Comorbidities & Suppression Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Viral Metrics */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-emerald-500"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span> 
                Viral Suppression Evaluation
              </h2>
              <p className="text-sm text-slate-500 mb-6">Stratifying viral non-replication milestones across distinct age generation segments.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto items-center">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-center items-center h-full">
                <img src="/charts/viral_suppression_overall.png" alt="Overall Suppression" className="max-h-[200px] object-contain" />
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-center items-center md:col-span-2 h-full">
                <img src="/charts/viral_suppression_age.png" alt="Suppression Rate by Age" className="max-h-[200px] object-contain" />
              </div>
            </div>
            <div className="bg-blue-50/70 border border-blue-200 p-3 rounded-xl text-xs text-blue-900 mt-4">
              <strong>U-Shaped Compliance Model:</strong> Pediatric registers (0-14) and geriatric cohorts (65+) hit baseline suppression bounds effectively, while middle-tier demographics (35-54) lag below target parameters.
            </div>
          </div>

          {/* Medical Comorbidities (Hypertension & Nutrition) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-rose-500"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg></span> 
                Comorbidities & Status Elements
              </h2>
              <p className="text-sm text-slate-500 mb-6">Overview tracking physical wellness dependencies alongside critical diagnostic flags.</p>
            </div>
            <div className="space-y-4 my-auto">
              <div className="bg-slate-50 rounded-xl p-2 border border-slate-200 flex justify-center items-center">
                <img src="/charts/hypertension.png" alt="Hypertension Prevalence" className="max-h-[140px] object-contain" />
              </div>
              <div className="bg-slate-50 rounded-xl p-2 border border-slate-200 flex justify-center items-center">
                <img src="/charts/nutritional_status.png" alt="Nutritional Status" className="max-h-[140px] object-contain" />
              </div>
            </div>
          </div>

        </div>

        {/* Section 5: Marital Profiles */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
          <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="text-purple-500"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></span> 
            Socio-Demographic Marital Profiles
          </h2>
          <p className="text-sm text-slate-500 mb-6">Patient classification categorization mapped to social framework configurations.</p>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex justify-center items-center">
            <img src="/charts/marital_status.png" alt="Marital Status Profile" className="max-h-[250px] object-contain" />
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-slate-400 border-t border-slate-200 pt-6">
        <p>Palladium Evaluation Portfolio Metrics Hub — Restricted Core Analytics Pipeline</p>
      </footer>

    </div>
  );
}