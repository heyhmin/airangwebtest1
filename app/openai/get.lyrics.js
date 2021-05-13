const fs = require('fs');
// prompt
import selectedPrompts from './prompt.js'
//var selectedPrompts = require('./prompt')

const OpenAI = require('openai-api');
// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
    throw 'api key is needed to run testsuite: set environment variable: OPENAI_API_KEY'
}

const openai = new OpenAI(OPENAI_API_KEY);

// run openAi GPT3
(async () => {
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: selectedPrompts(),
        maxTokens: getRandomMaxTokens(),
        temperature: 0.5,
        frequencyPenalty: 0.2
    });

    openai.encode(gptResponse).then((result) => {
      console.log(gptResponse.data['choices'][0]['text']);
      console.log("Number of tokens for string:" + gptResponse.data['choices'][0]['text'].length);
      // text replacing
      const reg = /input: .*\noutput: /gi
      const reg2 = /\n\n/gi
      const reg3 = /i.*/gi
      var replaced = gptResponse.data['choices'][0]['text'].replace(reg, '');
      var replaced2 = replaced.replace(reg2, '\n')
      var replaced3 = replaced2.replace(reg3, '')
      // destination.txt will be created or overwritten by default.
      fs.writeFile(`./app/openai/lyricResult/Lyric_${getDateString()}.txt`, replaced3, (err) => {
        if (err) throw err;
        console.log(`created lyric file at this timestamp ${getDateString()}`);
      });
    });
})();

// file name
function getDateString() {
  const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  const hour = `${date.getHours()}`.padStart(2, '0');
  const min = `${date.getMinutes()}`.padStart(2, '0');
  const sec = `${date.getSeconds()}`.padStart(2, '0');
  return `${year}${month}${day}${hour}${min}${sec}`
}

// maxTokens
function getRandomMaxTokens() {
  return 180 + Math.floor(Math.random() * 40);
}

// 결과 text 처리 - input/output/: 제거

// node이므로 res.send 적용이 필요할 것 같음.
export default function createdLyrics() {
  return (
    gptResponse.data['choices'][0]['text']
  );
}
