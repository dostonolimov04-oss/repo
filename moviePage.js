const aboutMovieWrapper = document.getElementById("aboutMovieWrapper");
const aside = document.getElementById("aside");
const filmsWrapper1 = document.getElementById("filmsWrapper1");
const similarMovies = document.getElementById("similarMovies");

const urlgetId = window.location.search.slice(4);

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        authorization: "Bearer ТВОЙ_ТОКЕН"
    }
};

function getPercentColor(percent) {
    if (percent >= 70) return "#21d07a";
    if (percent >= 40) return "#d2d531";
    return "#db2360";
}

function money(num) {
    return "$" + num.toLocaleString();
}

function getMovieDetails() {

    fetch(`https://api.themoviedb.org/3/movie/${urlgetId}?language=en-US`, options)
        .then(res => res.json())
        .then(movie => {
            const rating = movie.vote_average
                ? +(movie.vote_average.toFixed(1).replace(".", "")) : 0;
            const color = getPercentColor(rating);
            aboutMovieWrapper.innerHTML = `
<div class="Wrapper-box">
<div>

<div class="Movie-card">
<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
</div>

<div class="formatStatusWrapper">

<h1>${movie.title} (${movie.release_date.slice(0, 4)})</h1>

<span class="borderText">${movie.adult ? "18+" : "PG-13"}</span>

<span>${movie.genres.map(g => g.name).join(", ")}</span>

<div class="MovieStatusWrapper">

<div class="rating-circle">
<svg viewBox="0 0 36 36">

<path class="circle-bg"
d="M18 2.0845
a15.9155 15.9155 0 0 1 0 31.831
a15.9155 15.9155 0 0 1 0-31.831"/>

<path
stroke="${color}"
stroke-dasharray="${rating},100"
fill="none"
stroke-width="3"

d="M18 2.0845
a15.9155 15.9155 0 0 1 0 31.831
a15.9155 15.9155 0 0 1 0-31.831"/>

<text
x="9"
y="20"
fill="white">${rating}%</text>

</svg>
</div>

<div class="stausTypeWrapper">
<p>User</p>
<p>Score</p>
</div>

</div>

<div class="MovieMarkIconsWrapper">
<div class="icon"><ion-icon name="list"></ion-icon></div>
<div class="icon"><ion-icon name="heart"></ion-icon></div>
<div class="icon"><ion-icon name="bookmark"></ion-icon></div>
</div>
<br>
<i>${movie.tagline}</i>
<br><br>
<h3>Overview</h3>
<p>${movie.overview}</p>
</div>
</div>
</div>
`;
            aside.innerHTML = `
<div class="aside-headerIconWrapper">
<span><ion-icon name="logo-facebook"></ion-icon></span>
<span><ion-icon name="logo-twitter"></ion-icon></span>
<span><ion-icon name="logo-instagram"></ion-icon></span>
</div>
<div class="MovieAboutWrapper">

<div class="AboutStatusWrapper">
<h3>Status</h3>
<p>${movie.status}</p>
</div>

<div class="AboutStatusWrapper">
<h3>Original language</h3>
<p>${movie.original_language.toUpperCase()}</p>
</div>

<div class="AboutStatusWrapper">
<h3>Budget</h3>
<p>${money(movie.budget)}</p>
</div>

<div class="AboutStatusWrapper">
<h3>Revenue</h3>
<p>${money(movie.revenue)}</p>
</div>

</div>
`;
        });
}
function getCast() {
    fetch(`https://api.themoviedb.org/3/movie/${urlgetId}/credits?language=en-US`, options)
        .then(res => res.json())
        .then(data => {
            filmsWrapper1.innerHTML = "";
            data.cast.slice(0, 15).forEach(actor => {
                filmsWrapper1.innerHTML += `
                <div class="popular-cards-wrapper3">
                    <div class="card">
                        <img
                            src="${actor.profile_path
                        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                        : "https://placehold.co/300x450?text=No+Image"
                    }"
                            alt="${actor.name}"
                        >
                    </div>
                    <h2>${actor.name}</h2>
                    <h3>${actor.character || "Unknown"}</h3>
                    <p>${actor.known_for_department}</p>
                    <p>${actor.popularity.toFixed(1)}</p>
                </div>
                `;
            });
        });
}
function getExtraInfo() {
    Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${urlgetId}/keywords`, options).then(r => r.json()),
        fetch(`https://api.themoviedb.org/3/movie/${urlgetId}/credits`, options).then(r => r.json()),
        fetch(`https://api.themoviedb.org/3/movie/${urlgetId}/external_ids`, options).then(r => r.json()),
        fetch(`https://api.themoviedb.org/3/movie/${urlgetId}/videos`, options).then(r => r.json())
    ]).then(([keywords, credits, social, videos]) => {
        const keywordsWrapper = document.querySelector(".asideKeywordsWrapper");
        if (keywordsWrapper) {
            keywordsWrapper.innerHTML = `
                <h3>Keywords</h3>
                ${keywords.keywords
                    .map(item => `<span>${item.name}</span>`)
                    .join("")}
            `;
        }
        const creator = credits.crew.find(item =>
            item.job === "Director"
        );
        if (creator) {
            const creatorName = document.querySelector(".creatorName");
            if (creatorName) {
                creatorName.innerHTML = creator.name;
            }
        }
        const icons = document.querySelector(".aside-headerIconWrapper");
        if (icons) {
            icons.innerHTML = `
                ${social.facebook_id
                    ? `<a target="_blank" href="https://facebook.com/${social.facebook_id}">
                            <ion-icon name="logo-facebook"></ion-icon>
                           </a>`
                    : ""
                }

                ${social.twitter_id
                    ? `<a target="_blank" href="https://twitter.com/${social.twitter_id}">
                            <ion-icon name="logo-twitter"></ion-icon>
                           </a>`
                    : ""
                }

                ${social.instagram_id
                    ? `<a target="_blank" href="https://instagram.com/${social.instagram_id}">
                            <ion-icon name="logo-instagram"></ion-icon>
                           </a>`
                    : ""
                }
            `;
        }
        const trailer = videos.results.find(video =>
            video.type === "Trailer" &&
            video.site === "YouTube"
        );
        if (trailer) {
            const play = document.querySelector(".MovieMarkIconsWrapper img");
            if (play) {
                play.style.cursor = "pointer";
                play.onclick = () => {
                    window.open(
                        `https://www.youtube.com/watch?v=${trailer.key}`,
                        "_blank"
                    );
                };
            }
        }
    });
}

function getSimilarMovies() {
    fetch(`https://api.themoviedb.org/3/movie/${urlgetId}/similar?language=en-US`, options)
        .then(res => res.json())
        .then(data => {
            similarMovies.innerHTML = "";
            data.results.slice(0, 8).forEach(movie => {
                similarMovies.innerHTML += `
                <div class="popular-cards-wrapper3">
                    <div class="card">
                        <img
                        src="https://image.tmdb.org/t/p/w300${movie.poster_path}"
                        alt="">
                    </div>
                    <h4>${movie.title}</h4>
                    <p>${movie.vote_average.toFixed(1)}</p>
                </div>
                `;
            });
        });
}

getMovieDetails();
getCast();
getExtraInfo();
getSimilarMovies();