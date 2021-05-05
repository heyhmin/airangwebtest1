import React from 'react';
// prompt
import selectedPrompts from '../openai/prompt.js'

const OpenAI = require('openai-api');
// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
    throw 'api key is needed to run testsuite: set environment variable: OPENAI_TEST_API_KEY'
}

const openai = new OpenAI(OPENAI_API_KEY);

// run openAi GPT3
(async () => {
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: selectedPrompts(),
        maxTokens: 5,
        temperature: 0.5,
        frequencyPenalty: 0.2
    });

    openai.encode(gptResponse).then((result) => {
      console.log(gptResponse.data['choices'][0]['text']);
      console.log("Number of tokens for string:" + gptResponse.data['choices'][0]['text'].length);
    });
})();

export default function createdLyrics() {
  return (
    gptResponse.data['choices'][0]['text']
  );
}
