const target = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
function checkGuess() {
  guessCount++;
  const guess = document.getElementById("guess").value;
  if (guess == target) {
    document.getElementById("result").innerHTML =
      "Congratulations! You guessed the number in " +
      guessCount +
      " tries.";
  } else if (guess > target) {
    document.getElementById("result").innerHTML = "Too high. Try again.";
  } else {
    document.getElementById("result").innerHTML = "Too low. Try again.";
  }
}
