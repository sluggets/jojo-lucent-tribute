$(document).ready(function() {

  currentPhoto = 0;
  currentDog = null;
  // build url array for img paths of jojo thumbnails 
  var jojoUrls = new Array();
  var jojoPrefix = 'img/jojo_thumbnails/j';
  for (var i = 1; i < 21; i++)
  {
    jojoUrls.push(jojoPrefix + i + '.jpg');
  }

  // build url array for img paths of lucent thumbnails 
  var lucentUrls = new Array();
  var lucentPrefix = 'img/lucent_thumbnails/l';
  for (var i = 1; i < 21; i++)
  {
    lucentUrls.push(lucentPrefix + i + '.jpg');
  }
  
  // builds thumbnail galleries for display
  displayDogThumbnails(lucentUrls, 'lgallery', 'Lucent the chihuahua');

  displayDogThumbnails(jojoUrls, 'jgallery', 'Jojo the pitbull mix');

  // toggles which gallery takes over page
  $('#luheader').click(function() {
    toggleGallery("lucent");
  });

  $('#joheader').click(function() {
    toggleGallery("jojo");
  });

  // opens photo for larger lightbox display
  $('.j').click(function() {
    var idStr = $(this).get(0).id;
    var urlPrefix = idStr.slice(1);
    displayDog(urlPrefix, "jojopic", "outside");
  });

  $('.l').click(function() {
    var idStr = $(this).get(0).id;
    var urlPrefix = idStr.slice(1);
    displayDog(urlPrefix, "lucentpic", "outside");
  });

  // handles arrow navigation in lightbox
  $('#right-arrow').click(function() {
    currentPhoto++; 
    console.log(currentPhoto + ' ' + currentDog);
    displayDog(currentPhoto, currentDog, "inside");
    /*console.log(currentPhoto + ' ' + currentDog);
    currentPhoto++;
    var currentImg = document.getElementById(currentDog);
    var currentSrc = currentImg.src;
    if (currentDog == 'lucentpic')
    {
      if 
    }*/
  });

  $('#left-arrow').click(function() {
    currentPhoto--;
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
    anchor.setAttribute('href', 'javascript:void(0)');
    var urlStr = urlArray[i];
    if (i < 9)
    {
      var photoId = urlStr.substring(urlStr.length - 6, urlStr.length - 4);
    } 
    else
    {
      var photoId = urlStr.substring(urlStr.length - 7, urlStr.length - 4);
    }
    anchor.setAttribute('class', 'thumbnail ' + photoId[0]);
    anchor.setAttribute('id', photoId);
    
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

// whether to use large or small lucent photo
function checkSize()
{
  var val = $("#luc_header").css("color");
  if ($("#luc_header").css("color") == "rgb(242, 242, 242)")
  {
    return 'large';
  }
  else if ($("#luc_header").css("color") == 'white')
  {
    return 'small';
  }
  else
  {
    return null;
  }
}

// displays respective dog's photo in lightbox when thumbnail clicked
function displayDog(urlPrefix, dogId, lbLocation)
{
    currentPhoto = urlPrefix;
    currentDog = dogId;
 
    if (currentPhoto == 1)
    {
      $('#left-arrow').css('visibility', 'hidden');
    }
    else if (currentPhoto == 20)
    {
      $('#right-arrow').css('visibility', 'hidden');
    }
    else
    {
      $('#right-arrow').css('visibility', 'visible');
      $('#left-arrow').css('visibility', 'visible');
    }

    var image = document.createElement('img');
    image.className = "img responsive";
    image.id = dogId;
    if (dogId == "lucentpic")
    {
      var sizeResult = checkSize();
      var pathPre = 'img/lucent_gallery/';
      if (sizeResult == 'large')
      {
        var pathPost = 'x1500.jpg';
      }
      else
      {
        var pathPost = 'x600.jpg';
      }
    }
    else
    {
      pathPre = 'img/jojo_gallery/';
      pathPost = '.jpg'
    }
    var urlComplete = pathPre + urlPrefix + pathPost;
    image.setAttribute('src', urlComplete);
    var lightbox = document.getElementById("lbdog");
    if (lbLocation == 'inside')
    {
      var oldImage = document.getElementById(dogId);
      var parentDiv = oldImage.parentNode;
      parentDiv.replaceChild(image, oldImage);
    }
    else if (lbLocation == 'outside')
    {
      lightbox.appendChild(image);
      $(".lightbox").toggle();    
    }

    if (dogId == "lucentpic")
    {
      var newImage = new Image();
      newImage.src = urlComplete;
      newImage.onload = function() 
      {
        var picHeight = this.height;
        if (picHeight < 1100)
        {
          $('#lucentpic').css("width", "100%");    
        }
      }
    }
}

