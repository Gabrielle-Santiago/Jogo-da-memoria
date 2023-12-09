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

let animais = [
    "🐞","🐞",
    "🐷","🐷",
    "🐬","🐬",
    "🦢","🦢",
    "🦩","🦩",
    "🐮","🐮",
    "🐶","🐶",
    "🐝","🐝"
];

let frutas = [
    "🍇","🍇",
    "🍉","🍉",
    "🍌","🍌",
    "🍒","🍒",
    "🥥","🥥",
    "🥝","🥝",
    "🍏","🍏",
    "🍓","🍓"
];

let ferramentas = [
    "🔦","🔦",
    "🪓","🪓",
    "🔨","🔨",
    "⛏️","⛏️",
    "🪚","🪚",
    "🔧","🔧",
    "🪛","🪛",
    "🔩","🔩",
];
let shuffleEmojis;

let openCards = [];

    const gameContainer = document.querySelector('.game');

    //Chamadas das opções
    const animals = document.getElementById('animals');
    const fruit = document.getElementById('fruit');
    const ferrament = document.getElementById('ferrament');
    
    animals.addEventListener("click", function(params) {
        if(shuffleEmojis = animais){
            animais.sort(() => Math.random() > 0.5 ? 2 : -1);

            gameContainer.innerHTML ='';

            shuffleEmojis.forEach(animais => {
                const box = document.createElement("div");
                box.className = "item";
                box.textContent = animais;
                gameContainer.appendChild(box);
                box.onclick = handleClick;
            });
        }
    });

    fruit.addEventListener("click", function(params) {
        if(shuffleEmojis = frutas){
            frutas.sort(() => Math.random() > 0.5 ? 2 : -1);

            gameContainer.innerHTML ='';

            shuffleEmojis.forEach(frutas => {
                const box = document.createElement("div");
                box.className = "item";
                box.textContent = frutas;
                gameContainer.appendChild(box);
                box.onclick = handleClick;
            });
        }
    })

    ferrament.addEventListener("click", function(params) {
        if(shuffleEmojis = ferramentas){
            ferramentas.sort(() => Math.random() > 0.5 ? 2 : -1);

            gameContainer.innerHTML ='';

            shuffleEmojis.forEach(ferramentas => {
                const box = document.createElement("div");
                box.className = "item";
                box.textContent = ferramentas;
                gameContainer.appendChild(box);
                box.onclick = handleClick;
            });
        }
    })

        if (shuffleEmojis = emojis) {
            emojis.sort(() => Math.random() > 0.5 ? 2 : -1);        
        }

        shuffleEmojis.forEach(emojis => {
            const box = document.createElement("div");
            box.className = "item"; 
            // Use className para definir a classe

            // Adiciona o emoji ao conteúdo da caixa
            box.textContent = emojis;

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

    // Função para mostrar/ocultar o menu de opções ao clicar no emoji de configurações

    function Options() {
    const optionsMenu = document.querySelector('.options-menu');
    optionsMenu.style.display = optionsMenu.style.display === 'none' ? 'block' : 'none';
  }