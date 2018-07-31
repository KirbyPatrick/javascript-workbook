if (typeof describe === 'function') {
    //Test for all possible scenaries in which "Hand one wins!".
    it('should detect which hand won', () => {
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");

        //Test for all possible scenaries in which "Hand two wins!".
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");

        //Test to make sure user must input a valid entry (e.g. 'rock', 'paper', or 'scissors')

        assert.equal(rockPaperScissors('cat', 'dog'), "Invalid entry. Please try again");
        assert.equal(rockPaperScissors('apple', '4'), "Invalid entry. Please try again");

      });
}