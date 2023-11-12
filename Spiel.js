
var Spielstand = {
    punkte: 0,

    einhorn: { oben: 200, links: 300, breite: 126, höhe: 126, geschwindigkeit: 0 },

    dings1: { oben: 400, links: 600, breite: 74, höhe: 52 },
    dings2: { oben: 100, links: 150, breite: 74, höhe: 52 },
    dings3: { oben: 170, links: 250, breite: 74, höhe: 52 },
    dings4: { oben: 220, links: 450, breite: 74, höhe: 52 },
    dings5: { oben: 300, links: 400, breite: 74, höhe: 52 }
};

class Spiel {
    aufbauen() {
        this.dinger = [];
        for (let i = 1; i <= 5; i++) {
            let id = "dings" + i;
            let dings = new Dings(Spielstand[id].links, Spielstand[id].oben, Spielstand[id].breite, Spielstand[id].höhe, i, id, "Dings");
            this.dinger.push(dings);
        }

        this.level = 0;

        this.neuesLevel();
    }

    neuesLevel() {
        this.level = this.level + 1;

        for (let dings of this.dinger) {
            dings.platziereRechts();

            if (this.level == 1) {
                dings.name = "Wolke";
            }
            if (this.level == 2) {
                dings.name = "Stern";
            }
        }

        Spielstand.einhorn.links = 300;
        Spielstand.einhorn.oben = 200;
    }

    aktualisiereDinger() {
        for (let dings of this.dinger) {
            dings.aktualisieren();
        }
    }
    
    darstellen() {
        for (let dings of this.dinger) {
            dings.darstellen();
        }

        einhornDarstellen();

        document.getElementById("punkte").innerText = Spielstand.punkte;
    }
}

function sindÜbereinander(einhorn, dings) {
    if ( dings.links < einhorn.links ) { return false; }
    if ( dings.links + dings.breite > einhorn.links + einhorn.breite ) { return false; }
    
    if ( dings.oben < einhorn.oben ) { return false; }
    if ( dings.oben + dings.höhe > einhorn.oben + einhorn.höhe ) { return false; }

    return true;
}

function sammleDingsFallsÜbereinander(dings) {
    if ( sindÜbereinander(Spielstand["einhorn"], dings) ) {
        spieleTon("kling");
        dings.platziereRechts();
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
