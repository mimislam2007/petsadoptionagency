// Random data for pets
const petNames = {
   
const petAges = {
    cats: [1, 2, 3, 4, 5],
    dogs: [2, 3, 4, 5, 6],
    hamsters: [1, 2, 3]
};

// Function to get a random pet name
function getRandomName(type) {
    const names = petNames[type];
    return names[Math.floor(Math.random() * names.length)];
}

// Function to get a random pet age
function getRandomAge(type) {
    const ages = petAges[type];
    return ages[Math.floor(Math.random() * ages.length)];
}

// Function to create a pet box
function createPetBox(type) {
    const name = getRandomName(type);
    const age = getRandomAge(type);

    // Example image URLs (replace with actual image URLs)
    const imageUrl = `https://via.placeholder.com/200x150.png?text=${name}`;

    const petBox = document.createElement("div");
    petBox.classList.add("pet-box");

    const petImage = document.createElement("img");
    petImage.src = imageUrl;

    const petName = document.createElement("h3");
    petName.textContent = name;

    const petAge = document.createElement("p");
    petAge.textContent = `Age: ${age} years`;

    petBox.appendChild(petImage);
    petBox.appendChild(petName);
    petBox.appendChild(petAge);

    return petBox;
}

// Function to add random pets to the containers
function populatePets() {
    const catContainer = document.getElementById("cats-container");
    const dogContainer = document.getElementById("dogs-container");
    const hamsterContainer = document.getElementById("hamsters-container");

    // Add 6 random cats, dogs, and hamsters to the containers
    for (let i = 0; i < 6; i++) {
        catContainer.appendChild(createPetBox("cats"));
        dogContainer.appendChild(createPetBox("dogs"));
        hamsterContainer.appendChild(createPetBox("hamsters"));
    }
}

// Populate pets when the page loads
window.onload = populatePets;
