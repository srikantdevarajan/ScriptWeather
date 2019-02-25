const apiKey="c5cefafcd373887acde6ca87dc095f13";
function getLocation(){
  var location=document.getElementById('location');
  var jsonTag = document.getElementById('jsonFile');
  let searchLink="http://api.openweathermap.org/data/2.5/weather?q="+location.value+"&APPID=" + apiKey;
  fetch(searchLink)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var jsonFile=JSON.stringify(myJson);
    console.log(jsonFile);
    var keys = Object.keys(JSON.parse(jsonFile));
    for(var p in keys){
      if(keys.hasOwnProperty(p)){

      }
    }
  });




//{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":288.75,"pressure":1036,"humidity":44,"temp_min":287.15,"temp_max":290.15},"visibility":10000,"wind":{"speed":3.1,"deg":80},"clouds":{"all":0},"dt":1551018000,"sys":{"type":1,"id":1414,"message":0.0034,"country":"GB","sunrise":1550991346,"sunset":1551029544},"id":2643743,"name":"London","cod":200}
}
