let allQuotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    'It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.',
    'My name is Sherlock Holmes. It is my business to know what other people do not know.',
    'A good detective knows that every task, every interaction, no matter how seemingly banal, has the potential to contain multitudes.',
];

let currentWordQuote = [];

let wordIndex = 0;

let startTime = Date.now();

const quoteElement = document.getElementById('quote');

const textElement = document.getElementById('typed-value');

const displayMessage = document.getElementById('message');

document.getElementById('start').addEventListener('click', ()=>{
   const quoteIndex = Math.floor(Math.random() * allQuotes.length);
   const quote = allQuotes[quoteIndex];
   console.log(quote); 
   words = quote.split(' ');  // [A, good, detective, ....]
   console.log(words);
   wordIndex = 0;

   const spanWords = words.map((word)=>{
        // return `<span>${word}</span>`;
        console.log(`<span>${word}</span>`) //array of words
   })
  
   quoteElement.innerHTML = spanWords.join('');   
   quoteElement.childNodes[0].className = 'highlight';
   displayMessage.innerText = '';

   textElement.value = '';
   textElement.focus();

   startTime = new Date().getTime();
});


textElement.addEventListener('input', () =>{
    const currentWord = words[wordIndex];
    const currentTypedValue = textElement.value;

    if(currentTypedValue === currentWord && wordIndex === words.length -1){
        const elapsedTime = new Date().getTime - startTime;
        const message = `CONGRATULATIONS! You Finished in ${elapsedTime / 1000} seconds.`
        displayMessage.innerHTML = message;
    }
})

