
// 1.- Arreglo que contiene el total de las palabras a emplear en el juego, las que serán elegidas aleatoriamente mediante el uso de funciones.
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

// 2.- Variables globales a utilizar
var time = 10;

var score = 0;

var palabraRandom; 

var palabraAleatoria = document.querySelector("#randomWord");

var tiempoMostrado = document.querySelector("#timeSpan");

var palabraIngresada = document.querySelector("#text");

let timeInterval = setInterval (actualizarTiempo, 1000);

var scoreMostrado = document.querySelector("#score");

var contenedorGameOver = document.querySelector("#end-game-container");

var divisionPrincipal = document.querySelector(".main");

//3.- Mediante la propiedad element.innerHTML se indica a los span de id "score" y id "timeSpan" con que valores deben iniciar respectivamente, al comienzo de la partida.
scoreMostrado.innerHTML = score;

tiempoMostrado.innerHTML = time + " s"; 

//4.- Función randomWords, la cual genera un número al azar aumentado en proporción al largo del arreglo words y luego redondeado. Esto permite generar un número que representa una posición dentro del arreglo words, definida en palabraRandom a cada ejecución de la función.
function randomWords () {
    let i = Math.floor(Math.random()*words.length);
    palabraRandom = words[i];
};

//5.- Función addToDom, la cual cunmpleel rol de invocar a la función randomWords y además actualizar la palabra aleatoria en el inner del título h1 de id "randomWord".
function addToDom () {
    randomWords ();
    palabraAleatoria.innerHTML = palabraRandom;
};

//6.- Invocación de la función addToDom, para fines de que se muestre una palabra aleatoria al usuario apenas la página haya cargado.
addToDom ();

//7.- Método addEventListener, el cual responde luego de su primer if bajo la condición de que la tecla presionada sea Enter. Luego anida otro if, comparando el value del input con el inner del título que muestra la palabra aleatoria, para comprobar si la respuesta escrita es o no correcta, y así luego desancadenar las correspondientes instrucciones en cada caso.
palabraIngresada.addEventListener("keypress", function (e) { 
    console.log(e);
    if (event.key == "Enter") {if (palabraIngresada.value == palabraAleatoria.innerHTML) {
    (time += 3); 
    tiempoMostrado.innerHTML = time + " s";
    (palabraIngresada.value = ""); 
    addToDom();
    updateScore();
    } else { 
    (palabraIngresada.value = ""); 
    addToDom()}}
    }
);

//8.- Función actualizar tiempo, la cual es responsable de la cuenta atrás. Además se invoca la función gameOver en caso de que el tiempo llegue a cero. Por otro lado, la función setInterval de la variable timeInterval es la responsable de que la función actualizarTiempo sea invocada cada 1 segundo.
function actualizarTiempo () {
    if (time === 0) {
        clearInterval(timeInterval);
        scoreFinal = scoreMostrado.innerHTML;
        gameOver();
    } else {
    time --;
    tiempoMostrado.innerHTML = time + " s";
    }
};

//9.- Función updateScore, es la responsable de que el puntaje del jugador aumente de 1 en 1 por cada respusta correcta. Esta es invocada desde la función anónima definida en el addEventListener mencionado con anterioridad.
function updateScore () {
    score ++;
    scoreMostrado.innerHTML = score;  
};

//10.- Función gameOver, es la responsable de mostrar los mensajes del término del juego al participante una vez el tiempo llega a cero y además de hacer desaparecer todo el contenido del div class "main" del html, con el cual ha interactuado el usuario durante el desarrollo de la partida.
function gameOver () {
    var tituloSinTiempo = "<h2>TE HAS QUEDADO SIN TIEMPO!!!</h2>";
    var scoreFinal = scoreMostrado.innerHTML;
    var parrafoPuntajeFinal = `<p>TU PUNTAJE FINAL ES DE: ${scoreFinal} PUNTOS</p>`;
    var botonVolveAEmpezar = "<br>" + '<button onclick="location.reload()">Volvé a empezar</button>';
    contenedorGameOver.innerHTML = tituloSinTiempo + parrafoPuntajeFinal + botonVolveAEmpezar;
    divisionPrincipal.innerHTML = "";
};
