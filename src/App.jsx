import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import {
  Bot,
  Calendar,
  Box,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Brain,
  Layout,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Instagram,
  Twitter,
  Linkedin,
  Target,
  Lightbulb
} from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroContent, setHeroContent] = useState(null);
  const [services, setServices] = useState([]);
  const [features, setFeatures] = useState([]);
  const [process, setProcess] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Fetch data from backend
    const fetchData = async () => {
      try {
        const [heroRes, servicesRes, featuresRes, processRes] = await Promise.all([
          fetch('/api/hero'),
          fetch('/api/services'),
          fetch('/api/features'),
          fetch('/api/process')
        ]);

        const heroData = await heroRes.json();
        const servicesData = await servicesRes.json();
        const featuresData = await featuresRes.json();
        const processData = await processRes.json();

        setHeroContent(heroData);
        setServices(servicesData);
        setFeatures(featuresData);
        setProcess(processData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Set default data if backend is not available
        setDefaultData();
        setLoading(false);
      }
    };

    fetchData();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setDefaultData = () => {
    setHeroContent({
      badge: "ENGINEERING THE NEXT GENERATION",
      title: "Building Intelligent, scalable AI solutions for the Next Generation",
      subtitle: "Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products.",
      primaryBtn: "Explore our services",
      secondaryBtn: "Book a Strategy Call"
    });

    setServices([
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
    ]);

    setFeatures([
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
    ]);

    setProcess([
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
        desc: "Deploy and optimize for continual success.",
        image: "/images/process4.png"
      }
    ]);
  };

  const getIcon = (iconType) => {
    const icons = {
      Bot: <Bot size={24} />,
      Calendar: <Calendar size={24} />,
      Box: <Box size={24} />,
      Cpu: <Cpu size={24} />,
      ShieldCheck: <ShieldCheck size={24} />,
      TrendingUp: <TrendingUp size={24} />,
      Brain: <Brain size={24} />,
      Layout: <Layout size={24} />
    };
    return icons[iconType] || <Sparkles size={24} />;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  const handleContactClick = () => {
    // Scroll to footer or open contact form
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleBookCall = () => {
    // You can replace this with actual booking functionality
    alert('Booking functionality coming soon! Please contact us at contact@cogniqqai.com');
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <Sparkles size={48} color="#794CFA" className="loading-icon" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <Sparkles size={24} color="#794CFA" />
          <span>Cogniq AI</span>
        </div>

        <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" className="nav-link active" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About Us</a>
          <a href="#services" className="nav-link" onClick={() => scrollToSection('services')}>Services</a>
          <a href="#process" className="nav-link" onClick={() => scrollToSection('process')}>Our Lab</a>
          <a href="#footer" className="nav-link" onClick={() => scrollToSection('footer')}>Blogs</a>
          <button className="btn-primary" onClick={handleContactClick}>Contact Us</button>
        </div>

        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-bg-grid"></div>
        <div className="floating-icon icon-1"><Lightbulb size={32} /></div>
        <div className="floating-icon icon-2"><Target size={32} /></div>
        <div className="floating-icon icon-3"><Sparkles size={32} /></div>

        <div className="hero-content">
          <p className="hero-badge">{heroContent?.badge || "ENGINEERING THE NEXT GENERATION"}</p>
          <h1 className="hero-title">
            Building <span className="text-gradient">Intelligent</span>, scalable AI solutions for the <span className="text-gradient">Next Generation</span>
          </h1>
          <p className="hero-subtitle">
            {heroContent?.subtitle || "Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products."}
          </p>
          <div className="hero-buttons">
            <button className="btn-outline" onClick={handleExploreServices}>
              {heroContent?.primaryBtn || "Explore our services"}
            </button>
            <button className="btn-primary-large" onClick={handleBookCall}>
              {heroContent?.secondaryBtn || "Book a Strategy Call"}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-sidebar">
            <div className="purple-accent-bar"></div>
          </div>

          <div className="about-image">
            <img src="/images/about-robot.png" alt="AI Robot" />
          </div>

          <div className="about-content">
            <span className="section-badge">ABOUT US</span>
            <h2 className="about-title">
              Engineering Trust. <span className="text-gradient">Delivering Intelligence.</span>
            </h2>
            <h3>At Cogniq AI</h3>
            <p>
              we don't just develop features, we build <strong>full-scale</strong> AI systems designed for clarity, transparency, and long-term growth. From startups to enterprises, we partner with teams that want to innovate without compromising on <strong>quality</strong>.
            </p>
            <a href="#about" className="link-arrow" onClick={(e) => { e.preventDefault(); alert('About page coming soon!'); }}>
              Know more about Us <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="services-header">
          <h2>OUR SERVICES</h2>
          <p>Solve your biggest challenges with end-to-end AI solutions.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <FadeIn key={service.id || index} delay={index * 0.1}>
              <div className="service-card">
                <div className="service-icon">{getIcon(service.iconType)}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="view-all-link">
          <a href="#services" onClick={(e) => { e.preventDefault(); alert('Full services page coming soon!'); }}>
            View all Services
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section" id="features">
        <div className="features-header">
          <h2>Why Choose Us</h2>
          <p>Passion for precision, commitment to quality.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FadeIn key={feature.id || index} delay={index * 0.1}>
              <div className="feature-card">
                <div className="feature-icon">{getIcon(feature.iconType)}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" id="process">
        <div className="process-header">
          <h2>OUR PROCESS</h2>
          <p>From concept to creation, seamlessly.</p>
        </div>

        <div className="process-grid">
          {process.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="process-card">
                <img src={step.image} alt={step.title} />
                <div className="process-overlay">
                  <span className="process-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Unlock AI Potential Banner */}
      <section className="unlock-banner">
        <div className="unlock-content">
          <div className="unlock-left">
            <Sparkles size={24} />
            <div>
              <h3>Unlock AI Potential</h3>
              <p>Discover how we can transform your operations</p>
            </div>
          </div>
          <button className="btn-outline-small" onClick={handleExploreServices}>
            Explore Solutions →
          </button>
        </div>
      </section>

      {/* CTA Hero with Background Image */}
      <section className="cta-hero">
        <div className="cta-hero-overlay"></div>
        <div className="cta-hero-content">
          <h1>Ready to transform Your Workflow?</h1>
          <p>Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI</p>
          <button className="btn-primary-large" onClick={handleBookCall}>
            Book a Strategy Call →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-col footer-brand">
            <div className="logo">
              <Sparkles size={24} color="#794CFA" />
              <span>Cogniq AI</span>
            </div>
            <p className="footer-tagline">A Cogniq Labs Division</p>
            <p>Building intelligent AI apps that transform how you interact with technology.</p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about" onClick={() => scrollToSection('about')}>About us</a>
            <a href="#process" onClick={() => scrollToSection('process')}>Our Lab</a>
            <a href="#footer" onClick={() => scrollToSection('footer')}>Blogs</a>
          </div>

          <div className="footer-col">
            <h4>AI Solutions</h4>
            <a href="#services" onClick={() => scrollToSection('services')}>Custom AI Agents</a>
            <a href="#services" onClick={() => scrollToSection('services')}>Voice AI</a>
            <a href="#services" onClick={() => scrollToSection('services')}>Customer Support AI</a>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services" onClick={() => scrollToSection('services')}>Workflow Automation</a>
            <a href="#services" onClick={() => scrollToSection('services')}>Predictive Analytics</a>
            <a href="#services" onClick={() => scrollToSection('services')}>All Services →</a>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <a href="#process" onClick={() => scrollToSection('process')}>All Products</a>
            <a href="#process" onClick={() => scrollToSection('process')}>JobMail AI</a>
            <a href="#process" onClick={() => scrollToSection('process')}>PostGenius AI</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Cogniq AI. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms page coming soon!'); }}>
              Terms of service
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy page coming soon!'); }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
