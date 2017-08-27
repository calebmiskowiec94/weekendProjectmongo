myApp.service('ListingsService', ['$http', function($http) {
    console.log('Person service loaded.');
    var self = this;
    self.listings = { list: [] };

    self.getListings = function() {
        $http.get('/listings').then(function(response) {
            self.listings.list = response.data;
            console.log(response.data);
            console.log('get response: ', self.listings);
        });
    };
    self.getListings();
    }]); 