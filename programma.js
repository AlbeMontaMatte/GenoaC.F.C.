

let foglio = document.getElementById('foglio');

let disegno = foglio.getContext("2d");

disegno.fillStyle = 'red'

disegno.fillRect(140,0,360,360);

disegno.fillStyle = 'black'

disegno.fillRect(140,0,10,500);

disegno.fillStyle = 'black'

disegno.fillRect(0,360,500,13);

disegno.fillStyle = 'black'

disegno.fillRect(0,165,140,15)

disegno.fillStyle = 'blue'

disegno.fillRect(0,373,140,373)

disegno.fillStyle = 'black'

disegno.fillRect(440,373,10,127)

disegno.fillStyle = 'yellow'

disegno.fillRect(450,450,50,50)

disegno.fillStyle = 'black'

disegno.fillRect(450,435,50,15)

let foglio2 = document.getElementById('foglio2');

let disegno2 = foglio2.getContext("2d");

foglio2.addEventListener("click", (Event) => {
    disegno2.strokeRect(Event.offsetX, Event.offsetY, 500 * Math.random(), 500 * Math.random());

});