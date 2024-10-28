
const container = document.querySelector('.container');

async function getData(query='autumn') {
    const url = `https://api.unsplash.com/search/photos?per_page=9&query=${query}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    container.innerHTML='';
    data.results.forEach(image => {       
        showData(image);
    });
}

getData();

function showData(data) {
    const img = document.createElement('img');
    img.classList.add('cart-img');
    img.src = data.urls.small;
    img.alt = data.alt_description;
    container.append(img);
}

const searchForm = document.querySelector('.search-box');
const input = document.getElementById('search');
const closeImg = document.querySelector('.close-img')

input.addEventListener('input', (event) => {
    if(event.target.value !== '') {
        closeImg.style.display='inline-block';
    } else {
        closeImg.style.display='none';
    }
})

closeImg.addEventListener('click', () => {
    input.value='';
    closeImg.style.display='none';
})


searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = event.target.querySelector("input").value;
    getData(query);
    clearInputField();
})

