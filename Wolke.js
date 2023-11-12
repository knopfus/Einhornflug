
class Wolke {
    constructor(links, oben, breite, höhe, geschwindigkeit, id) {
        this.links = links;
        this.oben = oben;
        this.breite = breite;
        this.höhe = höhe;
        this.geschwindigkeit = geschwindigkeit;
        this.id = id;
    }

    aktualisieren() {
        this.links -= this.geschwindigkeit;

        if (this.links < -200) {
            this.platziereRechts();
        }

        sammleWolkeFallsÜbereinander(this);
    }

    platziereRechts() {
        var rechterRand = window.innerWidth,
        untererRand = window.innerHeight;

        this.links = rechterRand + 100;
        this.oben = Math.random() * untererRand;
    }

    darstellen() {
        document.getElementById(this.id).style.top = this.oben + "px";
        document.getElementById(this.id).style.left = this.links + "px";
    }
}
