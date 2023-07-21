function transpose(song, interval) {
  const sharps = 'A, A#, B, C, C#, D, D#, E, F, F#, G, G#'.split(', '),
    flats = 'A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab'.split(', ');

  let notes = song.map(n => (n[1] == 'b' ? flats : sharps).indexOf(n));

  return notes.map(n => sharps[(n + 12 + interval) % 12]);
}

function transpose(song, interval) {
  var sharp = 'A,A#,B,C,C#,D,D#,E,F,F#,G,G#'.split(',');
  var flat = 'A,Bb,B,C,Db,D,Eb,E,F,Gb,G,Ab'.split(',');
  return song.map(
    note =>
      sharp[
        (Math.max(flat.indexOf(note), sharp.indexOf(note)) + interval + 12) % 12
      ]
  );
}
