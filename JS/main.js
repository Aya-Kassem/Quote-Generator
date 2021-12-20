
var myQuotes = [
    
    {quote: "“Be yourself everyone else is already taken.”", author: "― Oscar Wilde"},
    {quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", author: "― Mahatma Gandhi"},
    {quote: "“In three words I can sum up everything I've learned about life: it goes on.”", author: "― Robert Frost"},
    {quote:  "“If you don't stand for something you will fall for anything.”", author: "― Gordon A. Eadie"},
    {quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "― Albert Einstein"},
    {quote: "“Always forgive your enemies; nothing annoys them so much.”", author: "― Oscar Wilde"},
    {quote: "“Be the change that you wish to see in the world.”", author: "― Mahatma Gandhi"},
    {quote: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West"},
    {quote: "“Insanity is doing the same thing, over and over again, but expecting different results.”", author: "― Narcotics Anonymous"},
    {quote: "“To live is the rarest thing in the world. Most people exist, that is all.”", author: "― Oscar Wilde"}
    
];
var quoteParagraph = document.getElementById("quote");
var authorPlace = document.getElementById("author");

function myFunction(){
    var randomNumber = Math.round(Math.random() * myQuotes.length);

    if( randomNumber == myQuotes.length ){
        randomNumber = randomNumber - 1;
        quoteParagraph.innerHTML = (myQuotes[randomNumber].quote);
        authorPlace.innerHTML = (myQuotes[randomNumber].author);
    }
    else{
        quoteParagraph.innerHTML = (myQuotes[randomNumber].quote);
        authorPlace.innerHTML = (myQuotes[randomNumber].author);
    }
}
