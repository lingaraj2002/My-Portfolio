//skill-1

let progressbar1 = document.querySelector(".skill-col-1");
let valuecontainer1 = document.querySelector(".skill-progress-1");
let result1 = document.querySelector(".skill-result-1");

let progressvalue1 = 0;
let progressendvalue1 = 80;
let speed1 = 40;

let progress1  = setInterval(()=>{
    progressvalue1++;
    result1.textContent = `${progressvalue1}%`;
    progressbar1.style.background = `conic-gradient(
        #66fcf1  ${progressvalue1 * 3.6}deg,
        #45a29e ${progressvalue1 * 3.6}deg
    )`;
    if(progressvalue1 == progressendvalue1){
        clearInterval(progress1);
    }
},speed1);

//skill-2

let progressbar2 = document.querySelector(".skill-col-2");
let valuecontainer2 = document.querySelector(".skill-progress-2");
let result2 = document.querySelector(".skill-result-2");

let progressvalue2 = 0;
let progressendvalue2 = 80;
let speed2 = 40;

let progress2  = setInterval(()=>{
    progressvalue2++;
    result2.textContent = `${progressvalue2}%`;
    progressbar2.style.background = `conic-gradient(
        #66fcf1  ${progressvalue2 * 3.6}deg,
        #45a29e ${progressvalue2 * 3.6}deg
    )`;
    if(progressvalue2 == progressendvalue2){
        clearInterval(progress2);
    }
},speed2);

//skill-3

let progressbar3 = document.querySelector(".skill-col-3");
let valuecontainer3 = document.querySelector(".skill-progress-3");
let result3 = document.querySelector(".skill-result-3");

let progressvalue3 = 0;
let progressendvalue3 = 90;
let speed3 = 40;

let progress3  = setInterval(()=>{
    progressvalue3++;
    result3.textContent = `${progressvalue3}%`;
    progressbar3.style.background = `conic-gradient(
        #66fcf1  ${progressvalue3 * 3.6}deg,
        #45a29e ${progressvalue3 * 3.6}deg
    )`;
    if(progressvalue3 == progressendvalue3){
        clearInterval(progress3);
    }
},speed3);

//skill-4

let progressbar4 = document.querySelector(".skill-col-4");
let valuecontainer4 = document.querySelector(".skill-progress-4");
let result4 = document.querySelector(".skill-result-4");

let progressvalue4 = 0;
let progressendvalue4 = 60;
let speed4 = 40;

let progress4  = setInterval(()=>{
    progressvalue4++;
    result4.textContent = `${progressvalue4}%`;
    progressbar4.style.background = `conic-gradient(
        #66fcf1  ${progressvalue4 * 3.6}deg,
        #45a29e ${progressvalue4 * 3.6}deg
    )`;
    if(progressvalue4 == progressendvalue4){
        clearInterval(progress4);
    }
},speed4);

//skill-5

let progressbar5 = document.querySelector(".skill-col-5");
let valuecontainer5 = document.querySelector(".skill-progress-5");
let result5 = document.querySelector(".skill-result-5");

let progressvalue5 = 0;
let progressendvalue5 = 50;
let speed5 = 40;

let progress5  = setInterval(()=>{
    progressvalue5++;
    result5.textContent = `${progressvalue5}%`;
    progressbar5.style.background = `conic-gradient(
        #66fcf1  ${progressvalue5 * 3.6}deg,
        #45a29e ${progressvalue5 * 3.6}deg
    )`;
    if(progressvalue5 == progressendvalue5){
        clearInterval(progress5);
    }
},speed5);