const path = require("path");
const fs = require("fs");
const requestPromise = require("request-promise");
const dataPath = path.join(__dirname, "./popular-articles.json");
const reqProm = require('request-promise')


//.then(res => console.log(res.data.children[0].data.title))

reqProm("https://reddit.com/r/popular.json")
.then((res) => JSON.parse(res))
.then((res) =>{
   let articleArr = JSON.stringify(res.data.children.map((art) => {
        
        return {title: `${art.data.title}`, url: `${art.data.url}`, author: `${art.data.author}`}
        
        
    }))
    // JSON.stringify(articleArr).  This didn't work for some reason
    console.log(articleArr)
    fs.writeFile(dataPath, articleArr, err => {
        if (err) console.log(err)
    
    })
})





