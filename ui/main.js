console.log('Loaded!');
//Change the text of the main text div
var element=document.getElementById('mainString'

);
element.innerText = 'New value to be displayed';
// Move the image
var imgFile = document.getElementById('mainImg');
imgFile.onclick = function(){
    imgFile.style.marginleft = '100px';
    
};