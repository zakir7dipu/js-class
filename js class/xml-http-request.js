console.clear();

// let container = document.querySelector('tbody');
// Array.from(JSON.parse(data)).map(item => {
//     let row = document.createElement('tr');
//     let titleColumn = document.createElement('td');
//     titleColumn.innerText = item.title;
//     let bodyColumn = document.createElement('td');
//     bodyColumn.innerText = item.body;
//     row.appendChild(titleColumn);
//     row.appendChild(bodyColumn);
//     container.appendChild(row);
// })



const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject)=>{
        let xml = new XMLHttpRequest();
        xml.open(method,url);
        xml.setRequestHeader('Content-type', 'application/json');
        xml.onload = () => {
            let data = xml.response;
            console.log(data);
            // resolve(JSON.parse(data))
        }

        xml.onerror = () => {
            reject('We don\'t get any data')
        }

        xml.send(JSON.stringify(data));
    })

}

const getdata = () => {
    makeRequest('get', 'https://jsonplaceholder.typicode.com/posts/100')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        });
}
getdata();

const postdata = () => {
    makeRequest('post', 'https://jsonplaceholder.typicode.com/posts',{
        title: 'foo215456',
        body: 'barasdadqqwe',
        userId: 1,
    });
}
// postdata();

const updatedata = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/2',{
        id: '2',
        title: 'foo215456',
        body: 'barasdadqqwe',
        userId: 1,
    });
}
// updatedata();

const updatesingeldata = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/2',{
        title: 'foo215456895',
    });
}
// updatesingeldata();

const deletedata = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/2');
}
// deletedata();