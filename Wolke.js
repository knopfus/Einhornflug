
function verschiebeNachLinks(id, anzahlPixel) {
    Spielstand[id].links -= anzahlPixel;
}

function istLinksVerschwunden(id) {
    return Spielstand[id].links < -200;
}

function platziereRechts(id) {
    var rechterRand = window.innerWidth,
        untererRand = window.innerHeight;

    Spielstand[id].links = rechterRand + 100;

    console.log(untererRand);
    var neueHöhe = Math.random() * untererRand;
    console.log(neueHöhe);
    Spielstand[id].oben = neueHöhe;
}

function aktualisiereWolken() {
    for (let i = 1; i <= 5; i++) {
        let id = "wolke" + i;

        verschiebeNachLinks(id, i);
        if ( istLinksVerschwunden(id) ) {
            platziereRechts(id);
        }

        sammleWolkeFallsÜbereinander(id);
    } 
}

function wolkenDarstellen() {
    for (let i = 1; i <= 5; i++) {
        let id = "wolke" + i;
        document.getElementById(id).style.top = Spielstand["wolke" + i].oben + "px";
        document.getElementById(id).style.left = Spielstand["wolke" + i].links + "px";
    }
}
