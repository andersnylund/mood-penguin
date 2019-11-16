import { Request, Response, Router } from 'express';

import Mood from './models/mood';
import uuid from 'uuid/v4';

const router = Router();

const error = {
  error: 'oops... something went wrong'
};

router.post('/moods', async (req: Request, res: Response) => {
  try {
    const mood = await Mood.query().insert({
      id: uuid(),
      timestamp: new Date(),
      happiness: req.body.happiness,
      description: req.body.description
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
