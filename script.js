let incContainer = document.getElementById("incContainer");
let astsContainer = document.getElementById("astsContainer");
let expseContainer = document.getElementById("expseContainer");
let liabsContainer = document.getElementById("liabsContainer");

//
//Income mouse flip
//


//add event listener for mouse enter
incContainer.addEventListener("mouseenter", function( event ) {
    //set element as title container
  var element = document.getElementById("incContainer");
  // add flip out animation
  element.classList.remove("animate__flipInX");
  element.classList.add("animate__animated");
  element.classList.add("animate__flipOutX");
  //on mouseout remove flip out, add flip in
    incContainer.addEventListener("mouseout", function( event ) {
    element.classList.remove("animate__flipOutX");
    element.classList.add("animate__flipInX");});
    });

    
//
//Assets mouse flip
//


//add event listener for mouse enter
astsContainer.addEventListener("mouseenter", function( event ) {
    //set element as title container
  var element = document.getElementById("astsContainer");
  // add flip out animation
  element.classList.remove("animate__flipInX");
  element.classList.add("animate__animated");
  element.classList.add("animate__flipOutX");
  //on mouseout remove flip out, add flip in
  astsContainer.addEventListener("mouseout", function( event ) {
    element.classList.remove("animate__flipOutX");
    element.classList.add("animate__flipInX");});
    });


//
//expense mouse flip
//


//add event listener for mouse enter
expseContainer.addEventListener("mouseenter", function( event ) {
    //set element as title container
  var element = document.getElementById("expseContainer");
  // add flip out animation
  element.classList.remove("animate__flipInX");
  element.classList.add("animate__animated");
  element.classList.add("animate__flipOutX");
  //on mouseout remove flip out, add flip in
  expseContainer.addEventListener("mouseout", function( event ) {
    element.classList.remove("animate__flipOutX");
    element.classList.add("animate__flipInX");});
    });

//
//liabilities mouse flip
//


//add event listener for mouse enter
liabsContainer.addEventListener("mouseenter", function( event ) {
    //set element as title container
  var element = document.getElementById("liabsContainer");
  // add flip out animation
  element.classList.remove("animate__flipInX");
  element.classList.add("animate__animated");
  element.classList.add("animate__flipOutX");
  //on mouseout remove flip out, add flip in
  liabsContainer.addEventListener("mouseout", function( event ) {
    element.classList.remove("animate__flipOutX");
    element.classList.add("animate__flipInX");});
    });
