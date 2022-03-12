const chalk = require("chalk");

// Define personal data
module.exports = {
    name: chalk.hex("#ef98aa").bold("               Bríd Moynihan"),
    handle: chalk.hex("#ef98aa").bold("            @b-moynihan"),
    work: chalk.hex("#FFA500").bold("Work:") + chalk.white(" Data Engineer at") + chalk.hex("#FFA500").bold(" Glofox"),
    github: chalk.green.bold("GitHub: ") + chalk.gray("https://github.com/") + chalk.green("b-moynihan"),
    linkedin: chalk.blue.bold("LinkedIn: ") + chalk.gray("https://linkedin.com/in/") + chalk.blue("bríd-m-0300b516b"),
    web: chalk.hex("#fba0e3").bold("Web: ") + chalk.gray("https://") + chalk.hex("#fba0e3")("bridmoynihan.me"),
    npx: chalk.red("npx") + " " + chalk.white("b-moynihan-business-card")
  };