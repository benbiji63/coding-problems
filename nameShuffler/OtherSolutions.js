const nameShuffler = str => str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);

function nameSuffle(str) {
  var name = str.split(' ');
  return name[1] + ' ' + name[0];
}
