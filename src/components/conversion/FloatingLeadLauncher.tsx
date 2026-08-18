import React, { useState } from 'react';
import { MessageCircle, Phone, PhoneCall, X } from 'lucide-react';
import { generateWhatsAppLink, SIGMA_PHONE_NUMBER } from '@/services/leads';
import { UniversalLeadModal } from './UniversalLeadModal';

export function FloatingLeadLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const whatsappUrl = generateWhatsAppLink({});

  return (
    <>
      <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-2.5">
        {isOpen && (
          <div className="flex flex-col gap-2 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-sigma-stone-200 shadow-2xl animate-in fade-in slide-in-from-bottom-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-sigma-green-600 hover:bg-sigma-green-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Concierge
            </a>
            <a
              href={`tel:${SIGMA_PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl text-xs font-bold transition-colors"
            >
              <Phone className="h-4 w-4 text-sigma-blue-600" />
              Call {SIGMA_PHONE_NUMBER}
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsCallbackOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              Request Instant Callback
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 rounded-full bg-sigma-blue-700 text-white flex items-center justify-center shadow-xl hover:bg-sigma-blue-800 transition-all hover:scale-105"
          title="Quick Assistance"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      <UniversalLeadModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
        leadType="callback"
        title="We'll Call You Back"
      />
    </>
  );
}
