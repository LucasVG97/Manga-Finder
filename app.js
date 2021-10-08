const mangas = require("./database") //requisitando os dados da database

//pegar o input do usuário

const readline = require("readline-sync") //agora é possível acessar todo o conteúdo da biblioteca a partir da const readline


const initialEntry = readline.question("Looking for a new manga? Y/N ")

//Condicional, perguntando se o usuário deseja procurar por categoria, se sim:
if (initialEntry.toLocaleUpperCase() === "Y"){
    console.log("these are the available categories:")
    console.log("Pirates", "/ Dungeon Hunters", "/ Demon Slayers", "/ Sorceres and Curses", "/ Ninjas", "/ Sorceres and Demons", "/ Super Heroes")

    const catEntry = readline.question("which category do you want:")
    const answer = mangas.filter(manga => manga.category === catEntry)
    //com os codigos a cima, é possível capturar a entrada e mostrar os mangás de acordo com a categoria digitada

    console.table(answer)
}
//Caso a resposta seja não, mostra-los de acordo com a avaliação
else{
  const orderedMangas = mangas.sort((a,b) => b.rate - a.rate )
  console.log("These are all the available mangas: ")
  console.table(orderedMangas)
}
