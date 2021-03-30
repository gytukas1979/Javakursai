var sudetisAtimtis = document.getElementById('veiksmas');
var pirmasSkaicius = document.getElementById('pirmasSkaicius');
var antrasSkaicius = document.getElementById('antrasSkaicius');
var spausk = document.getElementById('spausk');
var atsakymoReiksme = document.getElementById('atsakymoReiksme');
var teisinguAtsakymuSkaicius = 0;
var neteisinguAtsakymuSkaicius = 0;
var teisingiAtsakymai = document.getElementById('teisingiAtsakymai');
var neteisingiAtsakymai  =document.getElementById('neteisingiAtsakymai');
var papildomas = document.getElementById('papildomas');

//Funkcijos
function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function gautiSkaicius() {
    var veiksmas = parseInt(getRndInteger(1,2)); // nusistatome bus sudetis ar atimtis
    if (veiksmas ==1) {
        sudetisAtimtis.innerText = "+";
    } else {
        sudetisAtimtis.innerText = "-";
    }

    if (veiksmas == 1) {                           //if sudeciai
        var pirmasNumeris = parseInt(getRndInteger(1,99));
        pirmasSkaicius.innerText  = pirmasNumeris;
        var antrasNumeris = parseInt(getRndInteger(1,(100-pirmasNumeris)));
        antrasSkaicius.innerText = antrasNumeris;  
    } else {                                       // else atimciai
        var pirmasNumeris = parseInt(getRndInteger(2,100));
        pirmasSkaicius.innerText  = pirmasNumeris;
        var antrasNumeris = parseInt(getRndInteger(1,(pirmasNumeris-1)));
        antrasSkaicius.innerText = antrasNumeris;
    }
}
gautiSkaicius();

spausk.addEventListener('click',()=> {
    if (atsakymoReiksme.value == "") {
        spausk.disabled = true;
        papildomas.style.color = "#793e3e";
        papildomas.innerText = 'Nebuvo įvestas joks atsakymas!!!'
        papildomas.classList.remove('hidden');
        setTimeout(() => {
            papildomas.classList.add('hidden');
            spausk.disabled =false;
        }, 2000);
    } else {
        // UZgesinu buttona kol vyksta funkcija
        spausk.disabled = true;
        // Gaunamas teisingas atsakymas
        if (sudetisAtimtis.innerText == "+"){
            var teisingasAtsakymas = parseInt(pirmasSkaicius.innerText) + parseInt(antrasSkaicius.innerText);
        } else {
            var teisingasAtsakymas = parseInt(pirmasSkaicius.innerText) - parseInt(antrasSkaicius.innerText);
        }
        // Ivestas atsakymas
        var atsakymas = parseInt(atsakymoReiksme.value);

        //Patikrinama ar atsakymas teisingas
        if (teisingasAtsakymas == atsakymas) {
            teisinguAtsakymuSkaicius += 1;
            papildomas.style.color = "green";
            papildomas.innerText = 'Puiku !!!'
            papildomas.classList.remove('hidden');
        } else {
            neteisinguAtsakymuSkaicius += 1;
            papildomas.style.color = "#793e3e";
            papildomas.innerText = `Ne! ${teisingasAtsakymas}`
            papildomas.classList.remove('hidden');
        }
        setTimeout(() => {
            gautiSkaicius();
            spausk.disabled =false;
            atsakymoReiksme.value = "";
            papildomas.classList.add('hidden');
            teisingiAtsakymai.innerText = `Teisingų atsakymų skaičius: ${teisinguAtsakymuSkaicius}`;
            neteisingiAtsakymai.innerText = `Neteisingų atsakymų skaičius: ${neteisinguAtsakymuSkaicius}`;
        }, 2000);
    }
})