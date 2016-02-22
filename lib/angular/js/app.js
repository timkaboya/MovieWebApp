var myApp = angular.module("myApp", [
    'ngRoute', 'movieControllers'
])

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/movie',{
        templateUrl:"movie.html",
            controller: 'ListController'
    }).
        when('/details/:itemId', {
        templateUrl: 'details.html',
        controller: 'MovieDetailController'
    }).
    otherwise({
        redirectTo:'/movie'
        });
}])