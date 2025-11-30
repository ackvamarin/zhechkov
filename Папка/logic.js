// Cosmos and Black Holes Interactive Features

// Array of interesting cosmos facts
const cosmicFacts = [
    {
        title: "Черные дыры",
        description: "Область пространства с экстремальной гравитацией, из которой ничто не может выбраться.",
        icon: "⚫"
    },
    {
        title: "Горизонт событий",
        description: "Граница черной дыры, за которой начинается point of no return.",
        icon: "🌑"
    },
    {
        title: "Гравитационные волны",
        description: "Волны в пространстве-времени, создаваемые ускоренными массивными объектами.",
        icon: "〰️"
    },
    {
        title: "Космическое излучение",
        description: "Излучение Хокинга - энергия, испускаемая черными дырами.",
        icon: "💫"
    }
];

// Function to display random cosmic fact
function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * cosmicFacts.length);
    const fact = cosmicFacts[randomIndex];
    console.log(`${fact.icon} ${fact.title}: ${fact.description}`);
    return fact;
}

// Function to calculate black hole properties
function calculateBlackHoleProperties(mass) {
    // Mass in solar masses
    const sunMass = 1.989e30; // kg
    const blackHoleMass = mass * sunMass;
    
    // Schwarzschild radius (event horizon)
    const G = 6.674e-11; // gravitational constant
    const c = 299792458; // speed of light
    const schwarzschildRadius = (2 * G * blackHoleMass) / (c * c);
    
    return {
        mass: mass,
        schwarzschildRadius: schwarzschildRadius.toFixed(2),
        diameter: (schwarzschildRadius * 2).toFixed(2),
        unit: "meters"
    };
}

// Function to create interactive quiz about cosmos
function cosmosQuiz() {
    const questions = [
        {
            question: "В каком году была получена первая фотография черной дыры?",
            options: ["2015", "2019", "2021", "2023"],
            correct: 1
        },
        {
            question: "Что такое горизонт событий?",
            options: ["Линия горизонта в космосе", "Граница черной дыры", "Конец вселенной", "Космическая станция"],
            correct: 1
        },
        {
            question: "Кто предсказал существование черных дыр?",
            options: ["Ньютон", "Эйнштейн", "Хокинг", "Коперник"],
            correct: 1
        }
    ];
    
    return questions;
}

// Function to format large numbers for display
function formatCosmicNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + " млрд";
    if (num >= 1e6) return (num / 1e6).toFixed(2) + " млн";
    if (num >= 1e3) return (num / 1e3).toFixed(2) + " тыс";
    return num.toFixed(2);
}

// Function to get space facts based on category
function getSpaceFacts(category) {
    const facts = {
        blackHoles: "Черные дыры - самые загадочные объекты во Вселенной",
        stars: "Звезды - массивные плазменные объекты, удерживаемые гравитацией",
        galaxies: "Галактики содержат миллиарды звезд и черных дыр",
        universe: "Вселенная расширяется со всё большей скоростью"
    };
    
    return facts[category] || "Информация не найдена";
}

// Example usage
console.log("🌌 === Космические калькуляции === 🌌");
console.log("\n📊 Параметры черной дыры (5 солнечных масс):");
const bh = calculateBlackHoleProperties(5);
console.log(`Масса: ${bh.mass} солнечных масс`);
console.log(`Радиус события: ${bh.schwarzschildRadius} ${bh.unit}`);
console.log(`Диаметр: ${bh.diameter} ${bh.unit}`);

console.log("\n🎲 Случайный космический факт:");
displayRandomFact();

console.log("\n💡 Космические факты по категориям:");
console.log("Черные дыры:", getSpaceFacts("blackHoles"));
console.log("Галактики:", getSpaceFacts("galaxies"));

// Function to display calculation results on the webpage
function calculateAndDisplay() {
    const massInput = document.getElementById('massInput');
    const output = document.getElementById('output');
    
    if (!massInput || !output) return;
    
    const mass = parseFloat(massInput.value);
    
    if (isNaN(mass) || mass <= 0) {
        output.innerHTML = '<span style="color: #ff6b6b;">⚠️ Пожалуйста, введите положительное число</span>';
        output.style.display = 'block';
        return;
    }
    
    const properties = calculateBlackHoleProperties(mass);
    const fact = displayRandomFact();
    
    let html = `
        <div style="color: #00ff88; font-weight: bold; margin-bottom: 10px;">✓ Результаты расчёта:</div>
        <div>📊 <strong>Масса:</strong> ${properties.mass} солнечных масс</div>
        <div>📏 <strong>Радиус события:</strong> ${formatCosmicNumber(parseFloat(properties.schwarzschildRadius))} ${properties.unit}</div>
        <div>⭕ <strong>Диаметр:</strong> ${formatCosmicNumber(parseFloat(properties.diameter))} ${properties.unit}</div>
        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(0, 255, 136, 0.3);">
            <div>🎲 <strong>Интересный факт:</strong></div>
            <div>${fact.icon} ${fact.title}: ${fact.description}</div>
        </div>
    `;
    
    output.innerHTML = html;
    output.style.display = 'block';
}
