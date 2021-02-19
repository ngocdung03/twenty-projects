- For background image: 
    - heropatterns.com  
    - Choose circuit board
    - Foreground color: black; background color: white; opacity 0.08
- For font
    - fonts.google.com
    - Montserrat
    - + then Embed/Import
    - Copy contents between <style>
- Quick way to create division and id:
    - div.quote-container#quoto-container
    - Click the drop-down suggestion
    - .quote-text -> create a division for class~
- Media Query (may overwrite the previous code in specific cases: Tablet or Smaller
```
@media screen and (max-width: 1000px) {
    .quote-container {
        margin: auto 10px;
    }
    .quote-text {
        font-size: 2.5rem;
    }
}
```
- Getting quotes: forismatic.com/en/api
- Avoid fetching error when using free API: 
    - call proxy API first
     // may create your own proxy later
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
- Web intent URL:
    - go: developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
    