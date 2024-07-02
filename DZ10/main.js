// 10.1
let bark = {
    Name: "Abu",
    Lastname: "Jinnie",
    age: 18, 
    info: function(){
     console.log(this.Name, this.Lastname, this.age)
    }
}
bark.info()

//10.2
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let secArr = arr.filter(function(number) {
  return number % 2 === 0;
});
console.log(secArr); 

// 10.3
var list = {
    contacts: [   
         {
        name: "Andrew",
        phoneNumber: +380997015935,
        email: "andrewyakimienko@gmail.com"
    },
    {
        name: "Quoka",
        phoneNumber: +380997015936,
        email: "quoka@gmail.com"
    }
    
],
findContactByName: function (name){
console.log("Мы нашли этого негодяя:", this.contacts.find(contacts => contacts.name === name))
    },
    addContact: function(name, phoneNumber, email){
     this.contacts.push({name:name, phoneNumber:phoneNumber, email:email})
    console.log("Номер негодяя успешно добавлен", this.contacts);
    }

}
 


