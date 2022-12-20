// РАБОТА С ПРОТОТИПОМ



// цель создать конструктор для обьекта
class NewObject  {
    constructor (name,surname,age) {
        this.name = name,
        this.surname = surname,
        this.age = age
    }
}

// цель создать два обьекта c помощью конструктора
const obj3 = new NewObject("Влад","Cкочиляс",24)
const obj4 = new NewObject("Геннадий","Вронский",38)


// cоздать метод на уровне прототипа для экземпляров данного класса
 NewObject.prototype.syHy = function () {
    console.log (`Привет меня зовут ${this.name}`)
  }


// вывести метод  одного из обьекта который обьявлен на уровне прототипа
console.log(obj3.syHy())
 








// РАБОТА С ЗАДАЧАМИ В ТЕЛЕФОНЕ

// - [ пока не делал ] Создать объект и реализовать пример кода с дестректуризацией свойств объекта. Создать массив с двумя элементами и сделать тоже самое. С помощью стрелочной функции выполнить деструктуризацию свойств передаваемого объекта. Если этот вопрос в целом не понятный, пересмотреть видео по изучению js

// + [выполнил] Создать объект с двумя свойствами name,age 1. Добавить новое свойство в объект 2. Добавить метод в объект 3. Вывести обьект в консоли 4. Удалить свойство age из объекта 5.Вывести обьект в консоли 

const obj1 = {
    name: "Vitaly",
    age: 33,
    
}

obj1.surname = "Vronsky",
obj1.syHy = function() {
   return `Я обьект программирования и меня зовут ${this.name}`
}

console.log(obj1.syHy())

delete obj1.age

console.log(obj1)


// + [выполнил] Объявить глобальную функцию setTimeout и в качестве ее аргумента передать функциональное выражение с сообщением «Вот и прошло пару секунд и теперь я программист!»

setTimeout (myFunction,5000)

function myFunction (){
    return console.log(`Прошло немного временние и вот я программист`)
}



// + [выполнил] Объявить переменную с значением “123“ , объявить еще одну переменную с значением 444, далее создать функцию которая получит эти переменные как параметры и сложит эти две переменные и выведет сумму этих переменных как число

let myVaribol1 = 444
let myVaribol2 = "666"

const nyfunction2 = (paramOne, paramThy) => {

    // + хочу сделать условие на проверку строка или нет
    if (typeof paramOne === "number" && typeof paramThy === "number"){
       return paramOne + paramThy
    } else {
        return Number(paramOne) + Number(paramThy)
    }
   
}
console.log(nyfunction2(myVaribol1,myVaribol2))




// проверка типа в условие 
const res = true
if (typeof res === "number") {
    console.log ("Это число")
} else if (typeof res === "string") {
    console.log ("Это строка")
} else {
    console.log ("Введенно некое другое значение")
}
console.log (typeof res)





// + [выполнено] Создать именную функцию с двумя параметрами и вернуть значение суммы двух чисел 11+44. Потом создать такое же функциональное выражение и присвоить его переменной и потом еще создать такое же анонимное функциональное выражение и тоже присвоить его переменной

function myFunction2 (nam1,nam2) {
    return console.log(nam1 +nam2)
}

myFunction2(11,44)


const myFunction3 = function (nam1,nam2) {
    return console.log(nam1 +nam2)
}

myFunction3(77,55)


const myFunction4 = (nam1,nam2)=> console.log (nam1 + nam2)

myFunction4(100,55)





// - [ ] Создать объект с двумя свойствами, с помощью функции создаем копию этого объекта и меняем одно из свойств, увеличиваем возраст на единицу, без изменения оригинального объекта! Дописать потом понял разработчик эту задачу или нет: ?

const myObj1 = {
    name:"Vitaly",
    age: 33
}

const myObj2 = {
    name:"Ангелина",
    age: 28
}

function myFunction5 (object) {
    let myNewObject = {...object}
    myNewObject.age += 1
    return myNewObject
}
myFunction5(myObj1)
myFunction5(myObj1)
console.log(myFunction5(myObj2))
console.log(myFunction5(myObj2))


// - [ ] Сверстать небольшой блок с тремя элементами и с помощью js по нажатию на один из элементов добавить к нему класс

let itam = document.querySelectorAll(".box ")

window.addEventListener("click", function (){
    // + выводим в консоль то что пользователь нажал на странице
    console.log ("Пользователь нажал на странице")
    
    // + добавляем по нажатию на один из элиментов добaвление класса
    for(let i = 0; i < itam.length; i++){
     itam[i].addEventListener("click",function(){
        this.classList.add("main")
     })
    }

    // - надо получить доступ к нажатому элементу на странице

    })
    



    // + [выполненно] Что делать метод map с массивом, реализовать пример кода
    // возвращает такой же массив, той же длины как и оригинальный массив

    const may1 = [1,2,3,4,5,6]

    const may1Res = may1.map((i)=>{
        let s = 0 
        return s = (i + i) * 6
    })

    console.log(may1Res)


    // + [выполненно] Что вернет объявленная функция без ключевого слова return ?
    // вернет undefined

    function myReturn () {
        console.log("Посмотреть что вернет эта функция, без ключевого слова return")
    }

    myReturn ()
    

    // + [выполненно] Объявить несколько переменных в одной строке, скопировать одно из значений переменной в другую переменную
    

    // 1 вариант
    // let name, 
    //         surname = "Vronsky", 
    //         age = 13


    // 2 вариант
    let name, 
            surname = "Vronsky" 
            ,age = 13

    console.log(age)
    console.log(surname)

    let myNewSurname = surname

    console.log(myNewSurname)

    // + [выполненно] Вопрос: имеет ли регистр значение в js? Попробовать объяснить на примере
    // да имеет, например переменная n и переменная N

    let n = 0
    let N = 10

    console.log(n)
    console.log(N)