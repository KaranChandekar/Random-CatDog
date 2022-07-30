const dog = document.getElementById("dog");
const fox = document.getElementById("fox");
const dog_btn = document.getElementById("dog_btn");
const fox_btn = document.getElementById("fox_btn");

dog_btn.addEventListener("click", getRandomDog);
fox_btn.addEventListener("click", getRandomFox);
