import fs from 'fs';

// BEGIN
const move = (filepath1, filepath2, callback) =>{
    fs.readFile(filepath1, (error, data) =>{
        if(error){
            callback(error)
            return;
        }
        fs.writeFile(filepath2, data, (error) =>{
            if(error){
                callback(error)
                return;
            }
        fs.unlink(filepath1, (error) =>{
            if(error){
                callback(error)
                return;
            }
            callback(null);
        })
        })

    })
}
export {move}
// END
