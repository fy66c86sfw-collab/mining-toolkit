// Theme and Language Manager
// Include this in all your HTML pages with: <script src="theme-manager.js"></script>

const ThemeManager = {
    // Available languages with translations
    translations: {
        en: {
            // Shotcrete Menu
            'shotcrete_title': 'Shotcrete Calculators',
            'shaft_sinking': 'Shaft Sinking',
            'shaft_desc': 'Calculate shotcrete volume for shaft sinking applications',
            'drift_dev': 'Drift Development',
            'drift_desc': 'Calculate shotcrete volume for drift development',
            'delvo': 'Delvo/Accelerator',
            'delvo_desc': 'Calculate accelerator dosage and mixing requirements',
            'back_menu': 'Back to Main Menu',
            
            // Shaft Sinking
            'shaft_title': 'Shaft Sinking Shotcrete',
            'detailed_calc': 'Detailed Calculation (with Undulation)',
            'diameter': 'Shaft Diameter (m):',
            'depth': 'Shaft Depth (m):',
            'thickness': 'Shotcrete Thickness (mm):',
            'undulation': 'Undulation Factor (%):',
            'rebound': 'Rebound (%):',
            'calculate': 'Calculate Volume',
            'standard_calc': 'Standard Calculation',
            
            // Drift Development
            'drift_title': 'Drift Development Shotcrete',
            'width': 'Drift Width (m):',
            'height': 'Drift Height (m):',
            'length': 'Drift Length (m):',
            
            // Delvo/Accelerator
            'delvo_title': 'Retarder/Accelerator Calculator',
            'admixture_calc': 'Admixture Dosage Calculator',
            'select_product': 'Select Product:',
            'shotcrete_volume': 'Shotcrete Volume:',
            'dosage_rate': 'Dosage Rate:',
            'calculate_admixture': 'Calculate Admixture Needed',
            'results': 'Results'
        },
        es: {
            // Shotcrete Menu
            'shotcrete_title': 'Calculadoras de Shotcrete',
            'shaft_sinking': 'Hundimiento de Pozos',
            'shaft_desc': 'Calcular volumen de shotcrete para aplicaciones de hundimiento de pozos',
            'drift_dev': 'Desarrollo de Galerías',
            'drift_desc': 'Calcular volumen de shotcrete para desarrollo de galerías',
            'delvo': 'Delvo/Acelerador',
            'delvo_desc': 'Calcular dosis de acelerador y requisitos de mezcla',
            'back_menu': 'Volver al Menú Principal',
            
            // Shaft Sinking
            'shaft_title': 'Shotcrete de Hundimiento de Pozos',
            'detailed_calc': 'Cálculo Detallado (con Ondulación)',
            'diameter': 'Diámetro del Pozo (m):',
            'depth': 'Profundidad del Pozo (m):',
            'thickness': 'Espesor de Shotcrete (mm):',
            'undulation': 'Factor de Ondulación (%):',
            'rebound': 'Rebote (%):',
            'calculate': 'Calcular Volumen',
            'standard_calc': 'Cálculo Estándar',
            
            // Drift Development
            'drift_title': 'Shotcrete de Desarrollo de Galerías',
            'width': 'Ancho de Galería (m):',
            'height': 'Altura de Galería (m):',
            'length': 'Longitud de Galería (m):',
            
            // Delvo/Accelerator
            'delvo_title': 'Calculadora de Retardante/Acelerador',
            'admixture_calc': 'Calculadora de Dosis de Aditivos',
            'select_product': 'Seleccionar Producto:',
            'shotcrete_volume': 'Volumen de Shotcrete:',
            'dosage_rate': 'Tasa de Dosificación:',
            'calculate_admixture': 'Calcular Aditivo Necesario',
            'results': 'Resultados'
        },
        fr: {
            // Shotcrete Menu
            'shotcrete_title': 'Calculatrices de Béton Projeté',
            'shaft_sinking': 'Sondage de Puits',
            'shaft_desc': 'Calculer le volume de béton projeté pour les applications de sondage de puits',
            'drift_dev': 'Développement de Galeries',
            'drift_desc': 'Calculer le volume de béton projeté pour le développement de galeries',
            'delvo': 'Delvo/Accélérateur',
            'delvo_desc': 'Calculer le dosage d\'accélérateur et les exigences de mélange',
            'back_menu': 'Retour au Menu Principal',
            
            // Shaft Sinking
            'shaft_title': 'Béton Projeté de Sondage de Puits',
            'detailed_calc': 'Calcul Détaillé (avec Ondulation)',
            'diameter': 'Diamètre du Puits (m):',
            'depth': 'Profondeur du Puits (m):',
            'thickness': 'Épaisseur de Béton Projeté (mm):',
            'undulation': 'Facteur d\'Ondulation (%):',
            'rebound': 'Rebond (%):',
            'calculate': 'Calculer le Volume',
            'standard_calc': 'Calcul Standard',
            
            // Drift Development
            'drift_title': 'Béton Projeté de Développement de Galeries',
            'width': 'Largeur de Galerie (m):',
            'height': 'Hauteur de Galerie (m):',
            'length': 'Longueur de Galerie (m):',
            
            // Delvo/Accelerator
            'delvo_title': 'Calculatrice de Retardateur/Accélérateur',
            'admixture_calc': 'Calculatrice de Dosage des Adjuvants',
            'select_product': 'Sélectionner un Produit:',
            'shotcrete_volume': 'Volume de Béton Projeté:',
            'dosage_rate': 'Taux de Dosage:',
            'calculate_admixture': 'Calculer l\'Adjuvant Nécessaire',
            'results': 'Résultats'
        }
    },

    // Initialize on page load
    init() {
        this.loadTheme();
        this.loadLanguage();
        this.applyTranslations();
    },

    // Load theme from localStorage
    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    },

    // Set theme and save to localStorage
    setTheme(theme) {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    },

    // Get current theme
    getTheme() {
        return localStorage.getItem('theme') || 'light';
    },

    // Load language from localStorage
    loadLanguage() {
        const savedLang = localStorage.getItem('language') || 'en';
        document.documentElement.setAttribute('lang', savedLang);
    },

    // Set language and save to localStorage
    setLanguage(lang) {
        if (this.translations[lang]) {
            localStorage.setItem('language', lang);
            document.documentElement.setAttribute('lang', lang);
            this.applyTranslations();
        }
    },

    // Get current language
    getLanguage() {
        return localStorage.getItem('language') || 'en';
    },

    // Get translated text
    t(key) {
        const lang = this.getLanguage();
        return this.translations[lang][key] || this.translations['en'][key] || key;
    },

    // Apply translations to all elements with data-i18n attribute
    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
});