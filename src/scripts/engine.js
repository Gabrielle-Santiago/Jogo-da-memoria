let emojis = [
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

        const shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);

        const gameContainer = document.querySelector('.game');

        shuffleEmojis.forEach(emoji => {
            const box = document.createElement("div");
            box.className = "item"; 
            // Use className para definir a classe

            // Adiciona o emoji ao conteúdo da caixa
            box.textContent = emoji;

            // Adiciona a caixa ao contêiner do jogo
            gameContainer.appendChild(box);

            // Convenção comum para indicar uma função que lida com eventos de clique em elementos.
            box.onclick = handleClick;
        });

        function handleClick() {
            if (openCards.length < 2) {
                this.classList.add("boxOpen");
                openCards.push(this);
            }

            if(openCards.length == 2){
                setTimeout(checkMatch, 500);
            }
        }

        function checkMatch() {
            if(openCards[0].innerHTML === openCards[1].innerHTML) {

                openCards[0].classList.add("boxMatch");
                openCards[1].classList.add("boxMatch");
                
            } else {
                openCards[0].classList.remove("boxOpen");
                openCards[1].classList.remove("boxOpen");
            }
            openCards = [];
            
            if (document.querySelectorAll(".boxMatch").length === emojis.length) {
                alert("Você venceu!")
            }
        }