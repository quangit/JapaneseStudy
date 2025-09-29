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
    hiraganaRomajiToggle: document.getElementById('hiragana-romaji-toggle'),
    katakanaRomajiToggle: document.getElementById('katakana-romaji-toggle')
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
    
    // Romaji toggle checkboxes
    elements.hiraganaRomajiToggle.addEventListener('change', () => toggleHiraganaRomaji());
    elements.katakanaRomajiToggle.addEventListener('change', () => toggleKatakanaRomaji());
}

// Navigation functions
function showMainMenu() {
    currentMode = 'menu';
    elements.mainMenu.classList.remove('hidden');
    elements.hiraganaPage.classList.add('hidden');
    elements.katakanaPage.classList.add('hidden');
}

function showHiraganaPage() {
    currentMode = 'hiragana';
    elements.mainMenu.classList.add('hidden');
    elements.hiraganaPage.classList.remove('hidden');
    elements.katakanaPage.classList.add('hidden');
    
    // Reset the display
    elements.hiraganaCharacter.textContent = 'Click "Next" to start learning!';
    elements.hiraganaRomaji.textContent = '';
    elements.hiraganaGrid.classList.add('hidden');
}

function showKatakanaPage() {
    currentMode = 'katakana';
    elements.mainMenu.classList.add('hidden');
    elements.hiraganaPage.classList.add('hidden');
    elements.katakanaPage.classList.remove('hidden');
    
    // Reset the display
    elements.katakanaCharacter.textContent = 'Click "Next" to start learning!';
    elements.katakanaRomaji.textContent = '';
    elements.katakanaGrid.classList.add('hidden');
}

// Random character functions
function getRandomCharacter(characterArray) {
    const randomIndex = Math.floor(Math.random() * characterArray.length);
    return characterArray[randomIndex];
}

function showRandomHiragana() {
    const randomChar = getRandomCharacter(hiraganaCharacters);
    elements.hiraganaCharacter.textContent = randomChar.character;
    
    // Show romaji only if checkbox is checked
    if (elements.hiraganaRomajiToggle.checked) {
        elements.hiraganaRomaji.textContent = randomChar.romaji;
    } else {
        elements.hiraganaRomaji.textContent = '';
    }
    
    // Add animation effect
    elements.hiraganaCharacter.style.transform = 'scale(0.8)';
    setTimeout(() => {
        elements.hiraganaCharacter.style.transform = 'scale(1)';
    }, 100);
}

function showRandomKatakana() {
    const randomChar = getRandomCharacter(katakanaCharacters);
    elements.katakanaCharacter.textContent = randomChar.character;
    
    // Show romaji only if checkbox is checked
    if (elements.katakanaRomajiToggle.checked) {
        elements.katakanaRomaji.textContent = randomChar.romaji;
    } else {
        elements.katakanaRomaji.textContent = '';
    }
    
    // Add animation effect
    elements.katakanaCharacter.style.transform = 'scale(0.8)';
    setTimeout(() => {
        elements.katakanaCharacter.style.transform = 'scale(1)';
    }, 100);
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
    
    // Update romaji display based on checkbox
    updateGridRomajiDisplay('hiragana', elements.hiraganaRomajiToggle.checked);
}

function showKatakanaGrid() {
    elements.katakanaGrid.innerHTML = '';
    
    katakanaCharacters.forEach(char => {
        const gridItem = createGridItem(char);
        elements.katakanaGrid.appendChild(gridItem);
    });
    
    elements.katakanaGrid.classList.remove('hidden');
    elements.katakanaShowAll.textContent = 'Hide Characters';
    
    // Update romaji display based on checkbox
    updateGridRomajiDisplay('katakana', elements.katakanaRomajiToggle.checked);
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
            elements.hiraganaRomaji.textContent = elements.hiraganaRomajiToggle.checked ? character.romaji : '';
        } else if (currentMode === 'katakana') {
            elements.katakanaCharacter.textContent = character.character;
            elements.katakanaRomaji.textContent = elements.katakanaRomajiToggle.checked ? character.romaji : '';
        }
        
        // Add click animation
        gridItem.style.transform = 'scale(0.95)';
        setTimeout(() => {
            gridItem.style.transform = 'scale(1)';
        }, 150);
    });
    
    return gridItem;
}

// Romaji toggle functions
function toggleHiraganaRomaji() {
    const isChecked = elements.hiraganaRomajiToggle.checked;
    
    if (!isChecked) {
        elements.hiraganaRomaji.textContent = '';
    } else {
        // If there's a character displayed, show its romaji
        const currentChar = elements.hiraganaCharacter.textContent;
        if (currentChar && currentChar !== 'Click "Next" to start learning!') {
            const charData = hiraganaCharacters.find(char => char.character === currentChar);
            if (charData) {
                elements.hiraganaRomaji.textContent = charData.romaji;
            }
        }
    }
    
    // Also update grid romaji display
    updateGridRomajiDisplay('hiragana', isChecked);
}

function toggleKatakanaRomaji() {
    const isChecked = elements.katakanaRomajiToggle.checked;
    
    if (!isChecked) {
        elements.katakanaRomaji.textContent = '';
    } else {
        // If there's a character displayed, show its romaji
        const currentChar = elements.katakanaCharacter.textContent;
        if (currentChar && currentChar !== 'Click "Next" to start learning!') {
            const charData = katakanaCharacters.find(char => char.character === currentChar);
            if (charData) {
                elements.katakanaRomaji.textContent = charData.romaji;
            }
        }
    }
    
    // Also update grid romaji display
    updateGridRomajiDisplay('katakana', isChecked);
}

function updateGridRomajiDisplay(type, showRomaji) {
    const grid = type === 'hiragana' ? elements.hiraganaGrid : elements.katakanaGrid;
    const romajiElements = grid.querySelectorAll('.grid-romaji');
    
    romajiElements.forEach(element => {
        element.style.display = showRomaji ? 'block' : 'none';
    });
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
            if (currentMode !== 'menu') {
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
