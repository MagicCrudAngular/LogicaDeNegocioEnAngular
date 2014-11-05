(function(myApp,undefined){

    controller.$inject = ["$scope", "newService"];
    function controller(scope,newService){
        // utiliza restangular
        scope.model = newService.getAll().$object;



    }
    myApp.controller('myController',controller);
}(angular.module("myApp")));
