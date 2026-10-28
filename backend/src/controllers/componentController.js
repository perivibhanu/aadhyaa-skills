import { Component } from '../models/Component.js';
import { componentsData } from '../data/seedData.js';
import { getDBStatus } from '../config/db.js';

export const getAllComponents = async (req, res) => {
  try {
    if (getDBStatus()) {
      const dbComponents = await Component.find();
      if (dbComponents.length > 0) return res.json({ success: true, count: dbComponents.length, data: dbComponents });
    }
    return res.json({ success: true, count: componentsData.length, data: componentsData, source: 'fallback_seed' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message, data: componentsData });
  }
};

export const getComponentBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    if (getDBStatus()) {
      const comp = await Component.findOne({ slug });
      if (comp) return res.json({ success: true, data: comp });
    }
    const found = componentsData.find((c) => c.slug === slug);
    if (!found) {
      return res.status(404).json({ success: false, message: 'Component not found' });
    }
    return res.json({ success: true, data: found });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

