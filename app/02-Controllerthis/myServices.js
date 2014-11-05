(function(myApp,undefined){
    myApp.factory('myFactory',function($http){
        return {
            helloWorld:function(){
                return "Hello World desde factoria";
            }
        };
    });


    myApp.service('myService',function($http){
        this.helloWorld=function(){
           return "Hello World desde servicio";
        }
    });

    myApp.provider('myProvider',function(){

        var _hello;
        function helloWorld(){
            return (_hello || '')  + " desde provider";
        }

        this.setHello=function(hello){
            _hello=hello;
        }
        myProvider.$inject =['$http']
        function myProvider(http){
            return{
                helloWorld:helloWorld
            }
        }
        this.$get=myProvider;
    });


}(angular.module('myApp')));
