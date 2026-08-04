export default function Nav() {
  return (
    <nav className="nav" style={{background:'#fff', borderBottom:'1px solid var(--hair)'}}>
      <div className="wrap">
        <a href="#" className="brandline"><img src="/logo.png" alt="Patil Insurance Solutions" className="nav-logo" /></a>
        <div className="nav-links">
          <a href="#categories" style={{color:'var(--slate)'}}>Insurance</a>
          <a href="#why" style={{color:'var(--slate)'}}>Why Us</a>
          <a href="#profile" style={{color:'var(--slate)'}}>About</a>
          <a className="call" href="tel:+910000000000" style={{color:'var(--indigo)', borderColor:'rgba(22,26,60,.28)'}}>Call Now</a>
        </div>
      </div>
    </nav>
  );
}