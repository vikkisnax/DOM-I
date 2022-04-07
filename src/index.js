const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


//make changes below - DOM manipulations
//Access the data using dot or square-bracket notation.

// MY NOTES:
// 1. I selected the element by putting the nav and 'a' tag into a variable. then I added the same class name to all 'a' tags with a for...of loop I looked up
// 2. Since these are array-like objects, I focused on each index to add a different text content 
// 3. I grabbed the img's 'logo' class inside of the header, then i added a src with a link. (it'll go to the right if i make the screen bigger)
// 4. I grabbed the h1 inside of the .cta-text tag. I did the same but with the button. 
// 5. tried adding a src to the image tag (it wont show up unless i make screen bigger).
// 6. I grabbed the h4 tag inside the text-content class and gave it textContent. I did the same for the paragraph tag in the same class and gave it text.
// 7. I grabbed the .middle-img class and added an src.
// 8. I essentially did the same as 6, but since the class name was also text-content, I had to put the parent class above it.
// 9. I grabbed/selected the h4 tag in the footer's .contact class and added text to the h4 tag. Then I used querySelectorAll to change multiple 'p' tags in the 'contact' section. I did the same thing as I did in 6/8 to give them different textContent. 
// 10. I selected the element by putting the 'a' tag in the footer tag into a variable. then I added a class name of 'bold' to the footer's 'a' tag. next I added text to the 'a' tag



//1.
const navA = document.querySelectorAll('header nav a');
for (const a of navA){
  a.classList.add('italic');
}

//2.
navA[0].textContent = 'Services';
navA[1].textContent = 'Product';
navA[2].textContent = 'Vision';
navA[3].textContent = 'Features';
navA[4].textContent = 'About';
navA[5].textContent = 'Contact';

//3.
const imgSrc = document.querySelector('.logo');
imgSrc.src="http://localhost:9000/img/logo.png";

//4.
const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = 'DOM Is Awesome';

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Get Started';

//5. 
const ctaImg = document.querySelector('#cta-img');
ctaImg.src="http://localhost:9000/img/cta.png";

//6.
const mainText = document.querySelectorAll('.text-content h4');
mainText[0].textContent = "Features";
mainText[1].textContent = "About";

const mainP = document.querySelectorAll('.text-content p');
mainP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[1].textContent ="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";

//7.
const midImg = document.querySelector('.middle-img');
midImg.src="http://localhost:9000/img/accent.png";


//8.
const botHeader = document.querySelectorAll('.bottom-content .text-content h4');
botHeader[0].textContent = "Services";
botHeader[1].textContent = "Product";
botHeader[2].textContent = "Vision";


const botParag = document.querySelectorAll('.bottom-content .text-content p');
botParag[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
botParag[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
botParag[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


//9.
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = "Contact";

const contactParag = document.querySelectorAll('.contact p');
contactParag[0].textContent = "123 Way 456 Street Somewhere, USA";
contactParag[1].textContent = "1 (888) 888-8888";
contactParag[2].textContent = "sales@greatidea.io";



// 10.
const footerClass = document.querySelector('footer a');
footerClass.classList.add('bold');
footerClass.textContent='Copyright Great Idea! 2021';


















//do MVP after