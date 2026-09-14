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
    description: "Completa todas las entradas de personajes del Diario de Pepito.",
    category: "Jiminy's Journal",
    subtasks: [
        "Historia principal completada",
        {
            name: "Absent Silhouettes",
            subtasks: [
                "Vexen - Agrabah",
                "Lexaeus - Twilight Town",
                "Zexion - Olympus Coliseum",
                "Marluxia - Beast's Castle",
                "Larxene - Port Royal"
            ]
        },
        "To Rule Them All - 13 Data Battles",
        "Lingering Will - Disney Castle"
    ]
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
    category: "Jiminy's Journal",
    subtasks: [
        "Twilight Town",
        "Hollow Bastion",
        "The Land of Dragons",
        "Beast's Castle",
        "Olympus Coliseum",
        "Disney Castle",
        "Timeless River",
        "Port Royal",
        "Agrabah",
        "Halloween Town",
        "Pride Lands",
        "Space Paranoids",
        "The World That Never Was"
    ]
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
    description: "Completa todas las misiones del Diario de Pepito.",
    category: "Jiminy's Journal",
    subtasks: [
        {
            name: "Twilight Town",
            subtasks: [
                "Mail Delivery - Completar en 14 segundos o menos",
                "Cargo Climb - Completar en 15 segundos o menos",
                "Grandstander - Conseguir 100 puntos o más",
                "Poster Duty - Completar en 30 segundos o menos",
                "Bumble-Buster - Completar en 10 segundos o menos",
                "Junk Sweep - Completar usando 6 golpes o menos"
            ]
        },
        {
            name: "Olympus Coliseum",
            subtasks: [
                "Phil's Training - Maniac: conseguir 1,000 puntos o más",
                "Pain and Panic Cup - Conseguir 2,000 puntos o más",
                "Cerberus Cup - Conseguir 1,000 puntos o más",
                "Titan Cup - Conseguir 5,000 puntos o más",
                "Goddess of Fate Cup - Conseguir 3,000 puntos o más",
                "Pain and Panic Paradox Cup - Conseguir 2,500 puntos o más",
                "Cerberus Paradox Cup - Conseguir 1,300 puntos o más",
                "Titan Paradox Cup - Conseguir 10,000 puntos o más",
                "Hades Paradox Cup - Conseguir 15,000 puntos o más"
            ]
        },
        {
            name: "Agrabah",
            subtasks: [
                "Magic Carpet - Conseguir 65 puntos o más"
            ]
        },
        {
            name: "100 Acre Wood",
            subtasks: [
                "A Blustery Rescue - Conseguir 18,000 puntos o más",
                "Hunny Slider - Conseguir 8,000 puntos o más",
                "Balloon Bounce - Conseguir 2,000 puntos o más",
                "The Expotition - Completar en 90 segundos o menos",
                "The Hunny Pot - Conseguir 8,000 puntos o más"
            ]
        },
        {
            name: "Atlantica",
            subtasks: [
                "Completar todas las canciones"
            ]
        }
    ]
},
    {
    id: "minigame-maniac",
    name: "Minigame Maniac",
    description: "Completa todas las entradas de minijuegos del Diario de Pepito.",
    category: "Jiminy's Journal",
    subtasks: [
        {
            name: "Twilight Town",
            subtasks: [
                "Mail Delivery",
                "Cargo Climb",
                "Grandstander",
                "Poster Duty",
                "Bumble-Buster",
                "Junk Sweep"
            ]
        },
        {
            name: "Olympus Coliseum",
            subtasks: [
                "Phil's Training",
                "Pain and Panic Cup",
                "Cerberus Cup",
                "Titan Cup",
                "Goddess of Fate Cup",
                "Pain and Panic Paradox Cup",
                "Cerberus Paradox Cup",
                "Titan Paradox Cup",
                "Hades Paradox Cup"
            ]
        },
        {
            name: "Agrabah",
            subtasks: [
                "Magic Carpet"
            ]
        },
        {
            name: "100 Acre Wood",
            subtasks: [
                "A Blustery Rescue",
                "Hunny Slider",
                "Balloon Bounce",
                "The Expotition",
                "The Hunny Pot"
            ]
        },
        {
            name: "Atlantica",
            subtasks: [
                "Ursula's Revenge",
                "A New Day is Dawning"
            ]
        }
    ]
},
    {
    id: "limit-master",
    name: "Limit Master",
    description: "Completa todas las entradas de Limits.",
    category: "Jiminy's Journal",
    subtasks: [
        "Donald - Fantasia",
        "Donald - Flare Force",
        "Goofy - Twister Fusion",
        "Goofy - Teamwork",
        "Beast - Howling Moon",
        "Auron - Overdrive",
        "Mulan - Dragonblaze",
        "Aladdin - Trick Fantasy",
        "Jack Skellington - Applause, Applause",
        "Jack Sparrow - Treasure Isle",
        "Simba - King's Pride",
        "Tron - Complete Complement",
        "Riku - Eternal Session",
        "Sora - Trinity Limit"
    ]
},
    {
    id: "craftsman",
    name: "Craftsman",
    description: "Completa todas las notas de síntesis.",
    category: "Jiminy's Journal",
    subtasks: [
        "Moogle Level 9 - Primo Moogle",
        "Tipos de materiales obtenidos - 60/60",
        "Collection Lists completadas - 54/54",
        "Recetas sintetizadas - 59/59"
    ]
},
    {
    id: "seeker",
    name: "Seeker",
    description: "Completa todas las Character Links del Diario de Pepito.",
    category: "Jiminy's Journal",
    subtasks: [
        {
            name: "Twilight Town",
            subtasks: [
                "Setzer - Derrotarlo en Struggle",
                "Lexaeus - Absent Silhouette"
            ]
        },
        {
            name: "Agrabah",
            subtasks: [
                "Vexen - Absent Silhouette"
            ]
        },
        {
            name: "Olympus Coliseum",
            subtasks: [
                "Zexion - Absent Silhouette"
            ]
        },
        {
            name: "Beast's Castle",
            subtasks: [
                "Marluxia - Absent Silhouette"
            ]
        },
        {
            name: "Port Royal",
            subtasks: [
                "Larxene - Absent Silhouette"
            ]
        },
        {
            name: "Disney Castle",
            subtasks: [
                "Lingering Will"
            ]
        },
        {
            name: "Radiant Garden",
            subtasks: [
                "Completar Mushroom XIII"
            ]
        }
    ]
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
    id: "gummi-ship-collector",
    name: "Gummi Ship Collector",
    description: "Consigue todos los planos de naves Gumi.",
    category: "Gummi",
    subtasks: [
        {
            name: "Highwind",
            subtasks: [
                "Highwind",
                "Highwind Lv. 1",
                "Highwind Lv. 2",
                "Highwind Lv. 3",
                "Highwind Lv. 4",
                "Highwind Lv. 5",
                "Highwind Lv. 6",
                "Highwind Lv. 7",
                "Highwind Lv. 8",
                "Highwind Peak",
                "Highwind α"
            ]
        },
        {
            name: "Falcon",
            subtasks: [
                "Falcon Lv. 1",
                "Falcon Lv. 2",
                "Falcon Lv. 3",
                "Falcon Lv. 4",
                "Falcon Lv. 5",
                "Falcon Lv. 6",
                "Falcon Lv. 7",
                "Falcon Lv. 8",
                "Falcon Peak"
            ]
        },
        {
            name: "Invincible",
            subtasks: [
                "Invincible Lv. 1",
                "Invincible Lv. 2",
                "Invincible Lv. 3",
                "Invincible Lv. 4",
                "Invincible Lv. 5",
                "Invincible Lv. 6",
                "Invincible Lv. 7",
                "Invincible Lv. 8",
                "Invincible Peak"
            ]
        },
        {
            name: "Special Models",
            subtasks: [
                "PuPu",
                "Tonberry",
                "Moogle",
                "Mandragora",
                "Chocobo",
                "Cactuar",
                "Cait Sith",
                "Mushroom",
                "Fenrir",
                "Kingdom Model",
                "Secret Model"
            ]
        }
    ]
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
    
let openNestedSubtasks =
    JSON.parse(localStorage.getItem("kh2OpenNestedSubtasks")) || {};    

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

    syncRelatedAchievements();

    localStorage.setItem(
        "kh2Progress",
        JSON.stringify(progress)
    );

    localStorage.setItem(
        "kh2SubtaskProgress",
        JSON.stringify(subtaskProgress)
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

function saveOpenNestedSubtasks() {
    localStorage.setItem(
        "kh2OpenNestedSubtasks",
        JSON.stringify(openNestedSubtasks)
    );
}

function syncRelatedAchievements() {

    // To Rule Them All -> Professor
    if (!subtaskProgress["professor"]) {
        subtaskProgress["professor"] = {};
    }

    subtaskProgress["professor"]["To Rule Them All - 13 Data Battles"] =
        progress["rule-them-all"] === true;


    // Lingering Will -> Professor
    subtaskProgress["professor"]["Lingering Will - Disney Castle"] =
        progress["lingering-will"] === true;


    // Lingering Will -> Seeker
    if (!subtaskProgress["seeker"]) {
        subtaskProgress["seeker"] = {};
    }

    if (
        !subtaskProgress["seeker"]["Disney Castle"] ||
        typeof subtaskProgress["seeker"]["Disney Castle"] !== "object"
    ) {
        subtaskProgress["seeker"]["Disney Castle"] = {};
    }

    subtaskProgress["seeker"]["Disney Castle"]["Lingering Will"] =
        progress["lingering-will"] === true;

        // Mushroom Master -> Seeker
    if (
        !subtaskProgress["seeker"]["Radiant Garden"] ||
        typeof subtaskProgress["seeker"]["Radiant Garden"] !== "object"
        ) {
        subtaskProgress["seeker"]["Radiant Garden"] = {};
        }

        subtaskProgress["seeker"]["Radiant Garden"]["Completar Mushroom XIII"] =
        progress["mushroom-master"] === true;

        
}

function getSubtaskName(subtask) {

    if (typeof subtask === "string") {
        return subtask;
    }

    return subtask.name;
}

function isSubtaskComplete(achievement, subtask) {

    const name = getSubtaskName(subtask);

    // Subtarea normal
    if (typeof subtask === "string") {
        return subtaskProgress[achievement.id]?.[name] === true;
    }

    // Subtarea que contiene hijos
    if (subtask.subtasks) {
    return subtaskProgress[achievement.id]?.[`${name}-completed`] === true;
}

    return false;
}


function setSubtaskComplete(achievement, subtask, checked) {

    const name = getSubtaskName(subtask);

    if (!subtaskProgress[achievement.id]) {
        subtaskProgress[achievement.id] = {};
    }

    // Subtarea normal
    if (typeof subtask === "string") {

        subtaskProgress[achievement.id][name] =
            checked;

        return;
    }

    // Subtarea con hijos
    if (subtask.subtasks) {

        if (
            !subtaskProgress[achievement.id][name] ||
            typeof subtaskProgress[achievement.id][name] !== "object"
        ) {
            subtaskProgress[achievement.id][name] = {};
        }

        subtask.subtasks.forEach(child => {
            subtaskProgress[achievement.id][name][child] =
                checked;
              
        });

        subtaskProgress[achievement.id][`${name}-completed`] =
                checked;  
    }
}

function syncLinkedSubtaskChange(
    achievementId,
    parentName,
    childName,
    checked
) {

    const links = [
        {
            fromAchievement: "professor",
            fromParent: "Absent Silhouettes",
            fromChild: "Vexen - Agrabah",
            toAchievement: "seeker",
            toParent: "Agrabah",
            toChild: "Vexen - Absent Silhouette"
        },
        {
            fromAchievement: "professor",
            fromParent: "Absent Silhouettes",
            fromChild: "Lexaeus - Twilight Town",
            toAchievement: "seeker",
            toParent: "Twilight Town",
            toChild: "Lexaeus - Absent Silhouette"
        },
        {
            fromAchievement: "professor",
            fromParent: "Absent Silhouettes",
            fromChild: "Zexion - Olympus Coliseum",
            toAchievement: "seeker",
            toParent: "Olympus Coliseum",
            toChild: "Zexion - Absent Silhouette"
        },
        {
            fromAchievement: "professor",
            fromParent: "Absent Silhouettes",
            fromChild: "Marluxia - Beast's Castle",
            toAchievement: "seeker",
            toParent: "Beast's Castle",
            toChild: "Marluxia - Absent Silhouette"
        },
        {
            fromAchievement: "professor",
            fromParent: "Absent Silhouettes",
            fromChild: "Larxene - Port Royal",
            toAchievement: "seeker",
            toParent: "Port Royal",
            toChild: "Larxene - Absent Silhouette"
        }
    ];

    links.forEach(link => {

        const directMatch =
            achievementId === link.fromAchievement &&
            parentName === link.fromParent &&
            childName === link.fromChild;

        const reverseMatch =
            achievementId === link.toAchievement &&
            parentName === link.toParent &&
            childName === link.toChild;

        if (!directMatch && !reverseMatch) {
            return;
        }

        const targetAchievement =
            directMatch
                ? link.toAchievement
                : link.fromAchievement;

        const targetParent =
            directMatch
                ? link.toParent
                : link.fromParent;

        const targetChild =
            directMatch
                ? link.toChild
                : link.fromChild;

        if (!subtaskProgress[targetAchievement]) {
            subtaskProgress[targetAchievement] = {};
        }

        if (
            !subtaskProgress[targetAchievement][targetParent] ||
            typeof subtaskProgress[targetAchievement][targetParent] !== "object"
        ) {
            subtaskProgress[targetAchievement][targetParent] = {};
        }

        subtaskProgress[targetAchievement][targetParent][targetChild] =
            checked;

        const targetAchievementData =
            achievements.find(
                achievement =>
                    achievement.id === targetAchievement
            );

        const targetParentData =
            targetAchievementData?.subtasks?.find(
                subtask =>
                    typeof subtask === "object" &&
                    subtask.name === targetParent
            );

        if (targetParentData?.subtasks) {

            const allChildrenCompleted =
                targetParentData.subtasks.every(
                    child =>
                        subtaskProgress[targetAchievement]?.[targetParent]?.[child] === true
                );

            subtaskProgress[targetAchievement][`${targetParent}-completed`] =
                allChildrenCompleted;
        }
    });
}

function createNestedSubtasks(achievement, subtask) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "nested-wrapper";

    if (!subtask.subtasks) {
        return wrapper;
    }

    const parentName =
        getSubtaskName(subtask);

    const menuId =
        `${achievement.id}-${parentName}`;

    const isOpen =
        openNestedSubtasks[menuId] === true;

    // Botón para abrir/cerrar
    const toggle =
        document.createElement("button");

    toggle.className =
        "nested-toggle";

    const completedChildren =
        subtask.subtasks.filter(child =>
            subtaskProgress[achievement.id]?.[parentName]?.[child] === true
        ).length;

    toggle.textContent =
        `${isOpen ? "▲" : "▼"} Detalles (${completedChildren}/${subtask.subtasks.length})`;

    // Contenedor
    const container =
        document.createElement("div");

    container.className =
        isOpen
            ? "nested-subtasks"
            : "nested-subtasks hidden";

    if (!subtaskProgress[achievement.id]) {
        subtaskProgress[achievement.id] = {};
    }

    if (
        !subtaskProgress[achievement.id][parentName] ||
        typeof subtaskProgress[achievement.id][parentName] !== "object"
    ) {
        subtaskProgress[achievement.id][parentName] = {};
    }

    subtask.subtasks.forEach(child => {

        const childItem =
            document.createElement("label");

        childItem.className =
            "nested-subtask-item";

        const checked =
            subtaskProgress[achievement.id][parentName]?.[child] === true;

        childItem.innerHTML = `
            <input
                type="checkbox"
                ${checked ? "checked" : ""}
            >
            <span>${child}</span>
        `;

        const childCheckbox =
            childItem.querySelector("input");

        childCheckbox.addEventListener("change", () => {

            subtaskProgress[achievement.id][parentName][child] =
                childCheckbox.checked;

                syncLinkedSubtaskChange(
                    achievement.id,
                    parentName,
                    child,
                    childCheckbox.checked
                );

                const allChildrenCompleted =
                subtask.subtasks.every(item =>
                   subtaskProgress[achievement.id][parentName]?.[item] === true
                );

            if (allChildrenCompleted) {
                subtaskProgress[achievement.id][`${parentName}-completed`] = true;
            } else {
                subtaskProgress[achievement.id][`${parentName}-completed`] = false;
            }

            const allAchievementSubtasksCompleted =
                achievement.subtasks.every(task =>
                isSubtaskComplete(achievement, task)
                );

            progress[achievement.id] =
                allAchievementSubtasksCompleted;

            saveProgress();

            saveSubtaskProgress();

            renderAchievements();
            updateProgress();
        });

        container.appendChild(childItem);
    });

    toggle.addEventListener("click", () => {

        const newState =
            !openNestedSubtasks[menuId];

        openNestedSubtasks[menuId] =
            newState;

        saveOpenNestedSubtasks();

        container.classList.toggle(
            "hidden",
            !newState
        );

        toggle.textContent =
            `${newState ? "▲" : "▼"} Detalles (${completedChildren}/${subtask.subtasks.length})`;
    });

    wrapper.appendChild(toggle);
    wrapper.appendChild(container);

    return wrapper;
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
    <input type="checkbox" ${completed ? "checked" : ""}>

    <img
        class="achievement-icon"
        src="assets/achievements/${achievement.id}.jpg"
        alt="${achievement.name}"
    >

    <div class="achievement-info">
        <h3>${achievement.name}</h3>
        <p>${achievement.description}</p>
        <span class="category category-${achievement.category
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}">
        ${achievement.category}
        </span>
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

            setSubtaskComplete(
             achievement,
                subtask,
                checkbox.checked
            );

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
    achievement.subtasks.filter(subtask =>
        isSubtaskComplete(achievement, subtask)
    ).length;

    // Primero averiguamos si este menú estaba abierto
    const isOpen =
        openSubtasks[achievement.id] === true;

    // Botón para abrir/cerrar
    const toggleButton =
        document.createElement("button");

    toggleButton.className =
        "subtask-toggle";

    if (isOpen) {
    toggleButton.classList.add("open");
    }    

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

    const subtaskName =
        getSubtaskName(subtask);

    const checked =
        isSubtaskComplete(achievement, subtask);

    const subtaskItem =
        document.createElement("label");

        subtaskItem.className =
            "subtask-item";

        subtaskItem.innerHTML = `
            <input
                type="checkbox"
                ${checked ? "checked" : ""}
            >
            <span>${subtaskName}</span>
        `;

        const subtaskCheckbox =
            subtaskItem.querySelector("input");

        subtaskCheckbox.addEventListener("change", () => {

    setSubtaskComplete(
        achievement,
        subtask,
        subtaskCheckbox.checked
    );

    const allCompleted =
        achievement.subtasks.every(task =>
            isSubtaskComplete(achievement, task)
        );

    progress[achievement.id] =
        allCompleted;

    saveSubtaskProgress();
    saveProgress();

    renderAchievements();
    updateProgress();
});

        subtaskContainer.appendChild(subtaskItem);

            if (
                typeof subtask === "object" &&
                subtask.subtasks
                ) {

                    const nestedContainer =
                    createNestedSubtasks(
                    achievement,
                    subtask
                 );

            subtaskContainer.appendChild(
            nestedContainer
            );
        }
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
        : Math.round((completed / total) * 100);

    const progressFill =
    document.getElementById("progress-fill");

    progressFill.style.width =
    `${percentage}%`;    

    progressText.textContent =
    `${completed} / ${total} completados · ${percentage}%`;

    
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

document
    .querySelectorAll(".filters button")
    .forEach(btn =>
        btn.classList.remove("active")
    );

button.classList.add("active");

renderAchievements();
        });

    });

document
    .querySelectorAll(".category-filters button")
    .forEach(button => {

        button.addEventListener("click", () => {

            currentCategory =
    button.dataset.category;

document
    .querySelectorAll(".category-filters button")
    .forEach(btn =>
        btn.classList.remove("active")
    );

button.classList.add("active");

renderAchievements();
        });

    });

document
    .querySelector('[data-filter="all"]')
    ?.classList.add("active");

document
    .querySelector('[data-category="all"]')
    ?.classList.add("active");    

syncRelatedAchievements();
saveSubtaskProgress();    

renderAchievements();
updateProgress();