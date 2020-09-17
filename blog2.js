var Z = {
    chars: {
        0: [ /* up */
            '\u0313', /*     ̓     */
            '\u0314', /*     ̔     */
            '\u033d', /*     ̽     */
            '\u0309', /*     ̉     */
            '\u030e', /*     ̎     */
            '\u0304', /*     ̄     */
            '\u0305', /*     ̅     */
            '\u033f', /*     ̿     */
            '\u0311', /*     ̑     */
            '\u0306', /*     ̆     */
            '\u0369', /*     ͩ     */
            '\u036a', /*     ͪ     */
            '\u036b', /*     ͫ     */
            '\u036c', /*     ͬ     */
            '\u036d', /*     ͭ     */
            '\u036e', /*     ͮ     */
            '\u036f', /*     ͯ     */
            '\u033e', /*     ̾     */
            '\u035b', /*     ͛     */
            '\u0346', /*     ͆     */
            '\u031a'  /*     ̚     */
        ],
        1: [ /* down */
            '\u0330', /*     ̰     */
            '\u0331', /*     ̱     */
            '\u0332', /*     ̲     */
            '\u0333', /*     ̳     */
            '\u0339', /*     ̹     */
            '\u033a', /*     ̺     */
            '\u033b', /*     ̻     */
            '\u033c', /*     ̼     */
            '\u0345', /*     ͅ     */
            '\u0347', /*     ͇     */
            '\u0348', /*     ͈     */
            '\u0349', /*     ͉     */
            '\u034d', /*     ͍     */
            '\u034e', /*     ͎     */
            '\u0353', /*     ͓     */
            '\u0354', /*     ͔     */
            '\u0355', /*     ͕     */
            '\u0356', /*     ͖     */
            '\u0359', /*     ͙     */
            '\u035a', /*     ͚     */
            '\u0323'  /*     ̣     */
        ],
        2: [ /* mid */
            '\u0340', /*     ̀     */
            '\u0341', /*     ́     */
            '\u0358', /*     ͘     */
            '\u0321', /*     ̡     */
            '\u0322', /*     ̢     */
            '\u0327', /*     ̧     */
            '\u0328', /*     ̨     */
            '\u0334', /*     ̴     */
            '\u0335', /*     ̵     */
            '\u0336', /*     ̶     */
            '\u034f', /*     ͏     */
            '\u035c', /*     ͜     */
            '\u035d', /*     ͝     */
            '\u035e', /*     ͞     */
            '\u035f', /*     ͟     */
            '\u0360', /*     ͠     */
            '\u0362', /*     ͢     */
            '\u0338', /*     ̸     */
            '\u0337', /*     ̷      */
            '\u0361', /*     ͡     */
            '\u0489' /*     ҉_     */
        ]
    }
}
function binaryRandom() {
    return Math.round(Math.random());
}

function random(high, low) {
    return Math.floor(Math.random() * high - low + 1);
}

function randomCaseText() {
    var input = document.getElementById("input").value;
    var output = "";
    for (const c of input) {
        output += binaryRandom() ? c.toUpperCase() : c.toLowerCase();
    }
    document.getElementById("output").innerHTML = output;
}


function zalgoCaseText() {
    var input = document.getElementById("corruptInput").value;
    var output = "";
    for (const c of input) {
        var len = random(20, 1);
        output += c;
        for (let i = 0; i < len; i++) {
            output += Z.chars[random(3, 1)][random(16, 1)];
        }
    }
    document.getElementById("corruptOutput").innerHTML = output;
}