let company = {
sales: [{name: "John", salary: 1000}, {name: "Alice", salary: 600}],
development: {
    web: [{name: "peter", salary: 2000}, {name:"Alex", salary:1800}],
    internals: [{name: "Jack", salary: 1300}], 
    marketing: [{name: "Suzie", salary: 3000}, {name:"Alexander", salary:565}], // докинул ради теста
}

};

function GetTotalSalary(com){
    let Total = 0;
for(let SubDepartment of Object.values(com)){ // Вот это было нагло украдено с чата гпт, НО ИЗУЧЕНО(!)
    console.log(SubDepartment)

    // Меня немного прикололо, что по итогу строчки, что выше оно вывело новый  итерабельный массив
    // да и вообще прикольная, но крайне странная штука 
    if(Array.isArray(SubDepartment)){
for(let emp of SubDepartment){
    Total += emp.salary
}

    }
    else{
        Total += GetTotalSalary(SubDepartment);
    }
} 
return Total
}
// Осталось теперь только в будущем не завтыкать, что так можно
console.log(GetTotalSalary(company));

// А вообще в порядке вещей собирать свою "Коллекцию решений" что бы потом это использовать в будущем? 