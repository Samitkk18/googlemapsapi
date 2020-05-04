var geocoder;
var map;
function loadMap(){
    var mumbai = {lat: 19.0760, lng: 72.8777}
     map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: mumbai
    });
    var marker = new google.maps.Marker({
        position: mumbai,
        map: map
      });

      var cdata = JSON.parse(document.getElementById('data').innerHTML);
    geocoder = new google.maps.Geocoder();  
    codeAddress(cdata);

    var allData = JSON.parse(document.getElementById('allData').innerHTML);
    showAllColleges(allData)
}

function codeAddress(cdata) {
    Array.prototype.forEach.call(cdata, function(data){
         var address = data.name + ' ' + data.address;
         geocoder.geocode( { 'address': address}, function(results, status) {
           if (status == 'OK') {
             map.setCenter(results[0].geometry.location);
             var points = {};
             points.id = data.id;
             points.lat = map.getCenter().lat();
             points.lng = map.getCenter().lng();
             updateCollegeWithLatLng(points);
           } else {
             alert('Geocode was not successful for the following reason: ' + status);
           }
         });
     });
 }


 function updateCollegeWithLatLng(points) {
	$.ajax({
		url:"action.php",
		method:"post",
		data: points,
		success: function(res) {
			console.log(res)
		}
	})
	
}

function showAllColleges(allData) {
	var infoWind = new google.maps.InfoWindow;
	Array.prototype.forEach.call(allData, function(data){
		var content = document.createElement('div');
		var strong = document.createElement('strong');
		
		strong.textContent = data.name;
		content.appendChild(strong);

		var img = document.createElement('img');
		img.src = 'img/https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60.jpg';
		img.style.width = '100px';
		content.appendChild(img);

		var marker = new google.maps.Marker({
	      position: new google.maps.LatLng(data.lat, data.lng),
	      map: map
	    });

	    marker.addListener('mouseover', function(){
	    	infoWind.setContent(content);
	    	infoWind.open(map, marker);
	    })
	})
}