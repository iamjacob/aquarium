// simple script at bottom before </body>
document.querySelector('.lucide-play').addEventListener('click', () => {
  document.querySelector('.scene').style.animationPlayState = 'running';
  console.log('running lucidBtn play ')
  document.querySelectorAll('*').forEach(el => el.style.animationPlayState = 'running');
});

document.querySelector('.lucide-pause').addEventListener('click', () => {
  document.querySelector('.scene').style.animationPlayState = 'paused';
  console.log('running lucideBtn pause')
  document.querySelectorAll('*').forEach(el => el.style.animationPlayState = 'paused');
});
