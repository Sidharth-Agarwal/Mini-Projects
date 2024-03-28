// let element = document.getElementById("Color");
// element.addEventListener("click", function () {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   document.body.style.backgroundColor = color;
//   element.innerHTML = color;
// })

function generateRandomColor() {
    const element = document.getElementById("Color")
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    element.innerHTML = color;
}
// Just a basic setup
// keyboard spacebar change event is to be included