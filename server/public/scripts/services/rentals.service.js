myApp.service('RentalsService', ['$http', function($http) {
    console.log('Person service loaded.');

    var self = this;
    self.gottenRentals = { list: [] };

    self.getRentals = function() {
        $http.get('/rentals').then(function(response) {
            self.gottenRentals.list = response.data;

            console.log('get response: ', self.gottenRentals);
        });
    };

    self.addRentals = function(newRentals) { 
        newRentals.internet_pts = 1000;
       console.log('going to send this object to the server: ', newRentals);

               
        $http.post('/rentals', newRentals).then(function(response) {
            console.log('service post response: ', response);
            self.getRentals();            
        });
    };
    }]);