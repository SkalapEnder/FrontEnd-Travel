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
      "description": "Bus Tour starts from Almaty city's center and ends in Kayndy Lake",
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
      "description": "Stand at the edge of a vast body of water that stretches so far it seems to merge with the horizon.",
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
      "description": "Carved by the mighty forces of wind and water over millions of years unique landscape",
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
      "description": "Astana is a city with blend of ancient heritage and ambitious modernization. ",
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
      "description": "Visit Baikonur Cosmodrome, the legendary site of the world’s first manned space flight",
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
      "description": "Explore Almaty in modern charm and historical places, showcasing Kazakhstan's cultural heart.",
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
      "description": "Explore new museum of future energy in the city of future",
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
      "description": "Skating on the ice of the highest skating rink in the world!",
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
      "description": "A night-time bus tour in Astana across modern architecture illuminated against the dark sky.",
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

function createContentFromSession() {
    const activeTourID = sessionStorage.getItem('activeTourID');
    console.log(activeTourID);

    if (activeTourID !== null) {
        let tour = getTour(activeTourID);

        createInfo(tour);
        createWeather(tour);
        suggestHotel(tour);

    } else {
        document.querySelector('main').innerHTML = `<h2 style="min-height: 100vh; padding:10%; margin: auto; text-align:center">There is no info about tour!<br><a href="destination.html">Back to list</a></h2>`
    }
}


function getTour(id) {
    const eventData = data.find(event => event.id == id);
    console.log(eventData);
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
    document.title = `${tour.title}`;
    
    document.getElementById('tourMain').innerHTML =
    `<h1>${tour.title}</h1>
     <h4 id="tourRating">★${tour.rating_score} (${tour.rating_reviews})</h4>`

    console.log(document.getElementById('tourMain').innerHTML);

    tourInfo.innerHTML =
    `<div class="tourField">
        <label>City of tour:</label>
        <h3> ${tour.city}</h3>
    </div>

    <div class="tourField">
        <label>Duration:</label>
        <h3> ${tour.duration}</h3>
    </div>

    <div class="tourField">
        <label>Included: </label>
        <h3>${tour.included}</h3>
    </div>
    `
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

function updatePrice(){ createInfo(); }



function isHaveCertificate(certification){
    if(certification) return 'Yes';
    else return 'No';
}


function removeActiveTour(){
    sessionStorage.setItem('activeTour', null);
}

window.addEventListener('load', createContentFromSession);

window.addEventListener('beforeunload', removeActiveTour);
