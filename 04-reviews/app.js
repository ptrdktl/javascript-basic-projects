const reviews = [
    {
        id: 1,
        name: 'mei mei',
        job: 'jujutsu sorcerer',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658daa432a04ce1125930a23_658dd2b095509b2d8431ecbd/scale_1200',
        text: "Mei Mei (冥めい冥めい Mei Mei?) is a supporting character in the Jujutsu Kaisen series. She is a grade 1 jujutsu sorcerer who works independently and only in exchange for money.",
    },
    {
        id: 2,
        name: 'yuji itadori',
        job: '1st year student',
        img: 'https://i.ytimg.com/vi/oKC1ZC3ePPQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgWig8MA8=&amp;rs=AOn4CLDK3EQrWRz3-765EjbueIugX2dtow',
        text: "Yuji Itadori (虎いた杖どり悠ゆう仁じ Itadori Yūji?) is the main protagonist of the Jujutsu Kaisen series. He is the son of Jin Itadori and Kaori Itadori, and the grandson of Wasuke Itadori. Yuji was living a normal life in Sendai City until he encountered Megumi and ate one of Sukuna's fingers. ",
    },
    {
        id: 3,
        name: 'satoru gojo',
        job: 'faculty',
        img: 'https://i.ytimg.com/vi/SNxvYYn0SVk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEYgUShyMA8=&rs=AOn4CLDCPEBVZ3blQJpgWNwTyH0VSMvmTg',
        text: "Satoru Gojo (五ご条じょう悟さとる Gojō Satoru?) is one of the main protagonists of the Jujutsu Kaisen series. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world. Satoru is the pride of the Gojo Clan, the first person to inherit both the Limitless and the Six Eyes in four hundred years. ",
    },
    {
        id: 4,
        name: 'suguru geto',
        job: "geto's group",
        img: 'https://i.ytimg.com/vi/jopuIYV5js4/maxresdefault.jpg',
        text: "Suguru Geto (夏げ油とう傑すぐる Getō Suguru?) is an antagonist in both the Jujutsu Kaisen series and its prequel Jujutsu Kaisen 0: Jujutsu High. He was originally a student of Masamichi Yaga's alongside Satoru Gojo and Shoko Ieiri at Tokyo Jujutsu High.",
    },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

//show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

//show next person
nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

//show random person
randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})