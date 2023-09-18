const quote = document.querySelector("#text");
const quoteBtn = document.querySelector("#generateBtn");
const author = document.querySelector("#author")

function getQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      console.log("quote", data);
      quote.innerHTML = data.quote;
      author.innerHTML= data.author
    });
}
quoteBtn.onclick = () => {
  getQuote();
};
