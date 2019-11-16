import axios from 'axios';

import './env';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': process.env.AZURE_KEY
  }
};

const url =
  'https://howareyoufeeling.cognitiveservices.azure.com/text/analytics/v2.1';

export const getSentimentScore = async (str: string) => {
  const data = {
    documents: [
      {
        language: 'en',
        id: '1',
        text: str
      }
    ]
  };

  try {
    const sentiment = await axios.post(url + '/sentiment', data, config);
    return sentiment.data.documents[0].score;
  } catch (e) {
    console.error(e);
  }
};

export const getKeywords = async (str: string) => {
  const data = {
    documents: [
      {
        language: 'en',
        id: '1',
        text: str
      }
    ]
  };
  try {
    const keywords = await axios.post(url + '/keyPhrases', data, config);
    return keywords.data.documents[0].keyPhrases;
  } catch (e) {
    console.error(e);
  }
};
