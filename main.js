const quote = document.getElementById('quote');
const id = document.getElementById('advice__id');

async function pegaApi() {
    
    const api = await fetch('https://api.adviceslip.com/advice');
    const apiConvertida = await api.json();
    
    adicionaCitacao(apiConvertida)
    console.log(apiConvertida);
}

pegaApi() 

function adicionaCitacao(apiConvertida) {
    
    id.innerHTML = apiConvertida.slip.id
    quote.innerHTML =  `"${apiConvertida.slip.advice}"`

}