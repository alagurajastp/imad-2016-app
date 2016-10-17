console.log('Loaded!');
//Change the text of the main text div
var element=document.getElementById('mainString'

);
element.innerText = 'New value to be displayed';
// Move the image
var imgFile = document.getElementById('mainImg');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    imgFile.style.marginLeft = marginLeft + 'px';
}
imgFile.onclick = function(){
    var interval = setInterval(moveRight,100);
    //imgFile.style.marginLeft = '100px';
    
};