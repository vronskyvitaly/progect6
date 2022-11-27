// РАБОТА С ОБЬЕКТОМ



// - цель создать пустой обьект
let myNewObject = {}
let myNewObject1 = new Object()


// + задача, создать конструктор обьекта c методом
class User {
  constructor(name,subname,mail){
    this.name=name
    this.subname = subname
    this.mail = mail
  }
    siHi() {
    let res = `Привет меня зовут ${this.name}`
    return res
    }
}



// + задача создать новый обьект класса User
let user1 = new User ("Ангелина", "Крукович","angel@mail.ru")

console.log(user1)

// Метод Object.getOwnPropertyNames() возвращает массив со всеми свойствами (независимо от того, перечисляемые они или нет), найденными непосредственно в переданном объекте.
console.log((Object.getOwnPropertyNames(User.prototype)))

// + задача вывести в консоль индекс и значения нашего обьекта
Object.entries(user1).forEach(([key, value]) => {
  console.log(`Значение поля ${key} - ${value}`) 
})



// + цель создать обьект и сделать в этом обьекте метод

const myObject = {
  name : "Vitaly",
  subname :"Vronsky",
  age:33,
  country:`Russia`,
  city:`Moscow`,
}

console.log(`Я живу в городе ${myObject.city}`)


 
// + цель добавить свойство из нескольких слов через квадратные скобки

myObject[`Семейное положение`]= `Xолост`

console.log(`Семейное положение ${myObject[`Семейное положение`]}`)

console.log(myObject)



// + цель добавить еще одно свойство через точечную запись

myObject.growth = 186

console.log(myObject)



// + цель удалить одно из свойств нашего обьекта

delete myObject.growth

console.log(myObject)



// + цель удалить одно из свойств которое состоит из нескольких слов нашего обьекта

delete myObject[`Семейное положение`]

console.log(myObject)


// + цель создать обьект с  вложенным свойством

const myObject1 = {
  ...myObject, // добавил все свойства из нашего первого обьекта
  name: "Геннадий",
  age: 37,
  country: `Belarus`,
  city: `Pinsk`,
  info: {
    isPopular: true
    
  }
}

console.log (myObject1.info.isPopular)



// + цель удалить вложенное свойство

delete myObject1.info[`isPopular`]

console.log(myObject1)



// + цель создать обьект и с помощью ранее созданных переменных добавить их в свойства обьекта

const userName = "Vitaly"
const userSubname = "Vronsky"

const userProfile = {
  name:userName,
  subname:userSubname,
  id: 1
}

// cокращенный формат записи
// const userProfile = {
//   name,
//   subname,
//   id: 1
// }

console.log(userProfile)



// + цель создать обьект с методом 

const myObject2 = {
  name: `Vitaly`,
  syHy: function (age, name) {
    name = this.name
    let message = `Привет, меня зовут ${name}, мне сегодня исполнилось ${age}`
    return message
  } 
}

// вторая форма записи, если значение нашего свойства функция 

// const myObject2 = {
//   name: `Vitaly`,
//   syHy (age, name) {
//     name = this.name
//     let message = `Привет, меня зовут ${name}, мне сегодня исполнилось ${age}`
//     return message
//   } 
// }


// console.log (myObject2.syHy(33))




// + цель конвертировать наш обьект в JSON

JSON.stringify(myObject1) 


// + цель расспарсить строку JSON 

const objectStringifide = JSON.stringify(myObject1)
JSON.parse(objectStringifide)


// - цель создать конструктор для обьектов

class User3 {
  constructor (name,subname) {
    this.name = name,
    this.subname = subname
  }
    siHi() {
      `Привет меня зовут ${this.name}, моя фамилия ${this.subname}, мне ${this.age}`
    }
}

const user = new User3()
user.name = "Vitaly"
user.subname = "Vronsky"
console.log (user)

// добавляем еще одно свойство в наш обьект
user.age = 33

console.log(user)



// + цель понять что такое мутирование копии обьекта 

const person = {
  name: `Bob`,
  age: 28,
}

const person2 = person

person2.age= 33
person2.isAdult = true

// теперь посмотрим как мутировал наш главный обьект
console.log(person.age)
console.log(person.isAdult)




// + цель получение данных с удаленного сервера и добавление этих данных в html документ

async function getResponse () {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let content = await response.json()
  console.log(content)
  content = content.splice(0,10)
  console.log (content)

  let list = document.querySelector('.post')
  // console.log(list)

  for (let key in content) {
    console.log (content[key])
    list.innerHTML += `
    <li class = "post">
    <h4>${content[key].title}</h4>
    <p>${content[key].body}</p>
    </li>
   `
  }
  
}

  getResponse()


  









