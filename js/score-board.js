// STORES HISTORY AND RESULT ON STACK
const history = [];

const results = {
  home: 0,
  guest: 0,
};
// ----------------------------------

// VIEWS THAT SHOW SCORE
const homeScore = document.getElementById("homeRez");
const guestScore = document.getElementById("guestRez");
// VIEWS THAT SHOW HISTORY LOG
const historyLog = document.getElementById("history");

// IF THERE'S LOCAL STORAGE- RERENDER - REATTACH DELETES - RECALCULATE SCORE
// Implemented by optional bool argument check in render function
localStorage.hasOwnProperty("history") &&
  localStorage.getItem("history") !== "[]" &&
  render(true);

// DO PLUSSING
function plus(side, num) {
  results[side] += +num;
  (side == "home" ? homeScore : guestScore).innerText = results[side];
}

// SAVES STUFF ON LOCALSTORAGE && STACK
function save(side, num) {
  const timeNow = new Date();
  const temp = {
    time: timeNow.valueOf(),
    side: side,
    score: num,
  };
  history.unshift(temp);
  localStorage.setItem("history", JSON.stringify(history));
}

// TRASHES STUFF FROM LOCAL STORAGE && STACK
function trash(id) {
  for (let i = 0; i < history.length; i++) {
    const score = history[i];
    if (score.time == id) {
      history.splice(i, 1);
      localStorage.setItem("history", JSON.stringify(history));
      plus(score.side, -score.score);
      render();
      break;
    }
  }
}

// ONLY DO ATTACHING OF DELETE EVENT LISTENERS
function attachDeletes() {
  const del = document.getElementsByClassName("delete");
  for (let i = 0; i < del.length; i++) {
    const id = del[i].dataset.id;
    del[i].addEventListener("click", () => trash(id));
  }
}

// RENDERS STUFF
function render(onStart = false) {
  const data = JSON.parse(localStorage.getItem("history"));
  historyLog.innerHTML = "";
  data.forEach((score) => {
    // FOLLOWING RECALCULATION ONLY GETS EXECUTE AT RUNTIME...
    if (onStart) {
      plus(score.side, score.score);
      const temp = {
        time: score.time,
        side: score.side,
        score: score.score,
      };
      history.unshift(temp);
    }
    // ACTUAL RENDERING
    historyLog.innerHTML += `<br>(${formatTime(score.time)}) <b>${
      score.side
    }:</b> +${score.score} <button type="button" class='delete' data-id=${
      score.time
    }>Delete</button>`;
  });
  attachDeletes();
}

function formatTime(time) {
  const date = new Date(time);
  const y = date.getFullYear();
  const m = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
  const d = (date.getDate() < 10 ? "0" : "") + date.getDate();
  const h = (date.getHours() < 10 ? "0" : "") + date.getHours();
  const mn = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  const s = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
  return `${y}-${m}-${d} ${h}:${mn}:${s}`;
}

function doStuff(side, num) {
  plus(side, num);
  save(side, num);
  render();
}

const add = document.getElementsByClassName("plus");

for (let i = 0; i < add.length; i++) {
  const info = add[i].dataset.info.split(" "); // [side num]
  add[i].addEventListener("click", () => doStuff(info[0], +info[1]));
}
