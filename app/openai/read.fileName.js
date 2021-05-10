//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory
const directoryPath = path.join(__dirname, '/lyricResult');
var allFileName = fs.readdirSync(directoryPath);
var recentFileName = allFileName[allFileName.length - 1];

// content var 따로 생성해서 쓰기
var recentFileContent = fs.readFileSync(directoryPath + '/' + recentFileName).toString();
var allFileContent = [];
allFileName.forEach((item) => {
  allFileContent.push(fs.readFileSync(directoryPath + '/' + item).toString());
});

// title : content 로 lyric object 만들기
const lyric = {
  title: 'testTitle',
  content: 'testContent'
};
function Lyric(ftitle, fcontent){
  this.title = ftitle;
  this.content = fcontent;
}
const recentLyric = new Lyric(recentFileName, recentFileContent);
var allLyric = [];
allFileName.forEach((item, i) => {
  allLyric.push(new Lyric(item, allFileContent[i]));
});


// myproject에서는 allFileName, 가사생성에서는 recentFileName
// 잘 안되면 파일 이름, 내용 같이 exports해서 그냥 한번에 보여주기.
// node이므로 res.send 적용이 필요할 것 같음.
module.exports = { recentFileName, recentFileContent, recentLyric, allFileName, allFileContent, allLyric }
