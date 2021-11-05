let listingTable = document.querySelector('tbody');
let btnNext = document.getElementById("btn_next");
let btnPrev = document.getElementById("btn_prev");
let pageSpan = document.getElementById("page");


let currentPage = 1;
let recordsPerPage = 5;
let allPosts = [];

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

const prevPage = () => {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}
btnPrev.addEventListener('click', prevPage)


const nextPage = () => {
    if (currentPage < numPages()) {
        currentPage++;
        changePage(currentPage);
    }
}
btnNext.addEventListener('click', nextPage)

const numPages = () => {
    return Math.ceil(allPosts.length / recordsPerPage);
}

const changePage = page => {
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listingTable.innerHTML = "";

    for (var i = (page-1) * recordsPerPage; i < (page * recordsPerPage); i++) {
        listingTable.appendChild(allPosts[i]);
    }
    pageSpan.innerHTML = page;

    if (page == 1) {
        btnPrev.style.visibility = "hidden";
    } else {
        btnPrev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btnNext.style.visibility = "hidden";
    } else {
        btnNext.style.visibility = "visible";
    }
}

const show = (res) => {
    Array.from(res).map(item => {
        let row = document.createElement('tr');
        let titleColumn = document.createElement('td');
        titleColumn.innerText = item.title;
        let bodyColumn = document.createElement('td');
        bodyColumn.innerText = item.body;
        row.appendChild(titleColumn);
        row.appendChild(bodyColumn);
        allPosts.push(row)
    });
    changePage(1);
}

