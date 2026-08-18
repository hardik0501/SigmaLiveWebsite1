import { Phone, MessageCircle, Mail } from 'lucide-react';
import { contact } from '@/data/navigation';

export function MobileLeadBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="grid grid-cols-3 border-t border-sigma-stone-200 bg-sigma-ivory-50/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(10,23,48,0.06)]">
        <a
          href={`tel:${contact.salesHelplineRaw}`}
          className="flex flex-col items-center gap-1 py-3 text-sigma-blue-700 transition-colors hover:bg-sigma-blue-50"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-semibold">Call</span>
        </a>
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          className="flex flex-col items-center gap-1 py-3 text-sigma-green-600 border-x border-sigma-stone-200 transition-colors hover:bg-sigma-green-50"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <a
          href="#final-cta"
          className="flex flex-col items-center gap-1 py-3 text-sigma-amber-600 transition-colors hover:bg-sigma-amber-50"
        >
          <Mail className="h-5 w-5" />
          <span className="text-xs font-semibold">Enquire</span>
        </a>
      </div>
    </div>
  );
}
