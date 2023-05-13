

const headerBlock = document.querySelector('.wrapper');

      



const movies = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 3",
    genre: ["drama", "comedy", "adventure"],
    description:
      "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
    actors: [
      {
        name: "Chris Pratt",
        birthyear: 1979,
        country: "USA",
      },
      {
        name: "Bradley Cooper",
        birthyear: 1975,
        country: "USA",
      },
      {
        name: "Zoe Saldana",
        birthyear: 1978,
        country: "Mexico",
      },
    ],
    similar: ["Plane", "Sharper"],
    rating: 8.4,
  },
  {
    id: 2,
    title: "Plane",
    genre: ["thriller", "crime", "adventure"],
    description:
      "Pilot Brodie Torrance saves passengers from a lightning strike by making a risky landing on a war-torn island -- only to find that surviving the landing was just the beginning. When dangerous rebels take most of the passengers hostage, the only person Torrance can count on for help is Louis Gaspare, an accused murderer who was being transported by the FBI.",
    actors: [
      {
        name: "Gerard Butler",
        birthyear: 1969,
        country: "Scotland",
      },
      {
        name: "Mike Colter",
        birthyear: 1976,
        country: "USA",
      },
      {
        name: "Lilly Krug",
        birthyear: 2001,
        country: "Germany",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Sharper"],
    rating: 6.1,
  },
  {
    id: 3,
    title: "Sharper",
    genre: ["drama", "thriller", "crime"],
    description:
      "Motivations are suspect, and expectations are turned upside down, as a con artist takes on Manhattan billionaires.",
    actors: [
      {
        name: "Julianne Moore",
        birthyear: 1960,
        country: "United Kingdom",
      },
      {
        name: "Sebastian Stan",
        birthyear: 1982,
        country: "Romania",
      },
      {
        name: "Briana Middleton",
        birthyear: 1997,
        country: "USA",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Plane"],
    rating: 3.3,
  },
];






//first task

// const newActors = movies.map(person =>{
//   const res =  person.actors;
//    res.map(item=>{
//      let date = new Date();
//      let age = date.getFullYear() - item.birthyear;
//      item.age = age;
//      console.log(item)
//    })
//  });


//second task

  // const arrayGenreMovies = movies.map((item)=>{
  //   const objNew = new Object();
  //   const result = item.genre;
  //         result.map((res)=>{    
  //           objNew.name = res;
  //           objNew.movies = item.similar;
  //           console.log([objNew]);
  //         });
          
  // });


  //third task
  const functionImg = (item) =>{
    switch(item){
      case "Chris Pratt":
        return "images/actors/pratt.jpg";
        case "Bradley Cooper":
          return "images/actors/cooper.jpg";
        case "Zoe Saldana":
          return "images/actors/saldana.jpg";
        case "Gerard Butler":
          return "images/actors/butler.jpg";
        case "Mike Colter":
          return "images/actors/cotler.jpg";
        case "Lilly Krug":
          return "images/actors/krug.jpg";
        case "Julianne Moore":
          return "images/actors/moore.jpg";
        case "Sebastian Stan":
          return "images/actors/stan.jpg";
        case "Briana Middleton":
          return "images/actors/middleton.jpg";
        case "Guardians of the Galaxy Vol. 3":
          return "./images/1.jpg";
        case "Plane":
          return "./images/2.jpg";
        case "Sharper":
          return "./images/3.jpg";
    }
  }



function getMovies(id){
   movies.filter((item)=>{
    if(item.id == id){
      headerBlock.innerHTML = `
      <div class="main-card">
      <div class="header">
          <div class="header_block">
              <div class="block_title">
                  <h1 class="header-title">${item.title}</h1>
              </div>
          <div class="header__rating">
              <p class="header__rating-text">Rating:</p>
              <div class="header__rating_block">
                    <p class="header_rating_number">${item.rating}</p>
              </div>
              <p class="header-rating-number">/ 10</p>
          </div>
          </div>
      </div>
      <div class="main-block">
          <div class="main-block__logo">
              <a href="#"><img src=${functionImg(item.title)} alt=""></a>
          </div>
          <div class="main-block__description">
              <div class="description">
                  <p class="description_text">
                     ${item.description}
                  </p>
              </div>
              <div class="main-card__genre">
                  <div class="card-genre">
                      <p class="text-genre">
                          ${item.genre[0]}
                      </p>
                  </div>
                  <div class="card-genre">
                      <p class="text-genre">
                      ${item.genre[1]}
                      </p>
                  </div>
                  <div class="card-genre">
                      <p class="text-genre">
                      ${item.genre[2]}
                      </p>
                  </div>
          
              </div>
                  <p class="cast__text">cast :</p>
              <div class="main-cast__block">
                 <div class="cast__actors">
                  <a href=""><img class="cast__actors-img" src=${functionImg(item.actors[0].name)} alt=""> </a>
                 </div>
                 <div class="cast__actors">
                  <a href=""><img class="cast__actors-img" src=${functionImg(item.actors[1].name)} alt=""> </a>
                 </div>
                 <div class="cast__actors">
                  <a href=""><img class="cast__actors-img" src=${functionImg(item.actors[2].name)} alt=""> </a>
                 </div>
              </div>
          </div>
      </div>
      <div class="similar__block">
          <h2 class="similar__block-text">Similar movies</h2>
      </div>
      <div class="main-block__movies">
          
          <div class="movies-card__films">
              <div class="movies-card__size">
                  <a href="index2.html">
                      <img src=${functionImg(item.similar[0])} alt="">
                  </a>
              </div>
              <div class="movies-card__size">
                  <a href="index3.html">
                      <img src=${functionImg(item.similar[1])} alt="">
                  </a>
              </div>
          </div>
      </div>
  </div>
      `};


     
 
   })
    
   const ratedNumberStyle = document.querySelector('.header_rating_number');
   if(ratedNumberStyle.innerText <= 5){
      ratedNumberStyle.style.color ='red';
   }else if(ratedNumberStyle.innerText >= 5 && ratedNumberStyle.innerText <= 8){
    ratedNumberStyle.style.color ='yellow';
   }else{
    ratedNumberStyle.style.color ='green';
   };
    
}

 

  getMovies(1);






