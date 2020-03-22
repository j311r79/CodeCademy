function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000)),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 7),
    weeks = Math.floor(duration / (1000 * 60 * 60 * 24 * 7));

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return weeks + " weeks, " + days + " days. + " + hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};

console.log(msToTime(820399348.45678));
