const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        rl.close();
        completionCallback(sum);
    }
    else {
        rl.question("Choose a number: ", function(answer) {
            sum += parseInt(answer);
            console.log(`Current sum: ${sum}`);
            numsLeft -= 1;
            addNumbers(sum, numsLeft, completionCallback);
        })
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));