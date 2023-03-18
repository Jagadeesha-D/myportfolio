/* JavaScript */
const container = document.querySelector('.container');
const icons = document.querySelectorAll('.icon');

container.addEventListener('mousemove', (event) => {
  const horizontal = (event.clientX / container.offsetWidth) * 100;
  const vertical = (event.clientY / container.offsetHeight) * 100;

  icons.forEach((icon, index) => {
    const speed = (index + 1) / 10;
    const x = horizontal - 50;
    const y = vertical - 50;
    icon.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});