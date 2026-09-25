const themeToggleBtn = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const flipButton = document.getElementById('flipButton');
const resultLabel = document.getElementById('resultLabel');
const titleText = document.getElementById('titleText');
const buttonText = document.getElementById('buttonText');


const translations = {
    en: {
        title: "WELCOME TO FLIP A COIN",
        button: "Flip",
        heads: "HEADS",
        tails: "TAILS"
    },
    bn: {
        title: "স্বাগতম কয়েন ফ্লিপ খেলায়",
        button: "ফ্লিপ করুন",
        heads: "হেড",
        tails: "টেল"
    }
};

let currentLang = 'en';

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
}

themeToggleBtn.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

langToggle.addEventListener('change', (e) => {
    currentLang = e.target.checked ? 'bn' : 'en';
    updateLanguage();
});

function updateLanguage() {
    titleText.textContent = translations[currentLang].title;
    buttonText.textContent = translations[currentLang].button;
    
    const currentVal = resultLabel.dataset.rawResult;
    if (currentVal) {
        resultLabel.textContent = translations[currentLang][currentVal];
    }
}

flipButton.addEventListener('click', () => {
    const rawResult = Math.random() < 0.5 ? 'heads' : 'tails';
    resultLabel.dataset.rawResult = rawResult;
    resultLabel.textContent = translations[currentLang][rawResult];
});