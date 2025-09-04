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
});


