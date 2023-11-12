
function sammleWolkeFallsÜbereinander(id) {
    if ( sindÜbereinander("einhorn", id) ) {
        spieleTon("kling");
        platziereRechts(id);
        Spielstand.punkte += 1;

        if (Spielstand.einhorn.links < 200 && Spielstand.einhorn.geschwindigkeit < 0) {
            Spielstand.einhorn.geschwindigkeit = Math.min(Spielstand.einhorn.geschwindigkeit + 0.7, 0.5);
        } else if (Spielstand.einhorn.links > window.innerWidth - 200 && Spielstand.einhorn.geschwindigkeit > 0) {
        } else {
            Spielstand.einhorn.geschwindigkeit = Math.min(Spielstand.einhorn.geschwindigkeit + 0.3, 0.5);
        }
    }
}

function rotiereBild(id, nachOben, nachUnten) {
    if (!nachOben) { document.getElementById(id).classList.remove("rauf"); }
    if (!nachUnten) { document.getElementById(id).classList.remove("runter"); }
    if (nachOben) { document.getElementById(id).classList.add("rauf"); }
    if (nachUnten) { document.getElementById(id).classList.add("runter"); }
}

function einhornDarstellen() {
    document.getElementById("einhorn").style.top = Spielstand.einhorn.oben + "px";
    document.getElementById("einhorn").style.left = Spielstand.einhorn.links + "px";
    rotiereBild("einhorn", Steuerung.nachOben, Steuerung.nachUnten);
}