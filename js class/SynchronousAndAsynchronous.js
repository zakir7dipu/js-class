// Synchronous ************
// Asynchronous ***********
//
// console.clear();
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
// show()
//     .then(res => {
//         console.log(res)
//     })
//     .then(show1)
//     .then(res => {
//         console.log(res)
//     })
//     .then(show2)
//     .then(res => {
//         console.log(res)
//     })
//     .then(show3)
//     .then(res => {
//         console.log(res)
//     })
//     .then(show4)
//     .then(res => {
//         console.log(res)
//     })
//     .then(show5)
//     .then(res => {
//         console.log(res)
//     })
//     .then(show6)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err =>{
//         console.log(err)
//     });

// async await

// async function showAllProAtTrF(){
//     let s0 = await show();
//     console.log(s0);
// }
// showAllProAtTrF();

const showAllProAtArF = async () => {
   try {
       let s0 = await show();
       let s1 = await show1();
       let s2 = await show2();
       let s3 = await show3();
       let s4 = await show4();
       let s5 = await show5();
       let s6 = await show6();

       console.log(s0);
       console.log(s1);
       console.log(s2);
       console.log(s3);
       console.log(s4);
       console.log(s5);
       console.log(s6);
   }catch (err){
       console.log(err)
   }
}
showAllProAtArF();
// [XMLHttpRequest, fetch request, axios, jquery ajax]