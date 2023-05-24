function iniciarMap () {
    var coord = {lat:-34.4548438 ,lng: -58.8597139};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}