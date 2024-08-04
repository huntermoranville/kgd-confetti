const canvas = document.querySelector("#canvas-target");
const button = document.querySelector("#confetti-button");
const jsConfetti = new JSConfetti({ canvas });

const confetti = () => {
  jsConfetti.addConfetti({
    emojis: ["🥳", "🎉", "🎊", "🔹", "🟪", "🟩"],
  });
};

button.addEventListener("click", confetti);
