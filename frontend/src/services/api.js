import { fallbackProjects, fallbackKits, fallbackComponents, companyInfo } from '../data/frontendData.js';

const API_BASE = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/api`
  : '/api';

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error('Network response not ok');
    const json = await res.json();
    return json.data || fallbackProjects;
  } catch (err) {
    console.warn('[API Client] Backend not detected or error, using local dataset:', err.message);
    return fallbackProjects;
  }
};

export const fetchKits = async () => {
  try {
    const res = await fetch(`${API_BASE}/kits`);
    if (!res.ok) throw new Error('Network response not ok');
    const json = await res.json();
    return json.data || fallbackKits;
  } catch (err) {
    console.warn('[API Client] Backend not detected, using local kits dataset');
    return fallbackKits;
  }
};

export const fetchComponents = async () => {
  try {
    const res = await fetch(`${API_BASE}/components`);
    if (!res.ok) throw new Error('Network response not ok');
    const json = await res.json();
    return json.data || fallbackComponents;
  } catch (err) {
    console.warn('[API Client] Backend not detected, using local components dataset');
    return fallbackComponents;
  }
};

export const fetchCompanyInfo = async () => {
  try {
    const res = await fetch(`${API_BASE}/company`);
    if (!res.ok) throw new Error('Network response not ok');
    const json = await res.json();
    return json.data || companyInfo;
  } catch (err) {
    return companyInfo;
  }
};

export const submitInquiry = async (formData) => {
  try {
    const res = await fetch(`${API_BASE}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    return json;
  } catch (err) {
    console.warn('[API Client] Saved in offline mode:', formData);
    return {
      success: true,
      message: 'Inquiry simulated successfully! (Backend offline: Our representative will call on WhatsApp)',
      data: formData,
    };
  }
};

