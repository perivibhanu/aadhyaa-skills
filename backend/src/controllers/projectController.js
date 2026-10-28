import { Project } from '../models/Project.js';
import { projectsData } from '../data/seedData.js';
import { getDBStatus } from '../config/db.js';

export const getAllProjects = async (req, res) => {
  try {
    if (getDBStatus()) {
      const dbProjects = await Project.find();
      if (dbProjects.length > 0) return res.json({ success: true, count: dbProjects.length, data: dbProjects });
    }
    return res.json({ success: true, count: projectsData.length, data: projectsData, source: 'fallback_seed' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message, data: projectsData });
  }
};

export const getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    if (getDBStatus()) {
      const proj = await Project.findOne({ slug });
      if (proj) return res.json({ success: true, data: proj });
    }
    const found = projectsData.find((p) => p.slug === slug);
    if (!found) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    return res.json({ success: true, data: found });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

