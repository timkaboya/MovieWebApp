/**
 * Created by Obi on 2/12/2016.
 */
var myApp = angular.module('myApp', []);

myApp.controller("MyController",['$scope', '$http', function($scope, $http){
    $http.get('data/imdb-data-new.json').success(function (data){
        $scope.movies = data;
        $score.orderByTitleOrYear = 'Year';
        //console.log($scope.movies[0]);
    });
}]);