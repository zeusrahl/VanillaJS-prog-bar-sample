var i = 0;
function progressStatus(status) {
  let elem = document.getElementById("myBar");
  let width = '';
  let bgColor = '';
  let innerText = '';
  let color = '';
  // if error fill progress bar red and read error message
  if (status=="error") {
    width = 100;
    bgColor = "red";
    innerText = "Something is wrong! Error";
    color = "white";
  } 
  
  // if slow fill progress bar yellow, and read warning message
  if (status=="warning") {
    width = 100;
    bgColor = 'yellow';
    innerText = "Slow Connection";
    color = "black";
  } 
    
  // if load, fill progress bar and read percantage of completion
  if (status=="load") {
    if (i == 0) {
      i = 1;
      width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          color = "white";
          elem.style.width = width + "%";
          innerText = width + "%";
          elem.innerText = innerText;
        } 
      } 
    }
  }

  elem.style.width = width + "%";
  elem.style.backgroundColor = bgColor;
  elem.innerText = innerText;
  elem.style.color = color;
}
  