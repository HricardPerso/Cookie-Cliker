var nbrclick = 0;

function compt() {
    nbrclick++;
    document.getElementById("nbrclick").textContent = nbrclick;
}
document.getElementById("button").addEventListener("click", compt);