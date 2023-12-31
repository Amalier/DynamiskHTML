// import { stat } from "fs"
import * as readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
let tries = 0;

const DICTIONARY = {
    en: {

        welcometext: `Guess a number between 1 and 100`,
        yourguess: `your guess `,
        rightGuess: `You guessed it! `,
        TooHigh: `Too high`,
        TooLow: `Too low`,
        whatLanguage: `what is your preffered language?`,
        yourLanguage: `You choosed `,
        playAgain: "you want to play again?",
        

    },
    no: {
        welcometext: `Gjett et tall mellom 1 og 100`,
        yourguess: `hva gjetter du `,
        rightGuess: `Du gjettet riktig! `,
        TooHigh: `For høyt`,
        TooLow: `For lavt`,
        whatLanguage: "Hvilket språk foretrekker du? ",
        yourLanguage: `Du valgte `,
        playAgain: "Vil du spille igjen? ",
        yes: "ja"
    }

};

let isPlaying = true;

let language = "no"


const dict = DICTIONARY[language];

const POSSIBLE_SELECTIONS = { no: `Norsk (no)`, en: `Engelsk (en)` };
console.log(`Welcome to guess my number, what is you preffered language? `);
console.log(`your choices are ${POSSIBLE_SELECTIONS.no}, and ${POSSIBLE_SELECTIONS.en}`);

let playerSelectionLanguage = ""
while ((playerSelectionLanguage in POSSIBLE_SELECTIONS) === false) {
    playerSelectionLanguage = await rl.question(`make your choice: `);
    playerSelectionLanguage = playerSelectionLanguage.toLowerCase();
}
console.log

await rl.question("make your choice: ");
const fullDescriptionOfLanguage = POSSIBLE_SELECTIONS[playerSelectionLanguage];

console.log(`${dict.yourLanguage} ${fullDescriptionOfLanguage}`);

console.log(dict.welcometext);

while (isPlaying) {
    const answer = await rl.question(dict.yourguess);
    const number = parseInt(answer);
    tries++;

    if (number === randomNumber) {
        console.log(dict.rightGuess);
        isPlaying = false;
    }
    else if (number < randomNumber) {
        console.log(dict.TooLow);
    } else {
        console.log(dict.TooHigh);
    }
}
if (isPlaying = false); {
    let wantToPlayAgain = await rl.question (dict.playAgain)
    if (wantToPlayAgain === true)
    isPlaying = true;

}


process.exit();

//du må endre evt loops og process exit, da dette ikke funker i html side :)
