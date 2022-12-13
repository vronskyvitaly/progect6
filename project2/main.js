
// Получаем элементы на странице и записываем их в переменные. Выводим полученный элемент в консоль
const text = document.querySelector('.text');
console.log(text);
const btn1 = document.querySelector('.btn-1');
console.log(btn1);
const btn2 = document.querySelector('.btn-2');
console.log(btn2);


// Делам обьект с вопросом и верным ответом 
const qestion1 ={
   qestion: "Число 2 больше чем 3?",
   answer: false,
}

const qestion2 ={
    qestion: "Число 5 больше чем 3?",
    answer: true,
 }

 const qestion3 ={
    qestion: "Число 55 больше чем 3?",
    answer: false,
 }

 const qestion4 ={
    qestion: "Число 10 равно 10?",
    answer: true,
 }

 const qestion5 ={
    qestion: "Число 345 больше чем 578?",
    answer: false,
 }


// Cоздаю массив из обьеков
const myArrey = [qestion1,qestion2,qestion3,qestion4,qestion5];
// Вывожу его значения в консоль
for (var i = 0; i < myArrey.length; i++) {
    console.log (myArrey[i].qestion)
    // p.innerHTML = ru[i];
  }

// Cоздаю функцию которая выводит рандомный вопрос из цикла, то есть из свойств нашего обекта
function rondomElement (аrrey){
    
    for (var i = 0; i < аrrey.length; i++) {
        console.log(аrrey[i].qestion)
        // p.innerHTML = ru[i];
        
      }
}

rondomElement(myArrey)


// Отслеживаем событие click на кнопку btn1
btn1.addEventListener("click", function(){
    let messeg = "Пользователь нажал на кнопку Да"
    console.log(messeg);
    // делаем условие по которому выводится верный ответ
    qestion1.answer = true
    text.textContent = "Неправильно, вы проиграли!";
    // заблокировать кнопку после нажатия
    btn1.disabled = true;
    btn2.disabled = true;
    // c помощью свойства скрываем кнопку после нажатия
    btn1.hidden = true;
    btn2.hidden = true;
   
})


// Отслеживаем событие click на кнопку btn1
btn2.addEventListener("click", function(){
    let messeg = "Пользователь нажал на кнопку Нет"
    console.log(messeg);
    // делаем условие по которому выводится верный ответ
    qestion1.answer = false
    text.textContent = "Правильно, вы выиграли!";
    // заблокировать кнопку после нажатия
    btn1.disabled = true;
    btn2.disabled = true;
    // c помощью свойства скрываем кнопку после нажатия
    btn1.hidden = true;
    btn2.hidden = true;
     
})



// ЗАДАЧА РАЗРАБОТЧИКУ

// + 1.После ответа пользователя вывести ответ
// - 2.После ответа пользователя и вывода ответа надо сделать так, чтобы появлялся следующий вопрос