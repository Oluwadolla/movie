document.addEventListener("DOMContentLoaded", function () {
    const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');
    const favoritesList = document.getElementById('favorites-list');

    addToFavoritesButtons.forEach(button => {
        button.addEventListener('click', function () {
            const movieElement = this.closest('.movie');
            const movieId = movieElement.dataset.movieId;
            const movieTitle = movieElement.querySelector('h2').innerText;

            // Check if the movie is already in favorites
            if (!isMovieInFavorites(movieId)) {
                // Add the movie to favorites
                addToFavorites(movieId, movieTitle);
            } else {
                alert('Movie is already in favorites!');
            }
        });
    });

    function addToFavorites(id, title) {
        const listItem = document.createElement('li');
        listItem.textContent = title;
        favoritesList.appendChild(listItem);

        // Save to local storage
        saveToFavorites(id);
    }

    function isMovieInFavorites(id) {
        const favorites = getFavoritesFromStorage();
        return favorites.includes(id);
    }

    function saveToFavorites(id) {
        const favorites = getFavoritesFromStorage();
        favorites.push(id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    function getFavoritesFromStorage() {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    }
});
