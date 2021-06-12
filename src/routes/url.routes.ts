import { Router } from 'express';
import { URLController } from '../controlers/url.controller';

const router = Router();

router.get("/", URLController.handleUrl);

export default router;