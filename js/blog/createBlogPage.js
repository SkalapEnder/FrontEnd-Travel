class blogObj {
    constructor(id, title, author, publishDate, image, introContent, mainContent, endContent){
        this.id = id,
        this.title = title,
        this.author = author,
        this.publishDate = publishDate,
        this.image = image,
        this.intro = introContent,
        this.main = mainContent,
        this.end = endContent
    }
}

const data = [
    {
        "id": 1,
        "title": "Best places in Kazakhstan 2024",
        "author": "Jason Aaron",
        "dateOfCreation": "2023-03-16",
        "image": "./pictures/blog-map.jpg",
        "contentPreview": "From the majestic landscapes of the Altai Mountains to the vibrant cultural tapestry of Almaty, this Central Asian gem offers a wealth of experiences for every type of traveler.",
        "content":{
            "introContent": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kazakhstan, the largest landlocked country in the world, is a hidden gem in Central Asia, offering a unique blend of stunning landscapes, rich culture, and fascinating history. From the snow-capped peaks of the Altai Mountains in the east to the bustling streets of Almaty, the country is a paradise for adventure seekers and culture enthusiasts alike. With its diverse regions, Kazakhstan caters to travelers with a variety of interests, whether they are exploring ancient cities, hiking through wild terrain, or immersing themselves in local traditions. In 2024, there’s never been a better time to explore the country’s best destinations, which showcase its natural beauty and modern flair.</p>",
        
            "mainContent": "<h3>Kazakhstan is a country of contrasts.</h3> <ul> <li>The Altai Mountains in the eastern part offer breathtaking scenery for hikers and nature lovers, with crystal-clear lakes, dense forests, and towering peaks.</li> <li>In the south, Almaty, the former capital, is a cosmopolitan city known for its vibrant cultural scene, lush green parks, and proximity to outdoor adventures, including skiing in the nearby mountains.</li> <li>The Charyn Canyon, often compared to the Grand Canyon, offers visitors a glimpse into the country’s geological past, while the desert landscapes of the Mangystau region showcase otherworldly rock formations and ancient petroglyphs.</li> <li>For those interested in history, the Mausoleum of Khoja Ahmed Yasawi in Turkestan stands as a testament to the country's rich Islamic heritage.</li> </ul> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether you’re seeking adrenaline-pumping adventures, cultural immersion, or peaceful retreats in nature, Kazakhstan promises a journey that’s as diverse as the landscapes themselves.</p>",
        
            "endContent": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall, this country offers visitors a chance to experience everything from natural wonders to historical landmarks and vibrant city life. Whether you're hiking through the Altai Mountains, enjoying the cultural richness of Almaty, or marveling at the geological wonders of Charyn Canyon, this vast country has something for every traveler in 2024. With its unspoiled beauty, rich heritage, and warm hospitality, Kazakhstan is undoubtedly one of Central Asia's most intriguing destinations.</p>"
        }
        
    },
    {
        "id": 2,
        "title": "How to Prepare for Travel",
        "author": "Sophia Lane",
        "dateOfCreation": "2022-07-21",
        "image": "./pictures/blog-tips.png",
        "contentPreview": "Embarking on a new adventure can be exhilarating, but it often comes with its fair share of stress and confusion. Whether you’re planning a weekend getaway or a long-haul international trip, proper preparation can make all the difference.",
        "content": {
            "introContent": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting a new adventure is one of life’s great pleasures. Whether you’re planning a quick weekend escape or an international journey, being prepared can minimize stress and ensure you have the best possible experience. Getting the essentials organized before you travel, from passports and packing to planning your activities, can make the difference between a smooth, enjoyable trip and a hectic one.</p>",
            "mainContent": "<h3>Preparing for Your Trip</h3><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are several key areas to focus on when preparing for a trip. Here’s a step-by-step guide to make sure everything goes smoothly.</h5><h4>Research and Plan</h4><ul><li><strong>Destination Research:</strong> Understand the local culture, weather, and safety guidelines.</li><li><strong>Travel Restrictions:</strong> Check for any restrictions, visa requirements, or vaccination guidelines.</li></ul><h4>Financial Preparation</h4><ul><li><strong>Budgeting:</strong> Estimate daily expenses, including accommodation, food, and transportation.</li><li><strong>Currency:</strong> Check if you need foreign currency and where to exchange it.</li></ul><h4>Packing Essentials</h4><ul><li><strong>Clothing:</strong> Pack according to the weather, culture, and planned activities.</li><li><strong>Documents:</strong> Carry your passport, travel insurance, and booking confirmations.</li></ul>",
            "endContent": "<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Traveling can be one of the most rewarding experiences, but taking the time to prepare can save you from unexpected hassles. With a well-organized plan, a carefully crafted itinerary, and a little flexibility, you’ll be well on your way to a memorable and stress-free journey. So, pack your bags, prepare your mind, and embrace the adventure that awaits!</h5>"
        }
    },
    {
        "id": 3,
        "title": "Top-5 Interesting Places in Astana",
        "author": "Aigerim Zhanali",
        "dateOfCreation": "2024-10-11",
        "image": "pictures/blog-astana.png",
        "contentPreview": "Whether you're a history buff, an architecture enthusiast, or simply looking to experience something new, Astana has something for everyone.",
        "content": {
            "introContent": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Astana, the vibrant capital of Kazakhstan, offers a unique blend of modern architecture, rich history, and fascinating cultural sites. Whether you're a history buff, an architecture enthusiast, or simply looking to experience something new, this city has an array of intriguing destinations that cater to all tastes. Let’s dive into the top five places that make Astana an unforgettable experience for visitors.</p>",
            "mainContent": "<h3>1. Bayterek Tower</h3><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bayterek Tower is a symbol of Astana and represents the ancient Kazakh myth of a magic bird. Visitors can go up the tower to enjoy panoramic views of the city and experience the stunning architecture. The observation deck is a must-visit, offering a bird’s-eye view of Astana's modern landscape.</p><h3>2. Hazret Sultan Mosque</h3><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Hazret Sultan Mosque is one of the largest mosques in Central Asia. Its breathtaking domes and intricate design make it a magnificent site. Inside, visitors can admire the beautiful calligraphy and mosaic artwork, all while experiencing the peaceful ambiance of this spiritual site.</p><h3>3. Khan Shatyr Entertainment Center</h3><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Khan Shatyr is a massive tent-like structure that hosts shops, restaurants, and even an indoor beach. It’s a marvel of modern architecture designed by Norman Foster, and it’s a place where you can shop, dine, and relax in a unique indoor environment.</p><h3>4. National Museum of the Republic of Kazakhstan</h3><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For those interested in Kazakh history and culture, the National Museum offers an in-depth look at the nation's heritage. From ancient artifacts to contemporary exhibits, it’s a comprehensive and educational experience for visitors of all ages.</p><h3>5. Nur Alem Future Energy Museum</h3><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Originally built for Expo 2017, the Nur Alem museum is dedicated to sustainable energy solutions. This futuristic glass sphere provides an immersive experience, with each floor showcasing a different type of renewable energy. It's both informative and visually stunning.</p>",
            "endContent": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Astana is a city of contrasts, blending modern marvels with deep cultural heritage. These five spots offer a glimpse into the diverse experiences available in Kazakhstan’s capital, promising unforgettable memories for every visitor. From towering structures to peaceful mosques and innovative museums, Astana invites everyone to explore its wonders and discover its unique charm.</p>"
        }
    },
    {
        "id": 4,
        "title": "Top-5 places in Almaty",
        "author": "Aigerim Bekova",
        "dateOfCreation": "2023-09-11",
        "image": "pictures/blog-almaty-lake.jpg",
        "contentPreview": "Welcome to Almaty, Kazakhstan's vibrant city nestled at the foot of the majestic Tien Shan mountains. Known for its rich history, cultural diversity, and stunning natural beauty, Almaty offers a unique blend of experiences for every traveler.",
        "content": {
            "introContent": "<p>Almaty, Kazakhstan's largest and most vibrant city, sits at the heart of Central Asia. Positioned at the base of the grand Tien Shan mountains, Almaty is a melting pot of culture, history, and natural wonders. From bustling bazaars and modern shopping districts to serene mountain landscapes, this city offers something for every traveler, blending old-world charm with contemporary vibrancy.</p>",
            "mainContent": "<h3>Top-5 Places to Visit in Almaty</h3><ul><li><strong>Medeu Skating Rink and Ski Resort</strong>: <p>Nestled in the mountains, the Medeu rink is famous for its scenic views and altitude, making it a must-visit for skating enthusiasts and nature lovers. Just a short drive from the city center, it's an ideal winter destination for skating and skiing.</p></li><li><strong>Shymbulak Ski Resort</strong>: <p>Located further up from Medeu, Shymbulak is one of Central Asia’s premier ski resorts. It offers skiing, snowboarding, and breathtaking mountain views all year round, making it a top destination for outdoor adventurers.</p></li><li><strong>Big Almaty Lake</strong>: <p>A turquoise gem surrounded by forested mountains, Big Almaty Lake is an iconic natural landmark. Perfect for hiking or a peaceful retreat into nature, this lake offers stunning photo opportunities and a refreshing escape from the city bustle.</p></li><li><strong>Green Bazaar</strong>: <p>For a taste of local culture and flavors, the Green Bazaar offers an authentic shopping experience with fresh produce, spices, and handmade goods. A great spot to experience Almaty’s lively marketplace atmosphere.</p></li><li><strong>Panfilov Park and Zenkov Cathedral</strong>: <p>Situated in the heart of Almaty, Panfilov Park is home to the famous Zenkov Cathedral, an architectural marvel and one of the few wooden buildings in the world that doesn’t use nails. It’s a serene spot to unwind and take in some of the city's history.</p></li></ul>",
            "endContent": "<p>Almaty’s blend of urban life and natural landscapes creates an unforgettable travel experience. Whether you're an adventure-seeker, a history buff, or simply looking to unwind in stunning surroundings, Almaty offers a remarkable mix of destinations to explore. Start planning your journey to this vibrant city at the crossroads of Central Asia!</p>"
        }
    }
]

const blogImage = document.getElementById('blog-image');
const blogTitle = document.getElementById('blog-title');
const blogAuthor = document.getElementById('blog-author');
const blogPublish = document.getElementById('blog-publish');

const blogContentIntro = document.getElementById('intro');
const blogContentMain = document.getElementById('general');
const blogContentEnd = document.getElementById('end');

document.addEventListener('DOMContentLoaded', loadBlog());

function loadBlog(){
    const activeBlogID = sessionStorage.getItem('activeBlogID');

    if (activeBlogID !== null) {
        let blog = getBlog(activeBlogID);
        createBlog(blog);
    } else {
        document.querySelector('main').innerHTML = `<h2 style="min-height: 100vh; padding:10%; margin: auto; text-align:center">There is no info about blog!<br><a href="blog.html">Back to list</a></h2>`
    }
}

function getBlog(blogID){
    for(let i = 0; i < data.length; i++){
        let blogF = data[i];
        if(blogF.id == blogID){
            return new blogObj(
                blogF.id, 
                blogF.title, 
                blogF.author, 
                blogF.dateOfCreation, 
                blogF.image, 
                blogF.content.introContent, 
                blogF.content.mainContent, 
                blogF.content.endContent);
        }
    }

    return null;
};

function createBlog(blog){
    if(blog !== null){
        blogImage.src = blog.image;
        blogTitle.innerText = blog.title;
        blogAuthor.innerHTML = `<h6 style="white-space: pre-wrap;"> ${blog.author + " "}</h6>`;
        blogPublish.innerHTML = `<h6 style="white-space: pre-wrap;"> ${new Date(blog.publishDate).toDateString()}</h6>`;
        blogContentIntro.innerHTML = `${blog.intro}<br>`;
        blogContentMain.innerHTML = `${blog.main}<br>`;
        blogContentEnd.innerHTML = `${blog.end}<br>`;
    } else{
        document.querySelector('main').innerHTML = `<h2 style="min-height: 100vh; padding:10%; margin: auto; text-align:center">There is no info about blog!<br><a href="blog.html">Back to list</a></h2>`
    }
}