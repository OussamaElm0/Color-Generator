$(document).ready(() => {
  // Instead of this:
  // const Swa = require('sweetalert2');

  // Use this:
  // import Swal from "./sweetalert2";

  let numbers = ["0123456789"];
  let letters = ["ABCDEF"];
  let all = [numbers + letters];
  let color = "";
  let isOpen = false;

  $(".generate-btn").click(() => {
    for (let i = 0; i < 6; i++) {
      let chars = all[0]; //Because all contains only one string of numbers and letters
      let randomChar = chars[Math.floor(Math.random() * chars.length)]; //Randomly select a character from the string
      color += randomChar; // Add the character to the color string
    }
    $("#currentColor").text(`#${color}`); //Set the hex code of the color on the page
    $("body , .generate-btn, .add-to-list").css(
      "background-color",
      `#${color}`
    ); //Change the background of the body and the button to the color generated
    $(".generate-btn").css("color", "#fff");
    $(".add-to-list").css("display") === "none" &&
      $(".add-to-list").css("display", "inline");
    color = ""; //Initialise the color string to empty
  });

  $(".add-to-list").click(() => {
    let currentColor = $("#currentColor").text();
    let div = $('<div class="list-item"></div>');
    let hexaCode = $(`<p class="color-history">${currentColor}</p>`);
    div.append(hexaCode);
    div.css("background-color", currentColor);
    $(".list").append(div);
    $(".list").hide();
    Swal.fire({
      icon: "success",
      title: "The color was added to the list",
      showConfirmButton: false,
      timer: 1500,
    });
  });

  $(".menu").click(() => {
    isOpen = !isOpen 
    $(".list").toggle();
    $(".container").toggle();
    $("body").css("background-color") !== "white" && $("body").css("background-color",'white'); 
    if(isOpen) {
      $(".menu").html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'
      );
    } else {
      $('.menu').html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>'
      );
    }
  });

  $(".color").click(function () {
    let copyText = $(this).text();
    navigator.clipboard.writeText(copyText); // Copy the color code to the clipboard
    Swal.fire({
      title: "Success!",
      text: "The color was copied",
      icon: "success",
      confirmButtonText: "Ok",
    });
  });

})