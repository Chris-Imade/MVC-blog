const fs = require("fs");

const readStream = fs.createReadStream("./docs/dummy.txt", { encoding: "binary" });
const writeStream = fs.createWriteStream("./docs/writtenDummy.txt");

readStream.on("data", (chunk) => {
    writeStream.write("\n <-------------------------------------------------NEW CHUNK---------------------------------------------------> \n")
    writeStream.write(chunk);
})