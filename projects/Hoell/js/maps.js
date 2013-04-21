var geocoder;
var map;
var marker;
var startMarker;
var endMarker;
var poly;
var path;

var twoTrue = false;
var threeTrue = false;
var fourTrue = false;
//localStorage.startLong = mapsLong;
//var mapsLong = localStorage.startLong;


function initialize(){
var myLatlng = new google.maps.LatLng(Number(localStorage.startLat), Number(localStorage.startLong));
var endLatlng = new google.maps.LatLng(Number(localStorage.endLat), Number(localStorage.endLong));
var twoLatlng = new google.maps.LatLng(Number(localStorage.endLat), Number(localStorage.endLong));


	var myOptions = {
		zoom: 5,
		center: myLatlng,
		//center: new google.maps.LatLng(Number(localStorage.startLong), Number(localStorage.startLat)),
		mapTypeId: google.maps.MapTypeId.ROADMAP,			
	}; //myOptions Close

map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);





 document.getElementById('headerRight').innerHTML = "WELCOME, " + localStorage.bandName;
 document.getElementById('field_name').innerHTML = localStorage.startCityName;
  document.getElementById('end_name').innerHTML = localStorage.endCityName;
 
 

 var imageOne = './Images/markerOneDH.png';
 var imageTwo = './Images/markerTwo.png';
  var imageThree = './Images/markerThree.png';
   var imageFour = './Images/markerFour.png';
    var imageFive = './Images/marker5.png';

geocoder = new google.maps.Geocoder();

  var startMarker = new google.maps.Marker({
      position: myLatlng,
      draggable: true,
      map: map,
      icon: imageOne 
  });
  
  var endMarker = new google.maps.Marker({
      position: endLatlng,
      draggable: true,
      map: map, 
      icon: imageFive 
  });
  




document.getElementById('tourDatesDH2').onclick = function () { // ON CLICK TOUR DATE DH2
			 
			  if(twoTrue == true){  // IF TRUE DO NOTHING
			
			   } else { //ELSE DO THE FOLLOWING
			   
				   	 var twoMarker = new google.maps.Marker({
				    	  position: map.getCenter(),
				    	  map: map,
				   		  draggable: true,
				   		  icon: imageTwo
				     });
				     
			     twoTrue = true; // SET TO TRUE
			     
			     
			     document.getElementById('two_name').innerHTML = "Drag Marker";
				
				 google.maps.event.addListener(twoMarker, 'drag', function() { // WHAT DO I DO IF I DRAG MARKER
				 geocoder.geocode({'latLng': twoMarker.getPosition()}, function(results, status) {
				 if (status == google.maps.GeocoderStatus.OK) {
					
								
				if (results[0]) {
								
								function getCityState(results)
					      			  {
							            var citystateArray = results[1].formatted_address.split(",",2);
							            var city = citystateArray[0];
							            var state = citystateArray[1].substring(1, 3);
							            return (city + ', ' + state)
					       			 }
					
				$('#two_name').text(String(getCityState(results)));
									}
								}
					
				});
				});

}; 
}//END New Mark Two

document.getElementById('tourDatesDH3').onclick = function () {
			 
			  if(threeTrue == true){
			  
			   } else {
			   	 var threeMarker = new google.maps.Marker({
			      position: map.getCenter(),
			      map: map,
			      draggable: true,
			      icon: imageThree 
			     });
			     threeTrue = true;
			     document.getElementById('three_name').innerHTML = "Drag Marker";
				 google.maps.event.addListener(threeMarker, 'drag', function() {
				 geocoder.geocode({'latLng': threeMarker.getPosition()}, function(results, status) {
				 if (status == google.maps.GeocoderStatus.OK) {
					
								
				if (results[0]) {
								
								function getCityState(results)
					      			  {
							            var citystateArray = results[1].formatted_address.split(",",2);
							            var city = citystateArray[0];
							            var state = citystateArray[1].substring(1, 3);
							            return (city + ', ' + state)
					       			 }
					
								 $('#three_name').text(String(getCityState(results)));
									}
								}
					
				});
				});

}; 
	
			    
} //END New Mark Three



document.getElementById('tourDatesDH4').onclick = function () {
			
			  if(fourTrue == true){
			  
			   } else {
			   	 var fourMarker = new google.maps.Marker({
			      position: map.getCenter(),
			      map: map,
			      draggable: true,
			      icon: imageFour
			     });
			     fourTrue = true;
			     document.getElementById('four_name').innerHTML = "Drag Marker";
				 google.maps.event.addListener(fourMarker, 'drag', function() {
				 geocoder.geocode({'latLng': fourMarker.getPosition()}, function(results, status) {
				 if (status == google.maps.GeocoderStatus.OK) {
					
								
				if (results[0]) {
								
								function getCityState(results)
					      			  {
							            var citystateArray = results[1].formatted_address.split(",",2);
							            var city = citystateArray[0];
							            var state = citystateArray[1].substring(1, 3);
							            return (city + ', ' + state)
					       			 }
					
								 $('#four_name').text(String(getCityState(results)));
									}
								}
					
				});
				});

}; 
	
			    
} //END New Mark Four








////////// START MARKER 1 DRAG UPDATE ////////////////////

			google.maps.event.addListener(startMarker, 'drag', function() {
			geocoder.geocode({'latLng': startMarker.getPosition()}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {

			
			if (results[0]) {
			
			function getCityState(results)
      			  {
		            var citystateArray = results[1].formatted_address.split(",",2);
		            var city = citystateArray[0];
		            var state = citystateArray[1].substring(1, 3);
		            return (city + ', ' + state)
       			 }

			 $('#field_name').text(String(getCityState(results)));
			 drawPoly();
				}
			}

		});
});

////////// STOP START MARKER 1 DRAG UPDATE ////////////////////


////////// END MARKER  DRAG UPDATE ////////////////////

			google.maps.event.addListener(endMarker, 'drag', function() {
			geocoder.geocode({'latLng': endMarker.getPosition()}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {

			
			if (results[0]) {
			
			function getCityState(results)
      			  {
		            var citystateArray = results[1].formatted_address.split(",",2);
		            var city = citystateArray[0];
		            var state = citystateArray[1].substring(1, 3);
		            return (city + ', ' + state)
       			 }

			 $('#end_name').text(String(getCityState(results)));
			 drawPoly();
				}
			}

		});
});

////////// STOP END MARKER  DRAG UPDATE ////////////////////



////////// TWO MARKER  DRAG UPDATE ////////////////////

			
////////// STOP TWO MARKER  DRAG UPDATE ////////////////////



drawPoly();
}



function toggleBounce() {

  if (startMarker.getAnimation() != null) {
    startMarker.setAnimation(null);
  } else {
    startMarker.setAnimation(google.maps.Animation.BOUNCE);

  }
}

$(document).ready(function() {

initialize();





	
	
})






function drawPoly(){

	


		var mapCoordinates = [
		    new google.maps.LatLng(startMarker.getPosition().lat(), startMarker.getPosition().lng()),
		    new google.maps.LatLng(endMarker.getPosition().lat(), endMarker.getPosition().lng())
		
		  ];
		  var mapPath = new google.maps.Polyline({
		    path: mapCoordinates,
		    strokeColor: "#FF0000",
		    strokeOpacity: 1.0,
		    strokeWeight: 2
		  });
		
		  mapPath.setMap(map);
		  

		
		

}
