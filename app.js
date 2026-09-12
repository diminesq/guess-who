// Proxy CDN gratuit care elimină blocajele CORS / 403 Forbidden
function getSafeImg(url) {
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=300&h=300&fit=cover&a=top`;
}

const charactersDB = [
  // ==========================================
  // 1. SINGERS - ROMÂNIA (20)
  // ==========================================
  { id: 101, name: "Inna", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Inna_2018.png/440px-Inna_2018.png") },
  { id: 102, name: "Smiley", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Smiley_2017.jpg/440px-Smiley_2017.jpg") },
  { id: 103, name: "Delia", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Delia_Matache_2016.jpg/440px-Delia_Matache_2016.jpg") },
  { id: 104, name: "Connect-R", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Connect-R_2012.jpg/440px-Connect-R_2012.jpg") },
  { id: 105, name: "Andra", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Andra_2016.jpg/440px-Andra_2016.jpg") },
  { id: 106, name: "Irina Rimes", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Irina_Rimes_2018.jpg/440px-Irina_Rimes_2018.jpg") },
  { id: 107, name: "Carla's Dreams", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Carla%27s_Dreams_2016.jpg/440px-Carla%27s_Dreams_2016.jpg") },
  { id: 108, name: "The Motans", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/The_Motans_2018.jpg/440px-The_Motans_2018.jpg") },
  { id: 109, name: "Alex Velea", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Alex_Velea_2012.jpg/440px-Alex_Velea_2012.jpg") },
  { id: 110, name: "Antonia", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Antonia_Iacobescu_2013.jpg/440px-Antonia_Iacobescu_2013.jpg") },
  { id: 111, name: "Marius Moga", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Marius_Moga_2012.jpg/440px-Marius_Moga_2012.jpg") },
  { id: 112, name: "Dan Bălan", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dan_Balan_2011.jpg/440px-Dan_Balan_2011.jpg") },
  { id: 113, name: "Loredana Groza", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Loredana_Groza_2012.jpg/440px-Loredana_Groza_2012.jpg") },
  { id: 114, name: "Florin Salam", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Florin_Salam_2011.jpg/440px-Florin_Salam_2011.jpg") },
  { id: 115, name: "Theo Rose", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Theo_Rose_2022.jpg/440px-Theo_Rose_2022.jpg") },
  { id: 116, name: "Mira", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Mira_2020.jpg/440px-Mira_2020.jpg") },
  { id: 117, name: "Alina Eremia", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Alina_Eremia_2018.jpg/440px-Alina_Eremia_2018.jpg") },
  { id: 118, name: "Horia Brenciu", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Horia_Brenciu_2012.jpg/440px-Horia_Brenciu_2012.jpg") },
  { id: 119, name: "Ștefan Bănică Jr.", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Stefan_Banica_Jr_2011.jpg/440px-Stefan_Banica_Jr_2011.jpg") },
  { id: 120, name: "Tudor Chirilă", category: "singers-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Tudor_Chirila_2012.jpg/440px-Tudor_Chirila_2012.jpg") },

  // ==========================================
  // 2. TRAPPERI - ROMÂNIA (20)
  // ==========================================
  { id: 201, name: "Ian", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/0d995c6c21fe616788db123b361a6c42.1000x1000x1.jpg") },
  { id: 202, name: "Oscar", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/b95fae4ca518774771eb8ecfe523d4ee.1000x1000x1.jpg") },
  { id: 203, name: "YNY Sebi", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/5801bfda3e30f1d6bfe505d9c18d3a1f.1000x1000x1.jpg") },
  { id: 204, name: "Berechet", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/974b78bc70d37537651a1415df8ecdfb.1000x1000x1.jpg") },
  { id: 205, name: "Killa Fonic", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/3fb2c83692ea407c77c903ebc368297a.1000x1000x1.jpg") },
  { id: 206, name: "Nane", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/917a1a09d3b074ef9995513d7b4092b7.1000x1000x1.jpg") },
  { id: 207, name: "Rava", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/9f50cb90b63c7849eeccece0b48450f3.1000x1000x1.jpg") },
  { id: 208, name: "IDK", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/b59ad8be9eb1b7829712a488dc6aeb01.1000x1000x1.jpg") },
  { id: 209, name: "AlbertNBN", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/ec67b789139872eeaa46ee88574a496b.1000x1000x1.jpg") },
  { id: 210, name: "MGK666", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/530fe4ee29cf2a91e5e01dfae51e1819.1000x1000x1.jpg") },
  { id: 211, name: "Gheboasă", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/7b3ae05877aaebae13e4b7b51b2e5359.1000x1000x1.jpg") },
  { id: 212, name: "Azel", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/e2a11b66df825b03517c5b6b15efb582.1000x1000x1.jpg") },
  { id: 213, name: "Mobtrap", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/b70b5d9241d3cf9d9b6264d8525b6a38.1000x1000x1.jpg") },
  { id: 214, name: "Amuly", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/a42b10df49684fa9bfcf8f5e56d7870f.1000x1000x1.jpg") },
  { id: 215, name: "PRNY", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/f9bb0cfce4e7b897e9dfcb12a52df03d.1000x1000x1.jpg") },
  { id: 216, name: "Marko Glass", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/b7dcf8a8dc4e8dbdc91d3cb9a94157ba.1000x1000x1.jpg") },
  { id: 217, name: "Bvcovia", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/ecbc7bbecdbcb17c24f6f19665bc7f4c.1000x1000x1.jpg") },
  { id: 218, name: "Tussin", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/b2e2d5ec019ffdb4f4bf781b2447eb59.1000x1000x1.jpg") },
  { id: 219, name: "Aerozen", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/fc2ce7487229e3a6a9be8bc19d3ee3d4.1000x1000x1.jpg") },
  { id: 220, name: "OG Eastbull", category: "trapperi-ro", img: getSafeImg("https://images.genius.com/20d84f8ee96f4c7811ef9e31d798a3c8.1000x1000x1.jpg") },

  // ==========================================
  // 3. YOUTUBERI - ROMÂNIA (20)
  // ==========================================
  { id: 301, name: "Selly", category: "youtuberi-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Selly_2019.jpg/440px-Selly_2019.jpg") },
  { id: 302, name: "Dorian Popa", category: "youtuberi-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Dorian_Popa_2019.jpg/440px-Dorian_Popa_2019.jpg") },
  { id: 303, name: "Faiăr Silviu", category: "youtuberi-ro", img: getSafeImg("https://static-cdn.jtvnw.net/jtv_user_pictures/c6e3b5e4-ff1f-4100-84a7-8fc4d1ceae4c-profile_image-300x300.png") },
  { id: 304, name: "Zaiafet", category: "youtuberi-ro", img: getSafeImg("https://static-cdn.jtvnw.net/jtv_user_pictures/4aa1034f-3a6d-495a-b620-1b777a83bb9f-profile_image-300x300.png") },
  { id: 305, name: "Creative Monkeyz", category: "youtuberi-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/ro/thumb/2/29/Logo_Creative_Monkeyz.jpg/440px-Logo_Creative_Monkeyz.jpg") },
  { id: 306, name: "Maxsialtele", category: "youtuberi-ro", img: getSafeImg("https://static-cdn.jtvnw.net/jtv_user_pictures/maxsialtele-profile_image-97f2aa2a8435d794-300x300.png") },
  { id: 307, name: "LecturăDeLaA-Z", category: "youtuberi-ro", img: getSafeImg("https://static-cdn.jtvnw.net/jtv_user_pictures/lecturadelaa_z-profile_image-66d4076e9c99147e-300x300.jpeg") },
  { id: 308, name: "Ilie's Vlogs", category: "youtuberi-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Ilie%27s_Vlogs_2018.jpg/440px-Ilie%27s_Vlogs_2018.jpg") },
  { id: 309, name: "Bercea", category: "youtuberi-ro", img: getSafeImg("https://static-cdn.jtvnw.net/jtv_user_pictures/berceawow-profile_image-40a1d6360662d592-300x300.png") },
  { id: 310, name: "Atenție, Cad Mere!", category: "youtuberi-ro", img: getSafeImg("https://images.weserv.nl/?url=https://avatarfiles.alphacoders.com/241/241697.jpg&w=300&h=300&fit=cover") },
  { id: 311, name: "Silviu Gherman", category: "youtuberi-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Silviu_Gherman_2018.jpg/440px-Silviu_Gherman_2018.jpg") },
  { id: 312, name: "Cristi Munteanu", category: "youtuberi-ro", img: getSafeImg("https://images.genius.com/8bb0d9a6c7bbda7c2bbdfac9b0ffca27.600x600x1.jpg") },
  { id: 313, name: "Vlad Munteanu", category: "youtuberi-ro", img: getSafeImg("https://images.genius.com/c6f71661ea7ae9d06b2e1bf77bbab161.600x600x1.jpg") },
  { id: 314, name: "Noaptea Târziu", category: "youtuberi-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Noaptea_Tarziu_2017.jpg/440px-Noaptea_Tarziu_2017.jpg") },
  { id: 315, name: "Zmenta", category: "youtuberi-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Zmenta_2014.jpg/440px-Zmenta_2014.jpg") },
  { id: 316, name: "Mitzuu", category: "youtuberi-ro", img: getSafeImg("https://static-cdn.jtvnw.net/jtv_user_pictures/mitzuuofficial-profile_image-0d4cf92c26c117d9-300x300.png") },
  { id: 317, name: "Pain", category: "youtuberi-ro", img: getSafeImg("https://images.genius.com/b97950c05ef1ad7eeea8ea946d99da70.600x600x1.jpg") },
  { id: 318, name: "Gami OS", category: "youtuberi-ro", img: getSafeImg("https://images.genius.com/264b38d7bb6cc5ba557f3cb7217db5c5.600x600x1.jpg") },
  { id: 319, name: "Dia Condurache", category: "youtuberi-ro", img: getSafeImg("https://images.genius.com/437e42d7681c62f2bc8a6358c9f0b2f8.600x600x1.jpg") },
  { id: 320, name: "Denis Petcu", category: "youtuberi-ro", img: getSafeImg("https://static-cdn.jtvnw.net/jtv_user_pictures/denispetcu-profile_image-84bf0ef2ff17da8c-300x300.png") },

  // ==========================================
  // 4. ACTORI - ROMÂNIA (20)
  // ==========================================
  { id: 401, name: "Florin Piersic", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Florin_Piersic_2012.jpg/440px-Florin_Piersic_2012.jpg") },
  { id: 402, name: "Mihai Bendeac", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Mihai_Bendeac.jpg/440px-Mihai_Bendeac.jpg") },
  { id: 403, name: "Mihai Bobonete", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mihai_Bobonete.jpg/440px-Mihai_Bobonete.jpg") },
  { id: 404, name: "Marcel Iureș", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Marcel_Iures_2014.jpg/440px-Marcel_Iures_2014.jpg") },
  { id: 405, name: "Maia Morgenstern", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Maia_Morgenstern_2016.jpg/440px-Maia_Morgenstern_2016.jpg") },
  { id: 406, name: "Horațiu Mălăele", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Horatiu_Malaele_2012.jpg/440px-Horatiu_Malaele_2012.jpg") },
  { id: 407, name: "Gheorghe Dinică", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gheorghe_Dinica.jpg/440px-Gheorghe_Dinica.jpg") },
  { id: 408, name: "Micuțu (Cosmin)", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cosmin_Nedelcu.jpg/440px-Cosmin_Nedelcu.jpg") },
  { id: 409, name: "Adrian Văncică", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Adrian_Vancica.jpg/440px-Adrian_Vancica.jpg") },
  { id: 410, name: "Șerban Pavlu", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Serban_Pavlu.jpg/440px-Serban_Pavlu.jpg") },
  { id: 411, name: "Vlad Ivanov", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vlad_Ivanov_2016.jpg/440px-Vlad_Ivanov_2016.jpg") },
  { id: 412, name: "Pavel Bartoș", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pavel_Bartos_2012.jpg/440px-Pavel_Bartos_2012.jpg") },
  { id: 413, name: "Andi Vasluianu", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Andi_Vasluianu.jpg/440px-Andi_Vasluianu.jpg") },
  { id: 414, name: "Dragoș Bucur", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dragos_Bucur_2012.jpg/440px-Dragos_Bucur_2012.jpg") },
  { id: 415, name: "Costel Bojog", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Costel_Bojog.jpg/440px-Costel_Bojog.jpg") },
  { id: 416, name: "Cătălin Bordea", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Catalin_Bordea.jpg/440px-Catalin_Bordea.jpg") },
  { id: 417, name: "Claudiu Bleonț", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Claudiu_Bleont_2012.jpg/440px-Claudiu_Bleont_2012.jpg") },
  { id: 418, name: "Radu Beligan", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Radu_Beligan.jpg/440px-Radu_Beligan.jpg") },
  { id: 419, name: "Victor Rebengiuc", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Victor_Rebengiuc_2012.jpg/440px-Victor_Rebengiuc_2012.jpg") },
  { id: 420, name: "Gheorghe Ifrim", category: "actori-ro", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gheorghe_Ifrim.jpg/440px-Gheorghe_Ifrim.jpg") },

  // ==========================================
  // 5. SINGERS - INTERNAȚIONAL (20)
  // ==========================================
  { id: 501, name: "The Weeknd", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Weeknd_Cannes_2023.png/440px-The_Weeknd_Cannes_2023.png") },
  { id: 502, name: "Dua Lipa", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dua_Lipa_2018.jpg/440px-Dua_Lipa_2018.jpg") },
  { id: 503, name: "Eminem", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%28cropped%29.jpg/440px-Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%28cropped%29.jpg") },
  { id: 504, name: "Drake", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/440px-Drake_July_2016.jpg") },
  { id: 505, name: "Billie Eilish", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Billie_Eilish_at_the_2024_Golden_Globes_%28cropped%29.jpg/440px-Billie_Eilish_at_the_2024_Golden_Globes_%28cropped%29.jpg") },
  { id: 506, name: "Taylor Swift", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards.png/440px-191125_Taylor_Swift_at_the_2019_American_Music_Awards.png") },
  { id: 507, name: "Bruno Mars", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bruno_Mars%2C_Las_Vegas_2017.jpg/440px-Bruno_Mars%2C_Las_Vegas_2017.jpg") },
  { id: 508, name: "Ed Sheeran", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/440px-Ed_Sheeran-6886_%28cropped%29.jpg") },
  { id: 509, name: "Rihanna", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/440px-Rihanna_Fenty_2018.png") },
  { id: 510, name: "Post Malone", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Post_Malone_Stavernfestivalen_2018_%28214227%29_%28cropped%29.jpg/440px-Post_Malone_Stavernfestivalen_2018_%28214227%29_%28cropped%29.jpg") },
  { id: 511, name: "Ariana Grande", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Ariana_Grande_at_the_2020_Grammy_Awards.svg/440px-Ariana_Grande_at_the_2020_Grammy_Awards.svg.png") },
  { id: 512, name: "Justin Bieber", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg") },
  { id: 513, name: "Kendrick Lamar", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kendrick_Lamar_2018.jpg/440px-Kendrick_Lamar_2018.jpg") },
  { id: 514, name: "Kanye West", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/440px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg") },
  { id: 515, name: "Harry Styles", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Harry_Styles_November_2017.jpg/440px-Harry_Styles_November_2017.jpg") },
  { id: 516, name: "Adele", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Adele_2016.jpg/440px-Adele_2016.jpg") },
  { id: 517, name: "Beyoncé", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png/440px-Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png") },
  { id: 518, name: "Lady Gaga", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lady_Gaga_at_the_2023_Oscars_%28cropped%29.jpg/440px-Lady_Gaga_at_the_2023_Oscars_%28cropped%29.jpg") },
  { id: 519, name: "Justin Timberlake", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Justin_Timberlake_2019.jpg/440px-Justin_Timberlake_2019.jpg") },
  { id: 520, name: "Bad Bunny", category: "singers-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg/440px-Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg") },

  // ==========================================
  // 6. TRAPPERI - INTERNAȚIONAL (20)
  // ==========================================
  { id: 601, name: "Travis Scott", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Travis_Scott_-_Openair_Frauenfeld_2019_08_%28cropped%29.jpg/440px-Travis_Scott_-_Openair_Frauenfeld_2019_08_%28cropped%29.jpg") },
  { id: 602, name: "Central Cee", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Central_Cee_2022.jpg/440px-Central_Cee_2022.jpg") },
  { id: 603, name: "Playboi Carti", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playboi_Carti_2021.jpg/440px-Playboi_Carti_2021.jpg") },
  { id: 604, name: "Future", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Future_2019.jpg/440px-Future_2019.jpg") },
  { id: 605, name: "Lil Uzi Vert", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lil_Uzi_Vert_2017.jpg/440px-Lil_Uzi_Vert_2017.jpg") },
  { id: 606, name: "21 Savage", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/21_Savage_2018.jpg/440px-21_Savage_2018.jpg") },
  { id: 607, name: "Gunna", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gunna_2020.jpg/440px-Gunna_2020.jpg") },
  { id: 608, name: "Lil Baby", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lil_Baby_2020.jpg/440px-Lil_Baby_2020.jpg") },
  { id: 609, name: "Young Thug", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Young_Thug_2019.jpg/440px-Young_Thug_2019.jpg") },
  { id: 610, name: "Pop Smoke", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pop_Smoke_2020.jpg/440px-Pop_Smoke_2020.jpg") },
  { id: 611, name: "Juice WRLD", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Juice_WRLD_2018.jpg/440px-Juice_WRLD_2018.jpg") },
  { id: 612, name: "XXXTentacion", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Xxxtentacion_%28cropped%29.jpg/440px-Xxxtentacion_%28cropped%29.jpg") },
  { id: 613, name: "Trippie Redd", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Trippie_Redd_2018.jpg/440px-Trippie_Redd_2018.jpg") },
  { id: 614, name: "Roddy Ricch", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roddy_Ricch_2020.jpg/440px-Roddy_Ricch_2020.jpg") },
  { id: 615, name: "Chief Keef", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Chief_Keef_2014.jpg/440px-Chief_Keef_2014.jpg") },
  { id: 616, name: "Gucci Mane", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Gucci_Mane_2017.jpg/440px-Gucci_Mane_2017.jpg") },
  { id: 617, name: "Migos (Quavo)", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Quavo_2018.jpg/440px-Quavo_2018.jpg") },
  { id: 618, name: "Offset", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Offset_2019.jpg/440px-Offset_2019.jpg") },
  { id: 619, name: "Lil Yachty", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lil_Yachty_2018.jpg/440px-Lil_Yachty_2018.jpg") },
  { id: 620, name: "Lil Durk", category: "trapperi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Lil_Durk_2020.jpg/440px-Lil_Durk_2020.jpg") },

  // ==========================================
  // 7. YOUTUBERI - INTERNAȚIONAL (20)
  // ==========================================
  { id: 701, name: "MrBeast", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/MrBeast_2023_%28cropped%29.jpg/440px-MrBeast_2023_%28cropped%29.jpg") },
  { id: 702, name: "IShowSpeed", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/IShowSpeed_2023.jpg/440px-IShowSpeed_2023.jpg") },
  { id: 703, name: "PewDiePie", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/PewDiePie_at_summit_cropped.jpg/440px-PewDiePie_at_summit_cropped.jpg") },
  { id: 704, name: "Kai Cenat", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Kai_Cenat_2023.jpg/440px-Kai_Cenat_2023.jpg") },
  { id: 705, name: "Logan Paul", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Logan_Paul_2022.jpg/440px-Logan_Paul_2022.jpg") },
  { id: 706, name: "KSI", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/KSI_2019.jpg/440px-KSI_2019.jpg") },
  { id: 707, name: "Markiplier", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Markiplier_2019.jpg/440px-Markiplier_2019.jpg") },
  { id: 708, name: "Jacksepticeye", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Jacksepticeye_2018.jpg/440px-Jacksepticeye_2018.jpg") },
  { id: 709, name: "Airrack", category: "youtuberi-intl", img: getSafeImg("https://static-cdn.jtvnw.net/jtv_user_pictures/airrack-profile_image-300x300.png") },
  { id: 710, name: "DanTDM", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DanTDM_2017.jpg/440px-DanTDM_2017.jpg") },
  { id: 711, name: "Dude Perfect", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Dude_Perfect_2018.jpg/440px-Dude_Perfect_2018.jpg") },
  { id: 712, name: "Casey Neistat", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Casey_Neistat_2017.jpg/440px-Casey_Neistat_2017.jpg") },
  { id: 713, name: "Veritasium", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Derek_Muller_2019.jpg/440px-Derek_Muller_2019.jpg") },
  { id: 714, name: "MKBHD", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Marques_Brownlee_2022.jpg/440px-Marques_Brownlee_2022.jpg") },
  { id: 715, name: "LazarBeam", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/LazarBeam_2020.jpg/440px-LazarBeam_2020.jpg") },
  { id: 716, name: "Ali-A", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ali-A_2017.jpg/440px-Ali-A_2017.jpg") },
  { id: 717, name: "Ninja", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ninja_2019.jpg/440px-Ninja_2019.jpg") },
  { id: 718, name: "Pokimane", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pokimane_2019.jpg/440px-Pokimane_2019.jpg") },
  { id: 719, name: "Valkyrae", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Valkyrae_2021.jpg/440px-Valkyrae_2021.jpg") },
  { id: 720, name: "Dream", category: "youtuberi-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dream_face_reveal.jpg/440px-Dream_face_reveal.jpg") },

  // ==========================================
  // 8. ACTORI - INTERNAȚIONAL (20)
  // ==========================================
  { id: 801, name: "Leonardo DiCaprio", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/440px-Leonardo_DiCaprio_2014.jpg") },
  { id: 802, name: "Cillian Murphy", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cillian_Murphy_2014.jpg/440px-Cillian_Murphy_2014.jpg") },
  { id: 803, name: "Zendaya", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/440px-Zendaya_-_2019_by_Glenn_Francis.jpg") },
  { id: 804, name: "Brad Pitt", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/440px-Brad_Pitt_2019_by_Glenn_Francis.jpg") },
  { id: 805, name: "Johnny Depp", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Johnny_Depp_Deauville_2019.jpg/440px-Johnny_Depp_Deauville_2019.jpg") },
  { id: 806, name: "Robert Downey Jr.", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/440px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg") },
  { id: 807, name: "Keanu Reeves", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Keanu_Reeves_%28crop_and_levels_%28cropped%29%29.jpg/440px-Keanu_Reeves_%28crop_and_levels_%28cropped%29%29.jpg") },
  { id: 808, name: "Tom Cruise", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/440px-Tom_Cruise_by_Gage_Skidmore_2.jpg") },
  { id: 809, name: "Christian Bale", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Christian_Bale_2009.jpg/440px-Christian_Bale_2009.jpg") },
  { id: 810, name: "Tom Hanks", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/440px-Tom_Hanks_TIFF_2019.jpg") },
  { id: 811, name: "Margot Robbie", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Margot_Robbie_at_the_2023_Golden_Globes_%28cropped%29.jpg/440px-Margot_Robbie_at_the_2023_Golden_Globes_%28cropped%29.jpg") },
  { id: 812, name: "Joaquin Phoenix", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Joaquin_Phoenix_2019.jpg/440px-Joaquin_Phoenix_2019.jpg") },
  { id: 813, name: "Ryan Gosling", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ryan_Gosling_in_2018.jpg/440px-Ryan_Gosling_in_2018.jpg") },
  { id: 814, name: "Al Pacino", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Al_Pacino_2016.jpg/440px-Al_Pacino_2016.jpg") },
  { id: 815, name: "Morgan Freeman", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Morgan_Freeman_Deauville_2018.jpg/440px-Morgan_Freeman_Deauville_2018.jpg") },
  { id: 816, name: "Denzel Washington", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Denzel_Washington_2018.jpg/440px-Denzel_Washington_2018.jpg") },
  { id: 817, name: "Timothée Chalamet", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Timoth%C3%A9e_Chalamet_2019.jpg/440px-Timoth%C3%A9e_Chalamet_2019.jpg") },
  { id: 818, name: "Pedro Pascal", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Pedro_Pascal_2019.jpg/440px-Pedro_Pascal_2019.jpg") },
  { id: 819, name: "Scarlett Johansson", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/440px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg") },
  { id: 820, name: "Samuel L. Jackson", category: "actori-intl", img: getSafeImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Samuel_L._Jackson_2019.jpg/440px-Samuel_L._Jackson_2019.jpg") }
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

// Validare cod strict de 4 cifre
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
    card.innerHTML = `
      <img src="${char.img}" alt="${char.name}" loading="lazy" />
      <div class="card-label">${char.name}</div>
    `;

    card.addEventListener('click', () => {
      if (gameState === "SELECT_OWN") {
        mySecretCharacter = char;
        if (myCardImg) myCardImg.src = char.img;
        if (myCardName) myCardName.textContent = char.name;
        if (myCardContainer) myCardContainer.style.display = "flex";

        gameState = "PLAYING";
        targetStatus.innerHTML = "🎯 <b>Joc în desfășurare:</b> Elimină cărțile pe rând.";
        alert(`Ți-ai ales personajul: ${char.name}! A fost salvat în colțul de sus.`);
        return;
      }

      card.classList.toggle('eliminated');
    });

    grid.appendChild(card);
  });
}
