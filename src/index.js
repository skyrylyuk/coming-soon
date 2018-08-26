import "./assets/css/styles.css";
import "./assets/scss/main.scss";
const Popper = require("popper.js");

// var element = document.createElement('div'); element.innerHTML = "Welcome to
// the Bendywork's webpack demo!!!"; document     .body .appendChild(element);

$(document).ready(function () {

    console.log("ready!");

    var ref = $('#button-a');        
    var popup = $('#popup');
    popup.hide();

    ref.click(function(){
        popup.show(); 
    });
});