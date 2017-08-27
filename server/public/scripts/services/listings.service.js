myApp.service('ListingsService', ['$http', function($http) {
    console.log('Person service loaded.');

    var self = this;
    self.gottenListings = { list: [] };

    self.getListings = function() {
        $http.get('/listings').then(function(response) {
            self.gottenListings.list = response.data;

            console.log('get response: ', self.gottenListings);
        });
    };

    self.addListings = function(newListings) { 
        newListings.internet_pts = 1000;
       console.log('going to send this object to the server: ', newListings);

               
        $http.post('/listings', newListings).then(function(response) {
            console.log('service post response: ', response);
            self.getListings();            
        });
    };
    }]);