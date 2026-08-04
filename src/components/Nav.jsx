export default function Nav() {
  return (
    <nav className="nav on-dark">
      <div className="wrap">
        <a href="#" className="brandline"><img src="/logo.png" alt="Patil Insurance Solutions" className="nav-logo" /></a>
        <div className="nav-links">
          <a href="#categories">Insurance</a>
          <a href="#why">Why Us</a>
          <a href="#profile">About</a>
          <a className="call" href="tel:+910000000000">Call Now</a>
        </div>
      </div>
    </nav>
  );
}
