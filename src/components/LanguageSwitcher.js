// components/LanguageSwitcher.js
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    setLocale(window.navigator.language.split('-')[0] || 'en'); // Default to 'en' if no language is detected
  }, []);

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    router.push(`/${newLocale}${window.location.pathname}`);
  };

  return (
    <select value={locale} onChange={handleLocaleChange}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      {/* Add more languages here */}
    </select>
  );
}
