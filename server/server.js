let path = require('path')
let fs = require('fs')
let dataPath = path.join(__dirname, '../chirps.json')

let chirps = JSON.stringify([
    {
        name: 'Mo',
        message: 'Hey'
    },
    {
        name: 'Po',
        message: 'Malinga'
    },
    {
        name: 'Jo',
        message: 'Tronokiwa Malalalala'
    },
    {
        name: 'Loe',
        message: 'Lo and Behold'
    },
    {
        name: 'Trucker',
        message: 'I love trucks!'
    }
])
fs.writeFile(dataPath, chirps, err => {
    if (err) console.log(err)

})

fs.readFile(dataPath, {
    encoding: "utf-8"
}, (err, data) =>{
    if (err) console.log(err);
    let chirpData = JSON.parse(chirps)
    console.log(chirpData)
})

