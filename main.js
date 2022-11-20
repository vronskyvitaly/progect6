// 19.11 треннировался работать с массивами

// + создать пустой массив
let myArrey = []

// + задача добавить в массив пару значений
myArrey.push(1000,1000,1000,100,100,5000,16.50)

console.log (myArrey.length)

// + задача вывести значения массива с их индексами в консоль

function count(arr) {
    let sum = 0;
    arr.forEach(function(item){
        sum += item
    })
    return Math.round(sum);
}
// + задача вывести в консоль надпись с общей суммой денег пользователя 
console.log(`У пользователя в кошельке ${count(myArrey)} ₽`)

// + задача округлить последний элемент массива
// выполнил задачу выше, сразу в функции

// + задача удалить последний элемент массива и вывести общее значение в консоль
myArrey.pop()
console.log(`У пользователя в кошельке ${count(myArrey)} ₽`)

//  задача съимпровизировать что пользователь ввел в форме свое имя и фамилию попробовать / продолжить думать над задачей

// + задача, создать конструктор обьекта
class User {
  
  constructor(name,subname,mail){
    this.name=name
    this.subname = subname
    this.mail = mail

  }
}

// + задача создать новый обьект класса User
let user1 = new User ("Ангелина", "Крукович","angel@mail.ru")

// + задача вывести в консоль значения нашего обьекта
Object.entries(user1).forEach(([key, value]) => {
  console.log(`Значение поля ${key} - ${value}`) 
})



let newUserName = document.querySelector('#name')
let newUserSubname = document.querySelector('#subname')
let newUserEmail = document.querySelector('#email')
let btn = document.querySelector('#btn')

console.log(newUserEmail)

btn.addEventListener(`click`, function () {
 let user2 = new User (newUserName,newUserSubname,newUserEmail)
 console.log (user2.name)

} )