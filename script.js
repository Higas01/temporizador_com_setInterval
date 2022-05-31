function realTime() {
    const timer = document.querySelector('.timer');

    const getTimeFromSecond = (second) => {
        const date = new Date(second * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT',
        })
    }
    let seconds = 0;
    let clock;

    const startClock = () => {
        clock = setInterval(function () {
            seconds++;
            timer.innerHTML = getTimeFromSecond(seconds);
        }, 1000)
    }

    addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('start')) {
            clearInterval(clock);
            startClock();
            timer.classList.remove('paused');
        }
        
        if (el.classList.contains('pause')) {
            clearInterval(clock);
            timer.classList.add('paused');
        }

        if (el.classList.contains('zero')) {
            clearInterval(clock);
            seconds = 0;
            timer.innerHTML = '00:00:00';
            timer.classList.remove('paused');
        }
    })

}

realTime();