const apiKey="c5cefafcd373887acde6ca87dc095f13";
function getLocation(){
  var location=document.getElementById('location');
  var jsonTag = document.getElementById('jsonFile');
  var temp=5;
  let searchLink="http://api.openweathermap.org/data/2.5/weather?q="+location.value+"&APPID=" + apiKey;
  fetch(searchLink)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var jsonFile=JSON.stringify(myJson);
    console.log(jsonFile);
    var keys = Object.keys(JSON.parse(jsonFile));
    var temp = (9/5)*(myJson.main.temp -273) + 32;
    temp = Number((temp).toFixed(1));
    console.log(temp);
    document.getElementById("temperature").innerHTML = 'Temperature: ' + temp;
    document.getElementById("humidity_percentage").innerHTML = "Humidity Percentage: " + myJson.main.humidity + "%";
    document.getElementById("description").innerHTML = "Weather Description: " + myJson.weather[0].description;
    document.getElementById("cloudiness_percentage").innerHTML = "Cloudiness Percentage " + myJson.clouds.all;
    console.log("cloudiness percentage: " + myJson.clouds.all);
  });



}
