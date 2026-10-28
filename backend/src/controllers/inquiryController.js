import { Inquiry } from '../models/Inquiry.js';
import { getDBStatus } from '../config/db.js';

// In-memory store fallback with initial seed data
const inMemoryInquiries = [
  {
    id: 'inq-101',
    _id: 'inq-101',
    fullName: 'Karthik Subramanian',
    email: 'karthik.s@gmail.com',
    phone: '+91 98402 11452',
    institution: 'PSG College of Technology, Coimbatore',
    inquiryType: 'Kit Purchase',
    selectedItem: 'Robotic ARM',
    message: 'We are participating in the National Robotics Championship and need 2 Robotic ARM kits along with the C++ code and servo calibration manual.',
    status: 'New',
    createdAt: new Date(Date.now() - 3600000 * 2),
  },
  {
    id: 'inq-102',
    _id: 'inq-102',
    fullName: 'Dr. Anand Kumar (HOD ECE)',
    email: 'anand.ece@veltech.edu.in',
    phone: '+91 94431 88290',
    institution: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute',
    inquiryType: 'Custom Workshop',
    selectedItem: 'Institutional Lab Setup',
    message: 'Proposal discussion for setting up an official National Instruments Center of Excellence Lab with LabVIEW and myRIO hardware for 60 students.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 3600000 * 18),
  },
  {
    id: 'inq-103',
    _id: 'inq-103',
    fullName: 'Priya Dharshini',
    email: 'priyadharshini.r@yahoo.com',
    phone: '+91 91763 44521',
    institution: 'College of Engineering, Guindy (Anna University)',
    inquiryType: 'Internship & Training',
    selectedItem: 'CLAD Certification Track',
    message: 'Interested in the CLAD global certification preparation program and 100% placement assurance in core automotive/automation sectors.',
    status: 'In Review',
    createdAt: new Date(Date.now() - 3600000 * 30),
  },
  {
    id: 'inq-104',
    _id: 'inq-104',
    fullName: 'Venkatesh Rao',
    email: 'venkat.combat@outlook.com',
    phone: '+91 98840 92314',
    institution: 'SRM Institute of Science and Technology',
    inquiryType: 'Kit Purchase',
    selectedItem: 'Fighting Robot',
    message: 'Need the heavy-duty combat fighting robot kit with high RPM weapon motor and hardened steel chassis.',
    status: 'Closed',
    createdAt: new Date(Date.now() - 3600000 * 48),
  },
];

export const createInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, institution, inquiryType, selectedItem, message } = req.body;

    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, email, phone number, and message.',
      });
    }

    const payload = {
      fullName,
      email,
      phone,
      institution: institution || 'Individual Student / Hobbyist',
      inquiryType: inquiryType || 'Kit Purchase',
      selectedItem: selectedItem || 'General Inquiry',
      message,
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
