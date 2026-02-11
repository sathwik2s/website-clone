const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Mock Data
const HERO_CONTENT = {
    badge: "Engineering the Next Generation",
    title: "Building Intelligent, Scalable AI Solutions",
    subtitle: "Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products.",
    primaryBtn: "Explore our services",
    secondaryBtn: "Book a Strategy Call"
};

const SERVICES = [
    {
        id: 1,
        title: "AI-Powered Customer Service",
        desc: "Automate 80% of routine queries and turn your support center into a revenue driver.",
        iconType: "Bot"
    },
    {
        id: 2,
        title: "Automated Scheduling & Operations",
        desc: "Eliminate no-shows and recover thousands in lost revenue with intelligent automation.",
        iconType: "Calendar"
    },
    {
        id: 3,
        title: "Intelligent Inventory Management",
        desc: "Prevent stockouts and make data-driven decisions with predictive forecasting.",
        iconType: "Box"
    },
    {
        id: 4,
        title: "Micro Tools & Extensions",
        desc: "Lightweight tools powered by AI to boost productivity.",
        iconType: "Cpu"
    }
];

const FEATURES = [
    {
        id: 1,
        title: "High-Trust Engineering",
        desc: "Research-backed methods with transparent communication.",
        iconType: "ShieldCheck"
    },
    {
        id: 2,
        title: "Built for Scale",
        desc: "Your product grows without breaking.",
        iconType: "TrendingUp"
    },
    {
        id: 3,
        title: "Gen AI Expertise",
        desc: "Deep experience with LLMs and custom AI.",
        iconType: "Brain"
    },
    {
        id: 4,
        title: "User-Centered Design",
        desc: "Every feature is intuitive and purposeful.",
        iconType: "Layout"
    }
];

const PROCESS = [
    {
        num: "01",
        title: "Discovery & Strategy",
        desc: "Understand challenges and design a strategic AI roadmap.",
        image: "/images/process1.png"
    },
    {
        num: "02",
        title: "Design & Prototype",
        desc: "Detailed wireframes and interactive prototypes.",
        image: "/images/process2.png"
    },
    {
        num: "03",
        title: "Development & Testing",
        desc: "Rigorous testing and continuous collaboration.",
        image: "/images/process3.png"
    },
    {
        num: "04",
        title: "Launch & Growth",
        desc: "Deploy and optimize for continued success.",
        image: "/images/process4.png"
    }
];

// Routes
app.get('/api/hero', (req, res) => {
    res.json(HERO_CONTENT);
});

app.get('/api/services', (req, res) => {
    res.json(SERVICES);
});

app.get('/api/features', (req, res) => {
    res.json(FEATURES);
});

app.get('/api/process', (req, res) => {
    res.json(PROCESS);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
