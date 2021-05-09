//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory
const directoryPath = path.join(__dirname, '/lyricResult');
var recentFileName = 'Lyric_20210509143443.txt';
var allFileName = fs.readdirSync(directoryPath);
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
        if(recentFileName > file) recentFileName = file;
    });
});

// myproject에서는 allFileName, 가사생성에서는 recentFileName
// 잘 안되면 파일 이름, 내용 같이 exports해서 그냥 한번에 보여주기.
module.exports = { recentFileName, allFileName }
