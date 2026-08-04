import { useReveal } from '../hooks/useReveal';

const REASONS = [
  { title: '15+ Years of Industry Experience', desc: 'Over a decade and a half of deep insurance expertise you can count on.', gradient: 'linear-gradient(135deg,#3A55E6,#6E8BFF)', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> },
  { title: 'Personalized Insurance Advice', desc: 'We understand your needs and recommend the right coverage — no one-size-fits-all.', gradient: 'linear-gradient(135deg,#7C3AED,#A78BFA)', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
  { title: 'Trusted & Transparent Service', desc: 'No hidden charges, no fine-print surprises. Honest guidance from day one.', gradient: 'linear-gradient(135deg,#059669,#34D399)', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> },
  { title: 'Hassle-Free Claim Assistance', desc: 'From intimation to settlement, we handle the entire claim process for you.', gradient: 'linear-gradient(135deg,#D97706,#FBBF24)', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg> },
  { title: 'Timely Policy Renewals', desc: 'Never miss a renewal — we remind you in advance and get it done quickly.', gradient: 'linear-gradient(135deg,#DC2626,#F87171)', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { title: 'Customer-First Approach', desc: 'Your needs come first. We build lifelong relationships, not just sell policies.', gradient: 'linear-gradient(135deg,#EC4899,#F9A8D4)', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { title: 'Support Every Step of the Way', desc: 'One person handles your policy and claim. No ticket numbers, no call queues.', gradient: 'linear-gradient(135deg,#0891B2,#67E8F9)', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
];

export default function WhyChoose() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="sec why" id="why">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <div className="eyebrow">Why choose us</div>
          <h2>Why Patil Insurance Solutions?</h2>
          <p>Seven reasons families and fleet owners have stayed with us for over a decade.</p>
        </div>
        <div className="why-grid rv" ref={gridRef}>
          {REASONS.map((r) => (
            <div className="why-card" key={r.title}>
              <div className="why-icon" style={{ background: r.gradient }}>{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
