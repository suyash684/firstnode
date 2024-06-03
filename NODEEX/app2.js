var fs= require('fs')


fs.readFile('calc.js','utf-8', function (err,data){
console.log(data)
})

fs.writeFile('calc1.js','console.log("done")', function(err){
    console.log("Data Saved")
})

// fs.unlink('calc1.js', function(err){
//     console.log('Deleted')
// })
n