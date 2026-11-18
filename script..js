function createLikeCounter() {
    let likes = 0; 
    return function() {
        likes++;
        return likes;
    };
}

const incrementLike = createLikeCounter();
const likeBtn = document.getElementById('likeBtn');
const countDisplay = document.getElementById('count');

likeBtn.addEventListener('click', () => {
    countDisplay.innerText = incrementLike();
});


function greet(greetingWord) {
    return function(userName) {
        return `${greetingWord}, ${userName}!`;
    };
}

const sayHelloOfficial = greet("Здравствуйте");
const sayHelloFriendly = greet("Привет");

const nameInput = document.getElementById('nameInput');
const greetingText = document.getElementById('greetingText');

document.getElementById('officialBtn').addEventListener('click', () => {
    let name = nameInput.value || "Гость";
    greetingText.innerText = sayHelloOfficial(name);
});

document.getElementById('friendlyBtn').addEventListener('click', () => {
    let name = nameInput.value || "Друг";
    greetingText.innerText = sayHelloFriendly(name);
});


function sumTo(n) {
    if (n <= 1) return n;
    return n + sumTo(n - 1);
}

const numInput = document.getElementById('numInput');
const sumResult = document.getElementById('sumResult');

document.getElementById('calcBtn').addEventListener('click', () => {
    let n = Number(numInput.value);
    if (n > 0) {
        sumResult.innerText = sumTo(n);
    } else {
        sumResult.innerText = "0";
    }
});
