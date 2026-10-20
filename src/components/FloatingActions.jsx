export default function FloatingActions() {
  const trackClick = (type) => {
    try {
      const logs = JSON.parse(localStorage.getItem('bathcentric_analytics_log') || '[]');
      logs.push({
        event: `${type}_click`,
        url: window.location.pathname,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('bathcentric_analytics_log', JSON.stringify(logs.slice(-50)));
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="floating-actions" aria-label="Quick Contact Actions">
      <a
        href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20enquire%20about%20a%20shower%20enclosure."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        aria-label="Chat on WhatsApp"
        onClick={() => trackClick('whatsapp')}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.777.818 2.795.818 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.769-5.766-5.769zm10.22 5.766c0 5.655-4.598 10.252-10.25 10.252-1.777 0-3.488-.46-4.994-1.328l-5.556 1.458 1.488-5.419c-.958-1.564-1.464-3.376-1.464-5.234 0-5.655 4.598-10.253 10.25-10.253 5.654 0 10.25 4.598 10.25 10.253z"/>
        </svg>
        <span className="floating-btn-tooltip">Chat on WhatsApp</span>
      </a>

      <a
        href="tel:+919876543210"
        className="floating-btn call"
        aria-label="Call BathCentric Expert"
        onClick={() => trackClick('call')}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className="floating-btn-tooltip">Call +91 98765 43210</span>
      </a>
    </div>
  );
}
