const emojis = [
    "❤️","❤️",
    "🔥","🔥",
    "⭐","⭐",
    "🚀","🚀",
    "🍬","🍬",
    "🎵","🎵",
    "💵","💵",
    "💣","💣"
];

let openCards = [];

// O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável.

let shuffleEmojis = emojis.sort(() => (Math.random() > Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis;
    document.querySelector(".game").appendChild(box)
}