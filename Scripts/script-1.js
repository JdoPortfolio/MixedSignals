console.log("Hello there, my name is Marcus and I'm your personal life coach. I'll be assisting you in the process of becoming a better human!");

console.log("Let's Start the day with some inspirational quote:\n");

let inspirationQuotes =  ["“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney",
"“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
"“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers",
"“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown",
"“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi",
"“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs"];

let quote = inspirationQuotes[Math.floor(Math.random()*6)];
console.log(quote);