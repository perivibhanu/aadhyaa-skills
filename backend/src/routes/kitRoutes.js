import express from 'express';
import { getAllKits, getKitBySlug } from '../controllers/kitController.js';

const router = express.Router();

router.get('/', getAllKits);
router.get('/:slug', getKitBySlug);

export default router;

