'use strict';
//to retrie value from the shopalyst api

shopalystApp.factory('productData', function( $resource , $q) {
    var resource = $resource('http://dev.shopalyst.com/shopalyst-service/hackerearth002/1.0/products');
    var resouceByDivision = $resource('http://dev.shopalyst.com/shopalyst-service/hackerearth002/1.0/products?divisionFilter= :id',{id:'@id'})
    return {
      getProduct  : function() {
        var deferred = $q.defer();
        resource.get().
        $promise.then( function(response) {
        deferred.resolve(response);
        }, function(response) {
        deferred.reject(response);
       });
       return deferred.promise;
    },

    getProductByDivision : function(choice){
      var deferred = $q.defer();
      resouceByDivision.get({id: choice }).
      $promise.then( function(response) {
      deferred.resolve(response);
      }, function(response) {
      deferred.reject(response);
     });
     return deferred.promise;

    }
}});
