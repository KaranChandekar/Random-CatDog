const dog = document.getElementById("dog");
const fox = document.getElementById("fox");
const dog_btn = document.getElementById("dog_btn");
const fox_btn = document.getElementById("fox_btn");

const getRandomDog = async function () {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  console.log(data);
  dog.innerHTML = `<img src='${data.message}'/>`;
};

dog_btn.addEventListener("click", getRandomDog);
