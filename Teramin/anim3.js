var frequency= 400
document.addEventListener("click",function(){
    const synth = new Tone.Synth().toDestination();
   
synth.triggerAttack("C4", "8n");
synth.triggerRelease(Tone.now()+0.5);
})

     for (let i = 0; i < 1; i++) {
    $("body").append(" <div nota='" + i+ "'>"+"</div>")
}
    var nota  = 200

document.addEventListener("click",async function(){
    //creamos un sonido
    await Tone.start()
    volumen = new Tone.Volume(-20).toDestination()


 nota = new Tone.Oscillator({
    type:"sine",
    frequency: frequency
}).connect(volumen)

nota.start()
})

document.addEventListener("mousemove",function(event){
    
    frequency= event.clientX
    nota.frequency.rampTo(frequency,0.05)
    $("div").css("background-color","hsl("+event.clientX/4+", 51%, 50%)")
let volumen2 = -40 + event.clientY/15
nota.volume.rampTo(volumen2,0.05)

//volumen = event.y/800
    anime({

        targets:"div",
        scale:[1,0.75],

        duration:6000,
        easing: 'spring(' + ((window.innerWidth  - frequencia*2 ))+ ', 805.3, 0,0)',

        delay:anime.stagger(100)

    })
})
//cuando todo la barra espaciadora
//guardo la nota que tengo ahora
//y la mantengo
var nota2
document.body.onkeyup = async function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    
    console.log("barraaaaa");
    
    


    await Tone.start()
    volumen = new Tone.Volume(-20).toDestination()

    nota2 = new Tone.Oscillator({
        type:"sine",
        frequency:frequencia
    }).connect(volumen)

    nota2.start()






  }
}
//cuando todo la barra espaciadora
//guardo la nota que tengo ahora
//y la mantengo
var listanotas = []
document.body.onkeyup = async function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    
    
    
    


    await Tone.start()
    volumen = new Tone.Volume(-40).toDestination()



    listanotas.push(new Tone.Oscillator({
        type:"sine",
        frequency:frequencia
    }).connect(volumen))


    
    listanotas[listanotas.length-1].start()
    

  }
}
var listanotas = []
document.body.onkeyup = async function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    
    
    
    


    await Tone.start()
    volumen = new Tone.Volume(-30).toDestination()



    listanotas.push(new Tone.Oscillator({
        type:"sine",
        frequency:frequencia
    }).connect(volumen))


    
    listanotas[listanotas.length-1].start()
    console.log("espacio");
    

    
        
        
    
    

  }
   if (
      e.code == "Enter" 
          
  ) {
    
    //RRECORRER TODA MI LISTA Y STOP TODAS LAS NOTAS
    for (let i = 0; i < listanotas.length; i++) {
        
        listanotas[i].stop();
    }
    //lista nueva
   
    
    listanotas = []
     console.log("enter");
  }
}