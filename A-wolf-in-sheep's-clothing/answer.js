// Takes in the array with sheep and wolf. Reverse the array and find the index of wolf  and  return as per the idex

function warnTheSheep(queue) {
  const queueReverse = queue.reverse();
  const wolfIndex = queueReverse.indexOf('wolf');
  return wolfIndex > 0
    ? `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`
    : 'Pls go away and stop eating my sheep';
}
