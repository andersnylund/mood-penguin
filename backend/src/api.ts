import { Request, Response, Router } from 'express';
import uuid from 'uuid/v4';

import Mood from './models/mood';
import { getSentimentScore, getKeywords } from './azure';

const router = Router();

const error = {
  error: 'oops... something went wrong'
};

router.post('/moods', async (req: Request, res: Response) => {
  try {
    const sentimentScore = await getSentimentScore(req.body.description);
    const mood = await Mood.query().insert({
      id: uuid(),
      timestamp: new Date(),
      happiness: req.body.happiness,
      description: req.body.description,
      sentiment: sentimentScore
    });

    const threeLatestMoods = await Mood.query()
      .orderBy('timestamp', 'DESC')
      .select('happiness')
      .select('sentiment')
      .select('description')
      .limit(3);

    const threeLatestHappinessAverage =
      threeLatestMoods
        .map(mood => mood.happiness)
        .reduce((prev, curr) => prev + curr) / 3;

    const threeLatestSentimentAverage =
      (threeLatestMoods
        .map(mood => mood.sentiment)
        .reduce((prev, curr) => prev + curr) /
        3) *
      100;

    const concatenatedString = threeLatestMoods
      .map(mood => mood.description)
      .join(' ');

    const keyWords = await getKeywords(concatenatedString);

    res.json({
      keyWords,
      threeLatestHappinessAverage,
      threeLatestSentimentAverage
    });
  } catch (e) {
    console.error(e);
    res.json(error).status(500);
  }
});

router.get('/moods', async (req: Request, res: Response) => {
  try {
    const moods = await Mood.query();
    res.json(moods);
  } catch (e) {
    console.error(e);
    res.json(error).status(500);
  }
});

export default router;
