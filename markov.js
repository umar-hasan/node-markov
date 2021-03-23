/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let c = new Map()
    for (let i = 0; i < this.words.length; i++) {
      let w = this.words[i]
      let next = this.words[i + 1] || null
      if (!c.has(w)) {
        c.set(w, [])
      }
      c.get(w).push(next)
    }
    this.chains = c
  }



  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Array.from(this.chains.keys())
    let key = keys[Math.floor(Math.random() * keys.length)]
    let out = []

    while (out.length < numWords && key !== null) {
      out.push(key)
      let k = this.chains.get(key)
      key = k[Math.floor(Math.random() * k.length)]
    }

    return out.join(" ")
  }
}

module.exports = {MarkovMachine}