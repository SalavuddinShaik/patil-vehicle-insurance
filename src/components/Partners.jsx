const INSURERS = [
  { name: 'ICICI Lombard', logo: '/partners/icici-lombard.jpg' },
  { name: 'HDFC ERGO', logo: '/partners/hdfc-ergo.jpg' },
  { name: 'Bajaj Allianz', logo: '/partners/bajaj-allianz.jpg' },
  { name: 'SBI General', logo: '/partners/sbi-general.jpg' },
  { name: 'IFFCO-TOKIO', logo: '/partners/iffco-tokio.jpg' },
  { name: 'Liberty General', logo: '/partners/liberty.jpg' },
  { name: 'Chola MS', logo: '/partners/chola-ms.jpg' },
  { name: 'Royal Sundaram', logo: '/partners/royal-sundaram.jpg' },
  { name: 'Magma', logo: '/partners/magma.jpg' },
  { name: 'National Insurance', logo: '/partners/national-insurance.jpg' },
  { name: 'IndusInd', logo: '/partners/indusind.jpg' },
];

export default function Partners() {
  const doubled = [...INSURERS, ...INSURERS];

  return (
    <section className="partners" id="partners">
      <div className="wrap" style={{ marginBottom: 32, textAlign: 'center' }}>
        <div className="sec-head">
          <div className="eyebrow" style={{ color: '#3A55E6' }}>Our partners</div>
          <h2 style={{ fontSize: 'clamp(24px,3.4vw,36px)' }}>Trusted Insurance Partners</h2>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-inner">
          {doubled.map((ins, i) => (
            <div className="partner-logo" key={i}>
              <img src={ins.logo} alt={ins.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
