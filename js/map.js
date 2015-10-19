
// Function to draw your map
var drawMap = function() {

// Create map and set view
var map = L.map('map').setView([40, -100], 5)


// Create a tile layer variable using the appropriate url
var layer =L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')

// Add the layer to your map
layer.addTo(map)

// Execute your function to get data
getData(map)

}

// Function for getting data

var getData = function(map) {
// Execute an AJAX request to get the data in data/response.js
  $.ajax({
       url:'data/response.json',
       type: "get",
       success:function(data) {
         customBuild(data, map);
       }, 
       dataType:"json"
  });

// When your request is successful, call your customBuild function

}

// Loop through your data and add the appropriate layers and points
var customBuild = function( datas, map) {
  // Be sure to add each layer to the map
  
 //var  dataKilled = new L.LayerGroup([]);
 var  dataWhite = new L.LayerGroup([]);
 var  dataBlack = new L.LayerGroup([]);
 var  dataAsian = new L.LayerGroup([]);
 var  dataAmerican = new L.LayerGroup([]);
 var  dataHawaiian = new L.LayerGroup([]);
 var  dataUnknown = new L.LayerGroup([]);
  datas.forEach(function ( data) {
      //for (countTL=0; countTL < data.length; countTL++) {
      if ( data["Race"] == "White"){  
          var circle = new L.circleMarker([ data["lat"],  data["lng"]]);
          circle.addTo( dataWhite);
          var source = "link".link(data["Source Link"]);
          circle.bindPopup( data["Summary"]+ " (" + source + ")");
          if ( data["Hit or Killed?"] == "Killed") {
            circle.setStyle({color: "red"});
          } else {
            circle.setStyle({color: "black"});
          }
          var countTL = 0; 
          for (countTL=0; countTL < data.length; countTL++) {
            console.log("print1");
            if (data["Race"] == "White") {
            countTL = countTL + 1;
            console.log("print");
            }
          }
          $("#top-left").text(countTL);

          //document.getElementById("count").innerHTML = countTL;
      }
    //}
      if ( data["Race"] == "Black or African American"){  
          var circle = new L.circleMarker([ data["lat"],  data["lng"]]);
          circle.addTo( dataBlack);
          circle.bindPopup( data["Summary"]);
          if ( data["Hit or Killed?"] == "Killed") {
            circle.setStyle({color: "red"});
          } else {
            circle.setStyle({color: "black"});
          }
      }
      if ( data["Race"] == "Asian"){  
          var circle = new L.circleMarker([ data["lat"],  data["lng"]]);
          circle.addTo( dataAsian);
          circle.bindPopup( data["Summary"]);
          if ( data["Hit or Killed?"] == "Killed") {
            circle.setStyle({color: "red"});
          } else {
            circle.setStyle({color: "black"});
          }
      }
      if ( data["Race"] == "American Indian or Alaska Native"){  
          var circle = new L.circleMarker([ data["lat"],  data["lng"]]);
          circle.addTo( dataAmerican);
          circle.bindPopup( data["Summary"]);
          if ( data["Hit or Killed?"] == "Killed") {
            circle.setStyle({color: "red"});
          } else {
            circle.setStyle({color: "black"});
          }
      }
      if ( data["Race"] == "Native Hawaiian or Other Pacific Islander"){  
          var circle = new L.circleMarker([ data["lat"],  data["lng"]]);
          circle.addTo( dataHawaiian);
          circle.bindPopup( data["Summary"]);
          if ( data["Hit or Killed?"] == "Killed") {
            circle.setStyle({color: "red"});
          } else {
            circle.setStyle({color: "black"});
          }
      }
      else if ( data["Race"] == "Unknown"){  
          var circle = new L.circleMarker([ data["lat"],  data["lng"]]);
          circle.addTo( dataUnknown);
          circle.bindPopup( data["Summary"]);
          if ( data["Hit or Killed?"] == "Killed") {
            circle.setStyle({color: "red"});
          } else {
            circle.setStyle({color: "black"});
          }
      }

 });
 var layerGroup = {
     "White":  dataWhite,
     "Black or African American": dataBlack,
     "Asian":  dataAsian,
     "American Indian or Alaska Native":  dataAmerican,
     "Hawaiian or Other Pacific Islander":  dataHawaiian,
     "Unknown":  dataUnknown,
 }

 //var layerGroup = L.layerGroup().addTo(map);

    L.control.layers(null, layerGroup).addTo(map);
}

map.on('click', 'selector', function() {

});


