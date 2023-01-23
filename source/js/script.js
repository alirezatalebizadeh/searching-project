let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];
let customListItem;

let $ = document;
//دسترسی به تمامی المنت هایی که لازم داریم
const divContainer = $.querySelector('.search-input')
const inputElem = $.querySelector('input')
const boxContainer = $.querySelector('.autocom-box');

//عمال رویداد و گرفتن مقدار اینپوت
inputElem.addEventListener('keyup', () => {
    let valueInput = inputElem.value;

    if (valueInput) {
        divContainer.classList.add('active');
        //فیلتر کردن لغات سرچ شده نسبت به لغات ارایه ما
        let listWordSearched = suggestions.filter(word => {
            return word.toLowerCase().startsWith(valueInput.toLocaleLowerCase())
        })

        generateDom(listWordSearched)
    } else {
        divContainer.classList.remove('active')
    }
})
//گرفتن ارایه لغات فیلتر شده و ریختن ان به المنت ال ای
function generateDom(listArray) {
    let liArray = listArray.map(word => {
        return `<li>${word}</li>`
    })

    if (!liArray.length) {
        customListItem = `<li>${inputElem.value}</li>`
    } else {
        customListItem = liArray.join('')//به هم متصل کردن  المنت های ارایه  برای ریختن در دام
    }
    boxContainer.innerHTML = customListItem;
    select()
}

function select() {
    let allListItem = divContainer.querySelectorAll('li');
    allListItem.forEach(item => {
        item.addEventListener('click', (e) => {//اعمال رویداد کلیک بر روی تمامی ال ای ها و گرفتن مقدار ال ای کلیک شده و ریختن در ایپوت
            inputElem.value = e.target.textContent
            divContainer.classList.remove('active')
        })
    });
}