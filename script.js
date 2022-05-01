

const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili',   
];

var palabraAleatoria = document.querySelector("#randomWord");

var palabraRandom;

var time = 10;

var score = 0;

function randomWords () {
    let i = Math.floor(Math.random()*words.length);
    palabraRandom = words[i];
}

function addToDom () {
    randomWords ();
    palabraAleatoria.innerHTML = palabraRandom;
}

addToDom ();


var tiempoMostrado = document.querySelector("#timeSpan");

var palabraIngresada = document.querySelector("#text");

tiempoMostrado.innerHTML = time + "s";  //me lo sugirió VS en reemplazo de --> time + "s"

//A continuación se compara el value del input con el inner del título que muestra la palabra aleatoria
palabraIngresada.addEventListener("keypress", function (e) { 
    console.log(e);
    if (event.key == "Enter") {if (palabraIngresada.value == palabraAleatoria.innerHTML) {
    (time += 3); 
    tiempoMostrado.innerHTML = time + "s";
    (palabraIngresada.value = ""); 
    addToDom();
    updateScore();
    } else { 
    (palabraIngresada.value = ""); 
    addToDom()}} 
    }
)

function actualizarTiempo () {
    if (time === 0) {
        clearInterval(timeInterval);
        scoreFinal = scoreMostrado.innerHTML;
        gameOver();
    } else {
    time --;
    tiempoMostrado.innerHTML = time + "s";
    }
}

let timeInterval = setInterval (actualizarTiempo, 1000);

var scoreMostrado = document.querySelector("#score");
scoreMostrado.innerHTML = score;

function updateScore () {
    score ++;
    scoreMostrado.innerHTML = score;  
}

var contenedorGameOver = document.querySelector("#end-game-container")

var divisionPrincipal = document.querySelector(".main")

function gameOver () {
    var tituloSinTiempo = "<h2>TE HAS QUEDADO SIN TIEMPO!!!</h2>";
    var scoreFinal = scoreMostrado.innerHTML;
    var parrafoPuntajeFinal = `<p>TU PUNTAJE FINAL ES DE: ${scoreFinal} PUNTOS</p>`;
    var botonVolveAEmpezar = "<br>" + '<button onclick="location.reload()">Volvé a empezar</button>';
    contenedorGameOver.innerHTML = tituloSinTiempo + parrafoPuntajeFinal + botonVolveAEmpezar;
    divisionPrincipal.innerHTML = ""
}

/*

function actualizarTiempo () {   //Otra manera de solucionar la cuenta atrás, no necesita de clearInterval
    if (time > 0) {
    time --;
    tiempoMostrado.innerHTML = time + "s";
    }
}


var tiempoMostrado = document.querySelector("#timeSpan")

tiempoMostrado.textContent = `${time}s`  //me lo sugirió VS en reemplazo de --> time + "s"

var inputTexto = document.querySelector("#text")

var palabraIngresada = document.getElementById("text").value

inputTexto.addEventListener("keypress", function (e) {
    console.log(e);
    if (eventkey == "Enter") {if (palabraIngresada == palabraAleatoria) {
        (time += 3);
        (e = "");
        addToDom(); //verificar invocación de la función addToDom();
    } else {addToDom(); //solo invoca a la función addToDOm()
    } }
})


function actualizarTiempo () {
    if (time === 0) {
        clearInterval(timeInterval)
    } else {time --}
}

let timeInterval = setInterval (actualizarTiempo, 1000);

var parrafoPuntajeFinal = `<p>TU PUNTAJE FINAL ES DE: ${score}</p>`
*/