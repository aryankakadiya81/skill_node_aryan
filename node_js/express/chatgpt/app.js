const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function start(){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "pattern in c language",
  temperature: 0,
  max_tokens: 1000,
});
console.log(response.data.choices[0].text)
}

start()
