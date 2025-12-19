//creamos 60 divisores
for (let i = 0; i < 200; i++) {
    $("contenedor").append(" <div>"+i+"</div>")
}


$("div").attr("class","temaOscuro")




$("div").on("click",function () {
    if ($(this).hasClass("temaOscuro")) {
        $(this).removeClass("temaOscuro")
        $(this).addClass("temaClaro")
    }
    else if ($(this).hasClass("temaClaro")) {
        $(this).removeClass("temaClaro")
        $(this).addClass("temaOscuro")
    }
    
    }
)
var divs = $("div")


//por cada uno de nuestros numeros en arrayUno lo cliqueamos

var arrayUno = [2,11,12,22,32,41,42,43]

var arrayDos = [1,2,10,13,22,31,40,41,42,43]

var arrayTres = [1,2,3,13,21,22,23,33,41,42,43]

var arrayCuatro = [1,3,11,13,21,22,23,33,43]

var arrayCinco = [1,2,3,11,21,22,23,33,41,42,43]

var arraySeis = [2,3,11,21,22,23,31,34,42,43]

var arraySiete = [11,12,13,23,33,43]

var arrayOcho = [2,3,11,14,22,23,31,34,42,43]

var arrayNueve = [1,2,3,11,13,21,22,23,33,43]

var arrayCero = [1,2,10,13,20,23,30,33,41,42]


var selector = 0

var arrayNumeros = [
    arrayCero,
    arrayUno,
    arrayDos,
    arrayTres,
    arrayCuatro,
    arrayCinco,
    arraySeis,
    arraySiete,
    arrayOcho,
    arrayNueve
]
function apagarTodo() {
    for (let i=0; i<200; i++) {
        if ($(divs[i]).hasClass("temaClaro")) {
            divs[i].click()
        }
    }
}

let mover = 0
let decimaSegundos = 0
let segundos = 0
let fecha =  new Date
let numeroSegundos = fecha.getMinutes()
if (numeroSegundos < 10) {
    decimaSegundos = 0
    segundos = numeroSegundos
}else{
    numeroSegundos = numeroSegundos.toString()//texto para separar
    decimaSegundos = numeroSegundos[0]// 20
    segundos = numeroSegundos[1]
    decimaSegundos = parseInt(decimaSegundos)//de vuelta a numeros
    segundos = parseInt(segundos)

}
let numeroMinutos = fecha.getHours()
let minutos = 0
let decimaMinutos =  0
if(numeroMinutos < 10){
    decimaMinutos = 0
    minutos = numeroMinutos
}else{
    numeroMinutos = numeroMinutos.toString()//texto para separar
    decimaMinutos = numeroMinutos[0]// 20
    minutos = numeroMinutos[1]
    decimaMinutos = parseInt(decimaMinutos)//de vuelta a numeros
    minutos = parseInt(minutos)

}
function prenderBoton() {
    for (let i = 0; i < arrayNumeros[selector].length; i++) {
    divs[arrayNumeros[selector][i]+mover].click()
}
}
function iniciarconteo(){
    setInterval(function() {
        apagarTodo()
        mover = 50
        selector = decimaSegundos
        prenderBoton()
        mover = 55
        selector = segundos
        prenderBoton()
        segundos +=1

        mover = 0
        selector = decimaMinutos
        prenderBoton()
        mover = 5
        selector = minutos
        prenderBoton()
        if (minutos  > 9) {
            minutos = 0 
            decimaMinutos += 1
        }
        if (decimaMinutos == 6) {
            segundos = 0
            decimaSegundos = 0
            minutos = 0
            decimaMinutos = 0
        }
        if(segundos > 9) {
            segundos = 0
            decimaSegundos +=1
        }
        if (decimaSegundos == 6) {
            segundos = 0
            decimaSegundos = 0
            minutos += 1
        }




    },
        60000)
}
iniciarconteo()
     apagarTodo()
        mover = 50
        selector = decimaSegundos
        prenderBoton()
        mover = 55
        selector = segundos
        prenderBoton()
        segundos +=1

        mover = 0
        selector = decimaMinutos
        prenderBoton()
        mover = 5
        selector = minutos
        prenderBoton()
        if (minutos  > 9) {
            minutos = 0 
            decimaMinutos += 1
        }
        if (decimaMinutos == 6) {
            segundos = 0
            decimaSegundos = 0
            minutos = 0
            decimaMinutos = 0
        }
        if(segundos > 9) {
            segundos = 0
            decimaSegundos +=1
        }
        if (decimaSegundos == 6) {
            segundos = 0
            decimaSegundos = 0
            minutos += 1
        }