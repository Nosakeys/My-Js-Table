let date = new Date();
let newDate = date.getFullYear();

const datas = [
    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: newDate,
    },

    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: newDate,
    },

    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: newDate,
    },

    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: newDate,
    },

    {
        S_N: 5,
        emailAddress: "adebanjoademola@gmail.com",
        role: "Senior Software Engineer",
        createdBy: "Adebanjo Ademola",
        createdDate: newDate,
        modifiedBy: "Adebanjo Ademola",
        modifiedDate: newDate,
    },

    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: newDate,
    },

    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: newDate,
    },

    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: newDate,
    },

    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: newDate,
    },

    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: newDate,
    },
];

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement("th");
        let keyText = document.createTextNode(key);
        th.appendChild(keyText);
        row.appendChild(th);
    }
}

let table = document.querySelector("table");
let data = Object.keys(datas[0]);
console.log(table)
generateTableHead(table);

