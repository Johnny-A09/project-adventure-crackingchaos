window.miniGameSpeedMult2 = 1;
window.miniGameWealthMult2 = 1;
window.miniGameHeatMult2 = 1;


var ZONES2 = [
  { pct: 0,  w: 28, color: '#e74c3c', points: -2 },
  { pct: 28, w: 18, color: '#e67e22', points:  -1 },
  { pct: 46, w: 8,  color: '#2ecc71', points:  3 },
  { pct: 54, w: 18, color: '#e67e22', points:  -1 },
  { pct: 72, w: 28, color: '#e74c3c', points: -2 },
];

var pos2 = 0, dir2 = 1, speed2 = 0.9;
var raf2, flashTimeout2;
var score2 = 0, lives2 = 3, round2 = 1;
var totalRounds2 = 5;
var gameActive2 = false;

function buildTrack2() {
  var bg = document.getElementById('track-bg2');
  bg.innerHTML = '';
  for (var i = 0; i < ZONES2.length; i++) {
    var z = ZONES2[i];
    var d = document.createElement('div');
    d.className = 'zone';
    d.style.left = z.pct + '%';
    d.style.width = z.w + '%';
    d.style.background = z.color;
    bg.appendChild(d);
  }
}

function buildLives2() {
  var row = document.getElementById('lives-row2');
  row.innerHTML = '';
  for (var i = 0; i < 3; i++) {
    var d = document.createElement('div');
    d.className = 'life-dot' + (i >= lives2 ? ' lost' : '');
    d.id = 'life2-' + i;
    row.appendChild(d);
  }
}

function startGame2() {
  score2 = 0; lives2 = 3; round2 = 1;
  pos2 = 0; dir2 = 1; speed2 = 5;
  gameActive2 = true;
  document.getElementById('result-overlay2').style.display = 'none';
  document.getElementById('score2').textContent = '0';
  document.getElementById('round-num2').textContent = '1';
  document.getElementById('feedback2').innerHTML = '&nbsp;';
  buildLives2();
  cancelAnimationFrame(raf2);
  loop2();
}

function loop2() {
  pos2 += dir2 * speed2;
  if (pos2 >= 100) { pos2 = 100; dir2 = -1; }
  if (pos2 <= 0)   { pos2 = 0;   dir2 =  1; }
  document.getElementById('needle2').style.left = pos2 + '%';
  if (gameActive2) raf2 = requestAnimationFrame(loop2);
}

function getZoneAt2(p) {
  for (var i = 0; i < ZONES2.length; i++) {
    var z = ZONES2[i];
    if (p >= z.pct && p < z.pct + z.w) return z;
  }
  return ZONES2[0];
}

function flashScreen2(color) {
  var f = document.getElementById('flash2');
  f.style.background = color;
  f.style.opacity = '0.18';
  clearTimeout(flashTimeout2);
  flashTimeout2 = setTimeout(function() { f.style.opacity = '0'; }, 120);
}

function handleClick2() {
  if (!gameActive2) return;
  var zone = getZoneAt2(pos2);
  var pts = zone.points;
  var fb = document.getElementById('feedback2');

  if (pts < 0) {
    lives2 = Math.max(0, lives2 - 1);
    document.getElementById('life2-' + lives2).classList.add('lost');
    flashScreen2('#e74c3c');
    fb.textContent = 'MISS!';
    fb.style.color = '#e74c3c';
  } else {
    score2 += pts;
    flashScreen2('#2ecc71');
    fb.textContent = pts === 3 ? 'PERFECT!' : 'CLOSE!';
    fb.style.color = pts === 3 ? '#2ecc71' : '#e67e22';
  }

  document.getElementById('score2').textContent = Math.max(0, score2);
  round2++;
  document.getElementById('round-num2').textContent = Math.min(round2, totalRounds2);
  speed2 = Math.min(5.1, 5 + (round2 - 1) * 0.1) * window.miniGameSpeedMult2;

  if (lives2 <= 0)           { endGame2(false); return; }
  if (round2 > totalRounds2) { endGame2(true);  return; }
}

function endGame2(survived) {
  gameActive2 = false;
  cancelAnimationFrame(raf2);

  var ov  = document.getElementById('result-overlay2');
  var rt  = document.getElementById('result-title2');
  var rs  = document.getElementById('result-sub2');
  var btn = ov.querySelector('.qte-btn');
  var resBtn = ov.querySelector('.qte-btn-res');

  ov.style.display = 'flex';

  if (survived) {
    rt.textContent = 'YOU MADE IT';
    rt.style.color = '#ffd700';
    gameStats.wealth += Math.floor(score2 * window.miniGameWealthMult2);
    rs.textContent = 'Final score: ' + Math.max(0, score2);
    btn.textContent = 'Continue';
    btn.onclick = continueStory2;
  } else {
    rt.textContent = 'CRACKED';
    rt.style.color = '#e74c3c';
    rs.textContent = 'Score: ' + Math.max(0, score2);
    resBtn.textContent = 'Try Again';
    resBtn.onclick = startGame2;
  }
}

function continueStory2() {
  document.dispatchEvent(new CustomEvent('minigameDone', {
    detail: { survived: true, score: Math.max(0, score2) }
  }));
}

buildTrack2();
startGame2();