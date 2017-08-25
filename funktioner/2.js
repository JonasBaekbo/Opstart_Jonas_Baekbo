var tekst = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis efficitur arcu, vel efficitur lorem.";
function afkort(tekst, antal) {
    tekst = tekst;
    var afkort = tekst.slice(0, antal);
    console.log(afkort);
}
afkort(tekst, 56);