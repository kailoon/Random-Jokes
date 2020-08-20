// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn
const setupDiv = document.querySelector("#setup");
const punchlineDiv = document.querySelector("#punchline");
const punchlineBtn = document.querySelector("#punchlineBtn");
const newJokeBtn = document.querySelector("#newjokeBtn");
let punchline;

// Add an event listener for the punchline button. When clicked it should call a function called getPunchline
punchlineBtn.addEventListener("click", getPunchline);

// Add an event listener for the new joke button. When clicked it should call the getJoke function
newjokeBtn.addEventListener("click", getJoke);

/* Create the getPunchline function. This function should:
    Insert the punchline into the punchlineDiv
    Add the class "bubble" to the punchlineDiv
    Toggle the "hidden" class on both buttons.
*/

function getPunchline() {
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add("bubble");
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

// Setup an async function called getJoke
// Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data
async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const joke = await jokePromise.json();

  // Get the setup from the joke and insert it into the setupDiv element
  setupDiv.innerHTML = joke[0].setup;

  // Assign the current jokes punchline to the punchline variable.
  punchline = joke[0].punchline;

  // Clear the punchline div and remove the "bubble" class from the punchline div
  punchlineDiv.innerHTML = "";
  punchlineDiv.classList.remove("bubble");

  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

getJoke();
