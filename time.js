const time = document.querySelector('.time');

function initClock(){
    const now = new Date();
    const hour = String(now.getHours()).padStart(2,'0');
    const min = String(now.getMinutes()).padStart(2,'0');
    const sec = String(now.getSeconds()).padStart(2,'0');
    let hourText = '';
    let setTime = '';
    if(Number(hour) < 12){
        hourText = 'AM';
        if(Number(hour) === 0){
            setTime = '12';
        }else{
            setTime = String(hour).padStart(2,'0');
        }
    }else{
        hourText = 'PM';
        setTime = String(Number(hour - 12)).padStart(2,'0');
    }

    time.innerText = `${hourText} ${setTime} : ${min} : ${sec}`
}

initClock();
setInterval(initClock,1000);