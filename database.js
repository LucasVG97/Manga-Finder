const mangas = [
  {
    id: 1,
    name: "One Piece",
    chapters: 1018,
    author: "Oda, Echiro",
    rate: 10,
    finished: false,
    category: "Pirates"
  },
  {
    id: 2,
    name: "Solo Leveling",
    chapters: 157,
    author: "Jang Sung-Lak",
    rate: 9.9,
    finished: false,
    category: "Dungeon Hunters"
  },
  {
    id: 3,
    name: "Kimetsu no Yaiba",
    chapters: 205,
    author: "Gotouge, Koyoharu",
    rate: 9.7,
    finished: true,
    category: "Demon Slayers"
  },
  {
    id: 4,
    name: "Jujutsu Kaisen",
    chapters: 152,
    author: "Gege Akutami",
    rate: 9.8,
    finished: false,
    category: "Sorceres and Curses"
  },
  {
    id: 5,
    name: "Naruto",
    chapters: 718,
    author: "Kishimoto, Masashi",
    rate: 9.5,
    finished: true,
    category: "Ninjas"
  },
  {
    id: 6,
    name: "Black Clover",
    chapters: 298,
    author: "Tabata, Yuuki",
    rate: 9.3,
    finished: false,
    category: "Sorceres and Demons"
  },
  {
    id: 7,
    name: "Boku no Hero Academia",
    chapters: 319,
    author: "Horikoshi, Kouhei",
    rate: 9.8,
    finished: false,
    category: "Super Heroes"

  }
]
//necessário comando export
module.exports = mangas

//para iniciar o node foi utilizado o comando npm init-y, no arquivo packagen.json, dentro do objeto scripts foi utilizada a seguinte notação: ("start": "node app.js") onde node app.js se refere ao arquivo .app que está sendo desenvolvida aplicação. Após isso, foi utilizado o comando npm i readline-sync para instalar a library readline-sync que nos permite simular a opção de entrada de dados pelo usuário, oq no front pode ser equivalente ao input.value