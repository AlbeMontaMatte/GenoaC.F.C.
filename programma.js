

let foglio = document.getElementById('foglio');

let disegno = foglio.getContext("2d");

disegno.fillStyle = 'red'

disegno.fillRect(150,20, 50, 100);

disegno.fillStyle = 'green'

disegno.fillRect(170,60,100,80);

disegno.fillStyle = 'yellow'

disegno.fillRect(160, 0,0,0);