myApp.controller('ListingsController',['ListingsService',function(ListingsService){
var self = this;
self.listingsThings = ListingsService.listings;


}]);