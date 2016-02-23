(function () {
    var app = angular.module('myApp', []);

    app.controller('myCtrl', function($scope, $rootScope, $timeout, myService) {
       
       $scope.name = 'Grinti(scope)';
       $scope.scores = [90, 89, 100];
       $rootScope.name = 'Grinti(rootscope)';
       
       //   Get data from service
       myService.setName('Grinti');
       $scope.sayHello = myService.sayHello();
       
       $timeout(function() {
           
       }, 1000);
    });
    
    app.service('myService', function() {
        
       var person = this;
       this.sayHello = function() {
           return "Hello, " + person.name;
       };
       this.getName = function() {
           return person.name;
       };
       this.setName = function(name) {
           person.name = name;
       };
       this.success = function(handleFunction) {
           return 'success';
       }
    });
    
    app.filter('convertToMessage', ['myService', function(myService) {
        return function(name) {
            myService.setName(name);
            return myService.sayHello();
        };
    }]);
})();