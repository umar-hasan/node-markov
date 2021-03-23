const markov = require("./markov")

const sentence = "If I do not achieve financial stability, I will not be able to rest easy in life."

test('100 words should be in output', () => {
    // Tests to see if the correct number of chains are created.
    
    let m = new markov.MarkovMachine(sentence)
    expect(m.chains.size).toEqual(15)
})
