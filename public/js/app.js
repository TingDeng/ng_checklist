var app = angular.module('ngChecklist',[]);


 app.controller('checklistController',function($scope){
  //  $scope.save(){
   //
  //  }
   $scope.checkLista=['Check Passport','Check-in Online','Check Flight Info','Check Baggage Weight','Wash Clothing','Empty Trash','Turn Off Air Conditioner']
   $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    $scope.saveA=function(){
    var aInfo=$scope.currentA;
    $scope.checkLista.splice(0,0,aInfo);
    $scope.currentA='';

  }
   $scope.removeA= function(singlea){
     var position=$scope.checkLista.indexOf(singlea);
     $scope.checkLista.splice(position,1);//1 means how many you want to remove at and after the index
   }
   $scope.editA=function(singlea){
 if($scope.showMe === false){$scope.showMe = !$scope.showMe;}
 $scope.currentA=singlea;//input will be filled with which has the edit button you click
  $scope.removeA(singlea);
}
$scope.checkListb=['Underwear','Socks','Pajamas','Shirts/Pants/Dresses','Sunglasses','Sun Hat','Sneakers','Slippers','Tolietries']
$scope.showMe1 = false;
 $scope.myFunc1 = function() {
     $scope.showMe1 = !$scope.showMe1;
 }
 $scope.saveB=function(){
 var bInfo=$scope.currentB;
 $scope.checkListb.splice(0,0,bInfo);
 $scope.currentB='';
}
$scope.removeB= function(singleb){
  var position=$scope.checkListb.indexOf(singleb);
  $scope.checkListb.splice(position,1);//1 means how many you want to remove at and after the index
}
$scope.editB=function(singleb){
  if($scope.showMe1 === false){$scope.showMe1 = !$scope.showMe1;}
$scope.currentB=singleb;//input will be filled with which has the edit button you click
$scope.removeB(singleb);
}
 $scope.checkListc=['Drivers License','Hotel Confirmation','Itineraries','Tickets','StudentID']
 $scope.showMe2 = false;
  $scope.myFunc2 = function() {
      $scope.showMe2 = !$scope.showMe2;
  }
  $scope.saveC=function(){
  var cInfo=$scope.currentC;
$scope.checkListc.splice(0,0,cInfo);
  $scope.currentC='';
}
 $scope.removeC= function(singlec){
  var position=$scope.checkListc.indexOf(singlec);
  $scope.checkListc.splice(position,1);//1 means how many you want to remove at and after the index
}
 $scope.editC=function(singlec){
   if($scope.showMe2 === false){$scope.showMe2 = !$scope.showMe2;}
 $scope.currentC=singlec;//input will be filled with which has the edit button you click
 $scope.removeC(singlec);
 }

 });
