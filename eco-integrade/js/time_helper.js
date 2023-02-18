initTimer();

function initTimer(){
    decrementSecond();
    setInterval(decrementSecond, 1000);
}

function decrementSecond(){
    const expires = document.querySelectorAll("#expires");
    let now = new Date();
    expires.forEach((expire) => {
       const [prefix, TID, strTime] = expire.getAttribute('name').split('_');
       const time = new Date(strTime)
       const timer = document.getElementById(`timer_${TID}`);
       const diff = time - now;
       const stringDate = diff >= 1000 ? formatMillisecondsToString(diff) : "00:00:00"; 
       timer.innerText = stringDate;
       diff < 0 ? hiddeExpires(expire) : null;
    });
}

function formatMillisecondsToString(milliseconds){
    const hours = parseInt(milliseconds / (1000 * 60 * 60));
    const minutes = parseInt((milliseconds % (1000*60*60)) / (1000 * 60));
    const seconds = parseInt((milliseconds % (1000*60*60)) % (1000 * 60) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function hiddeExpires(expire){
    expire.setAttribute('style', 'display: none;')
}