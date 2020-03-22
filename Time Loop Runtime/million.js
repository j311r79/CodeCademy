const timeFuncRuntime = funcParameter => {
   let t1 = new Date();
   funcParameter();
   let t2 = new Date();
   console.log(t1.toISOString());
   console.log(t2.toISOString());
   console.log(t2 - t1);
   return(t2 - t1);
}

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 500000000; i++) {
    if ((2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    } else if (i === 1) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 10) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 100) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 1000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 10000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 100000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 1000000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 10000000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 100000000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 1000000000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 5000000000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 10000000000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    } else if (i === 20000000000) {
      console.log(`${i} went through :) `);
      var ts = new Date();
      console.log(ts.toISOString());
    }
  }
}


function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000)),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) /*% 24*/);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};

console.log(msToTime(timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)));
