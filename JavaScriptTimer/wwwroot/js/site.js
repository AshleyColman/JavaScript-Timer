var targetDate = new Date('Dec 25, 2050 00:00:00');

const countdown = () => {
    const countDate = targetDate.getTime();
    const nowDate = new Date().getTime();
    const gap = (countDate - nowDate);

    const second = 1000;
    const minute = (second * 60);
    const hour = (minute * 60);
    const day = (hour * 24);

    const textSecond = Math.floor((gap % minute) / second);
    const textMinute = Math.floor((gap % hour) / minute);
    const textHour = Math.floor((gap % day) / hour);
    const textDay = Math.floor(gap / day);

    document.querySelector(".second").innerText = textSecond;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".day").innerText = textDay;
}

const setDate = () => {
    document.querySelector("h2").innerText =
        `Counting down to \n ${targetDate}`;
}

setDate();
setInterval(countdown, 1000);