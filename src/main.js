import './style.css'
let darkmode = false;

document.getElementById('switch').addEventListener('click', () => { 
    darkmode = !darkmode;

    if (darkmode) {
        // Dark gradient
        document.body.style.background = 'linear-gradient(180deg, #040918 0%, #091540 100%)';
    } else {
        // Light gradient
        document.body.style.background = 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)';
    }
    // button logo
     const img = document.getElementById('mode');
     if (darkmode){
        img.src = './images/icon-sun.svg'
     }else {
     img.src = './images/icon-moon.svg'
    }
    //extensions list
    const extension = document.getElementById('extension');
    if (darkmode) {
        extension.style.color = 'white';
    } else {
        extension.style.color = 'black';
    }
    //switch
    const switchContainer = document.getElementById('switch');
    if (darkmode){
        switchContainer.style.background = 'grey';
    } else{
         switchContainer.style.background = '';
    }
});


