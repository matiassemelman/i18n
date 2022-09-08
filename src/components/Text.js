import { useTranslation } from 'react-i18next';

export const Text = () => {
  const { t } = useTranslation();

    return (
      <p>{t('text')}</p>
    )
  }