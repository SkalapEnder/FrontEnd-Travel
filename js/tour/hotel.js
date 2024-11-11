let map, service, infoWindow;
    let allHotels = [];

    function initMap() {
      const kazakhstanCenter = { lat: 48.0196, lng: 66.9237 };
      
      map = new google.maps.Map(document.getElementById("map"), {
        center: kazakhstanCenter,
        zoom: 6,
      });

      infoWindow = new google.maps.InfoWindow();

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

      document.getElementById('rating-filter').addEventListener('change', applyFilters);
      document.getElementById('distance-filter').addEventListener('change', applyFilters);
    }

    function findNearbyHotels(location) {
      const request = {
        location: location,
        radius: 5000,
        type: 'lodging',
      };

      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          allHotels = results;
          displayHotels(allHotels);
        } else {
          console.error('PlacesService failed:', status);
        }
      });
    }

    function displayHotels(hotels) {
      const hotelList = document.getElementById('hotel-list');
      hotelList.innerHTML = '';

      hotels.forEach(hotel => {
        const hotelItem = document.createElement('li');
        hotelItem.classList.add('hotel-item');
        hotelItem.onclick = () => showHotelOnMap(hotel);

        const photoUrl = hotel.photos
          ? hotel.photos[0].getUrl({ maxWidth: 80, maxHeight: 80 })
          : 'https://via.placeholder.com/80x80?text=No+Image';
        const hotelPhoto = document.createElement('img');
        hotelPhoto.src = photoUrl;
        hotelPhoto.alt = hotel.name;
        hotelPhoto.classList.add('hotel-photo');

        const hotelInfo = document.createElement('div');
        hotelInfo.classList.add('hotel-info');
        hotelInfo.innerHTML = `
          <strong>${hotel.name}</strong>
          <p>${hotel.vicinity}</p>
          <p>Rating: ${hotel.rating || "N/A"} ⭐</p>
          <button class="rent-button" onclick="rentHotel(event, '${hotel.name}')">Rent</button>
        `;

        hotelItem.appendChild(hotelPhoto);
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

    function applyFilters() {
      const ratingFilter = document.getElementById('rating-filter').value;
      const distanceFilter = document.getElementById('distance-filter').value;

      let filteredHotels = [...allHotels];

      if (ratingFilter !== 'all') {
        const minRating = parseFloat(ratingFilter);
        filteredHotels = filteredHotels.filter(hotel => (hotel.rating || 0) >= minRating);
      }

      if (distanceFilter === '5') {
        filteredHotels.sort((a, b) => a.distance - b.distance);
        filteredHotels = filteredHotels.slice(0, 5);
      }

      displayHotels(filteredHotels);
    }

    async function searchByCity() {
      const city = document.getElementById("city-input").value;
      if (!city) return alert("Please enter a city.");

      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=AIzaSyAi_Uk7-4-mrTAY8s2tra6VMOvHixjei8E`;
      
      try {
        const response = await fetch(geocodeUrl);
        const data = await response.json();
        console.log(data);  // Log the response to check if it contains the correct results

        if (data.status === "OK") {
          const location = data.results[0].geometry.location;
          console.log(location);  // Log the location data to verify it's correct
          map.setCenter(location);
          map.setZoom(14);
          findNearbyHotels(location);
        } else {
          console.error("Geocode error:", data.status);
          alert("Could not find location. Please try another city.");
        }
      } catch (error) {
        console.error('Error fetching data from Geocoding API:', error);
        alert('There was an error with the Geocoding API. Please try again later.');
      }
    }

    function handleEnter(event) {
      if (event.key === 'Enter') {
        searchByCity();
      }
    }

    function rentHotel(event, hotelName) {
      event.stopPropagation();
      alert(`Booking process started for ${hotelName}.`);
    }