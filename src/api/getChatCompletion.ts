import { CreateChatCompletionRequest } from 'openai';
import { openai } from './app';

const getChatCompletion = async (content: string) => {
  const completionParams: CreateChatCompletionRequest = {
    model: 'gpt-3.5-turbo',
    max_tokens: 200,
    messages: [{ role: 'user', content: `${content}` }],
  };

  const response = await openai.createChatCompletion(completionParams);
  return response.data.choices[0].message?.content;
};

export default getChatCompletion;
