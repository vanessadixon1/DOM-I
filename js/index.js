const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation 
let nav = document.querySelectorAll('nav a');
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

//top
const h1 = document.querySelector('.cta .cta-text h1');

const ctaText = document.querySelector('.cta');
ctaText.querySelector('h1').textContent = siteContent["cta"]["h1"];
ctaText.querySelector('button').textContent = siteContent['cta']['button'];
ctaText.querySelector('img').setAttribute('src', siteContent['cta']['img-src']);

//main content top
const mainContent = document.querySelectorAll(".main-content .top-content .text-content")
console.log(mainContent);

mainContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];

mainContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];

mainContent[1].querySelector('h4').textContent = siteContent["main-content"]['about-h4'];

mainContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];

//main content image
const middleImg = document.querySelector(".main-content .middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"]
console.log(middleImg);

//main content bottom
const bottomMainContent = document.querySelectorAll(".bottom-content .text-content");
console.log(bottomMainContent);
bottomMainContent[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];

bottomMainContent[0].querySelector('p').textContent = siteContent["main-content"]["services-content"];

bottomMainContent[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];

bottomMainContent[1].querySelector('p').textContent = siteContent["main-content"]["product-content"];

bottomMainContent[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];

bottomMainContent[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"];


//address
const contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent["contact"]["contact-h4"]
console.log(contact.querySelector('h4'));
let ps = contact.querySelectorAll('p');
ps[0].textContent = siteContent['contact']['address'];
ps[1].textContent = siteContent['contact']['phone'];
ps[2].textContent = siteContent['contact']['email'];

//footer
let footer = document.querySelector('footer p');
console.log(footer)

footer.textContent = siteContent["footer"]["copyright"]