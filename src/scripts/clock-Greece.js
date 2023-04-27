const getCurrentTime = () => {
    const options = {
        timeZone: "EET",
        hour12: true,
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }
    //get current time
    const currentTime = new Date().toLocaleString("en-US", options); 


    //Render
    document.querySelector(".clock").innerHTML = currentTime;

    setTimeout(getCurrentTime, 100);
}
