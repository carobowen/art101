/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Caroline Bowen
   Date: May 12, 2023
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>listener</button>");

$("#Problems").append("<button id='button-challenge'>listener</button>");

$("#Results").append("<button id='button-challenge'>listener</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){
   // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

$("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
  });

