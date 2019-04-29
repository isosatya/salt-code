const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(story) {
    rl.question(chalk.bgGreen(story.q), answer => {
        if (story.answers[answer]) {
            if (typeof story.answers[answer] == "object") {
                ask(story.answers[answer]);
            } else {
                console.log(chalk.bgMagenta(story.answers[answer]));
                rl.close();
            }
        } else {
            console.log(chalk.red("Not a valid answer! Try again =):"));
            ask(story);
        }
    });
}

var story = {
    q: "Are you a vegan? --> (yes/no)  ",
    answers: {
        yes: {
            q:
                "Do you do it for health or the environment? --> (health/environment)  ",
            answers: {
                health: {
                    q:
                        "Did you know humans are omnivores by nature and not herbivores? --> (yes/no)  ",
                    answers: {
                        yes: "Then try to put it into pratice ;-)",
                        no: "You should do a research on that!"
                    }
                },
                environment: {
                    q:
                        "Did you know current current use of soil for agriculture is extinguishing our nature? --> (yes/no)  ",
                    answers: {
                        yes:
                            "Then think twice what real sustainability would means :)",
                        no: "Well it´s time to start getting informed!"
                    }
                }
            }
        },
        no: "Good for you! Don´t forget to eath your vegetables though!"
    }
};

ask(story);
