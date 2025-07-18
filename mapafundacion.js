window.initMap = function() {
let map;
let markers = [];
let currentInfoWindow = null;

var veterinarias = [
    {
        name: "Marcando Huellas Fundacion",
        lat: -1.7996905589217094,
        lng: -79.5211056850945,
        address: "Av. 25 de Agosto y Bolívar, Babahoyo",
        phone: "0991234567"
    },
];

     const babahoyo = { lat: -1.8007, lng: -79.5345 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: babahoyo,
        zoom: 14,
        mapId: "28216248d5bddf372d686b73",
        styles: [
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            { featureType: "transit", stylers: [{ visibility: "off" }] }
        ]
    });

    // Manejar click en el mapa
    map.addListener("click", function (e) {
        var lat = e.latLng.lat();
        var lng = e.latLng.lng();
        document.getElementById("lat").value = lat;
        document.getElementById("lng").value = lng;
    });

    

    // Añadir marcadores
    veterinarias.forEach(vet => {
        const marker = new google.maps.marker.AdvancedMarkerElement({
            map,
             position: { lat: vet.lat, lng: vet.lng },
             title: vet.name,
             content: createCustomMarker(vet) // para personalizar, si quieres
            });


const infoWindow = new google.maps.InfoWindow({
      content: `
        <h3 style="margin-top:0;margin-bottom:5px;color:#333;">${vet.name}</h3>
        <p style="margin-bottom:3px;">Dirección: ${vet.address}</p>
        ${
          vet.phone && vet.phone !== "N/A"
            ? `<p style="margin-bottom:0;">Teléfono: ${vet.phone}</p>`
            : ""
        }
      `
    });

    marker.addListener("click", () => {
      if (currentInfoWindow) currentInfoWindow.close();
      infoWindow.open(map, marker);
      currentInfoWindow = infoWindow;
    });

    markers.push(marker);
  });

  // Función para crear contenido HTML del marcador
  function createCustomMarker(vetData) {
    const markerContent = document.createElement("div");
     markerContent.style.width = "40px"; 
        markerContent.style.height = "40px"; 
        markerContent.style.display = "flex"; 
        markerContent.style.justifyContent = "center";
        markerContent.style.alignItems = "center";

        const img = document.createElement("img");
        img.src = "assets/icone/logo.png"; // 
        img.width = 40;
        img.height = 40;
        img.alt = vetData.name; 
        img.style.objectFit = "contain"; 

        markerContent.appendChild(img);
        return markerContent;
  }
};

