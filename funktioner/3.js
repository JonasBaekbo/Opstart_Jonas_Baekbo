var foedselsdag = new Date("July 2, 1998");
var idag = new Date();

var profil = function (p) {
    return "Mit navn er " + p[0] + " " + p[1] + "\nJeg er født i år " + p[2]+ "\nJeg er " + p[3] + " år gammel";
}

var info = ["Jonas", "Bækbo", 1998, idag.getFullYear()-foedselsdag.getFullYear()];
console.log(profil(info));