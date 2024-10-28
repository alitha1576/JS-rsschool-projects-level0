const pets = [
    {
        "name": "Jennifer",
        "img": "assets/img/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "assets/img/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "assets/img/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "assets/img/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "assets/img/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "assets/img/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "assets/img/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "assets/img/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];
/// Open page pets.html

function openPets() {
    window.location.href = 'pets.html';
}

/// Click on "make Friends" button
const makeFriendsElement = document.getElementById('make-friend');
if (makeFriendsElement) {
    makeFriendsElement.addEventListener('click', function () {
        document.getElementById('our-pets').scrollIntoView({ behavior: 'smooth' });
    });
}

/// Click on "Get to know the rest button"
const knowRest = document.getElementById('know-rest');
if (knowRest) {
    knowRest.addEventListener('click', openPets);
}

////Open and close burger menu

const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const body = document.body;

function openBurger(event) {
    if (burgerMenu.classList.contains('burger-menu-rotated')) {
        burgerMenu.classList.remove('burger-menu-rotated');
        navList.classList.add('nav-list-transformed');
        overlay.classList.add('hidden');
        body.classList.remove('no-scroll');
    } else {
        burgerMenu.classList.add('burger-menu-rotated');
        navList.classList.remove('nav-list-transformed');
        overlay.classList.remove('hidden');
        body.classList.add('no-scroll');
    }
}

burgerMenu.addEventListener('click', openBurger);

overlay.addEventListener('click', (event) => {
    burgerMenu.classList.remove('burger-menu-rotated');
    navList.classList.add('nav-list-transformed');
    overlay.classList.add('hidden');
})

const navLink = document.querySelectorAll('.nav-item');

navLink.forEach(function (link) {
    link.addEventListener('click', function () {
        navList.classList.add('nav-list-transformed');
        burgerMenu.classList.remove('burger-menu-rotated');
        overlay.classList.add('hidden');
        body.classList.remove('no-scroll');
    });
}
);

//// popup

const cart = document.querySelectorAll('.cart');
const popup = document.querySelector('.popup-container');
const closePopupButton = document.querySelector('.close-button');

//Click on cart and open popup

let activeCartName = null;
cart.forEach(cartButton => {
    cartButton.addEventListener('click', function (event) {
        activeCartName = this.querySelector('h4').innerHTML;
        const data = pets.find((pet) => pet.name === activeCartName);
        setPopupData(data);
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        overlay.classList.remove('hidden');
    });
});

/// Add data to popup

function setPopupData(data) {
    const popupImg = document.querySelector('.pet-img-popup img');
    const petName = document.querySelector('.pet-name');
    const petType = document.querySelector('.pet-type');
    const petBreed = document.querySelector('.pet-breed');
    const petDescription = document.querySelector('.pet-description');
    const petAge = document.querySelector('.pet-age');
    const petInoculations = document.querySelector('.pet-inoculations');
    const petDeseses = document.querySelector('.pet-diseases');
    const petParasites = document.querySelector('.pet-parasites');
    popupImg.src = data.img;
    petName.innerHTML = data.name;
    petType.innerHTML = data.type;
    petBreed.innerHTML = data.breed;
    petDescription.innerHTML = data.description;
    petAge.innerHTML = data.age;
    petInoculations.innerHTML = data.inoculations;
    petDeseses.innerHTML = data.diseases;
    petParasites.innerHTML = data.parasites;
}

// Click on close button and close popup

closePopupButton.addEventListener('click', function () {
    activeCartName = null;
    popup.style.display = 'none';
    document.body.style.overflow = '';
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', (event) => {
    activeCartName = null;
    popup.style.display = 'none';
    document.body.style.overflow = '';
    overlay.classList.add('hidden');
})

// Slider on main page

const leftSliderButton = document.querySelector('.slider-button-left');
const rightSLiderButton = document.querySelector('.slider-button-right');
const slider = document.querySelector('.carts');

const getVisibleCardNumber = () => {
    if (document.body.clientWidth >= 1280) {
        return 3;
    } else if (document.body.clientWidth > 320) {
        return 2;
    } else {
        return 1;
    }
}

rightSLiderButton.addEventListener('click', () => {
    const carts = document.querySelectorAll('.cart');
    for (let i = 0; i < getVisibleCardNumber(); i++) {
        const cartToMove = carts[i];
        slider.removeChild(cartToMove);
        slider.appendChild(cartToMove);
    }
})

leftSliderButton.addEventListener('click', () => {
    const carts = document.querySelectorAll('.cart');
    for (let i = 0; i < getVisibleCardNumber(); i++) {
        const cartToMove = carts[carts.length - 1 - i];
        slider.removeChild(cartToMove);
        slider.prepend(cartToMove);
    }
})