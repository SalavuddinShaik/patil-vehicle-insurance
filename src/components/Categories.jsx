import { useReveal } from '../hooks/useReveal';

const CATS = [
  { icon: '/icon-car.png', title: 'Car Insurance', desc: 'Comprehensive & third-party cover for private cars. Cashless claims at 5,000+ garages.', id: 'car' },
  { icon: '/icon-bike.png', title: 'Bike Insurance', desc: 'Two-wheeler protection with quick renewal and roadside assistance add-ons.', id: 'bike' },
  { icon: '/icon-truck.png', title: 'Commercial Vehicle', desc: 'Goods carriers, taxis, school vans, contractor fleets — permit-linked cover included.', id: 'commercial' },
  { icon: '/icon-misc.png', title: 'Miscellaneous Vehicle', desc: 'Tractors, e-rickshaws, construction equipment and specialty vehicles.', id: 'misc' },
  { icon: '/icon-health.png', title: 'Health Insurance', desc: 'Expert partner network for the right health coverage with dedicated claim support.', id: 'health', isHealth: true },
];

export default function Categories({ onQuoteOpen }) {
  const headRef = useReveal();
  const gridRef = useReveal();

  function handleCardClick() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      onQuoteOpen();
    }
  }

  return (
    <section className="sec" id="categories">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <div className="eyebrow">What we cover</div>
          <h2>Insurance for every need.</h2>
          <p>From two-wheelers to fleets, and now health — one advisor for all your coverage.</p>
        </div>
        <div className="cat-grid rv" ref={gridRef}>
          {CATS.map((c) => (
            <div
              className={`cat-card${c.isHealth ? ' health' : ''}`}
              key={c.id}
              onClick={handleCardClick}
            >
              <div className="cat-icon">
                <img src={c.icon} alt={c.title} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
