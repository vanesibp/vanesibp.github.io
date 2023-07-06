// codigo para el mapa de google maps:

//Función que muestra las indicaciones desde la dirección de partida indicada:
function calculateDirections(directionsService, directionsRenderer) {
  var startAddress = document.getElementById('start-address').value;

  var request = {
    origin: startAddress, // Punto de origen
    destination: {lat:-34.455262 ,lng: -58.895253}, // Punto de destino
    travelMode: 'DRIVING' // Modo de viaje (DRIVING, WALKING, TRANSIT, etc.)
  };

  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    }
  });
}
//Inicia el mapa de Google:
function iniciarMap(){
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    var coord = {lat:-34.455262 ,lng: -58.895253};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });


    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('directions-panel'));
  
    
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
        title: 'VanWil'

    });
    var contentString = '<h3>¡Estamos sobre la vieja Ruta 8!</h3>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });



    var form = document.getElementById('directions-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      calculateDirections(directionsService, directionsRenderer);
    });
}

