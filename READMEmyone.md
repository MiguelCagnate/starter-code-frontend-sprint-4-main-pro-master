# starter-code-frontend-sprint-4

Sprint 4 IT Academy | Video management tool
Introduction
A company in the audiovisual sector has asked us for a web application that will allow their employees to quickly find movies from a large database they have, since the process is currently done manually.

You will be in charge of setting up the core of the application: all the logic of filtering and sorting of movies. You have 2 weeks to finish, which is how long this sprint lasts.


https://www.youtube.com/watch?v=tP8JiVUiyDo

  var showDirector = movies.filter((e) => {
    return e.director === "Quentin Tarantino";
  });
  var showScore = showDirector.reduce((a, b) => {
       if(b.score != ''){
      return (a += b.score);
    }
    //return (a += b.score);
  }, 0);
  var result = Number(showScore / showDirector.length).toFixed(2);
  console.log("EXERCICE 3 ->", Number(result));
  return Number(result)






    var showDirector = movies.filter((e) => {
    return e.director === "Quentin Tarantino";
  });
  var showScore = showDirector.reduce((a, b) => {
    if(b.score != undefined){
      return (a += b.score);
    }
    //return (a += b.score);
  }, 0);
  var result = Number(showScore / showDirector.length).toFixed(2)

function round(result) {
    var m = Number((Math.abs(result) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(result);
}

console.log(round(result));
return (round(result));