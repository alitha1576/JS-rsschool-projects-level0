function openPets () {
    window.location.href = 'pets.html';
}

document.getElementById('make-friend').addEventListener('click', function() {
    document.getElementById('our-pets').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('know-rest').addEventListener('click', openPets);
