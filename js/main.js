const keptuve = document.querySelector('.keptuve');
const lekste = document.querySelector('div:nth-of-type(2)');

if (!keptuve) {
    console.error('neradau keptuves')
}
if (!lekste) {
    console.error('neradau lekstes')
}

let blynuKiekis = 0;

keptuve.addEventListener('click', () => {

    lekste.innerText = `${++blynuKiekis} blynai`

})


