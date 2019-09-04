var play = true;
var position = 0;
var direction = 0;
for ( var x = 1; x < pics.length + 1; x++ ) {
  dots.innerHTML = dots.innerHTML + '<input id="dot'+x.toString()+'" type="radio" name="dot" value="'+x.toString()+'"><label for="dot'+x.toString()+'">&#9679;</label>';
}
dot1.checked = true;
picture.innerHTML = '<img src="'+pics[0]+'" />';
caption.innerHTML = captions[0];
function move() {
  var positionIndex = position + 1;
  position = position + direction;
  if (position == -1) {position = pics.length-1;}
  if (position == pics.length) {position = 0;}
  positionIndex = position + 1;
  picture.innerHTML = '<img src="'+pics[position]+'" />';
  caption.innerHTML = captions[position];
  document.getElementById("dot"+positionIndex.toString()).checked = true;
  resetTimer();
}
left.onclick = function() {
  direction = -1;
  move();
}
right.onclick = function() {
  direction = 1;
  move();
}
dots.onclick = function() {
  position = parseInt(document.querySelector('input[name = "dot"]:checked').value) - 1;
  positionIndex = position + 1;
  picture.innerHTML = '<img src="'+pics[position]+'" />';
  caption.innerHTML = captions[position];
  document.getElementById("dot"+positionIndex.toString()).checked = true;
  resetTimer();
}
pause.onclick = function() {
  if(play) {
    play = false;
    pause.innerHTML = "&#9654;";
  } else {
    play = true;
    pause.innerHTML = "&#10074;&#10074;";
  }
  resetTimer();
}
function autoScroll() {
  if(play) {
    direction = 1;
    resetTimer();
    move();
  }
}
function resetTimer() {
   if(timer) {
       window.clearInterval(timer);
   }
   timer = window.setInterval(autoScroll,3000);
}
timer = window.setInterval(autoScroll,3000);