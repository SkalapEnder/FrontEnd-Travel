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

const data = [
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

const blogImage = document.getElementById('blog-image');
const blogTitle = document.getElementById('blog-title');
const blogContent = document.getElementById('blog-content');
const blogAuthor = document.getElementById('blog-author');

document.addEventListener('DOMContentLoaded', loadBlog());

function loadBlog(){
    const activeBlogID = sessionStorage.getItem('activeBlogID');
    console.log(activeTourID);

    if (activeBlogID !== null) {
        let blog = getBlog(activeBlogID);
        createBlog(blog);
    } else {
        document.querySelector('main').innerHTML = `<h2 style="min-height: 100vh; padding:10%; margin: auto; text-align:center">There is no info about blog!<br><a href="blog.html">Back to list</a></h2>`
    }
}

function getBlog(blogID){
    let userList = JSON.parse(localStorage.getItem("userList"));

    if(userList === null || userList.length === 0) { return ""; }
    for(let i = 0; i < userList.length; i++){
        let userF = userList[i];
        if(userF.id == userID){
            return new userProfileObj(userID, userF.name, userF.surname, userF.image, userF.birthday, 
                userF.gender, userF.email, userF.password, userF.theme);
        }
    }

    return "";
};

function unloadBlog(){

}


window.addEventListener('beforeunload', unloadBlog);