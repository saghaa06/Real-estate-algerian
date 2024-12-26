const chatToggle = document.querySelector('.chatbot-header');
const chatbotContainer = document.querySelector('.chatbot-container');
const preferencesDropdown = document.getElementById('preferences');
const settingsDropdown = document.getElementById('settings');
const contactDropdown = document.getElementById('contact');

chatToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active'); // Toggles visibility
});

function togglePreferences() {
    preferencesDropdown.classList.toggle('active'); // Toggles preferences dropdown
}

function toggleContact() {
    contactDropdown.classList.toggle('active'); // Toggles contact dropdown
}

function toggleSettings() {
    settingsDropdown.classList.toggle('active'); // Toggles settings dropdown
}
function navigateTo(section) {
    if (section === 'about') {
        window.location.href = 'about.html'; // Adjust this path as necessary
    } else if (section === 'home') {
        window.location.href = 'index.html'; // Adjust this path as necessary
    }
}


const translations = {
    en: {
        welcomeMessage: "Welcome to your dream home finder!",
        recentRentals: "Recent Rentals",
        chatHeader: "ImmobiliéreDZ Chatbot",
        aboutTitle: "About Us",
        aboutContent: "We are a real estate agency committed to helping you find your dream home.",
        contactTitle: "Contact Us",
        contactEmail: "Email: contact@immobiliereDZ.com",
        contactPhone: "Phone: +213 123 456 789",
    },
    fr: {
        welcomeMessage: "Bienvenue à votre service de recherche de maison de rêve!",
        recentRentals: "Locations Récentes",
        chatHeader: "Chatbot ImmobiliéreDZ",
        aboutTitle: "À Propos de Nous",
        aboutContent: "Nous sommes une agence immobilière engagée à vous aider à trouver la maison de vos rêves.",
        contactTitle: "Contactez-Nous",
        contactEmail: "Email : contact@immobiliereDZ.com",
        contactPhone: "Téléphone : +213 123 456 789",
    },
    ar: {
        welcomeMessage: "مرحبًا بك في أداة البحث عن منزل أحلامك!",
        recentRentals: "الإيجارات الحديثة",
        chatHeader: "روبوت الدردشة ImmobiliéreDZ",
        aboutTitle: "معلومات عنا",
        aboutContent: "نحن وكالة عقارية ملتزمة بمساعدتك في العثور على منزل أحلامك.",
        contactTitle: "اتصل بنا",
        contactEmail: "البريد الإلكتروني: contact@immobiliereDZ.com",
        contactPhone: "الهاتف: +213 123 456 789",
    }
};

// Sample data for rentals (you can modify this as needed)
const rentalData = {
    algiers1: {
        title: "Villa in Algiers",
        description: "A beautiful villa located in Algiers.",
        images: [
            "assets/houses/algiers/algiers1.jpg",
            "assets/houses/algiers/algiers1_2.jpg",
            "assets/houses/algiers/algiers1_3.jpg",
            "assets/houses/algiers/algiers1_4.jpg",
            "assets/houses/algiers/algiers1_5.jpg",
            "assets/houses/algiers/algiers1_6.jpg",
            "assets/houses/algiers/algiers1_7.jpg"

        ]
    },
    batna1: {
        title: "F3 Apartment in Batna",
        description: "A spacious F3 apartment in Batna.",
        images: [
            "assets/houses/batna/batna1.jpg",
            "assets/houses/batna/batna1_2.jpg",
            "assets/houses/batna/batna1_3.jpg",
            "assets/houses/batna/batna1_4.jpg",
            "assets/houses/batna/batna1_5.jpg",
            "assets/houses/batna/batna1_6.jpg",
            "assets/houses/batna/batna1_7.jpg",
            "assets/houses/batna/batna1_8.jpg",
            "assets/houses/batna/batna1_9.jpg"
        ]
    },
    oran1: {
        title: "Villa in Oran",
        description: "A stunning villa located in Oran.",
        images: [
            "assets/houses/oran/oran1.jpg",
            "assets/houses/oran/oran1_2.jpg",
            "assets/houses/oran/oran1_3.jpg",
            "assets/houses/oran/oran1_4.jpg",
            "assets/houses/oran/oran1_5.jpg",
            "assets/houses/oran/oran1_6.jpg",
            "assets/houses/oran/oran1_7.jpg",
            "assets/houses/oran/oran1_8.jpg",
            "assets/houses/oran/oran1_9.jpg",
            "assets/houses/oran/oran1_10.jpg"
        ]
    }
};

// Function to show rental details
function showRentalDetails(rentalId) {
    const rental = rentalData[rentalId];
    document.getElementById('modalTitle').innerText = rental.title;
    document.getElementById('modalDescription').innerText = rental.description;

    // Clear existing images
    const modalImages = document.getElementById('modalImages');
    modalImages.innerHTML = '';

    // Add new images
    rental.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = rental.title;
        img.classList.add('modal-image'); // Optional styling class
        modalImages.appendChild(img);
    });

    // Show modal
    document.getElementById('rentalModal').style.display = 'block';
}

// Close modal functionality
document.querySelector('.close').onclick = function() {
    document.getElementById('rentalModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('rentalModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Language change functionality
function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all translatable elements dynamically
}

// Handle page load and apply saved language
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
});

// Dark mode functionality
document.getElementById('darkMode').onclick = () => {
    document.documentElement.setAttribute("data-theme", "dark");
};

document.getElementById('standardMode').onclick = () => {
    document.documentElement.setAttribute("data-theme", "light");
};
