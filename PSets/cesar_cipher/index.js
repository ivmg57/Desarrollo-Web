const readlineSync = require("readline-sync");
const fs = require("fs");
const path = require("path");

function cesarCipher(str, idx) {
    let result = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let letter of str) {
        let isUpper = letter === letter.toUpperCase();
        let currentAlphabet = isUpper ? alphabetUpper : alphabet;
        let index = currentAlphabet.indexOf(letter);
        if(index !== -1) {
            let newIndex = (index + idx) % 26;
            let newLetter = currentAlphabet[newIndex];
            result += newLetter;
        } else {
            result += letter; // Keep non-alphabet characters unchanged
        }
    }
    return result;
}

function registerUser() {
    let name = readlineSync.question("Enter your name: ");
    let password = readlineSync.question("Enter your password: ");
    let passwordCifrada = cesarCipher(password, 7);

    console.log("Welcome " + name);
    console.log("Password: " + password);
    console.log(passwordCifrada);

    addUser(name, passwordCifrada);
}

function addUser(userName, passwordCifrada) {
    const filePath = path.join(__dirname, "users.json");
    fs.readFile(filePath, (err, data) => {
        let users = [];
        if (!err) {
            users = JSON.parse(data);
        }
        users.push({userName, passwordCifrada});
        fs.writeFile(filePath, JSON.stringify(users), (err) => {
            if(err) {
                console.log("Error adding user");
            } else {
                console.log("User added");
            }
        });
    });
}

function login() {
    let userName = readlineSync.question("Enter your name: ");
    let password = readlineSync.question("Enter your password: ");
    let passwordCifrada = cesarCipher(password, 7);

    const filePath = path.join(__dirname, "users.json");

    fs.readFile(filePath, (err, data) => {
        if(err) {
            console.log("Error reading file");
        } else {
            let users = JSON.parse(data);
            let found = users.find(user => user.userName === userName && user.passwordCifrada === passwordCifrada);
            if (found) {
                console.log("Welcome " + userName);
            } else {
                console.log("Wrong user or password");
            }
        }
    });
}

function mainMenu() {
    console.log("1. Register");
    console.log("2. Login");
    let choice = readlineSync.question("Choose an option: ");
    if (choice === "1") {
        registerUser();
    } else if (choice === "2") {
        login();
    } else {
        console.log("Invalid choice, please try again.");
        mainMenu();
    }
}

mainMenu();
