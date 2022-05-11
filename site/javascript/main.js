//€₽₴$
 var op;
function multi() {
let nu = (numb1.value);
let uah = 1 ;
let currency1 =document.getElementById('select') ;
if (currency1.value === "UAH") {
res = nu / usd;
usdresult.innerHTML = (res.toFixed(3) + ' $');
res = nu / eur;
eurresult.innerHTML = (res.toFixed(3) + ' €');
res = nu / rub;
rubresult.innerHTML = (res.toFixed(3) + ' ₽');
res = nu / uah ;
uahresult.innerHTML = (res + ' ₴');

    } 

    else if (currency1.value === "USD") {
res = nu / uah;
usdresult.innerHTML = (res + ' $');
res = nu * usd / eur;
eurresult.innerHTML = (res.toFixed(3) + ' €');
res = nu * usd / rub;
rubresult.innerHTML = (res.toFixed(3) + ' ₽');
res = nu * usd ;
uahresult.innerHTML = (res.toFixed(3) + ' ₴');

    } else if (currency1.value === "EUR") {
res = nu * eur / usd;
usdresult.innerHTML = (res.toFixed(3) + ' $');
res = nu / uah;
eurresult.innerHTML = (res + ' €');
res = nu * eur / rub;
rubresult.innerHTML = (res.toFixed(3) + ' ₽');
res = nu * eur ;
uahresult.innerHTML = (res.toFixed(3) + ' ₴');
    }
        else {
      res = nu * rub / usd;
usdresult.innerHTML = (res.toFixed(3) + ' $');
res = nu * rub / eur;
eurresult.innerHTML = (res.toFixed(3) + ' €');
res = nu / uah;
rubresult.innerHTML = (res + ' ₽');
res = nu * rub / uah ;
uahresult.innerHTML = (res.toFixed(3) + ' ₴');

        }
        currency1.onchange = function () {
          multi();
        };
    }
 
let usd
let eur
let rub
fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
.then ((res)=> res.json())
.then((data)=> {usd = data.find(usd => usd.cc === "USD").rate.toFixed(3) , eur = data.find(rub => rub.cc === "RUB").rate.toFixed(3), rub = data.find(eur => eur.cc === "EUR").rate.toFixed(3)})
.then(() =>  eurval.innerHTML = (eur))
.then(() =>  usdval.innerHTML = (usd))
.then(() =>  rubval.innerHTML = (rub))



