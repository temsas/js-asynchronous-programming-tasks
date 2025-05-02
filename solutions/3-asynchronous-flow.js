import fs from 'fs';

// BEGIN
const compareFileSizes = (filepath1, filepath2, callback) => {
    fs.stat(filepath1, (error1, stats1) => {
        fs.stat(filepath2, (error2, stats2) => {
            callback(null, Math.sign(stats1.size - stats2.size));
        })
    })
}
export {compareFileSizes}
// END