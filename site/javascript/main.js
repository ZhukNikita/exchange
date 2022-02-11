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

// switch (op) {
// 	case 'dollar':
// 	res = nu / usd;
// 	currency.innerHTML = String("доллары");
// 	//usdresult.innerHTML = (res.toFixed(3));
// 	break;
// 	case 'euro':
// 	res = nu / eur;
// 	currency.innerHTML = String("евро");
// 	//eurresult.innerHTML = (res.toFixed(3));
// 	break;
// 	case 'rub':
// 	res = nu / rub;
// 	currency.innerHTML = String("рубли");
// 	//rubresult.innerHTML = (res.toFixed(3));
// 	break;
// }
 
let usd
let eur
let rub
fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
.then ((res)=> res.json())
.then((data)=> {usd = data[26].rate , eur = data[32].rate , rub = data[18].rate})
.then(() =>  eurval.innerHTML = (eur.toFixed(3)))
.then(() =>  usdval.innerHTML = (usd.toFixed(3)))
.then(() =>  rubval.innerHTML = (rub.toFixed(3)))



