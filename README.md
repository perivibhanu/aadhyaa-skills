# Aadhyaa Skills Research & Development Platform
> *"For the People who Born to live with Robots"*

Official full-stack web application designed for **Aadhyaa Skills R&D**, showcasing all 5 flagship robotics projects, 6 comprehensive hardware kits, an interactive student component discovery laboratory, and certified internship/capstone inquiry portals.

---

## 🌟 What This Platform Does

1. **Featured Robotics Projects**:
   - **Robotic ARM**: Multi-axis manipulator with servo kinematics and claw control.
   - **Soccer Robot**: High-agility striker and goalie bot with wireless RF/Bluetooth.
   - **All Terrain Robot**: Rocker-bogie rover engineered for rugged slopes and obstacles.
   - **Maze Solvers**: Wall-following and flood-fill micromouse with ultrasonic & IR arrays.
   - **Fighting Robot**: Combat RoboWars robot with high-RPM kinetic spinning weapons and armor.

2. **Official Hardware Kits**:
   - **Robotics Kit**: Flagship builder kit with chassis, geared motors, servos, motor drivers, and shields.
   - **Arduino Kit**: Microcontroller breadboarding, sensors, and C++ starter lab.
   - **IOT Kit**: ESP32 Wi-Fi & Bluetooth telemetry with cloud dashboard support.
   - **Sensor Starter Kit**: 37-in-1 experimental sensor lab.
   - **Embedded Kit**: STM32 ARM Cortex-M3 RTOS register-level kit.
   - **VLSI Kit**: FPGA / CPLD Verilog & VHDL digital logic synthesis lab.

3. **Student Interactive Component Lab**:
   - Shows students each physical component (HC-SR04, L298N, SG90, Arduino Uno, ESP32, TCRT5000, NRF24L01).
   - Interactive pinout diagrams, voltage requirements, and real-world student debugging pro-tips.

4. **Internship & Capstone Mentorship Portal**:
   - Direct lead generation and order placement hooked up to MongoDB with instant WhatsApp routing to **+91 96771 31092**.

---

## 🏗️ Architecture & Tech Stack

```
/
├── frontend/                     # React 18 + Vite + Modern CSS
│   ├── public/assets/            # Aadhyaa Skills flyer & media
│   ├── src/
│   │   ├── components/           # Navbar, Hero, Projects, Kits, ComponentInspector, Modals, Footer
│   │   ├── data/                 # Frontend fallback & schema models
│   │   ├── services/api.js       # REST client with automatic fallback
│   │   ├── App.jsx
│   │   ├── index.css             # High-tech cyber robotics aesthetic
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
│
├── backend/                      # Node.js + Express (ES Modules) + MongoDB / Mongoose
│   ├── src/
│   │   ├── config/db.js          # Mongoose connection with graceful fallback
│   │   ├── controllers/          # Kit, Project, Component, Inquiry controllers
│   │   ├── models/               # Kit.js, Project.js, Component.js, Inquiry.js
│   │   ├── routes/               # Express REST routes
│   │   ├── data/seedData.js      # Rich robotics dataset matching the card
│   │   ├── seed.js               # MongoDB seeder script
│   │   └── server.js             # Express application entrypoint
│   └── .env
│
└── package.json                  # Root orchestrator scripts
```

---

## 🚀 How to Run

### 1. Run the Backend API (Port 5000)
```bash
cd backend
npm run dev
```
- Starts at: `http://localhost:5000`
- Health check: `http://localhost:5000/api/health`
- *Note:* If your local MongoDB isn't running yet, the backend automatically falls back to curated in-memory datasets so all routes work without crashing!

### 2. Optional: Seed MongoDB
```bash
cd backend
npm run seed
```

### 3. Run the Frontend (Port 5173)
```bash
cd frontend
npm run dev
```
- Open `http://localhost:5173` in your browser.

