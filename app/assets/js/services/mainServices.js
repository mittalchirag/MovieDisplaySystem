
angular.module('mainServices', [])



.factory('MovieTitle', function ($http) {
    movieTitleFactory = {};

    movieTitleFactory.getNames = function () {
        return $http.get('http://localhost:3032/api/allMovieTitle');
    }

    return movieTitleFactory;
})

.factory('MovieDetails', function($http){
    movieDetailsFactory = {};

    movieDetailsFactory.getMoviesByGenre = function(genre){
        var url = 'http://localhost:3032/api/movieGenre?query=' + genre;
        return $http.get(url);
    }
    movieDetailsFactory.getMoviesByTitle = function(title){
        var url = 'http://localhost:3032/api/movieTitle?query=' + title;
        return $http.get(url);
    }
    movieDetailsFactory.getAllMovies = function () {
        return $http.get('http://localhost:3032/api/allMovies');
    }


    return movieDetailsFactory;
});