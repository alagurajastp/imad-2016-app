/* 
console.log('Loaded!');
//Change the text of the main text div
var element=document.getElementById('mainString'

);
element.innerText = 'New value to be displayed';
// Move the image
var imgFile = document.getElementById('mainImg');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    imgFile.style.marginLeft = marginLeft + 'px';
}
imgFile.onclick = function(){
    var interval = setInterval(moveRight,50);
    //imgFile.style.marginLeft = '100px';
    
};
*/
//Counter Code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    //Make a request to the counter end point
          
    //Capture the response and store it in a variable
    
    //Render the variable in a correct a span
    counter=counter + 1;
    var span = document.getElementById('count');
    span.innertHTML = counter.toString();
};