import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Home, Search, MessageCircle, Phone } from 'lucide-react';
import { generateWhatsAppLink, SIGMA_PHONE_NUMBER } from '@/services/leads';

export function ThankYouPage() {
  const [searchParams] = useSearchParams();
  const leadType = searchParams.get('type') || 'enquiry';

  useEffect(() => {
    document.title = 'Thank You | Sigma Homes India';
  }, []);

  const getConfirmationContent = () => {
    switch (leadType) {
      case 'site_visit':
        return {
          title: 'Your Site Visit Request Has Been Received!',
          subtitle: 'Our relationship manager will call you to confirm your site tour schedule and driver assistance.',
        };
      case 'price_request':
        return {
          title: 'Official Cost Sheet Request Received!',
          subtitle: 'We are sending the latest unit availability, floor plan pricing, and cost sheets to your contact.',
        };
      case 'investment':
        return {
          title: 'Investment Advisory Request Received!',
          subtitle: 'Our senior investment analyst will reach out with corridor research and project asset profiles.',
        };
      case 'sell_property':
        return {
          title: 'Property Valuation Request Received!',
          subtitle: 'Our resale and valuation team will evaluate your property location details and get in touch.',
        };
      case 'nri':
        return {
          title: 'NRI Consultation Request Received!',
          subtitle: 'Our global NRI desk representative will schedule your virtual video consultation.',
        };
      case 'callback':
        return {
          title: 'Callback Request Received!',
          subtitle: 'Our advisor will call you back at your requested time slot.',
        };
      default:
        return {
          title: 'Thank You for Contacting Sigma Homes!',
          subtitle: 'Your inquiry has been logged with our customer advisory desk.',
        };
    }
  };

  const content = getConfirmationContent();
  const whatsappUrl = generateWhatsAppLink({});

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-24 flex items-center justify-center">
      <div className="container-content max-w-lg">
        <div className="bg-white rounded-3xl border border-sigma-stone-200/80 p-8 md:p-10 shadow-2xl text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-sigma-green-50 text-sigma-green-600 flex items-center justify-center">
            <CheckCircle className="h-10 w-10" />
          </div>

          <div className="space-y-2">
            <span className="eyebrow text-sigma-blue-600">Submission Confirmed</span>
            <h1 className="text-2xl md:text-3xl font-bold font-serif text-sigma-graphite-900">
              {content.title}
            </h1>
            <p className="text-xs md:text-sm text-sigma-stone-600 leading-relaxed max-w-xs mx-auto pt-1">
              {content.subtitle}
            </p>
          </div>

          {/* Instant Action Options */}
          <div className="pt-4 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-sigma-green-600 hover:bg-sigma-green-700 text-white rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Need Instant Reply? Chat on WhatsApp
            </a>

            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/properties"
                className="py-3 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Search className="h-4 w-4 text-sigma-blue-600" />
                Browse Properties
              </Link>
              <Link
                to="/"
                className="py-3 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Home className="h-4 w-4 text-sigma-blue-600" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
