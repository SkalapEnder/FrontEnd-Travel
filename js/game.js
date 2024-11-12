function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var dropzone = event.target;

    if (dropzone.classList.contains('dropzone')) {
        if (!dropzone.hasChildNodes()) {
            var draggedWord = document.getElementById(data);
            dropzone.appendChild(draggedWord);
            dropzone.classList.add("filled");
        } else {
            var existingWord = dropzone.firstChild;
            var wordBank = document.getElementById('word-bank');
            wordBank.appendChild(existingWord);
            dropzone.appendChild(document.getElementById(data));
        }
    }
}

function checkSentence() {
    const correctOrder = ['you', 'are', 'the', 'cause', 'of', 'my', 'euphoria'];
    let sentence = [];
    document.querySelectorAll('.dropzone').forEach(function(dropzone) {
        if (dropzone.firstChild) {
            sentence.push(dropzone.firstChild.textContent);
        }
    });

    if (sentence.join(' ') === correctOrder.join(' ')) {
        document.getElementById('result').innerHTML = "Congratulations!";
        document.getElementById('song').style.display = 'block';
        document.getElementById('song').play();
        playButtonSound();
        setTimeout(closeGame, 3000);
        closeGame();
    } else {
        document.getElementById('result').innerHTML = "Try again!";
        resetGame();
        document.getElementById('song').style.display = 'none';
    }
}

function playButtonSound() {
    var buttonSound = document.getElementById("button-sound");
    buttonSound.play();
}

function playButtonSounError() {
    var buttonSoundError = document.getElementById("button-sound-error");
    buttonSoundError.play();
}

function resetGame() {
    playButtonSounError();
    var wordBank = document.getElementById('word-bank');
    var dropzones = document.querySelectorAll('.dropzone');

    dropzones.forEach(function(dropzone) {
        if (dropzone.firstChild) {
            wordBank.appendChild(dropzone.firstChild);
        }
        dropzone.classList.remove("filled");
    });

    document.getElementById('result').innerHTML = "";
    
    closeGame();
}

function closeGame() {
    var gameContainer = document.querySelector('.game-container');
    gameContainer.style.opacity = '0'; 
    setTimeout(function() {
        gameContainer.style.display = 'none';
    }, 500); 
}
document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeGame();
        }
    });

let map, service, infoWindow, directionsService, directionsRenderer;
let allHotels = [];
let chosenHotels = JSON.parse(localStorage.getItem("chosenHotels")) || [];

function initMap() {
  const kazakhstanCenter = { lat: 48.0196, lng: 66.9237 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: kazakhstanCenter,
    zoom: 6,
  });

  infoWindow = new google.maps.InfoWindow();
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(userLocation);
        map.setZoom(14);
        findNearbyHotels(userLocation);
      },
      () => {
        alert("Location access denied. Showing default location.");
        findNearbyHotels(kazakhstanCenter);
      }
    );
  } else {
    alert("Geolocation not supported.");
    findNearbyHotels(kazakhstanCenter);
  }
function applyFilters() {
  const ratingFilter = document.getElementById('rating-filter').value;
  const distanceFilter = document.getElementById('distance-filter').value;

  let filteredHotels = [...allHotels];

  // Filter by rating
  if (ratingFilter !== 'all') {
    const minRating = parseFloat(ratingFilter);
    filteredHotels = filteredHotels.filter(hotel => (hotel.rating || 0) >= minRating);
  }

  // Filter by distance (only the nearest 5 hotels)
  if (distanceFilter === '5') {
    filteredHotels = filteredHotels.slice(0, 5);
  }

  displayHotels(filteredHotels);
}

  document.getElementById("rating-filter").addEventListener("change", applyFilters);
  document.getElementById("distance-filter").addEventListener("change", applyFilters);

  updateChosenHotels(); // Load chosen hotels from local storage on map initialization
}

function findNearbyHotels(location) {
  const request = {
    location: location,
    radius: 5000,
    type: "lodging",
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      allHotels = results;
      displayHotels(allHotels);
    } else {
      console.error("PlacesService failed:", status);
    }
  });
}

function displayHotels(hotels) {
  const hotelList = document.getElementById("hotel-list");
  hotelList.innerHTML = "";

  hotels.forEach(hotel => {
    const hotelItem = document.createElement("li");
    hotelItem.classList.add("hotel-item");
    hotelItem.onclick = () => showHotelOnMap(hotel);

    const photoUrl = hotel.photos
      ? hotel.photos[0].getUrl({ maxWidth: 80, maxHeight: 80 })
      : "https://via.placeholder.com/80x80?text=No+Image";

    const hotelInfo = document.createElement("div");
    hotelInfo.classList.add("hotel-info");
    hotelInfo.innerHTML = `
      <strong>${hotel.name}</strong>
      <p>${hotel.vicinity}</p>
      <p>Rating: ${hotel.rating || "N/A"} ⭐</p>
      <p>Price: $${hotel.price_level ? hotel.price_level * 20 : "N/A"}</p>
      <button class="rent-button" onclick="chooseHotel(event, '${hotel.name}', '${hotel.vicinity}', '${hotel.rating || "N/A"}', '$${hotel.price_level ? hotel.price_level * 20 : "N/A"}', '${photoUrl}')">Choose</button>
    `;

    hotelItem.innerHTML = `
      <img src="${photoUrl}" alt="${hotel.name}" class="hotel-photo">
    `;

    hotelItem.appendChild(hotelInfo);
    hotelList.appendChild(hotelItem);
  });
}

function showHotelOnMap(hotel) {
  map.setCenter(hotel.geometry.location);
  map.setZoom(15);

  infoWindow.setContent(`
    <strong>${hotel.name}</strong><br>
    ${hotel.vicinity}<br>
    Rating: ${hotel.rating || "N/A"} ⭐
  `);
  infoWindow.setPosition(hotel.geometry.location);
  infoWindow.open(map);
}

function chooseHotel(event, name, vicinity, rating, price, photoUrl) {
  event.stopPropagation();

  const hotel = { name, vicinity, rating, price, photoUrl };

  if (chosenHotels.some(h => h.name === name)) {
    alert("This hotel is already in your list.");
    return;
  }

  chosenHotels.push(hotel);
  updateLocalStorage();
  updateChosenHotels();

  // Update button style
  const button = event.target;
  button.textContent = "Chosen";
  button.classList.add("chosen");
  button.disabled = true;

  if (chosenHotels.length > 1) {
    showRoute();
  }
}


function updateLocalStorage() {
  localStorage.setItem("chosenHotels", JSON.stringify(chosenHotels));
}

function updateChosenHotels() {
  const chosenList = document.getElementById("chosen-hotels-list");
  chosenList.innerHTML = "";

  chosenHotels.forEach((hotel, index) => {
    const hotelItem = document.createElement("li");
    hotelItem.classList.add("hotel-item");

    hotelItem.innerHTML = `
      <img src="${hotel.photoUrl}" alt="${hotel.name}" class="hotel-photo">
      <div class="hotel-info">
        <strong>${hotel.name}</strong>
        <p>${hotel.vicinity}</p>
        <p>Rating: ${hotel.rating} ⭐</p>
        <p>Price: ${hotel.price}</p>
        <button class="delete-button" onclick="deleteHotel(${index})">Delete</button>
      </div>
    `;

    chosenList.appendChild(hotelItem);
  });
}



function deleteHotel(index) {
  chosenHotels.splice(index, 1);
  updateLocalStorage();
  updateChosenHotels();

  if (chosenHotels.length > 1) {
    showRoute();
  } else {
    directionsRenderer.setDirections({ routes: [] }); // Clear the route if less than 2 hotels are chosen
  }
}

function showRoute() {
  const waypoints = chosenHotels.slice(1, -1).map(hotel => ({
    location: hotel.vicinity,
    stopover: true,
  }));

  directionsService.route(
    {
      origin: chosenHotels[0].vicinity,
      destination: chosenHotels[chosenHotels.length - 1].vicinity,
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(response);
      } else {
        console.error("Directions request failed:", status);
      }
    }
  );
}
