const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesSize = 24;
let noSize = 24;

noBtn.addEventListener("click", () => {
  yesSize *= 1.25;
  noSize *= 0.75;

  yesBtn.style.fontSize = yesSize + "px";
  noBtn.style.fontSize = noSize + "px";

  if (noSize < 8) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes_page.html";
});
