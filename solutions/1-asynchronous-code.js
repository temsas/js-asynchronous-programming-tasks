import fs from 'fs';

// BEGIN
const print = (file) => {
    const callback = (_error, data) => console.log(data);
    fs.readFile(file, 'utf-8', callback)
}
export default print;
// END
