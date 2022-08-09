const numbers = [12, 9, 31, 18, 22]
const names = ['Joe Schmo', 'Ms. Buckets', 'Harvey Kay', 'Sally Talls', 'MK DiBoux']
const positions = ['Center', 'Point Guard', 'Shooting Guard', 'Power Forward', 'Small Forward']
const points = {
  12: [14, 32, 7, 0, 23],
  9: [19, 0, 11, 22, 0],
  31: [0, 30, 16, 0, 25],
  18: [18, 29, 26, 31, 19],
  22: [11, 0, 23, 17, 0]
}

function generateRoster() {
  // const result = [];
  // numbers.forEach((elem, i) => {
  //   result.push([elem, names[i], positions[i], points[elem]]);
  // })
  // return result;
  return numbers.map((el, i) => [el, names[i], positions[i], points[el]])
}

module.exports = { generateRoster };
