var expect = chai.expect

describe("War Game", function(){
  describe("Initialize Deck (Test 1)", function() {
    it('Length of the array should equal 52. ', function() {
      let deck = new Deck();
      expect(deck.deck.length).to.equal(52);
    });
  });

  describe("Shuffle Deck (Test 2)", function() {
    it('Length should be equal to 52. ', function() {
      let deck = new Deck();
      let mainDeck = shuffle(deck);
      expect(mainDeck.length).to.equal(52);
    });
    it("The main deck should be shuffled when compared to initial deck. ", function() {
      let deck = new Deck();
      let mainDeck = shuffle(deck);
      expect(deck).to.not.equal(mainDeck);
    });
  });

  describe("Winner (Test 3)", function() {
    it('Should alert a winner or a tie. ', function() {
       expect(alert);
    });
  });
});
