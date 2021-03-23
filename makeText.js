/** Command-line tool to generate Markov text. */

const fs = require('fs')
const axios = require('axios')
const a = process.argv
const markov = require('./markov')

if (a.length !== 4) {
    console.log("error")
    process.exit(1)
}

cat(a[3], a[2])


function cat(arg, cmd) {
    // let url_pattern = RegExp("https?:\/\/[a-z0-9]*\.[a-z0-9/?=:-]*")
    
    if (cmd === "file") {
        fs.readFile(arg, 'utf8', function(err, data) {
            if (err) {
                console.log(err)
                process.exit(1)
            }
            let m = new markov.MarkovMachine(data)
            console.log(m.makeText())
    
        })
    }
    else if (cmd === "url") {
        axios.get(arg).then((res) => {
            let m = new markov.MarkovMachine(res.data)
            console.log(m.makeText())
        }).catch(res => console.log("Website does not exist."))
        
    }
    else {
        console.log("error")
    }
}