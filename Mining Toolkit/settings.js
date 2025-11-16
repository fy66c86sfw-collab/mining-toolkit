// Global Settings Manager for Mining Calculator App
// This file manages theme, units, and language settings across all pages

let settings = {
  theme: 'light',
  units: 'metric',
  language: 'en'
};

// Load settings from localStorage (primary) or settings.json (fallback)
async function loadSettings() {
  // Always try localStorage first (it's faster and persists user changes)
  const savedTheme = localStorage.getItem('theme');
  const savedUnits = localStorage.getItem('units');
  const savedLanguage = localStorage.getItem('language');
  
  if (savedTheme) settings.theme = savedTheme;
  if (savedUnits) settings.units = savedUnits;
  if (savedLanguage) settings.language = savedLanguage;
  
  // If nothing in localStorage, try loading from settings.json
  if (!savedTheme && !savedUnits && !savedLanguage) {
    try {
      const response = await fetch('settings.json');
      const data = await response.json();
      settings = { ...settings, ...data };
    } catch (e) {
      // Use defaults if both fail
      console.log('Using default settings');
    }
  }
  
  applySettings();
}

// Apply settings to the page
function applySettings() {
  // Apply theme
  if (settings.theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  
  // Language can be applied here when you add translation support
  // For now, it's just stored
}

// Save a specific setting to localStorage and apply it
function saveSetting(key, value) {
  settings[key] = value;
  localStorage.setItem(key, value);
  console.log(`Saved ${key}: ${value}`);
  applySettings();
}

// Unit conversion helper functions
function formatLength(lengthMM) {
  if (settings.units === 'metric') {
    const lengthInch = (lengthMM / 25.4).toFixed(2);
    return `${lengthMM} mm <small>(${lengthInch} in)</small>`;
  } else {
    const lengthInch = (lengthMM / 25.4).toFixed(2);
    return `${lengthInch} in <small>(${lengthMM} mm)</small>`;
  }
}

function formatDistance(meters) {
  if (settings.units === 'metric') {
    const feet = (meters * 3.28084).toFixed(2);
    return `${meters} m <small>(${feet} ft)</small>`;
  } else {
    const feet = (meters * 3.28084).toFixed(2);
    return `${feet} ft <small>(${meters} m)</small>`;
  }
}

function formatVolume(cubicMeters) {
  if (settings.units === 'metric') {
    const cubicYards = (cubicMeters * 1.30795).toFixed(2);
    return `${cubicMeters} m³ <small>(${cubicYards} yd³)</small>`;
  } else {
    const cubicYards = (cubicMeters * 1.30795).toFixed(2);
    return `${cubicYards} yd³ <small>(${cubicMeters} m³)</small>`;
  }
}

function formatWeight(kilograms) {
  if (settings.units === 'metric') {
    const pounds = (kilograms * 2.20462).toFixed(2);
    return `${kilograms} kg <small>(${pounds} lb)</small>`;
  } else {
    const pounds = (kilograms * 2.20462).toFixed(2);
    return `${pounds} lb <small>(${kilograms} kg)</small>`;
  }
}

// Initialize settings on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadSettings);
} else {
  loadSettings();
}
