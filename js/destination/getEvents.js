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
      "price": 40.00,
      "rating": {
        "score": 4.0,
        "reviews": 523
      }
    },
    {
      "id": 2,
      "image": "pictures/aktau.jpg",
      "city": "Aktau",
      "title": "Visit beach of the biggest lake in the world",
      "description": "Come and see the biggest lake in the world!",
      "duration": "3 days",
      "included": "Dinner and breakfast",
      "certification": true,
      "price": 50.00,
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
      "description": "Visit one of the amazing nature spots of Kazakhstan",
      "duration": "1 day",
      "included": "Free water",
      "certification": true,
      "price": 25.00,
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
      "description": "Visit the capital of the Great Steppe",
      "duration": "1 day",
      "included": "Dinner",
      "certification": false,
      "price": 27.00,
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
      "description": "Visit the place where the first manned space flight was launched",
      "duration": "2 days",
      "included": "Dinner and breakfast",
      "certification": true,
      "price": 45.00,
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
      "description": "Visit the popular sights and historical places of this great city",
      "duration": "1 day",
      "included": "Free water",
      "certification": true,
      "price": 15.00,
      "rating": {
        "score": 4.8,
        "reviews": 1337
      }
    },
    {
      "id": 7,
      "image": "pictures/palace.jpg",
      "city": "Astana",
      "title": "National Museum, Palace of Peace and Reconciliation, etc.",
      "description": "Bus tour in the night time in Astana",
      "duration": "1 day",
      "included": "Free water",
      "certification": false,
      "price": 8.00,
      "rating": {
        "score": 3.9,
        "reviews": 134
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
      "price": 18.00,
      "rating": {
        "score": 4.7,
        "reviews": 634
      }
    }
  ]

let events = extractTextData(data);

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
  radio.addEventListener('change', getSelectedCurrency);
});

window.onload = function() {
    displayTours(data);
    filterTours();
};


function displayTours(list) {
    const eventList = document.getElementById('event-lists'); 
    const footer = document.querySelector('footer');
    eventList.innerHTML = ''; 
    console.log(getSelectedCurrency());
    if (list.length === 0) {
        eventList.innerHTML = '<p>No tours found.</p>';
        footer.style.position = 'absolute';
    } else {
        footer.style.position = 'static';
        list.forEach(eventObj => {
            let certificate = "";
            if (eventObj.certification) {
                certificate = "<p class=\"event-cert\">TrustTour certification</p>";
            }

            eventList.innerHTML += `
                <div class="event-card">
                    <div class="event-image">
                        <img src="${eventObj.image}" alt="${eventObj.title}">
                    </div>    

                    <div class="event-details">
                        <h3>${eventObj.city}: ${eventObj.title}</h3>
                        <h5>${eventObj.description}</h5>
                        <p>${eventObj.duration} • ${eventObj.included}</p>

                        ${certificate}
                    </div>

                    <div class="event-price">
                        <p class="price">from ` + convertPrice(eventObj.price, getSelectedCurrency()) + convertSymbol(getSelectedCurrency()) + `</p>
                        <p class="rating">★ ${eventObj.rating.score} (${eventObj.rating.reviews})</p>
                    </div>
                </div>
            `;
        });
    }
}

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


function filterTours() {
    const city = document.getElementById('city').value;
    const maxPrice = parseFloat(document.getElementById('price').value);
    const duration = document.getElementById('duration').value;
    const included = document.getElementById('included').value;
    const certified = document.getElementById('certified').checked;


    const filteredTours = data.filter(eventObj => {
        return (
            (city === '' || eventObj.city === city) &&
            (isNaN(maxPrice) || convertPrice(eventObj.price, getSelectedCurrency()) <= maxPrice) &&
            (duration === '' || eventObj.duration === duration) &&
            (included === '' || eventObj.included === included) &&
            (!certified || eventObj.certification === certified)
        );
    });

    displayTours(filteredTours);
}

function clearFilters(){
  document.querySelectorAll("input, select, textarea").forEach((element) => {
      localStorage.removeItem(element.id);
      if (element.type === 'radio') { element.checked = false;}
      else if (element.type === 'checkbox') { element.checked = false;} 
      else { element.value = ""; }
      }
  )};