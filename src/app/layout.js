// app/layout.js
import { NextIntlClientProvider } from 'next-intl';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Layout({ children }) {
  return (
    <html lang="en"> {/* You might want to use a dynamic lang attribute based on locale */}
      <body>
        <header>
          <LanguageSwitcher />
        </header>
        <main>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
