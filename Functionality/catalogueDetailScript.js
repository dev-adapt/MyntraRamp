var ProductImg=document.getElementById("product-image");
var SmallImg=document.getElementsByClassName("small-product-image");

SmallImg[0].onclick=function(){
    ProductImg.src=SmallImg[0].src;
}