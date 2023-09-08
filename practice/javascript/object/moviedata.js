const movieData = [
    {
        mName: "ABC",
        actor: "bcd",
        rating: [1, 2, 3, 4, 5],
        musicdirector: {
            mdir1: "abc",
            age: 52
        },
        language: ["hindi", "english"],
        country: ["india", "america", { lan: "en US", version: 1 }]
    },
    {
        mName: "ABC",
        actor: "bcd",
        rating: [1, 2, 3, 4, 5],
        musicdirector: {
            mdir1: "abc",
            age: 52
        },
        language: ["hindi", "english"],
        country: ["india", "america", { lan: "en US", version: 1 }]
    },
    {
        mName: "ABC",
        actor: "bcd",
        rating: [1, 2, 3, 4, 5],
        musicdirector: {
            mdir1: "abc",
            age: 52
        },
        language: ["hindi", "english"],
        country: ["india", "america", { lan: "en US", version: 1 }]
    }
];

const cards = document.querySelectorAll(".card");

for (let i = 0; i < movieData.length; i++) {
    const movie = movieData[i];
    console.log(i)

    const card = cards[i];

    card.innerHTML = `
        <h3>${movie.mName}</h3>
        <p>Actor: ${movie.actor}</p>
        <p>Rating: ${movie.rating}</p>
        <p>Music Director: ${movie.musicdirector.mdir1}</p>
        <p>Language: ${movie.language}</p>
        <p>Country: ${movie.country}</p>
    `;
}
