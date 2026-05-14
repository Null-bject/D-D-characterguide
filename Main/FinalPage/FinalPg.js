// --- DADOS DO RPG --- //
const races = [
    { name: "Human", pt: "Humano", desc: "Os humanos são a mais adaptável e ambiciosa entre as raças comuns. Possuem diversas culturas e aparências.", stats: "Todos os valores de habilidade aumentam em 1.", gameplay: "Ótimo para qualquer classe. Muito flexível." },
    { name: "Elf", pt: "Elfo", desc: "Um povo mágico de graça sobrenatural, vivendo no mundo mas não sendo inteiramente parte dele.", stats: "+2 em Destreza.", gameplay: "Excelentes Arqueiros, Magos ou Ladinos devido à alta destreza e percepção aguçada." },
    { name: "Dwarf", pt: "Anão", desc: "Guerreiros e mineradores robustos, conhecidos por sua habilidade em forja e resistência inabalável.", stats: "+2 em Constituição.", gameplay: "Tanques naturais. Perfeitos para Bárbaros e Guerreiros." },
    { name: "Tiefling", pt: "Tiefling", desc: "Carregam a herança de uma linhagem infernal, marcados com chifres e caudas. Frequentemente temidos.", stats: "+2 Carisma, +1 Inteligência.", gameplay: "Feiticeiros ou Bruxos fantásticos com habilidades inatas de fogo." },
    { name: "Dragonborn", pt: "Draconato", desc: "Humanoides com sangue dracônico, orgulhosos e capazes de expelir ataques de sopro.", stats: "+2 Força, +1 Carisma.", gameplay: "Paladinos perfeitos. Possuem ataque de sopro em área." },
    { name: "Orc", pt: "Orc", desc: "Tribais, selvagens e incrivelmente fortes, guiados pelas emoções e instintos de sobrevivência.", stats: "+2 Força, +1 Constituição.", gameplay: "Foco total em combate corpo-a-corpo brutal." },
    { name: "Halfling", pt: "Halfling", desc: "Pequenos, alegres e incrivelmente sortudos. Amam o conforto do lar e boas refeições.", stats: "+2 Destreza.", gameplay: "Ladinos natos. A habilidade 'Sorte' permite rerolar resultados 1 no d20." },
    { name: "Gnome", pt: "Gnomo", desc: "Inventores e ilusionistas pequeninos, com uma energia e curiosidade inesgotáveis.", stats: "+2 Inteligência.", gameplay: "Magos excepcionais e resistentes à magia." },
    { name: "Half-Elf", pt: "Meio-Elfo", desc: "Combinam a graça élfica com a versatilidade humana, servindo como pontes entre as culturas.", stats: "+2 Carisma e +1 em outras duas.", gameplay: "Muito versáteis, excelentes Bardos e Diplomatas." },
    { name: "Half-Orc", pt: "Meio-Orc", desc: "Marcados pela ferocidade dos orcs e pela adaptabilidade humana. Cicatrizes são motivo de orgulho.", stats: "+2 Força, +1 Constituição.", gameplay: "Extremamente difíceis de derrubar em combate (Resistência Implacável)." }
];

const classes = [
    { name: "Fighter", pt: "Guerreiro", desc: "Um mestre do combate marcial, perito com uma variedade de armas e armaduras.", gameplay: "Fácil de jogar. Múltiplos ataques por turno e cura própria." },
    { name: "Wizard", pt: "Mago", desc: "Um usuário de magia escolar capaz de manipular a estrutura da realidade.", gameplay: "Dificuldade Alta. Possui a maior lista de magias do jogo. Baixo HP." },
    { name: "Rogue", pt: "Ladino", desc: "Um trapaceiro que usa furtividade e manhas para superar obstáculos e inimigos.", gameplay: "Ataques furtivos causam dano massivo. Especialista em perícias (desarmar armadilhas)." },
    { name: "Paladin", pt: "Paladino", desc: "Um guerreiro sagrado vinculado a um juramento divino.", gameplay: "Cura aliados e aplica 'Smite' (Destruição) para dano radiante extra. Ótimo tanque e líder." },
    { name: "Cleric", pt: "Clérigo", desc: "Um campeão sacerdotal que empunha magia divina a serviço de um poder superior.", gameplay: "A melhor classe de suporte e cura, mas também muito forte em combate usando armadura pesada." },
    { name: "Barbarian", pt: "Bárbaro", desc: "Um guerreiro feroz que pode entrar em uma fúria de batalha.", gameplay: "HP massivo, dano alto. Em 'Fúria', resiste a dano físico. Simples e brutal." },
    { name: "Warlock", pt: "Bruxo", desc: "Um portador de magia derivada de uma barganha com uma entidade extraplanar.", gameplay: "Recupera feitiços com descanso curto. O feitiço 'Rajada Mística' é o melhor do jogo." },
    { name: "Sorcerer", pt: "Feiticeiro", desc: "Um conjurador cuja magia inata vem de um dom ou linhagem.", gameplay: "Metamagia permite alterar feitiços (ex: lançar dois feitiços ao mesmo tempo)." },
    { name: "Ranger", pt: "Patrulheiro", desc: "Um guerreiro que usa proezas marciais e magia natural para combater ameaças nos limites da civilização.", gameplay: "Excelente com arcos e rastreamento. Pode ter um companheiro animal." },
    { name: "Bard", pt: "Bardo", desc: "Um mago inspirador cujas performances ecoam a música da criação.", gameplay: "Classe 'faz-tudo'. Suporte fantástico com 'Inspiração de Bardo'." }
];

const alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];

// --- ESTADO DO PERSONAGEM --- //
let character = {
    name: "", gender: "", avatar: "", race: "", class: "", alignment: "", origin: "", story: "",
    stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    hp: 10, ac: 10
};

// --- INICIALIZAÇÃO --- //
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    renderGrid("race-grid", races, "race");
    renderGrid("class-grid", classes, "class");
    renderAlignment();

    // Upload de Avatar
    const avatarInput = document.getElementById("avatar-upload");
    const avatarPreview = document.getElementById("avatar-preview");
    
    avatarPreview.addEventListener("click", () => avatarInput.click());
    
    avatarInput.addEventListener("change", function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                avatarPreview.style.backgroundImage = `url(${e.target.result})`;
                avatarPreview.innerHTML = "";
                character.avatar = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
});

// --- SISTEMA DE NAVEGAÇÃO --- //
function nextPage(pageNum) {
    // Salvar dados do formulário atual, se aplicável
    if(pageNum === 2) {
        character.name = document.getElementById("char-name").value || "Unknown Hero";
        character.gender = document.getElementById("char-gender").value || "Unknown";
    }
    if(pageNum === 5) {
        character.origin = document.getElementById("char-origin").value || "Unknown Origin";
    }
    if(pageNum === 6) {
        character.story = document.getElementById("char-story").value;
    }

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(`page-${pageNum}`).classList.add("active");
}

function prevPage(pageNum) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(`page-${pageNum}`).classList.add("active");
}

// --- RENDERIZAÇÃO DE GRIDS --- //
function renderGrid(containerId, dataArray, type) {
    const container = document.getElementById(containerId);
    dataArray.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <button class="info-btn" onclick="openModal('${item.name} (${item.pt})', '<span class=\\'pt-translation\\'>${item.desc}</span><br><b>Stats/Vantagens:</b> ${item.stats || ''}<br><br><b>Gameplay:</b> ${item.gameplay}'); event.stopPropagation();">?</button>
            <div class="card-title">${item.name}</div>
        `;
        div.onclick = () => {
            Array.from(container.children).forEach(c => c.classList.remove("selected"));
            div.classList.add("selected");
            character[type] = item.name;
        };
        container.appendChild(div);
    });
}

function renderAlignment() {
    const container = document.getElementById("alignment-grid");
    alignments.forEach(al => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<div class="card-title" style="font-size:0.9rem; margin:0;">${al}</div>`;
        div.onclick = () => {
            Array.from(container.children).forEach(c => c.classList.remove("selected"));
            div.classList.add("selected");
            character.alignment = al;
        };
        container.appendChild(div);
    });
}

// --- MODAIS / POPUPS --- //
function openModal(title, content) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-body").innerHTML = content;
    document.getElementById("modal-overlay").classList.remove("hidden");
    // setTimeout para permitir transição CSS
    setTimeout(() => {
        document.getElementById("modal-overlay").classList.add("active");
    }, 10);
}
function closeModal() {
    document.getElementById("modal-overlay").classList.remove("active");
    setTimeout(() => {
        document.getElementById("modal-overlay").classList.add("hidden");
    }, 300);
}

// --- AI STORY GENERATOR (SIMULATED) --- //
function generateAIStory() {
    const btn = document.querySelector(".btn-ai");
    btn.innerHTML = "✨ Conjuring...";
    btn.disabled = true;

    const textarea = document.getElementById("char-story");
    textarea.value = "";
    
    // Gerando lore baseada nas escolhas
    const race = character.race || "traveler";
    const cls = character.class || "warrior";
    const align = character.alignment || "neutral";
    const orig = character.origin || "unknown lands";

    const epicStory = `Born under a blood-red moon in the ${orig}, ${character.name} the ${race} always knew their destiny was bound to greatness. Guided by a ${align} moral compass, they took up the mantle of a ${cls}. The world is dark and full of terrors, but the magic in their veins and the steel in their hand will carve a new path through the forgotten realms.`;

    let i = 0;
    function typeWriter() {
        if (i < epicStory.length) {
            textarea.value += epicStory.charAt(i);
            i++;
            setTimeout(typeWriter, 30); // Velocidade da digitação
        } else {
            btn.innerHTML = "✨ Generate AI Story";
            btn.disabled = false;
        }
    }
    typeWriter();
}

// --- ROLAGEM DE DADOS --- //
function rollDie(element, sides) {
    element.classList.add("rolling");
    const resultDisplay = document.getElementById("dice-result");
    resultDisplay.innerText = "Rolling...";
    
    setTimeout(() => {
        element.classList.remove("rolling");
        const roll = Math.floor(Math.random() * sides) + 1;
        resultDisplay.innerText = `You rolled a ${roll} on a d${sides}!`;
    }, 500);
}

function autoRollStats() {
    const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    stats.forEach(stat => {
        // Rolagem 3d6 padrão simulada (min 3, max 18)
        const roll = Math.floor(Math.random() * 16) + 3;
        character.stats[stat] = roll;
        document.getElementById(`stat-${stat}`).innerText = roll;
    });
    document.getElementById("dice-result").innerText = "The Fates have decided your stats!";
}

// --- CÁLCULO DE VITAIS --- //
function calculateVitals() {
    // Cálculo Básico Simplificado
    const conMod = Math.floor((character.stats.con - 10) / 2);
    const dexMod = Math.floor((character.stats.dex - 10) / 2);
    
    // Base HP por classe (Simplificado)
    let baseHp = 8;
    if(character.class === "Barbarian") baseHp = 12;
    if(character.class === "Fighter" || character.class === "Paladin" || character.class === "Ranger") baseHp = 10;
    if(character.class === "Wizard" || character.class === "Sorcerer") baseHp = 6;

    character.hp = baseHp + conMod;
    character.ac = 10 + dexMod;

    // Garantir mínimo de 1 HP
    if(character.hp < 1) character.hp = 1;

    document.getElementById("calc-hp").innerText = character.hp;
    document.getElementById("calc-ac").innerText = character.ac;
}

// --- FINAL COMPILATION --- //
function generateFinal() {
    nextPage(8);
    const summary = document.getElementById("final-summary");
    
    summary.innerHTML = `
        <div style="text-align:center; margin-bottom: 20px;">
            ${character.avatar ? `<img src="${character.avatar}" style="width:100px; height:100px; border-radius:50%; border:2px solid #d4af37; box-shadow: 0 0 15px rgba(212, 175, 55, 0.6);">` : ''}
            <h2 style="color:#d4af37; font-family: 'Cinzel', serif; margin-top:10px;">${character.name}</h2>
        </div>
        <div class="summary-item"><span class="summary-label">Race:</span> ${character.race}</div>
        <div class="summary-item"><span class="summary-label">Class:</span> ${character.class}</div>
        <div class="summary-item"><span class="summary-label">Gender:</span> ${character.gender}</div>
        <div class="summary-item"><span class="summary-label">Alignment:</span> ${character.alignment}</div>
        <div class="summary-item"><span class="summary-label">Origin:</span> ${character.origin}</div>
        <div class="summary-item"><span class="summary-label">Vitals:</span> HP ${character.hp} | AC ${character.ac}</div>
        <div class="summary-item"><span class="summary-label">Stats:</span> STR ${character.stats.str} | DEX ${character.stats.dex} | CON ${character.stats.con} | INT ${character.stats.int} | WIS ${character.stats.wis} | CHA ${character.stats.cha}</div>
        <div class="summary-item"><span class="summary-label">Tale:</span> <br> <span style="font-size:1rem; color:#ccc;">${character.story || "A mystery yet to be written."}</span></div>
    `;
}

// --- FORGE CHARACTER SHEET (PDF PRINT) --- //
function forgePDF() {
    /* 
       NOTA TÉCNICA: Sem o uso de frameworks (como pdf-lib ou jsPDF), o Javascript puro rodando no lado do cliente 
       NÃO PODE editar arquivos .pdf brutos do sistema operacional do usuário por razões estritas de segurança do navegador.
       
       A solução AAA oficial para aplicações Web Vanilla é usar a interface de Impressão do navegador formatada com CSS.
       O usuário clica no botão, a tela muda para um layout branco oficial (configurado no @media print no CSS),
       e a janela de impressão se abre, permitindo "Salvar como PDF".
    */
    alert("Iniciando encantamento de forja! Selecione 'Salvar como PDF' na janela que se abrirá.");
    window.print();
}

// --- EFEITOS VISUAIS: PARTÍCULAS --- //
function initParticles() {
    const container = document.getElementById("particle-container");
    setInterval(() => {
        const particle = document.createElement("div");
        particle.className = "particle";
        // Posição horizontal aleatória
        particle.style.left = Math.random() * 100 + "vw";
        // Duração da animação aleatória entre 3s e 6s
        particle.style.animationDuration = (Math.random() * 3 + 3) + "s";
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        
        container.appendChild(particle);
        
        // Remove a partícula do DOM após a animação
        setTimeout(() => {
            particle.remove();
        }, 6000);
    }, 200); // Cria uma partícula a cada 200ms
}