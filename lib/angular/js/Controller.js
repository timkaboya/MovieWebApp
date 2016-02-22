/**
 * Created by Obi on 2/12/2016.
 */
var movieContoller = angular.module('movieControllers', []);

movieContoller.controller("ListController",['$scope', '$http', function($scope, $http){
    $http.get('data/imdb-data-new.json').success(function (data){
        $scope.movies = data;
        $scope.orderByTitleOrYear = 'Year';
        //console.log($scope.movies[0]);
    });
}]);

movieContoller.controller("MovieDetailController",['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('data/imdb-data-new.json').success(function (data){
        $scope.movies = data;
        $scope.orderByTitleOrYear = 'Year';
        $scope.whichMovie = $routeParams.itemId;

        //console.log($scope.whichMovie);
    });
}]);