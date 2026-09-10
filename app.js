const achievements = [
    {
        id: "treasure-hunter",
        name: "Treasure Hunter",
        description: "Abre todos los cofres del juego."
    },
    {
        id: "navigator",
        name: "Navigator",
        description: "Obtén todos los mapas del juego."
    },
    {
        id: "sephiroth",
        name: "Sephiroth",
        description: "Derrota a Sephiroth."
    },
    {
        id: "lingering-will",
        name: "Lingering Will",
        description: "Derrota a Lingering Will."
    },
    {
        id: "professor",
        name: "Professor",
        description: "Completa todos los registros necesarios."
    }
];

let progress =
    JSON.parse(localStorage.getItem("kh2Progress")) || {};

let currentFilter = "all";

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

            return matchesSearch && matchesFilter;
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
            </div>
        `;

        const checkbox =
            card.querySelector("input");

        checkbox.addEventListener("change", () => {

            progress[achievement.id] =
                checkbox.checked;

            saveProgress();

            renderAchievements();

            updateProgress();
        });

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


renderAchievements();
updateProgress();