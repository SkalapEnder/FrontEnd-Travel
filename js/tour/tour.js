class eventObj {
    constructor(pathToImage, title, city, description, duration, included, 
                certification, price, rating_score, rating_reviews){
        this.pathToImage = pathToImage;
        this.title = title;
        this.city = city;
        this.description = description;
        this.duration = duration;
        this.included = included;
        this.certification = certification;
        this.price = price;
        this.rating_score = rating_score;
        this.rating_reviews = rating_reviews;
    }
}

function extractTextData(data) {
    return data.map(item => {
        return new eventObj(item.image, item.title, item.city, item.description, item.duration,
                        item.included, item.certification, item.price, item.rating.score, item.rating.reviews);
    });
}

const data = [
    {
      "id": 1,
      "image": "pictures/almatynka-lake.jpg",
      "city": "Almaty",
      "title": "Bus tour to nature places (Kayndy, Medeu, Shymbulak, etc)",
      "description": "Bus Tour starts from Almaty city's center and ends in Kayndy Lake, offering breathtaking views of the mountainous landscapes, serene lakes, and lush green forests that define the region. Experience the natural beauty and tranquility of Kazakhstan's famous sites, with stops at iconic spots like Medeu and Shymbulak for exploration and photography.",
      "duration": "2 days",
      "included": "Free water",
      "certification": true,
      "price": 200.00,
      "rating": {
        "score": 4.0,
        "reviews": 523
      }
    },
    {
      "id": 2,
      "image": "pictures/aktau.jpg",
      "city": "Aktau",
      "title": "Beach of the biggest lake in the world",
      "description": "Stand at the edge of a vast body of water that stretches so far it seems to merge with the horizon. Enjoy an unforgettable experience on the shores of the Caspian Sea, with golden sands and clear skies. Perfect for relaxation, swimming, and evening strolls along the waterfront, this trip is ideal for anyone seeking a peaceful retreat by the water.",
      "duration": "3 days",
      "included": "Dinner and breakfast",
      "certification": true,
      "price": 300.00,
      "rating": {
        "score": 4.1,
        "reviews": 681
      }
    },
    {
      "id": 3,
      "image": "pictures/sharyn-canyon.jpg",
      "city": "Aktau",
      "title": "Bus tour Hop-On Hop-Off to Sharyn Canyon",
      "description": "Carved by the mighty forces of wind and water over millions of years, Sharyn Canyon boasts a unique landscape that draws comparisons to the Grand Canyon. This tour offers an adventurous day trip with stops to admire the rugged cliffs and winding paths, ideal for hiking and photography. Witness the canyon's geological beauty up close.",
      "duration": "1 day",
      "included": "Free water",
      "certification": true,
      "price": 150.00,
      "rating": {
        "score": 4.4,
        "reviews": 256
      }
    },
    {
      "id": 4,
      "image": "pictures/baiterek.jpg",
      "city": "Astana",
      "title": "Bus tour through the capital with restaurant visit",
      "description": "Astana is a city with a blend of ancient heritage and ambitious modernization. The tour takes you through the most iconic landmarks, from historic buildings to the cutting-edge architecture of the city's skyscrapers. End the journey with a visit to a renowned local restaurant to sample authentic Kazakh dishes.",
      "duration": "1 day",
      "included": "Dinner",
      "certification": false,
      "price": 120.00,
      "rating": {
        "score": 4.2,
        "reviews": 1453
      }
    },
    {
      "id": 5,
      "image": "pictures/baikonur.jpg",
      "city": "Baikonur",
      "title": "Special bus tour program",
      "description": "Visit Baikonur Cosmodrome, the legendary site of the world’s first manned space flight. This exclusive tour provides an in-depth look at the facilities and history of space exploration, with stops at launch pads, astronaut training centers, and museum exhibits. Discover the legacy of space travel in an unforgettable journey.",
      "included": "Dinner and breakfast",
      "certification": true,
      "price": 1500.00,
      "rating": {
        "score": 4.9,
        "reviews": 2135
      }
    },
    {
      "id": 6,
      "image": "pictures/28Panfilov.jpg",
      "city": "Almaty",
      "title": "Bus tour Hop-On Hop-Off across historical places",
      "description": "Explore Almaty in modern charm and historical places, showcasing Kazakhstan's cultural heart. Travel to locations such as the iconic 28 Panfilov Park and Zenkov Cathedral. This tour highlights the rich history and vibrant cultural sites that make Almaty a unique blend of tradition and modernity.",
      "duration": "1 day",
      "included": "Free water",
      "certification": true,
      "price": 45.00,
      "rating": {
        "score": 4.8,
        "reviews": 1337
      }
    },
    {
      "id": 7,
      "image": "pictures/expo.jpg",
      "city": "Astana",
      "title": "EXPO Museum",
      "description": "Explore the new museum of future energy in the city of future. This unique museum showcases the latest advancements in renewable energy and sustainable development, with interactive exhibits and hands-on demonstrations. Perfect for all ages, it's a glimpse into the future of innovation and technology.",
      "duration": "1 day",
      "included": "Dinner",
      "certification": true,
      "price": 80.00,
      "rating": {
        "score": 4.4,
        "reviews": 532
      }
    },
    {
      "id": 8,
      "image": "pictures/medeu2.jpg",
      "city": "Almaty",
      "title": "Ice skating in Medeu",
      "description": "Skating on the ice of the highest skating rink in the world! With breathtaking mountain views and crisp alpine air, Medeu is the perfect destination for winter sports enthusiasts. Enjoy a day of skating surrounded by the serene beauty of the mountains, suitable for all skill levels.",
      "duration": "2 days",
      "included": "Dinner",
      "certification": true,
      "price": 65.00,
      "rating": {
        "score": 4.7,
        "reviews": 634
      }
    },
    {
      "id": 9,
      "image": "pictures/palace.jpg",
      "city": "Astana",
      "title": "National Museum, Palace of Peace and Reconciliation, etc.",
      "description": "A night-time bus tour in Astana across modern architecture illuminated against the dark sky. Visit landmarks like the National Museum and the Palace of Peace and Reconciliation, which glow beautifully at night, creating a magical atmosphere that highlights the grandeur of the city.",
      "duration": "1 day",
      "included": "Free water",
      "certification": false,
      "price": 34.00,
      "rating": {
        "score": 3.9,
        "reviews": 134
      }
    }

]

const tourInfo = document.getElementById('tourInfo');
const tourImage = document.getElementById('tourImage');
const tourPrice = document.getElementById('tourPrice');
const tourDesc = document.getElementById('tourDesc');
const activeTourID = sessionStorage.getItem('activeTourID');

function createContentFromSession() {
    if (activeTourID !== null) {
        let tour = getTour(activeTourID);

        document.title = tour.title;

        createInfo(tour);
        createWeather(tour);
    } else {
        document.querySelector('main').innerHTML = `<h2 style="min-height: 100vh; padding:10%; margin: auto; text-align:center">There is no info about tour!<br><a href="destination.html">Back to list</a></h2>`
    }
}


function getTour(id) {
    const eventData = data.find(event => event.id == id);

    if (eventData) {
        return new eventObj(
            eventData.image,
            eventData.title,
            eventData.city,
            eventData.description,
            eventData.duration,
            eventData.included,
            eventData.certification,
            eventData.price,
            eventData.rating.score,
            eventData.rating.reviews
        );
    } else {
        return null;
    }
}

function createInfo(tour){
    tourImage.src = tour.pathToImage;
    
    document.getElementById('tourMain').innerHTML =
    `<h1>${tour.title}</h1>`

    tourInfo.innerHTML =
    `<div class="tourField">
        
        <h3><label>City of tour:</label> ${tour.city}</h3>
    </div>

    <div class="tourField">
        <h3><label>Duration:</label> ${tour.duration}</h3>
    </div>

    <div class="tourField">
        
        <h3><label>Included: </label>${tour.included}</h3>
    </div>

    <div class="tourField">
        
        <h3><label>Certification: </label>${tour.certification == true ? 'Yes' : 'No'}</h3>
    </div>

    <div class="tourField">
        <label>Rating: </label>
        <h3>★${tour.rating_score} (${tour.rating_reviews})</h3>
    </div>
    `

    tourPrice.innerHTML = `<h3>From: ${roundDown(convertPrice(tour.price, getSelectedCurrency()), 10 * getRate(getSelectedCurrency())) + convertSymbol(getSelectedCurrency())}</h3>`

    tourDesc.innerHTML = `<h4>${tour.description}</h4>`
  }

// Price section
function roundDown(number, base) { return Math.floor(number / base) * base; }
  
// Get right price, symbol and rate
function convertPrice(priceInUSD, toWhat){
    let exchangeRate = 1.0;

    switch (toWhat){
        
        case "RUB": 
            exchangeRate = 97.16;
            break;
        case "KZT": 
            exchangeRate = 487.49;
            break;
        case "USD":
        default:
            exchangeRate = 1.0;
            break;
}
return (priceInUSD * exchangeRate).toFixed(2);
}

function getRate(toWhat){
    let exchangeRate = 1.0;

    switch (toWhat){
        
        case "RUB": 
            exchangeRate = 100.0;
            break;
        case "KZT": 
            exchangeRate = 500.0;
            break;
        case "USD":
        default:
            exchangeRate = 1.0;
            break;
}

return exchangeRate;
}

function convertSymbol(toWhat){
    let costSymbol = "$";

    switch (toWhat){
        case "RUB": 
        costSymbol = "₽";
        break;
        case "KZT": 
        costSymbol = "₸";
        break;
        case "USD":
        default:
        costSymbol = "$";
        break;
    }
    return costSymbol;
}

const currencyRadios = document.querySelectorAll("input[type='radio']");

function getSelectedCurrency() {
  let selectedCurrency = "";
  for(let i = 0; i < currencyRadios.length; i++){
      if(currencyRadios[i].checked){
        selectedCurrency = currencyRadios[i].value;
        break;
      }
  }

  return selectedCurrency;
}

currencyRadios.forEach(radio => {
    radio.addEventListener('change', updatePrice);
  });

function updatePrice(){ createInfo(getTour(activeTourID)); }



function isHaveCertificate(certification){
    if(certification) return 'Yes';
    else return 'No';
}


function removeActiveTour(){
    sessionStorage.setItem('activeTour', null);
}

window.addEventListener('load', createContentFromSession);

window.addEventListener('beforeunload', removeActiveTour);


async function getCoordinates(cityName) {
  const apiKey = "13d1da9be0651b12375319653d91d37b"; // replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
          const { lat, lon } = data[0];
          return { lat, lon };
      } else {
          console.error("City not found");
          return null;
      }
  } catch (error) {
      console.error("Error fetching data:", error);
      return null;
  }
}

async function getWeatherData(lat, lon) {
  const apiKey = "13d1da9be0651b12375319653d91d37b"; // replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
          const { temp } = data.main;
          const weatherDescription = data.weather[0].description;
          
          return { temp, weatherDescription };
      } else {
          console.error("Weather data not found");
          return null;
      }
  } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
  }
}

async function createWeather(tour) {
  const cityName = tour.city;
  console.log(tour.city)
  const coordinates = await getCoordinates(cityName);

  if (coordinates) {
      const { lat, lon } = coordinates;

      // Fetch weather data
      const weatherData = await getWeatherData(lat, lon);

      if (weatherData) {
          const { temp, weatherDescription } = weatherData;

          // Show temperature and weather on the page
          console.log(weatherData.temp);
          document.getElementById("tourWeather").innerHTML = `
          <h2>Weather in ${cityName}</h2>
          <div class="weather">
          <h4 id="temp">Temp:<br>${temp}°C</h4>
          <br>
          <h4>Weather:<br>${weatherDescription}</h4>
          </div>
          `;
      }
  }
}
