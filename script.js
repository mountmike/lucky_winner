function letsSpin() {
    winnerOutput.style.opacity = 0;
    var x = 1024; //min value
    var y = 9999; //max value

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('wheel').style.transform = "rotate("+deg+"deg)";
    setTimeout(() => {
        winnerOutput.textContent = studentNames[randomIndex(studentNames)].toUpperCase();
        winnerOutput.style.opacity = 1;
        winnerOutput.style.backgroundColor = colours[randomIndex(colours)];
      }, 4000)
}

let winnerOutput = document.querySelector("#luckywinner");
let studentNames = ["akram mansour", "kevin utama", "amal prasad", "liang yu", "aung khant thiha", "maria valentina gottardello", "bilal foggi", "michael tharratt", "caleb love", "cicero teixeira", "mindy nam", "mohammed ali", "deepali patro", "nikki pham", "dimitri nossar", "simon ruc", "elmira alimohammadi", "stefanus lie", "falko kammel", "tales steganho pinto", "frances lozada", "tom nicholas", "henry rennell", "whoopi hutman",
"iffath", "zhenyu chen"];
let colours = ["#ff1f1f", "#19e3cf", "#9e0bf3", "#15b600", "#1f26ff", "#ff5a5a", "#57fff1", "#ff9612"]

function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
}