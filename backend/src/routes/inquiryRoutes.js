import express from 'express';
import {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
  adminLogin,
} from '../controllers/inquiryController.js';

const router = express.Router();

router.post('/', createInquiry);
router.get('/', getAllInquiries);
router.patch('/:id/status', updateInquiryStatus);
router.delete('/:id', deleteInquiry);
router.post('/admin/login', adminLogin);

export default router;
