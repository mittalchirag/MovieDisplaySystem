angular.module('mainControllersModule', [])

    // Controller: mainCtrl is used to handle login and main index functions (stuff that should run on every page)  

    .controller('mainMovieCtrl', function (MovieTitle, MovieDetails, $timeout, $location, $state) {
        var app = this;

        app.movieGenres = ["Comedy", "Thriller", "Drama", "Action"];
        app.movieTitles = ["Loading.."];

        app.getMovieTitle = function () {
            MovieTitle.getNames().then(function (data) {
                app.movieTitles = data.data.movies;
            });

        }

        app.getMoviesByGenre = function (genre) {
            app.query = genre;
            if (app.query == '' || app.query == null || app.query == ' ') {
                app.successMsg = false;
                app.modalH = 'Error'; // Set header
                app.modalC = 'Invalid Query. Please try again <br> ....Redirecting to Home Page'; // Set body
                var myEl = angular.element(document.querySelector('#searchModal'));
                myEl.addClass('is-active'); // Open modal
                // Give user 10 seconds to make a decision 'yes'/'no'
                $timeout(function () {
                    $location.path('/'); // Redirect to home
                    app.query = ''; // Clear login form
                    app.successMsg = false; // CLear success message
                    app.modalH = ''
                    app.modalC = ''
                    myEl.removeClass('is-active'); // Hide modal once criteria met
                }, 1500);

            } else {
                app.results = [];
                MovieDetails.getMoviesByGenre(app.query).then(function (data) {

                    app.successMsg = data.data.success;
                    if (data.data.success) {
                        $timeout(function () {
                            $state.go('read'); // Redirect to home

                            app.results = data.data.movies;
                            console.log(app.results);
                            app.resultsLength = app.results.length;
                            app.successMsg = false; // CLear success message

                        }, 1000);



                    } else {

                        app.modalH = 'Error'; // Set header
                        app.modalC = data.data.message + ' ....Redirecting to Home Page'; // Set body
                        var myEl = angular.element(document.querySelector('#searchModal'));
                        myEl.addClass('is-active'); // Open modal
                        // Give user 10 seconds to make a decision 'yes'/'no'
                        $timeout(function () {
                            $location.path('/'); // Redirect to home
                            app.metadata = ''; // Clear login form
                            app.successMsg = false; // CLear success message
                            app.modalH = ''
                            app.modalC = ''
                            myEl.removeClass('is-active'); // Hide modal once criteria met
                        }, 2500);

                    }

                });
            }



        }

        app.getMoviesByTitle = function (title) {
            app.query = title;
            if (app.query == '' || app.query == null || app.query == ' ') {
                app.successMsg = false;
                app.modalH = 'Error'; // Set header
                app.modalC = 'Invalid Query. Please try again <br> ....Redirecting to Home Page'; // Set body
                var myEl = angular.element(document.querySelector('#searchModal'));
                myEl.addClass('is-active'); // Open modal
                // Give user 10 seconds to make a decision 'yes'/'no'
                $timeout(function () {
                    $location.path('/'); // Redirect to home
                    app.query = ''; // Clear login form
                    app.successMsg = false; // CLear success message
                    app.modalH = ''
                    app.modalC = ''
                    myEl.removeClass('is-active'); // Hide modal once criteria met
                }, 1500);

            } else {
                app.results = [];
                MovieDetails.getMoviesByTitle(app.query).then(function (data) {

                    app.successMsg = data.data.success;
                    if (data.data.success) {
                        $timeout(function () {
                            $state.go('read'); // Redirect to home

                            app.results = data.data.movies;
                            console.log(app.results);
                            app.resultsLength = app.results.length;
                            app.successMsg = false; // CLear success message

                        }, 1000);



                    } else {

                        app.modalH = 'Error'; // Set header
                        app.modalC = data.data.message + ' ....Redirecting to Home Page'; // Set body
                        var myEl = angular.element(document.querySelector('#searchModal'));
                        myEl.addClass('is-active'); // Open modal
                        // Give user 10 seconds to make a decision 'yes'/'no'
                        $timeout(function () {
                            $location.path('/'); // Redirect to home
                            app.metadata = ''; // Clear login form
                            app.successMsg = false; // CLear success message
                            app.modalH = ''
                            app.modalC = ''
                            myEl.removeClass('is-active'); // Hide modal once criteria met
                        }, 2500);

                    }

                });
            }

        }

        app.getAllMovies = function () {
            app.query = '';
            MovieDetails.getAllMovies().then(function (data) {
                app.successMsg = data.data.success;
                if (data.data.success) {
                    $timeout(function () {
                        $state.go('read'); // Redirect to home

                        app.results = data.data.movies;
                        console.log(app.results);
                        app.resultsLength = app.results.length;
                        app.successMsg = false; // CLear success message

                    }, 1000);



                } else {

                    app.modalH = 'Error'; // Set header
                    app.modalC = data.data.message + ' ....Redirecting to Home Page'; // Set body
                    var myEl = angular.element(document.querySelector('#searchModal'));
                    myEl.addClass('is-active'); // Open modal
                    // Give user 10 seconds to make a decision 'yes'/'no'
                    $timeout(function () {
                        $location.path('/'); // Redirect to home
                        app.metadata = ''; // Clear login form
                        app.successMsg = false; // CLear success message
                        app.modalH = ''
                        app.modalC = ''
                        myEl.removeClass('is-active'); // Hide modal once criteria met
                    }, 2500);

                }
            });

        }

        app.propertyName = 'rating';
        app.reverse = true;
        app.sortBy = function(propertyName){
            app.reverse = (app.propertyName === propertyName) ? !app.reverse : false;
            app.propertyName = propertyName;
        }

        app.getMovieTitle();
    });