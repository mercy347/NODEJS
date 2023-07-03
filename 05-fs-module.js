const fs = require('node:fs')


// //Synchronous Reading
console.log('Start reading a file...')

const results =fs.readFileSync('./names.txt', 'utf8')

fs.writeFileSync('./results.txt', `his is the final results:
${results}`,
(error)=>{
    if (error) {
        console.log(`Any error: ${error}`)
    }
}
)

// console.log('Finish reading a file...')

//Asynchronous Reading
console.log('Start reading a file...')

fs.readFile('./names.txt', 'utf8', (error, data)=>{
    if (error) {
        console.log(`Any error: ${error}`)
    } else{
        console.log(data)
    }

    fs.writeFile(
        './results.txt', 
        `Read file names.tt and results were:${data}`, 
        (error)=>{
        if (error) {
            console.log(`Any error: ${error}`)
        } else {
            console.log('File written successfully')
        }
    }
    )
})

console.log('Finish reading a file...')
