let level = 1;

function levelUp() {
    if(level < 6){
        level++;

        document.getElementById("badge").innerHTML = "Level " + level;
        document.getElementById("levelText").innerHTML = level;
    }
}
