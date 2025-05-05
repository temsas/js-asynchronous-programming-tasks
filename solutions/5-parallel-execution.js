import path from 'path';
import fs, {stat} from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
const getDirectorySize = (directory, callback) => {
    fs.readdir(directory, (error1, files) => {
        if (error1) {
            callback(error1)
            return
        }
        async.map(files, (file, mapCallback) => {
                const filePath = path.join(directory, file)
                fs.stat(filePath, (statErr, stat) => {
                    if (statErr) {
                        mapCallback(statErr)
                        return
                    }
                    if (stat.isFile()) {
                        mapCallback(null, stat.size)
                    } else {
                        mapCallback(null, 0)
                    }
                })
            },
            (error3, sizes) => {
                if (error3) {
                    callback(error3)
                    return
                }
                callback(null, _.sumBy(sizes))
            }
        )
    })
}
export {getDirectorySize}
// END
