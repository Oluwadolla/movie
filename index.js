//const form = document.querySelector('.search-btn');
// const movieCon = document.querySelector('.movieContainer');
// const input = form.querySelector('input');
// const searchResults = document.querySelector('.search-result');
// const searchResultContainer = document.querySelector('.searchResultContainer');
const hero = document.getElementById('henry')


const apiKey = '55814b2f4ad81bd44480a74f6d90cc3a';
// const header = 
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const film = data.results

        if(film.length>0){
            const mouse = film[18]
            const image = `https://image.tmdb.org/t/p/w500/${mouse.poster_path}`



            const showinner = `
            <div class="one d-flex w-100 px-0 mt-4">

            <div class="onee bg-dark p-4  text-justify text-light">
                <h1 class="title ps-3 pt-4">${mouse.original_title}<h1>
                <div class="overview" style="font-size:15px;" >${mouse.overview}</div>
                <div><img src="https://images.unsplash.com/photo-1628510118714-d2124aea4b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzYSUyMGZsYWd8ZW58MHx8MHx8fDA%3D" alt="" style="width:5%; height:5%;"> ${mouse.original_language}glish
            </div>

            <div class="date">Release on: ${mouse.release_date}</div>

            <span id="sp">

                <div>
                    <button id="watch">
                        watch
                    </<button>
                </div>
                    
                <div id="wat">
                    <div class="two"></div>
                    <div class="three"></div>
                    <div class="four"></div>
                </div>
            </span>

            </div>
                <div class="movie-img w-100">
                    <img src="${image}" alt="${mouse.original_title}" width="100%" height="400">
                </div>
            </div>
            `
            hero.innerHTML = showinner
        }else{
            hero.innerHTML= `no movie found.`
        }
       
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
        



        // movie 2nd part
        const image2 = document.getElementById(`key2`)
        
//fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`)  
 //        .then((response) => response.json())
    //     .then((data)=>{
     //        console.log(data.results)

    //         allfilm = data.results
    //         displayFilm(data.results)
     //   })



       fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&&api_key=55814b2f4ad81bd44480a74f6d90cc3a`)  
        .then(response => response.json())
        .then(data => {
            console.log(data)
           fanta = data.results
           displayFilm(data.results)


        allfilm = data.results
            displayFilm(data.results)
           

        })

        function displayFilm(book){
            let pen = ""
            console.log(book)
            book.map((value) =>{
                return pen +=
                    `
                <div class="col-lg-4 all-card">

                    <div class="card bg-secondary text-light">
                        <img src="https://image.tmdb.org/t/p/w500${value.poster_path}" class="card-img-top" alt="${value.title}" >
                        <h4 class="card-title">${value.original_title}</h4>
                        <div class="card-body">
                        <p class="card-text">${value.overview.slice(0, 10)}...</p>
                        </div>
                 <div class="fav">
                        <button class="add-to-favorites"> <i class="fas fa-heart"></i>Add to Favorites</button>
                        </div>
                    </div>

                </div>

               

                    `
                    
                
            } )
           
            image2.innerHTML =pen
        }
            
                //SEARCH BAR
                
                const searchdiv = document.getElementById('search')
                const prolist = document.getElementsByClassName("product-list")
                const wrong = document.getElementsByClassName('wrong')


                // const filteredfilmlist =(searchValue) =>

                function filteredfilmlist(searchValue){
                    return allfilm.filter((film) =>
                    film.title.toLowerCase().includes(searchValue.toLowerCase())

                    )
                }

                searchdiv.addEventListener("input", (e) =>{
                    const searchValue = e.target.value
                    const filteredArrey = filteredfilmlist(searchValue)
                    prolist.innerHTML = "";
                    wrong.innerHTML = ""
            


                    if (searchValue.length > 0 && filteredArrey.length > 0) {
                        wrong.textcontent = `Showing ${filteredArrey.length} results for ${searchValue}`
                        displayFilm(filteredArrey)
                    } else if (searchValue && filteredArrey.length === 0){
                        wrong.textcontent = `No result "${searchValue}"`
                    }else {
                        displayFilm(allfilm)
                    }
                
                })














  //  .catch(error => {
      //    console.error('Error fetching movies:', error);
    //   });
        

    //  function displayFilm (film) {
    //          let tv = "";
    //   film.map((value) => {
    //              tv += 
    //        `
         
    //          `
                
    //        })
    //              image2.innerHTML = tv
    //      }


    //      if(fanta.length>0){
                
    //         const image = `https://image.tmdb.org/t/p/w500/${mouse.poster_path}`}
    
            

            
            // hero.innerHTML = showinner
            // // }else{
            //      hero.innerHTML= `no movie found.`
            //  }


            //  .catch(error => {
            //     //   console.error('Error fetching movies:', error);
            //    });