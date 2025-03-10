import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'pt-BR', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'ar', name: 'العربية' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors">
        <Globe className="w-5 h-5" />
        <span className="hidden md:inline">{
          languages.find(lang => lang.code === i18n.language)?.name
        }</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-black border border-blue-900/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className="w-full px-4 py-2 text-left text-gray-300 hover:text-blue-500 hover:bg-blue-900/20 transition-colors"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}