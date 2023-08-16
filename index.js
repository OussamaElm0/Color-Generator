// Instead of this:
// const Swa = require('sweetalert2');

// Use this:
// import Swal from "./sweetalert2"; 

let numbers = ["0123456789"];
let letters = ["ABCDEF"];
let all = [numbers + letters];
let color = "";

$("#btn").click(() => {
  for (let i = 0; i < 6; i++) {
    let chars = all[0]; //Because all contains only one string of numbers and letters
    let randomChar = chars[Math.floor(Math.random() * chars.length)]; //Randomly select a character from the string
    color += randomChar; // Add the character to the color string
  }
  $("#color").text(`#${color}`); //Set the hex code of the color on the page
  $("body").css("background-color", `#${color}`); //Change the background of the body to the color generated
  color = ""; //Initialise the color string to empty
});

$("#color").click(() => {
  let copyText = $("#color").text();
  navigator.clipboard.writeText(copyText); //Copy the color code on the clipboard
  Swal.fire({
    title: "Success!",
    text: "The color was copied",
    icon: "success",
    confirmButtonText: "Cool",
  });

});
