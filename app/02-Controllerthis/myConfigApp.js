(function(myApp,undefined){
    myApp.config(function(myCostant,myProviderProvider,myValueProvider){
        myProviderProvider.setHello('hola mundo');
    });
}(angular.module('myApp')));
