export const companyInfo = {
  name: 'Aadhyaa Skills Research & Development',
  shortName: 'Aadhyaa Skills R&D',
  tagline: 'For the People who Born to live with Robots',
  phone: '+91 96771 31092',
  whatsapp: '919677131092',
  email: 'contact@aadhyaaskill.com',
  website: 'www.aadhyaaskill.com',
};

export const fallbackProjects = [
  {
    slug: 'robotic-arm',
    title: 'Robotic ARM',
    tagline: '4 to 6-Axis Multi-DOF Precision Robotic Manipulator',
    shortDescription:
      'A multi-degree-of-freedom robotic manipulator designed for pick-and-place automation, inverse kinematics learning, and precision servo control.',
    fullDescription:
      'The Aadhyaa Robotic ARM project empowers students to understand multi-axis kinematics, servo PWM calibration, joystick/Bluetooth control, and industrial factory floor automation principles. Built with durable high-torque servo motors, laser-cut acrylic/aluminum mechanical joints, and gripping claw end-effectors.',
    recommendedKit: 'Robotics Kit',
    difficulty: 'Intermediate',
    keyComponents: [
      'Micro Servo Motors (SG90 / MG996R)',
      'Arduino Uno R3 Microcontroller',
      'Dual-Axis Analog Joystick Module',
      'PCA9685 16-Channel PWM Servo Shield',
      'High-Grade Acrylic Multi-DOF Robotic Claw Chassis',
      '5V 3A Regulated External Power Supply',
    ],
    features: [
      'Multi-axis coordinate motion & clamp control',
      'Potentiometer & Analog Joystick manual override',
      'Programmable memory sequence (Record & Playback motion)',
      'Bluetooth / Android app remote control upgrade ready',
    ],
    applications: [
      'Industrial assembly line automation',
      'Hazardous material handling simulation',
      'Biomedical assistive robotics',
    ],
    schematicOverview:
      'Arduino pins 9, 10, 11, 6 connected to Servo PWM lines. Analog pins A0, A1, A2, A3 wired to dual joystick X/Y axes. Common Ground with 5V external battery pack.',
    starterCode: {
      language: 'cpp',
      code: `// Aadhyaa Skills Robotic ARM - Starter Code
#include <Servo.h>

Servo baseServo;
Servo shoulderServo;
Servo elbowServo;
Servo gripperServo;

const int joyX = A0;
const int joyY = A1;

void setup() {
  baseServo.attach(9);
  shoulderServo.attach(10);
  elbowServo.attach(11);
  gripperServo.attach(6);
  Serial.begin(9600);
  Serial.println("Aadhyaa Skills ARM initialized!");
}

void loop() {
  int xVal = analogRead(joyX);
  int angle = map(xVal, 0, 1023, 0, 180);
  baseServo.write(angle);
  delay(15);
}`,
    },
  },
  {
    slug: 'soccer-robot',
    title: 'Soccer Robot',
    tagline: 'High-Agility Striker & Goalie Bot for RoboSoccer Tournaments',
    shortDescription:
      'An ultra-responsive omnidirectional / differential drive robot equipped with ball dribbling rollers, pneumatic/solenoid kickers, and wireless RF control.',
    fullDescription:
      'Built specifically for college robotics competitions and tech fests. The Aadhyaa Soccer Robot incorporates high-RPM geared DC motors, wireless RF/Bluetooth transceivers, low-center-of-gravity chassis, and an active ball-dribbler mechanism for high-speed field maneuvers.',
    recommendedKit: 'Robotics Kit',
    difficulty: 'Intermediate',
    keyComponents: [
      'High RPM Metal Geared BO Motors (300 RPM)',
      'L298N Dual H-Bridge Motor Driver',
      'Arduino Uno / ESP32 Controller',
      'HC-05 Bluetooth or NRF24L01 RF Module',
      'High-Traction Silicone Grip Wheels',
      'Spring/Solenoid Kicking Mechanism',
    ],
    features: [
      'Zero-radius spot turns for rapid direction switching',
      'Custom smartphone gamepad app connectivity via Bluetooth',
      'Heavy-duty bumper chassis to resist field collisions',
      'High instantaneous torque for striking soccer balls',
    ],
    applications: [
      'RoboCup & University STEM Competitions',
      'Autonomous Swarm Athletics Research',
      'Agile Vehicle Dynamics Learning',
    ],
    schematicOverview:
      'L298N IN1-IN4 connected to Arduino digital pins 5,6,9,10 for PWM speed control. HC-05 RX/TX to Arduino TX/RX (pins 2,3 via SoftwareSerial).',
    starterCode: {
      language: 'cpp',
      code: `// Aadhyaa Soccer Robot - Bluetooth Command Parser
#include <SoftwareSerial.h>
SoftwareSerial BT(2, 3); // RX, TX

void setup() {
  BT.begin(9600);
  pinMode(5, OUTPUT); // Motor A Forward
  pinMode(6, OUTPUT); // Motor A Backward
  pinMode(9, OUTPUT); // Motor B Forward
  pinMode(10, OUTPUT); // Motor B Backward
}

void loop() {
  if (BT.available()) {
    char cmd = BT.read();
    if (cmd == 'F') moveForward();
    else if (cmd == 'B') moveBackward();
    else if (cmd == 'L') spinLeft();
    else if (cmd == 'R') spinRight();
    else if (cmd == 'K') kickBall();
    else stopMotors();
  }
}
void moveForward() { digitalWrite(5, HIGH); digitalWrite(9, HIGH); }
void stopMotors() { digitalWrite(5, LOW); digitalWrite(9, LOW); }`,
    },
  },
  {
    slug: 'all-terrain-robot',
    title: 'All Terrain Robot',
    tagline: 'Rocker-Bogie / Tracked Rover for Rough Sand, Rocks & Inclines',
    shortDescription:
      'A rugged robotic vehicle engineered with rocker-bogie suspension or tracked treads capable of conquering gravel, grass, 45-degree inclines, and obstacles.',
    fullDescription:
      'Inspired by planetary exploration rovers (like Mars Curiosity & Chandrayaan Pragyan), this rover provides practical insights into suspension kinematics, weight distribution, motor stall current management, and extreme outdoor navigation.',
    recommendedKit: 'Robotics Kit',
    difficulty: 'Advanced',
    keyComponents: [
      '6x High-Torque Geared DC Motors or Continuous Rubber Tracks',
      'High-Current Motor Driver (BTS7960 43A or Dual L298N)',
      '11.1V 3S LiPo / 12V High Drain Rechargeable Battery Pack',
      'Suspension Linkage Arms & Rocker-Bogie Hinges',
      'FPV Camera Mount with Pan-Tilt Servos',
      'Long-Range 2.4GHz RF Transmitter / Receiver',
    ],
    features: [
      'Rocker-bogie articulation keeping all wheels on ground',
      'Traverses staircases, rocky paths, and loose soil',
      'Real-time First Person View (FPV) video streaming support',
      'Fail-safe autonomous braking and hill hold',
    ],
    applications: [
      'Disaster search and rescue rovers',
      'Agricultural field inspection & soil sampling',
      'Military reconnaissance simulations',
    ],
    schematicOverview:
      'BTS7960 high-power H-bridges driven by ESP32 PWM pins. Li-Po 11.1V direct to driver bus with 5V buck converter supplying the logic board.',
    starterCode: {
      language: 'cpp',
      code: `// Aadhyaa All-Terrain Rover - Motor Control with PWM ramping
const int RPWM = 5;
const int LPWM = 6;

void setup() {
  pinMode(RPWM, OUTPUT);
  pinMode(LPWM, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  for(int speed = 0; speed <= 255; speed += 5) {
    analogWrite(RPWM, speed);
    digitalWrite(LPWM, LOW);
    delay(20);
  }
  delay(1000);
}`,
    },
  },
  {
    slug: 'maze-solvers',
    title: 'Maze Solvers',
    tagline: 'Autonomous Algorithmic Micromouse & Line Maze Navigation',
    shortDescription:
      'An autonomous decision-making robot running Flood-Fill, Tremaux, and Left-Hand-Rule wall-following algorithms using ultrasonic and IR distance sensor arrays.',
    fullDescription:
      'Maze Solvers teach the ultimate fusion of software algorithms and hardware feedback loops. Students master PID (Proportional-Integral-Derivative) control, sensor noise filtering, and dead-reckoning wheel encoder odometry to navigate unknown mazes and calculate the shortest path.',
    recommendedKit: 'Arduino Kit',
    difficulty: 'Advanced',
    keyComponents: [
      '3x HC-SR04 Ultrasonic Sensors (Front, Left, Right)',
      '5-Channel TCRT5000 Infrared Sensor Array',
      'High-Resolution Optical Wheel Encoders',
      'Arduino Nano / STM32 BluePill',
      'Micro Metal Gearmotors (6V 600 RPM N20 motors)',
      'Precision Lightweight Mini Chassis',
    ],
    features: [
      'Wall-following (Left-Hand / Right-Hand rule) algorithms',
      'Grid coordinate mapping & Flood-Fill shortest path solving',
      'PID controller for razor-straight wall centering',
      'Dynamic speed boost on straight corridors',
    ],
    applications: [
      'Warehouse AGVs (Automated Guided Vehicles)',
      'Subterranean pipeline inspection',
      'Autonomous mine exploration',
    ],
    schematicOverview:
      'Left sensor: Trig D2, Echo D3; Front sensor: Trig D4, Echo D5; Right sensor: Trig D7, Echo D8. Motor driver signals on PWM D9, D10.',
    starterCode: {
      language: 'cpp',
      code: `// Aadhyaa Maze Solver - Wall Follower Algorithm
long getDistance(int trig, int echo) {
  digitalWrite(trig, LOW); delayMicroseconds(2);
  digitalWrite(trig, HIGH); delayMicroseconds(10);
  digitalWrite(trig, LOW);
  return pulseIn(echo, HIGH) * 0.034 / 2;
}

void loop() {
  long frontDist = getDistance(4, 5);
  long leftDist  = getDistance(2, 3);
  
  if (frontDist < 12) {
    turnRight();
  } else if (leftDist > 18) {
    turnLeft();
  } else {
    moveForward();
  }
}`,
    },
  },
  {
    slug: 'fighting-robot',
    title: 'Fighting Robot',
    tagline: 'Combat Robot (RoboWars) with Spinning Weapons & Armor',
    shortDescription:
      'A ferocious combat-grade robot engineered for RoboWars arenas featuring brushless spinning blade/drum weapons, titanium-grade armor, and brushless ESC power.',
    fullDescription:
      'Designed for competitive RoboWars arenas (3kg / 8kg / 15kg featherweight & beetleweight categories). The Aadhyaa Fighting Robot kit exposes students to high-discharge brushless motors, Electronic Speed Controllers (ESCs), impact resistance mechanics, and radio failsafe engineering.',
    recommendedKit: 'Robotics Kit',
    difficulty: 'Advanced',
    keyComponents: [
      'Brushless Outrunner Motor (1000KV - 1400KV) for weapon',
      '30A / 40A Brushless ESC with BEC',
      'Hardened High-Carbon Steel Spinning Blade / Drum',
      'High-Torque Metal Gear Drive Motors',
      '3S LiPo High-Discharge (45C+) Battery Pack',
      'FlySky i6 2.4GHz 6CH RC Radio System',
      'Impact Resistant Polycarbonate & Aluminum Chasis',
    ],
    features: [
      'High-kinetic energy rotary spinner weapon',
      'Wedge front armor design to flip opposing bots',
      'Invertible driving capability (can drive upside down)',
      'Dual safety cutoff switch & removable weapon safety lock',
    ],
    applications: [
      'RoboWars & Combat Robotics Tournaments',
      'High-impact structural mechanics research',
      'Advanced brushless motor commutation',
    ],
    schematicOverview:
      'FlySky iA6B receiver CH1/CH2 to drive ESCs/motor driver, CH3 throttle connected to Weapon ESC signal wire with common ground.',
    starterCode: {
      language: 'cpp',
      code: `// Aadhyaa Combat Bot - ESC Weapon Arming & Safety Lock
#include <Servo.h>
Servo weaponESC;

void setup() {
  weaponESC.attach(9);
  // Send neutral signal for 2 seconds to arm ESC
  weaponESC.writeMicroseconds(1000);
  delay(2000);
  Serial.println("Weapon Armed and Safe to Engage!");
}

void loop() {
  int throttleInput = pulseIn(7, HIGH);
  if(throttleInput > 1100) {
    weaponESC.writeMicroseconds(throttleInput);
  } else {
    weaponESC.writeMicroseconds(1000);
  }
}`,
    },
  },
];

export const fallbackKits = [
  {
    slug: 'robotics-kit',
    name: 'Robotics Kit',
    tagline: 'The Ultimate All-in-One Robot Builder Kit',
    category: 'Robotics & Mechanical',
    badge: 'Flagship & Most Popular',
    priceINR: 3499,
    description:
      'The comprehensive master kit designed to build all 5 featured robots: Robotic ARM, Soccer Robot, All Terrain Rover, Maze Solvers, and Fighting Bots.',
    difficulty: 'All Levels',
    targetProjects: ['Robotic ARM', 'Soccer Robot', 'All Terrain Robot', 'Maze Solvers', 'Fighting Robot'],
    componentsIncluded: [
      { name: 'Multi-DOF Acrylic Robot Arm Chassis with Gripper', qty: 1, spec: 'Laser-cut Acrylic' },
      { name: 'SG90 Micro Servo Motors', qty: 4, spec: '9g Metal/Nylon gear' },
      { name: 'L298N Dual H-Bridge Motor Driver', qty: 2, spec: '2A Peak per channel' },
      { name: 'High-Torque BO Geared Motors', qty: 4, spec: '150/300 RPM' },
      { name: 'Heavy Duty 4WD Robot Chassis Plate', qty: 1, spec: 'Pre-drilled mounting' },
      { name: 'HC-SR04 Ultrasonic Distance Sensor', qty: 2, spec: '2cm - 400cm range' },
      { name: 'TCRT5000 Infrared Obstacle / Line Modules', qty: 3, spec: 'Digital & Analog' },
      { name: 'Dual-Axis Joystick Module', qty: 1, spec: 'X/Y/Pushbutton' },
      { name: 'Bluetooth Wireless HC-05 Module', qty: 1, spec: 'UART SPP Profile' },
      { name: 'Li-Ion 18650 Battery Holder & Jumper Wires Pack', qty: 1, spec: '65 pcs M-M, M-F' },
    ],
    learningOutcomes: [
      'Master motor kinematics and differential driving',
      'Control multi-axis robotic joints using PWM',
      'Implement wireless Bluetooth and RF telemetry',
      'Build competition-ready combat and soccer robots',
    ],
  },
  {
    slug: 'arduino-kit',
    name: 'Arduino Kit',
    tagline: 'Hands-on Microcontroller & Circuit Prototyping Kit',
    category: 'Embedded & Microcontrollers',
    badge: 'Essential for Beginners',
    priceINR: 2299,
    description:
      'The definitive starter-to-intermediate kit for learning electronics, C++ programming, breadboard wiring, and interfacing actuators with ATmega328P.',
    difficulty: 'Beginner',
    targetProjects: ['Maze Solvers', 'Robotic ARM', 'Automation Prototypes'],
    componentsIncluded: [
      { name: 'Arduino Uno R3 Compatible Board (DIP ATmega328P)', qty: 1, spec: 'With USB Cable' },
      { name: '830-Point Solderless Breadboard', qty: 1, spec: 'MB-102 High Quality' },
      { name: '16x2 I2C Character LCD Display', qty: 1, spec: 'HD44780 with PCF8574 Backpack' },
      { name: 'Assorted Sensors Pack (LDR, Thermistor, Tilt, Buzzer)', qty: 10, spec: 'Standard 5V' },
      { name: 'Resistor & Capacitor Assortment Pack', qty: 100, spec: '1/4W 1% Metal Film' },
      { name: 'LED Pack (Red, Green, Yellow, Blue, RGB)', qty: 25, spec: '5mm Diffused' },
    ],
    learningOutcomes: [
      'Understand GPIO pin programming, digital and analog I/O',
      'I2C, SPI and Serial communication protocols',
      'Hardware interrupt programming and timer PWM',
    ],
  },
  {
    slug: 'iot-kit',
    name: 'IOT Kit',
    tagline: 'Cloud Connected Smart Devices & Wireless Telemetry Kit',
    category: 'IoT & Cloud Robotics',
    badge: 'Industry 4.0 Focus',
    priceINR: 2899,
    description:
      'Connect robots and sensors to the internet! Features the dual-core ESP32 Wi-Fi & Bluetooth microcontroller, cloud dashboard integration, MQTT, and smart telemetry.',
    difficulty: 'Intermediate',
    targetProjects: ['All Terrain Robot (Remote Telemetry)', 'Smart Home & Agri Robotics'],
    componentsIncluded: [
      { name: 'ESP32 NodeMCU Wi-Fi + BLE Dev Board', qty: 1, spec: 'Dual Core 240MHz 38-Pin' },
      { name: 'DHT11 / DHT22 Temperature & Humidity Sensor', qty: 1, spec: 'Single-bus digital' },
      { name: 'MQ-2 Gas / Smoke Sensor Module', qty: 1, spec: 'Analog & Threshold' },
      { name: '0.96 inch I2C OLED Display (128x64)', qty: 1, spec: 'SSD1306 Blue/Yellow' },
      { name: '5V Single & Dual Channel Relay Modules', qty: 2, spec: 'Optocoupler Isolated' },
      { name: 'PIR Motion Sensor (HC-SR501)', qty: 1, spec: 'Infrared Pyroelectric' },
    ],
    learningOutcomes: [
      'Connect microcontrollers to Wi-Fi networks and REST APIs',
      'Stream live telemetry data to Blynk, ThingSpeak & Adafruit IO',
      'Build web-based robot control dashboards hosted directly on ESP32',
    ],
  },
  {
    slug: 'sensor-starter-kit',
    name: 'Sensor Starter Kit',
    tagline: '37-in-1 Experimental Sensor Lab for Curious Minds',
    category: 'Sensors & Transducers',
    badge: 'Great for Lab Practicals',
    priceINR: 1899,
    description:
      'A massive collection of tactile, optical, environmental, acoustic, and magnetic sensors to discover how machines sense the physical world.',
    difficulty: 'Beginner',
    targetProjects: ['Maze Solvers', 'Robotic Proximity Warning', 'Smart Sensor Stations'],
    componentsIncluded: [
      { name: 'Ultrasonic Distance Sensor HC-SR04', qty: 1, spec: 'Acoustic Sonar' },
      { name: 'IR Obstacle Sensor Modules', qty: 2, spec: 'Photodiode & Comparator' },
      { name: 'Sound Detection & Microphone Sensor', qty: 1, spec: 'High Sensitivity' },
      { name: 'Soil Moisture & Water Level Sensor', qty: 2, spec: 'Corrosion resistant' },
      { name: 'Flame / Fire Detection Sensor', qty: 1, spec: 'IR 760nm - 1100nm' },
    ],
    learningOutcomes: [
      'Understand analog-to-digital sensor conversion (ADC)',
      'Noise filtering with hardware capacitors and software averaging',
      'Choosing the right sensor for robotics perception',
    ],
  },
  {
    slug: 'embedded-kit',
    name: 'Embedded Kit',
    tagline: 'ARM Cortex & RTOS Real-Time Architecture Kit',
    category: 'Embedded Systems',
    badge: 'Core Engineering',
    priceINR: 3199,
    description:
      'Designed for electrical and computer science engineers diving into register-level programming, FreeRTOS, bare-metal C, and high-performance embedded systems.',
    difficulty: 'Advanced',
    targetProjects: ['High Speed Maze Solvers', 'Autonomous Robotics Flight & Motion'],
    componentsIncluded: [
      { name: 'STM32F103C8T6 ARM Cortex-M3 (Blue Pill)', qty: 1, spec: '72MHz 32-bit' },
      { name: 'ST-Link V2 In-Circuit Programmer & Debugger', qty: 1, spec: 'SWD Interface' },
      { name: 'Logic Analyzer 8CH 24MHz USB', qty: 1, spec: 'PulseView Compatible' },
      { name: 'CAN Bus Controller Module (MCP2515)', qty: 1, spec: 'SPI Automotive Bus' },
    ],
    learningOutcomes: [
      'Bare-metal C and CMSIS register programming',
      'FreeRTOS task scheduling, semaphores, and queues',
      'Hardware debugging with ST-Link and logic analyzer waveforms',
    ],
  },
  {
    slug: 'vlsi-kit',
    name: 'VLSI Kit',
    tagline: 'FPGA & Digital Logic Synthesis Exploration Kit',
    category: 'VLSI & Digital Electronics',
    badge: 'Hardware Description Lab',
    priceINR: 4499,
    description:
      'Bridge hardware and software by synthesizing custom digital circuits, state machines, and hardware accelerators using Verilog / VHDL on programmable logic.',
    difficulty: 'Advanced',
    targetProjects: ['Custom Motor Controller ASIC', 'High Speed Vision & Signal Filtering'],
    componentsIncluded: [
      { name: 'CPLD / FPGA Starter Development Board', qty: 1, spec: 'Altera MAX / Cyclone / Lattice' },
      { name: 'USB Blaster High-Speed JTAG Cable', qty: 1, spec: 'FPGA Flashing' },
      { name: '8-Bit DIP Switch & LED Input/Output Module', qty: 1, spec: 'Logic verification' },
    ],
    learningOutcomes: [
      'Write synthesizable Verilog / VHDL digital code',
      'Design finite state machines (FSM) for robot navigation',
      'FPGA pin constraints and bitstream deployment',
    ],
  },
];

export const fallbackComponents = [
  {
    slug: 'hc-sr04-ultrasonic',
    name: 'HC-SR04 Ultrasonic Distance Sensor',
    category: 'Sensors',
    operatingVoltage: '5V DC',
    interfaceType: 'Digital Pulse (Trigger & Echo)',
    description:
      'Provides 2cm to 400cm non-contact distance measurement with 3mm precision. Sends a 40kHz ultrasound wave and measures the travel time of the reflected echo.',
    workingPrinciple:
      'Distance = (Echo High Time (in microseconds) x Speed of Sound 0.034 cm/us) / 2.',
    pinout: [
      { pin: 'VCC', label: 'Power', function: 'Connect to +5V DC supply' },
      { pin: 'TRIG', label: 'Trigger Input', function: 'Send 10us HIGH pulse to fire sound wave' },
      { pin: 'ECHO', label: 'Echo Output', function: 'Outputs pulse proportional to distance' },
      { pin: 'GND', label: 'Ground', function: 'Connect to 0V system ground' },
    ],
    usedInProjects: ['Maze Solvers', 'All Terrain Robot', 'Soccer Robot'],
    studentTips: [
      'Do not connect ECHO directly to 3.3V microcontrollers without a 1k/2k voltage divider!',
      'Soft fabrics or tilted surfaces can absorb or deflect ultrasound, causing false high readings.',
    ],
  },
  {
    slug: 'l298n-motor-driver',
    name: 'L298N Dual H-Bridge Motor Driver',
    category: 'Motor Drivers',
    operatingVoltage: '5V - 35V DC (Drive), 5V (Logic)',
    interfaceType: 'PWM & Direction Pins',
    description:
      'High-power dual H-bridge motor driver module capable of driving up to two DC motors or one 4-wire stepper motor in both forward and reverse directions with variable speed control.',
    workingPrinciple:
      'Four internal power transistors arranged in an H-bridge configuration allow reversing the polarity of voltage across the motor terminals.',
    pinout: [
      { pin: '12V', label: 'Motor Power', function: 'Main battery voltage (7V - 12V+)' },
      { pin: 'GND', label: 'Common GND', function: 'Shared ground between battery & microcontroller' },
      { pin: '5V', label: 'Logic Supply', function: 'Output 5V if 12V jumper is in place; input otherwise' },
      { pin: 'ENA / ENB', label: 'Speed Enable', function: 'PWM signal for motor speed regulation' },
      { pin: 'IN1, IN2', label: 'Motor A Dir', function: 'Logic HIGH/LOW to choose rotation direction' },
      { pin: 'IN3, IN4', label: 'Motor B Dir', function: 'Logic HIGH/LOW to choose rotation direction' },
    ],
    usedInProjects: ['Soccer Robot', 'All Terrain Robot', 'Maze Solvers', 'Fighting Robot'],
    studentTips: [
      'ALWAYS connect the microcontroller GND and L298N GND together, or motors will behave erratically!',
      'If motors draw more than 1.5A, ensure the metal heatsink has sufficient ventilation.',
    ],
  },
  {
    slug: 'sg90-micro-servo',
    name: 'SG90 Micro Servo Motor (9g)',
    category: 'Actuators',
    operatingVoltage: '4.8V - 6.0V DC',
    interfaceType: 'PWM Pulse (50Hz / 20ms period)',
    description:
      'Lightweight, high-output rotary actuator that allows for precise angular positioning between 0 and 180 degrees. Standard building block for robotic arms and grippers.',
    workingPrinciple:
      'Internal potentiometer measures shaft position and compares it against input pulse width (1.0ms = 0°, 1.5ms = 90°, 2.0ms = 180°).',
    pinout: [
      { pin: 'Brown / Black', label: 'GND', function: 'System Ground' },
      { pin: 'Red', label: 'VCC', function: '+4.8V to +6V Power Supply' },
      { pin: 'Orange / Yellow', label: 'Signal', function: 'PWM Signal pin from microcontroller' },
    ],
    usedInProjects: ['Robotic ARM', 'Fighting Robot (Pan/Tilt)', 'All Terrain Robot'],
    studentTips: [
      'Never power multiple servos from the Arduino 5V regulator pin; they draw up to 500mA surge and will reset your board.',
      'Always power servos from an external 5V 2A+ battery with common ground.',
    ],
  },
  {
    slug: 'arduino-uno-r3',
    name: 'Arduino Uno R3 Microcontroller Board',
    category: 'Microcontrollers',
    operatingVoltage: '5V (Logic), 7-12V (Vin Recommended)',
    interfaceType: 'Digital I/O, Analog In, UART, I2C, SPI',
    description:
      'The industry-standard open-source microcontroller board based on the Microchip ATmega328P. Features 14 digital I/O pins (6 PWM), 6 analog inputs, and a 16MHz ceramic resonator.',
    workingPrinciple:
      'Executes C++ embedded instructions loaded via USB bootloader, reading sensor voltages and calculating real-time control pulses.',
    pinout: [
      { pin: 'D0 - D13', label: 'Digital I/O', function: 'GPIO pins (pins 3,5,6,9,10,11 support PWM)' },
      { pin: 'A0 - A5', label: 'Analog In', function: '10-bit Analog-to-Digital converter pins' },
      { pin: '5V & 3.3V', label: 'Power Outs', function: 'Regulated voltages for breadboards & sensors' },
      { pin: 'VIN', label: 'Voltage In', function: 'External 7V - 12V battery power input' },
    ],
    usedInProjects: ['Robotic ARM', 'Soccer Robot', 'Maze Solvers', 'All Terrain Robot'],
    studentTips: [
      'Pins D0 (RX) and D1 (TX) are used for USB uploading; disconnect any modules on these pins when flashing code.',
    ],
  },
  {
    slug: 'esp32-mcu',
    name: 'ESP32 Wi-Fi & Bluetooth Dual-Core MCU',
    category: 'Microcontrollers',
    operatingVoltage: '3.3V Logic (5V Micro-USB)',
    interfaceType: 'Wi-Fi 802.11 b/g/n, Bluetooth v4.2 BR/EDR & BLE',
    description:
      'High-speed 240MHz dual-core Tensilica Xtensa 32-bit LX6 processor with integrated Wi-Fi and Bluetooth. Enables wireless IoT robotics, camera streaming, and cloud control.',
    workingPrinciple:
      'Dual cores allow executing motor control loops on Core 1 while handling Wi-Fi network stacks and web servers simultaneously on Core 0.',
    pinout: [
      { pin: '3V3', label: 'Power', function: 'Regulated 3.3V supply output' },
      { pin: 'GPIO 2', label: 'Built-in LED', function: 'Onboard status LED & strapping pin' },
      { pin: 'GPIO 21 (SDA) & 22 (SCL)', label: 'I2C Bus', function: 'Hardware I2C for OLEDs & sensors' },
      { pin: 'GND', label: 'Ground', function: 'System ground' },
    ],
    usedInProjects: ['All Terrain Robot', 'Soccer Robot (Mobile App Control)', 'Maze Solvers'],
    studentTips: [
      'ESP32 pins are NOT 5V tolerant! Applying 5V directly to GPIOs can permanently damage the chip.',
    ],
  },
  {
    slug: 'tcrt5000-ir-sensor',
    name: 'TCRT5000 Reflective Infrared Sensor',
    category: 'Sensors',
    operatingVoltage: '3.3V - 5V DC',
    interfaceType: 'Digital & Analog Output',
    description:
      'Infrared emitter and phototransistor package that detects surface reflectivity. The key component for black/white line following and close-proximity obstacle detection.',
    workingPrinciple:
      'Infrared LED emits invisible light. White surfaces reflect light back into the phototransistor, pulling output LOW; black surfaces absorb light, keeping output HIGH.',
    pinout: [
      { pin: 'VCC', label: 'Power', function: '3.3V to 5V' },
      { pin: 'GND', label: 'Ground', function: '0V ground' },
      { pin: 'DO', label: 'Digital Out', function: 'HIGH / LOW based on onboard potentiometer threshold' },
      { pin: 'AO', label: 'Analog Out', function: 'Direct reflection voltage for precision tracking' },
    ],
    usedInProjects: ['Maze Solvers', 'Soccer Robot'],
    studentTips: [
      'Use the onboard blue potentiometer to calibrate sensitivity according to your arena lighting and track darkness.',
    ],
  },
];

