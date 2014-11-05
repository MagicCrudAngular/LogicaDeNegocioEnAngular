(function(myApp,undefined){
    myApp.config(function(myCostant,myProviderProvider,myValueProvider){
        //como puedes ver no solo se pueden inyectar constantes y provider
        //puedes injectar values,servicios y factorias seguidos de su
        //nombre y la palabra reservada Provider.
        //al final para obtener el valor siempre se invoca a $get
        //con lo cual todos son factorias.
        myProviderProvider.setHello('Hola Mundo');
    });
}(angular.module('myApp')));
