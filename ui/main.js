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

button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
      if(request.readystate === XMLHttpRequest.DONE)  {
          //Take some action
          if (request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
        //Not done yet
        
    };
    
    //Make the request
    request.open('GET','http://alagurajastp.imad.hasura-app.io/counter',true);
    request.send(null);
};