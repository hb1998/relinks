import { Router } from 'express';
import { routeConstants } from '../config/route.constants';
import { LinkControllers } from '../controlers/link.controller';

const router = Router();

router.post(routeConstants.LINK, LinkControllers.createLink);
router.delete(routeConstants.LINK, LinkControllers.deleteLink);
router.put(routeConstants.LINK, LinkControllers.updateLink);

export default router;