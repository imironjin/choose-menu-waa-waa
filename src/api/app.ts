import { Configuration, OpenAIApi } from 'openai';
const { VITE_API_KEY } = import.meta.env;

const configuration = new Configuration({
  apiKey: VITE_API_KEY,
});
delete configuration.baseOptions.headers['User-Agent'];
export const openai = new OpenAIApi(configuration);
