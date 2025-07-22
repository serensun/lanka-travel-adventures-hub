import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { supportedLanguages } from '@/i18n/config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    // Update URL with language prefix
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/');
    const newPath = language === 'en' ? pathWithoutLang : `/${language}${pathWithoutLang}`;
    window.location.href = newPath; // Use location.href for proper navigation
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-blue-800 hover:bg-blue-50">
        <Globe className="w-4 h-4" />
        <span className="font-medium">{supportedLanguages[i18n.language as keyof typeof supportedLanguages] || 'English'}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {Object.entries(supportedLanguages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code)}
            className={`cursor-pointer ${
              i18n.language === code ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;