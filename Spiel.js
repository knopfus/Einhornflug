
var Spielstand = {
    punkte: 0,

    einhorn: { oben: 200, links: 300, breite: 126, höhe: 126, geschwindigkeit: 0 },

    wolke1: { oben: 400, links: 600, breite: 74, höhe: 52 },
    wolke2: { oben: 100, links: 150, breite: 74, höhe: 52 },
    wolke3: { oben: 170, links: 250, breite: 74, höhe: 52 },
    wolke4: { oben: 220, links: 450, breite: 74, höhe: 52 },
    wolke5: { oben: 300, links: 400, breite: 74, höhe: 52 }
};

class Spiel {
    aufbauen() {
        this.wolken = [];
        for (let i = 1; i <= 5; i++) {
            let id = "wolke" + i;
            let wolke = new Wolke(Spielstand[id].links, Spielstand[id].oben, Spielstand[id].breite, Spielstand[id].höhe, i, id);
            this.wolken.push(wolke);
        }
    }

    aktualisiereWolken() {
        for (let wolke of this.wolken) {
            wolke.aktualisieren();
        }
    }
    
    darstellen() {
        for (let wolke of this.wolken) {
            wolke.darstellen();
        }

        einhornDarstellen();

        document.getElementById("punkte").innerText = Spielstand.punkte;
    }
}

function sindÜbereinander(einhorn, wolke) {
    if ( wolke.links < einhorn.links ) { return false; }
    if ( wolke.links + wolke.breite > einhorn.links + einhorn.breite ) { return false; }
    
    if ( wolke.oben < einhorn.oben ) { return false; }
    if ( wolke.oben + wolke.höhe > einhorn.oben + einhorn.höhe ) { return false; }

    return true;
}

function sammleWolkeFallsÜbereinander(wolke) {
    if ( sindÜbereinander(Spielstand["einhorn"], wolke) ) {
        spieleTon("kling");
        wolke.platziereRechts();
        Spielstand.punkte += 1;

        if (Spielstand.einhorn.links < 200 && Spielstand.einhorn.geschwindigkeit < 0) {
            Spielstand.einhorn.geschwindigkeit = Math.min(Spielstand.einhorn.geschwindigkeit + 0.7, 0.5);
        } else if (Spielstand.einhorn.links > window.innerWidth - 200 && Spielstand.einhorn.geschwindigkeit > 0) {
        } else {
            Spielstand.einhorn.geschwindigkeit = Math.min(Spielstand.einhorn.geschwindigkeit + 0.3, 0.5);
        }
    }
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

window.spiel = new Spiel();
window.spiel.aufbauen();
