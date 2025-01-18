const cardsData = [
    {
      imgSrc: 'op1.jpg',
      genre: '#Anime#Entertainment',
      time: '3 mins read',
      para: 'One is going to be premiered from April.',
      publisherImg: 'p1.png',
      publisherName: 'MangaPlus',
      publisherDate: '12 Jan 2024'
    },
    // Add more card objects here
    {
      imgSrc: 'op2.png',
      genre: '#Tech#Innovation',
      time: '5 mins read',
      para: 'Discover the latest trends in AI technology.',
      publisherImg: 'p1.png',
      publisherName: 'TechDaily',
      publisherDate: '15 Jan 2024'
    },
    // Add more card objects here
    {
      imgSrc: 'op3.jpg',
      genre: '#Health#Wellness',
      time: '4 mins read',
      para: '10 tips for maintaining a balanced lifestyle.',
      publisherImg: 'p1.png',
      publisherName: 'WellnessHub',
      publisherDate: '12 Jan 2025'
    },
    {
      imgSrc: 'op4.jpg',
      genre: '#Gaming#Entertainment',
      time: '6 mins read',
      para: 'Top 10 games you must play in 2024.',
      publisherImg: 'p1.png',
      publisherName: 'GameSpot',
      publisherDate: '11 Jan 2025'
    },
    {
      imgSrc: 'op5.jpg',
      genre: '#Travel#Adventure',
      time: '7 mins read',
      para: 'Explore the most beautiful destinations this year.',
      publisherImg: 'p1.png',
      publisherName: 'GlobeTrekker',
      publisherDate: '7 Jan 2025'
    },
    {
        imgSrc: 'op6.jpg',
        genre: '#Business#Finance',
        time: '7 mins read',
        para: 'Top renewable energy stocks to buy in 2025.',
        publisherImg: 'p1.png',
        publisherName: 'FinanceToday',
        publisherDate: '05 Jan 2025',
      },
  ];
  
  const carouselTrack = document.querySelector('.carousel-track');
  let currentIndex = 0;
  const cardsToShow = 3;
  const totalCards = cardsData.length;
  
  function renderCards() {
    carouselTrack.innerHTML = '';
    const start = currentIndex;
    const end = Math.min(currentIndex + cardsToShow, totalCards);
  
    for (let i = start; i < end; i++) {
      const card = document.createElement('div');
      card.classList.add('tren');
      card.innerHTML = `
        <img src="${cardsData[i].imgSrc}" alt="${cardsData[i].genre}">
        <div class="description">
          <div class="genre">
            <p>${cardsData[i].genre}</p>
          </div>
          <div class="time">
            <p><i class="fa fa-clock-o" style="font-size:15px; opacity: small;"></i> ${cardsData[i].time}</p>
          </div>
        </div>
        <div class="para">
          <p>${cardsData[i].para}</p>
        </div>
        <div class="publish">
          <div class="publisher">
            <img src="${cardsData[i].publisherImg}" alt="Publisher Image">
            <div class="detail">
              <div class="publishername">
                <p>${cardsData[i].publisherName} \n
                ${cardsData[i].publisherDate}</p>
              </div>
            </div>
          </div>
          <div class="readmore">Read more</div>
        </div>
      `;
      carouselTrack.appendChild(card);
    }
  }
  
  function moveLeft() {
    if (currentIndex > 0) {
      currentIndex -= cardsToShow;
      renderCards();
    }
  }
  
  function moveRight() {
    if (currentIndex + cardsToShow < totalCards) {
      currentIndex += cardsToShow;
      renderCards();
    }
  }
  
  document.getElementById('left-btn').addEventListener('click', moveLeft);
  document.getElementById('right-btn').addEventListener('click', moveRight);
  
  renderCards();
  
//for the section 
const slider = document.getElementById('hot-topics-slider'); 
const leftBtn = document.getElementById('hot-left-btn'); 
const rightBtn = document.getElementById('hot-right-btn'); 
let currentindex = 0; 
rightBtn.addEventListener('click', () => { 
  if (currentindex < slider.children.length - 1) 
    { 
      currentindex++; 
      updateSlider(); 
    } 
}); 
leftBtn.addEventListener('click', () => { 
  if (currentIndex > 0) 
  { currentindex--; 
    updateSlider(); 
  } 
});
  function updateSlider() 
  { 
    const width = slider.children[0].getBoundingClientRect().width; 
    slider.style.transform = `translateX(-${width * currentindex}px)`; 
  }















//for the read section
document.getElementById('myInput').addEventListener('click', function() {
  this.value = '';
});





//tomorrow have to finish this just before 12 and then lets see what will happen
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const date = new Date();
const formattedDate = "&#128197; " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

for (let i = 0; i < 4; i++) { // Adjust the number 4 to the actual count of your elements
    const rp = document.getElementById(`recent_publihser${i+1}`);
    if (rp) {
        rp.innerHTML = formattedDate;
    }
}

const newsHeadlines = [
  "UK Man Wins Rs 80 Crore On Lottery And Goes Back To Work Clearing Drains: After a life-changing win, a humble worker decides to continue his job, proving money can't buy passion.",
  "Australian Woman Shocked By Rs 32,867 Bill For Live Lobster At Chinese Restaurant: A dining experience turns into an expensive surprise as a woman's meal costs more than expected.",
  "NASA Discovers Water On Mars; Scientists Excited About Potential For Life: In a groundbreaking discovery, traces of water have been found on Mars, opening up possibilities for extraterrestrial life.",
  "Breakthrough In Cancer Research: New Treatment Shows Promising Results: Scientists are optimistic as a new cancer therapy demonstrates significant improvements in patient outcomes.",
  "Tech Giant Unveils Revolutionary AI Tool That Writes Code Independently: A major technology company introduces an innovative AI that can write code, revolutionizing the software development industry.",
  "Global Warming: Glaciers Melting Faster Than Predicted, Urgent Action Needed: New studies reveal that glaciers are disappearing at an alarming rate, highlighting the urgent need for environmental action.",
  "Economic Growth Slows Down Amid Rising Inflation And Market Uncertainty: As inflation rises, the global economy faces challenges, with growth rates slowing and market stability in question.",
  "Wildlife Conservation Efforts Pay Off: Endangered Species Population Rebounds: Conservation initiatives are showing positive results as endangered species numbers begin to recover.",
  "Artists Protest Against New Copyright Laws, Demand Fair Compensation: Creators rally against recent changes in copyright legislation, calling for fair treatment and compensation for their work.",
  "Historic Peace Agreement Signed, Ends Decades-Long Conflict In Region: A momentous peace treaty brings an end to years of strife, offering hope for a stable and prosperous future."
];


for(let i = 0; i < 4; i++) {
    const recentPara = document.getElementById(`recent_para${i}`);
    if (recentPara) {
        recentPara.innerHTML = newsHeadlines[i];
    }
}



//admin page
let posts = [];

function formatText(command, value = null) {
    document.execCommand(command, false, value);
}

function savePost() {
    const content = document.getElementById('editor').innerHTML;
    if (content) {
        posts.push(content);
        updatePostsList();
        document.getElementById('editor').innerHTML = ''; // Clear the editor after saving
        localStorage.setItem('posts', JSON.stringify(posts)); // Save posts to localStorage
    }
}

function updatePostsList() {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';
    posts.forEach((post, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = post;
        postsList.appendChild(listItem);
    });
}

document.getElementById('editor').addEventListener('input', () => {
    localStorage.setItem('editorContent', document.getElementById('editor').innerHTML);
});

window.addEventListener('load', () => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
        document.getElementById('editor').innerHTML = savedContent;
    }
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
        posts = JSON.parse(savedPosts);
        updatePostsList();
    }
});



const manage_post = document.getElementById('manage_post');

manage_post.addEventListener('mouseover', function() {
    const heading_upload = document.getElementById('heading_upload');
    const h1 = heading_upload.querySelector('h1'); // Select the h1 element within heading_upload
    if (h1) { // Check if the h1 element exists
        h1.innerHTML = "Manage Post";
    }
});


document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.querySelector('.logout');
  logoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      // You can use window.location to redirect to the registration page
      window.location.href = 'path/to/your/registration/page.html';
  });
});


document.getElementById('myButton').addEventListener('click', function() {
  console.log('Button clicked!');
});
