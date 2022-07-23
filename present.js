
var to = 'Friend!';
var gift_url = 'https://www.facebook.com/profile.php?id=100039629200563';
var gift_image_url = './img/tm2.jpg';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var balloon=document.querySelector(".balloon");
var presentImage = document.getElementById("present-image");
var arrow=document.querySelector('.arrow');
var congratulation=document.querySelector('#congratulation');
var audio=document.querySelector('audio');


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    arrow.classList.toggle("open");
    setTimeout(function() {
      audio.play();
      balloon.classList.add("open");
    },5000);
    setTimeout(function() {
      // balloon.classList.remove("open");
      balloon.style.opacity='0';
    },21000);
    congratulation.classList.toggle("open");
  }, false);
  
  
  
  nametag.innerText = to;
}

init();


