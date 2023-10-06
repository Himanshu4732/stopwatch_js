let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let milisec = document.querySelector(".milisec");
let buttons = document.querySelector(".buttons") ;
let laprecord = document.querySelector(".laprecord");
const lap = [ ];
let sw = null;
toggle = 0;

function startsw() {
    if (sw !== null) {
        clearInterval(sw);
    }
  sw = setInterval(() => {
    let milisecs = parseInt(milisec.innerHTML);
    let seconds = parseInt(sec.innerHTML);
    let minutes = parseInt(min.innerHTML);
    let hours = parseInt(hrs.innerHTML);

    milisecs++;
    if (milisecs == 100) {
      milisecs = 0;
      seconds++;

      if (seconds == 60) {
        seconds = 0;
        minutes++;

        if (minutes == 60) {
          minutes = 0;
          hours++;

          if (hours == 24) {
            hours = 0;
          }
        }
      }
    }

    milisec.innerHTML = (milisecs < 10 ? "0" : "") + milisecs;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
  }, 10);

  toggle = 1;
  tog();
}

function pausesw() {
  clearInterval(sw);
  toggle = 0 ;
  tog();
}

function resetsw() {
  clearInterval(sw);
  hrs.innerHTML = "00";
  sec.innerHTML = "00";
  min.innerHTML = "00";
  milisec.innerHTML = "00"; 
}

function laprec(){
  let a = hrs.innerHTML;
  let b = min.innerHTML;
  let c = sec.innerHTML;
  let d = milisec.innerHTML;
    lap.push({
          a,
          b,
          c,
          d
    });
let innerlap = "";
  lap.forEach((item)=>{
innerlap += `<div class="addedlap">${item.a}:${item.b}:${item.c}:${item.d}</div>`;
  })
laprecord.innerHTML = innerlap;

}

function tog(){
    if (toggle == 1) {
        // buttons.children[1].outerHTML =   `<ion-icon name="play-circle-outline"  class="play" onclick="startsw()" ></ion-icon>`
        buttons.children[1].outerHTML =  '<ion-icon name="pause-circle-outline"  class="play" onclick="pausesw()" ></ion-icon>';
    
        
    }
    else {
        // buttons.children[1].outerHTML =  `<ion-icon name="pause-circle-outline"  class="play" onclick="pausesw()" ></ion-icon>`
        buttons.children[1].outerHTML =   `<ion-icon name="play-circle-outline"  class="play" onclick="startsw()" ></ion-icon>`
    
    }
}