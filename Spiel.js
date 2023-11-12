
var Spielstand = {
    punkte: 0,

    einhorn: { oben: 200, links: 300, breite: 126, höhe: 126, geschwindigkeit: 0 },

    wolke1: { oben: 400, links: 600, breite: 74, höhe: 52 },
    wolke2: { oben: 100, links: 150, breite: 74, höhe: 52 },
    wolke3: { oben: 170, links: 250, breite: 74, höhe: 52 },
    wolke4: { oben: 220, links: 450, breite: 74, höhe: 52 },
    wolke5: { oben: 300, links: 400, breite: 74, höhe: 52 }
};

function sindÜbereinander(id1, id2) {
    var einhorn = Spielstand[id1], wolke = Spielstand[id2];

    if ( wolke.links < einhorn.links ) { return false; }
    if ( wolke.links + wolke.breite > einhorn.links + einhorn.breite ) { return false; }
    
    if ( wolke.oben < einhorn.oben ) { return false; }
    if ( wolke.oben + wolke.höhe > einhorn.oben + einhorn.höhe ) { return false; }

    return true;
}

function stelleSpielstandDar() {
    einhornDarstellen();
    wolkenDarstellen();

    document.getElementById("punkte").innerText = Spielstand.punkte;
}

function gameover() {
    document.getElementById("gameover").style.visibility = "visible";
}

function spieleTon(welcherTon) {
    var tonDatei;

    if (welcherTon = "kling") {
        tonDatei = "321287__goldendiaphragm__glass-cling-05.wav";
    }

    new Audio(tonDatei).play();
}
