const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleBtn = document.getElementById('shuffle-btn');

let currentWords = {};
let currentStoryIndex = 0;

// Array of story templates, placeholders will be replaced
const stories = [
  ({noun, adjective, person, verb, place}) =>
    `${person} saw a ${adjective} ${noun} while they were ${verb} at ${place}.`,

  ({noun, adjective, person, verb, place}) =>
    `One day, ${person} decided to ${verb} the ${adjective} ${noun} in ${place}.`,

  ({noun, adjective, person, verb, place}) =>
    `${person} couldn't believe their eyes when a ${noun} started to ${verb} near ${place}, it was so ${adjective}!`,

  ({noun, adjective, person, verb, place}) =>
    `At ${place}, ${person} found a ${adjective} ${noun} and decided to ${verb} it immediately.`,

  ({noun, adjective, person, verb, place}) =>
    `Nobody expected that the ${adjective} ${noun} would ${verb} ${place} with ${person} there.`
];

// Validate inputs are not empty
function validateInputs(words) {
  return Object.values(words).every(value => value.trim() !== '');
}

// Generate and display story
function generateStory(words, index = 0) {
  if (!validateInputs(words)) {
    alert('Please fill in all fields.');
    return false;
  }
  storySpan.textContent = stories[index](words);
  return true;
}

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const words = {
    noun: document.getElementById('noun').value,
    adjective: document.getElementById('adjective').value,
    person: document.getElementById('person').value,
    verb: document.getElementById('verb').value,
    place: document.getElementById('place').value,
  };

  if (generateStory(words)) {
    currentWords = words;
    currentStoryIndex = 0;
    shuffleBtn.disabled = false; // Enable shuffle button once a story is generated
  }
});

// Shuffle button logic to show a random different story
shuffleBtn.addEventListener('click', () => {
  if (!currentWords || Object.keys(currentWords).length === 0) return;

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * stories.length);
  } while (newIndex === currentStoryIndex);

  currentStoryIndex = newIndex;
  generateStory(currentWords, currentStoryIndex);
});
