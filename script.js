const allOptions = document.getElementsByClassName("option");
const optionBarText = document.querySelector(".option-bar p");
const arrow = document.querySelector(".main img");
const options = document.querySelector(".options");

for (let option of allOptions) {
    option.onclick = function() {
        const appName = option.querySelector("p").textContent; 
        optionBarText.innerHTML = appName;
    }
}

arrow.addEventListener("click", () => {
  if (options.style.display === "none") {
    options.style.display = "block";
  } else {
    options.style.display = "none";
  }
});
