var mainconte;
mainconte = document.getElementById(`main-content`);
mainconte.insertAdjacentHTML("afterend",`
<div>
  <div id='dosbox'></div>
  <h2>hola</h2>
<div>`
);

var dosbox = new Dosbox({
  id: 'dosbox',
  onload: (dosbox) => {
    dosbox.run('https://emmanuelperezp.github.io/DOSInBrowser/doom.zip', './DOOM.EXE');
  }
})