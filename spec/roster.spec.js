const { generateRoster } = require('../roster');
describe("Board", function () {
  let roster;
  // Тестов нет :\ 
  // Попробуешь написать?

  beforeEach(function () {
    roster = generateRoster();
  });

  describe("place header", function () {
    // Код тут.
    it('should be return the correct piece for a given starting position', () => {
      expect(roster[0][0]).toEqual(12);
      expect(roster[1][1]).toEqual('Ms. Buckets');
      expect(roster[1][3][2]).toEqual(11);
      expect(roster[0][1]).toEqual('Joe Schmo');
      expect(roster[2][0]).toEqual(31);
    })
  });

  describe("init board", function () {
    // Код тут.
    it("should generate an 5x4 array", function () {
      expect(roster.length).toEqual(5);
      for (let i = 0; i < roster.length; i++) {
        expect(roster[i].length).toEqual(4);
      }
    })
  });
});
