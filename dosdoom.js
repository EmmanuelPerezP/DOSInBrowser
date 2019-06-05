var dosbox = new Dosbox({
  id: 'dosbox',
  onload: (dosbox) => {
    dosbox.run('https://bit.ly/317IX3R', './DOOM.EXE');
  }
})