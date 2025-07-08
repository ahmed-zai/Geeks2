setTimeout(() => {
  alert("Hello World");
}, 2000);

setTimeout(() => {
  const container = document.getElementById('container');
  const p = document.createElement('p');
  p.textContent = "Hello World";
  container.appendChild(p);
}, 2000);

const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');
let count = 0;

function addParagraph() {
  if (count >= 5) {
    clearInterval(intervalId);
    return;
  }

  const p = document.createElement('p');
  p.textContent = "Hello World";
  container.appendChild(p);
  count++;

  if (count >= 5) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(addParagraph, 2000);

clearBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});
