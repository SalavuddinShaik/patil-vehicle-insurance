import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const FAQS = [
  {
    q: 'What types of insurance do you offer?',
    a: 'We specialize in vehicle insurance (private car, two-wheeler, commercial, and miscellaneous) and health insurance through our trusted partner network. From third-party to comprehensive coverage, we help you find the right policy.',
  },
  {
    q: 'How do I renew my vehicle insurance?',
    a: 'Simply share your vehicle registration number and mobile number via WhatsApp or call us. We\'ll handle the entire renewal process and get you the best premium — no paperwork hassle.',
  },
  {
    q: 'Do you assist with insurance claims?',
    a: 'Yes, we provide end-to-end claim assistance — from intimation to documentation to settlement. We guide you through every step so you don\'t have to deal with the complexity alone.',
  },
  {
    q: 'Which insurance companies do you work with?',
    a: 'We partner with leading insurers including ICICI Lombard, HDFC ERGO, Bajaj Allianz, SBI General, Reliance General, Shriram General, IFFCO-TOKIO, and many more to offer you the best rates.',
  },
  {
    q: 'How can I get a quote for my vehicle?',
    a: 'Just send us your vehicle number plate details on WhatsApp or call us. We\'ll get back with the best quote within minutes — no follow-up calls unless you ask.',
  },
  {
    q: 'Is there any charge for your consultation?',
    a: 'No, our consultation is completely free. We help you understand your options, compare policies, and choose the best coverage — all at no extra cost to you.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="sec faq-sec" id="faq">
      <div className="wrap">
        <div className="faq-grid rv" ref={gridRef}>
          <div className="faq-left">
            <div ref={headRef}>
              <div className="eyebrow">FAQs</div>
              <h2 className="faq-title">Frequently Asked<br />Questions</h2>
            </div>
            <div className="faq-call-card">
              <img src="/anand-patil.jpg" alt="Anand Patil" className="faq-avatar" />
              <h3>Book a free call</h3>
              <p>Have questions? Talk directly to Anand Patil for expert insurance guidance.</p>
              <a className="faq-cta" href="tel:+910000000000">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.61.68 2.37a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.32 1.56.55 2.37.68A2 2 0 0 1 22 16.92z"/></svg>
                Call Now
              </a>
            </div>
          </div>

          <div className="faq-right">
            {FAQS.map((f, i) => (
              <div className={`faq-item${open === i ? ' faq-open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq-toggle">{open === i ? '×' : '+'}</span>
                </button>
                {open === i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
