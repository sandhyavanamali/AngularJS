(function(){
  'use strict';
  angular.module("nameCalculatorApp",[])
          .controller("nameCalculatorController",function($scope){
            $scope.name="";
            $scope.totalValue = 0;

            $scope.displayNumeric = function(){
              var totalNameValue = getNameValue($scope.name);
              $scope.totalValue = totalNameValue;
            }

          });
          function getNameValue(name){
            var totalVal = 0;
            for(var i = 0;i<name.length;i++){
              totalVal += name.charCodeAt(i);
            }
            return totalVal;
          }
})();
