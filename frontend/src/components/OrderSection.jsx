import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle, Package, ArrowLeft } from 'lucide-react';
import { submitInquiry } from '../services/api.js';

export default function OrderSection({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    inquiryType: 'Kit Purchase',
    selectedItem: 'Robotic ARM Kit',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const kitOptions = [
    'Robotic ARM Kit',
    'Soccer Robot Kit',
    'All Terrain Robot Kit',
    'Maze Solver Kit',
    'Fighting Robot Kit',
    'Custom / College Lab Package (20+ Kits)',
    'CLAD/CLD/CLA Internship Enrollment',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const kitAmounts = {
      'Robotic ARM Kit': 8999,
      'Soccer Robot Kit': 9499,
      'All Terrain Robot Kit': 10499,
      'Maze Solver Kit': 7999,
      'Fighting Robot Kit': 11499,
      'Custom / College Lab Package (20+ Kits)': 125000,
      'CLAD/CLD/CLA Internship Enrollment': 4500,
    };

    const newOrderRecord = {
      id: `ORD-${Date.now().toString().slice(-4)}`,
      customerName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      institution: formData.institution ? formData.institution.trim() : 'Individual Student / Institution',
      robotKit: formData.selectedItem || 'Robotic ARM Kit',
      packageType: formData.inquiryType || 'Kit Purchase',
      quantity: 1,
      amount: kitAmounts[formData.selectedItem] || 8999,
      status: 'Confirmed',
      date: new Date().toLocaleDateString('en-US'),
      notes: formData.message && formData.message.trim() ? formData.message.trim() : `Online order placed for ${formData.selectedItem || 'Robotics Kit'}.`,
    };

    // 1. Save directly into localStorage for instant admin dashboard reflection
    try {
      const existingRaw = localStorage.getItem('aadhyaa_orders_data');
      let existingList = [];
      if (existingRaw) {
        try {
          existingList = JSON.parse(existingRaw);
        } catch (err) {}
      }
      const updated = [newOrderRecord, ...existingList.filter(o => o.phone !== newOrderRecord.phone || o.robotKit !== newOrderRecord.robotKit)];
      localStorage.setItem('aadhyaa_orders_data', JSON.stringify(updated));
    } catch (err) {
      console.warn('[OrderSection] Local storage sync error:', err);
    }

    // 2. Transmit to Render / MongoDB backend
    try {
      await submitInquiry({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        institution: formData.institution ? formData.institution.trim() : 'Individual Student / Institution',
        inquiryType: formData.inquiryType || 'Kit Purchase',
        selectedItem: formData.selectedItem || 'Robotic ARM Kit',
        message: formData.message && formData.message.trim() ? formData.message.trim() : `Online order placed for ${formData.selectedItem || 'Robotics Kit'}.`,
      });
    } catch (err) {
      console.warn('[OrderSection] Backend transmission error:', err);
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="page-turn-enter" style={{ padding: '60px 0 80px' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrap">
          <div className="badge-tag badge-gold">
            <Package size={14} /> Direct Ordering & WhatsApp Support
          </div>
          <h2 className="section-title orbitron">Order Your Aadhyaa Skills Kit</h2>
          <p className="section-subtitle">
            Order directly via WhatsApp for fastest instant dispatch, or submit your details below to receive a formal quotation and invoice.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '36px',
          alignItems: 'start',
        }} className="order-split-grid">
          
          {/* Left Column: Direct WhatsApp Ordering Hub */}
          <div>
            <div className="glass-panel" style={{
              padding: '36px',
              border: '2px solid rgba(37, 211, 102, 0.4)',
              background: '#f0fdf4',
              marginBottom: '24px',
              boxShadow: '0 8px 30px rgba(37, 211, 102, 0.1)',
            }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                  flexShrink: 0,
                }}>
                  <MessageSquare size={28} />
                </div>
                <div>
                  <div className="orbitron" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                    Official WhatsApp Order Desk
                  </div>
                  <div className="rajdhani" style={{ color: '#16a34a', fontWeight: 700, fontSize: '1.25rem' }}>
                    +91 96771 31092
                  </div>
                </div>
              </div>

              <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Click any kit below to open an instant pre-filled WhatsApp chat with our R&D dispatch team:
              </p>

              {/* 1-Click WhatsApp Quick Order Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {[
                  { name: 'Robotic ARM Kit', msg: 'Hi, I want to order the Robotic ARM Kit.' },
                  { name: 'Soccer Robot Kit', msg: 'Hi, I want to order the Soccer Robot Kit.' },
                  { name: 'All Terrain Robot Kit', msg: 'Hi, I want to order the All Terrain Robot Kit.' },
                  { name: 'Maze Solvers Kit', msg: 'Hi, I want to order the Maze Solvers Kit.' },
                  { name: 'Fighting Robot Kit', msg: 'Hi, I want to order the Fighting Robot Kit.' },
                  { name: 'College Lab Setup (20+ Kits)', msg: 'Hi, we want to inquire about the Institutional College Lab Setup (20+ Kits).' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/919677131092?text=${encodeURIComponent(item.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 18px',
                      borderRadius: '8px',
                      background: '#ffffff',
                      border: '1.5px solid #bbf7d0',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                      transition: 'all 0.2s',
                    }}
                    className="rajdhani"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#22c55e';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#bbf7d0';
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                    }}
                  >
                    <span>⚡ Order {item.name}</span>
                    <span style={{ color: '#16a34a', fontWeight: 700 }}>WhatsApp Chat →</span>
                  </a>
                ))}
              </div>

              {/* Direct Calling */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid #bbf7d0',
              }}>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  Prefer a direct phone conversation?
                </div>
                <a
                  href="tel:+919677131092"
                  className="btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                >
                  <Phone size={14} style={{ color: 'var(--accent-cyan)' }} />
                  Call: +91 96771 31092
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Order / Inquiry Submission Form (Saved to MongoDB Atlas) */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 className="orbitron" style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: 800, marginBottom: '6px' }}>
              Online Order & Quotation Request
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Submit your kit requirements and our logistics team will respond with dispatch schedule and invoice details.
            </p>

            {submitted ? (
              <div style={{
                padding: '28px',
                background: '#f0fdf4',
                border: '1.5px solid #86efac',
                borderRadius: '12px',
                textAlign: 'center',
              }}>
                <CheckCircle size={44} style={{ color: 'var(--accent-emerald)', margin: '0 auto 12px' }} />
                <h4 className="orbitron" style={{ color: '#0f172a', fontSize: '1.2rem', marginBottom: '8px' }}>
                  Order Request Received!
                </h4>
                <p style={{ color: '#334155', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Your request has been logged into our system. Our team will contact you via WhatsApp / Phone at <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Place Another Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', fontWeight: 700, marginBottom: '6px' }} className="rajdhani">
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '8px',
                      color: '#0f172a',
                      outline: 'none',
                      fontSize: '0.92rem',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', fontWeight: 700, marginBottom: '6px' }} className="rajdhani">
                      WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '8px',
                        color: '#0f172a',
                        outline: 'none',
                        fontSize: '0.92rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', fontWeight: 700, marginBottom: '6px' }} className="rajdhani">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@gmail.com"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#ffffff',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '8px',
                        color: '#0f172a',
                        outline: 'none',
                        fontSize: '0.92rem',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', fontWeight: 700, marginBottom: '6px' }} className="rajdhani">
                    SELECT THE KIT YOU WANT TO ORDER *
                  </label>
                  <select
                    name="selectedItem"
                    value={formData.selectedItem}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '8px',
                      color: '#0f172a',
                      outline: 'none',
                      fontSize: '0.92rem',
                    }}
                  >
                    {kitOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', fontWeight: 700, marginBottom: '6px' }} className="rajdhani">
                    COLLEGE / INSTITUTION (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="e.g. Anna University / IIT / Polytechnic"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '8px',
                      color: '#0f172a',
                      outline: 'none',
                      fontSize: '0.92rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', fontWeight: 700, marginBottom: '6px' }} className="rajdhani">
                    MESSAGE / DELIVERY ADDRESS / QUESTIONS
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us your shipping city or any custom questions..."
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '8px',
                      color: '#0f172a',
                      outline: 'none',
                      fontSize: '0.92rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
                >
                  <Send size={16} />
                  {loading ? 'Submitting to R&D Team...' : 'Submit Order Request'}
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Page Turn Navigation Footer */}
        <div className="page-turn-footer">
          <button
            onClick={() => onNavigate('internship')}
            className="btn-secondary"
            style={{ padding: '10px 18px', fontSize: '0.88rem' }}
          >
            <ArrowLeft size={14} /> ⟵ Page 4: Internship
          </button>
          
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Page 5 of 5: <strong>Direct WhatsApp Order Desk</strong>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="btn-gold"
            style={{ padding: '10px 20px', fontSize: '0.88rem' }}
          >
            Turn Back to: Home ⟲
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .order-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
