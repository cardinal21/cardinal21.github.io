function chill() {
    var t = 32;
    var s = 15;
    var chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t* Math.pow(s, 0.16);

    document.getElementById("temp").innerHTML = t.toFixed(1);
    document.getElementById("speed").innerHTML = s.toFixed(1);
    document.getElementById("chill").innerHTML = chill.toFixed(1);
}
window.addEventListener("load", chill())