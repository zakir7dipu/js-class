console.clear();

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => {
//         if (!response.ok){
//             throw new Error(`Error ${res.status}`)
//         }
//         response.json()
//     })
//     .then((json) => console.log(json))
//     .catch(err => console.log(err));

let container = document.querySelector('tbody');
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
            Array.from(res).map(item => {
                let row = document.createElement('tr');
                let titleColumn = document.createElement('td');
                titleColumn.innerText = item.title;
                let bodyColumn = document.createElement('td');
                bodyColumn.innerText = item.body;
                row.appendChild(titleColumn);
                row.appendChild(bodyColumn);
                container.appendChild(row);
            })
            // console.log(res)
        })
        .catch(err => console.log(err));
}
getAllData();

const getSingleData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/15')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
}
// getSingleData();

const postData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'fooasasdzxczczxcadas',
            body: 'barasdasdaslkxzjsd asudausd jizxjcaus jluahsdhda s',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
}
// postData();

const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/5',{
        method: 'PUT',
        body: JSON.stringify({
            title: 'fooasasdzxczczxcadas',
            body: 'barasdasdaslkxzjsd asudausd jizxjcaus jluahsdhda s',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
}
// updateData();

const updateSpData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/5',{
        method: 'PATCH',
        body: JSON.stringify({
            body: 'barasdasdaslkxzjsd asudausd jizxjcaus jluahsdhda s',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
}
// updateSpData();


const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/5',{
        method: 'DELETE'
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
}
// deleteData();

