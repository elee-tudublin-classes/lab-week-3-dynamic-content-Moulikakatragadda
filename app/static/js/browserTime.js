function getTime() {
    return new Date().toLocaleTimeString();
}

function updateBrowserTime() {
    const timeElement = document.getElementById('browserTime');
    if (timeElement) {
        timeElement.innerText = getTime();
    }
}

setInterval(updateBrowserTime, 1000);
