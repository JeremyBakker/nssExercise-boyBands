var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Declare the number of loops to perform
var loopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = bands[loopTracker];

// Keep track of which veggie we're on in the loop
var currentVeggie = vegetables[loopTracker];

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  currentBand = "<li>" + bands[loopTracker] + "</li>";
  bandElement.innerHTML += currentBand;


  // Add the veggie names into the correct <div>
  currentVeggie = "<li>" + vegetables[loopTracker] + "</li>";
  veggieElement.innerHTML += currentVeggie;
}