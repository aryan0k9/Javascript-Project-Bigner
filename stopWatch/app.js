// let start = document.getElementById("start");
// let stop = document.getElementById("stop");
// let reset = document.getElementById("reset");
// let h3 = document.getElementById("h3");
// let time = document.getElementById("time");
// let h3CreateMin = document.createElement("h3");
// let h3CreateHour = document.createElement("h3");
// let milisecond = document.getElementById("milisecond");
// let second = document.getElementById("second");
// let minSpan = document.createElement("span");
// let minSpanSigin = document.createElement("span");
// let hourSpan = document.createElement("span");
// let hourSpanSigin = document.createElement("span");

// let secStart = 0;
// let miliSecStart = 0;
// let minStart = 0;
// let hourStart = 0;
// let s = true;

// start.addEventListener("click", function () {

//   reset.style.display = "block";
//   stop.style.display = "block";
//   start.style.display = "none";

//   miliSecondStop = setInterval(() => {
//     let miliSec = miliSecStart + 1;
//     milisecond.innerText = miliSec;
//     miliSecStart = miliSec;
//     if (miliSecStart === 99) {
//       miliSecStart = 0;
//     }
//   }, 10);

//   // Sec Start
//   secondStop = setInterval(() => {
//     let sec = secStart + 1;
//     secStart = sec;
//     second.innerText = secStart;
//     if (sec === 60) {
//       secStart = 0;
//     }
//   }, 1000);


// //   Min Start
//   minStop = setInterval(() => {
//     let min = minStart + 1;
//     if (s === true) {
//       time.prepend(h3CreateMin);
//     }
//     h3CreateMin.style.display = "block";
//     h3CreateMin.append(minSpan);
//     minSpan.classList = "value";
//     h3CreateMin.classList = "time_s_m_h";
//     h3CreateMin.append(minSpanSigin);
//     minSpanSigin.classList = "sigin";
//     minSpanSigin.innerText = "M";
//     minStart = min;
//     minSpan.innerText = min;
//     if (min === 60) {
//       minStart = 0;
//     }
//     s = false;
//   }, 60000);
//   // 60000

//   // Hour Start
//   hourStop = setInterval(() => {
//     let hour = hourStart + 1;
//     time.prepend(h3CreateHour);
//     h3CreateHour.style.display = "block";
//     h3CreateHour.classList = "time_s_m_h";
//     h3CreateHour.append(hourSpan);
//     hourSpan.classList = "value";
//     h3CreateHour.append(hourSpanSigin);
//     hourSpanSigin.classList = "sigin";
//     hourSpanSigin.innerText = "H";
//     hourSpan.innerText = hour;
//     hourStart = hour;
//     if (hour === 24) {
//       hourStart = 0;
//     }
//   }, 60000);
//   //    3600000
// });
// stop.addEventListener("click", function () {
//   start.style.display = "block";
//   stop.style.display = "none";
//   clearInterval(miliSecondStop);
//   clearInterval(secondStop);
//   clearInterval(minStop);
//   clearInterval(hourStop);
// });

// reset.addEventListener("click", function () {
//   start.style.display = "block";
//   stop.style.display = "none";
//   clearInterval(miliSecondStop);
//   miliSecStart = 0;
//   milisecond.innerText = "00";

//   clearInterval(secondStop);
//   secStart = 0;
//   second.innerText = 0;

//   clearInterval(minStop);
//   minStart = 0;
//   h3CreateMin.style.display = "none";
//   clearInterval(hourStop);
//   hourStart = 0;
//   h3CreateHour.style.display = "none";
// });
let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");
    let h3 = document.getElementById("h3");
    let time = document.getElementById("time");
    let h3CreateMin = document.createElement("h3");
    let h3CreateHour = document.createElement("h3");
    let milisecond = document.getElementById("milisecond");
    let second = document.getElementById("second");
    let minSpan = document.createElement("span");
    let minSpanSigin = document.createElement("span");
    let hourSpan = document.createElement("span");
    let hourSpanSigin = document.createElement("span");    
    let miliSec = 0;
    let s = true;
    
    start.addEventListener("click", function () {
    
      reset.style.display = "block";
      stop.style.display = "block";
      start.style.display = "none";
    
      miliSecondStop = setInterval(() => {
        miliSec++;
   
        let milsecText =  miliSec % 100;
        let secText = (parseInt(miliSec / 100)) % 60;
        let minText = (parseInt(miliSec / 6000)) % 60;
        let hourText = parseInt(miliSec / 360000);
        milisecond.innerText = milsecText;      
        second.innerText = secText;       
        if(minText>0){
          time.prepend(h3CreateMin);
          h3CreateMin.style.display = "block";
          h3CreateMin.append(minSpan);
          minSpan.classList = "value";
          h3CreateMin.classList = "time_s_m_h";
          h3CreateMin.append(minSpanSigin);
          minSpanSigin.classList = "sigin";
          minSpanSigin.innerText = "M";
          minSpan.innerText = minText;   
        }
        
        if(hourText > 0){
          time.prepend(h3CreateHour);
          h3CreateHour.style.display = "block";
          h3CreateHour.classList = "time_s_m_h";
          h3CreateHour.append(hourSpan);
          hourSpan.classList = "value";
          h3CreateHour.append(hourSpanSigin);
          hourSpanSigin.classList = "sigin";
          hourSpanSigin.innerText = "H";
          hourSpan.innerText = hourText;
        }
    
      }, 10);
    });
    stop.addEventListener("click", function () {
      start.style.display = "block";
      stop.style.display = "none";
      clearInterval(miliSecondStop);

    });
    
    reset.addEventListener("click", function () {
      start.style.display = "block";
      stop.style.display = "none";
      clearInterval(miliSecondStop);
      miliSec = 0;
      milisecond.innerText = "00";
      second.innerText = '0';
      
      h3CreateMin.style.display = "none";
      h3CreateHour.style.display = "none";
    });