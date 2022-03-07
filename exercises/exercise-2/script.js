/*

Exercise 2
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

// function changeBackgroundColor() {
//   let backgroundBody = document.querySelector("body");
// }

// setTimeout(() => {
//   changeBackgroundColor(), 2000;
// });

let contentColor = document.body;

setInterval(() => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  contentColor.style.backgroundColor = bgColor;
}, 1000);
