import { useState, useEffect, useRef } from 'react';

const VEHICLE_CLASSES = [
  { label: 'Private car', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M19 17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2"/></svg> },
  { label: 'Two-wheeler', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M12 17h-7"/><path d="M19 17h-3l-2-5h5l1 2"/><path d="M10 4h4l-2 8"/></svg> },
  { label: 'Commercial', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 17h22M1 17V7a2 2 0 0 1 2-2h10v12M15 5h4l3 5v7"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg> },
  { label: 'Miscellaneous', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
];

function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <div className="n" ref={ref}>{count}{suffix}</div>;
}

export default function Hero() {
  const [selected, setSelected] = useState(0);
  const [reg, setReg] = useState('');
  const [mobile, setMobile] = useState('');

  function handleCallback() {
    const vehicle = VEHICLE_CLASSES[selected].label;
    let msg = `Hi, I'd like a callback regarding my vehicle insurance.`;
    if (reg.trim()) msg += `\nRegistration: ${reg.trim()}`;
    msg += `\nVehicle: ${vehicle}`;
    if (mobile.trim()) msg += `\nMobile: ${mobile.trim()}`;
    window.open(`https://wa.me/919986330456?text=${encodeURIComponent(msg)}`, '_blank');
  }

  return (
    <section className="hero on-dark">
      <div className="hero-particles" aria-hidden="true">
        <span className="particle p1"></span>
        <span className="particle p2"></span>
        <span className="particle p3"></span>
        <span className="particle p4"></span>
        <span className="particle p5"></span>
      </div>
      <div className="hero-inner wrap">
        <div className="hero-left">
          <h1>Protect What<br /><span>Matters Most.</span></h1>
          <div className="hero-rule"></div>
          <p className="lede">Vehicle & health insurance made simple. One call, one person, complete peace of mind.<br />From policy to claim.</p>

          <div className="metrics-card">
            <div className="metrics-card-inner">
            <div className="metrics">
              <div className="metric">
                <div className="metric-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <Counter end={15} suffix="+" />
                <div className="l">Years Experience</div>
              </div>
              <div className="metric">
                <div className="metric-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
                </div>
                <Counter end={500} suffix="+" />
                <div className="l">Claims Settled</div>
              </div>
              <div className="metric">
                <div className="metric-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <Counter end={10} suffix="k+" />
                <div className="l">Policies Served</div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="hero-card" id="quote">
          <div className="eyebrow">Renewal quote</div>
          <h2>Start with your number plate<span>.</span></h2>

          <div className="hero-sub-row">
            <div className="hero-sub-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <p className="sub">One message back with your price. No call centre, no follow-up calls unless you ask.</p>
          </div>

          <div style={{ marginTop: 24 }}>
            <div className="lbl">Registration number</div>
            <div className="plate">
              <div className="ind">IND</div>
              <input type="text" placeholder="KA 33 AB 1234" aria-label="Registration number" spellCheck="false" autoComplete="off" value={reg} onChange={e => setReg(e.target.value)} />
            </div>
          </div>

          <div className="seg">
            {VEHICLE_CLASSES.map((vc, i) => (
              <button key={vc.label} aria-pressed={selected === i} onClick={() => setSelected(i)}>
                {vc.icon}{vc.label}
              </button>
            ))}
          </div>

          <div className="inp-wrap">
            <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.61.68 2.37a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.32 1.56.55 2.37.68A2 2 0 0 1 22 16.92z"/></svg>
            <input className="inp" type="tel" placeholder="Mobile number" aria-label="Mobile number" autoComplete="tel" value={mobile} onChange={e => setMobile(e.target.value)} />
          </div>

          <button className="go" onClick={handleCallback}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            Request a Callback
          </button>

          <p className="fine">
            <svg className="fine-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Policy expiring this week? Say so in the message and it goes to the front of the queue.
          </p>
        </div>
      </div>
    </section>
  );
}
