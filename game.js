// Lista de personagens com habilidades, vida e ataque
const characters = [
    { id: 'nataniel', color: 'blue', name: 'Nataniel', life: 3, attack: 2, abilities: 'Nenhuma habilidade especial.' },
    { id: 'miguel', color: 'red', name: 'Miguel', life: 2, attack: 3, abilities: 'Dá um tapa nos aliados, retirando 1 de vida e aumentando 2 de ataque.' },
    { id: 'vitoria', color: 'yellow', name: 'Vitória', life: 2, attack: 2, abilities: 'Ao receber o primeiro ataque, joga um pão no adversário, que devolve metade do dano recebido.' },
    { id: 'barbara', color: 'green', name: 'Bárbara', life: 1, attack: 3, abilities: 'Ao ser derrotada, usa a habilidade "Branca D+" que cega os adversários, fazendo-os receber um ataque adicional.' },
    { id: 'gean', color: 'purple', name: 'Gean', life: 2, attack: 2, abilities: 'Quando derrotado, envia uma mensagem ao adversário, deixando-o confuso por uma rodada e causando dano.' },
    { id: 'davi', color: 'orange', name: 'Davi', life: 1, attack: 2, abilities: 'Se Davi estiver na batalha, fica de noite, reduzindo o ataque de todos em 1 e aplicando cegueira.' },
    { id: 'davi-antonio', color: 'cyan', name: 'Davi Antonio', life: 2, attack: 3, abilities: 'Davi Antonio grita "PINTOO" ao dar o primeiro ataque, atordoando o inimigo e fazendo-o receber 50% a mais de dano por uma rodada.' },
    { id: 'polidor', color: 'pink', name: 'Polidor', life: 2, attack: 2, abilities: 'Quando Polidor é derrotado, ele joga um brinquedo. Se restar apenas um personagem no time, Polidor revive com 1 de vida e metade do dano do aliado.' },
    { id: 'enzo', color: 'brown', name: 'Enzo', life: 2, attack: 4, abilities: 'No primeiro ataque, Enzo lança um chute com dano dobrado.' },
    { id: 'marcos', color: 'gray', name: 'Marcos', life: 3, attack: 2, abilities: 'Quando a batalha se inicia Marcos usa o poder da calvicie concedendo +1 de vida e +1 de ataque a seus aliados.' }
];

// Função para mostrar o pop-up com as habilidades do personagem
function showPopup(character) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    
    popupContent.innerHTML = `
        <div class="popup-header">${character.name}</div>
        <div class="popup-stats">
            <span>Vida: ${character.life}</span>
            <span>Ataque: ${character.attack}</span>
        </div>
        <div>${character.abilities}</div>
    `;
    
    popup.classList.add('show');
}

// Inicializar a loja ao carregar a página
document.addEventListener('DOMContentLoaded', resetShop);

// Função para resetar a loja
function resetShop() {
    const slots = document.querySelectorAll('.bottom-slots .slot');
    
    slots.forEach(slot => {
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        slot.style.backgroundColor = randomCharacter.color;
        slot.dataset.character = randomCharacter.id;
        slot.addEventListener('click', () => showPopup(randomCharacter));
    });
}


// Função para fechar o pop-up
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
}

let selectedCharacter = null; // Variável para armazenar o personagem selecionado

// Função para mostrar o pop-up com as habilidades do personagem
function showPopup(character, slot) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    
    popupContent.innerHTML = `
        <div class="popup-header">${character.name}</div>
        <div class="popup-stats">
            <span>Vida: ${character.life}</span>
            <span>Ataque: ${character.attack}</span>
        </div>
        <div>${character.abilities}</div>
    `;
    
    popup.classList.add('show');
    selectedCharacter = { character, slot }; // Armazenar o personagem selecionado e o slot da loja
}

// Função para fechar o pop-up
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    selectedCharacter = null; // Limpar o personagem selecionado ao fechar o pop-up
}

// Adicionar evento de clique em cada slot superior
const topSlots = document.querySelectorAll('.top-slot');
topSlots.forEach(slot => {
    slot.addEventListener('click', () => {
        if (selectedCharacter) {
            // Verificar se o slot está vazio
            if (!slot.classList.contains('occupied')) {
                // Adicionar o personagem ao slot
                slot.style.backgroundColor = selectedCharacter.character.color;
                slot.classList.add('occupied');
                slot.setAttribute('data-character', selectedCharacter.character.name); // Armazenar o personagem no slot
                
                // Remover o personagem da loja
                selectedCharacter.slot.style.backgroundColor = '';
                selectedCharacter.slot.classList.remove('occupied');

                // Fechar o pop-up e resetar a seleção
                closePopup();
            }
        }
    });
});

// Inicializar a loja ao carregar a página
document.addEventListener('DOMContentLoaded', resetShop);

// Função para resetar a loja com 3 personagens aleatórios
function resetShop() {
    const characters = [
        { id: 'nataniel', name: 'Nataniel', color: 'red', life: 3, attack: 1, abilities: 'Sem habilidades especiais' },
        { id: 'miguel', name: 'Miguel', color: 'blue', life: 2, attack: 2, abilities: 'Tira 1 vida e dá +2 ataque aos aliados' },
        { id: 'vitoria', name: 'Vitória', color: 'green', life: 3, attack: 1, abilities: 'Devolve metade do dano ao adversário' },
        { id: 'barbara', name: 'Bárbara', color: 'purple', life: 2, attack: 2, abilities: 'Cega os adversários e causa ataque adicional' },
        { id: 'gean', name: 'Gean', color: 'orange', life: 1, attack: 3, abilities: 'Deixa o adversário confuso por uma rodada' },
        { id: 'davi', name: 'Davi', color: 'yellow', life: 3, attack: 1, abilities: 'Reduz o ataque de todos e aplica cegueira' },
        { id: 'davi-antonio', name: 'Davi Antonio', color: 'brown', life: 2, attack: 2, abilities: 'Atordoa o inimigo e aumenta o dano' },
        { id: 'polidor', name: 'Polidor', color: 'pink', life: 1, attack: 3, abilities: 'Revive com 1 de vida se restar só um aliado' },
        { id: 'enzo', name: 'Enzo', color: 'gray', life: 2, attack: 2, abilities: 'Lança um chute com dano dobrado no primeiro ataque' },
        { id: 'marcos', name: 'Marcos', color: 'cyan', life: 3, attack: 1, abilities: 'Concede +1 de vida e +1 de ataque a aliados' }
    ];

    // Limpar os slots da loja
    const shopSlots = document.querySelectorAll('.bottom-slot');
    shopSlots.forEach(slot => {
        slot.style.backgroundColor = '';
        slot.classList.remove('occupied');
        slot.removeEventListener('click', showPopup);
    });

    // Selecionar 3 personagens aleatórios
    const randomCharacters = [];
    while (randomCharacters.length < 3) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex];
        if (!randomCharacters.includes(randomCharacter)) {
            randomCharacters.push(randomCharacter);
        }
    }

    // Preencher os 3 slots da loja com os personagens aleatórios
    randomCharacters.forEach((character, index) => {
        const slot = shopSlots[index];
        slot.style.backgroundColor = character.color;
        slot.classList.add('occupied');
        slot.addEventListener('click', () => showPopup(character, slot));
    });
}


// Inicializar a loja ao carregar a página
document.addEventListener('DOMContentLoaded', resetShop);
