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

const data = [
    {
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
      "image": "pictures/28Panfilov.jpg",
      "city": "Almaty",
      "title": "Bus tour Hop-On Hop-Off across historical places",
      "description": "Visit the popular sights and historical places of this great city",
      "duration": "1 day",
      "included": "Audioguide: as desired",
      "certification": true,
      "price": 15.00,
      "rating": {
        "score": 4.8,
        "reviews": 1337
      }
    },
    {
      "image": "pictures/palace.jpg",
      "city": "Astana",
      "title": "National Museum, Palace of Peace and Reconciliation, etc.",
      "description": "Bus tour in the night time in Astana",
      "duration": "5 hours",
      "included": "Audioguide: as desired",
      "certification": false,
      "price": 8.00,
      "rating": {
        "score": 3.9,
        "reviews": 134
      }
    },
    {
      "image": "pictures/medeu2.jpg",
      "city": "Almaty",
      "title": "Ice skating in Medeu",
      "description": "Skating on the ice of the highest skating rink in the world!",
      "duration": "4 hours",
      "included": "Dinner",
      "certification": true,
      "price": 18.00,
      "rating": {
        "score": 4.7,
        "reviews": 634
      }
    }
]

function extractTextData(data) {
    return data.map(item => {
        return new eventObj(item.image, item.title, item.city, item.description, item.duration,
                        item.included, item.certification, item.price, item.rating.score, item.rating.reviews);
    });
}

let events = extractTextData(data);
console.log(events);

// Display initial tours
window.onload = function() {
    displayTours(data); // Show all tours initially
};

// Function to display tours
function displayTours(list) {
    const eventList = document.getElementById('event-lists');
    eventList.innerHTML = ''; // Clear previous results

    if (list.length === 0) {
        eventList.innerHTML = '<p>No tours found.</p>';
    } else {
        list.forEach(eventObj => { // Correctly use the forEach method on list
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
                        <p class="price">from ${eventObj.price}$</p>
                        <p class="rating">★ ${eventObj.rating.score} (${eventObj.rating.reviews})</p>
                    </div>
                </div>
            `;
        });
    }
}

// Function to filter tours
function filterTours() {
    const city = document.getElementById('city').value;
    const maxPrice = parseFloat(document.getElementById('price').value);
    const duration = document.getElementById('duration').value;
    const freeWater = document.getElementById('free-water').checked;
    const certified = document.getElementById('certified').checked;

    // Filter the data
    const filteredTours = data.filter(eventObj => {
        return (
            (city === '' || eventObj.city === city) &&
            (isNaN(maxPrice) || eventObj.price <= maxPrice) &&
            (duration === '' || eventObj.duration === duration) &&
            (!freeWater || eventObj.included.includes("Free water")) && // Assuming you want to check for "Free water"
            (!certified || eventObj.certification === certified)
        );
    });

    // Display the filtered results
    displayTours(filteredTours);
}
