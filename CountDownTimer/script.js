const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const endtime = '1 Jan 2021';

const countDown = (endtime) => {
    //We get the total millisecs between current time and our set endtime
    const total = Date.parse(endtime) - Date.parse(new Date());
    /*  We get the seconds by dividing 1000 with the total.
        Using the modulo, the result only can be between 0-59
        Also we have to floor it because we dont need fractions of secs */

    //im too lazy to understand the rest of the logic, i just copypasted it lol
    const seconds = Math.floor( (total/1000) % 60);
    const minutes = Math.floor( (total/1000/60) % 60);
    const hours = Math.floor( (total/1000*60*60) % 24);
    const days = Math.floor( total/(1000*60*60*24) );

    daysElement.innerHTML       = days;
    hoursElement.innerHTML      = formatTime(hours);
    minsElement.innerHTML       = formatTime(minutes);
    secondsElement.innerHTML    = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


//initial call, so when we enter the site, we dont have to wait 1000ms
countDown(endtime)

setInterval(function(){countDown(endtime);}, 1000);
