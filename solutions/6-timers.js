import fs from 'fs';

// BEGIN
const watch = (filepath, period, callback) =>{
    let time = Date.now()
    const id = setInterval(() =>{
        fs.stat(filepath, (err, stats) =>{
            if(err){
                clearInterval(id)
                callback(err)
                return
            }
            let timeChange = stats.mtimeMs
            if(timeChange> time){
                callback(null)
            }
        })
    })
    return id;
}
export  default watch;
// END
