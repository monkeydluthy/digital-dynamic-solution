// ****DROPDOWN MENUS****

// GET ALL DROPDOWNS FROM DOCUMENT
const dropdowns = document.querySelectorAll('.dropdown');

//LOOP THRU ALL DROPDOWN ELEMENTS
dropdowns.forEach(dropdown => {
    //Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    
    // Using this method in order to have multiple dropdown menus on page work

    //Add a click event to the select element
    select.addEventListener('click', () => {
        //Add the clicked select style to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate style to the caret element
        caret.classList.toggle('caret-rotate');
        // Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    // LOOP THRU ALL OPTION ELEMENTS
    options.forEach(option => {
        //Add click event to the option element
        option.addEventListener('click', () => {
            //Change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            //Add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            //Add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //Add the open styles to the menu element
            menu.classList.remove('menu-open');
            //Remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            //Add active class to clicked option element
            option.classList.add('active');
        });
    });
});

let laptop = document.querySelector('[data-laptop]');
laptop.addEventListener('click', () => {
    location.href = "laptops.html"; 
});

let tv = document.querySelector('[data-tv]');
tv.addEventListener('click', () => {
    location.href = "tv.html"; 
});

let cam = document.querySelector('[data-cam]');
cam.addEventListener('click', () => {
    location.href = "camera.html"; 
});

let games = document.querySelector('[data-games]');
games.addEventListener('click', () => {
    location.href = "games.html"; 
});

let clothes = document.querySelector('[data-clothes]');
clothes.addEventListener('click', () => {
    location.href = "clothes.html"; 
});

let toy = document.querySelector('[data-toys]');
toy.addEventListener('click', () => {
    location.href = "toys.html"; 
});

let tool = document.querySelector('[data-tools]');
tool.addEventListener('click', () => {
    location.href = "tools.html"; 
});

let apple = document.querySelector('[data-apple]');
apple.addEventListener('click', () => {
    location.href = "apple.html"; 
});

let nintendo = document.querySelector('[data-nintendo]');
nintendo.addEventListener('click', () => {
    location.href = "nintendo-switch.html"; 
});

let ps5 = document.querySelector('[data-ps5]');
ps5.addEventListener('click', () => {
    location.href = "ps5.html"; 
});

let cricuts = document.querySelector('[data-cricut]');
cricuts.addEventListener('click', () => {
    location.href = "cricut.html"; 
});

let quest = document.querySelector('[data-quest]');
quest.addEventListener('click', () => {
    location.href = "metaquest.html"; 
});

let mbair = document.querySelector('[data-23-air]');
mbair.addEventListener('click', () => {
    location.href = "https://amzn.to/3SZ2WyZ"; 
});

let frame = document.querySelector('[data-samsung-frame]');
frame.addEventListener('click', () => {
    location.href = "https://amzn.to/3ReMd9M"; 
});

let canon = document.querySelector('[data-canon]');
canon.addEventListener('click', () => {
    location.href = "https://amzn.to/3N2wh85"; 
});

let chair = document.querySelector('[data-chair]');
chair.addEventListener('click', () => {
    location.href = "https://amzn.to/47NmYkc"; 
});

let ipadpro12 = document.querySelector('[data-ipad-pro-12]');
ipadpro12.addEventListener('click', () => {
    location.href = "https://amzn.to/3uHFUCA"; 
});

let metaquest = document.querySelector('[data-buy-quest]');
metaquest.addEventListener('click', () => {
    location.href = "https://amzn.to/46vq3Vb"; 
});

let drill = document.querySelector('[data-drill]');
drill.addEventListener('click', () => {
    location.href = "https://amzn.to/46Ck2G6"; 
});

let watchSE = document.querySelector('[data-watch-se]');
watchSE.addEventListener('click', () => {
    location.href = "https://amzn.to/47UzxdL"; 
});

let oled = document.querySelector('[data-oled]');
oled.addEventListener('click', () => {
    location.href = "https://amzn.to/3uHrqTa"; 
});

let airpod3 = document.querySelector('[data-airpod-3]');
airpod3.addEventListener('click', () => {
    location.href = "https://amzn.to/3uq9KLT"; 
});

let ps5Console = document.querySelector('[data-ps5-console]');
ps5Console.addEventListener('click', () => {
    location.href = "https://amzn.to/3GkZcjO"; 
});

let cricut3 = document.querySelector('[data-cricut-3]');
cricut3.addEventListener('click', () => {
    location.href = "https://amzn.to/47Rkf9x"; 
});

let tip1 = document.querySelector('[data-tip-1]');
tip1.addEventListener('click', () => {
    location.href = "https://www.advantageccs.org/blog/7-smart-strategies-to-save-money-during-the-holiday-season/?refppc=grant&kw=&creative=656463683405&gad_source=1&gclid=Cj0KCQiA35urBhDCARIsAOU7QwnreOlHfA3aHuqcF0BmCn2QcC0N-tC1zPnwb1cnPbjrX-FO3ZyQHToaAoEiEALw_wcB"; 
});

let tip2 = document.querySelector('[data-tip-2]');
tip2.addEventListener('click', () => {
    location.href = "https://www.cnbc.com/2023/11/22/tips-to-help-holiday-shoppers-save-money-and-avoid-debt-this-season.html"; 
});

let tip3 = document.querySelector('[data-tip-3]');
tip3.addEventListener('click', () => {
    location.href = "https://www.cbsnews.com/news/black-friday-2023-holiday-spending-inflation-budget-tips/"; 
});

let tip4 = document.querySelector('[data-tip-4]');
tip4.addEventListener('click', () => {
    location.href = "https://pix11.com/pix11-partner-sponsored/money-saving-tips-and-tricks-to-get-you-ready-for-the-holiday-season-2/"; 
});

let tip5 = document.querySelector('[data-tip-5]');
tip5.addEventListener('click', () => {
    location.href = "https://news.yahoo.com/holiday-saving-tips-184736552.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMVUBc-5jywiQuOqN8mLrOwj-P94VQm3-c-VBLYuA05uMMafLKzsGTa2RUVIq__JZAbKM7zd2y4HVXKb1tpRmvSwVNWbpI4WPHlirNuSfcP2a_oBAk9XD2Ow_1LE3gWZ-CGrs6dBzUMkAFdbsf86JMLE9_6-4kESLMGQanwkAJJZ"; 
});

let tip6 = document.querySelector('[data-tip-6]');
tip6.addEventListener('click', () => {
    location.href = "https://fortune.com/recommends/banking/how-to-build-a-holiday-budget/"; 
});