let options={
    enableHihgAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success, 
        error, 
        options
    )
}else{
    alert("La geolocalización no esta activada");
}

function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map',{
        center:[latitude,longitude],
        zoom: 16
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Mi openStreetMap'}).addTo(map)
    // ----------------ICONOS------------
    let inicio = L.icon({
        iconUrl: '../assets/images/maps/leaf-green.png',
        shadowUrl: '../assets/images/maps/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize:[50, 64],
        iconAnchor:[22, 94],
        shadowAnchor:[4, 62],
        popupAnchor:[-3, -76]
    })   
    
    let final = L.icon({
        iconUrl: '../assets/images/maps/leaf-red.png',
        shadowUrl: '../assets/images/maps/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize:[50, 64],
        iconAnchor:[22, 94],
        shadowAnchor:[4, 62],
        popupAnchor:[-3, -76]
    })

    let track = L.icon({
        iconUrl: './assets/images/maps/leaf-orange.png',
        shadowUrl: './assets/images/maps/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize:[50, 64],
        iconAnchor:[22, 94],
        shadowAnchor:[4, 62],
        popupAnchor:[-3, -76]
    })


    //-----------------RUTA--------------
    let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(37.519328, -5.986004)    
        ],
        language: 'es',
        createMarker: function(i, wp, nWps){
            switch(i){
                case 0:
                    return L.marker(wp.latLng, {icon:inicio, draggable:true}).bindPopup("Calle Granada, 19. Alcalá del Rio. 41200. Sevilla. Tel. 635525659. Email.tonimellado@myweb.com");
                case nWps-1: 
                    return L.marker(wp.latLng, {icon:final, draggable:true}).bindPopup("Final Ruta");
                default:
                    return L.marker(wp.latLng, {icon:trank, draggable:true}).bindPopup("Intermedio Ruta");
            }
        }

    }).addTo(map);
    }


function error(){
    let map = L.map('map',{
        center:[37.519328, -5.986004],
        zoom: 16
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Mi openStreetMap'}).addTo(map)
}

