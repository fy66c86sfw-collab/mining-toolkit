// Translation file for Mining Calculator App
// Supports English, French (Français), and Spanish (Español)

const translations = {
  en: {
    // Settings Page
    appTitle: "Mining Toolkit Pro",
    settings: "Settings",
    appSettings: "App Settings",
    theme: "Theme",
    language: "Language",
    units: "Units",
    back: "Back",
    light: "Light",
    dark: "Dark",
    metric: "Metric",
    imperial: "Imperial",
    settingsSaved: "Settings saved!",
    themeDesc: "Choose between light and dark theme for better visibility underground",
    languageDesc: "Select your preferred language",
    unitsDesc: "All measurements will display both units side-by-side across the app"
  },
  fr: {
    // Settings Page
    appTitle: "Outil Minier Pro",
    settings: "Paramètres",
    appSettings: "Paramètres de l'Application",
    theme: "Thème",
    language: "Langue",
    units: "Unités",
    back: "Retour",
    light: "Clair",
    dark: "Sombre",
    metric: "Métrique",
    imperial: "Impérial",
    settingsSaved: "Paramètres sauvegardés!",
    themeDesc: "Choisissez entre thème clair et sombre pour une meilleure visibilité souterraine",
    languageDesc: "Sélectionnez votre langue préférée",
    unitsDesc: "Toutes les mesures afficheront les deux unités côte à côte dans l'application"
  },
  es: {
    // Settings Page
    appTitle: "Herramienta Minera Pro",
    settings: "Configuración",
    appSettings: "Configuración de la Aplicación",
    theme: "Tema",
    language: "Idioma",
    units: "Unidades",
    back: "Volver",
    light: "Claro",
    dark: "Oscuro",
    metric: "Métrico",
    imperial: "Imperial",
    settingsSaved: "¡Configuración guardada!",
    themeDesc: "Elija entre tema claro y oscuro para mejor visibilidad subterránea",
    languageDesc: "Seleccione su idioma preferido",
    unitsDesc: "Todas las medidas mostrarán ambas unidades lado a lado en la aplicación"
  }
};

// Get translated text
function t(key) {
  const lang = settings.language || 'en';
  return translations[lang][key] || translations['en'][key] || key;
}
