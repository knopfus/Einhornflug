
class Dings {
    constructor(links, oben, breite, höhe, geschwindigkeit, id, name) {
        this.links = links;
        this.oben = oben;
        this.breite = breite;
        this.höhe = höhe;
        this.geschwindigkeit = geschwindigkeit;
        this.id = id;
        this.name = name;
    }

    aktualisieren() {
        this.links -= this.geschwindigkeit;

        if (this.links < -200) {
            this.platziereRechts();
        }

        sammleDingsFallsÜbereinander(this);
    }

    platziereRechts() {
        var rechterRand = window.innerWidth,
        untererRand = window.innerHeight;

        this.links = rechterRand + 100;
        this.oben = Math.random() * untererRand;
    }

    darstellen() {
        document.getElementById(this.id).src = this.name + ".png";
        document.getElementById(this.id).style.top = this.oben + "px";
        document.getElementById(this.id).style.left = this.links + "px";
        document.getElementById(this.id).style.width = this.breite + "px";
        document.getElementById(this.id).style.height = this.höhe + "px";
    }
}
