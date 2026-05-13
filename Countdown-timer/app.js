let interval;

function startCountdown(){

  clearInterval(interval);

  let targetDate =
    new Date(
      document.getElementById("dateTime").value
    ).getTime();

  interval = setInterval(()=>{

    let now = new Date().getTime();

    let distance = targetDate - now;

    if(distance < 0){

      clearInterval(interval);

      alert("Countdown Finished!");

      return;
    }

    let days =
      Math.floor(distance / (1000*60*60*24));

    let hours =
      Math.floor(
        (distance % (1000*60*60*24))
        / (1000*60*60)
      );

    let minutes =
      Math.floor(
        (distance % (1000*60*60))
        / (1000*60)
      );

    let seconds =
      Math.floor(
        (distance % (1000*60))
        / 1000
      );

    document.getElementById("days").innerText =
      days;

    document.getElementById("hours").innerText =
      hours;

    document.getElementById("minutes").innerText =
      minutes;

    document.getElementById("seconds").innerText =
      seconds;

  },1000);
}