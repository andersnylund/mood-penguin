import { Request, Response, Router } from 'express';
import uuid from 'uuid/v4';

import Mood from './models/mood';
import { getSentimentScore } from './sentiment';

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
    res.json(mood);
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
