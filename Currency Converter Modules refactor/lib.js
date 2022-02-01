const endpoint = 'http://api.exchangeratesapi.io/v1/latest?access_key=30ae4d61466474694c96da3657c85273&format=1';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
    const res = await fetch(endpoint);
    const rates = await (await res).json();
    return rates;
  }
  
  export async function convert(amount, from, to) {
    if(!ratesByBase[from]) {
      console.log(`we dont have ${from} to convert to ${to}`);
    }
    const rates = await fetchRates(from);
    console.log(rates);
    ratesByBase[from] = rates;
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
    return convertedAmount;
  }
  
  