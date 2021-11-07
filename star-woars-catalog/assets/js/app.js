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

const showDetails = (data) => {
    console.log(data)
}

const details = () => {
  let listItem = document.querySelectorAll('.list_item')

    for (let i = 0; i < listItem.length; i++){
        let btn = listItem[i];
        btn.addEventListener('click', ()=>{
            let allActive = document.querySelectorAll('.active');
            if (allActive.length > 0){
                for (let r = 0; r < allActive.length; r++) {
                    let perActive = allActive[r];
                    perActive.classList.remove('active')
                }
            }
            btn.classList.add('active')
            let detailsData = btn.getAttributeNode('datasrc');
            console.log(JSON.parse(detailsData))
            // showDetails(JSON.parse())
        });
    }
}

const show = (data) => {
    listView.innerHTML = '';
    Array.from(data).map(item => {
        let li = document.createElement('li');
        li.classList.add('list_item');
        li.setAttribute('datasrc',JSON.stringify(item));
        li.innerText = item.name;
        listView.appendChild(li);
    });
    details();
}