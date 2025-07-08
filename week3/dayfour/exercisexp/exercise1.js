// 1. Retrieve the h1 and console.log it
const h1 = document.querySelector('h1');
console.log(h1);

// 2. Remove the last paragraph in the <article>
const article = document.querySelector('article');
const lastParagraph = article.lastElementChild;
article.removeChild(lastParagraph);

// 3. Change background color of h2 to red when clicked
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
  h2.style.backgroundColor = 'red';
});

// 4. Hide h3 when clicked
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
  h3.style.display = 'none';
});

// 5. Make all <p> elements bold on button click
const boldBtn = document.getElementById('boldBtn');
boldBtn.addEventListener('click', () => {
  const paragraphs = document.querySelectorAll('article p');
  paragraphs.forEach(p => {
    p.style.fontWeight = 'bold';
  });
});

// BONUS: Random font size on h1 hover
h1.addEventListener('mouseover', () => {
  const randomSize = Math.floor(Math.random() * 101) + 'px';
  h1.style.fontSize = randomSize;
});

// BONUS: Fade out 2nd paragraph on hover
const paragraphs = document.querySelectorAll('article p');
if (paragraphs[1]) {
  paragraphs[1].addEventListener('mouseover', () => {
    paragraphs[1].classList.add('fade-out');
  });
}
