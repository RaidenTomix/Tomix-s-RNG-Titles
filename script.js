// Define probabilities
const COMMON_PROB = 400000;  // 20.0% each for two common titles
const UNCOMMON_PROB = 200000;  // 10.0% each for two uncommon titles
const RARE_PROB = 100000;  // 5.0% each for two rare titles
const VERY_RARE_PROB = 2000;  // 0.1% for very rare titles
const EXTREMELY_RARE_PROB = 2;  // 0.001% for the rarest title
const SUPER_EXTREMELY_RARE_PROB = 1;

// Titles
const titles = [
    "Swordsman", "Archer",
    "Thief", "Paladin",
    "Mage", "Berserker",
    "Necromancer", "Assassin",
    "Healer", "Reborn",
    "God"
];

// Title counts
let titleCounts = new Array(titles.length).fill(0);

// Function to generate a random title
function getRandomTitle() {
    // Calculate total probability
    const totalProb = COMMON_PROB * 2 + UNCOMMON_PROB * 2 + RARE_PROB * 2 + VERY_RARE_PROB * 2 + EXTREMELY_RARE_PROB * 2 + SUPER_EXTREMELY_RARE_PROB;
    // Generate a random number within the total range of probabilities
    const randNum = Math.floor(Math.random() * totalProb);
    // Select a title based on the random number and cumulative probability
    let cumulativeProb = 0;
    for (let i = 0; i < titles.length; i++) {
        cumulativeProb += getProbability(i);
        if (randNum < cumulativeProb) {
            return titles[i];
        }
    }
    // Fallback (should never reach here if probabilities are correctly set)
    return "Unknown";
}

// Function to get probability based on title index
function getProbability(index) {
    switch (index) {
        case 0:
        case 1:
            return COMMON_PROB;
        case 2:
        case 3:
            return UNCOMMON_PROB;
        case 4:
        case 5:
            return RARE_PROB;
        case 6:
        case 7:
            return VERY_RARE_PROB;
        case 8:
        case 9:
            return EXTREMELY_RARE_PROB;
        case 10:
            return SUPER_EXTREMELY_RARE_PROB;
    }
}

// Function to update title counts and display them
function updateTitleCounts() {
    let countsHTML = "<h2>Title Counts:</h2>";
    for (let i = 0; i < titles.length; i++) {
        countsHTML += `<p>${titles[i]}: ${titleCounts[i]}</p>`;
    }
    document.getElementById("counts").innerHTML = countsHTML;
}

// Event listener for roll button
document.getElementById("rollBtn").addEventListener("click", function() {
    // Get a random title
    const randomTitle = getRandomTitle();
    // Increment the count for the rolled title
    titleCounts[titles.indexOf(randomTitle)]++;
    // Update and display title counts
    updateTitleCounts();
});
