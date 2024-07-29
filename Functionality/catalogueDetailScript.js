var ProductImg=document.getElementById("product-image");
var SmallImg=document.getElementsByClassName("small-product-image");

SmallImg[0].onclick=function(){
    ProductImg.src=SmallImg[0].src;
}
SmallImg[1].onclick=function(){
    ProductImg.src=SmallImg[1].src;
}
SmallImg[2].onclick=function(){
    ProductImg.src=SmallImg[2].src;
}
SmallImg[3].onclick=function(){
    ProductImg.src=SmallImg[3].src;
}

var clicked = false;

function myWishlistFunction() {
  clicked = !clicked;
  const el = document.getElementById("wishlist-btn");
  if (clicked) {
    el.style.color = "white"
  } else {
    el.style.color = "#e92275"
  }

}
