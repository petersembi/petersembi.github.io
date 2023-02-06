   // set country color as per population estimate from the countries.geojson file.
   function getCountryColor(popEst)
   {
       if(popEst > 1000000)
       {
           return 'red';

       } else if (popEst > 5000000) {
           return 'blue';
       } else {
           return '#008697';
       }

   }
   // set country styles
   function countriesStyle(feature)
   {
       return {
           fillColor: getCountryColor(feature.properties.pop_est),
           weight: 2,
           opacity: 1,
           color: 'white', 
           dashArray: 3,
           fillOpacity: 0.7
       }
   }

   // Define the centre of the map
   var map = L.map('map').setView([43.8476,18.3564], 3);
   
   // specifying data for all countries
   var countriesLayer = L.geoJson(
       countries,
       {style : countriesStyle}
   ).addTo(map);
 


   /****=============Dynamically display the markers and pop up==============****/

   // var markerClusters = L.markerClusterGroup();

   for (var i = 0; i < markers.length; i++)
   {
       var popup = '<img style="width: 100%" src=\'' + markers[i].img_url +   '\'> <p class="text-center"> ' + markers[i].contact_person +'<br> ' + markers[i].contact_description;
           console.log(popup);

       var myIcon = L.icon({
    iconUrl: 'https://gnrc.net/wp-content/uploads/2023/02/marker-icon.png',
 

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
       
       var m = L.marker([markers[i].latitude, markers[i].longitude], {icon: myIcon})
       m.addTo(map);
       m.bindPopup(popup);
       m.on('mouseover',  function(e) {
           this.openPopup();                
       });
       m.on('mouseout', function (e){
           this.closePopup();
       });
   }




   
