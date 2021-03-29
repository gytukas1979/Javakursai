var container = document.getElementById('container');
var spausk = document.getElementById('spausk');
var prisegtasDivas = document.getElementById('prisegtasDivas');
var pirmasSkaicius = document.getElementById('pirmasSkaicius');
var antrasSkaicius = document.getElementById('antrasSkaicius');

//Funkcijos
//1.Funkcija, rasti skaiciams
function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Sukuriami mygtukai skaiciams
function createButtons() {
    var suma = getRndInteger(1,16);
    pirmasNumeris = getRndInteger(0,suma);
    pirmasSkaicius.innerText  = pirmasNumeris;
    antrasNumeris = suma - pirmasNumeris;
    antrasSkaicius.innerText = antrasNumeris;
    container.innerHTML = "";
    var spausk = document.createElement('button');
    spausk.setAttribute('id','spausk');
    spausk.setAttribute('class','spausk');
    spausk.innerText = 'Spausk';
    container.appendChild(spausk);

    var masyvas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    for (var i=0;i<16;i++){
        var mygtukas =document.createElement('button');
        mygtukas.setAttribute('id','mygtukai');
        mygtukas.setAttribute('class','buttons');
        var indeksas = getRndInteger(0, masyvas.length-1);
        var skaicius = masyvas[indeksas];
        mygtukas.innerText=skaicius;
        container.appendChild(mygtukas);
        masyvas.splice(indeksas, 1);
    }
}
createButtons();
// Eventas mygtukui spausti
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('spausk')) {
    createButtons();
    }
});
var teisingiAtsakymai = 0;
var neteisingiAtsakymai = 0;

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('buttons')) {
        var reiksme = e.target.innerText;
        var firstNumberValue = parseInt(pirmasSkaicius.innerText);
        var secondNumberValue = parseInt(antrasSkaicius.innerText);
        var sumOfNumbers = firstNumberValue + secondNumberValue;
        console.log(sumOfNumbers);
        if (reiksme == sumOfNumbers) {
            e.target.style.backgroundColor = "blue";
            e.target.innerText = "Taip";
            teisingiAtsakymai += 1;
            console.log(teisingiAtsakymai);
            setTimeout(() => {
                createButtons();
            }, 1500);

        } else {
            e.target.style.backgroundColor = "red";
            e.target.innerText = "Ne";
            neteisingiAtsakymai +=1;
            console.log(neteisingiAtsakymai);
            setTimeout(() => {
                createButtons();
            }, 1500);
        }
        
    }
});




