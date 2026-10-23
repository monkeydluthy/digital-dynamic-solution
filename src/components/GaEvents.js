import { useEffect } from 'react';

// Delegated GA4 listeners. window.gtag?.() keeps a missing gtag a no-op.
function GaEvents() {
  useEffect(() => {
    const onClick = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      // Captured at click time: gtag sends after router navigation, when
      // the default page_location would already be the destination page.
      const page_location = window.location.href;

      const tel = target.closest('a[href^="tel:"]');
      if (tel) {
        window.gtag?.('event', 'click_to_call', {
          link_location: tel.dataset.location || 'unknown',
          page_location,
        });
      }

      const cta = target.closest('[data-cta]');
      if (cta) {
        window.gtag?.('event', 'cta_click', {
          cta_location: cta.dataset.cta,
          page_location,
        });
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}

export default GaEvents;
