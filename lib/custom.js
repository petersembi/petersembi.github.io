
   
   // set country color as per population estimate from the countries.geojson file.
   function getCountryColor(popEst)
   {
       if(popEst > 100000000)
       {
           return '#565656 ';
        // return '#99cfd5';
          

       } else if (popEst > 50000000) {
           return '#339fac';
       } else {
        return '#008797';
        //    return '#008697';
       }

   }
   // set country styles
   function countriesStyle(feature)
   {
       return {
           fillColor: getCountryColor(feature.properties.POP_EST),
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
        //    console.log(popup);

       var myIcon = L.icon({
    iconUrl: 'https://gnrc.net/wp-content/uploads/2023/02/marker-icon.png',
 

    iconSize: [25, 41], // size of the icon
    
});

        var myIcon = L.divIcon({
            className: 'donut'
            //html: "<div class=\"donut\" ></div>"
        });

        const myCustomColour = '#F8C700'

        const markerHtmlStyles = `
        background-color: ${myCustomColour};
        width: 2rem;
        height: 2rem;
        display: block;
        left: -1.5rem;
        top: -1.5rem;
        position: relative;
        border-radius: 3rem 3rem 0;
        transform: rotate(45deg);
        border: 1px solid #FFFFFF`

        const icon = L.divIcon({
        className: "my-custom-pin",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${markerHtmlStyles}" />`
        })
       
       var m = L.marker([markers[i].latitude, markers[i].longitude], {icon:icon})
       m.addTo(map);
       m.bindPopup(popup);
       m.on('mouseover',  function(e) {
           this.openPopup();                
       });
       m.on('mouseout', function (e){
           this.closePopup();
       });
   }




   
