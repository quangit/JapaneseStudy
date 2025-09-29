// Hiragana characters with their romaji
const hiraganaCharacters = [
    { character: 'あ', romaji: 'a' },
    { character: 'い', romaji: 'i' },
    { character: 'う', romaji: 'u' },
    { character: 'え', romaji: 'e' },
    { character: 'お', romaji: 'o' },
    { character: 'か', romaji: 'ka' },
    { character: 'き', romaji: 'ki' },
    { character: 'く', romaji: 'ku' },
    { character: 'け', romaji: 'ke' },
    { character: 'こ', romaji: 'ko' },
    { character: 'さ', romaji: 'sa' },
    { character: 'し', romaji: 'shi' },
    { character: 'す', romaji: 'su' },
    { character: 'せ', romaji: 'se' },
    { character: 'そ', romaji: 'so' },
    { character: 'た', romaji: 'ta' },
    { character: 'ち', romaji: 'chi' },
    { character: 'つ', romaji: 'tsu' },
    { character: 'て', romaji: 'te' },
    { character: 'と', romaji: 'to' },
    { character: 'な', romaji: 'na' },
    { character: 'に', romaji: 'ni' },
    { character: 'ぬ', romaji: 'nu' },
    { character: 'ね', romaji: 'ne' },
    { character: 'の', romaji: 'no' },
    { character: 'は', romaji: 'ha' },
    { character: 'ひ', romaji: 'hi' },
    { character: 'ふ', romaji: 'fu' },
    { character: 'へ', romaji: 'he' },
    { character: 'ほ', romaji: 'ho' },
    { character: 'ま', romaji: 'ma' },
    { character: 'み', romaji: 'mi' },
    { character: 'む', romaji: 'mu' },
    { character: 'め', romaji: 'me' },
    { character: 'も', romaji: 'mo' },
    { character: 'や', romaji: 'ya' },
    { character: 'ゆ', romaji: 'yu' },
    { character: 'よ', romaji: 'yo' },
    { character: 'ら', romaji: 'ra' },
    { character: 'り', romaji: 'ri' },
    { character: 'る', romaji: 'ru' },
    { character: 'れ', romaji: 're' },
    { character: 'ろ', romaji: 'ro' },
    { character: 'わ', romaji: 'wa' },
    { character: 'を', romaji: 'wo' },
    { character: 'ん', romaji: 'n' }
];

// Katakana characters with their romaji
const katakanaCharacters = [
    { character: 'ア', romaji: 'a' },
    { character: 'イ', romaji: 'i' },
    { character: 'ウ', romaji: 'u' },
    { character: 'エ', romaji: 'e' },
    { character: 'オ', romaji: 'o' },
    { character: 'カ', romaji: 'ka' },
    { character: 'キ', romaji: 'ki' },
    { character: 'ク', romaji: 'ku' },
    { character: 'ケ', romaji: 'ke' },
    { character: 'コ', romaji: 'ko' },
    { character: 'サ', romaji: 'sa' },
    { character: 'シ', romaji: 'shi' },
    { character: 'ス', romaji: 'su' },
    { character: 'セ', romaji: 'se' },
    { character: 'ソ', romaji: 'so' },
    { character: 'タ', romaji: 'ta' },
    { character: 'チ', romaji: 'chi' },
    { character: 'ツ', romaji: 'tsu' },
    { character: 'テ', romaji: 'te' },
    { character: 'ト', romaji: 'to' },
    { character: 'ナ', romaji: 'na' },
    { character: 'ニ', romaji: 'ni' },
    { character: 'ヌ', romaji: 'nu' },
    { character: 'ネ', romaji: 'ne' },
    { character: 'ノ', romaji: 'no' },
    { character: 'ハ', romaji: 'ha' },
    { character: 'ヒ', romaji: 'hi' },
    { character: 'フ', romaji: 'fu' },
    { character: 'ヘ', romaji: 'he' },
    { character: 'ホ', romaji: 'ho' },
    { character: 'マ', romaji: 'ma' },
    { character: 'ミ', romaji: 'mi' },
    { character: 'ム', romaji: 'mu' },
    { character: 'メ', romaji: 'me' },
    { character: 'モ', romaji: 'mo' },
    { character: 'ヤ', romaji: 'ya' },
    { character: 'ユ', romaji: 'yu' },
    { character: 'ヨ', romaji: 'yo' },
    { character: 'ラ', romaji: 'ra' },
    { character: 'リ', romaji: 'ri' },
    { character: 'ル', romaji: 'ru' },
    { character: 'レ', romaji: 're' },
    { character: 'ロ', romaji: 'ro' },
    { character: 'ワ', romaji: 'wa' },
    { character: 'ヲ', romaji: 'wo' },
    { character: 'ン', romaji: 'n' }
];

// Current state
let currentMode = 'menu'; // 'menu', 'hiragana', 'katakana'

// Settings state
let settings = {
    showRomaji: true,
    noRepeatMode: false,
    autoAdvanceMode: false
};

// No repeat mode state
let usedHiraganaIndices = [];
let usedKatakanaIndices = [];

// Auto advance timer
let autoAdvanceTimer = null;

// DOM elements
const elements = {
    mainMenu: document.getElementById('main-menu'),
    hiraganaPage: document.getElementById('hiragana-page'),
    katakanaPage: document.getElementById('katakana-page'),
    hiraganaBtn: document.getElementById('hiragana-btn'),
    katakanaBtn: document.getElementById('katakana-btn'),
    backFromHiragana: document.getElementById('back-from-hiragana'),
    backFromKatakana: document.getElementById('back-from-katakana'),
    hiraganaNext: document.getElementById('hiragana-next'),
    katakanaNext: document.getElementById('katakana-next'),
    hiraganaCharacter: document.getElementById('hiragana-character'),
    katakanaCharacter: document.getElementById('katakana-character'),
    hiraganaRomaji: document.getElementById('hiragana-romaji'),
    katakanaRomaji: document.getElementById('katakana-romaji'),
    hiraganaShowAll: document.getElementById('hiragana-show-all'),
    katakanaShowAll: document.getElementById('katakana-show-all'),
    hiraganaGrid: document.getElementById('hiragana-grid'),
    katakanaGrid: document.getElementById('katakana-grid'),
    hiraganaSettingsBtn: document.getElementById('hiragana-settings-btn'),
    katakanaSettingsBtn: document.getElementById('katakana-settings-btn'),
    settingsOverlay: document.getElementById('settings-overlay'),
    closeSettings: document.getElementById('close-settings'),
    popupRomajiToggle: document.getElementById('popup-romaji-toggle'),
    noRepeatMode: document.getElementById('no-repeat-mode'),
    autoAdvanceMode: document.getElementById('auto-advance-mode'),
    resetSettings: document.getElementById('reset-settings')
};

// Initialize the application
function init() {
    setupEventListeners();
    showMainMenu();
}

// Setup all event listeners
function setupEventListeners() {
    // Main menu buttons
    elements.hiraganaBtn.addEventListener('click', () => showHiraganaPage());
    elements.katakanaBtn.addEventListener('click', () => showKatakanaPage());
    
    // Back buttons
    elements.backFromHiragana.addEventListener('click', () => showMainMenu());
    elements.backFromKatakana.addEventListener('click', () => showMainMenu());
    
    // Next character buttons
    elements.hiraganaNext.addEventListener('click', () => showRandomHiragana());
    elements.katakanaNext.addEventListener('click', () => showRandomKatakana());
    
    // Show all characters buttons
    elements.hiraganaShowAll.addEventListener('click', () => toggleHiraganaGrid());
    elements.katakanaShowAll.addEventListener('click', () => toggleKatakanaGrid());
    
    // Settings popup
    elements.hiraganaSettingsBtn.addEventListener('click', () => openSettings());
    elements.katakanaSettingsBtn.addEventListener('click', () => openSettings());
    elements.closeSettings.addEventListener('click', () => closeSettings());
    elements.settingsOverlay.addEventListener('click', (e) => {
        if (e.target === elements.settingsOverlay) {
            closeSettings();
        }
    });
    
    // Settings controls
    elements.popupRomajiToggle.addEventListener('change', () => updateRomajiSetting());
    elements.noRepeatMode.addEventListener('change', () => updateNoRepeatMode());
    elements.autoAdvanceMode.addEventListener('change', () => updateAutoAdvanceMode());
    elements.resetSettings.addEventListener('click', () => resetAllSettings());
}

// Navigation functions
function showMainMenu() {
    currentMode = 'menu';
    elements.mainMenu.classList.remove('hidden');
    elements.hiraganaPage.classList.add('hidden');
    elements.katakanaPage.classList.add('hidden');
    
    // Stop auto advance when leaving learning pages
    stopAutoAdvanceTimer();
}

function showHiraganaPage() {
    currentMode = 'hiragana';
    elements.mainMenu.classList.add('hidden');
    elements.hiraganaPage.classList.remove('hidden');
    elements.katakanaPage.classList.add('hidden');
    
    // Reset the display
    elements.hiraganaCharacter.textContent = 'start learning!';
    elements.hiraganaRomaji.textContent = '';
    elements.hiraganaGrid.classList.add('hidden');
    
    // Start auto advance if enabled
    if (settings.autoAdvanceMode) {
        // Give user a moment to see the page before auto advance starts
        setTimeout(() => {
            if (currentMode === 'hiragana') {
                showRandomHiragana();
            }
        }, 1000);
    }
}

function showKatakanaPage() {
    currentMode = 'katakana';
    elements.mainMenu.classList.add('hidden');
    elements.hiraganaPage.classList.add('hidden');
    elements.katakanaPage.classList.remove('hidden');
    
    // Reset the display
    elements.katakanaCharacter.textContent = 'start learning!';
    elements.katakanaRomaji.textContent = '';
    elements.katakanaGrid.classList.add('hidden');
    
    // Start auto advance if enabled
    if (settings.autoAdvanceMode) {
        // Give user a moment to see the page before auto advance starts
        setTimeout(() => {
            if (currentMode === 'katakana') {
                showRandomKatakana();
            }
        }, 1000);
    }
}

// Random character functions
function getRandomCharacter(characterArray, usedIndices) {
    if (settings.noRepeatMode) {
        // If all characters have been used, reset the used indices
        if (usedIndices.length >= characterArray.length) {
            usedIndices.length = 0;
        }
        
        // Find unused indices
        let availableIndices = [];
        for (let i = 0; i < characterArray.length; i++) {
            if (!usedIndices.includes(i)) {
                availableIndices.push(i);
            }
        }
        
        // Get random index from available indices
        const randomAvailableIndex = Math.floor(Math.random() * availableIndices.length);
        const selectedIndex = availableIndices[randomAvailableIndex];
        
        // Mark this index as used
        usedIndices.push(selectedIndex);
        
        return characterArray[selectedIndex];
    } else {
        // Normal random selection
        const randomIndex = Math.floor(Math.random() * characterArray.length);
        return characterArray[randomIndex];
    }
}

function showRandomHiragana() {
    const randomChar = getRandomCharacter(hiraganaCharacters, usedHiraganaIndices);
    elements.hiraganaCharacter.textContent = randomChar.character;
    
    // Show romaji based on settings
    if (settings.showRomaji) {
        elements.hiraganaRomaji.textContent = randomChar.romaji;
    } else {
        elements.hiraganaRomaji.textContent = '';
    }
    
    // Add animation effect
    elements.hiraganaCharacter.style.transform = 'scale(0.8)';
    setTimeout(() => {
        elements.hiraganaCharacter.style.transform = 'scale(1)';
    }, 100);
    
    // Reset auto advance timer if enabled
    if (settings.autoAdvanceMode) {
        startAutoAdvanceTimer('hiragana');
    }
}

function showRandomKatakana() {
    const randomChar = getRandomCharacter(katakanaCharacters, usedKatakanaIndices);
    elements.katakanaCharacter.textContent = randomChar.character;
    
    // Show romaji based on settings
    if (settings.showRomaji) {
        elements.katakanaRomaji.textContent = randomChar.romaji;
    } else {
        elements.katakanaRomaji.textContent = '';
    }
    
    // Add animation effect
    elements.katakanaCharacter.style.transform = 'scale(0.8)';
    setTimeout(() => {
        elements.katakanaCharacter.style.transform = 'scale(1)';
    }, 100);
    
    // Reset auto advance timer if enabled
    if (settings.autoAdvanceMode) {
        startAutoAdvanceTimer('katakana');
    }
}

// Grid display functions
function toggleHiraganaGrid() {
    if (elements.hiraganaGrid.classList.contains('hidden')) {
        showHiraganaGrid();
    } else {
        elements.hiraganaGrid.classList.add('hidden');
        elements.hiraganaShowAll.textContent = 'Show All Characters';
    }
}

function toggleKatakanaGrid() {
    if (elements.katakanaGrid.classList.contains('hidden')) {
        showKatakanaGrid();
    } else {
        elements.katakanaGrid.classList.add('hidden');
        elements.katakanaShowAll.textContent = 'Show All Characters';
    }
}

function showHiraganaGrid() {
    elements.hiraganaGrid.innerHTML = '';
    
    hiraganaCharacters.forEach(char => {
        const gridItem = createGridItem(char);
        elements.hiraganaGrid.appendChild(gridItem);
    });
    
    elements.hiraganaGrid.classList.remove('hidden');
    elements.hiraganaShowAll.textContent = 'Hide Characters';
    
    // Update romaji display based on settings
    updateGridRomajiDisplay('hiragana', settings.showRomaji);
}

function showKatakanaGrid() {
    elements.katakanaGrid.innerHTML = '';
    
    katakanaCharacters.forEach(char => {
        const gridItem = createGridItem(char);
        elements.katakanaGrid.appendChild(gridItem);
    });
    
    elements.katakanaGrid.classList.remove('hidden');
    elements.katakanaShowAll.textContent = 'Hide Characters';
    
    // Update romaji display based on settings
    updateGridRomajiDisplay('katakana', settings.showRomaji);
}

function createGridItem(character) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    
    const charDiv = document.createElement('div');
    charDiv.className = 'grid-character';
    charDiv.textContent = character.character;
    
    const romajiDiv = document.createElement('div');
    romajiDiv.className = 'grid-romaji';
    romajiDiv.textContent = character.romaji;
    
    gridItem.appendChild(charDiv);
    gridItem.appendChild(romajiDiv);
    
    // Add click event to show character in main display
    gridItem.addEventListener('click', () => {
        if (currentMode === 'hiragana') {
            elements.hiraganaCharacter.textContent = character.character;
            elements.hiraganaRomaji.textContent = settings.showRomaji ? character.romaji : '';
        } else if (currentMode === 'katakana') {
            elements.katakanaCharacter.textContent = character.character;
            elements.katakanaRomaji.textContent = settings.showRomaji ? character.romaji : '';
        }
        
        // Add click animation
        gridItem.style.transform = 'scale(0.95)';
        setTimeout(() => {
            gridItem.style.transform = 'scale(1)';
        }, 150);
    });
    
    return gridItem;
}

// Romaji toggle functions (for settings popup)
function updateCurrentRomajiDisplay() {
    // Update hiragana display
    if (!settings.showRomaji) {
        elements.hiraganaRomaji.textContent = '';
    } else {
        const currentHiraganaChar = elements.hiraganaCharacter.textContent;
        if (currentHiraganaChar && currentHiraganaChar !== 'start learning!') {
            const charData = hiraganaCharacters.find(char => char.character === currentHiraganaChar);
            if (charData) {
                elements.hiraganaRomaji.textContent = charData.romaji;
            }
        }
    }
    
    // Update katakana display
    if (!settings.showRomaji) {
        elements.katakanaRomaji.textContent = '';
    } else {
        const currentKatakanaChar = elements.katakanaCharacter.textContent;
        if (currentKatakanaChar && currentKatakanaChar !== 'start learning!') {
            const charData = katakanaCharacters.find(char => char.character === currentKatakanaChar);
            if (charData) {
                elements.katakanaRomaji.textContent = charData.romaji;
            }
        }
    }
    
    // Update grid displays
    updateGridRomajiDisplay('hiragana', settings.showRomaji);
    updateGridRomajiDisplay('katakana', settings.showRomaji);
}

function updateGridRomajiDisplay(type, showRomaji) {
    const grid = type === 'hiragana' ? elements.hiraganaGrid : elements.katakanaGrid;
    const romajiElements = grid.querySelectorAll('.grid-romaji');
    
    romajiElements.forEach(element => {
        element.style.display = showRomaji ? 'block' : 'none';
    });
}

// Settings popup functions
function openSettings() {
    elements.settingsOverlay.classList.remove('hidden');
    
    // Sync popup checkboxes with current settings
    elements.popupRomajiToggle.checked = settings.showRomaji;
    elements.noRepeatMode.checked = settings.noRepeatMode;
    elements.autoAdvanceMode.checked = settings.autoAdvanceMode;
}

function closeSettings() {
    elements.settingsOverlay.classList.add('hidden');
}

function updateRomajiSetting() {
    settings.showRomaji = elements.popupRomajiToggle.checked;
    
    // Update current display
    updateCurrentRomajiDisplay();
}

function updateNoRepeatMode() {
    settings.noRepeatMode = elements.noRepeatMode.checked;
    
    // Reset used indices when toggling
    usedHiraganaIndices.length = 0;
    usedKatakanaIndices.length = 0;
}

function updateAutoAdvanceMode() {
    settings.autoAdvanceMode = elements.autoAdvanceMode.checked;
    
    if (settings.autoAdvanceMode) {
        // Start auto advance if we're on a learning page
        if (currentMode === 'hiragana' || currentMode === 'katakana') {
            startAutoAdvanceTimer(currentMode);
        }
    } else {
        // Stop auto advance
        stopAutoAdvanceTimer();
    }
}

function resetAllSettings() {
    // Reset to default settings
    settings.showRomaji = true;
    settings.noRepeatMode = false;
    settings.autoAdvanceMode = false;
    
    // Update all checkboxes
    elements.popupRomajiToggle.checked = true;
    elements.noRepeatMode.checked = false;
    elements.autoAdvanceMode.checked = false;
    
    // Reset used indices
    usedHiraganaIndices.length = 0;
    usedKatakanaIndices.length = 0;
    
    // Stop auto advance
    stopAutoAdvanceTimer();
    
    // Update displays
    updateCurrentRomajiDisplay();
}

// Auto advance timer functions
function startAutoAdvanceTimer(mode) {
    stopAutoAdvanceTimer(); // Clear any existing timer
    
    autoAdvanceTimer = setInterval(() => {
        if (mode === 'hiragana' && currentMode === 'hiragana') {
            showRandomHiragana();
        } else if (mode === 'katakana' && currentMode === 'katakana') {
            showRandomKatakana();
        } else {
            stopAutoAdvanceTimer(); // Stop if mode changed
        }
    }, 5000); // 5 seconds
}

function stopAutoAdvanceTimer() {
    if (autoAdvanceTimer) {
        clearInterval(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }
}

// Add smooth transitions
elements.hiraganaCharacter.style.transition = 'transform 0.2s ease';
elements.katakanaCharacter.style.transition = 'transform 0.2s ease';

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowRight':
        case ' ':
            event.preventDefault();
            if (currentMode === 'hiragana') {
                showRandomHiragana();
            } else if (currentMode === 'katakana') {
                showRandomKatakana();
            }
            break;
        case 'Escape':
            event.preventDefault();
            // Check if settings popup is open first
            if (!elements.settingsOverlay.classList.contains('hidden')) {
                closeSettings();
            } else if (currentMode !== 'menu') {
                showMainMenu();
            }
            break;
        case '1':
            if (currentMode === 'menu') {
                showHiraganaPage();
            }
            break;
        case '2':
            if (currentMode === 'menu') {
                showKatakanaPage();
            }
            break;
    }
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
