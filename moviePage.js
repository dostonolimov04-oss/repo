const aboutMovieWrapper = document.getElementById("aboutMovieWrapper")
const urlgetId = new URLSearchParams(window.location.search).get("id");
const aside = document.getElementById("aside")
const section = document.getElementById("section")
const castsWrapper = document.getElementById("castsWrapper")



function getMovieDetails() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${urlgetId}?language=en-US`, options)
        .then(res => res.json())
        .then(movie => {

            function getPercentColor(percent) {
                if (percent >= 70) return '#21d07a';
                if (percent >= 40) return '#d2d531';
                return '#db2360';
            }

            const rating = movie.vote_average ? +((movie.vote_average ? movie.vote_average.toFixed(1) : "N/A").split(".").join("")) : 0;
            const color = getPercentColor(rating);
            console.log(movie);
            aboutMovieWrapper.innerHTML += `
            <div class="Wrapper-box">
                <div>
                    <div class="Movie-card"><img src="${movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : './no-image.png'}"></div>

                    <div class="formatStatusWrapper">
                        <h1>${movie.title} (${movie.release_date ? movie.release_date.slice(0, 4) : ""})</h1>
                        <span class="borderText">TV-MA</span> <span>${movie.genres.map(item => item.name).join(", ")}</span>

                        <div class="MovieStatusWrapper">
                            <div class="progresLine">    <div class="rating-circle">
                                    <svg viewBox="0 0 36 36" class="circular-chart">
                                        <path class="circle-bg"
                                            d="M18 2.0845
                                              a 15.9155 15.9155 0 0 1 0 31.831
                                              a 15.9155 15.9155 0 0 1 0 -31.831"
                                            stroke="#1e1e1e"
                                            stroke-width="3"
                                            fill="none"
                                        />
                                        <path class="circle"
                                            stroke-dasharray="${rating}, 100"
                                            style="stroke: ${color};"
                                            d="M18 2.0845
                                              a 15.9155 15.9155 0 0 1 0 31.831
                                              a 15.9155 15.9155 0 0 1 0 -31.831"
                                            stroke-width="3"
                                            fill="none"
                                        />
                                        <text x="9" y="22" class="percentage" fill="white">${rating}%</text>
                                    </svg>
                                </div></div>
                            <div class="stausTypeWrapper">
                                <p>User</p><br>
                                <p>Score</p>
                            </div>
                            <span style="margin-top: 20px;font-size:20px">
                              <span>😀</span>
                              <span>😍</span>
                              <span>🤔</span>
                            </span>

                            <button class="Movie-VibeBtn">What's your <span class="vibetext">Vibe</span>? <span
                                    class="infoIcon">i</span></button>
                        </div>

                        <div class="MovieMarkIconsWrapper">
                            <div class="icon"><span><ion-icon name="list"></ion-icon></span></div>
                            <div class="icon"><span><ion-icon name="heart"></ion-icon></span></div>
                            <div class="icon"><span><ion-icon name="bookmark"></ion-icon></span></div>
                            <img src="./triangle.jpg" alt=""><span>Play Trailer</span>
                        </div><br>

                        <div>
                            <i>${movie.tagline}</i>
                            <br><br>

                            <h3>Overview</h3><br>
                            <p>${movie.overview}</p>
                            <br>
                            <h4 class="creatorName">Jhon Griffin</h4>
                            <h5>Creator</h5>

                        </div>


                    </div>
                </div>
            </div>
            `


        });

}

getMovieDetails()




function getMovieAside() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${urlgetId}?language=en-US`, options)
        .then(res => res.json())
        .then(movie => {

            aside.innerHTML += `
 <div class="aside-headerIconWrapper">
                <b><ion-icon name="logo-facebook"></ion-icon></b>
                <b><ion-icon name="logo-twitter"></ion-icon></b>
                <b><ion-icon name="logo-instagram"></ion-icon></b>
                <h3><ion-icon name="shuffle-outline"></ion-icon></h3>
            </div>

            <div class="MovieAboutWrapper">
                <div class="AboutStatusWrapper">
                    <h3>Status</h3>
                    <p>${movie.status}</p>
                </div>
                <div class="AboutStatusWrapper">
                    <h3>Original Language</h3>
                    <p>English</p>
                </div>
                <div class="AboutStatusWrapper">
                    <h3>Budget</h3>
                    <p>$${movie.budget}</p>
                </div>

                <div class="AboutStatusWrapper">
                    <h3>Revenue</h3>
                    <p>$${movie.revenue}</p>
                </div>
            </div>

            <div class="asideKeywordsWrapper">
                <h3>Keywords</h3>
                <span>magic</span>
                <span>magic</span>
                <span>magic</span>
                <span>magic</span>
                <span>magic</span>

            </div>
            <hr>

            <h3>Content Score</h3>
            <div class="contentScoreWrapper">
                <div class="percent">
                    <h3>100</h3>
                </div>
                <div class="message">
                    <p>Yes! Looking good!</p>
                </div>
            </div>

            <div class="comentsWrapper">
                <h3>Top Contributirs</h3>
                <div class="comentWrapper">
                    <div class="userLogo"></div>
                    <div>
                        <h4>71</h4>
                        <a href="">Projectionist 2</a>
                    </div>
                </div>

                <div class="comentWrapper">
                    <div class="userLogo"></div>
                    <div>
                        <h4>71</h4>
                        <a href="">Projectionist 2</a>
                    </div>
                </div>

                <div class="comentWrapper">
                    <div class="userLogo"></div>
                    <div>
                        <h4>71</h4>
                        <a href="">Projectionist 2</a>
                    </div>
                </div>

                <div class="viewEditWrapper">
                    <a class="viewEdittext" href="">View Edit History</a><br>
                    <h3>Popularity Trend</h3>

                    <div class="trendingLine"> </div>

                    <button>EDITPAGE</button>

                    <a class="viewEdittext2" href="">Keyboard Shortcuts</a>
                    <a class="viewEdittext" href="">Report an Issue</a>
                </div>
                `
        });

}

getMovieAside()





function getMovieSection() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${urlgetId}?language=en-US`, options)
        .then(res => res.json())
        .then(movie => {
            section.innerHTML +=
                `   <hr class="hr">
                <div>
                    <div class="socialWrapper">
                        <h3>Social</h3>
                        <h4 class="span1">Reiews 0</h4>
                        <h4 class="span2">Discussion 5</h4>
                    </div>
                    <p class="sectiontext1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, expedita?
                    </p>
                    <b class="span3">Go to Discussions</b>

                    <hr class="hr2">

                    <div class="socialWrapper">
                        <h3>Media</h3>
                        <h4 class="span2">Most Popular</h4>
                        <h4 class="span1">Videos 22</h4>
                        <h4 class="span1">Backdrop 61</h4>
                        <h4 class="span1">Poster 152</h4>

                    </div>
                    <div id="todayfilmsWrapper3" class="todayfilmsWrapper3">
                        <div id="filmsWrapper2" class="todayfilmbox2">
                            <div class="todaymovio2">
                                <div class="popular-cards-wrapper3">

                                    <div class="card1"> <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}"  alt=""> </div>

                                </div>
                                <div class="popular-cards-wrapper3">

                                    <div class="card2"><img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}"  alt=""> </div>

                                </div>


                                <div class="popular-cards-wrapper3">

                                    <div class="card3"> <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"  alt=""></div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <hr class="hr3">

                    <h3 class="movieTitle">If you liked <i style="color:grey;font-weight: 600">${movie.title}</i>, you might also like...</h3>

                    <div id="todayfilmsWrapper3" class="todayfilmsWrapper4">
                        <div id="filmsWrapper2" class="todayfilmbox3">
                            <div class="todaymovio3">
                                <div class="popular-cards-wrapper3">

                                    <div class="card"> <img
                                            src="https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/50756918-4901337.jpg"
                                            alt=""></div>

                                </div>
                                <div class="popular-cards-wrapper3">

                                    <div class="card"> </div>
                                    <h4>200% Wolf</h4>

                                </div>


                                <div class="popular-cards-wrapper3">

                                    <div class="card"> </div>

                                </div>
                                <div class="popular-cards-wrapper3">

                                    <div class="card"> </div>
                                    <h4>200% Wolf</h4>

                                </div>


                                <div class="popular-cards-wrapper3">

                                    <div class="card"> </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 class="moretitle">Or maybe something a bit more...</h3>
                    <div class="filmsTypeWrapper">
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                        <span>fantastical</span>
                    </div>
                </div>`

        });

}

getMovieSection()



function getCasts() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4'
        }
    };


    fetch(`https://api.themoviedb.org/3/movie/${urlgetId}/credits?language=en-US`, options)
        .then(res => res.json())
        .then(data => {

            castsWrapper.innerHTML = '';


            data.cast.forEach(cast => {

                castsWrapper.innerHTML += `
                    <div class="popular-cards-wrapper3">
                        <img src="https://image.tmdb.org/t/p/w500${cast.profile_path}" class="card"> 
                        <h2>${cast.name}</h2>
                        <p>${cast.character}</p>
                    </div>
                `;
            });
        })
}

getCasts();



