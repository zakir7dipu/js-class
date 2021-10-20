/*
    we write a function that represent all even number from 1 to n
    ans will show like : 2, 4, 6, 8, .........n
 */



const show = n => {
    for (let i = 1; i <= n; i++){
        if (i % 2 == 0){
            document.write(i+'<br/>')
        }
    }
}

let n = prompt('write yor number: ');
n = parseInt(n);
show(n);





