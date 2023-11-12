
var Steuerung = {
    nachOben: false,
    nachUnten: false,
    nachLinks: false,
    nachRechts: false
};

function pfeilNachObenWurdeGedrückt() {
    Steuerung.nachOben = true;
}

function pfeilNachUntenWurdeGedrückt() {
    Steuerung.nachUnten = true;
}

function pfeilNachLinksWurdeGedrückt() {
    //Steuerung.nachLinks = true;
}

function pfeilNachRechtsWurdeGedrückt() {
    //Steuerung.nachRechts = true;
}

function pfeilNachObenWurdeLosgelassen() {
    Steuerung.nachOben = false;
}

function pfeilNachUntenWurdeLosgelassen() {
    Steuerung.nachUnten = false;
}

function pfeilNachLinksWurdeLosgelassen() {
    Steuerung.nachLinks = false;
}

function pfeilNachRechtsWurdeLosgelassen() {
    Steuerung.nachRechts = false;
}

window.onkeydown = function(event) {
    switch (event.code) {
        case "ArrowUp": pfeilNachObenWurdeGedrückt(); break;
        case "ArrowDown": pfeilNachUntenWurdeGedrückt(); break;
        case "ArrowLeft": pfeilNachLinksWurdeGedrückt(); break;
        case "ArrowRight": pfeilNachRechtsWurdeGedrückt(); break;
    }
};

window.onkeyup = function(event) {
    switch (event.code) {
        case "ArrowUp": pfeilNachObenWurdeLosgelassen(); break;
        case "ArrowDown": pfeilNachUntenWurdeLosgelassen(); break;
        case "ArrowLeft": pfeilNachLinksWurdeLosgelassen(); break;
        case "ArrowRight": pfeilNachRechtsWurdeLosgelassen(); break;
    }
};

document.getElementById("neustart").onclick = function() { location.reload(); };

(function wiederhole() { window.setTimeout(function() {

    if ( Steuerung.nachOben ) {
         Spielstand.einhorn.oben -= 5;
    }

    if ( Steuerung.nachUnten ) {
         Spielstand.einhorn.oben += 5;
    }

    if ( Steuerung.nachLinks ) {
         Spielstand.einhorn.links -= 5;
    }

    if ( Steuerung.nachRechts ) {
         Spielstand.einhorn.links += 5;
    }

    Spielstand.einhorn.geschwindigkeit = Math.max(Spielstand.einhorn.geschwindigkeit - 0.0015, -0.5);
    Spielstand.einhorn.links += Spielstand.einhorn.geschwindigkeit;

    spiel.aktualisiereWolken();


    stelleSpielstandDar();


    if (istEinhornLinksVerschwunden()) {
        gameover();
    } else {
        wiederhole();
    }


}, 10); })();
