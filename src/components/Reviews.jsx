import { useReveal } from '../hooks/useReveal';
import { useEffect, useRef } from 'react';

const REVIEWS = [
  {
    name: 'Venkatesh Das',
    stars: 5,
    date: '2026-07-27',
    text: 'Excellent service and very helpful staff! I recently got my vehicle insurance through this office, and the entire process was smooth and hassle-free. They explained everything clearly and helped me choose the right insurance policy. Quick response and great customer support!',
    initial: 'V',
    color: '#4285F4',
  },
  {
    name: 'Shilpa Kinagi',
    stars: 5,
    date: '2026-07-25',
    text: 'I had a great experience working with my insurance adviser. He is knowledgeable, patient, and explained all the policy details clearly. They helped me choose the best coverage for my needs without any pressure. I highly recommend their services to everyone.',
    initial: 'S',
    color: '#0F9D58',
  },
  {
    name: 'Khaleel Khaleel',
    stars: 5,
    date: '2026-07-25',
    text: 'I did my vehicle insurance here, Patil sir is very experienced person, he fully informative about vehicle insurance. Excellent service and very reasonable pricing. Highly recommended for all vehicle insurance needs.',
    initial: 'K',
    color: '#4285F4',
  },
  {
    name: 'Satish Pattra',
    stars: 5,
    date: '2026-07-25',
    text: 'Ivarige nanna dhanyavadagalu vehicle insurance alli ivarige tumba knowledge ide. Ivara hatra ne vehicle insurance madikolli. Best service and very helpful. Highly recommended!',
    initial: 'S',
    color: '#F4B400',
  },
];

function timeAgo(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;
  return `${Math.floor(diff / 31536000)} years ago`;
}

function Stars({ count }) {
  return (
    <span className="review-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < count ? '#F4B400' : '#DDD'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  const headRef = useReveal();
  const gridRef = useReveal();
  const scrollRef = useRef(null);
  const avg = (REVIEWS.reduce((a, r) => a + r.stars, 0) / REVIEWS.length).toFixed(1);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let id = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 1) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 404, behavior: 'smooth' });
      }
    }, 3000);
    const pause = () => clearInterval(id);
    const resume = () => {
      clearInterval(id);
      id = setInterval(() => {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 1) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 404, behavior: 'smooth' });
        }
      }, 3000);
    };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    return () => { clearInterval(id); el.removeEventListener('mouseenter', pause); el.removeEventListener('mouseleave', resume); };
  }, []);

  return (
    <section className="sec reviews-sec" id="reviews">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <div className="eyebrow">Customer reviews</div>
          <h2>What our customers say</h2>
        </div>

        <div className="reviews-grid" ref={scrollRef}>
          {REVIEWS.map((r, i) => (
            <div className="review-card" key={i} style={{ position: 'relative' }}>
              <span className="review-quote">&ldquo;</span>
              <div className="review-header">
                <div className="review-avatar" style={{ background: r.color }}>{r.initial}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-meta">
                    <Stars count={r.stars} />
                    <span className="review-time">{timeAgo(r.date)}</span>
                  </div>
                </div>
              </div>
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
