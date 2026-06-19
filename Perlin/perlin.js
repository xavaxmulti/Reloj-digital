// const { createNoise2D } = require('simplex-noise');


for (let i = 0; i < 140-3; i++) {
    $("body").append(" <img > "+"</img>")
}

$("body").append('<input type="range" min="0" max="100" value="50" class="slider">')
$("body").append('<input type="range" min="0" max="100" value="50" class="slider">')
$("body").append('<input type="range" min="0" max="100" value="50" class="slider">')

let contador = 0
setInterval(() => {
 $("img").each(function(i){
    var noise = new Noise(5);
    let y = i / 5 //posicion y
    let x = i % 10 //posicion x
    
        
    let n = noise.perlin3((x/10)+contador/20,y/20,0.2)//normal


    let n2 = noise.perlin3((x/80)+contador/70,y/40,0.3)//zoom afuera

    let n3 = noise.perlin3((x/3)+contador/5,y/4,0.1)//mucho detalle
    n = n* $("input")[0].value/100 + n2*$("input")[1].value/100 + n3*$("input")[2].value/100
    //   n = n/2
    // console.log(n);
    //console.log(n);
    //si mayor a 0.2
    //menor a 0.2 pero mayor a -0.2
    //else
    if (n>0.2) {
        
        $(this).attr("src","Olas.png")
    }
    else if (n<=0.2 && n>=-0.2) {
        
        $(this).attr("src","Pasto.png")
    }else{
        $(this).attr("src","Arbol.png")
    }
    // $(this).css("background-color","hsl( 214 , 51%, "+(50+ (50*n))+"%)", "transform ", "rotate(15deg);")
 })
 contador+=1.5

},100)