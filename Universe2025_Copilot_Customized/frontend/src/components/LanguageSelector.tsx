import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'fr', name: t('language.french'), flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          darkMode 
            ? 'text-light hover:text-primary' 
            : 'text-gray-700 hover:text-primary'
        }`}
        aria-label={t('language.select')}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <svg
          className={`h-4 w-4 transform ${isOpen ? 'rotate-180' : ''} transition-transform`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg ${
            darkMode ? 'bg-dark' : 'bg-white'
          } ring-1 ring-black ring-opacity-5 z-50`}
        >
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 ${
                  darkMode
                    ? 'text-light hover:bg-primary hover:text-white'
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                } ${
                  i18n.language === language.code
                    ? 'bg-primary/20'
                    : ''
                } transition-colors`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
