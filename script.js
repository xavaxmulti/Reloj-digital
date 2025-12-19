var peticion = "https://api.nasa.gov/planetary/apod?api_key=YJN1ziqRY9ipyVv9pIpJhdS4uYH0UUNdofycldCi"
const url = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=39badfd12ff7a0e2ac2c60efa6dd056e&units=metric&lang=es`;

 async function buscarNasa() {
    var resultado = await fetch(peticion)
    var data = await resultado.json()




    console.log(data);
    var resultado2 = await fetch(url)
    var data2= await resultado2.json()




    console.log(data2);
    var clima = document.getElementById("clima")
     var temperatura = document.getElementById("temperatura")
    clima.innerHTML=data2.weather[0].main
    temperatura.innerHTML=data2.main.temp

console.log(data);

var climaImg = document.getElementById("climaImg")//cambiar depende del id

    
    
    if (data2.weather[0].main == "Clouds") {
        climaImg.src = "nublado.jpeg"//cambiar depende de la img
    }
    
    if (data2.weather[0].main == "Rain") {
        climaImg.src = "lluvia.jpeg"//cambiar depende de la img
    }
        if (data2.weather[0].main == "Clear") {
        climaImg.src = "soleado.jpeg"//cambiar depende de la img
    }
if(data2.main.temp > 40){
        climaImg.src = "seco.jpeg"
    }
    if(data2.main.temp < 40){
        climaImg.src = "nevado.jpeg"
    }
}

CambiarTema()

buscarNasa()

function CambiarTema() {
    var body = document.body
    
    if (body.className == "temaClaro") {

        body.className = "temaOscuro";
    }
    else if (body.className == "temaOscuro" ){
        body.className = "temaClaro";
    }
    
}

buscarPelis()

async function buscarPelis(){
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGMxODVjNGE1ZGUxYTA3MjFmNDhkYTA0Yzk3ZDA5MyIsIm5iZiI6MTc2MDcyMzc3NS4wOTUsInN1YiI6IjY4ZjI4MzNmYmQ4ZTc0NTgzYjVhNTRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X12AmN8hjNvoJ858TRObE46r_rmSlg3R4X9yoxok6yc'
  }
};
var resultado = await  fetch('https://api.themoviedb.org/3/movie/now_playing?language=esp&page=1', options)
var data = await resultado.json()
//console.log(data.results[0].original_title);//esto es un array
//console.log(data.results);

var pelis = document.getElementById("peliculas")

 data.results.forEach(element => {
    var titulo = document.createElement("h2")
    titulo.innerHTML = element.original_title
    document.body.appendChild(titulo)
    
    
var descripcion = document.createElement("h3")
    descripcion.innerHTML = element.overview
    document.body.appendChild(descripcion)

    var img = document.createElement("img")
    img.src = "https://image.tmdb.org/t/p/w200" + element.poster_path
    document.body.appendChild(img)


}); 
}

