const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const display = document.getElementById('quote');
    display.innerText = quote.quote;
}


