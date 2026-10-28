import mongoose from 'mongoose';

const componentSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ['Microcontrollers', 'Sensors', 'Actuators', 'Motor Drivers', 'Wireless & IOT', 'Hardware & Chassis'],
      required: true,
    },
    operatingVoltage: { type: String },
    interfaceType: { type: String }, // Digital, Analog, I2C, SPI, PWM, UART
    description: { type: String, required: true },
    workingPrinciple: { type: String },
    pinout: [
      {
        pin: { type: String },
        label: { type: String },
        function: { type: String },
      },
    ],
    usedInProjects: [{ type: String }],
    studentTips: [{ type: String }],
  },
  { timestamps: true }
);

export const Component = mongoose.model('Component', componentSchema);

