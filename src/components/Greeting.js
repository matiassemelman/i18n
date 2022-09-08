import { useTranslation } from 'react-i18next';

export const Greeting = () => {
  const { t } = useTranslation();

    return (
      <h1>{t('greeting')}</h1>
    );
  }
  
