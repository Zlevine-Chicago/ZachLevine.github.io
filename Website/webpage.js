var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'IMG_7422.png') {
      myImage.setAttribute ('src','david.png');
    } else {
      myImage.setAttribute ('src','IMG_7422.png');
    }
}
