// можно создать обьект двумя способами
let newObject = {};
// и
let newObject1 = Object();




// cоздаем обьект
const myCar = {
	model:"Ауди",
	fun:function() {
		console.log(`Сейчас у меня машина - ${this.model}`)
	}
}

// создаю новый экземпляр обьекта сar и записываю в него все значения свойств из обьекта-родителя
let newMycar = Object.create(myCar)

newMycar.model = "Вольво"




// перебираю два массива 
for (e in myCar) {
	console.log(`${e} : ${myCar[e]}`)
}

for (e in newMycar) {
	console.log(`${e} : ${newMycar[e]}`)
}






let obj = {
	name:"Vitaly",
	subname:"Vronsky",
	"Первое свойство": true,
	greeting: function () {
		console.log(`Добрый день`);
	},
}

// coздал новый обьект и присвоил ему все свойства с первого обьекта obj
// const obj1 = Object.assign ({},obj)



