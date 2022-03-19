//€₽₴$
function multi() {
  let amount = +window.amount.value;
  let uah = 1;
  let usd = +window.usdval.innerText;
  let eur = +window.eurval.innerText;
  let rub = +window.rubval.innerText;
  let currency = document.getElementById('currency').value;

  switch (currency) {
    case 'UAH':
      window.uahresult.innerText = amount / uah + ' ₴';
      window.usdresult.innerText = (amount / usd).toFixed(3) + ' $';
      window.eurresult.innerText = (amount / eur).toFixed(3) + ' €';
      window.rubresult.innerText = (amount / rub).toFixed(3) + ' ₽';
      break;
    case 'USD':
      window.usdresult.innerText = amount / uah + ' $';
      window.eurresult.innerText = ((amount * usd) / eur).toFixed(3) + ' €';
      window.rubresult.innerText = ((amount * usd) / rub).toFixed(3) + ' ₽';
      window.uahresult.innerText = (amount * usd).toFixed(3) + ' ₴';
      break;
    case 'EUR':
      window.eurresult.innerText = amount / uah + ' €';
      window.usdresult.innerText = ((amount * eur) / usd).toFixed(3) + ' $';
      window.rubresult.innerText = ((amount * eur) / rub).toFixed(3) + ' ₽';
      window.uahresult.innerText = (amount * eur).toFixed(3) + ' ₴';
      break;
    case 'RUB':
      window.rubresult.innerText = amount / uah + ' ₽';
      window.usdresult.innerText = ((amount * rub) / usd).toFixed(3) + ' $';
      window.eurresult.innerText = ((amount * rub) / eur).toFixed(3) + ' €';
      window.uahresult.innerText = ((amount * rub) / uah).toFixed(3) + ' ₴';
      break;
  }
}

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  .then((res) => res.json())
  .then((data) => {
    window.usdval.innerText = data[26].rate.toFixed(3);
    window.eurval.innerText = data[32].rate.toFixed(3);
    window.rubval.innerText = data[18].rate.toFixed(3);
  });
