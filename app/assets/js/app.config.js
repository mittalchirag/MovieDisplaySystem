var app = angular.module("appRoutes", ['ui.router']);
app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/error');
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "pages/home.html",
            homePage: true
        })
        .state("error", {
            url: "/error",
            templateUrl: "pages/error.html",
            homePage: false
        })
        .state("search", {
            url: "/search",
            templateUrl: "pages/search.html"
        })
        .state("create", {
            url: "/create",
            templateUrl: "pages/create.html"
        })

        .state("manage", {
            url: "/manage",
            templateUrl: "pages/manage.html"
        })
        .state("read", {
            url: "/read",
            templateUrl: "pages/read.html",
            homepage: false
        })
        .state("courts", {
            url: "/courts",
            templateUrl: "app/views/pages/courts.html"
        })
        .state("login", {
            url: "/login",
            templateUrl: "pages/login.html"
        })
        .state("register", {
            url: "/register",
            templateUrl: "pages/register.html"
        });


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});


