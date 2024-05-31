/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Caroline Bowen
   Date: May 12, 2023
*/



$(document).ready(function(){
  // Add button to challenge section
  $("#challenge").append("<button id='button-challenge'>listener</button>");
  $("#Problems").append("<button id='button-problems'>listener</button>");
  $("#Results").append("<button id='button-results'>listener</button>");

  // Add a click listener to the challenge button
  $("#button-challenge").click(function(){
      // Now add (or subtract) the "special" class to the section
      $("#challenge").toggleClass("special");
  });

  $("#button-problems").click(function(){
      // Now add (or subtract) the "special" class to the section
      $("#Problems").toggleClass("special");
  });

  $("#button-results").click(function(){
      // Now add (or subtract) the "special" class to the section
      $("#Results").toggleClass("special");
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
});

