const socket = io();

let currentBoard = [];
let mySecretChar = null;
let currentMode = "ELIMINATE"; // "ELIMINATE" sau "GUESS"
let isCreator = false;
let gameStarted = false;

const lobbyScreen = document.getElementById('lobbyScreen');
const gameScreen = document.getElementById('gameScreen');
const playerNameInput = document.getElementById('playerName');
const gameCodeInput = document.getElementById('gameCode');
const categorySelect = document.getElementById('categorySelect');
const selectCol = document.getElementById('selectCol');
const roomNotice = document.getElementById('roomNotice');
const playBtn = document.getElementById('playBtn');
const inviteBtn = document.getElementById('inviteBtn');
const backBtn = document.getElementById('backBtn');
const grid = document.getElementById('grid');
const targetStatus = document.getElementById('targetStatus');
const modeControls = document.getElementById('modeControls');
const modeEliminateBtn = document.getElementById('modeEliminateBtn');
const modeGuessBtn = document.getElementById('modeGuessBtn');
const myCardContainer = document.getElementById('myCardContainer');
const myCardImg = document.getElementById('myCardImg');
const myCardName = document.getElementById('myCardName');

const gameOverModal = document.getElementById('gameOverModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalCharImg = document.getElementById('modalCharImg');
const modalCharName = document.getElementById('modalCharName');
const rematchBtn = document.getElementById('rematchBtn');

// Verificare automata de camera existenta cand se tasteaza codul
gameCodeInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
  const code = e.target.value.trim();

  if (code.length === 4) {
    socket.emit('check_room', code, (res) => {
      if (res.exists) {
        categorySelect.value = res.category;
        categorySelect.disabled = true;
        roomNotice.style.display = 'block';
        roomNotice.textContent = `✓ Cameră găsită! Categoria a fost preluată automat.`;
      } else {
        categorySelect.disabled = false;
        roomNotice.style.display = 'none';
      }
    });
  } else {
    categorySelect.disabled = false;
    roomNotice.style.display = 'none';
  }
});

// Click PLAY
playBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim() || "Jucător";
  const code = gameCodeInput.value.trim();
  const cat = categorySelect.value;

  if (code.length !== 4) {
    alert('Introdu un cod de fix 4 cifre!');
    return;
  }

  if (!cat && !categorySelect.disabled) {
    alert('Alege o categorie!');
    return;
  }

  socket.emit('join_game', { name, code, category: cat });
});

// Click INVITE
inviteBtn.addEventListener('click', () => {
  const code = gameCodeInput.value.trim();
  const cat = categorySelect.value;

  if (code.length !== 4) {
    alert('Tastează codul camerei înainte de a trimite invitația!');
    return;
  }

  const inviteUrl = `${window.location.origin}${window.location.pathname}?code=${encodeURIComponent(code)}&cat=${encodeURIComponent(cat)}`;
  navigator.clipboard.writeText(inviteUrl).then(() => {
    alert('Linkul a fost copiat! Trimite-l prietenului tău.');
  }).catch(() => {
    prompt('Copiază linkul manual:', inviteUrl);
  });
});

backBtn.addEventListener('click', () => {
  window.location.reload();
});

// Comutator intre cele doua butoane de actiune
modeEliminateBtn.addEventListener('click', () => {
  currentMode = "ELIMINATE";
  modeEliminateBtn.classList.add('active');
  modeGuessBtn.classList.remove('active');
  document.body.classList.remove('guess-mode');
  targetStatus.innerHTML = "❌ <b>Mod Eliminare activat:</b> Dă click pe un cartonaș ca să îl tai.";
});

modeGuessBtn.addEventListener('click', () => {
  currentMode = "GUESS";
  modeGuessBtn.classList.add('active');
  modeEliminateBtn.classList.remove('active');
  document.body.classList.add('guess-mode');
  targetStatus.innerHTML = "🎯 <b>MOD WILD GUESS!</b> Dă click pe cartonașul final pe care pariezi!";
});

// Primire tabla de la server
socket.on('game_init', ({ board, category, isCreator: creator }) => {
  currentBoard = board;
  isCreator = creator;
  mySecretChar = null;
  gameStarted = false;

  lobbyScreen.classList.remove('active');
  gameScreen.classList.add('active');
  modeControls.style.display = 'none';
  myCardContainer.style.display = 'none';

  targetStatus.innerHTML = "👉 <b>Pasul 1:</b> Fă click pe cartonașul tău secret!";

  renderBoard();
});

// Actualizare status lobby / jucători
socket.on('room_status', ({ playerCount, players }) => {
  if (!gameStarted && mySecretChar) {
    if (playerCount < 2) {
      targetStatus.innerHTML = "⏳ Ți-ai ales cartonașul! Așteptăm adversarul să se conecteze...";
    } else {
      targetStatus.innerHTML = "⏳ Așteptăm adversarul să-și aleagă cartonașul secret...";
    }
  }
});

// Ambii jucători sunt gata
socket.on('both_ready', () => {
  gameStarted = true;
  modeControls.style.display = 'flex';
  currentMode = "ELIMINATE";
  modeEliminateBtn.classList.add('active');
  modeGuessBtn.classList.remove('active');
  targetStatus.innerHTML = "⚔️ <b>Jocul a început!</b> Folosește „Elimină jucători” sau „Verifică cartonașul final”.";
});

// Rezultat meci
socket.on('game_over', ({ winner, loser, targetChar, guesser, correct }) => {
  gameOverModal.style.display = 'flex';

  if (winner === (playerNameInput.value.trim() || "Jucător")) {
    modalTitle.innerHTML = "🏆 AI CÂȘTIGAT!";
    modalTitle.style.color = "#2ed573";
    modalDesc.innerHTML = correct 
      ? `Bravo! L-ai ghicit corect pe adversar!` 
      : `${loser} a încercat un Wild Guess și a greșit!`;
  } else {
    modalTitle.innerHTML = "💀 AI PIERDUT!";
    modalTitle.style.color = "#ff4757";
    modalDesc.innerHTML = correct 
      ? `${winner} a ghicit corect personajul tău!` 
      : `Ai greșit ghicirea! Adversarul câștigă automat.`;
  }

  modalCharName.textContent = targetChar.name;
  tryLoadImage(modalCharImg, targetChar.base, `https://ui-avatars.com/api/?name=${encodeURIComponent(targetChar.name)}`);
});

// Rematch
rematchBtn.addEventListener('click', () => {
  socket.emit('request_rematch');
});

socket.on('game_reset', ({ board }) => {
  gameOverModal.style.display = 'none';
  currentBoard = board;
  mySecretChar = null;
  gameStarted = false;
  modeControls.style.display = 'none';
  myCardContainer.style.display = 'none';
  targetStatus.innerHTML = "👉 <b>Rundă nouă:</b> Alege-ți noul cartonaș secret!";
  renderBoard();
});

socket.on('error_msg', (msg) => {
  alert(msg);
});

// Incarcare inteligenta imagini (jpg -> png -> jpeg -> webp)
function tryLoadImage(imgElem, baseName, fallbackUrl) {
  const extensions = ['.jpg', '.png', '.jpeg', '.webp'];
  let extIndex = 0;

  function tryNext() {
    if (extIndex < extensions.length) {
      const ext = extensions[extIndex++];
      imgElem.src = baseName + ext;
    } else {
      imgElem.onerror = null;
      imgElem.src = fallbackUrl;
    }
  }

  imgElem.onerror = tryNext;
  tryNext();
}

function renderBoard() {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = currentBoard.length <= 20 ? "repeat(5, 1fr)" : "repeat(7, 1fr)";

  currentBoard.forEach((char) => {
    const card = document.createElement('div');
    card.className = 'card';

    const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(char.name)}&background=1a1d26&color=ffea79&size=300&bold=true`;

    const img = document.createElement('img');
    img.alt = char.name;
    tryLoadImage(img, char.base, fallback);

    const label = document.createElement('div');
    label.className = 'card-label';
    label.textContent = char.name;

    card.appendChild(img);
    card.appendChild(label);

    card.addEventListener('click', () => {
      // 1. ALEGERE SECRETĂ LA ÎNCEPUT
      if (!mySecretChar) {
        mySecretChar = char;
        tryLoadImage(myCardImg, char.base, fallback);
        myCardName.textContent = char.name;
        myCardContainer.style.display = "flex";

        socket.emit('select_secret', char);
        alert(`Ți-ai ales personajul: ${char.name}! A fost fixat sus.`);
        return;
      }

      // 2. MODUL VERIFICĂ CARTONAȘUL FINAL (WILD GUESS)
      if (currentMode === "GUESS") {
        if (confirm(`Ești sigur că personajul adversarului este ${char.name}? Dacă greșești, pierzi automat!`)) {
          socket.emit('make_guess', char);
        }
        return;
      }

      // 3. MODUL ELIMINĂ JUCĂTORI
      card.classList.toggle('eliminated');
    });

    grid.appendChild(card);
  });
}

// Citire link invitat
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const cat = params.get('cat');

  if (code) {
    gameCodeInput.value = code;
    gameCodeInput.dispatchEvent(new Event('input'));
  }
  if (cat && !categorySelect.disabled) {
    categorySelect.value = cat;
  }
});
