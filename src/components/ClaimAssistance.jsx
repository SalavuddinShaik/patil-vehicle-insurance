import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  { title: 'Claim Guidance', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> },
  { title: 'Documentation Support', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
  { title: 'Renewal Reminders', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> },
  { title: 'Policy Reviews', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { title: 'Ongoing Customer Service', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
];

export default function ClaimAssistance() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="sec claim-sec on-dark" id="claims">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <div className="eyebrow">Claim assistance</div>
          <h2>We Help You When It Matters Most</h2>
          <p>We don't just sell policies — we stand by you at every step of the claim process.</p>
        </div>
        <div className="claim-grid rv" ref={gridRef}>
          {SERVICES.map((s) => (
            <div className="claim-card" key={s.title}>
              <div className="claim-icon">{s.icon}</div>
              <span>{s.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
