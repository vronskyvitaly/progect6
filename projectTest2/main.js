// - [ ] Сверстать в html две кнопки, через js повесить на них событие в котором по нажатию на кнопку в консоли появляется надпись click 1. Передавать в обработчик для двух кнопок колбек функцию 2. Удалить обработчик событий с первой кнопки 3.

const btn1 = document.querySelector(`.btn1`)
console.log(btn1)
const btn2 = document.querySelector(`.btn2`)
console.log(btn2)
const text = document.querySelector(`.text`)
console.log(text)

function myfunctionClick (event) {
    // выводим в консоль значение innerHTML для кнопки по которой кликнули
    console.log (`Пользователь нажал на кнопку ${this.innerHTML}`)
    // выводим свойство target для кнопки по которой кликнули
    console.log(event.target)

    // меняем цвет по нажатию на первую либо вторую кнопку и присвайваем это значение переменной
    // const redColorText = text.style.color = "red"
    // const greenColorText = text.style.color = "green"

    // надо сделать условия условие по которому по которому когда пользователь нажимает на первую кнопку цвет текст становится красный а если на вторую зеленный
    if (this.dataset.color === "red"){
        // меняем цвет по нажатию
        const redColorText = text.style.color = "red"
        // увеличивам размер текста по нажатию
        const fontSizeText = text.style.fontSize = "20px"
    } else {
        const greenColorText = text.style.color = "green"
    }
}


btn1.addEventListener("click", myfunctionClick)
btn2.addEventListener("click", myfunctionClick)


// удаляю обработчик событий с первой кнопки, но пока скрываю это удаление
// btn1.removeEventListener("click", myfunctionClick)