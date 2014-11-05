(function(myApp,undefined){

    service.$inject = ['$http','$q'];

    function service(http,$q){

        this.getAll = function(){
            var path = 'framework.json';
            var deferred = $q.defer();
            var value = deferred.promise.$object=[];
            http.get(path).then(
                function(response){
                   //utilizamos extend para hacer push en value
                   angular.extend(value,response.data);
                   deferred.resolve(value);
                });

           return deferred.promise;
        };
    }

    myApp.service('newService', service);


}(angular.module('myApp')));
