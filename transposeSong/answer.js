// A set of note

function transpose(song, interval) {
  let notes = [
    'A',
    'B',
    'B#',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'E#',
    'F',
    'F#',
    'G#',
  ];

  return song.map(
    note =>new Array(10).fill(notes).flat()[notes.indexOf(note)+interval]
  );
}

console.log(transpose(['A'], 1), ['A#']);
console.log(transpose(['E'], 5)['A']);
console.log(
  transpose(
    ['C', 'C', 'C#', 'D', 'F', 'D', 'F', 'D', 'D', 'C#', 'C', 'G', 'C', 'C'],
    4
  ),
  ['E', 'E', 'F', 'F#', 'A', 'F#', 'A', 'F#', 'F#', 'F', 'E', 'B', 'E', 'E']
);
