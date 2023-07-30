// A string of normal names of students separated by ' '
// An array of students in descending  order of length of their name

// Sort the array
// Make sub arrays based on their length

// function lineupStudents(students) {
//   return students.split(' ').sort((a, b) => {
//     if ((a.length = b.length)) {
//       let sortedNames = [a, b].sort((a, b) => (a > b ? -1 : 1));
//       if(sortedNames[0]!==a) return -1;
//       else return 1
//     }
//     return a.length > b.length ? -1 : 1;
//   });
// }

function lineupStudents(students) {
  return students.trim()
  // Sort the array
  let lengthSort = students
    .split(' ')
    .sort((a, b) => (a.length > b.length ? -1 : 1));

  // Make sub arrays based on their length
  let length = lengthSort[0].length;
  let ascendArr = [];
  for (let i = 0; i <= length; i++) {
    ascendArr.push(lengthSort.filter(name => name.length === i));
  }

  // filter away empty arrays sort the sub array in descending order and join them
  return ascendArr
    .filter(arr => arr.length > 0)
    .map(arr => arr.sort((a, b) => (a > b ? 1 : -1)))
    .flat(1)
    .reverse();
}
let s2 =
  'Michio Miki Mikio Minori Minoru Mitsuo Mitsuru Nao Naoki Naoko Noboru Nobu Nobuo Nobuyuki Nori Norio Osamu Rafu Raiden Ringo Rokuro Ronin Ryo Ryoichi Ryota Ryozo Ryuichi Ryuu Saburo Sadao Samuru Satoru Satoshi Seiichi Seiji Senichi Shichiro Shig Shigekazu Shigeo Shigeru Shima Shin Shinichi Shinji Shiro Shoichi Shoji Shuichi Shuji Shunichi Susumu Tadao Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi Takumi Tama Tamotsu Taro Tatsuo Tatsuya Teruo Tetsip Tetsuya Tomi Tomio Toru Toshi Toshiaki Toshihiro Toshio Toshiyuki Toyo Tsuneo Tsutomu Tsuyoshi Uyeda Yasahiro Yasuhiro Yasuo Yasushi Yemon Yogi Yoichi Yori Yoshi Yoshiaki Yoshihiro Yoshikazu Yoshimitsu Yoshinori Yoshio Yoshiro Yoshito Yoshiyuki Yuichi Yuji Yuki';
let lst2 = [
  'Yoshimitsu',
  'Yoshiyuki',
  'Yoshinori',
  'Yoshikazu',
  'Yoshihiro',
  'Toshiyuki',
  'Toshihiro',
  'Shigekazu',
  'Yoshiaki',
  'Yasuhiro',
  'Yasahiro',
  'Tsuyoshi',
  'Toshiaki',
  'Takehiko',
  'Takayuki',
  'Takahiro',
  'Shunichi',
  'Shinichi',
  'Shichiro',
  'Nobuyuki',
  'Yoshito',
  'Yoshiro',
  'Yasushi',
  'Tsutomu',
  'Tetsuya',
  'Tatsuya',
  'Tamotsu',
  'Takeshi',
  'Takeshi',
  'Takashi',
  'Tadashi',
  'Shuichi',
  'Shoichi',
  'Shigeru',
  'Senichi',
  'Seiichi',
  'Satoshi',
  'Ryuichi',
  'Ryoichi',
  'Mitsuru',
  'Yuichi',
  'Yoshio',
  'Yoichi',
  'Tsuneo',
  'Toshio',
  'Tetsip',
  'Tatsuo',
  'Takumi',
  'Susumu',
  'Shinji',
  'Shigeo',
  'Satoru',
  'Samuru',
  'Saburo',
  'Rokuro',
  'Raiden',
  'Noboru',
  'Mitsuo',
  'Minoru',
  'Minori',
  'Michio',
  'Yoshi',
  'Yemon',
  'Yasuo',
  'Uyeda',
  'Toshi',
  'Tomio',
  'Teruo',
  'Takeo',
  'Takao',
  'Tadao',
  'Shuji',
  'Shoji',
  'Shiro',
  'Shima',
  'Seiji',
  'Sadao',
  'Ryozo',
  'Ryota',
  'Ronin',
  'Ringo',
  'Osamu',
  'Norio',
  'Nobuo',
  'Naoko',
  'Naoki',
  'Mikio',
  'Yuki',
  'Yuji',
  'Yori',
  'Yogi',
  'Toyo',
  'Toru',
  'Tomi',
  'Taro',
  'Tama',
  'Shin',
  'Shig',
  'Ryuu',
  'Rafu',
  'Nori',
  'Nobu',
  'Miki',
  'Ryo',
  'Nao',
];
console.log(lineupStudents(s2), lst2);
