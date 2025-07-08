function myMove() {
  const box = document.getElementById('animate');
  let pos = 0;

  const interval = setInterval(() => {
    if (pos >= 350) {
      clearInterval(interval);
    } else {
      pos++;
      box.style.left = pos + 'px';
    }
  }, 1);
}
