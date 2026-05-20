import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-dark' : 'bg-gray-100'} p-4 transition-colors duration-300`}>
      <div className={`max-w-4xl w-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'} rounded-lg shadow-lg p-8 border ${darkMode ? 'border-primary/20' : 'border-gray-200'} transition-colors duration-300`}>
        <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-300`}>{t('about.title')}</h1>
        <div className="space-y-6">
          <p>
            {t('about.intro')}
          </p>
          <h2 className="text-2xl font-bold text-primary">{t('about.missionTitle')}</h2>
          <p>
            {t('about.missionText')}
          </p>
          <h2 className="text-2xl font-bold text-primary">{t('about.purposeTitle')}</h2>
          <p>
            {t('about.purposeText')}
          </p>
          <h2 className="text-2xl font-bold text-primary">{t('about.featuresTitle')}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('about.feature1')}</li>
            <li>{t('about.feature2')}</li>
            <li>{t('about.feature3')}</li>
            <li>{t('about.feature4')}</li>
            <li>{t('about.feature5')}</li>
            <li>{t('about.feature6')}</li>
          </ul>
          <div className={`mt-8 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg transition-colors duration-300`}>
            <p className="italic">
              {t('about.quote')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;