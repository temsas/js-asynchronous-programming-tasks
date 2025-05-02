import fsp from 'fs/promises';

// BEGIN
const reverse = (file) =>{
    return fsp.readFile(file,'utf-8' )
        .then((content) => content.split('\n').reverse().join('\n'))
        .then((content) => fsp.writeFile(file, content))
}
export {reverse};
// END