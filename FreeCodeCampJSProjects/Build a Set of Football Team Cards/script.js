
const footballTeam = {
  team: "Legends FC",
  year: 2025,
  headCoach: "Alex Thompson",
  players: [
    { name: "Daniel Cruz", position: "forward", isCaptain: false },
    { name: "Marco Esteban", position: "midfielder", isCaptain: true },
    { name: "Leo Ramirez", position: "defender", isCaptain: false },
    { name: "Ethan Shields", position: "goalkeeper", isCaptain: false }
  ]
};

document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

const cardsContainer = document.getElementById("player-cards");

function displayPlayers(playerList) {
  cardsContainer.innerHTML = "";

  playerList.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const name = document.createElement("h2");
    name.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const position = document.createElement("p");
    position.textContent = `Position: ${player.position}`;

    card.appendChild(name);
    card.appendChild(position);
    cardsContainer.appendChild(card);
  });
}

displayPlayers(footballTeam.players);

document.getElementById("players").addEventListener("change", function () {
  const selected = this.value;

  if (selected === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      player => player.position === selected
    );
    displayPlayers(filteredPlayers);
  }
});
