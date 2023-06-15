// Initial version
function Ghost() {
  this.color = getRandomColor;

  function getRandomColor() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
        return 'white';
        break;
      case 1:
        return 'yellow';
        break;
      case 2:
        return 'purple';
        break;
      default:
        return 'red';
        break;
    }
  }
}

// Final version
function Ghost() {
  this.color = getRandomColor();

  function getRandomColor() {
    let num = Math.ceil(Math.random() * 4);
    switch (num) {
      case 1:
        return 'white';
        break;
      case 2:
        return 'yellow';
        break;
      case 3:
        return 'purple';
        break;
      default:
        return 'red';
        break;
    }
  }
}
