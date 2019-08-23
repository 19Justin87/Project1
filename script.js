// An array
var quotes = [
 
  // objects in arrey
    {
      quote: "Isn't it funny how day by day nothing changes but when you look back everything is different.",
      source: "C.S. Lewis",
      citation: "Prince Caspian",
      year: 1951,
    },
    {
      quote: "All that we are is the result of what we have thought.",
      source: "Budda",
      citation: "Religion",
      year: "Unknown",
    },
    {
      quote: "I have no special talent. I am only passionately curious.",
      source: "Albert Einstein",
      citation: "Talent",
      year: "Unknown",
    },
    {
      quote: "Wisely, and slow. They stumble that run fast.",
      source: "William Shakespeare",
      citation: "Wisdom",
      year: "Unknown",
    },
    {
      quote: "Stay hungry, stay foolish.",
      source: "Steve Jobs",
      citation: "Ambition",
      year: "Unknown",
    },
    {
      quote: "The future belongs to those who prepare for it today.",
      source: "Malcolm X",
      citation: "Future",
      year: "Unknown",
    },
    {
      quote: "The successful warrior is the average man, with laser-like focus.",
      source: "Bruce Lee",
      citation: "Success",
      year: "Unknown",
    },
    {
      quote: "Try not to become a man of success but rather to become a man of value.",
      source: "Albert Einstein",
      citation: "Life",
      year: "Unknown",
    },
    {
      quote: "All get what they want; they do not always like it",
      source: "C.S. Lewis",
      citation: "The Magician's Nephew",
      year: 1955,
    },
    {
      quote: "Nothing that you have not given away will ever be really yours",
      source: "C.S. Lewis",
      citation: "Mere Christianity",
      year: 1952,
    },
  
  ];
  
  // Function getRandomQuote array to return random quote value
  function getRandomQuote(array) {
    
    var quoteSearch = Math.floor(Math.random() * (quotes.length));
    for (var i = 0; i < array.length; i++) {
        var randomQuote = array[quoteSearch];
    }
    return randomQuote;
  }
  
  // Create the printQuote funtion to layout quotes
  function printQuote() {
         
    var anwser = getRandomQuote(quotes);
    var message = "";
      message = "<p class='quote'>" + anwser.quote + "</p>";
      message +="<p class='source'>" + anwser.source;
      message += "<span class='citation'>" + anwser.citation + "</span>";
      message +="<span class='year'>" + anwser.year + "</span>"
      message += "</p>";
  
    document.getElementById('quote-box').innerHTML = message;
  }
 
  // Print above code
  printQuote(); 
  
  
  // Click to show another quote
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);  