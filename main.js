





const Modalwrapper = document.getElementById("Modalwrapper")


const filmsWrapper = document.getElementById("filmsWrapper")
const weekFilmsWrapper = document.querySelector(".weekMovio");
const todaymovio = document.querySelector(".todaymovio ");
const weekMovio = document.querySelector(".weekMovio")


const todayBtnclass = document.querySelector(".todayBtn");
const weekBtnclass = document.querySelector(".weekBtn");
const toggleclass = document.querySelector(".toggle");






function weekMovietoggleModal(span) {

    const card = span.closest('.card');
    const box = card.querySelector('.div');

    if (box.style.display === 'flex') {
        box.style.display = 'none';
    } else {
        box.style.display = 'flex';
    }
}


function weekBtn() {


    function WeekMovieGet() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4'
            }
        };

        fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
            .then(res => res.json())
            .then((movie) => {

                movie.results.forEach((movie) => {
                    const { poster_path, release_date, original_title, id } = movie

                    console.log(movie);
                    weekMovio.innerHTML += `
     <div class="popular-cards-wrapper1">
              <div class="card"> <span onclick="weekMovietoggleModal(this)">
                  <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </span>
                <div id="box" class="div">
                <a class="addLink" href=""> <ion-icon name="list-outline"></ion-icon> Add to list</a>
                <a class="ratingLink" href=""><ion-icon name="heart"></ion-icon> Favorite</a>
                <a class="ratingLink" href=""><ion-icon name="bookmark"></ion-icon> Watchlist</a>
                <a class="yourRatingLink" href=""><ion-icon name="star"></ion-icon>  Your rating</a>
            </div>
              <a href="./movioPage.html?id=${id}"> <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="" alt=""></a>
                
              </div>
                <h4>${original_title}</h4>
              <p>${release_date}</p>
            </div>
    `
                })
            })

    }

    WeekMovieGet();


    weekFilmsWrapper.style.display = "flex";
    todaymovio.style.display = "none";
    toggleclass.style.transform = 'translateX(100%)';

    todayBtnclass.style.color = '#032541';
    weekBtnclass.style.color = 'transparent';
    weekBtnclass.style.webkitBackgroundClip = 'text';
    weekBtnclass.style.backgroundClip = 'text';
    weekBtnclass.style.backgroundImage = "linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)";
}

function todayBtn() {
    toggleclass.style.transform = 'translateX(0%)';
    weekFilmsWrapper.style.display = "none";
    todaymovio.style.display = "flex"
    weekBtnclass.style.color = '#032541'
    todayBtnclass.style.color = 'transparent';
    todayBtnclass.style.webkitBackgroundClip = 'text';
    todayBtnclass.style.backgroundClip = 'text';
    todayBtnclass.style.background = "linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)";
}





function todayMovietoggleModal(span) {

    const card = span.closest('.card');
    const box = card.querySelector('.div');

    if (box.style.display === 'flex') {
        box.style.display = 'none';
    } else {
        box.style.display = 'flex';
    }
}


function MovieGet() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4'
        }
    };

    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(res => res.json())
        .then((day) => {
            day.results.forEach((day) => {
                const { poster_path, release_date, original_title, id } = day

                console.log(day);
                todaymovio.innerHTML += `
     <div class="popular-cards-wrapper1">
              <div class="card"> <span onclick="todayMovietoggleModal(this)">
                  <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </span>
                <div id="box" class="div">
                <a class="addLink" href=""> <ion-icon name="list-outline"></ion-icon> Add to list</a>
                <a class="ratingLink" href=""><ion-icon name="heart"></ion-icon> Favorite</a>
                <a class="ratingLink" href=""><ion-icon name="bookmark"></ion-icon> Watchlist</a>
                <a class="yourRatingLink" href=""><ion-icon name="star"></ion-icon>  Your rating</a>
            </div>
              <a href="./movioPage.html?id=${id}">  <img src="https://image.tmdb.org/t/p/w500${poster_path}"  alt=""></a>
                
              </div>
                <h4>${original_title}</h4>
              <p>${release_date}</p>
            </div>
    `
            })
        })

}



MovieGet()


const articlePopularBtnclass = document.querySelector(".articlePopularBtn")
const articleTheatrBtnclass = document.querySelector(".articleTheatrBtn")

const articleToggle = document.querySelector(".articleToggle")

const Popularfilmswrapper2 = document.querySelector(".Popular-films-wrapper2")
const Popularfilmswrapper = document.querySelector(".Popular-films-wrapper")




function articlePopularBtn() {

    Popularfilmswrapper.style.display = "flex";
    Popularfilmswrapper2.style.display = "none"
    articleToggle.style.transform = 'translateX(0%)';
    articlePopularBtnclass.style.color = '#032541'
    articleTheatrBtnclass.style.color = '#fff'

}




function PopularMoviesGET() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(res => res.json())
        .then((day) => {
            day.results.forEach((day) => {
                const { poster_path, release_date, title, } = day

                console.log(day);
                Popularfilmswrapper.innerHTML += `
     
                <div onclick="togglemodal()" class="popular-cards-wrapper" data-poster="${poster_path}" onmouseover="onmousover(this)" onmouseout="onmousout()">
                <div  class="card"><span class="span" onclick="modalOpener(event)">
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </span>
                <img class="triangleImg"  src="./triangle.jpg" alt="">
                <img  src="https://image.tmdb.org/t/p/w500${poster_path}" class="" alt="">
              </div>


              <h4>${title}</h4>
              <p>${release_date}</p>
            </div>
    `

            })
        })
}

PopularMoviesGET()








const article = document.querySelector(".article")
function onmousout() {

    if (article) {
        article.style.backgroundImage = "none";
        article.style.background = '#032541';

    }
}


function onmousover(item) {

    if (article) {
        const span = document.querySelector(".span")
        const posterPath = item.getAttribute('data-poster');

        if (posterPath) {
            span.style.backgroundPosition = "fixed"
            article.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${posterPath})`;
            article.style.backgroundPosition = "center";
            article.style.backgroundSize = "cover";

        }
    }
}

function togglemodal() {
    const isopen = Modalwrapper.classList.contains("hidden");

    if (isopen) {
        Modalwrapper.classList.remove("hidden")
    } else {
        Modalwrapper.classList.add("hidden")
    }
}




function articleTheatrBtn() {


    function PopularMoviesGET2() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(res => res.json())
            .then((day) => {
                day.results.forEach((day) => {
                    const { poster_path, release_date, title } = day

                    console.log(day);
                    Popularfilmswrapper2.innerHTML += `
     
                <div class="popular-cards-wrapper" data-poster="${poster_path}" onmouseover="onmousover(this)" onmouseout="onmousout()">
                <div class="card">
                <span >
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </span>
                <img class="triangleImg2" src="./triangle.jpg" alt="">
                <img onclick="togglemodal()" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="">
                </div>
                <h4>${title}</h4>
                <p>${release_date}</p>
              </div>

            

          </div>

    `
                })
            })

    }


    PopularMoviesGET2()



    Popularfilmswrapper2.style.display = "flex"
    Popularfilmswrapper.style.display = "none";

    articleToggle.style.transform = 'translateX(100%)';
    articleTheatrBtnclass.style.color = '#032541';
    articlePopularBtnclass.style.color = '#fff';
    articleTheatrBtnclass.style.zIndex = '30000030303030303030303'

}


const todaymovio2 = document.querySelector(".todaymovio2")
function TheatersGET() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(res => res.json())
        .then((now_playing) => {
            now_playing.results.forEach((now_playing) => {
                const { poster_path, release_date, title, id } = now_playing

                console.log(now_playing);
                todaymovio2.innerHTML += `
     <div class="popular-cards-wrapper1">
             <div class="card"> <span onclick="theatrMovietoggleModal(this)"">
                  <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </span>
                <div id="box" class="div">
                <a class="addLink" href=""> <ion-icon name="list-outline"></ion-icon> Add to list</a>
                <a class="ratingLink" href=""><ion-icon name="heart"></ion-icon> Favorite</a>
                <a class="ratingLink" href=""><ion-icon name="bookmark"></ion-icon> Watchlist</a>
                <a class="yourRatingLink" href=""><ion-icon name="star"></ion-icon>  Your rating</a>
            </div>
               <a href="./movioPage.html?id=${id}">   <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="" alt=""></a>
                
              </div>
                <h4>${title}</h4>
              <p>${release_date}</p>
            </div>
    `
            })
        })

}

TheatersGET()



function theatrMovietoggleModal(span) {

    const card = span.closest('.card');
    const box = card.querySelector('.div');

    if (box.style.display === 'flex') {
        box.style.display = 'none';
    } else {
        box.style.display = 'flex';
    }
}