localStorage.clear();
let listView = document.querySelector('.list_view');
let btnPriv = document.querySelector('.btn_priv');
let btnNext = document.querySelector('.btn_next');
let currentPageView = document.querySelector('.current_page');
let pageCount = document.querySelector('.page_count');
pageCount.innerHTML = '<span>9</span>';
currentPageView.innerHTML = '<span>1</span>';
let currentPage = 1;


const makeRequest = async (url) => {
    let res = await fetch(url);
    if (!res.ok){
        throw new Error(`Error ${res.status}`)
    }
    return res.json();
}

const previous = () => {
    if (currentPage > 1){
        currentPage--;
        changePage(currentPage);
    }
}
btnPriv.addEventListener('click', previous);

const next = () => {
    if (currentPage < 9){
        currentPage++;
        changePage(currentPage);
    }
}
btnNext.addEventListener('click', next);

const changePage =  (page) => {
    let url = 'https://swapi.dev/api/people/';
    if (page > 1){
        url = `https://swapi.dev/api/people/?page=${page}`
    }
     makeRequest(url)
        .then(res=>show(res.results))
         .catch(err => console.log(err));
    currentPageView.innerHTML = `<span>${page}</span>`;
}
changePage(currentPage);

const showPlanet = (data) => {
    let container = document.querySelector('.detail-list');
    let nameOfPlanet = container.querySelector('#name_of_planet');
    let rotationPeriod = container.querySelector('#rotation_period');
    let orbitalPeriod = container.querySelector('#orbital_period');
    let diameter = container.querySelector('#diameter');
    let climate = container.querySelector('#climate');
    let gravity = container.querySelector('#gravity');
    let terrain = container.querySelector('#terrain');
    nameOfPlanet.innerHTML = data.name;
    rotationPeriod.innerHTML = `Rotation period: ${data.rotation_period}`;
    orbitalPeriod.innerHTML = `Orbital period: ${data.orbital_period}`;
    diameter.innerHTML = `Diameter: ${data.diameter}`;
    climate.innerHTML = `Climate: ${data.climate}`;
    gravity.innerHTML = `Gravity ${data.gravity}`;
    terrain.innerHTML = `Terrain ${data.terrain}`;
}

const getPlanet = (url) => {
    makeRequest(url)
        .then(res=>showPlanet(res))
        .catch(err => console.log(err));
}

const showDetails = (data) => {
    let container = document.querySelector('.detail-list');
    let name = container.querySelector('#name');
    let height = container.querySelector('#height');
    let mass = container.querySelector('#mass');
    let haircolor = container.querySelector('#haircolor');
    let skincolor = container.querySelector('#skincolor');
    let eyecolor = container.querySelector('#eyecolor');
    let birth_year = container.querySelector('#birth_year');
    let gender = container.querySelector('#gender');
    name.innerText = data.name;
    height.innerText = `Height: ${data.height}`;
    mass.innerText = `Mass: ${data.mass}`;
    haircolor.innerText = `Haircolor: ${data.hair_color}`;
    skincolor.innerText = `Skincolor: ${data.skin_color}`;
    eyecolor.innerText = `Eyecolor: ${data.eye_color}`;
    birth_year.innerText = `Birth_year: ${data.birth_year}`;
    gender.innerText = `Gender: ${data.gender}`;
    document.querySelector('.detail-list').classList.remove('d-none');
    document.querySelector('.loding-image2').classList.add('d-none');
    getPlanet(data.homeworld);
}

const details = () => {
  let listItem = document.querySelectorAll('.list_item')

    for (let i = 0; i < listItem.length; i++){
        let btn = listItem[i];
        btn.addEventListener('click', ()=>{
            document.querySelector('.detail-list').classList.add('d-none');
            document.querySelector('.loding-image2').classList.remove('d-none');
            let allActive = document.querySelectorAll('.active');
            if (allActive.length > 0){
                for (let r = 0; r < allActive.length; r++) {
                    let perActive = allActive[r];
                    perActive.classList.remove('active')
                }
            }
            btn.classList.add('active')
            let detailsData = localStorage.getItem(btn.innerText);
            showDetails(JSON.parse(detailsData))
        });
    }
}

const show = (data) => {
    localStorage.clear();
    listView.innerHTML = '';
    Array.from(data).map(item => {
        let li = document.createElement('li');
        li.classList.add('list_item');
        li.innerText = item.name;
        listView.appendChild(li);
        localStorage.setItem(item.name, JSON.stringify(item))
        let listItem = document.querySelectorAll('.list_item')
        if (listItem.length < 10){
            document.querySelector('.list_view').classList.add('d-none');
            document.querySelector('.loding-image').classList.remove('d-none');
        }
    });
    document.querySelector('.list_view').classList.remove('d-none');
    document.querySelector('.loding-image').classList.add('d-none');
    details();
}