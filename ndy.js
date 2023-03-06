const quoteText = document.querySelector(".quote");
quoteBtn = document.querySelector(".btn");
authorName = document.querySelector(".author .name");
soundBtn =document.querySelector(".sound");
copyBtn =document.querySelector(".copy");
fbBtn =document.querySelector(".facebook");
twitterBtn =document.querySelector(".twitter");

// random quote function
function randomQuote(){
    quoteBtn.innerText = "Loading Quote..."
    // fetching random quotes/data from the API and parsing it into Javascript object
   fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    console.log(result);
    quoteText.innerText= result.content;
    authorName.innerText= result.author;
    quoteBtn.innerText = "New Quote"
   })
}

soundBtn.addEventListener("click", ()=>{
    // speechsynthesisutterance  i a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); 
    // speak method of speechsythesis speaks the utterance
});

copyBtn.addEventListener("click", ()=>{
    // copying the quote text on copyBtn Click
    // writeText() proerty writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);   
});

twitterBtn.addEventListener("click", ()=>{
    
    let tweetUrl = `https://twitter.com/internet/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
    // opening a new twitter tab with  passing quote in the url
});

fbBtn.addEventListener("click", ()=>{
    let fbUrl = `https://www.facebook.com/ndifreke.effiong.39948=${quoteText.innerText}`;
    window.open(fbUrl, "_blank");
 
});


quoteBtn.addEventListener("click", randomQuote);