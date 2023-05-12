





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

  const headerTitle = document.querySelector('.header-title');
  const ratedUserFilms = document.querySelector('.header-rating__user');
  const imgBlockMain = document.querySelector('.main-block__logo');
  const imgMain = document.createElement('img');
        imgMain.src ='images/1.jpg';
        imgMain.alt = "wefwefe";
        imgBlockMain.append(imgMain);
  const discriptionText = document.querySelector('.description_text');
        discriptionText.textContent = movies[0].description;
  const mainCardGenre = document.querySelector('.main-card__genre');
  const blockGenre = document.querySelector('.card-genre');




