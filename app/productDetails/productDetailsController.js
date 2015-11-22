shopalystApp.controller('productDetailsController',
    function EventController($scope, productData, $route, myCache, CacheFactory) {

    $scope.sortorder = 'offerPrice';

    //to store likes in localStorage permanently
    var myCache = CacheFactory.get('myCache');
    myCache.setOptions({
        onExpire : function(key,value){
        myCache.put(key,value);
      }
    });

    //to create the product model
    var promise = productData.getProduct();
    promise.then(function(event) {
    $scope.product = event.productList;
    }, function(event) {
    alert("Failed");
    });

    //to store productId and likes count as key, value pair
    $scope.addToCache = function(key){
      if(isNaN(myCache.get(key)))
       return myCache.put(key, 1);
       return myCache.put(key, myCache.get(key) + 1);
    };

    //to retrieve the cache key value
    $scope.getFromCache = function(key){
        return myCache.get(key);
    };

    $scope.isChecked = function(){
      var arr = [];
      angular.forEach($scope.checkboxModel, function(value, key) {
        this.push(key);
      }, arr);
        $scope.choice = arr.join();

        var promise = productData.getProductByDivision($scope.choice);
        promise.then(function(event) {
        $scope.product = event.productList;
        }, function(event) {
        alert("Failed");
        });
    }



});
