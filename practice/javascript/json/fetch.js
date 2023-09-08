// fetch("fettch.json")
//     .then(response => response.json())
//     .then(data => showdata(data))

// function showdata(data) {
//     for (let i = 0; i < data.moviedata.length; i++) {
//         console.log(data.moviedata[i]);
//         let movielist = data.movieData[i];
//         document.getElementById("all_Movie").innerHTML +=
//             `  <div class="card mb-3 taxt-whit bg-sucess border-danger" style="max-width: 540px;">
//                 <div class="card-body">
//                     <h4 class="card-titel">${movielist["title"]} <span style="color: blue;">${movielist["year"]}</span>
//                     </h4>
//                     <p class="card-text" id="movieDesc">${movielist["storyline"]}</p>
//                     <button class="btn btn-primary">View Movie</button>
//                 </div>
//                 <div class=" col-lg-4">
//                     <img src="${movielist[" posterurl"]}" id="poster_image" class="img-fluid rounded-start"
//                         alt="${movielist[" title"]}">
//                 </div>
//             </div>
//            `



//     }


// }
fetch("fetch.json")
    .then(response => response.json())
    .then(data => showdata(data))

function showdata(data) {
    for (let i = 0; i < data.moviedata.length; i++) {
        console.log(data.moviedata[i]);
        let movielist = data.moviedata[i];
        document.getElementById("all_Movie").innerHTML +=
            `  <div class="card mb-3 text-white bg-success border-danger" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${movielist["posterurl"]}" class="img-fluid rounded-start" alt="${movielist["title"]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${movielist["title"]} <span style="color: blue;">${movielist["year"]}</span></h4>
                            <p class="card-text" id="movieDesc">${movielist["storyline"]}</p>
                            <button class="btn btn-primary">View Movie</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

