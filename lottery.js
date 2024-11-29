const cards = document.querySelectorAll("#id10 .card");

const bonusList = [
  "5%",
  "10%",
  "10%",
  "10L",
  "20L",
  "5L",
  "10L",
  "20L",
  "5L",
  "10L",
  "20L",
  "5L",
];

cards.forEach((c) => {
  c.onclick = () => {
    c.style.transform = "rotate(180deg)";
    c.textContent = "";
    c.style.background = "orange";
    c.style.border = "none";
    c.style.borderRadius = 0;
    setTimeout(() => {
      c.style.transform = "rotate(360deg)";
      let choice = Math.floor(Math.random() * bonusList.length);
      c.textContent = bonusList[choice];
      c.style.background = "#14cc0d";
    }, 500);
  };
});
