for (let i = 0; i < 6; i++) {
    $("body").append(" <div nota='" + i+ "'>"+"</div>")
    
}
let tl = anime.timeline({
    duration:3000,
})

tl.add({

    targets: "div",
    
    scale:0.75,
    easing: 'spring(6.2, 805.3, 15.2,19.6)',
    delay:anime.stagger(100)
})
let sonido0 = new Audio("Do.mp3")
let sonido1 = new Audio("Re.mp3")
let sonido2 = new Audio("Mi.mp3")
let sonido3 = new Audio("Fa.mp3")
let sonido4 = new Audio("Sol.mp3")
let sonido5 = new Audio("La.mp3")
let sonido6 = new Audio("Si.mp3")



$("div").on("click", function () {
    
let nota = $(this).attr("nota") 
    
    

    if (nota == 0) {
        
        sonido0.currentTime = 0
        sonido0.play()
    }
    if (nota == 1) {
        
        sonido1.currentTime = 0
        sonido1.play()
    }
    if (nota == 2) {
        
        sonido2.currentTime = 0
        sonido2.play()
    }
    if (nota == 3) {
        
        sonido3.currentTime = 0
        sonido3.play()
    }
    if (nota == 4) {
        
        sonido4.currentTime = 0
        sonido4.play()
    }
    if (nota == 5) {
        
        sonido5.currentTime = 0
        sonido5.play()
    }
    if (nota == 6) {
        
        sonido6.currentTime = 0
        sonido6.play()
    }

    anime({

        targets:this,
        scale:[1,0.75],
        duration:6000,
        easing: 'spring(6.2, 805.3, 15.2,19.6)',

        delay:anime.stagger(100)
    })
})

document.addEventListener("keydown",function (event) {
    if (event.key == "1") {
        //vamos a hacer click en el primer div
        $("div")[0].click()
        
    }
    if (event.key == "2") {
        
        $("div")[1].click()
        
    }
    if (event.key == "3") {
        
        $("div")[2].click()
        
    }
    if (event.key == "4") {
        
        $("div")[3].click()
        
    }
    if (event.key == "5") {
        
        $("div")[4].click()
        
    }
    if (event.key == "6") {
        
        $("div")[5].click()
        
    }
    if (event.key == "7") {
        
        $("div")[6].click()
        
    }
})