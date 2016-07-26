var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

resizeCanvas();
window.addEventListener('resize', resizeCanvas, false);


function resizeCanvas() {
    w = document.body.offsetWidth;
    h = document.body.offsetHeight;
    ctx.canvas.width  = w;
    ctx.canvas.height = h;
    ctx.translate(w/2, h/2);
}

function createArray(n) {
    var start = Date.now();

    var ret = [];
    var i = 0;

    while(i < n) {
        ret.push({
            index: i,
            value: ++i,
            color: color(i),
        });
    }

    return ret;
}


function color(i) {
    var h = i/700;
    var s = 1, v = 1;
    var rgb = HSVtoRGB(h, s, v);
    return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
}

function drawArray(array, positionY) {
    ctx.clearRect( -w/2, -h/2, w,h);
    for (var i = 0; i < array.length; i++) {
        var positionX = -700 + i * 2;

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = array[i].color;
        ctx.moveTo(positionX , 0 + positionY);
        // ctx.lineTo(positionX, -400 + positionY);
        ctx.lineTo(positionX, -array[i].value + positionY);
        ctx.stroke();
    }
}

var array = createArray(700);
var drawingArray = {
    array: array.slice()
}

recursiveShuffle(array, drawingArray);

function render() {
    if (!drawingArray.done) {
        drawArray(drawingArray.array, 250);
    }

    if (drawingArray.done && !drawingArray.alerted) {
        array = drawingArray.array;
        drawingArray.alerted = true;
    }
      
    window.requestAnimationFrame(render);
}

render();