(function(myApp,undefined){
   myApp.controller('myController',function($scope,myValue,myCostant,myFactory,myService,myProvider){

       //this no es el scope sino que en este se crea una propidedad
       //en este caso alias que apunta a la función del controlador
       //esta no es singleton y se crea una nueva instancia con
       //cualquier controlador.

       this.init=function(){
        this.factory = myFactory.helloWorld();
        this.service = myService.helloWorld();
        this.provider = myProvider.helloWorld();
      }
      this.init();

      //si utilizas un alias usa siempre esta forma
      this.click =function(){
          myService.helloWorld();
      };

      //con esta otra estás cambiando this del servicio no utilizar.
      this.otherClick = myService.helloWorld;

   });
}(angular.module('myApp')));
