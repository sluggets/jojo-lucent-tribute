$(document).ready(function() {

  var jojoUrls = new Array();
  var jojoPrefix = 'img/jojo_thumbnails/thumbjo';
  for (var i = 1; i < 20; i++)
  {
    jojoUrls.push(jojoPrefix + i + '.jpg');
  }

  var lucentUrls = new Array();
  var lucentPrefix = 'img/lucent_thumbnails/thumbluc';
  for (var i = 1; i < 20; i++)
  {
    lucentUrls.push(lucentPrefix + i + '.jpg');
  }
  
  displayDogThumbnails(lucentUrls, 'lgallery', 'Lucent the chihuahua');

  displayDogThumbnails(jojoUrls, 'jgallery', 'Jojo the pitbull mix');
});

// builds and displays thumbnails for gallery
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
