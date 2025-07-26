window.initMap = function() {
let map;
let markers = [];
let currentInfoWindow = null; // Para almacenar los marcadores de veterinarias

// Datos de las veterinarias en Babahoyo
var veterinarias = [
    {
         name: "Punto de donacion",
        lat: -1.7995502253234619, 
        lng: -79.53780734995031,
        address: "6F26+3VM, Babahoyo",
        phone: ""
    },
    {
        name: "HospiVet Babahoyo Matriz Dr. Javier Schuldt (Av. 25 de Agosto)",
        lat: -1.7996905589217094,
        lng: -79.5211056850945,
        address: "Av. 25 de Agosto y Bolívar, Babahoyo",
        phone: "0991234567"
    },
    {
        name: "Clínica Veterinaria Faytong",
        lat: -1.7998345925603594,
        lng: -79.52722968985694,
        address: "Isaías Chopitea, Babahoyo 120101",
        phone: "0986480863"
    },
    {
        name: "Veterinaria Mundo Animal Babahoyo",
        lat: -1.798290401744764,
        lng: -79.52843131949905,
        address: "Juan Montalvo y Sala Memorial, Babahoyo",
        phone: "0986480863"
    },
    {
        name: "Clínica Veterinaria Mackliff",
        lat: -1.799615987468918,
        lng: -79.53282961161406,
        address: "Eloy Alfaro frente a Publicar, Babahoyo 120101",
        phone: "0992093363"
    },
    {
        name: "Clínica Veterinaria Zoo",
        lat: -1.8040808128306616,
        lng: -79.5385584576472,
        address: "5FW6+2HW, Babahoyo",
        phone: "0997483951"
    },
    {
        name: "ALL ANIMAL CLINICA VETERINARIA",
        lat: -1.7964459498915395,
        lng: -79.52898921897574,
        address: "10 de Agosto, Babahoyo",
        phone: "N/A"
    },
    {
        name: "HospiVet Babahoyo Matriz Dr. Javier Schuldt (Cdla. El Mamey)",
        lat: -1.798968716371171,
        lng: -79.52114885764719,
        address: "Cdla. El Mamey Calle 37 y Av. Tercera, Babahoyo 120101",
        phone: "0991028346"
    },
    {
        name: "HospiVet Babahoyo Matriz Dr. Javier Schuldt (Pedro Carbo)",
        lat: -1.7993198624337439,
        lng: -79.52920379569755,
        address: "Pedro Carbo entre García Moreno y Juan Montalvo, Babahoyo",
        phone: "0982833464"
    },
    {
        name: "CENTRO VETERINARIO DOKIDOKI",
        lat: -1.7991911798793967,
        lng: -79.52928962638624,
        address: "PEDRO CARBO ENTRE GARCIA MORENO Y, Juan Montalvo, Babahoyo",
        phone: "0982833464"
    },
    {
        name: "Veterinaria Chelita",
        lat: -1.799620121691929,
        lng: -79.52916088035317,
        address: "C. Pedro Carbo, Babahoyo 120105",
        phone: "0986807165"
    },
    {
        name: "DavidVet Consultorio Veterinario",
        lat: -1.8003469877269398,
        lng: -79.53577830368025,
        address: "5FX7+JP5, Babahoyo",
        phone: "0993862665"
    },
    {
        name: "Terrapets Centro Veterinario",
        lat: -1.8016306117334069,
        lng: -79.53500178092541,
        address: "509, Babahoyo",
        phone: "0967735332"
    },
    {
        name: "Farmacia Veterinaria El Arca De Noe",
        lat: -1.7973896231655027,
        lng: -79.5295900337968,
        address: "6F2C+J5W, Babahoyo",
        phone: "N/A"
    },
    {
        name: "Veterinaria Animal House Babahoyo",
        lat: -1.796017007333116,
        lng: -79.53139247825996,
        address: "Av. Mal. 9 de Octubre, Babahoyo",
        phone: "0997507978"
    },
    {
        name: "Veterinaria El mundo de los animales Babahoyo",
        lat: -1.8059756616549913,
        lng: -79.54507400368026,
        address: "DECIMA, Y 120105, Babahoyo 120105",
        phone: "0986452495"
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
        img.src = "assets/icone/patits.png"; // 
        img.width = 40;
        img.height = 40;
        img.alt = vetData.name; 
        img.style.objectFit = "contain"; 

        markerContent.appendChild(img);
        return markerContent;
  }
};

