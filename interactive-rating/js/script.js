const container = document.querySelector(".container");
const containerFin = document.querySelector(".endContainer");

const submitbtn = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitbtn.addEventListener("click", function () {
  containerFin.classList.remove("hidden");
  container.style.display = "none";
});


rateAgain.addEventListener("click", function () {
  containerFin.classList.add("hidden");
  container.style.display = "block";
});


rates.forEach((rate) => {
  rate.addEventListener("click", function () {
    rating.textContent = rate.textContent;
  });
});