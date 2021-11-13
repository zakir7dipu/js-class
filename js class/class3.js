// 1. string.trim()
// 2. string.length
// 3. string.charAt(3)
// 4. string.toUpperCase()
// 5. string.toLowerCase()
// 6. string.concat(string)
// 7. string.slice(index, index)

let student = {
    name: 'Alif',
    address: 'amtola',
    age: 5,
    phone: '019657821364',
    subject: [
        {
            name: 'bangla',
            full: 100
        },
        {
            name: 'english',
            full: 100
        },
        {
            name: 'GM',
            full: 100
        },
        {
            name: 'SS',
            full: 100
        },
    ]
}

let students = [
    {
        name: 'Alif',
        address: 'amtola',
        age: 5,
        phone: '019657821364',
        subject: [
            {
                name: 'bangla',
                full: 100,
                ob_m: 80
            },
            {
                name: 'english',
                full: 100,
                ob_m: 90
            },
            {
                name: 'GM',
                full: 100,
                ob_m: 33
            },
            {
                name: 'SS',
                full: 100,
                ob_m: 25
            },
        ]
    },
    {
        name: 'amena',
        address: 'amtola',
        age: 5,
        phone: '019657821364',
        subject: [
            {
                name: 'bangla',
                full: 100,
                ob_m: 60
            },
            {
                name: 'english',
                full: 100,
                ob_m: 80
            },
            {
                name: 'GM',
                full: 100,
                ob_m: 95
            },
            {
                name: 'SS',
                full: 100,
                ob_m: 15
            },
        ]
    },
    {
        name: 'sokina',
        address: 'amtola',
        age: 5,
        phone: '019657821364',
        subject: [
            {
                name: 'bangla',
                full: 100,
                ob_m: 80
            },
            {
                name: 'english',
                full: 100,
                ob_m: 80
            },
            {
                name: 'GM',
                full: 100,
                ob_m: 95
            },
            {
                name: 'SS',
                full: 100,
                ob_m: 86
            },
        ]
    },
    {
        name: 'moksed',
        address: 'amtola',
        age: 5,
        phone: '019657821364',
        subject: [
            {
                name: 'bangla',
                full: 100,
                ob_m: 15
            },
            {
                name: 'english',
                full: 100,
                ob_m: 36
            },
            {
                name: 'GM',
                full: 100,
                ob_m: 22
            },
            {
                name: 'SS',
                full: 100,
                ob_m: 5
            },
        ]
    },
];

let pass = 33;

let title = document.createElement('h2');
title.innerText = "List of Failor Students"
title.style = "text-transform: uppercase; text-decoration: underline; text-align: center;"
document.querySelector('body').appendChild(title);

const table = document.createElement('table');
let thead = document.createElement('thead');
let tr = document.createElement('tr');
let nameCol = document.createElement('th');
nameCol.innerText = 'Name';
tr.appendChild(nameCol);
let phoneCol = document.createElement('th');
phoneCol.innerText = 'Phone';
tr.appendChild(phoneCol);
let subjectCol = document.createElement('th');
subjectCol.innerText = 'Subject';
tr.appendChild(subjectCol);
let ob_mCol = document.createElement('th');
ob_mCol.innerText = 'Obtain Marks';
tr.appendChild(ob_mCol);
thead.appendChild(tr);
table.appendChild(thead);
document.querySelector('body').appendChild(table);

let tbody = document.createElement('tbody');

Array.from(students).map(item => {

    let subjects = item.subject;
    Array.from(subjects).map(subject => {
        if (subject.ob_m < pass ){
        // && subject.name == 'SS'
            tr = document.createElement('tr');
            nameCol = document.createElement('td');
            nameCol.innerText = item.name;
            tr.appendChild(nameCol);
            phoneCol = document.createElement('td');
            phoneCol.innerText = item.phone;
            tr.appendChild(phoneCol);
            subjectCol = document.createElement('td');
            subjectCol.innerText = subject.name;
            tr.appendChild(subjectCol);
            ob_mCol = document.createElement('td');
            ob_mCol.innerText = subject.ob_m;
            ob_mCol.style = "color: red;";
            tr.appendChild(ob_mCol);
            tbody.appendChild(tr);
        }
    })
})
table.appendChild(tbody);

