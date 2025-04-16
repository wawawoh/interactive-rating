submitButton = document.querySelector(".submit-button");
submitContainer = document.querySelector(".submit-container");
ratingContainer = document.querySelector(".rating-container");
buttonList = document.querySelectorAll(".rating-button");
topText = document.querySelector(".top-text");

let rating;

//submit button

submitButton.addEventListener("click", () => {
  submitContainer.style.display = "inline";
  ratingContainer.style.display = "none";
  console.log(rating);
  topText.innerText = `You selected ${rating} out of 5`;
});

const buttonRegister = (selected) => {
  buttonList.forEach((button) => {
    button.classList.remove("active");
  });
  selected.target.classList.add("active");
  rating = selected.target.textContent;
  console.log(rating);
};

//click
buttonList.forEach((each) => {
  each.addEventListener("click", buttonRegister);
});
