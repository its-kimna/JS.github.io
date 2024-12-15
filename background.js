const body = document.querySelector('body');

function initRangomBg(){
    const bgImgs = ['bg01', 'bg02', 'bg03', 'bg04', 'bg05', 'bg06'];

    const bgImg = bgImgs[Math.floor(Math.random() * bgImgs.length)];
    
    body.style.background = `url(img/${bgImg}.jpg) no-repeat 50% 0`
}

initRangomBg();
setInterval(initRangomBg, 5000);