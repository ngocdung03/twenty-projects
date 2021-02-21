const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote From API forismatic.com/en/api
async function getQuote() {
    // may create your own proxy later
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    // adding '?method=getQuote'
    const apiUrl= 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // ?quoteAuthor, quoteText
        // If Author is blank, add 'Unknow'
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown';
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        //Reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
        //console.log(data);
    } catch (error) {
        // some quote using special characters -> error -> get new quote
        getQuote();
        //console.log('whoops, no quote', error)
    }
}

// Tweet Quote
//developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');

}
// Event Listenters;
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load (these are at the bottom bcs you want the above ones always declare before you call it )
getQuote();