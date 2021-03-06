var app = angular.module('ngChecklist',[]);


 app.controller('checklistController',function($scope){
  //  $scope.save(){
   //
  //  }
   $scope.checkLista=[
     {
       desc:'Check Passport',
       completed: false
     },{
       desc:'Check-in Online',
       completed: false
     },
     {
       desc:'Check Flight Info',
       completed: false
     },
     {
       desc:'Check Baggage Weight',
       completed: false
     },
     {
       desc:'Book a Hotel',
       completed: false
     },
     {
       desc:'Rent a Car',
       completed: false
     },
     {
       desc:'Wash Clothing',
       completed: false
     },
     {
       desc:'Empty Trash',
       completed: false
     },
     {
       desc:'Turn Off Air Conditioner',
       completed: false
     },

   ];

   $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    $scope.saveA=function(){
    var aInfo={desc:$scope.currentA,completed:false};
    $scope.checkLista.splice(0,0,aInfo);
    $scope.currentA='';

  }
   $scope.removeA= function(singlea){
     var position=$scope.checkLista.indexOf(singlea);
     $scope.checkLista.splice(position,1);//1 means how many you want to remove at and after the index
   }
   $scope.editA=function(singlea){
     $scope.currentA='';
 if($scope.showMe === false){$scope.showMe = !$scope.showMe;}
 $scope.currentA=singlea.desc;//input will be filled with which has the edit button you click
  $scope.removeA(singlea);

}
$scope.checkListb=[
  {
    desc:'Charger',
    completed: false
  },{
    desc:'Underwear',
    completed: false
  },{
    desc:'Socks',
    completed: false
  },{
    desc:'Pajamas',
    completed: false
  },{
    desc:'Shirts/Pants/Dresses',
    completed: false
  },{
    desc:'Sunglasses',
    completed: false
  },{
    desc:'Sun Hat',
    completed: false
  },{
    desc:'Sneakers',
    completed: false
  },{
    desc:'Slippers',
    completed: false
  },{
    desc:'Tolietries',
    completed: false
  },{
    desc:'Sunblock',
    completed: false
  },{
    desc:'Umbrella',
    completed: false
  },{
    desc:'Swimming suit',
    completed: false
  },

];
$scope.showMe1 = false;
 $scope.myFunc1 = function() {
     $scope.showMe1 = !$scope.showMe1;
 }
 $scope.saveB=function(){
 var bInfo={desc:$scope.currentB, completed:false};
 $scope.checkListb.splice(0,0,bInfo);
 $scope.currentB='';
}
$scope.removeB= function(singleb){
  var position=$scope.checkListb.indexOf(singleb);
  $scope.checkListb.splice(position,1);//1 means how many you want to remove at and after the index
}
$scope.editB=function(singleb){
   $scope.currentB='';
  if($scope.showMe1 === false){$scope.showMe1 = !$scope.showMe1;}
$scope.currentB=singleb.desc;//input will be filled with which has the edit button you click
$scope.removeB(singleb);

}

 $scope.checkListc=[
   {
     desc:'Swimming suit',
     completed: false
   },{
     desc:'Drivers License',
     completed: false
   },{
     desc:'Reservation/Confirmation',
     completed: false
   },{
     desc:'Itineraries',
     completed: false
   },{
     desc:'Tickets',
     completed: false
   },{
     desc:'StudentID',
     completed: false
   },{
     desc:'Wallet',
     completed: false
   },
   {
     desc:'Keys',
     completed: false
   },

 ];
 $scope.showMe2 = false;
  $scope.myFunc2 = function() {
      $scope.showMe2 = !$scope.showMe2;
  }
  $scope.saveC=function(){
  var cInfo={desc:$scope.currentC,completed:false};
$scope.checkListc.splice(0,0,cInfo);
  $scope.currentC='';
}
 $scope.removeC= function(singlec){
  var position=$scope.checkListc.indexOf(singlec);
  $scope.checkListc.splice(position,1);//1 means how many you want to remove at and after the index
}
 $scope.editC=function(singlec){
    $scope.currentC='';
   if($scope.showMe2 === false){$scope.showMe2 = !$scope.showMe2;}
 $scope.currentC=singlec.desc;//input will be filled with which has the edit button you click
 $scope.removeC(singlec);

 }
  $scope.clearA=function(){
     var clearOnes = $scope.checkLista.filter(function(item){
       return item.completed;
     });

     angular.forEach(clearOnes, function(eachOne){
       var index = $scope.checkLista.indexOf(eachOne);
       $scope.checkLista.splice(index, 1);
     });

   }
   $scope.clearB=function(){
      var clearbs = $scope.checkListb.filter(function(item1){
        return item1.completed;
      });

      angular.forEach(clearbs, function(eachOneb){
        var index = $scope.checkListb.indexOf(eachOneb);
        $scope.checkListb.splice(index, 1);
      });

    }
    $scope.clearC=function(){
       var clearOnes = $scope.checkListc.filter(function(item2){
         return item2.completed;
       });

       angular.forEach(clearOnes, function(eachOnec){
         var index = $scope.checkListc.indexOf(eachOnec);
         $scope.checkListc.splice(index, 1);
       });

     }

// $scope.clearB=function(){
//   var rmvCheckBoxes= $scope.checkListb;
//   for(var i = 0; i < rmvCheckBoxes.length; i++)
//   {    rmvCheckBoxes[i]=singleb
//       if(rmvCheckBoxes[i].checked==true)
//       {
//        $scope.removeB(rmvCheckBoxes[i]);
//       }
//   }
// }

 });




 var locationFormat= null;
$(document).ready(function(){
  var baseUrlGoogle = 'https://maps.googleapis.com/maps/api/geocode/json?address=';//make sure this address conrrect for 404 because some websites change their api url
  var baseUrlForecast='https://api.forecast.io/forecast/';

  $('#get-weather').on('click',processWeather);//click on get weather button

 function processWeather(){
   $('#output').html("");//clear input & info on index html;
   var location=$('#CityState').val();//pass input field to location var;
   getCoordinates(location);//function to get info from google;
 }
 function getCoordinates(data){
   var coordinatesData={
     url:buildUrlGoogle(data),
     dataType:'json',
     success: getForcast,
     error:errorHandler,
   };
   $.ajax(coordinatesData);
 }//date is the city name, build obj coordinatesData, get cityname,latitude,longtitude, and these info goes to success: get forcast

function getForcast(data){
  locationFormat=data.results[0].formatted_address;
  var latitude=data.results[0].geometry.location.lat;
  var longtitude=data.results[0].geometry.location.lng;
  var weatherData={
    url:buildUrlForecast(latitude,longtitude),
    dataType:'jsonp',
    success:showWeather,
    error:errorHandler,
  };
  $.ajax(weatherData);
}//data is info from google;data is obj,index:[0], location will store formatted_address;{}means'.'if[]means index
//pull info wanted;data.hourly.data[0].time is first timeperiod;
//weatherdata and coordinatedata are obj store pulled data;

function showWeather(data){
  var source=$('#summary').html();// what built in html with id of summary;
  var template=Handlebars.compile(source);
  var extractedData={
    currentTime:moment(data.currently.time*1000).format('MMMM Do YYYY, h:mm:ss a'),
    summary:data.currently.summary,
    temperature:data.currently.temperature,
    humidity:data.currently.humidity,
    windSpeed:data.currently.windSpeed,
    windDirection:data.currently.windBearing,
    icon:data.currently.icon,
    city:locationFormat,
  };//what info you want to pull and show; // data inside extractedData are in {{}} for html to locate them
  var html=template(extractedData);
  $('#output').append(html)//pass var html

}
  function buildUrlGoogle(data){
    return baseUrlGoogle+data;//data is location
  }

  function buildUrlForecast(lat,lng){
    return baseUrlForecast+apiKeyForecast+'/'+lat+","+lng;
  }
  function errorHandler(err){
    console.log(err);
  }
});
