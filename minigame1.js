
window.miniGameSpeedMult = 1;
window.miniGameWealthMult = 1;
window.miniGameHeatMult = 1;


var ZONES = [
  { pct: 0,  w: 27, color: '#e74c3c', points: -2 }, //zones for diffrent colors that are linked to different points
  { pct: 27, w: 17, color: '#e67e22', points:  -1 },
  { pct: 44, w: 12, color: '#2ecc71', points:  3 },
  { pct: 56, w: 17, color: '#e67e22', points:  -1 },
  { pct: 73, w: 27, color: '#e74c3c', points: -2 },
];
 
var pos = 0, dir = 1, speed = 0.9; // set up th eposition of the needle, direction of travel (it will travel left due to "1") finally the needle speed 
var raf, flashTimeout;
var score = 0, lives = 3, round = 1;
var totalRounds = 5;
var gameActive = false; // will prevent user input while game is not active
 
function buildTrack() {
  var bg = document.getElementById('track-bg'); // this function builds the javascript code into the actual element 
  bg.innerHTML = '';
  for (var i = 0; i < ZONES.length; i++) {
    var z = ZONES[i];
    var d = document.createElement('div');
    d.className = 'zone';
    d.style.left = z.pct + '%';
    d.style.width = z.w + '%';
    d.style.background = z.color;
    bg.appendChild(d);
  }
}
 
function buildLives() { // this function will build the lives system
  var row = document.getElementById('lives-row');
  row.innerHTML = '';
  for (var i = 0; i < 3; i++) {
    var d = document.createElement('div');
    d.className = 'life-dot' + (i >= lives ? ' lost' : '');
    d.id = 'life-' + i; // grey out a live when player hits the read
    row.appendChild(d);
  }
}
 
function startGame() { // intialize the game by resetting states and is triggered from the player choice path
  score = 0; lives = 3; round = 1;
  pos = 0; dir = 1; speed = 5;
  gameActive = true;
  document.getElementById('result-overlay').style.display = 'none';
  document.getElementById('score').textContent = '0';
  document.getElementById('round-num').textContent = '1';
  document.getElementById('feedback').innerHTML = '&nbsp;';
  buildLives();
  cancelAnimationFrame(raf); // cancel the loop of the needle before intializing the a new game
  loop();
}
 
function loop() { // the function for the core functionality of the neddle movement
  pos += dir * speed;
  if (pos >= 100) { pos = 100; dir = -1; }
  if (pos <= 0)   { pos = 0;   dir =  1; }
  document.getElementById('needle').style.left = pos + '%';
  if (gameActive) raf = requestAnimationFrame(loop);
}
 
function getZoneAt(p) {
  for (var i = 0; i < ZONES.length; i++) {
    var z = ZONES[i];
    if (p >= z.pct && p < z.pct + z.w) return z;
  }
  return ZONES[0];
}
 
function flashScreen(color) {
  var f = document.getElementById('flash');
  f.style.background = color;
  f.style.opacity = '0.18';
  clearTimeout(flashTimeout);
  flashTimeout = setTimeout(function() { f.style.opacity = '0'; }, 120);
}
 
function handleClick() {
  if (!gameActive) return;
  var zone = getZoneAt(pos);
  var pts = zone.points;
  var fb = document.getElementById('feedback');
 
  if (pts < 0) {
    lives = Math.max(0, lives - 1);
    document.getElementById('life-' + lives).classList.add('lost');
    flashScreen('#e74c3c');
    fb.textContent = 'MISS!';
    fb.style.color = '#e74c3c';
  } else {
    score += pts;
    flashScreen('#2ecc71');
    fb.textContent = pts === 3 ? 'PERFECT!' : 'CLOSE!';
    fb.style.color = pts === 3 ? '#2ecc71' : '#e67e22';
  }
 
  document.getElementById('score').textContent = Math.max(0, score);
  round++;
  document.getElementById('round-num').textContent = Math.min(round, totalRounds);
  speed = Math.min(5.1, 5 + (round - 1) * 0.1) * window.miniGameSpeedMult;
 
  if (lives <= 0)          { endGame(false); return; }
  if (round > totalRounds) { endGame(true);  return; }
}
 
function endGame(survived) {
  gameActive = false;
  cancelAnimationFrame(raf);

  var ov = document.getElementById('result-overlay');
  var rt = document.getElementById('result-title');
  var rs = document.getElementById('result-sub');
  var btn = ov.querySelector('.qte-btn');
  var resBtn = ov.querySelector('.qte-btn-res');

  ov.style.display = 'flex';

  if (survived) {
    rt.textContent = 'Batch successfully made';
    rt.style.color = '#ffd700';
    gameStats.wealth += Math.floor(score * window.miniGameWealthMult);
    rs.textContent = 'Final score: ' + Math.max(0, score);
    btn.textContent = 'Continue';
    btn.onclick = continueStory;
    
  } else {
    rt.textContent = 'CRACKED';
    rt.style.color = '#e74c3c';
    rs.textContent = 'Score: ' + Math.max(0, score);
    resBtn.textContent = 'Try Again';
    resBtn.onclick = startGame;
  }
}
 
function continueStory() {
  document.dispatchEvent(new CustomEvent('minigameDone', {
    detail: { survived: true, score: Math.max(0, score) }
  }));
}





buildTrack();
startGame();
 