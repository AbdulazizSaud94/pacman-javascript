var score = 0;


var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 2],
    [2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 1, 1, 3, 1, 1, 3, 1, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 3, 2, 3, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 3, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

var pacman = {
    x: 1,
    y: 1

}

displayWorld();
function displayWorld() {
    var outPut = ' ';
    for (var i = 0; i < world.length; i++) {
        outPut += "\n<div class='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                outPut += "<div class='brick'></div>";
            }
            else if (world[i][j] == 1) {
                outPut += "<div class='coin'></div>";
            }
            else if (world[i][j] == 3) {
                outPut += "<div class='cherry'></div>";
            }
            else if (world[i][j] == 0) {
                outPut += "<div class='empty'></div>";
            }
        }
        outPut += "\n</div>";
    }
    // console.log(outPut);
    document.getElementById('world').innerHTML = outPut;
    document.getElementById('score').innerHTML = "Score: " + score;
}

function dispalyPacman() {
    document.getElementById('pacman').style.top = pacman.y * 20 + "px";
    document.getElementById('pacman').style.left = pacman.x * 20 + "px";
}



document.onkeydown = function (e) {
    // Left
    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
        document.getElementById('pacman').style.transform = "rotate(-180deg)";


    }
    // Right
    else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
        document.getElementById('pacman').style.transform = "none";



    }
    // Up
    else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
        document.getElementById('pacman').style.transform = "rotate(-90deg)";


    }
    // Down
    else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
        document.getElementById('pacman').style.transform = "rotate(90deg)";

    }
    // eat coin
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score = score + 10;
    }
    //eat cherry
    if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score = score + 50;
    }
    displayWorld();
    dispalyPacman();

}
displayWorld();
dispalyPacman();