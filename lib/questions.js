const chalk = require("chalk");
const open = require("open");

module.exports = [
    {
        type: "list",
        name: "action",
        message: "Want to reach out?",
        choices: [
            {
                name: `Send me an ${chalk.hex("#FFA500").bold("email")}?`,
                value: () => {
                    open("mailto:moynihanbrid@gmail.com");
                    console.log("\nDone, talk to you soon.\n");
                }
            },
            {
                name: `Connect with me on ${chalk.blue.bold("LinkedIn")}?`,
                value: () => {
                    open("https://www.linkedin.com/in/br%C3%ADd-m-0300b516b/");
                    console.log("\nDone, let's connect!.\n");
                }
            },
            {
                name: `Checkout (pun intended) my other works on ${chalk.green.bold("Github")}?`,
                value: () => {
                    open("https://github.com/b-moynihan");
                    console.log("\nDone, please reach out for any freelance.\n");
                }
            },
            {
                name: `Follow me on ${chalk.hex("#fba0e3").bold("Instagram")}?`,
                value: () => {
                    open("https://www.instagram.com/moynihanbrid/");
                    console.log("\nDone, thank you for your support :) \n");
                }
            },
            {
                name: "Quit",
                value: () => {
                    console.log("Slán go fóill. \n");
                }
            }
        ]
    }
  ];