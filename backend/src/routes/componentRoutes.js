import express from 'express';
import { getAllComponents, getComponentBySlug } from '../controllers/componentController.js';

const router = express.Router();

router.get('/', getAllComponents);
router.get('/:slug', getComponentBySlug);

export default router;

