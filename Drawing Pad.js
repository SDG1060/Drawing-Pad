// Canvas effect (main);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let lineWidth = document.getElementById('lineWidth');
let strokeStyle = document.getElementById('strokeStyle');

lineWidth.addEventListener('change', function () {
    if (lineWidth.value <= 0) {
        window.alert("Line Width Is Less Than 0");
    }
})

let painting = false;

function start(event) {
    painting = true;
    draw(event);
}

function stop() {
    painting = false;
    ctx.beginPath();
}

function draw(event) {
    if (!painting) {
        return
    }
    ctx.lineWidth = this.lineWidth.value;
    ctx.strokeStyle = this.strokeStyle.value;
    ctx.lineTo(event.x, event.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.x, event.y);
    ctx.lineCap = 'round';
}
window.addEventListener('mousedown', start);
window.addEventListener('mouseup', stop);
window.addEventListener('mousemove', draw);
// Hamburger menu bar.
let nav = document.querySelector('nav');
let menuBar = document.querySelector('.menuBar');
let main = document.querySelector('.main');
nav.addEventListener('click', navigation);

function navigation() {
    nav.classList.toggle('active');
    menuBar.classList.toggle('active');
    main.classList.toggle('active');
    if (menuBar.classList.contains('active')) {
        window.removeEventListener('mousedown', start);
        window.removeEventListener('mouseup', stop);
        window.removeEventListener('mousemove', draw);
    } else {
        window.addEventListener('mousedown', start);
        window.addEventListener('mouseup', stop);
        window.addEventListener('mousemove', draw);
    }
}

let position = document.getElementById('position');
let mousePosition = document.querySelector('.position');
position.addEventListener('click', function () {
    mousePosition.classList.toggle('active');
})
window.addEventListener('mousemove', function (event) {
    mousePosition.value = 'left: ' + event.clientX + '; top: ' + event.clientY;
})

window.addEventListener('keydown', function (event) {
    if (event.keyCode == 78) {
        navigation();
    }
    if (event.keyCode == 67) {
        function copyTextNow() {
            var copyText = document.querySelector('.position');
            copyText.select();
            document.execCommand('copy');
        }
        copyTextNow();
    }
})


var question = document.querySelector('.question');
var answer = document.querySelector('.answer');
question.addEventListener('click', function () {
    answer.classList.toggle('active');
    main.classList.toggle('inactive');
})