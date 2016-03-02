$(document).ready(function() {

  // build url array for img paths of jojo thumbnails 
  var jojoUrls = new Array();
  var jojoPrefix = 'img/jojo_thumbnails/thumbjo';
  for (var i = 1; i < 20; i++)
  {
    jojoUrls.push(jojoPrefix + i + '.jpg');
  }

  // build url array for img paths of lucent thumbnails 
  var lucentUrls = new Array();
  var lucentPrefix = 'img/lucent_thumbnails/thumbluc';
  for (var i = 1; i < 20; i++)
  {
    lucentUrls.push(lucentPrefix + i + '.jpg');
  }
  
  displayDogThumbnails(lucentUrls, 'lgallery', 'Lucent the chihuahua');

  displayDogThumbnails(jojoUrls, 'jgallery', 'Jojo the pitbull mix');

  $('#luheader').click(function() {
    toggleGallery("lucent");
  });

  $('#joheader').click(function() {
    toggleGallery("jojo");
  });
});

// builds thumbnails into gallery to be toggled into
// and out of the display
function displayDogThumbnails(urlArray, galleryString, altString)
{
  var colsCount = 0;
  var gallery = document.getElementById(galleryString);
  var cols = document.createElement('div');
  cols.className = "col-xs-6 col-md-4 col-lg-3";
  for (var i = 0; i < urlArray.length; i++)
  {
    
    if (colsCount > 4)
    {
      gallery.appendChild(cols);
      cols = document.createElement('div');
      cols.className = "col-xs-6 col-md-4 col-lg-3";
      colsCount = 0;
    }
   
    colsCount++; 
    var anchor = document.createElement('a');
    anchor.setAttribute('href', '#');
    anchor.setAttribute('class', 'thumbnail');
    
    var img = document.createElement('img');
    img.setAttribute('src', urlArray[i]);
    img.setAttribute('alt', altString);

    anchor.appendChild(img);
    cols.appendChild(anchor);
  }
  gallery.appendChild(cols);

}

// toggles header styles and gallery visibility for
// the two different dogs
function toggleGallery(dogStr)
{
  if (dogStr == "lucent")
  {
    var pCaretId = "#lcaret";
    var pHeaderId = "#luheader";
    var pGalleryId = "#lgallery"; 
    var pStat = $('#lgallery').css("display");
    var sStat = $('#jgallery').css("display");
    var sCaretId = "#jcaret";
    var sHeaderId = "#joheader";
    var sGalleryId = "#jgallery"; 
    
  }
  
  if (dogStr == "jojo")
  {
    var pCaretId = "#jcaret";
    var pHeaderId = "#joheader";
    var pGalleryId = "#jgallery"; 
    var pStat = $('#jgallery').css("display");
    var sStat = $('#lgallery').css("display");
    var sCaretId = "#lcaret";
    var sHeaderId = "#luheader";
    var sGalleryId = "#lgallery"; 
  }

  if (pStat == "none" && sStat == "none")
  {
    $(pHeaderId).css({"background-color": "rgba(0, 0, 0, 0.2)", "text-shadow": "1px 1px 10px #756157"});
    $(pCaretId).toggleClass("fa-caret-right fa-caret-down");
    $(pGalleryId).toggle();  
  }
  else if (sStat !== "none" && pStat == "none")
  {
    $(sHeaderId).css({"background-color": "inherit", "text-shadow": "none"});
    $(sGalleryId).toggle();  
    $(pHeaderId).css({"background-color": "rgba(0, 0, 0, 0.2)", "text-shadow": "1px 1px 10px #756157"});
    $(pCaretId).toggleClass("fa-caret-right fa-caret-down");
    $(sCaretId).toggleClass("fa-caret-down fa-caret-right");
    $(pGalleryId).toggle();  
  }
  else
  {
    $(pHeaderId).css({"background-color": "inherit", "text-shadow": "none"});
    $(pCaretId).toggleClass("fa-caret-down fa-caret-right");
    $(pGalleryId).toggle();
  }
} 
