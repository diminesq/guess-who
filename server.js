const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '')));

const charactersDB = [
  // 1. SINGERS - ROMÂNIA (20)
  { id: 101, name: "Inna", category: "singers-ro", base: "inna" },
  { id: 102, name: "Smiley", category: "singers-ro", base: "smiley" },
  { id: 103, name: "Delia", category: "singers-ro", base: "delia" },
  { id: 104, name: "Connect-R", category: "singers-ro", base: "connect-r" },
  { id: 105, name: "Andra", category: "singers-ro", base: "andra" },
  { id: 106, name: "Irina Rimes", category: "singers-ro", base: "irina-rimes" },
  { id: 107, name: "Carla's Dreams", category: "singers-ro", base: "carlas-dream" },
  { id: 108, name: "The Motans", category: "singers-ro", base: "the-motans" },
  { id: 109, name: "Alex Velea", category: "singers-ro", base: "alex-velea" },
  { id: 110, name: "Antonia", category: "singers-ro", base: "antonia" },
  { id: 111, name: "Marius Moga", category: "singers-ro", base: "marius-moga" },
  { id: 112, name: "Dan Bălan", category: "singers-ro", base: "dan-balan" },
  { id: 113, name: "Loredana Groza", category: "singers-ro", base: "loredana-groza" },
  { id: 114, name: "Florin Salam", category: "singers-ro", base: "florin-salam" },
  { id: 115, name: "Theo Rose", category: "singers-ro", base: "theo-rose" },
  { id: 116, name: "Mira", category: "singers-ro", base: "mira" },
  { id: 117, name: "Alina Eremia", category: "singers-ro", base: "alina-eremia" },
  { id: 118, name: "Horia Brenciu", category: "singers-ro", base: "horia-brenciu" },
  { id: 119, name: "Ștefan Bănică Jr.", category: "singers-ro", base: "stefan-banica" },
  { id: 120, name: "Tudor Chirilă", category: "singers-ro", base: "tudor-chirila" },

  // 2. TRAPPERI - ROMÂNIA (20)
  { id: 201, name: "Ian", category: "trapperi-ro", base: "ian" },
  { id: 202, name: "Oscar", category: "trapperi-ro", base: "oscar" },
  { id: 203, name: "YNY Sebi", category: "trapperi-ro", base: "yny-sebi" },
  { id: 204, name: "Berechet", category: "trapperi-ro", base: "berechet" },
  { id: 205, name: "Killa Fonic", category: "trapperi-ro", base: "killa-fonic" },
  { id: 206, name: "Nane", category: "trapperi-ro", base: "nane" },
  { id: 207, name: "Rava", category: "trapperi-ro", base: "rava" },
  { id: 208, name: "IDK", category: "trapperi-ro", base: "idk" },
  { id: 209, name: "AlbertNBN", category: "trapperi-ro", base: "albert-nbn" },
  { id: 210, name: "MGK666", category: "trapperi-ro", base: "mgk666" },
  { id: 211, name: "Gheboasă", category: "trapperi-ro", base: "gheboasa" },
  { id: 212, name: "Azel", category: "trapperi-ro", base: "azel" },
  { id: 213, name: "Mobtrap", category: "trapperi-ro", base: "mobtrap" },
  { id: 214, name: "Amuly", category: "trapperi-ro", base: "amuly" },
  { id: 215, name: "PRNY", category: "trapperi-ro", base: "prny" },
  { id: 216, name: "Marko Glass", category: "trapperi-ro", base: "marko-glass" },
  { id: 217, name: "Bvcovia", category: "trapperi-ro", base: "bvcovia" },
  { id: 218, name: "Tussin", category: "trapperi-ro", base: "tussin" },
  { id: 219, name: "Aerozen", category: "trapperi-ro", base: "aerozen" },
  { id: 220, name: "OG Eastbull", category: "trapperi-ro", base: "og-eastbull" },

  // 3. YOUTUBERI - ROMÂNIA (20)
  { id: 301, name: "Selly", category: "youtuberi-ro", base: "selly" },
  { id: 302, name: "Dorian Popa", category: "youtuberi-ro", base: "dorian-popa" },
  { id: 303, name: "Faiăr Silviu", category: "youtuberi-ro", base: "faiar-silviu" },
  { id: 304, name: "Zaiafet", category: "youtuberi-ro", base: "zaiafet" },
  { id: 305, name: "Creative Monkeyz", category: "youtuberi-ro", base: "creative-monkeys" },
  { id: 306, name: "Maxsialtele", category: "youtuberi-ro", base: "maxsialtele" },
  { id: 307, name: "LecturăDeLaA-Z", category: "youtuberi-ro", base: "lectura-de-la-a-z" },
  { id: 308, name: "Ilie's Vlogs", category: "youtuberi-ro", base: "ilies-vlogs" },
  { id: 309, name: "Bercea", category: "youtuberi-ro", base: "bercea" },
  { id: 310, name: "Atenție, Cad Mere!", category: "youtuberi-ro", base: "atentie-cad-mere" },
  { id: 311, name: "Silviu Gherman", category: "youtuberi-ro", base: "silviu-gherman" },
  { id: 312, name: "Cristi Munteanu", category: "youtuberi-ro", base: "cristi-munteanu" },
  { id: 313, name: "Vlad Munteanu", category: "youtuberi-ro", base: "vlad-munteanu" },
  { id: 314, name: "Noaptea Târziu", category: "youtuberi-ro", base: "noaptea-tarziu" },
  { id: 315, name: "Zmenta", category: "youtuberi-ro", base: "zmenta" },
  { id: 316, name: "Mitzuu", category: "youtuberi-ro", base: "mitzuu" },
  { id: 317, name: "Pain", category: "youtuberi-ro", base: "pain" },
  { id: 318, name: "Gami OS", category: "youtuberi-ro", base: "gami-os" },
  { id: 319, name: "Dia Condurache", category: "dia-condurache", base: "dia-condurache" },
  { id: 320, name: "Denis Petcu", category: "youtuberi-ro", base: "denis-petcu" },

  // 4. ACTORI - ROMÂNIA (20)
  { id: 401, name: "Florin Piersic", category: "actori-ro", base: "florin-piersic" },
  { id: 402, name: "Mihai Bendeac", category: "actori-ro", base: "mihai-bendeac" },
  { id: 403, name: "Mihai Bobonete", category: "actori-ro", base: "mihai-bobonete" },
  { id: 404, name: "Marcel Iureș", category: "actori-ro", base: "marcel-iures" },
  { id: 405, name: "Maia Morgenstern", category: "actori-ro", base: "maia-morgens" },
  { id: 406, name: "Horațiu Mălăele", category: "actori-ro", base: "horatiu-malaele" },
  { id: 407, name: "Gheorghe Dinică", category: "actori-ro", base: "gheorghe-dinica" },
  { id: 408, name: "Micuțu", category: "actori-ro", base: "micutu" },
  { id: 409, name: "Adrian Văncică", category: "actori-ro", base: "adrian-vancica" },
  { id: 410, name: "Șerban Pavlu", category: "actori-ro", base: "serban-pavlu" },
  { id: 411, name: "Vlad Ivanov", category: "actori-ro", base: "vlad-ivanov" },
  { id: 412, name: "Pavel Bartoș", category: "actori-ro", base: "pavel-bartos" },
  { id: 413, name: "Andi Vasluianu", category: "actori-ro", base: "andi-vasluianu" },
  { id: 414, name: "Dragoș Bucur", category: "actori-ro", base: "dragos-bucur" },
  { id: 415, name: "Costel Bojog", category: "actori-ro", base: "costel-bojog" },
  { id: 416, name: "Cătălin Bordea", category: "actori-ro", base: "catalin-bordea" },
  { id: 417, name: "Claudiu Bleonț", category: "actori-ro", base: "claudiu-bleont" },
  { id: 418, name: "Radu Beligan", category: "actori-ro", base: "radu-beligan" },
  { id: 419, name: "Victor Rebengiuc", category: "actori-ro", base: "victor-rebengiuc" },
  { id: 420, name: "Gheorghe Ifrim", category: "actori-ro", base: "gheorghe-ifrim" },

  // 5. SINGERS - INTERNAȚIONAL (20)
  { id: 501, name: "The Weeknd", category: "singers-intl", base: "the-weeknd" },
  { id: 502, name: "Dua Lipa", category: "singers-intl", base: "dua-lipa" },
  { id: 503, name: "Eminem", category: "singers-intl", base: "eminem" },
  { id: 504, name: "Drake", category: "singers-intl", base: "drake" },
  { id: 505, name: "Billie Eilish", category: "singers-intl", base: "billie-eilish" },
  { id: 506, name: "Taylor Swift", category: "singers-intl", base: "taylor-swift" },
  { id: 507, name: "Bruno Mars", category: "singers-intl", base: "bruno-mars" },
  { id: 508, name: "Ed Sheeran", category: "singers-intl", base: "ed-sheeran" },
  { id: 509, name: "Rihanna", category: "singers-intl", base: "rihanna" },
  { id: 510, name: "Post Malone", category: "singers-intl", base: "post-malone" },
  { id: 511, name: "Ariana Grande", category: "singers-intl", base: "ariana-grande" },
  { id: 512, name: "Justin Bieber", category: "singers-intl", base: "justin-bieber" },
  { id: 513, name: "Kendrick Lamar", category: "singers-intl", base: "kendrick-lamar" },
  { id: 514, name: "Kanye West", category: "singers-intl", base: "kanye-west" },
  { id: 515, name: "Harry Styles", category: "singers-intl", base: "harry-styles" },
  { id: 516, name: "Adele", category: "singers-intl", base: "adele" },
  { id: 517, name: "Beyoncé", category: "singers-intl", base: "beyonce" },
  { id: 518, name: "Lady Gaga", category: "singers-intl", base: "lady-gaga" },
  { id: 519, name: "Justin Timberlake", category: "singers-intl", base: "justin-timberlake" },
  { id: 520, name: "Bad Bunny", category: "singers-intl", base: "bad-bunny" },

  // 6. TRAPPERI - INTERNAȚIONAL (20)
  { id: 601, name: "Travis Scott", category: "trapperi-intl", base: "travis-scott" },
  { id: 602, name: "Central Cee", category: "trapperi-intl", base: "central-cee" },
  { id: 603, name: "Playboi Carti", category: "trapperi-intl", base: "playboi-carti" },
  { id: 604, name: "Future", category: "trapperi-intl", base: "future" },
  { id: 605, name: "Lil Uzi Vert", category: "trapperi-intl", base: "lil-uzi-vert" },
  { id: 606, name: "21 Savage", category: "trapperi-intl", base: "21-savage" },
  { id: 607, name: "Gunna", category: "trapperi-intl", base: "gunna" },
  { id: 608, name: "Lil Baby", category: "trapperi-intl", base: "lil-baby" },
  { id: 609, name: "Young Thug", category: "trapperi-intl", base: "young-thug" },
  { id: 610, name: "Pop Smoke", category: "trapperi-intl", base: "pop-smoke" },
  { id: 611, name: "Juice WRLD", category: "trapperi-intl", base: "juice-wrld" },
  { id: 612, name: "XXXTentacion", category: "trapperi-intl", base: "xxxtentacion" },
  { id: 613, name: "Trippie Redd", category: "trapperi-intl", base: "trippie-redd" },
  { id: 614, name: "Roddy Ricch", category: "trapperi-intl", base: "roddy-ricch" },
  { id: 615, name: "Chief Keef", category: "trapperi-intl", base: "chief-keef" },
  { id: 616, name: "Gucci Mane", category: "trapperi-intl", base: "gucci-mane" },
  { id: 617, name: "Quavo", category: "trapperi-intl", base: "quavo" },
  { id: 618, name: "Offset", category: "trapperi-intl", base: "offset" },
  { id: 619, name: "Lil Yachty", category: "trapperi-intl", base: "lil-yachty" },
  { id: 620, name: "Lil Durk", category: "trapperi-intl", base: "lil-durk" },

  // 7. YOUTUBERI - INTERNAȚIONAL (20)
  { id: 701, name: "MrBeast", category: "youtuberi-intl", base: "mrbeast" },
  { id: 702, name: "IShowSpeed", category: "youtuberi-intl", base: "ishowspeed" },
  { id: 703, name: "PewDiePie", category: "youtuberi-intl", base: "pewdiepie" },
  { id: 704, name: "Kai Cenat", category: "youtuberi-intl", base: "kai-cenat" },
  { id: 705, name: "Logan Paul", category: "youtuberi-intl", base: "logan-paul" },
  { id: 706, name: "KSI", category: "youtuberi-intl", base: "ksi" },
  { id: 707, name: "Markiplier", category: "youtuberi-intl", base: "markiplier" },
  { id: 708, name: "Jacksepticeye", category: "youtuberi-intl", base: "jacksepticeye" },
  { id: 709, name: "Airrack", category: "youtuberi-intl", base: "airrack" },
  { id: 710, name: "DanTDM", category: "youtuberi-intl", base: "dantdm" },
  { id: 711, name: "Dude Perfect", category: "youtuberi-intl", base: "dude-perfect" },
  { id: 712, name: "Casey Neistat", category: "youtuberi-intl", base: "casey-neistat" },
  { id: 713, name: "Veritasium", category: "youtuberi-intl", base: "veritasium" },
  { id: 714, name: "MKBHD", category: "youtuberi-intl", base: "mkbhd" },
  { id: 715, name: "LazarBeam", category: "youtuberi-intl", base: "lazarbeam" },
  { id: 716, name: "Ali-A", category: "youtuberi-intl", base: "ali-a" },
  { id: 717, name: "Ninja", category: "youtuberi-intl", base: "ninja" },
  { id: 718, name: "Pokimane", category: "youtuberi-intl", base: "pokimane" },
  { id: 719, name: "Valkyrae", category: "youtuberi-intl", base: "valkyrae" },
  { id: 720, name: "Dream", category: "youtuberi-intl", base: "dream" },

  // 8. ACTORI - INTERNAȚIONAL (20)
  { id: 801, name: "Leonardo DiCaprio", category: "actori-intl", base: "leonardo-dicaprio" },
  { id: 802, name: "Cillian Murphy", category: "actori-intl", base: "cillian-murphy" },
  { id: 803, name: "Zendaya", category: "actori-intl", base: "zendaya" },
  { id: 804, name: "Brad Pitt", category: "actori-intl", base: "brad-pitt" },
  { id: 805, name: "Johnny Depp", category: "actori-intl", base: "johnny-depp" },
  { id: 806, name: "Robert Downey Jr.", category: "actori-intl", base: "robert-downey-jr" },
  { id: 807, name: "Keanu Reeves", category: "actori-intl", base: "keanu-reeves" },
  { id: 808, name: "Tom Cruise", category: "actori-intl", base: "tom-cruise" },
  { id: 809, name: "Christian Bale", category: "actori-intl", base: "christian-bale" },
  { id: 810, name: "Tom Hanks", category: "actori-intl", base: "tom-hanks" },
  { id: 811, name: "Margot Robbie", category: "actori-intl", base: "margot-robbie" },
  { id: 812, name: "Joaquin Phoenix", category: "actori-intl", base: "joaquin-phoenix" },
  { id: 813, name: "Ryan Gosling", category: "actori-intl", base: "ryan-gosling" },
  { id: 814, name: "Al Pacino", category: "actori-intl", base: "al-pacino" },
  { id: 815, name: "Morgan Freeman", category: "actori-intl", base: "morgan-freeman" },
  { id: 816, name: "Denzel Washington", category: "actori-intl", base: "denzel-washington" },
  { id: 817, name: "Timothée Chalamet", category: "actori-intl", base: "timothee-chalamet" },
  { id: 818, name: "Pedro Pascal", category: "actori-intl", base: "pedro-pascal" },
  { id: 819, name: "Scarlett Johansson", category: "actori-intl", base: "scarlett-johansson" },
  { id: 820, name: "Samuel L. Jackson", category: "actori-intl", base: "samuel-l-jackson" }
];

const rooms = {};

function generateBoard(category) {
  let pool = charactersDB.filter(c => {
    if (category === 'mix-all') return true;
    if (category === 'mix-ro') return c.category.endsWith('-ro');
    if (category === 'mix-intl') return c.category.endsWith('-intl');
    return c.category === category;
  });

  if (pool.length === 0) pool = charactersDB;

  let shuffled = [...pool].sort(() => 0.5 - Math.random());
  const count = pool.length <= 20 ? pool.length : 28;
  return shuffled.slice(0, count);
}

io.on('connection', (socket) => {
  socket.on('check_room', (code, callback) => {
    if (rooms[code]) {
      callback({ exists: true, category: rooms[code].category });
    } else {
      callback({ exists: false });
    }
  });

  socket.on('join_game', ({ name, code, category }) => {
    socket.playerName = name;
    socket.roomCode = code;

    if (!rooms[code]) {
      rooms[code] = {
        code,
        category: category || 'mix-all',
        players: [],
        board: generateBoard(category || 'mix-all')
      };
    }

    const room = rooms[code];

    if (room.players.length >= 2 && !room.players.some(p => p.id === socket.id)) {
      return socket.emit('error_msg', 'Camera este plină (maxim 2 jucători)!');
    }

    socket.join(code);

    let playerObj = room.players.find(p => p.id === socket.id);
    if (!playerObj) {
      playerObj = {
        id: socket.id,
        name: name,
        secretChar: null,
        ready: false
      };
      room.players.push(playerObj);
    }

    socket.emit('game_init', {
      board: room.board,
      category: room.category,
      isCreator: room.players[0].id === socket.id
    });

    io.to(code).emit('room_status', {
      playerCount: room.players.length,
      players: room.players.map(p => ({ name: p.name, ready: p.ready }))
    });
  });

  socket.on('select_secret', (char) => {
    const room = rooms[socket.roomCode];
    if (!room) return;

    const player = room.players.find(p => p.id === socket.id);
    if (player) {
      player.secretChar = char;
      player.ready = true;
    }

    io.to(socket.roomCode).emit('room_status', {
      playerCount: room.players.length,
      players: room.players.map(p => ({ name: p.name, ready: p.ready }))
    });

    if (room.players.length === 2 && room.players.every(p => p.ready)) {
      io.to(socket.roomCode).emit('both_ready');
    }
  });

  socket.on('make_guess', (guessedChar) => {
    const room = rooms[socket.roomCode];
    if (!room) return;

    const guesser = room.players.find(p => p.id === socket.id);
    const opponent = room.players.find(p => p.id !== socket.id);

    if (!opponent || !opponent.secretChar) {
      return socket.emit('error_msg', 'Adversarul nu și-a ales încă personajul secret!');
    }

    const isCorrect = opponent.secretChar.id === guessedChar.id;
    const winnerName = isCorrect ? guesser.name : opponent.name;
    const loserName = isCorrect ? opponent.name : guesser.name;

    // Trimite fiecărui jucător în parte rezultatul și personajul secret al ADVERSARULUI său
    room.players.forEach((player) => {
      const opp = room.players.find(p => p.id !== player.id);
      io.to(player.id).emit('game_over', {
        winner: winnerName,
        loser: loserName,
        opponentSecret: opp ? opp.secretChar : null,
        guesser: guesser.name,
        guessedChar: guessedChar,
        correct: isCorrect
      });
    });
  });

  socket.on('request_rematch', () => {
    const room = rooms[socket.roomCode];
    if (!room) return;

    room.board = generateBoard(room.category);
    room.players.forEach(p => {
      p.secretChar = null;
      p.ready = false;
    });

    io.to(socket.roomCode).emit('game_reset', {
      board: room.board
    });
  });

  socket.on('disconnect', () => {
    const code = socket.roomCode;
    if (code && rooms[code]) {
      rooms[code].players = rooms[code].players.filter(p => p.id !== socket.id);
      if (rooms[code].players.length === 0) {
        delete rooms[code];
      } else {
        io.to(code).emit('player_disconnected', socket.playerName);
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});
