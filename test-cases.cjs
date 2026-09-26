"use strict";

const test = (input, expected) => ({ input, expected: String(expected) });
const suites = {
  1: [[1, 1], [2, 2], [5, 13], [8, 32], [21, 221], [111, 6161]]
    .map(([n, answer]) => test(`${n}\n`, answer)),
  2: [test('58 1.73\n', 19), test('82 1.82\n', 24), test('40 1.47\n', 18),
      test('100 2.20\n', 20), test('228 1.90\n', 63)],
  3: [test('7\n28 31 33 29 35 36 37\n', 'Longest heatwave: 3 days'),
      test('3\n10 20 29\n', 'Longest heatwave: 0 days'),
      test('4\n30 30 35 40\n', 'Longest heatwave: 4 days'),
      test('7\n30 31 32 20 30 29 30\n', 'Longest heatwave: 3 days')],
  4: [test('boabab\n', 'Slow'), test('pineapple\n', 'Medium'), test('OAK\n', 'Slow'),
      test('aaaaa\n', 'Medium'), test('aaaaaaa\n', 'Medium'), test('aaaaaaaa\n', 'Fast')],
  5: [test('100\n200\n1\n', 40000), test('250\n250\n0\n', 62500),
      test('70\n95\n2\n', 26600), test('11 15 1\n', 330)],
  6: [test('0.1 0.3\n', 'RED'), test('0.9 0.53\n', 'BLUE'),
      test('1 0\n', 'RED'), test('0 0\n', 'RED'), test('-0.5 0.87\n', 'BLUE')],
  7: [test('ACTAG TGATC\n', 'OK'), test('GTACG CACGC\n', 'CORRUPTED'),
      test('TCGCT AGCGA\n', 'OK'), test('AAAAA TTTTA\n', 'CORRUPTED')],
  8: [test('3\n1 4 1\n', 2), test('3\n3 2 1\n', 3),
      test('4\n1 2 3 1\n', 2), test('1\n5\n', 4), test('3\n1 1 1\n', 0)],
  9: [test('1\n', 1), test('2\n', 1), test('3\n', 2), test('6\n', 8),
      test('21\n', 10946), test('45\n', 1134903170)],
  10: [test('6\n', '1 0 1 0 0 0 0 0'), test('4\n', '0 2 0 0 0 0 0 0'),
       test('200\n', '0 0 0 0 0 0 0 1'), test('388\n', '1 1 1 1 1 1 1 1')],
  11: [test('MUSIC\nMOUSE\n', 'G-YY-'), test('BBQERS\nBUBBLE\n', 'G-Y--Y'),
       test('CRANE\nCROWD\n', 'GG---'), test('SOUND\nSPOON\n', 'G-Y-Y'),
       test('APPLE\nAPPLE\n', 'GGGGG'), test('ABCDE\nAAAAA\n', 'G----')],
  12: [test('28\n13 25 19\n', 'Low'), test('30\n20 21 20\n', 'Ok'),
       test('40\n40 35 29\n', 'Low'), test('35\n40 30 29\n', 'Ok')],
  13: [test('6 3 4 0\n3 1 2\n', 2), test('6 3 4 40\n3 1 2\n', 3),
       test('0 0 0 38\n1 1 1\n', 1), test('0 0 0 37\n1 1 1\n', 0),
       test('100 100 100 0\n1 1 1\n', 100)],
  14: [test('6\n101 129 145 150 160 169\n', 448), test('2\n50 50\n', 50),
       test('4\n1 2 100 101\n', 103), test('6\n1000000000 1000000000 1000000000 1000000000 1000000000 1000000000\n', 3000000000)],
  15: [test('2\n2 1\n0 2 1\n0 0 3\n', 17), test('2\n1 1\n0 1 0\n1 0 1\n', 0),
       test('1\n3\n0 5\n', 15), test('1\n1\n1 1\n', 0),
       test('1\n1000000000\n0 1000000000\n', '1000000000000000000')],
  16: [test('4 3\n0 2\n3 3\n4 4\n1 5\n', '4\n4\n0\n1\n2\n1'),
       test('5 3\n1 2\n4 2\n3 2\n6 3\n7 4\n', '4\n3\n3\n4\n5'),
       test('1 1\n999 2\n', '1\n1\n999'),
       test('2 1\n0 2\n999 3\n', '1\n2\n0\n0')],
};

function checkOutput(challengeId, fixture, output) {
  const tokens = value => value.trim().split(/\s+/).filter(Boolean);
  if (challengeId !== 16) {
    return JSON.stringify(tokens(output)) === JSON.stringify(tokens(fixture.expected));
  }
  // Any optimal bucket path is accepted, not just the example path.
  const raw = tokens(output);
  if (!raw.every(value => /^\d+$/.test(value))) return false;
  const values = raw.map(Number);
  const [maximum, seconds, ...path] = values;
  const [n, length, ...coordinates] = fixture.input.trim().split(/\s+/).map(Number);
  const expectedMaximum = Number(tokens(fixture.expected)[0]);
  if (maximum !== expectedMaximum || seconds < 1 || seconds > 1000 || path.length !== seconds) return false;
  if (path.some((p, i) => p < 0 || p > 999 || (i > 0 && Math.abs(p - path[i - 1]) > 1))) return false;
  let catches = 0;
  for (let i = 0; i < n; i++) {
    const x = coordinates[2 * i];
    const time = coordinates[2 * i + 1] - 1;
    const left = path[time - 1];
    if (left !== undefined && left <= x && x <= left + length - 1) catches++;
  }
  return catches === maximum;
}

module.exports = { suites, checkOutput };
