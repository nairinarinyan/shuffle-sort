var utils = {
    swap: function(array, j, i) {
        var tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
    },
    random: function(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },
    squash: function(x, min, max, rangeMin, rangeMax) {
        return min + (x - rangeMin) * (max-min)/(rangeMax - rangeMin);
    }
};