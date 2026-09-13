const charactersDB = [
  // ==========================================
  // 1. SINGERS - ROMÂNIA (20)
  // ==========================================
  { id: 101, name: "Inna", category: "singers-ro", img: "inna.jpg" },
  { id: 102, name: "Smiley", category: "singers-ro", img: "smiley.jpg" },
  { id: 103, name: "Delia", category: "singers-ro", img: "delia.jpg" },
  { id: 104, name: "Connect-R", category: "singers-ro", img: "connect-r.jpg" },
  { id: 105, name: "Andra", category: "singers-ro", img: "andra.jpg" },
  { id: 106, name: "Irina Rimes", category: "singers-ro", img: "irina-rimes.jpg" },
  { id: 107, name: "Carla's Dreams", category: "singers-ro", img: "carlas-dreams.jpg" },
  { id: 108, name: "The Motans", category: "singers-ro", img: "the-motans.jpg" },
  { id: 109, name: "Alex Velea", category: "singers-ro", img: "alex-velea.jpg" },
  { id: 110, name: "Antonia", category: "singers-ro", img: "antonia.jpg" },
  { id: 111, name: "Marius Moga", category: "singers-ro", img: "marius-moga.jpg" },
  { id: 112, name: "Dan Bălan", category: "singers-ro", img: "dan-balan.jpg" },
  { id: 113, name: "Loredana Groza", category: "singers-ro", img: "loredana-groza.jpg" },
  { id: 114, name: "Florin Salam", category: "singers-ro", img: "florin-salam.jpg" },
  { id: 115, name: "Theo Rose", category: "singers-ro", img: "theo-rose.jpg" },
  { id: 116, name: "Mira", category: "singers-ro", img: "mira.jpg" },
  { id: 117, name: "Alina Eremia", category: "singers-ro", img: "alina-eremia.jpg" },
  { id: 118, name: "Horia Brenciu", category: "singers-ro", img: "horia-brenciu.jpg" },
  { id: 119, name: "Ștefan Bănică Jr.", category: "singers-ro", img: "stefan-banica.jpg" },
  { id: 120, name: "Tudor Chirilă", category: "singers-ro", img: "tudor-chirila.jpg" },

  // ==========================================
  // 2. TRAPPERI - ROMÂNIA (20)
  // ==========================================
  { id: 201, name: "Ian", category: "trapperi-ro", img: "ian.jpg" },
  { id: 202, name: "Oscar", category: "trapperi-ro", img: "oscar.jpg" },
  { id: 203, name: "YNY Sebi", category: "trapperi-ro", img: "yny-sebi.jpg" },
  { id: 204, name: "Berechet", category: "trapperi-ro", img: "berechet.jpg" },
  { id: 205, name: "Killa Fonic", category: "trapperi-ro", img: "killa-fonic.jpg" },
  { id: 206, name: "Nane", category: "trapperi-ro", img: "nane.jpg" },
  { id: 207, name: "Rava", category: "trapperi-ro", img: "rava.jpg" },
  { id: 208, name: "IDK", category: "trapperi-ro", img: "idk.jpg" },
  { id: 209, name: "AlbertNBN", category: "trapperi-ro", img: "albert-nbn.jpg" },
  { id: 210, name: "MGK666", category: "trapperi-ro", img: "mgk666.jpg" },
  { id: 211, name: "Gheboasă", category: "trapperi-ro", img: "gheboasa.jpg" },
  { id: 212, name: "Azel", category: "trapperi-ro", img: "azel.jpg" },
  { id: 213, name: "Mobtrap", category: "trapperi-ro", img: "mobtrap.jpg" },
  { id: 214, name: "Amuly", category: "trapperi-ro", img: "amuly.jpg" },
  { id: 215, name: "PRNY", category: "trapperi-ro", img: "prny.jpg" },
  { id: 216, name: "Marko Glass", category: "trapperi-ro", img: "marko-glass.jpg" },
  { id: 217, name: "Bvcovia", category: "trapperi-ro", img: "bvcovia.jpg" },
  { id: 218, name: "Tussin", category: "trapperi-ro", img: "tussin.jpg" },
  { id: 219, name: "Aerozen", category: "trapperi-ro", img: "aerozen.jpg" },
  { id: 220, name: "OG Eastbull", category: "trapperi-ro", img: "og-eastbull.jpg" },

  // ==========================================
  // 3. YOUTUBERI - ROMÂNIA (20)
  // ==========================================
  { id: 301, name: "Selly", category: "youtuberi-ro", img: "selly.jpg" },
  { id: 302, name: "Dorian Popa", category: "youtuberi-ro", img: "dorian-popa.jpg" },
  { id: 303, name: "Faiăr Silviu", category: "youtuberi-ro", img: "faiar-silviu.jpg" },
  { id: 304, name: "Zaiafet", category: "youtuberi-ro", img: "zaiafet.jpg" },
  { id: 305, name: "Creative Monkeyz", category: "youtuberi-ro", img: "creative-monkeyz.jpg" },
  { id: 306, name: "Maxsialtele", category: "youtuberi-ro", img: "maxsialtele.jpg" },
  { id: 307, name: "LecturăDeLaA-Z", category: "youtuberi-ro", img: "lectura-de-la-a-z.jpg" },
  { id: 308, name: "Ilie's Vlogs", category: "youtuberi-ro", img: "ilies-vlogs.jpg" },
  { id: 309, name: "Bercea", category: "youtuberi-ro", img: "bercea.jpg" },
  { id: 310, name: "Atenție, Cad Mere!", category: "youtuberi-ro", img: "atentie-cad-mere.jpg" },
  { id: 311, name: "Silviu Gherman", category: "youtuberi-ro", img: "silviu-gherman.jpg" },
  { id: 312, name: "Cristi Munteanu", category: "youtuberi-ro", img: "cristi-munteanu.jpg" },
  { id: 313, name: "Vlad Munteanu", category: "youtuberi-ro", img: "vlad-munteanu.jpg" },
  { id: 314, name: "Noaptea Târziu", category: "youtuberi-ro", img: "noaptea-tarziu.jpg" },
  { id: 315, name: "Zmenta", category: "youtuberi-ro", img: "zmenta.jpg" },
  { id: 316, name: "Mitzuu", category: "youtuberi-ro", img: "mitzuu.jpg" },
  { id: 317, name: "Pain", category: "youtuberi-ro", img: "pain.jpg" },
  { id: 318, name: "Gami OS", category: "youtuberi-ro", img: "gami-os.jpg" },
  { id: 319, name: "Dia Condurache", category: "youtuberi-ro", img: "dia-condurache.jpg" },
  { id: 320, name: "Denis Petcu", category: "youtuberi-ro", img: "denis-petcu.jpg" },

  // ==========================================
  // 4. ACTORI - ROMÂNIA (20)
  // ==========================================
  { id: 401, name: "Florin Piersic", category: "actori-ro", img: "florin-piersic.jpg" },
  { id: 402, name: "Mihai Bendeac", category: "actori-ro", img: "mihai-bendeac.jpg" },
  { id: 403, name: "Mihai Bobonete", category: "actori-ro", img: "mihai-bobonete.jpg" },
  { id: 404, name: "Marcel Iureș", category: "actori-ro", img: "marcel-iures.jpg" },
  { id: 405, name: "Maia Morgenstern", category: "actori-ro", img: "maia-morgenstern.jpg" },
  { id: 406, name: "Horațiu Mălăele", category: "actori-ro", img: "horatiu-malaele.jpg" },
  { id: 407, name: "Gheorghe Dinică", category: "actori-ro", img: "gheorghe-dinica.jpg" },
  { id: 408, name: "Micuțu", category: "actori-ro", img: "micutu.jpg" },
  { id: 409, name: "Adrian Văncică", category: "actori-ro", img: "adrian-vancica.jpg" },
  { id: 410, name: "Șerban Pavlu", category: "actori-ro", img: "serban-pavlu.jpg" },
  { id: 411, name: "Vlad Ivanov", category: "actori-ro", img: "vlad-ivanov.jpg" },
  { id: 412, name: "Pavel Bartoș", category: "actori-ro", img: "pavel-bartos.jpg" },
  { id: 413, name: "Andi Vasluianu", category: "actori-ro", img: "andi-vasluianu.jpg" },
  { id: 414, name: "Dragoș Bucur", category: "actori-ro", img: "dragos-bucur.jpg" },
  { id: 415, name: "Costel Bojog", category: "actori-ro", img: "costel-bojog.jpg" },
  { id: 416, name: "Cătălin Bordea", category: "actori-ro", img: "catalin-bordea.jpg" },
  { id: 417, name: "Claudiu Bleonț", category: "actori-ro", img: "claudiu-bleont.jpg" },
  { id: 418, name: "Radu Beligan", category: "actori-ro", img: "radu-beligan.jpg" },
  { id: 419, name: "Victor Rebengiuc", category: "actori-ro", img: "victor-rebengiuc.jpg" },
  { id: 420, name: "Gheorghe Ifrim", category: "actori-ro", img: "gheorghe-ifrim.jpg" },

  // ==========================================
  // 5. SINGERS - INTERNAȚIONAL (20)
  // ==========================================
  { id: 501, name: "The Weeknd", category: "singers-intl", img: "the-weeknd.jpg" },
  { id: 502, name: "Dua Lipa", category: "singers-intl", img: "dua-lipa.jpg" },
  { id: 503, name: "Eminem", category: "singers-intl", img: "eminem.jpg" },
  { id: 504, name: "Drake", category: "singers-intl", img: "drake.jpg" },
  { id: 505, name: "Billie Eilish", category: "singers-intl", img: "billie-eilish.jpg" },
  { id: 506, name: "Taylor Swift", category: "singers-intl", img: "taylor-swift.jpg" },
  { id: 507, name: "Bruno Mars", category: "singers-intl", img: "bruno-mars.jpg" },
  { id: 508, name: "Ed Sheeran", category: "singers-intl", img: "ed-sheeran.jpg" },
  { id: 509, name: "Rihanna", category: "singers-intl", img: "rihanna.jpg" },
  { id: 510, name: "Post Malone", category: "singers-intl", img: "post-malone.jpg" },
  { id: 511, name: "Ariana Grande", category: "singers-intl", img: "ariana-grande.jpg" },
  { id: 512, name: "Justin Bieber", category: "singers-intl", img: "justin-bieber.jpg" },
  { id: 513, name: "Kendrick Lamar", category: "singers-intl", img: "kendrick-lamar.jpg" },
  { id: 514, name: "Kanye West", category: "singers-intl", img: "kanye-west.jpg" },
  { id: 515, name: "Harry Styles", category: "singers-intl", img: "harry-styles.jpg" },
  { id: 516, name: "Adele", category: "singers-intl", img: "adele.jpg" },
  { id: 517, name: "Beyoncé", category: "singers-intl", img: "beyonce.jpg" },
  { id: 518, name: "Lady Gaga", category: "singers-intl", img: "lady-gaga.jpg" },
  { id: 519, name: "Justin Timberlake", category: "singers-intl", img: "justin-timberlake.jpg" },
  { id: 520, name: "Bad Bunny", category: "singers-intl", img: "bad-bunny.jpg" },

  // ==========================================
  // 6. TRAPPERI - INTERNAȚIONAL (20)
  // ==========================================
  { id: 601, name: "Travis Scott", category: "trapperi-intl", img: "travis-scott.jpg" },
  { id: 602, name: "Central Cee", category: "trapperi-intl", img: "central-cee.jpg" },
  { id: 603, name: "Playboi Carti", category: "trapperi-intl", img: "playboi-carti.jpg" },
  { id: 604, name: "Future", category: "trapperi-intl", img: "future.jpg" },
  { id: 605, name: "Lil Uzi Vert", category: "trapperi-intl", img: "lil-uzi-vert.jpg" },
  { id: 606, name: "21 Savage", category: "trapperi-intl", img: "21-savage.jpg" },
  { id: 607, name: "Gunna", category: "trapperi-intl", img: "gunna.jpg" },
  { id: 608, name: "Lil Baby", category: "trapperi-intl", img: "lil-baby.jpg" },
  { id: 609, name: "Young Thug", category: "trapperi-intl", img: "young-thug.jpg" },
  { id: 610, name: "Pop Smoke", category: "trapperi-intl", img: "pop-smoke.jpg" },
  { id: 611, name: "Juice WRLD", category: "trapperi-intl", img: "juice-wrld.jpg" },
  { id: 612, name: "XXXTentacion", category: "trapperi-intl", img: "xxxtentacion.jpg" },
  { id: 613, name: "Trippie Redd", category: "trapperi-intl", img: "trippie-redd.jpg" },
  { id: 614, name: "Roddy Ricch", category: "trapperi-intl", img: "roddy-ricch.jpg" },
  { id: 615, name: "Chief Keef", category: "trapperi-intl", img: "chief-keef.jpg" },
  { id: 616, name: "Gucci Mane", category: "trapperi-intl", img: "gucci-mane.jpg" },
  { id: 617, name: "Quavo", category: "trapperi-intl", img: "quavo.jpg" },
  { id: 618, name: "Offset", category: "trapperi-intl", img: "offset.jpg" },
  { id: 619, name: "Lil Yachty", category: "trapperi-intl", img: "lil-yachty.jpg" },
  { id: 620, name: "Lil Durk", category: "trapperi-intl", img: "lil-durk.jpg" },

  // ==========================================
  // 7. YOUTUBERI - INTERNAȚIONAL (20)
  // ==========================================
  { id: 701, name: "MrBeast", category: "youtuberi-intl", img: "mrbeast.jpg" },
  { id: 702, name: "IShowSpeed", category: "youtuberi-intl", img: "ishowspeed.jpg" },
  { id: 703, name: "PewDiePie", category: "youtuberi-intl", img: "pewdiepie.jpg" },
  { id: 704, name: "Kai Cenat", category: "youtuberi-intl", img: "kai-cenat.jpg" },
  { id: 705, name: "Logan Paul", category: "youtuberi-intl", img: "logan-paul.jpg" },
  { id: 706, name: "KSI", category: "youtuberi-intl", img: "ksi.jpg" },
  { id: 707, name: "Markiplier", category: "youtuberi-intl", img: "markiplier.jpg" },
  { id: 708, name: "Jacksepticeye", category: "youtuberi-intl", img: "jacksepticeye.jpg" },
  { id: 709, name: "Airrack", category: "youtuberi-intl", img: "airrack.jpg" },
  { id: 710, name: "DanTDM", category: "youtuberi-intl", img: "dantdm.jpg" },
  { id: 711, name: "Dude Perfect", category: "youtuberi-intl", img: "dude-perfect.jpg" },
  { id: 712, name: "Casey Neistat", category: "youtuberi-intl", img: "casey-neistat.jpg" },
  { id: 713, name: "Veritasium", category: "youtuberi-intl", img: "veritasium.jpg" },
  { id: 714, name: "MKBHD", category: "youtuberi-intl", img: "mkbhd.jpg" },
  { id: 715, name: "LazarBeam", category: "youtuberi-intl", img: "lazarbeam.jpg" },
  { id: 716, name: "Ali-A", category: "youtuberi-intl", img: "ali-a.jpg" },
  { id: 717, name: "Ninja", category: "youtuberi-intl", img: "ninja.jpg" },
  { id: 718, name: "Pokimane", category: "youtuberi-intl", img: "pokimane.jpg" },
  { id: 719, name: "Valkyrae", category: "youtuberi-intl", img: "valkyrae.jpg" },
  { id: 720, name: "Dream", category: "youtuberi-intl", img: "dream.jpg" },

  // ==========================================
  // 8. ACTORI - INTERNAȚIONAL (20)
  // ==========================================
  { id: 801, name: "Leonardo DiCaprio", category: "actori-intl", img: "leonardo-dicaprio.jpg" },
  { id: 802, name: "Cillian Murphy", category: "actori-intl", img: "cillian-murphy.jpg" },
  { id: 803, name: "Zendaya", category: "actori-intl", img: "zendaya.jpg" },
  { id: 804, name: "Brad Pitt", category: "actori-intl", img: "brad-pitt.jpg" },
  { id: 805, name: "Johnny Depp", category: "actori-intl", img: "johnny-depp.jpg" },
  { id: 806, name: "Robert Downey Jr.", category: "actori-intl", img: "robert-downey-jr.jpg" },
  { id: 807, name: "Keanu Reeves", category: "actori-intl", img: "keanu-reeves.jpg" },
  { id: 808, name: "Tom Cruise", category: "actori-intl", img: "tom-cruise.jpg" },
  { id: 809, name: "Christian Bale", category: "actori-intl", img: "christian-bale.jpg" },
  { id: 810, name: "Tom Hanks", category: "actori-intl", img: "tom-hanks.jpg" },
  { id: 811, name: "Margot Robbie", category: "actori-intl", img: "margot-robbie.jpg" },
  { id: 812, name: "Joaquin Phoenix", category: "actori-intl", img: "joaquin-phoenix.jpg" },
  { id: 813, name: "Ryan Gosling", category: "actori-intl", img: "ryan-gosling.jpg" },
  { id: 814, name: "Al Pacino", category: "actori-intl", img: "al-pacino.jpg" },
  { id: 815, name: "Morgan Freeman", category: "actori-intl", img: "morgan-freeman.jpg" },
  { id: 816, name: "Denzel Washington", category: "actori-intl", img: "denzel-washington.jpg" },
  { id: 817, name: "Timothée Chalamet", category: "actori-intl", img: "timothee-chalamet.jpg" },
  { id: 818, name: "Pedro Pascal", category: "actori-intl", img: "pedro-pascal.jpg" },
  { id: 819, name: "Scarlett Johansson", category: "actori-intl", img: "scarlett-johansson.jpg" },
  { id: 820, name: "Samuel L. Jackson", category: "actori-intl", img: "samuel-l-jackson.jpg" }
];

let gameState = "SELECT_OWN";
let mySecretCharacter = null;
let currentBoardList = [];

const lobbyScreen = document.getElementById('lobbyScreen');
const gameScreen = document.getElementById('gameScreen');
const gameCodeInput = document.getElementById('gameCode');
const categorySelect = document.getElementById('categorySelect');
const startLinkBtn = document.getElementById('startLinkBtn');
const backBtn = document.getElementById('backBtn');
const grid = document.getElementById('grid');
const targetStatus = document.getElementById('targetStatus');
const myCardContainer = document.getElementById('myCardContainer');
const myCardImg = document.getElementById('myCardImg');
const myCardName = document.getElementById('myCardName');

gameCodeInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
});

startLinkBtn.addEventListener('click', () => {
  const cat = categorySelect.value;
  const code = gameCodeInput.value.trim();

  if (!cat) {
    alert('Alege o categorie din meniu!');
    return;
  }

  if (code.length !== 4) {
    alert('Codul trebuie să conțină fix 4 cifre!');
    gameCodeInput.focus();
    return;
  }

  lobbyScreen.classList.remove('active');
  gameScreen.classList.add('active');

  setupBoard(cat);
});

backBtn.addEventListener('click', () => {
  gameScreen.classList.remove('active');
  lobbyScreen.classList.add('active');
});

function setupBoard(category) {
  let pool = charactersDB.filter(c => {
    if (category === 'mix-all') return true;
    if (category === 'mix-ro') return c.category.endsWith('-ro');
    if (category === 'mix-intl') return c.category.endsWith('-intl');
    if (category === 'trapperi-all') return c.category.startsWith('trapperi');
    if (category === 'youtuberi-all') return c.category.startsWith('youtuberi');
    if (category === 'actori-all') return c.category.startsWith('actori');
    return c.category === category;
  });

  if (pool.length === 0) pool = charactersDB;

  let list = [...pool].sort(() => 0.5 - Math.random());
  while (list.length < 28) {
    list = list.concat(pool);
  }
  currentBoardList = list.slice(0, 28);

  gameState = "SELECT_OWN";
  mySecretCharacter = null;
  if (myCardContainer) myCardContainer.style.display = "none";
  targetStatus.innerHTML = "👉 <b>Pasul 1:</b> Fă click pe cartonașul tău secret!";

  renderBoard();
}

function renderBoard() {
  grid.innerHTML = '';

  currentBoardList.forEach((char) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Fallback automat daca vreun fisier lipseste sau are extensie diferita
    const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(char.name)}&background=1a1d26&color=ffea79&size=300&bold=true`;

    card.innerHTML = `
      <img src="${char.img}" alt="${char.name}" onerror="this.onerror=null;this.src='${fallback}';" />
      <div class="card-label">${char.name}</div>
    `;

    card.addEventListener('click', () => {
      if (gameState === "SELECT_OWN") {
        mySecretCharacter = char;
        if (myCardImg) {
          myCardImg.src = char.img;
          myCardImg.onerror = () => { myCardImg.src = fallback; };
        }
        if (myCardName) myCardName.textContent = char.name;
        if (myCardContainer) myCardContainer.style.display = "flex";

        gameState = "PLAYING";
        targetStatus.innerHTML = "🎯 <b>Joc în desfășurare:</b> Elimină cărțile pe rând.";
        alert(`Ți-ai ales personajul: ${char.name}! A fost salvat în bara de sus.`);
        return;
      }

      card.classList.toggle('eliminated');
    });

    grid.appendChild(card);
  });
}
