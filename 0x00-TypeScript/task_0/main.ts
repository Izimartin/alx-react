interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Geoffrey",
    lastName: "Zoref",
    age: 39,
    location: "Simsbury"
}

const student2: Student = {
    firstName: "Jeremy",
    lastName: "Steben",
    age: 40,
    location: "Avon"
}

const studentsList = [student1, student2];

const body = document.getElementsByTagName('body')[0];
const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
})

body.append(table);