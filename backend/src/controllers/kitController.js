import { Kit } from '../models/Kit.js';
import { kitsData } from '../data/seedData.js';
import { getDBStatus } from '../config/db.js';

export const getAllKits = async (req, res) => {
  try {
    if (getDBStatus()) {
      const dbKits = await Kit.find();
      if (dbKits.length > 0) return res.json({ success: true, count: dbKits.length, data: dbKits });
    }
    return res.json({ success: true, count: kitsData.length, data: kitsData, source: 'fallback_seed' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message, data: kitsData });
  }
};

export const getKitBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    if (getDBStatus()) {
      const kit = await Kit.findOne({ slug });
      if (kit) return res.json({ success: true, data: kit });
    }
    const found = kitsData.find((k) => k.slug === slug);
    if (!found) {
      return res.status(404).json({ success: false, message: 'Kit not found' });
    }
    return res.json({ success: true, data: found });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

