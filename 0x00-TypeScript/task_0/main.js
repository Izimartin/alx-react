var student1 = {
    firstName: "Geoffrey",
    lastName: "Zoref",
    age: 39,
    location: "Simsbury"
};
var student2 = {
    firstName: "Jeremy",
    lastName: "Steben",
    age: 40,
    location: "Avon"
};
var studentsList = [student1, student2];
var body = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
body.append(table);
