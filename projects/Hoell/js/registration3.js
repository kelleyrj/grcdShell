var geocoder;
var map;
var startMarker;
var endMarker;
var poly;
var path;
var startL;
function initialize(){



	var myOptions = {
		zoom: 5,
		center: new google.maps.LatLng(39.1031182, -84.51201960000003),
		mapTypeId: google.maps.MapTypeId.ROADMAP,	
	}; //myOptions Close

map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

geocoder = new google.maps.Geocoder();
	
	
	
	
	startMarker = new google.maps.Marker({
	
						map: map,
						
			//draggable: true
	
	});

	endMarker = new google.maps.Marker({
			
		
			map: map,
			//draggable: true
	
	});




}
$(document).ready(function() {

initialize();

	$(function() {
		$("#startLoc").autocomplete({
			//This bit uses the geocoder to fetch address values
			source: function(request, response) {
			geocoder.geocode( {'address': request.term }, function(results, status) {
			response($.map(results, function(item) {
			if( $.inArray('locality', item.types)>-1) { //CHECKS ONLY FOR CITIES
			return {
			label: item.formatted_address,
			value: item.formatted_address,
			latitude: item.geometry.location.lat(),
			longitude: item.geometry.location.lng()
			}
			} //CITIES CLOSURE
			
			if (results[0]) {
			
			function getCityState(results)
      			  {
		            var citystateArray = results[1].formatted_address.split(",",2);
		            var city = citystateArray[0];
		            var state = citystateArray[1].substring(1, 3);
		            return (city + ', ' + state)
       			 }

			$('#startLoc').val(getCityState(results));
			
			
						//$('#latitude').val(startMarker.getPosition().lat());
			//$('#longitude').val(startMarker.getPosition().lng());
			// $('#field_name').text(String(getCityState(results)));
				}
			
			
			
		}));
	})
},
//This bit is executed upon selection of an address
select: function(event, ui) {
			//$("#latitude").val(ui.item.latitude);
			//$("#longitude").val(ui.item.longitude);
			var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
			startMarker.setPosition(location);
			map.setZoom(6); //SETS THE ZOOM VALUE FOR AFTER A CITY IS SELECTED
			map.setCenter(location);
			drawPoly();
			
			}
			});
});
			
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

			$('#startLoc').val(getCityState(results));
			

			drawPoly();
				}
			}

		});
	});
	
	
	
	// END MARKER
	
	$(function() {
		$("#endLoc").autocomplete({
			//This bit uses the geocoder to fetch address values
			source: function(request, response) {
			geocoder.geocode( {'address': request.term }, function(results, status) {
			response($.map(results, function(item) {
			if( $.inArray('locality', item.types)>-1) { //CHECKS ONLY FOR CITIES
			return {
			label: item.formatted_address,
			value: item.formatted_address,
			latitude: item.geometry.location.lat(),
			longitude: item.geometry.location.lng()
			}
			} //CITIES CLOSURE
			
			if (results[0]) {
			
			function getCityState(results)
      			  {
		            var citystateArray = results[1].formatted_address.split(",",2);
		            var city = citystateArray[0];
		            var state = citystateArray[1].substring(1, 3);
		            return (city + ', ' + state)
       			 }

			$('#endLoc').val(getCityState(results));
			
				}
			
			
			
		}));
	})
},
//This bit is executed upon selection of an address
select: function(event, ui) {
			//$("#latitude").val(ui.item.latitude);
			//$("#longitude").val(ui.item.longitude);
			var location2 = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
			
			endMarker.setPosition(location2);
			drawPoly();
			//map.setZoom(6); //SETS THE ZOOM VALUE FOR AFTER A CITY IS SELECTED
			map.setCenter(location2);
			
			
			}
			});
});
			
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

			$('#endLoc').val(getCityState(results));
			drawPoly();
			
			//$('#latitude').val(startMarker.getPosition().lat());
			//$('#longitude').val(startMarker.getPosition().lng());
			// $('#field_name').text(String(getCityState(results)));
			
				}
			}

		});
		
		
		
	});


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
