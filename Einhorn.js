function istEinhornLinksVerschwunden() {
    return Spielstand["einhorn"].links < -200;
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