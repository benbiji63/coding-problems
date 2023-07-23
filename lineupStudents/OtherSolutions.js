const lineupStudents = students =>
  students
    .trim()
    .split(` `)
    .sort((a, b) => b.length - a.length || b.localeCompare(a));
