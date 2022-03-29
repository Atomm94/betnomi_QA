const fs = require('fs/promises');

function Helper() {
    let imgFolder = 'debug/';
    this.log = async function(name,image){
        const currentTime = Date.now();
        const filename = name+currentTime+'.png';
        await fs.writeFile(imgFolder+filename, image, 'base64', function(err) {
            console.log(err);
        });
    }
}
module.exports = Helper;