import { useReveal } from '../hooks/useReveal';

const POLICIES = [
  {
    type: 'Third-Party (TP)',
    badge: 'Basic',
    covers: 'Damage, injury, or death to a third party or their property caused by your vehicle.',
    ideal: 'Older vehicles or minimal-use vehicles, fulfilling the legal mandate only.',
    premium: 'Lowest',
    advantages: 'Legally compliant; most affordable.',
    limitations: 'Does not cover damages to your own vehicle.',
  },
  {
    type: 'Standalone OD',
    badge: 'Mid',
    covers: 'Damage or loss to your own vehicle from accidents, theft, fire, or natural calamities.',
    ideal: 'Used only if you already have a mandatory Third-Party cover in place.',
    premium: 'Moderate',
    advantages: 'Covers damages to your car; eligible for No Claim Bonus (NCB).',
    limitations: 'Does not cover third-party liability; requires a separate TP policy.',
  },
  {
    type: 'Comprehensive',
    badge: 'Recommended',
    covers: 'Third-Party liabilities and Own Damage, theft, fire, and natural disasters.',
    ideal: 'All new or high-value vehicles; most owners seek complete protection.',
    premium: 'Highest',
    advantages: 'Complete protection (OD + TP); includes add-on options like Zero Depreciation.',
    limitations: 'Higher premium compared to the other two options.',
  },
];

export default function PolicyTypes() {
  const headRef = useReveal();
  const tableRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section className="pt-sec" id="policy-types">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <div className="eyebrow">Policy types</div>
          <h2>Choose the Right Coverage</h2>
          <p>Three main vehicle insurance options in India — each with different protection levels.</p>
        </div>

        <div className="pt-table-wrap rv" ref={tableRef}>
          <table className="pt-table">
            <thead>
              <tr>
                <th>Policy Type</th>
                <th>What it covers</th>
                <th>Ideal For</th>
                <th>Premium</th>
                <th>Advantages</th>
                <th>Limitations</th>
              </tr>
            </thead>
            <tbody>
              {POLICIES.map((p, i) => (
                <tr key={i}>
                  <td className="pt-type">{p.type}</td>
                  <td>{p.covers}</td>
                  <td>{p.ideal}</td>
                  <td>{p.premium}</td>
                  <td>{p.advantages}</td>
                  <td>{p.limitations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-cards rv" ref={cardsRef}>
          {POLICIES.map((p, i) => (
            <div className={`pt-card${i === 2 ? ' pt-card-featured' : ''}`} key={i}>
              <div className="pt-card-head">
                <span className={`pt-badge${i === 2 ? ' pt-badge-primary' : ''}`}>{p.badge}</span>
                <h3>{p.type}</h3>
                <div className="pt-premium">{p.premium} premium</div>
              </div>
              <div className="pt-card-body">
                <div className="pt-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <div><strong>Covers:</strong> {p.covers}</div>
                </div>
                <div className="pt-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <div><strong>Best for:</strong> {p.ideal}</div>
                </div>
                <div className="pt-row pt-pro">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>{p.advantages}</div>
                </div>
                <div className="pt-row pt-con">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                  <div>{p.limitations}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
