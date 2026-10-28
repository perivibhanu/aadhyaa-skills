import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';
import { Kit } from './models/Kit.js';
import { Project } from './models/Project.js';
import { Component } from './models/Component.js';
import { kitsData, projectsData, componentsData } from './data/seedData.js';

// Ensure robust SRV DNS resolution for MongoDB Atlas on Windows
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {
  // Ignore if restricted
}

dotenv.config();

const seedDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/aadhyaa_skills';
  try {
    await mongoose.connect(uri);
    console.log('[Seed] Connected to MongoDB at:', uri);

    console.log('[Seed] Clearing old collections...');
    await Kit.deleteMany({});
    await Project.deleteMany({});
    await Component.deleteMany({});

    console.log('[Seed] Inserting Kits...');
    await Kit.insertMany(kitsData);

    console.log('[Seed] Inserting Projects...');
    await Project.insertMany(projectsData);

    console.log('[Seed] Inserting Components...');
    await Component.insertMany(componentsData);

    console.log('✅ Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedDB();

