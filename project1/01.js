const btnMinys = document.querySelector(`[data="minys"]`)

const btnPlys = document.querySelector(`[data="plys"]`)

const btnRes = document.querySelector(`[data="res"]`)




btnMinys.addEventListener("click", function(){

if (btnRes.innerText > 1) {
    console.log("Нажал на минус, и ресультат не может быть меньше 1")
    btnRes.innerText = btnRes.innerText - 1
}

})

btnPlys.addEventListener("click", function(){
console.log("Нажал на плюс") 
++btnRes.innerText  
})