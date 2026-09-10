const achievements = [

    // HISTORIA
    {
        id: "summer-end",
        name: "Summer's End",
        description: "Completa el episodio de Roxas.",
        category: "Historia"
    },
    {
        id: "timeless-world",
        name: "A Timeless World",
        description: "Completa el episodio de Timeless River.",
        category: "Historia"
    },
    {
        id: "above-honor",
        name: "Above Honor",
        description: "Completa los episodios de The Land of Dragons.",
        category: "Historia"
    },
    {
        id: "budding-romance",
        name: "A Budding Romance",
        description: "Completa los episodios de Beast's Castle.",
        category: "Historia"
    },
    {
        id: "hail-the-hero",
        name: "Hail the Hero",
        description: "Completa los episodios de Olympus Coliseum.",
        category: "Historia"
    },
    {
        id: "lifting-curse",
        name: "Lifting the Curse",
        description: "Completa los episodios de Port Royal.",
        category: "Historia"
    },
    {
        id: "what-friends-are-for",
        name: "What Friends Are For",
        description: "Completa los episodios de Agrabah.",
        category: "Historia"
    },
    {
        id: "gift-of-love",
        name: "The Gift of Love",
        description: "Completa los episodios de Halloween Town.",
        category: "Historia"
    },
    {
        id: "return-of-king",
        name: "Return of the King",
        description: "Completa los episodios de Pride Lands.",
        category: "Historia"
    },
    {
        id: "electric-spark",
        name: "Electric Spark",
        description: "Completa los episodios de Space Paranoids.",
        category: "Historia"
    },
    {
        id: "always-together",
        name: "Always Together",
        description: "Completa el episodio de 100 Acre Wood.",
        category: "Historia"
    },
    {
        id: "kindred-spirits",
        name: "Kindred Spirits",
        description: "Completa los episodios de Atlantica.",
        category: "Historia"
    },
    {
        id: "taste-of-past",
        name: "A Taste of the Past",
        description: "Completa los episodios de Twilight Town.",
        category: "Historia"
    },

    // COLISEO
    {
        id: "rookie",
        name: "Rookie",
        description: "Gana la Pain and Panic Cup.",
        category: "Coliseo"
    },
    {
        id: "novice-hero",
        name: "Novice Hero",
        description: "Gana la Cerberus Cup.",
        category: "Coliseo"
    },
    {
        id: "artisan-hero",
        name: "Artisan Hero",
        description: "Gana la Titan Cup.",
        category: "Coliseo"
    },
    {
        id: "true-hero",
        name: "True Hero",
        description: "Gana la Goddess of Fate Cup.",
        category: "Coliseo"
    },
    {
        id: "coliseum-competitor",
        name: "Coliseum Competitor",
        description: "Gana la Pain and Panic Paradox Cup.",
        category: "Coliseo"
    },
    {
        id: "coliseum-star",
        name: "Coliseum Star",
        description: "Gana la Cerberus Paradox Cup.",
        category: "Coliseo"
    },
    {
        id: "hero-coliseum",
        name: "Hero of the Coliseum",
        description: "Gana la Titan Paradox Cup.",
        category: "Coliseo"
    },
    {
        id: "coliseum-champion",
        name: "Coliseum Champion",
        description: "Gana la Hades Paradox Cup.",
        category: "Coliseo"
    },

    // DIARIO DE PEPITO
    {
        id: "searcher",
        name: "Searcher",
        description: "Consigue todos los Ansem Reports del diario.",
        category: "Jiminy's Journal"
    },
    {
        id: "professor",
        name: "Professor",
        description: "Completa todas las entradas de personajes del diario.",
        category: "Jiminy's Journal"
    },
    {
        id: "heartless-highbrow",
        name: "Heartless Highbrow",
        description: "Completa todas las entradas de Heartless.",
        category: "Jiminy's Journal"
    },
    {
        id: "nobody-know-it-all",
        name: "Nobody Know-It-All",
        description: "Completa todas las entradas de Nobodies.",
        category: "Jiminy's Journal"
    },
    {
        id: "treasure-hunter",
        name: "Treasure Hunter",
        description: "Completa todas las entradas de tesoros.",
        category: "Jiminy's Journal"
    },
    {
        id: "puzzler",
        name: "Puzzler",
        description: "Completa todos los puzzles.",
        category: "Jiminy's Journal"
    },
    {
        id: "navigator",
        name: "Navigator",
        description: "Consigue todos los mapas.",
        category: "Jiminy's Journal"
    },
    {
        id: "conqueror",
        name: "Conqueror",
        description: "Completa todas las entradas de misiones.",
        category: "Jiminy's Journal"
    },
    {
        id: "minigame-maniac",
        name: "Minigame Maniac",
        description: "Completa todas las entradas de minijuegos.",
        category: "Jiminy's Journal"
    },
    {
        id: "limit-master",
        name: "Limit Master",
        description: "Completa todas las entradas de Limits.",
        category: "Jiminy's Journal"
    },
    {
        id: "craftsman",
        name: "Craftsman",
        description: "Completa todas las notas de síntesis.",
        category: "Jiminy's Journal"
    },
    {
        id: "seeker",
        name: "Seeker",
        description: "Completa todas las Character Links.",
        category: "Jiminy's Journal"
    },

    // NAVE GUMI
    {
        id: "veteran-pilot",
        name: "Veteran Pilot",
        description: "Obtén rango S en una misión de nave Gumi.",
        category: "Gummi"
    },
    {
        id: "ace-pilot",
        name: "Ace Pilot",
        description: "Obtén rango S en una misión de todas las rutas.",
        category: "Gummi"
    },
    {
        id: "top-gun",
        name: "Top Gun",
        description: "Obtén rango S en una misión EX de todas las rutas.",
        category: "Gummi"
    },
    {
        id: "gummi-collector",
        name: "Gummi Ship Collector",
        description: "Consigue todos los planos de naves Gumi.",
        category: "Gummi"
    },

    // MINIJUEGOS
    {
    id: "mushroom-master",
    name: "Mushroom Master",
    description: "Satisface a todos los miembros de Mushroom XIII.",
    category: "Minijuegos",
    subtasks: [
        "Mushroom I",
        "Mushroom II",
        "Mushroom III",
        "Mushroom IV",
        "Mushroom V",
        "Mushroom VI",
        "Mushroom VII",
        "Mushroom VIII",
        "Mushroom IX",
        "Mushroom X",
        "Mushroom XI",
        "Mushroom XII",
        "Mushroom XIII"
    ]
    },
    {
        id: "pro-skater",
        name: "Pro Skater",
        description: "Consigue 5,000 puntos haciendo trucos con el skateboard.",
        category: "Minijuegos"
    },
    {
        id: "struggle-champion",
        name: "Struggle Champion",
        description: "Gana obteniendo todos los orbes del oponente.",
        category: "Minijuegos"
    },

    // OTROS
    {
        id: "reunion",
        name: "Reunion",
        description: "Reúnete con Riku y Kairi.",
        category: "Otros"
    },
    {
        id: "level-master",
        name: "Level Master",
        description: "Lleva a Sora al nivel 99.",
        category: "Otros"
    },
    {
        id: "my-hero",
        name: "My Hero",
        description: "Sé rescatado por el Rey Mickey.",
        category: "Otros"
    },
    {
        id: "lingering-will",
        name: "Lingering Will",
        description: "Derrota a Lingering Will.",
        category: "Jefes"
    },
    {
        id: "one-winged-angel",
        name: "One-Winged Angel",
        description: "Derrota a Sephiroth.",
        category: "Jefes"
    },
    {
    id: "rule-them-all",
    name: "To Rule Them All",
    description: "Derrota todas las réplicas Data de Organization XIII.",
    category: "Jefes",
    subtasks: [
        "Xemnas",
        "Xigbar",
        "Xaldin",
        "Vexen",
        "Lexaeus",
        "Zexion",
        "Saïx",
        "Axel",
        "Demyx",
        "Luxord",
        "Marluxia",
        "Larxene",
        "Roxas"
    ]
    },
    {
        id: "corroded-darkness",
        name: "Corroded by Darkness",
        description: "Activa Antiform 13 veces.",
        category: "Otros"
    },

    // FINALIZAR JUEGO
    {
        id: "ambitious-adventurer",
        name: "Ambitious Adventurer",
        description: "Completa el juego y mira la secuencia final.",
        category: "Finalización"
    },
    {
        id: "proud-player",
        name: "Proud Player",
        description: "Completa el juego en Proud Mode o superior.",
        category: "Finalización"
    },
    {
        id: "critical-competitor",
        name: "Critical Competitor",
        description: "Completa el juego en Critical Mode.",
        category: "Finalización"
    }
];

let progress =
    JSON.parse(localStorage.getItem("kh2Progress")) || {};
    
let subtaskProgress =
    JSON.parse(localStorage.getItem("kh2SubtaskProgress")) || {};    

let openSubtasks =
    JSON.parse(localStorage.getItem("kh2OpenSubtasks")) || {};    

let currentFilter = "all";
let currentCategory = "all";

const achievementList =
    document.getElementById("achievement-list");

const progressFill =
    document.getElementById("progress-fill");

const progressText =
    document.getElementById("progress-text");

const searchInput =
    document.getElementById("search");


function saveProgress() {
    localStorage.setItem(
        "kh2Progress",
        JSON.stringify(progress)
    );
}

function saveSubtaskProgress() {
    localStorage.setItem(
        "kh2SubtaskProgress",
        JSON.stringify(subtaskProgress)
    );
}

function saveOpenSubtasks() {
    localStorage.setItem(
        "kh2OpenSubtasks",
        JSON.stringify(openSubtasks)
    );
}


function renderAchievements() {

    achievementList.innerHTML = "";

    const searchText =
        searchInput.value.toLowerCase();

    const filteredAchievements =
        achievements.filter(achievement => {

            const completed =
                progress[achievement.id] === true;

            const matchesSearch =
                achievement.name
                    .toLowerCase()
                    .includes(searchText);

            const matchesFilter =
                currentFilter === "all" ||
                (currentFilter === "completed" && completed) ||
                (currentFilter === "pending" && !completed);

            const matchesCategory =
                currentCategory === "all" ||
                achievement.category === currentCategory;

            return matchesSearch && matchesFilter && matchesCategory;
        });


    filteredAchievements.forEach(achievement => {

    const completed =
        progress[achievement.id] === true;

    const card =
        document.createElement("div");

    card.className =
        completed
            ? "achievement completed"
            : "achievement";

    card.innerHTML = `
        <input
            type="checkbox"
            ${completed ? "checked" : ""}
        >

        <div>
            <h3>${achievement.name}</h3>
            <p>${achievement.description}</p>
            <span class="category">${achievement.category}</span>
        </div>
    `;

    const checkbox =
        card.querySelector("input");

    checkbox.addEventListener("change", () => {

        progress[achievement.id] =
            checkbox.checked;

        if (achievement.subtasks) {

            if (!subtaskProgress[achievement.id]) {
                subtaskProgress[achievement.id] = {};
            }

            achievement.subtasks.forEach(subtask => {
                subtaskProgress[achievement.id][subtask] =
                    checkbox.checked;
            });

            saveSubtaskProgress();
        }

        saveProgress();

        renderAchievements();
        updateProgress();
    });

    // AQUÍ VAN LAS SUBTAREAS
    if (achievement.subtasks) {

    const completedSubtasks =
        achievement.subtasks.filter(task =>
            subtaskProgress[achievement.id]?.[task] === true
        ).length;

    // Primero averiguamos si este menú estaba abierto
    const isOpen =
        openSubtasks[achievement.id] === true;

    // Botón para abrir/cerrar
    const toggleButton =
        document.createElement("button");

    toggleButton.className =
        "subtask-toggle";

    toggleButton.textContent =
        `${isOpen ? "▲" : "▼"} Ver progreso (${completedSubtasks}/${achievement.subtasks.length})`;

    // Contenedor de subtareas
    const subtaskContainer =
        document.createElement("div");

    subtaskContainer.className =
        isOpen
            ? "subtask-container"
            : "subtask-container hidden";

    achievement.subtasks.forEach(subtask => {

        const checked =
            subtaskProgress[achievement.id]?.[subtask] === true;

        const subtaskItem =
            document.createElement("label");

        subtaskItem.className =
            "subtask-item";

        subtaskItem.innerHTML = `
            <input
                type="checkbox"
                ${checked ? "checked" : ""}
            >
            <span>${subtask}</span>
        `;

        const subtaskCheckbox =
            subtaskItem.querySelector("input");

        subtaskCheckbox.addEventListener("change", () => {

            if (!subtaskProgress[achievement.id]) {
                subtaskProgress[achievement.id] = {};
            }

            subtaskProgress[achievement.id][subtask] =
                subtaskCheckbox.checked;

            const allCompleted =
                achievement.subtasks.every(task =>
                    subtaskProgress[achievement.id]?.[task] === true
                );

            progress[achievement.id] =
                allCompleted;

            saveSubtaskProgress();
            saveProgress();

            renderAchievements();
            
            updateProgress();
        });

        subtaskContainer.appendChild(subtaskItem);
    });

    // Abrir/cerrar submenu
    toggleButton.addEventListener("click", () => {

        const newState =
            !openSubtasks[achievement.id];

        openSubtasks[achievement.id] =
            newState;

        saveOpenSubtasks();

        subtaskContainer.classList.toggle(
            "hidden",
            !newState
        );

        toggleButton.textContent =
            `${newState ? "▲" : "▼"} Ver progreso (${completedSubtasks}/${achievement.subtasks.length})`;
    });

    card.appendChild(toggleButton);
    card.appendChild(subtaskContainer);
}

    achievementList.appendChild(card);
});
}


function updateProgress() {

    const total =
        achievements.length;

    const completed =
        achievements.filter(
            achievement =>
                progress[achievement.id]
        ).length;

    const percentage =
        total === 0
            ? 0
            : (completed / total) * 100;

    progressFill.style.width =
        percentage + "%";

    progressText.textContent =
        `${completed} / ${total} completados`;
}


searchInput.addEventListener(
    "input",
    renderAchievements
);


document
    .querySelectorAll(".filters button")
    .forEach(button => {

        button.addEventListener("click", () => {

            currentFilter =
                button.dataset.filter;

            renderAchievements();
        });

    });

document
    .querySelectorAll(".category-filters button")
    .forEach(button => {

        button.addEventListener("click", () => {

            currentCategory =
                button.dataset.category;

            renderAchievements();
        });

    });


renderAchievements();
updateProgress();