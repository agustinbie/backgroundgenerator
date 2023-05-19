var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.querySelector("body");

console.log(body);
console.log(css);
console.log(color1);
console.log(color2);

//al igual que click o keypress hay un evento en js llamado "input"  que detecta el cambio en el valor de un input

// color1.addEventListener("input", function(){
// 	// console.log(color1.value)
// 	// body.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+");" ; // esta linea no funciona porque no se necesita cerrar el css con );   ..solo con el ) funciona
// 	body.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")" ; 
// });

// color2.addEventListener("input", function(){
// 	// console.log(color2.value)
// 	body.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")" ;
// });

//refactory para ahorrar lineas
function setGradient() {
	body.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")" ;

	css.textContent= body.style.background+";";
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//en el input tag del html se puede agregar onclick= o oninput=  para emular el addEventListener pero no es tan extensible como este ultimo porque solo te deja llamar a una funcion
//por ejemplo: <input oninput= "setGradient()"> va a funcionar igual que lo que escribimos mas arriba 


//pide agregar un boton que genere colores aleatoreos. Encontré esto que genera un color code a partir de un numero random transformado a string a traves del sistema hexagecimal
// var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

 function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    if(randomColor.length != 7){ // In any case, the color code is invalid
        randomColor = generateRandomColor();
    }
    return randomColor;
    // The random color will be freshly served
};

function randomButton(){
	clr1=generateRandomColor();
	clr2=generateRandomColor();
	body.style.background="linear-gradient(to right,"+clr1+","+clr2+")";
	color1.value=clr1;
	color2.value=clr2;  //para que los inputs coincidan con el randomizador
};


