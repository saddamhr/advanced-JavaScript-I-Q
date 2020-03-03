const students = [
    {id: 63, name: 'Shawon'},
    {id: 65, name: 'Saddam'},
    {id: 68, name: 'Sudipto'},
    {id: 67, name: 'Zahid'}
];

const names = students.map(name => name.name);
console.log(names);

const idS = students.map(id => id.id);
console.log(idS);

const smaller = students.filter(s => s.id < 67);
console.log(smaller);

const smallerOne = students.find(s => s.id < 67);
console.log(smallerOne);