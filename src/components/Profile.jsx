import { useReveal } from '../hooks/useReveal';

export default function Profile() {
  const ref = useReveal();

  return (
    <section className="sec profile-sec" id="profile">
      <div className="profile-shield" aria-hidden="true">
        <svg viewBox="0 0 200 240" fill="none" stroke="rgba(58,85,230,0.08)" strokeWidth="1.5">
          <path d="M100 10L180 50V130C180 180 100 230 100 230C100 230 20 180 20 130V50L100 10Z"/>
          <path d="M100 30L165 62V128C165 170 100 212 100 212C100 212 35 170 35 128V62L100 30Z"/>
        </svg>
      </div>

      <div className="wrap">
        <div className="profile-grid rv" ref={ref}>
          <div className="profile-left profile-left-desktop">
            <div className="profile-photo">
              <img src="/anand-patil.jpg" alt="Anand Patil — Insurance Advisor" />
              <div className="profile-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--cobalt)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <div>
                  <div className="badge-name">Anand Patil</div>
                  <div className="badge-role">Insurance Advisor</div>
                </div>
              </div>
            </div>
            <div className="profile-location">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--cobalt)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
              <div>
                <div className="loc-title">Shahapur, Karnataka</div>
                <div className="loc-sub">Proudly serving our community</div>
              </div>
            </div>
          </div>

          <div className="profile-info">
            <div className="profile-eyebrow">
              <span className="ey-line ey-line-left"></span>
              <span className="ey-diamond ey-diamond-left">&#9670;</span>
              <span>Meet your advisor</span>
              <span className="ey-diamond">&#9670;</span>
              <span className="ey-line"></span>
            </div>
            <h2>Anand Patil</h2>
            <p className="role">Trusted Insurance Advisor in Shahapur, Karnataka</p>

            <div className="profile-left profile-left-mobile">
              <div className="profile-photo">
                <img src="/anand-patil.jpg" alt="Anand Patil — Insurance Advisor" />
                <div className="profile-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--cobalt)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <div>
                    <div className="badge-name">Anand Patil</div>
                    <div className="badge-role">Insurance Advisor</div>
                  </div>
                </div>
              </div>
              <div className="profile-location">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--cobalt)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                <div>
                  <div className="loc-title">Shahapur, Karnataka</div>
                  <div className="loc-sub">Proudly serving our community</div>
                </div>
              </div>
            </div>

            <p className="bio">With over 15 years of experience, Anand Patil has been helping individuals, families, and businesses across Shahapur, Karnataka, find the right insurance solutions with confidence. From choosing the best policy to providing dedicated claim support, he is known for honest advice, personalized service, and long-term customer trust.</p>

            <div className="profile-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <div className="stat-n">15+</div>
                  <div className="stat-l">Years of Experience</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
                </div>
                <div>
                  <div className="stat-n">10k+</div>
                  <div className="stat-l">Policies Served</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <div className="stat-n">500+</div>
                  <div className="stat-l">Claims Supported</div>
                </div>
              </div>
            </div>

            <div className="profile-callout">
              <div className="callout-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></svg>
              </div>
              <div>
                <strong>Looking for the best Insurance Advisor in Shahapur?</strong><br />
                Trust Anand Patil for expert guidance, affordable premiums, and reliable claim assistance.
              </div>
            </div>

            <a className="profile-cta" href="tel:+910000000000">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.61.68 2.37a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.32 1.56.55 2.37.68A2 2 0 0 1 22 16.92z"/></svg>
              Talk to Anand Patil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
