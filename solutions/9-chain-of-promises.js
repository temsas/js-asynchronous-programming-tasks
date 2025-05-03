import fsp from 'fs/promises';

// BEGIN
const getTypes = (paths) =>{
    const promises = paths.map((path) =>{
        return fsp.stat(path)
            .then((stats) =>{
                if(stats.isDirectory()){
                    return 'directory'
                } else {
                    return 'file'
                }
            })
            .catch(() => null)
    })
    return Promise.all(promises)
}
export {getTypes}
// END