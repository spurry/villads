import data from '/rec/quotes.json' assert { type: 'json' };

var today = new Date();

var epoch = Math.floor(today / 8.64e7)

var current = epoch % Object.keys(data).length 

document.getElementById("quote").innerHTML = data[current]
