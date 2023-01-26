const mainConatiner = document.querySelector(".rating-container");
const thanksConatiner = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating-number");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanksConatiner.classList.remove("hidden");
  mainConatiner.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thanksConatiner.classList.add("hidden");
  mainConatiner.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
