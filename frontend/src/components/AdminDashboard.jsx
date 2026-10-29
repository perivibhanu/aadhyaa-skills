import React, { useState, useEffect } from 'react';
import {
  Users,
  ShoppingBag,
  Video,
  Download,
  LogOut,
  Search,
  Plus,
  Trash2,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
  MessageSquare,
  Phone,
  Upload,
  Play,
  FileVideo,
  RotateCcw,
  Check,
  Eye,
  X,
  Film,
  Lock,
  ShieldCheck,
  Calendar,
  Building,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import BrandLogo from './BrandLogo.jsx';

// Default initial student data (matching screenshot reference)
const initialStudents = [
  {
    id: 'stu-01',
    name: 'Bhanu Prakash',
    email: 'bhanu.perivi@gmail.com',
    phone: '07032055712',
    course: 'CLD',
    category: 'CLD',
    feeStatus: 'Unpaid',
    feeAmount: 4500,
    date: '9/25/2026',
    college: 'Sastra Deemed University, Thanjavur',
    semester: '7th Semester B.Tech ECE',
    status: 'In Progress',
    notes: 'Preparing for NI Certified LabVIEW Developer exam. Needs core DAQ interfacing module.',
  },
  {
    id: 'stu-02',
    name: 'Bhanu Prakash',
    email: 'bhanu.perivi@gmail.com',
    phone: '+917032055712',
    course: 'CLAD',
    category: 'CLAD',
    feeStatus: 'Unpaid',
    feeAmount: 2500,
    date: '9/25/2026',
    college: 'Sastra Deemed University, Thanjavur',
    semester: '7th Semester B.Tech ECE',
    status: 'Completed',
    notes: 'Completed 40-hour foundational LabVIEW programming course.',
  },
  {
    id: 'stu-03',
    name: 'Priya Dharshini R',
    email: 'priyadharshini.r@yahoo.com',
    phone: '+91 91763 44521',
    course: 'Custom Project Development',
    category: 'Custom Project Development',
    feeStatus: 'Paid',
    feeAmount: 8500,
    date: '10/02/2026',
    college: 'College of Engineering Guindy (Anna University)',
    semester: '8th Semester B.E Mechatronics',
    status: 'In Progress',
    notes: 'Autonomous omnidirectional wheeled rover with LabVIEW vision processing capstone.',
  },
  {
    id: 'stu-04',
    name: 'Aravind Swamy',
    email: 'aravind.robotics@gmail.com',
    phone: '+91 98402 11984',
    course: 'Hardware Integration',
    category: 'Hardware Integration',
    feeStatus: 'Paid',
    feeAmount: 6000,
    date: '10/08/2026',
    college: 'PSG College of Technology, Coimbatore',
    semester: '6th Semester B.E Mechanical',
    status: 'In Progress',
    notes: 'Interfacing multi-axis stepper drivers and load sensors with myRIO FPGA.',
  },
  {
    id: 'stu-05',
    name: 'Divya Lakshmi',
    email: 'divya.ece@veltech.edu.in',
    phone: '+91 94431 88290',
    course: 'LabVIEW Consulting',
    category: 'LabVIEW Consulting',
    feeStatus: 'Unpaid',
    feeAmount: 5000,
    date: '10/14/2026',
    college: 'Vel Tech Rangarajan Dr. Sagunthala R&D',
    semester: 'M.Tech Embedded Systems',
    status: 'Pending',
    notes: 'Industrial automation state machine architecture & queued message handler design.',
  },
  {
    id: 'stu-06',
    name: 'Vigneshwaran K',
    email: 'vignesh.k@srmist.edu.in',
    phone: '+91 97890 34120',
    course: 'TestStand Solutions',
    category: 'TestStand Solutions',
    feeStatus: 'Paid',
    feeAmount: 12000,
    date: '10/19/2026',
    college: 'SRM Institute of Science and Technology',
    semester: 'Alumni / Core Engineer',
    status: 'Completed',
    notes: 'Automated test fixture sequence generation for production PCB testing.',
  },
];

// Initial Orders Data (Hardware Kits ordered by colleges / students)
const initialOrders = [
  {
    id: 'ORD-901',
    customerName: 'Karthik Subramanian',
    email: 'karthik.s@gmail.com',
    phone: '+91 98402 11452',
    institution: 'PSG College of Technology, Coimbatore',
    robotKit: 'Robotic ARM',
    packageType: 'Pro Kit (6-DOF + Servos + Arduino)',
    quantity: 2,
    amount: 17998,
    status: 'Confirmed',
    date: '10/24/2026',
    notes: 'Participating in National Robotics Championship. Urgently required for team trial.',
  },
  {
    id: 'ORD-902',
    customerName: 'Dr. Anand Kumar (HOD ECE)',
    email: 'anand.ece@veltech.edu.in',
    phone: '+91 94431 88290',
    institution: 'Vel Tech Rangarajan Dr. Sagunthala R&D',
    robotKit: 'Institutional Lab Bundle (5 Kits)',
    packageType: 'All 5 Robot Kits (ARM, Soccer, Rover, Maze, Combat)',
    quantity: 5,
    amount: 54990,
    status: 'In Production',
    date: '10/22/2026',
    notes: 'Official COE Lab procurement for 60-seat robotics batch.',
  },
  {
    id: 'ORD-903',
    customerName: 'Venkatesh Rao',
    email: 'venkat.combat@outlook.com',
    phone: '+91 98840 92314',
    institution: 'SRM Institute of Science and Technology',
    robotKit: 'Fighting Robot',
    packageType: 'Combat Spinner Kit + 60A ESC & Radio',
    quantity: 1,
    amount: 11499,
    status: 'Dispatched',
    date: '10/18/2026',
    notes: 'Waybill tracking shared via WhatsApp. Expected delivery in 48 hours.',
  },
  {
    id: 'ORD-904',
    customerName: 'Rahul Sharma',
    email: 'rahul.s@iitm.ac.in',
    phone: '+91 99620 44102',
    institution: 'IIT Madras Center for Innovation',
    robotKit: 'Maze Solvers',
    packageType: 'Micromouse Autonomous Kit (Coreless Motors + IR Array)',
    quantity: 2,
    amount: 15998,
    status: 'Delivered',
    date: '10/12/2026',
    notes: 'Delivered and verified. Student requested additional algorithms guide.',
  },
];

// 5 Kits configuration
const initialKitVideos = {
  'robotic-arm': {
    title: 'Robotic ARM',
    subtitle: 'Multi-Axis Precision Manipulator',
    demoVideo: 'https://www.youtube-nocookie.com/embed/rP3n_38Zzfk?rel=0',
    assemblyVideo: 'https://www.youtube-nocookie.com/embed/xLzYh501XFk?rel=0',
    demoDuration: '6m 45s',
    assemblyDuration: '9m 20s',
    chapters: [
      { time: '00:00', title: 'Kit Unboxing & Servo Test' },
      { time: '01:50', title: 'Base Swivel & Arm Joint Assembly' },
      { time: '03:45', title: 'Wiring MG996R Servos to Driver' },
      { time: '05:20', title: 'Kinematics & Arduino Flash' },
    ],
    lastUpdated: '10/26/2026',
  },
  'soccer-robot': {
    title: 'Soccer Robot',
    subtitle: 'Agile RoboSoccer Striker & Goalie',
    demoVideo: 'https://www.youtube-nocookie.com/embed/8rW3f99G_tM?rel=0',
    assemblyVideo: 'https://www.youtube-nocookie.com/embed/qg_hWpB7n-k?rel=0',
    demoDuration: '5m 18s',
    assemblyDuration: '8m 10s',
    chapters: [
      { time: '00:00', title: 'Omni Wheels & Gearmotor Fit' },
      { time: '01:30', title: 'Solenoid Dribbler & Kicker Link' },
      { time: '03:10', title: 'Wireless PS2/Bluetooth Setup' },
      { time: '04:40', title: 'Field Maneuver & Shoot Test' },
    ],
    lastUpdated: '10/25/2026',
  },
  'all-terrain-robot': {
    title: 'All Terrain Robot',
    subtitle: 'Rocker-Bogie Rugged Rover',
    demoVideo: 'https://www.youtube-nocookie.com/embed/7zpojhD4hpI?rel=0',
    assemblyVideo: 'https://www.youtube-nocookie.com/embed/g0TaYhjpOfo?rel=0',
    demoDuration: '7m 10s',
    assemblyDuration: '11m 40s',
    chapters: [
      { time: '00:00', title: 'Rocker-Bogie Differential Joint' },
      { time: '02:15', title: '6-Wheel Planetary Geared Motors' },
      { time: '04:30', title: 'Dual Motor Driver & LiPo Rail' },
      { time: '06:05', title: '45° Slope & Obstacle Clearance' },
    ],
    lastUpdated: '10/24/2026',
  },
  'maze-solvers': {
    title: 'Maze Solvers',
    subtitle: 'Autonomous Flood-Fill Micromouse',
    demoVideo: 'https://www.youtube-nocookie.com/embed/ZMQbHMgK2rw?rel=0',
    assemblyVideo: 'https://www.youtube-nocookie.com/embed/0G_j8h-m3hM?rel=0',
    demoDuration: '8m 25s',
    assemblyDuration: '10m 15s',
    chapters: [
      { time: '00:00', title: 'Ultrasonic & IR Sensor Array Mount' },
      { time: '02:00', title: 'Coreless DC Motor & Encoders' },
      { time: '04:15', title: 'Flood-Fill 16x16 Maze Algorithm' },
      { time: '07:00', title: 'High-Speed Autonomous Run' },
    ],
    lastUpdated: '10/27/2026',
  },
  'fighting-robot': {
    title: 'Fighting Robot',
    subtitle: 'Combat RoboWars Rotary Spinner',
    demoVideo: 'https://www.youtube-nocookie.com/embed/8Ksdq3VdK7Y?rel=0',
    assemblyVideo: 'https://www.youtube-nocookie.com/embed/5F_P68D2bW0?rel=0',
    demoDuration: '6m 02s',
    assemblyDuration: '8m 45s',
    chapters: [
      { time: '00:00', title: 'Hardened Steel Chassis & Armor' },
      { time: '01:45', title: 'Brushless Outrunner Weapon Motor' },
      { time: '03:30', title: '60A ESC & Radio Transmitter Link' },
      { time: '05:10', title: 'Spinner RPM & Impact Demo' },
    ],
    lastUpdated: '10/28/2026',
  },
};

export default function AdminDashboard({ onNavigate }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('aadhyaa_admin_auth') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [username, setUsername] = useState('admin@aadhyaaskill.com');
  const [password, setPassword] = useState('aadhyaa@2026');
  const [loginError, setLoginError] = useState('');

  // Main Active Tab: 'students' | 'orders' | 'kit'
  const [activeTab, setActiveTab] = useState('students');

  // Student Portal State
  const [studentCategory, setStudentCategory] = useState('All Students');
  const [studentSearch, setStudentSearch] = useState('');
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem('aadhyaa_students_data');
      return saved ? JSON.parse(saved) : initialStudents;
    } catch (e) {
      return initialStudents;
    }
  });
  const [selectedStudentModal, setSelectedStudentModal] = useState(null);

  // Orders State
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('All');
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('aadhyaa_orders_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return initialOrders;
    } catch (e) {
      return initialOrders;
    }
  });
  const [selectedOrderModal, setSelectedOrderModal] = useState(null);
  const [isRefreshingOrders, setIsRefreshingOrders] = useState(false);

  // Kit Video Management State
  const [selectedKitSlug, setSelectedKitSlug] = useState('robotic-arm');
  const [videoSlot, setVideoSlot] = useState('demo'); // 'demo' | 'assembly'
  const [uploadOption, setUploadOption] = useState('youtube'); // 'youtube' | 'file' | 'url'
  const [youtubeInput, setYoutubeInput] = useState('');
  const [directUrlInput, setDirectUrlInput] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [videoTitleInput, setVideoTitleInput] = useState('');
  const [videoDurationInput, setVideoDurationInput] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const [kitVideos, setKitVideos] = useState(() => {
    try {
      const saved = localStorage.getItem('aadhyaa_custom_videos');
      return saved ? JSON.parse(saved) : initialKitVideos;
    } catch (e) {
      return initialKitVideos;
    }
  });

  // Keep local storage synced
  useEffect(() => {
    try {
      localStorage.setItem('aadhyaa_students_data', JSON.stringify(students));
    } catch (e) {}
  }, [students]);

  useEffect(() => {
    try {
      localStorage.setItem('aadhyaa_orders_data', JSON.stringify(orders));
    } catch (e) {}
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('aadhyaa_custom_videos', JSON.stringify(kitVideos));
    } catch (e) {}
  }, [kitVideos]);

  // Load backend leads from Render / MongoDB
  const fetchBackendLeads = async () => {
    setIsRefreshingOrders(true);
    try {
      const backendBase = import.meta.env.VITE_API_URL
        ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/api/inquiries`
        : (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
            ? 'https://aadhyaa-skills.onrender.com/api/inquiries'
            : '/api/inquiries');

      const res = await fetch(backendBase);
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        const kitAmounts = {
          'Robotic ARM': 8999,
          'Robotic ARM Kit': 8999,
          'Soccer Robot': 9499,
          'Soccer Robot Kit': 9499,
          'All Terrain Robot': 10499,
          'All Terrain Robot Kit': 10499,
          'Maze Solvers': 7999,
          'Maze Solver Kit': 7999,
          'Fighting Robot': 11499,
          'Fighting Robot Kit': 11499,
          'Custom / College Lab Package (20+ Kits)': 125000,
          'CLAD/CLD/CLA Internship Enrollment': 4500,
        };

        const backendOrders = data.data.map((inq, idx) => ({
          id: inq._id ? `ORD-${inq._id.toString().slice(-4).toUpperCase()}` : (inq.id || `ORD-${850 + idx}`),
          customerName: inq.fullName,
          email: inq.email,
          phone: inq.phone,
          institution: inq.institution || 'Individual Student / Institution',
          robotKit: inq.selectedItem || 'Robotic ARM Kit',
          packageType: inq.inquiryType || 'Kit Purchase',
          quantity: 1,
          amount: kitAmounts[inq.selectedItem] || 8999,
          status: inq.status === 'New' ? 'Confirmed' : (inq.status || 'Confirmed'),
          date: inq.createdAt ? new Date(inq.createdAt).toLocaleDateString('en-US') : new Date().toLocaleDateString('en-US'),
          notes: inq.message || 'Direct inquiry from website.',
        }));

        setOrders((prev) => {
          const existingKeys = new Set(prev.map((o) => `${o.phone}_${o.robotKit}`));
          const newOnes = backendOrders.filter((o) => !existingKeys.has(`${o.phone}_${o.robotKit}`));
          const merged = [...newOnes, ...prev];
          try {
            localStorage.setItem('aadhyaa_orders_data', JSON.stringify(merged));
          } catch (e) {}
          return merged;
        });
      }
    } catch (err) {
      console.warn('Backend leads sync notice:', err.message);
    } finally {
      setIsRefreshingOrders(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchBackendLeads();
      const timer = setInterval(fetchBackendLeads, 12000);
      return () => clearInterval(timer);
    }
  }, [isAuthenticated]);

  // Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Login handler
  const handleLogin = (e) => {
    if (e) e.preventDefault();
    if (
      (username === 'admin@aadhyaaskill.com' || username === 'admin') &&
      (password === 'aadhyaa@2026' || password === 'admin' || password === 'admin123')
    ) {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem('aadhyaa_admin_auth', 'true');
      } catch (e) {}
      setLoginError('');
    } else {
      setLoginError('Invalid admin email or password.');
    }
  };

  // Logout handler
  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem('aadhyaa_admin_auth');
    } catch (e) {}
  };

  // Export Sheets (CSV Download)
  const downloadCSV = (type) => {
    let headers = [];
    let rows = [];
    let filename = '';

    if (type === 'students') {
      filename = `Aadhyaa_Skills_Students_${new Date().toISOString().slice(0, 10)}.csv`;
      headers = ['Name', 'Email', 'Phone', 'Course', 'College', 'Fee Status', 'Fee Amount (INR)', 'Date', 'Status', 'Notes'];
      rows = students.map((s) => [
        `"${s.name}"`,
        `"${s.email}"`,
        `"${s.phone}"`,
        `"${s.course}"`,
        `"${s.college}"`,
        `"${s.feeStatus}"`,
        `"${s.feeAmount}"`,
        `"${s.date}"`,
        `"${s.status}"`,
        `"${s.notes.replace(/"/g, '""')}"`,
      ]);
    } else {
      filename = `Aadhyaa_Skills_Kit_Orders_${new Date().toISOString().slice(0, 10)}.csv`;
      headers = ['Order ID', 'Customer Name', 'Email', 'Phone', 'Institution', 'Robot Kit', 'Package', 'Qty', 'Amount (INR)', 'Status', 'Date'];
      rows = orders.map((o) => [
        `"${o.id}"`,
        `"${o.customerName}"`,
        `"${o.email}"`,
        `"${o.phone}"`,
        `"${o.institution}"`,
        `"${o.robotKit}"`,
        `"${o.packageType}"`,
        `"${o.quantity}"`,
        `"${o.amount}"`,
        `"${o.status}"`,
        `"${o.date}"`,
      ]);
    }

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloaded ${filename} successfully!`);
  };

  // Toggle Student Status
  const toggleStudentStatus = (id) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const nextStatus = s.status === 'Completed' ? 'In Progress' : 'Completed';
          return { ...s, status: nextStatus };
        }
        return s;
      })
    );
    showToast('Student completion status updated.');
  };

  // Toggle Student Fee
  const toggleStudentFee = (id) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const nextFee = s.feeStatus === 'Paid' ? 'Unpaid' : 'Paid';
          return { ...s, feeStatus: nextFee };
        }
        return s;
      })
    );
    showToast('Student fee status updated.');
  };

  // Update Order Status
  const updateOrderStatus = (id, newStatus) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
    showToast(`Order #${id} marked as "${newStatus}"`);
  };

  // Delete Order
  const deleteOrder = (id) => {
    if (window.confirm(`Delete order record #${id}?`)) {
      setOrders((prev) => prev.filter((o) => o.id !== id));
      showToast(`Order #${id} deleted.`);
    }
  };

  // Video Save Handler
  const handleSaveVideo = () => {
    let videoUrl = '';

    if (uploadOption === 'youtube') {
      if (!youtubeInput.trim()) {
        alert('Please enter a YouTube link or embed ID.');
        return;
      }
      let match = youtubeInput.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      let videoId = match ? match[1] : youtubeInput.trim();
      videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
    } else if (uploadOption === 'file') {
      if (!directUrlInput.trim()) {
        alert('Please select or upload a video file first.');
        return;
      }
      videoUrl = directUrlInput;
    } else {
      if (!directUrlInput.trim()) {
        alert('Please enter a valid direct video stream URL.');
        return;
      }
      videoUrl = directUrlInput.trim();
    }

    setKitVideos((prev) => {
      const current = prev[selectedKitSlug] || initialKitVideos[selectedKitSlug];
      const updated = {
        ...current,
        [videoSlot === 'demo' ? 'demoVideo' : 'assemblyVideo']: videoUrl,
        [videoSlot === 'demo' ? 'demoDuration' : 'assemblyDuration']: videoDurationInput.trim() || current[videoSlot === 'demo' ? 'demoDuration' : 'assemblyDuration'],
        lastUpdated: new Date().toLocaleDateString('en-US'),
      };
      return {
        ...prev,
        [selectedKitSlug]: updated,
      };
    });

    showToast(`✅ Video for ${initialKitVideos[selectedKitSlug]?.title} (${videoSlot === 'demo' ? 'Live Demo' : 'Assembly'}) published to Kit Page!`);
  };

  // Handle local video file pick
  const handleVideoFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setDirectUrlInput(objectUrl);
      setUploadedFileName(`${file.name} (${(file.size / (1024 * 1024)).toFixed(1)} MB)`);
      showToast(`Loaded ${file.name} for preview!`);
    }
  };

  // Filtered Students
  const filteredStudents = students.filter((s) => {
    const matchesCat = studentCategory === 'All Students' || s.category === studentCategory;
    const q = studentSearch.toLowerCase();
    const matchesQuery =
      s.name.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      s.phone.includes(q) ||
      s.course.toLowerCase().includes(q) ||
      s.college.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  // Filtered Orders
  const filteredOrders = orders.filter((o) => {
    const matchesStatus = orderStatusFilter === 'All' || o.status === orderStatusFilter;
    const q = orderSearch.toLowerCase();
    const matchesQuery =
      o.customerName.toLowerCase().includes(q) ||
      o.email.toLowerCase().includes(q) ||
      o.phone.includes(q) ||
      o.robotKit.toLowerCase().includes(q) ||
      o.institution.toLowerCase().includes(q);
    return matchesStatus && matchesQuery;
  });

  // Current selected kit in Video Manager
  const activeKitObj = kitVideos[selectedKitSlug] || initialKitVideos[selectedKitSlug];
  const activeVideoSrc = videoSlot === 'demo' ? activeKitObj.demoVideo : activeKitObj.assemblyVideo;

  // =========================================================================
  // VIEW: AUTHENTICATION LOCK
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div style={{ padding: '70px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            maxWidth: '440px',
            width: '100%',
            background: 'var(--bg-card)',
            border: '1.5px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '40px 32px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              background: 'rgba(239, 68, 68, 0.12)',
              color: '#ef4444',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
            }}
          >
            <ShieldCheck size={32} />
          </div>

          <BrandLogo isDarkText={true} />

          <h2 className="orbitron" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', margin: '14px 0 6px' }}>
            Aadhyaa Admin Portal
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Authorized access for Student Data, Hardware Orders & Kit Video management.
          </p>

          {loginError && (
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '10px', borderRadius: '8px', fontSize: '0.82rem', marginBottom: '16px' }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '5px' }}>
                Admin Email / Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '5px' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                background: '#ef4444',
                color: '#ffffff',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '8px',
                boxShadow: '0 4px 14px rgba(239, 68, 68, 0.3)',
              }}
            >
              <Lock size={16} /> Unlock Admin Dashboard
            </button>
          </form>

          <div style={{ marginTop: '22px', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
            Credentials: <code>admin@aadhyaaskill.com</code> | <code>aadhyaa@2026</code>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW: MAIN ADMIN DASHBOARD (Matching screenshot structure)
  // =========================================================================
  return (
    <div style={{ minHeight: 'calc(100vh - 74px)', background: 'var(--bg-primary)', display: 'flex' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            background: '#0f172a',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '10px',
            fontSize: '0.88rem',
            fontWeight: 600,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <Sparkles size={16} style={{ color: '#fbbf24' }} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* LEFT SIDEBAR (Matching Labvora / Reference screenshot layout) */}
      <aside
        style={{
          width: '270px',
          background: '#ffffff',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px 16px',
          flexShrink: 0,
        }}
      >
        <div>
          {/* Admin Header Title */}
          <div style={{ padding: '0 10px 24px', borderBottom: '1px solid #f1f5f9' }}>
            <h1
              className="orbitron"
              style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#0f172a',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: '#ef4444' }}>Aadhyaa</span> Admin
            </h1>
            <p style={{ fontSize: '0.74rem', color: '#64748b', margin: '4px 0 0' }}>
              R&D Management Desk
            </p>
          </div>

          {/* Navigation Items (Student Portal, Orders, Kit) */}
          <nav style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            
            {/* 1. Student Portal */}
            <div>
              <button
                onClick={() => setActiveTab('students')}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: 'none',
                  background: activeTab === 'students' ? '#ef4444' : 'transparent',
                  color: activeTab === 'students' ? '#ffffff' : '#334155',
                  fontWeight: activeTab === 'students' ? 700 : 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  boxShadow: activeTab === 'students' ? '0 4px 14px rgba(239, 68, 68, 0.25)' : 'none',
                }}
              >
                <Users size={18} />
                <span>Student Portal</span>
              </button>

              {/* Sub-categories under Student Portal (Exactly from screenshot reference) */}
              {activeTab === 'students' && (
                <div style={{ padding: '10px 0 8px 38px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[
                    'All Students',
                    'CLAD',
                    'CLD',
                    'Custom Project Development',
                    'LabVIEW Consulting',
                    'Hardware Integration',
                    'TestStand Solutions',
                  ].map((cat) => {
                    const isSelected = studentCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setStudentCategory(cat)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: isSelected ? '#ef4444' : '#64748b',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.82rem',
                          textAlign: 'left',
                          padding: '4px 0',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {isSelected && <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ef4444' }} />}
                        <span>{cat}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. Orders */}
            <button
              onClick={() => setActiveTab('orders')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === 'orders' ? '#ef4444' : 'transparent',
                color: activeTab === 'orders' ? '#ffffff' : '#334155',
                fontWeight: activeTab === 'orders' ? 700 : 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
                boxShadow: activeTab === 'orders' ? '0 4px 14px rgba(239, 68, 68, 0.25)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShoppingBag size={18} />
                <span>Orders</span>
              </div>
              <span
                style={{
                  background: activeTab === 'orders' ? 'rgba(255,255,255,0.25)' : '#e2e8f0',
                  color: activeTab === 'orders' ? '#ffffff' : '#475569',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                }}
              >
                {orders.length}
              </span>
            </button>

            {/* 3. Kit (Video Upload & Management Options) */}
            <button
              onClick={() => setActiveTab('kit')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === 'kit' ? '#ef4444' : 'transparent',
                color: activeTab === 'kit' ? '#ffffff' : '#334155',
                fontWeight: activeTab === 'kit' ? 700 : 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
                boxShadow: activeTab === 'kit' ? '0 4px 14px rgba(239, 68, 68, 0.25)' : 'none',
              }}
            >
              <Video size={18} />
              <span>Kit (Video Upload)</span>
            </button>

          </nav>
        </div>

        {/* Bottom Sidebar: User info & Logout */}
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '8px' }}>
            Logged in as: <strong style={{ color: '#0f172a' }}>Admin</strong>
          </div>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              color: '#334155',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT AREA */}
      <main style={{ flex: 1, padding: '32px 40px', overflowY: 'auto' }}>

        {/* =================================================================== */}
        {/* TAB 1: STUDENT PORTAL (Exact replication of user reference)        */}
        {/* =================================================================== */}
        {activeTab === 'students' && (
          <div>
            {/* Top Bar: Title & Download Sheets Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
                  Student Portal
                </h2>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Filter: <strong style={{ color: '#ef4444' }}>{studentCategory}</strong> ({filteredStudents.length} Students)
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button
                  onClick={() => downloadCSV('students')}
                  style={{
                    background: '#ef4444',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.25)',
                  }}
                >
                  <Download size={16} /> Download Sheets
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: '20px', position: 'relative', maxWidth: '420px' }}>
              <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search by student name, email, phone, college..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Students Table (Matching reference: Name, Email, Course, Fee, Date, Action) */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                overflow: 'hidden',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.84rem', fontWeight: 700 }}>
                    <th style={{ padding: '16px 20px' }}>Name</th>
                    <th style={{ padding: '16px 20px' }}>Email & Phone</th>
                    <th style={{ padding: '16px 20px' }}>Course</th>
                    <th style={{ padding: '16px 20px' }}>Fee (₹)</th>
                    <th style={{ padding: '16px 20px' }}>Date</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                        No students found matching current filter or search.
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((s) => (
                      <tr key={s.id} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '0.9rem', color: '#0f172a' }}>
                        
                        {/* Name */}
                        <td style={{ padding: '16px 20px', fontWeight: 600 }}>
                          <div>{s.name}</div>
                          <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 400 }}>{s.college}</div>
                        </td>

                        {/* Email & Phone */}
                        <td style={{ padding: '16px 20px' }}>
                          <div style={{ color: '#0f172a' }}>{s.email}</div>
                          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{s.phone}</div>
                        </td>

                        {/* Course (Red bold text like screenshot) */}
                        <td style={{ padding: '16px 20px' }}>
                          <span style={{ fontWeight: 800, color: '#ef4444' }}>
                            {s.course}
                          </span>
                        </td>

                        {/* Fee Status (Unpaid soft pill or Paid) */}
                        <td style={{ padding: '16px 20px' }}>
                          <button
                            onClick={() => toggleStudentFee(s.id)}
                            style={{
                              background: s.feeStatus === 'Paid' ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.1)',
                              color: s.feeStatus === 'Paid' ? '#16a34a' : '#ef4444',
                              border: 'none',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                            }}
                            title="Click to toggle Paid/Unpaid"
                          >
                            {s.feeStatus}
                          </button>
                        </td>

                        {/* Date */}
                        <td style={{ padding: '16px 20px', color: '#475569', fontSize: '0.85rem' }}>
                          {s.date}
                        </td>

                        {/* Actions (View & Completed buttons like screenshot) */}
                        <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                          <div style={{ display: 'inline-flex', gap: '8px' }}>
                            
                            {/* View button (Blue) */}
                            <button
                              onClick={() => setSelectedStudentModal(s)}
                              style={{
                                background: '#1e3a8a',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '6px 14px',
                                fontSize: '0.78rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                              }}
                            >
                              View
                            </button>

                            {/* Completed status button (Teal/Green) */}
                            <button
                              onClick={() => toggleStudentStatus(s.id)}
                              style={{
                                background: s.status === 'Completed' ? '#0d9488' : '#e2e8f0',
                                color: s.status === 'Completed' ? '#ffffff' : '#334155',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '6px 12px',
                                fontSize: '0.78rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                              }}
                            >
                              {s.status === 'Completed' ? 'Completed' : 'Mark Done'}
                            </button>

                            {/* Direct WhatsApp link */}
                            <a
                              href={`https://wa.me/${s.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(s.name)},%20Aadhyaa%20Skills%20is%20contacting%20you%20regarding%20your%20${encodeURIComponent(s.course)}%20registration.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                background: 'rgba(37, 211, 102, 0.15)',
                                color: '#16a34a',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '6px 10px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare size={14} />
                            </a>

                          </div>
                        </td>

                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: ORDERS (Kit Purchases & Quotations)                         */}
        {/* =================================================================== */}
        {activeTab === 'orders' && (
          <div>
            {/* Top Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
                  Hardware Orders & Inquiries
                </h2>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Showing {filteredOrders.length} customer orders for robotics engineer kits.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    fetchBackendLeads();
                    showToast('Fetching latest orders from database...');
                  }}
                  style={{
                    background: '#1e293b',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 18px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  }}
                  title="Pull latest inquiries and orders from database"
                >
                  <RotateCcw size={15} style={{ animation: isRefreshingOrders ? 'spin 1s linear infinite' : 'none' }} />
                  {isRefreshingOrders ? 'Syncing...' : 'Refresh Orders'}
                </button>

                <button
                  onClick={() => downloadCSV('orders')}
                  style={{
                    background: '#ef4444',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.25)',
                  }}
                >
                  <Download size={16} /> Download Sheets
                </button>
              </div>
            </div>

            {/* Filter Chips & Search Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['All', 'Confirmed', 'In Production', 'Dispatched', 'Delivered'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setOrderStatusFilter(status)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '16px',
                      border: '1px solid #cbd5e1',
                      background: orderStatusFilter === status ? '#0f172a' : '#ffffff',
                      color: orderStatusFilter === status ? '#ffffff' : '#475569',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div style={{ position: 'relative', width: '320px' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={orderSearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 36px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    fontSize: '0.86rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Orders Table */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                overflow: 'hidden',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.84rem', fontWeight: 700 }}>
                    <th style={{ padding: '16px 20px' }}>Customer & College</th>
                    <th style={{ padding: '16px 20px' }}>Robot Kit</th>
                    <th style={{ padding: '16px 20px' }}>Qty / Package</th>
                    <th style={{ padding: '16px 20px' }}>Amount (₹)</th>
                    <th style={{ padding: '16px 20px' }}>Status</th>
                    <th style={{ padding: '16px 20px' }}>Date</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                        No orders found.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((o) => (
                      <tr key={o.id} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '0.9rem', color: '#0f172a' }}>
                        
                        <td style={{ padding: '16px 20px' }}>
                          <div style={{ fontWeight: 700 }}>{o.customerName}</div>
                          <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{o.institution}</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{o.phone}</div>
                        </td>

                        <td style={{ padding: '16px 20px' }}>
                          <span style={{ fontWeight: 800, color: '#ef4444' }}>{o.robotKit}</span>
                        </td>

                        <td style={{ padding: '16px 20px', fontSize: '0.82rem', color: '#475569' }}>
                          <div><strong>Qty: {o.quantity}</strong></div>
                          <div style={{ fontSize: '0.74rem' }}>{o.packageType}</div>
                        </td>

                        <td style={{ padding: '16px 20px', fontWeight: 700, color: '#0f172a' }}>
                          ₹{o.amount.toLocaleString()}
                        </td>

                        <td style={{ padding: '16px 20px' }}>
                          <select
                            value={o.status}
                            onChange={(e) => updateOrderStatus(o.id, e.target.value)}
                            style={{
                              padding: '4px 8px',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              border: '1px solid #cbd5e1',
                              background: '#f8fafc',
                              color: '#0f172a',
                              cursor: 'pointer',
                            }}
                          >
                            <option value="Confirmed">Confirmed</option>
                            <option value="In Production">In Production</option>
                            <option value="Dispatched">Dispatched</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </td>

                        <td style={{ padding: '16px 20px', fontSize: '0.82rem', color: '#64748b' }}>
                          {o.date}
                        </td>

                        <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                          <div style={{ display: 'inline-flex', gap: '8px' }}>
                            <a
                              href={`https://wa.me/${o.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(o.customerName)},%20Aadhyaa%20Skills%20update%20for%20order%20${o.id}%20(${encodeURIComponent(o.robotKit)}).`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                background: '#25D366',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '6px 12px',
                                fontSize: '0.76rem',
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                            >
                              <MessageSquare size={13} /> WhatsApp
                            </a>

                            <button
                              onClick={() => deleteOrder(o.id)}
                              style={{
                                background: '#fee2e2',
                                color: '#ef4444',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '6px 8px',
                                cursor: 'pointer',
                              }}
                              title="Delete Order"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>

                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: KIT (VIDEO UPLOAD & OPTIONS CONSOLE)                         */}
        {/* =================================================================== */}
        {activeTab === 'kit' && (
          <div>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
                    Kit Video Management & Upload Console
                  </h2>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                    Upload or configure demonstration videos and assembly tutorials for each of the 5 engineer kits.
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (onNavigate) onNavigate('kit');
                    window.location.hash = 'kit';
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#0f172a',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <Eye size={15} /> Preview Public Kit Page
                </button>
              </div>
            </div>

            {/* 5 Robot Kit Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {[
                { slug: 'robotic-arm', name: '🤖 Robotic ARM' },
                { slug: 'soccer-robot', name: '⚽ Soccer Robot' },
                { slug: 'all-terrain-robot', name: '🚜 All Terrain Robot' },
                { slug: 'maze-solvers', name: '⚡ Maze Solvers' },
                { slug: 'fighting-robot', name: '⚔️ Fighting Robot' },
              ].map((kit) => {
                const isSelected = selectedKitSlug === kit.slug;
                return (
                  <button
                    key={kit.slug}
                    onClick={() => {
                      setSelectedKitSlug(kit.slug);
                      setYoutubeInput('');
                      setDirectUrlInput('');
                    }}
                    style={{
                      padding: '10px 18px',
                      borderRadius: '10px',
                      border: isSelected ? '2px solid #ef4444' : '1px solid #e2e8f0',
                      background: isSelected ? '#ffffff' : '#f1f5f9',
                      color: isSelected ? '#ef4444' : '#334155',
                      fontWeight: isSelected ? 800 : 600,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      boxShadow: isSelected ? '0 4px 14px rgba(239, 68, 68, 0.12)' : 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    {kit.name}
                  </button>
                );
              })}
            </div>

            {/* 2-Column Split: Upload Console on Left, Live Preview Player on Right */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '28px', marginBottom: '32px' }}>
              
              {/* Left Column: Upload Options Card */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  padding: '24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Configure Video for: <span style={{ color: '#ef4444' }}>{activeKitObj.title}</span>
                  </h3>
                </div>

                {/* 1. Target Video Slot Switcher */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px' }}>
                    1. Select Video Slot to Update:
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => setVideoSlot('demo')}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        border: videoSlot === 'demo' ? '2px solid #ef4444' : '1px solid #cbd5e1',
                        background: videoSlot === 'demo' ? 'rgba(239, 68, 68, 0.08)' : '#ffffff',
                        color: videoSlot === 'demo' ? '#ef4444' : '#475569',
                        fontWeight: 700,
                        fontSize: '0.84rem',
                        cursor: 'pointer',
                      }}
                    >
                      ▶️ Field Demonstration Video
                    </button>
                    <button
                      onClick={() => setVideoSlot('assembly')}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        border: videoSlot === 'assembly' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                        background: videoSlot === 'assembly' ? 'rgba(2, 132, 199, 0.08)' : '#ffffff',
                        color: videoSlot === 'assembly' ? '#0284c7' : '#475569',
                        fontWeight: 700,
                        fontSize: '0.84rem',
                        cursor: 'pointer',
                      }}
                    >
                      🛠️ Assembly Guide Video
                    </button>
                  </div>
                </div>

                {/* 2. Choose Upload / Input Method */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px' }}>
                    2. Choose Upload / Video Source Option:
                  </label>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                    {[
                      { id: 'youtube', label: 'Option A: YouTube Link' },
                      { id: 'file', label: 'Option B: File Upload (.mp4)' },
                      { id: 'url', label: 'Option C: Direct Stream URL' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setUploadOption(opt.id)}
                        style={{
                          flex: 1,
                          padding: '8px 10px',
                          borderRadius: '6px',
                          border: uploadOption === opt.id ? '1.5px solid #0f172a' : '1px solid #e2e8f0',
                          background: uploadOption === opt.id ? '#0f172a' : '#f8fafc',
                          color: uploadOption === opt.id ? '#ffffff' : '#64748b',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {/* Input controls based on selected option */}
                  {uploadOption === 'youtube' && (
                    <div>
                      <input
                        type="text"
                        placeholder="Paste YouTube URL (e.g. https://www.youtube.com/watch?v=...)"
                        value={youtubeInput}
                        onChange={(e) => setYoutubeInput(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.88rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                      <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '6px' }}>
                        💡 Tip: You can paste standard YouTube URLs, Shorts, or unlisted demonstration video links.
                      </div>
                    </div>
                  )}

                  {uploadOption === 'file' && (
                    <div>
                      <div
                        style={{
                          border: '2px dashed #cbd5e1',
                          borderRadius: '10px',
                          padding: '24px',
                          textAlign: 'center',
                          background: '#f8fafc',
                          cursor: 'pointer',
                        }}
                        onClick={() => document.getElementById('kit-video-file-picker').click()}
                      >
                        <Upload size={28} style={{ color: '#ef4444', marginBottom: '8px' }} />
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                          Click to browse and upload video
                        </div>
                        <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '4px' }}>
                          Supports MP4, WebM, MOV video formats (HD 1080p recommended)
                        </div>
                        <input
                          id="kit-video-file-picker"
                          type="file"
                          accept="video/*"
                          style={{ display: 'none' }}
                          onChange={handleVideoFileChange}
                        />
                      </div>
                      {uploadedFileName && (
                        <div style={{ marginTop: '10px', fontSize: '0.82rem', color: '#16a34a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <CheckCircle size={15} /> Loaded file: {uploadedFileName}
                        </div>
                      )}
                    </div>
                  )}

                  {uploadOption === 'url' && (
                    <div>
                      <input
                        type="text"
                        placeholder="Enter direct video stream URL (e.g. https://domain.com/video.mp4)"
                        value={directUrlInput}
                        onChange={(e) => setDirectUrlInput(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.88rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* 3. Duration & Metadata */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '22px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                      Video Duration (mm:ss)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 6m 45s"
                      value={videoDurationInput}
                      onChange={(e) => setVideoDurationInput(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.86rem',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                {/* Save and Publish Button */}
                <button
                  onClick={handleSaveVideo}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    background: '#ef4444',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(239, 68, 68, 0.25)',
                  }}
                >
                  <Sparkles size={16} /> Save & Publish Video to Kit Page
                </button>
              </div>

              {/* Right Column: Live Player Preview & Chapters */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  padding: '24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Play size={16} style={{ color: '#ef4444' }} /> Active Video Player Preview
                  </div>
                  <span style={{ fontSize: '0.74rem', background: '#f1f5f9', color: '#475569', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                    {videoSlot === 'demo' ? 'Live Demo Mode' : 'Assembly Tutorial Mode'}
                  </span>
                </div>

                {/* Video Container */}
                <div
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: '#090e1a',
                    aspectRatio: '16/9',
                    border: '1px solid #cbd5e1',
                    marginBottom: '16px',
                    position: 'relative',
                  }}
                >
                  {directUrlInput && uploadOption === 'file' ? (
                    <video
                      key={directUrlInput}
                      src={directUrlInput}
                      controls
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  ) : (
                    <iframe
                      key={activeVideoSrc}
                      src={activeVideoSrc}
                      title={`${activeKitObj.title} Preview`}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>

                {/* Video Chapters Information */}
                <div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                    📑 Active Video Chapters ({videoSlot === 'demo' ? activeKitObj.demoDuration : activeKitObj.assemblyDuration}):
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    {activeKitObj.chapters?.map((chap, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#334155' }}>
                        <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '1px 6px', borderRadius: '4px' }}>
                          {chap.time}
                        </span>
                        <span>{chap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Matrix of all 5 Kits Status */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                padding: '20px 24px',
              }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
                All 5 Kits Video Status Matrix
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textAlign: 'left' }}>
                      <th style={{ padding: '8px 12px' }}>Robot Kit</th>
                      <th style={{ padding: '8px 12px' }}>Live Demo Video</th>
                      <th style={{ padding: '8px 12px' }}>Assembly Video</th>
                      <th style={{ padding: '8px 12px' }}>Last Updated</th>
                      <th style={{ padding: '8px 12px', textAlign: 'center' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(kitVideos).map(([slug, data]) => (
                      <tr key={slug} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '10px 12px', fontWeight: 700, color: '#0f172a' }}>{data.title}</td>
                        <td style={{ padding: '10px 12px', color: '#16a34a' }}>✅ Configured ({data.demoDuration})</td>
                        <td style={{ padding: '10px 12px', color: '#0284c7' }}>✅ Configured ({data.assemblyDuration})</td>
                        <td style={{ padding: '10px 12px', color: '#64748b' }}>{data.lastUpdated || 'Current'}</td>
                        <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                          <button
                            onClick={() => {
                              setSelectedKitSlug(slug);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            style={{
                              background: '#f1f5f9',
                              border: '1px solid #cbd5e1',
                              borderRadius: '4px',
                              padding: '4px 10px',
                              fontSize: '0.76rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              color: '#334155',
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* =================================================================== */}
      {/* MODAL: STUDENT DETAILS MODAL (When clicking "View")                  */}
      {/* =================================================================== */}
      {selectedStudentModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedStudentModal(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '28px',
              maxWidth: '520px',
              width: '100%',
              boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStudentModal(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>

            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', marginBottom: '4px' }}>
              Student Registration Record
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 16px' }}>
              {selectedStudentModal.name}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#334155' }}>
              <div><strong>Email:</strong> {selectedStudentModal.email}</div>
              <div><strong>Phone:</strong> {selectedStudentModal.phone}</div>
              <div><strong>College:</strong> {selectedStudentModal.college}</div>
              <div><strong>Academic Year:</strong> {selectedStudentModal.semester}</div>
              <div><strong>Selected Course:</strong> <span style={{ color: '#ef4444', fontWeight: 800 }}>{selectedStudentModal.course}</span></div>
              <div><strong>Fee Status:</strong> <span style={{ fontWeight: 700 }}>{selectedStudentModal.feeStatus} (₹{selectedStudentModal.feeAmount})</span></div>
              <div><strong>Registration Date:</strong> {selectedStudentModal.date}</div>
              <div><strong>Status:</strong> {selectedStudentModal.status}</div>
              
              <div style={{ marginTop: '8px', background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <strong style={{ display: 'block', marginBottom: '4px', fontSize: '0.8rem', color: '#64748b' }}>Technical Focus / Notes:</strong>
                {selectedStudentModal.notes}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '22px' }}>
              <a
                href={`https://wa.me/${selectedStudentModal.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedStudentModal.name)},%20Aadhyaa%20Skills%20is%20reaching%20out.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '10px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <MessageSquare size={16} /> WhatsApp Student
              </a>

              <button
                onClick={() => setSelectedStudentModal(null)}
                style={{
                  padding: '10px 18px',
                  background: '#e2e8f0',
                  color: '#334155',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
