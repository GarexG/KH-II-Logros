const fs = require("fs");
const path = require("path");
const https = require("https");

const achievements = require("./assets/achievements/achievement-images.json");

const outputDir = path.join(
    __dirname,
    "assets",
    "achievements"
);

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(achievement) {

    return new Promise((resolve, reject) => {

        const extension =
            path.extname(new URL(achievement.img).pathname) || ".jpg";

        const filePath = path.join(
            outputDir,
            achievement.id + extension
        );

        const file = fs.createWriteStream(filePath);

        https.get(achievement.img, response => {

            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(filePath, () => {});

                reject(
                    new Error(
                        `${achievement.name}: HTTP ${response.statusCode}`
                    )
                );

                return;
            }

            response.pipe(file);

            file.on("finish", () => {
                file.close();

                console.log(
                    `✓ ${achievement.name} -> ${achievement.id}${extension}`
                );

                resolve();
            });

        }).on("error", error => {

            file.close();
            fs.unlink(filePath, () => {});

            reject(error);
        });
    });
}

async function downloadAll() {

    console.log(
        `Descargando ${achievements.length} imágenes...\n`
    );

    for (const achievement of achievements) {

        try {
            await downloadImage(achievement);
        } catch (error) {
            console.error(
                `✗ Error con ${achievement.name}:`,
                error.message
            );
        }
    }

    console.log("\n✓ Proceso terminado.");
}

downloadAll();