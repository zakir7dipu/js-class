let container = document.querySelector('tbody');
let btnNext = document.getElementById("btn_next");
let btnPrev = document.getElementById("btn_prev");
let pageSpan = document.getElementById("page");

let currentPage = 1;
let recordsPerPage = 10;

const makeRequest = async (url, config) => {
    let res = await fetch(url, config)
    if (!res.ok){
        throw new Error(`Error ${res.status}`)
    }
    return res.json();
}

const getAllData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            show(res)
        })
        .catch(err => console.log(err));
}
getAllData();

function show(res){

}