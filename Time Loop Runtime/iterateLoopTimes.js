let checkLoop = 0;

const timeFuncRuntime = funcParameter => {
  let t1 = new Date();
  funcParameter();
  let t2 = new Date();
  console.log("\nThe loops began at: " + t1.toISOString());
  console.log("\nThe loops ended at: " + t2.toISOString());
  return (t2 - t1);
}

const checkCycleIter = () => {
  let checkIter = 1;
  for (let i = 1; i <= checkLoop; i++) {
    if (i === checkIter) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log("This loop ended at: " + ts.toISOString());
      checkIter *= 10
    }
  }
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000)),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) /*% 24*/ );

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};

function finalFx(numberIter) {
  checkLoop = numberIter;
  console.log("\nThe duration of all the loops was: " + msToTime(timeFuncRuntime(checkCycleIter)) + "\n");
};

finalFx(1000000000);
