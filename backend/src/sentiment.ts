import axios from 'axios';

import './env';

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
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': process.env.AZURE_KEY
    }
  };

  try {
    const sentiment = await axios.post(
      'https://howareyoufeeling.cognitiveservices.azure.com/text/analytics/v2.1/sentiment',
      data,
      config
    );
    return sentiment.data.documents[0].score;
  } catch (e) {
    console.error(e);
  }
};
