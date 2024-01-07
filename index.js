"use strict";

let numberOfFilms;
function start(){
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");
  
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyFilms();
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
detectPersonalLevel();
function showMyDB(){
  if(personalMovieDB.privat===false){
    console.log(personalMovieDB)
  }
}
showMyDB();
function writeYourGenres() {
  for(let i=0;i<=2;i++){
    personalMovieDB.genres[i]=prompt(`Ваш любимый жанр под номером ${i+1}`);
  }
}
writeYourGenres()
// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
//     for(let j = 0;j <lines-i;j++){
//         result+=' ';
//     }
//     for(let j=0;j<2*i+1;j++){
//         result+='*';
//     }
//     result+='\n';
// }
// console.log(result)
