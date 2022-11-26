// РАБОТА С МАССИВОМ


// + цель создать массивы двумя способами
let myArrey = []
let myArrey1 = Array()

// + цель добавить в массив пару элементов
myArrey1.push(27,44,59)
console.log (myArrey1)

// + цель удалить последний элемент из массива и присвоить его в переменную
let delItem = myArrey1.pop()
console.log(delItem)
console.log(myArrey1)

// + вывести индекс и значения массива в консоль
myArrey1.forEach(function(value, index) {
    console.log (`Индекс массива ${index}, а его значение ${value}`)
} )

// + цель cоздать обьект с cвойствами и методом
const myObject = {
    name: "Vitaliy",
    subname: "Vronsky",
    age: 33,
    // cоздам еще метод обьекта
    syHy() {
        console.log (`Привет, меня зовут ${this.name}`)
    }
}

console.log(myObject.syHy())


// + цель добавить обьект  myObject в массив myArrey
myArrey.push(myObject)
console.log (myArrey)


// - цель вывести значения нашего обьекта в массиве

