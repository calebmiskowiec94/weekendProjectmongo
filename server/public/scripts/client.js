console.log('does this work');

var myApp = angular.module('MyApp',['ngRoute']);



myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{

        templateUrl:'views/home.html',
        
    
}).when('/listings',{
        templateUrl: '/views/listings.html',
        controller: 'ListingsController as vm'

        //conversion example
}).when('/rentals',{
        templateUrl: '/views/rentals.html',
        controller: 'RentalsController as vm'
})
}])
