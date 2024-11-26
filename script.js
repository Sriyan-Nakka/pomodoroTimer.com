const workCycleCompleteAudio = document.querySelector(
  "#workCycleCompleteAudio"
);
const breakCycleCompleteAudio = document.querySelector(
  "#breakCycleCompleteAudio"
);

let cycles = 0;
let state = "work";
let timeLeft = 1500;

if (state === "work") {
  document.querySelector("#startButton").onclick = () => {
    workTimerFunction();
  };
}

function workTimerFunction() {
  if (state === "workPaused") {
    cycles = cycles;
  } else {
    cycles++;
  }
  state = "work";
  document.querySelector("#startButton").textContent = "Resume";
  document.querySelector("#startButton").style.display = "none";
  document.querySelector("#cyclePara").style.display = "block";
  document.querySelector("#timePara").style.display = "block";
  document.querySelector("#pauseButton").style.display = "block";
  document.querySelector("#resetButton").style.display = "block";
  document.querySelector("#cycleSpan").textContent = cycles;

  document.querySelector("#timeSpan").textContent = "Work";
  let twentyFiveMinutes = setInterval(() => {
    document.querySelector("#timeSpan").textContent = "Work";
    let minutes = Math.floor(timeLeft / 60);
    console.log(minutes);
    let seconds = timeLeft % 60;
    console.log(seconds);
    document.querySelector("#minuteSpan").textContent = `${minutes
      .toString()
      .padStart(2, "0")}`;
    document.querySelector("#secondSpan").textContent = `${seconds
      .toString()
      .padStart(2, "0")}`;
    timeLeft--;

    if (timeLeft === -1) {
      clearInterval(twentyFiveMinutes);
      setTimeout(() => {
        workCycleCompleteAudio.play();
        breakTimerFunction();
      }, 1000);
    }
  }, 1000);

  setTimeout(() => {
    document.querySelector("#pauseButton").onclick = () => {
      clearInterval(twentyFiveMinutes);
      state = "workPaused";
      document.querySelector("#startButton").style.display = "block";
      document.querySelector("#pauseButton").style.display = "none";
      document.querySelector("#timeSpan").textContent = "Work(Paused)";
    };

    document.querySelector("#resetButton").onclick = () => {
      resetTimerFunction();
      clearInterval(twentyFiveMinutes);
    };
  }, 1);
}

function breakTimerFunction() {
  if (state === "breakPaused") {
    timeLeft = timeLeft;
  } else {
    timeLeft = 300;
  }
  state = "break";
  document.querySelector("#pauseButton").style.display = "block";
  document.querySelector("#startButton").style.display = "none";
  document.querySelector("#timeSpan").textContent = "Break";
  let fiveMinutes = setInterval(() => {
    document.querySelector("#timeSpan").textContent = "Break";
    let minutes = Math.floor(timeLeft / 60);
    console.log(minutes);
    let seconds = timeLeft % 60;
    console.log(seconds);
    document.querySelector("#minuteSpan").textContent = `${minutes
      .toString()
      .padStart(2, "0")}`;
    document.querySelector("#secondSpan").textContent = `${seconds
      .toString()
      .padStart(2, "0")}`;
    timeLeft--;

    if (timeLeft === -1) {
      clearInterval(fiveMinutes);
      setTimeout(() => {
        breakCycleCompleteAudio.play();
        workTimerFunction();
        timeLeft = 1500;
      }, 1000);
    }
  }, 1000);

  setTimeout(() => {
    document.querySelector("#pauseButton").onclick = () => {
      clearInterval(fiveMinutes);
      state = "breakPaused";
      document.querySelector("#timeSpan").textContent = "Break(Paused)";
      document.querySelector("#startButton").style.display = "block";
      document.querySelector("#pauseButton").style.display = "none";
      document.querySelector("#startButton").onclick = () => {
        breakTimerFunction();
      };
    };

    document.querySelector("#resetButton").onclick = () => {
      resetTimerFunction();
      clearInterval(fiveMinutes);
    };
  }, 1);
}

function resetTimerFunction() {
  cycles = 0;
  state = "work";
  timeLeft = 1500;
  document.querySelector("#startButton").textContent = "Start";
  document.querySelector("#startButton").style.display = "block";
  document.querySelector("#cyclePara").style.display = "none";
  document.querySelector("#timePara").style.display = "none";
  document.querySelector("#pauseButton").style.display = "none";
  document.querySelector("#resetButton").style.display = "none";
  document.querySelector("#cycleSpan").textContent = cycles;
  document.querySelector("#minuteSpan").textContent = "00";
  document.querySelector("#secondSpan").textContent = "00";
}
