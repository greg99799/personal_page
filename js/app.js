//Problem: User when clicking on image goes to dead end
//Solution: Create an overlay with the large image - lightbox

var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>")
//add image to overlay
$overlay.append($image);

//add caption to overlay
$overlay.append($caption);

//2. Add overlay  
$("body").append($overlay)
//1. Capture click event on a link to an image
$("#imageGallery a").click( function(event) {
  event.preventDefault();
  var imageLocation = $( this ).attr("href");
  //1.2 update overlay with the image linked in link
  $image.attr("src", imageLocation);
  //1.1 Show the overlay
  $overlay.fadeIn();
  //1.3 Get child's alt attribute and set caption 
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});
//3. When overlay is clicked, it disappears  
$overlay.click(function() {
  $overlay.hide();
});