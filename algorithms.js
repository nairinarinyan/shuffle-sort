function knuthShuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = utils.random(0, i);
        utils.swap(array, j, i);
    }

    return array;
}


function recursiveShuffle(array, drawingArray) {
    var i = array.length - 1;
    var ar = array.slice();
    shuffle(i);

    function shuffle(i) {
        var j = utils.random(0, i);
        utils.swap(ar, j, i);

        drawingArray.array = ar;
        if (i > 0) {
            setTimeout(function() {
                shuffle(--i);
            }, 20)
        } else {
            drawingArray.done = true;
        }
    }
}

// function mergeSort(array) {
//     return divide(array);
// }

// function divide(array) {
//     if (array.length <= 1) {
//         return array;
//     }

//     var midPoint = Math.floor(array.length / 2);
//     var leftPart = array.slice(0, midPoint);
//     var rightPart = array.slice(midPoint);

//     return conquer(divide(leftPart), divide(rightPart));
// }

// function conquer(a, b) {
//     var i = 0, j = 0;
//     var ret = [];

//     while(i < a.length || j < b.length) {
//         if (typeof b[j] !== 'undefined' ? !a[i] ? false : a[i].value < b[j].value : true) {
//             ret.push(a[i++]);
//         } else {
//             ret.push(b[j++]);
//         }
//     }
    
//     if (ret.length === array.length) console.log(ret);
//     return ret;
// }

// stolen from http://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}


function mergeSort(array) {
    return divide(array);
}

function divide(array) {
    if (array.length <= 1) {
        return array;
    }

    var midPoint = Math.floor(array.length / 2);
    var leftPart = array.slice(0, midPoint);
    var rightPart = array.slice(midPoint);

    leftPart = divide(leftPart);
    rightPart = divide(rightPart);

    return conquer(leftPart, rightPart);
}

function foo(array) {
    divide(array);

    function divide(array) {

        var midPoint = Math.floor(array.length / 2);
        var leftPart = array.slice(0, midPoint);
        var rightPart = array.slice(midPoint);

        setTimeout(function() {
            divide(leftPart);
            divide(rightPart);
        }, 100); 
    } 
}

function conquer(a, b) {
    var i = 0, j = 0;
    var ret = [];

    while(i < a.length || j < b.length) {
        if (typeof b[j] !== 'undefined' ? !a[i] ? false : a[i].value < b[j].value : true) {
            ret.push(a[i++]);
        } else {
            ret.push(b[j++]);
        }
    }
    
    if (ret.length === array.length) console.log(ret);
    return ret;
}