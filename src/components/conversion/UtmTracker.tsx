import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function UtmTracker() {
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const utmSource = params.get('utm_source');
    const utmMedium = params.get('utm_medium');
    const utmCampaign = params.get('utm_campaign');
    const utmTerm = params.get('utm_term');
    const utmContent = params.get('utm_content');

    if (utmSource || utmMedium || utmCampaign) {
      const utmObj = { utmSource, utmMedium, utmCampaign, utmTerm, utmContent };
      try {
        sessionStorage.setItem('sigma_utm_params', JSON.stringify(utmObj));
        console.log('[Sigma UTM Tracker] Campaign parameters saved:', utmObj);
      } catch (err) {
        console.warn('[Sigma UTM Tracker] Session storage write error:', err);
      }
    }
  }, [search]);

  return null;
}
