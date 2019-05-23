const time = document.querySelector('#timeSpent');

window.addEventListener('load', function() {
    let count = +localStorage.getItem('time');
    setInterval(function () {
        count += 1;
        time.textContent = count;
        localStorage['time'] =  count;
    } , 1000);
});
