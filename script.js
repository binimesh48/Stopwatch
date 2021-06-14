//Define vars to store time values
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');

//Define var to hold setInterval() function.
let int = null;

//Start of the stopwatch by calling event listner and setIntervel function.
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

//Pause function of the stopwatch
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

//Reset function of the stopwatch to 00
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

//logic to determine when to increment next value of timer
function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    //if seconds/milliseconds/minutes/hours are only one digit,add a leading 0 to the value.
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    //display updated time to user.
    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
