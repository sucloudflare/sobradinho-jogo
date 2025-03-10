import React from 'react';
import { X, Cookie } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
}

export function CookieConsent({ onAccept }: CookieConsentProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 p-4 shadow-lg z-50 border-t border-slate-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie size={24} className="text-amber-500" />
          <p className="text-slate-300 text-sm">
            Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onAccept}
            className="bg-amber-500 text-slate-900 px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors text-sm font-semibold"
          >
            Aceitar
          </button>
          <button
            onClick={onAccept}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}