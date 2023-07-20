function initPage(){
  document.querySelector(".qimg").src = "./img/s1.jpg";
}

var count = 0 ;

function leftleft(){
}

function left(){
  if(count) {
    event.target.classList.remove("qimg"+count);
  }
  count--;
  event.target.classList.add("qimg"+count);

  if(count<0){
    event.target.disabled = true;
  }
}

function rightright(){

}

function right(){
  if(count) {
    event.target.classList.remove("qimg"+count);
  }
  count++;
  event.target.classList.add("qimg"+count);

  if(count>6){
    event.target.disabled = true;
  }
}