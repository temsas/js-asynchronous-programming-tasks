import fsp from 'fs/promises';
import async from "async";

// BEGIN
const exchange = async (file1, file2) => {
    const promise1 = await fsp.readFile(file1)
    const promise2 = await fsp.readFile(file2)

    await fsp.writeFile(file1, promise2)
    await fsp.writeFile(file2, promise1)
}
export {exchange}
// END