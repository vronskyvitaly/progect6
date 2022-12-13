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
 



