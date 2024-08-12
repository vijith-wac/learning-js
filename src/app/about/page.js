// app/about/page.js
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('about')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
  ];
}
