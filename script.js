const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");

const getRandomCat = async function () {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  console.log(data);
  cat.innerHTML = `<img src='${data[0].url}'/>`;
};

cat_btn.addEventListener("click", getRandomCat);

const getRandomDog = async function () {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  console.log(data);
  dog.innerHTML = `<img src='${data.message}'/>`;
};

dog_btn.addEventListener("click", getRandomDog);
