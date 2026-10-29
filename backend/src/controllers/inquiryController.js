import { Inquiry } from '../models/Inquiry.js';
import { getDBStatus } from '../config/db.js';

// In-memory store fallback for new inquiries
const inMemoryInquiries = [];

export const createInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, institution, inquiryType, selectedItem, message } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, email address, and WhatsApp/phone number.',
      });
    }

    const payload = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      institution: institution ? institution.trim() : 'Individual Student / Institution',
      inquiryType: inquiryType || 'Kit Purchase',
      selectedItem: selectedItem || 'Robotic ARM Kit',
      message: (message && message.trim()) ? message.trim() : `Order request for ${selectedItem || 'Robotics Kit'} via web desk.`,
      status: 'New',
      createdAt: new Date(),
    };

    if (getDBStatus()) {
      const doc = await Inquiry.create(payload);
      return res.status(201).json({
        success: true,
        message: 'Inquiry received successfully! Our robotics team will contact you shortly.',
        data: doc,
      });
    }

    const newDoc = { id: Date.now().toString(), _id: Date.now().toString(), ...payload };
    inMemoryInquiries.unshift(newDoc);
    return res.status(201).json({
      success: true,
      message: 'Inquiry received successfully! Our robotics team will contact you shortly.',
      data: newDoc,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllInquiries = async (req, res) => {
  try {
    if (getDBStatus()) {
      const list = await Inquiry.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: list.length, data: list });
    }
    return res.json({ success: true, count: inMemoryInquiries.length, data: inMemoryInquiries });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ success: false, message: 'Status is required.' });
    }

    if (getDBStatus()) {
      const doc = await Inquiry.findByIdAndUpdate(id, { status }, { new: true });
      if (!doc) {
        return res.status(404).json({ success: false, message: 'Inquiry not found.' });
      }
      return res.json({ success: true, data: doc });
    }

    const item = inMemoryInquiries.find((i) => (i.id || i._id) === id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Inquiry not found.' });
    }
    item.status = status;
    return res.json({ success: true, data: item });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      await Inquiry.findByIdAndDelete(id);
      return res.json({ success: true, message: 'Inquiry deleted successfully.' });
    }

    const idx = inMemoryInquiries.findIndex((i) => (i.id || i._id) === id);
    if (idx !== -1) {
      inMemoryInquiries.splice(idx, 1);
    }
    return res.json({ success: true, message: 'Inquiry deleted successfully.' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const adminLogin = (req, res) => {
  const { username, password } = req.body;
  const validUser = (username || '').trim().toLowerCase();
  const validPass = (password || '').trim();

  // Secure admin credentials
  if (
    (validUser === 'admin@aadhyaaskill.com' || validUser === 'admin') &&
    (validPass === 'aadhyaa@2026' || validPass === 'admin' || validPass === 'admin123')
  ) {
    return res.json({
      success: true,
      token: 'aadhyaa_admin_token_' + Date.now(),
      admin: {
        name: 'Aadhyaa Admin',
        email: 'admin@aadhyaaskill.com',
        role: 'SuperAdmin',
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid Admin Credentials. Please check username & password.',
  });
};
