class blogPreview {
    constructor(id, title, author, publishDate, image, contentPreview){
        this.id = id,
        this.title = title,
        this.author = author,
        this.publishDate = publishDate,
        this.image = image,
        this.contentPreview = contentPreview
    }
}

function extractTextData(data) {
    return data.map(item => {
        return blogPreview(
            item.id, 
            item.title, 
            item.author, 
            item.dateOfCreation,
            item.image,
            item.contentPreview);
    });
}

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

var data;

const datas = [
    {
        "id": 1,
        "title": "Best places in Kazakhstan 2024",
        "author": "Jason Aaron",
        "dateOfCreation": "2024-01-12",
        "image": "./pictures/blog-map.jpg",
        "contentPreview": "From the majestic landscapes of the Altai Mountains to the vibrant cultural tapestry of Almaty, this Central Asian gem offers a wealth of experiences for every type of traveler.",
        "content":{
        "introContent": "Kazakhstan, the largest landlocked country in the world, is a hidden gem in Central Asia, offering a unique blend of stunning landscapes, rich culture, and fascinating history. From the snow-capped peaks of the Altai Mountains in the east to the bustling streets of Almaty, the country is a paradise for adventure seekers and culture enthusiasts alike. With its diverse regions, Kazakhstan caters to travelers with a variety of interests, whether they are exploring ancient cities, hiking through wild terrain, or immersing themselves in local traditions. In 2024, there’s never been a better time to explore the country’s best destinations, which showcase its natural beauty and modern flair.",
        "mainContent": "Kazakhstan is a country of contrasts. The Altai Mountains in the eastern part offer breathtaking scenery for hikers and nature lovers, with crystal-clear lakes, dense forests, and towering peaks. \n\nIn the south, Almaty, the former capital, is a cosmopolitan city known for its vibrant cultural scene, lush green parks, and proximity to outdoor adventures, including skiing in the nearby mountains. \n\nThe Charyn Canyon, often compared to the Grand Canyon, offers visitors a glimpse into the country’s geological past, while the desert landscapes of the Mangystau region showcase otherworldly rock formations and ancient petroglyphs. \n\nFor those interested in history, the Mausoleum of Khoja Ahmed Yasawi in Turkestan stands as a testament to the country's rich Islamic heritage. \n\nWhether you’re seeking adrenaline-pumping adventures, cultural immersion, or peaceful retreats in nature, Kazakhstan promises a journey that’s as diverse as the landscapes themselves.",
        "endContent": "Overall, this country offering visitors a chance to experience everything from natural wonders to historical landmarks and vibrant city life. Whether you're hiking through the Altai Mountains, enjoying the cultural richness of Almaty, or marveling at the geological wonders of Charyn Canyon, this vast country has something for every traveler in 2024. With its unspoiled beauty, rich heritage, and warm hospitality, Kazakhstan is undoubtedly one of Central Asia's most intriguing destinations."
        }
    }
]

window.onload = function() {
    fetchJSONData();
    displayBlogs(data);
    filterBlogs();
    addEvents();
};

const filterBtn = document.getElementById('filterBtn');

filterBtn.addEventListener('click', filterBlogs);

function fetchJSONData() {
    fetch("./js/blog/blogs.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            data = res.json();
        })
        .then((data) =>
            console.log(data))
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}

function displayBlogs(list) {
    console.log(list);
    const blogList = document.getElementById('post-list'); 

    blogList.innerHTML = ''; 
    if (list == null || list.length === 0) {
        blogList.innerHTML = '<h2 style="min-height: 100vh; padding:10%; margin: auto; text-align:center">There is no blogs!</h2>';
    } else {
        list.forEach(blogPreview => {
            blogList.innerHTML += `
                <div class="post card" data-id=${blogPreview.id}>
                    <img src="${blogPreview.image}" alt="Picture of blog">
                    <div class="post-body card-body">
                        <h4 class="fw-bold">${blogPreview.title}</h4>
                        <p>${blogPreview.contentPreview}</p>
                    </div>
                    <div class="post-footer card-footer w-100"><a href="blog_page.html">More about...</a></div>
                </div>
            `;
        });
        }
}

function filterBlogs() {
    let nameBlog = document.getElementById('search-input').value;
    let filteredBlogs;

    if(nameBlog === '') {filteredBlogs = data}
    else {filteredBlogs = data.filter(blogPreview => {
        let title = blogPreview.title;
        return (title.toLowerCase().indexOf(nameBlog.toLowerCase()) !== -1);
    })};

    displayBlogs(filteredBlogs);
    addEvents();
}

function addEvents(){
    const cards = document.querySelectorAll('.card');
    
  
    cards.forEach(card => {
      card.addEventListener('click', function(){
        sessionStorage.setItem('activeBlogID', card.getAttribute('data-id'));
        window.location.href = "blog_page.html";
      }
    )});
  }