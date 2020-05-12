updateTimer = (birthday) => {
    let time = birthday - new Date ();
    return {
        'days': Math.floor( time/(1000*60*60*24) ),
        'hours': Math.floor( (time/(1000*60*60)) % 24 ),
        'minutes': Math.floor( (time/1000/60) % 60 ),
        'seconds': Math.floor( (time/1000) % 60 ),
        'total' : time
    };
}

animateClock = (span) => {
    span.className = 'turn';
    setTimeout( () => {
        span.className = '';
    }, 700);
}

startTimer = (counter, birthday) => {
    setInterval( () => {
        let counter = document.getElementById('counter');
        let timer = updateTimer(birthday);

        counter.innerHTML = '<span>' + timer.days + '</span>'
            + '<span>' + timer.hours + '</span>'
            + '<span>' + timer.minutes + '</span>'
            + '<span>' + timer.seconds + '</span>';

        let spans = counter.getElementsByTagName('span');
        animateClock(spans[3]);
        if (timer.seconds == 59) animateClock(spans[2]);
        if (timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
        if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);

        if (timer.total < 1){
            bdayToday();
        }  
    }, 1000);   
}

bdayToday = () => {
    document.getElementById('counter').style.display = "none";
    document.getElementById('units').style.display = "none";
    document.getElementById('inSpan').style.display = "none";
    document.getElementById('today').style.display = "block";
}

setBirthday = () => {
    let birthday = new Date ('May 6, 2021 00:00:00');

    startTimer('counter', birthday);
}

document.addEventListener('DOMContentLoaded', setBirthday);