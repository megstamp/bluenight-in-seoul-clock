const getCurrentTime = () => {
    //Get new date
    const today = new Date();

    //extract
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let millisecond = today.getMilliseconds();

    //Day Array
    const dayArray = [
        "Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"
    ];

    //check Leading Zero
    hour = checkLeadingZero(hour);
    minute = checkLeadingZero(minute);
    second = checkLeadingZero(second);

    //Assemble
    let currentTime =`${dayArray[day]} ${hour} : ${minute} : ${second} : ${millisecond}`;
    
    //Render
    document.querySelector(".clock").innerHTML = currentTime;

    setTimeout(getCurrentTime, 100);
}

const checkLeadingZero = paramTime => {
    paramTime <10
    ? paramTime = `0${paramTime}`
    : null

    return paramTime;
}