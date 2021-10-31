// Synchronous ************
// Asynchronous ***********
//
console.clear();
const show = () => {
    return new Promise((resolve, reject) => {
        resolve('This a from show 0 function')
    })
};

const show1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('This a from show 1 function');
        },1000);
    })
}

function show2(){
    return new Promise((resolve, reject) => {
        resolve('This a from show 2 function');
    })
}

const show3 = () => {
    return new Promise((resolve, reject) => {
        resolve('This a from not show 3 function');
    })
}

const show4 = () => {
    return new Promise((resolve, reject) => {
        resolve('This a from show 4 function');
    })
}

const show5 = () => {
    return new Promise((resolve, reject) => {
        resolve('This a from show 5 function');
    })
}

const show6 = () => {
    return new Promise((resolve, reject) => {
        resolve('This a from show 6 function');
    })
}

// show();
// show1();
// show2();
// show3();
// show4();
// show5();
// show6();

// Promise **********
show()
    .then(res => {
        console.log(res)
    })
    .then(show1)
    .then(res => {
        console.log(res)
    })
    .then(show2)
    .then(res => {
        console.log(res)
    })
    .then(show3)
    .then(res => {
        console.log(res)
    })
    .then(show4)
    .then(res => {
        console.log(res)
    })
    .then(show5)
    .then(res => {
        console.log(res)
    })
    .then(show6)
    .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    });

// [XMLHttpRequest, fetch request, axios, jquery ajax]