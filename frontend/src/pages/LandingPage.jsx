import React, { useEffect, useState } from 'react';
import { motion } from 'motion';
import { Play, Check, TrendingUp, Clock, Video, Zap, Users, DollarSign, Star, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const CHECKOUT_LINK = "https://superprofile.bio/vp/6991ecdcc67b780013a4d5d3";
const VIDEO_URL = "https://customer-assets.emergentagent.com/job_d715ce2a-0a09-4921-a662-f17154d6725c/artifacts/tu45kfcx_2026_02_15_22_18_01_375%20%281%29.mp4";
const LOGO_URL = "https://customer-assets.emergentagent.com/job_automation-sales-hub/artifacts/x4x6gdtr_WhatsApp%20Image%202026-02-17%20at%209.42.49%20PM.jpeg";

const springConfig = {
  type: "spring",
  damping: 80,
  stiffness: 400,
  mass: 1
};

const LandingPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const courseModules = [
    {
      title: "YouTube Automation Fundamentals",
      lessons: 3,
      description: "Master the core concepts of faceless YouTube channels and automation strategies"
    },
    {
      title: "Niche Selection & Market Research",
      lessons: 2,
      description: "Discover high-CPM niches that generate ₹7L+ monthly revenue"
    },
    {
      title: "AI Content Creation Tools",
      lessons: 4,
      description: "Learn to use cutting-edge AI tools for video scripts, voiceovers, and editing"
    },
    {
      title: "Video Production Automation",
      lessons: 5,
      description: "Complete workflow from ideation to published video using AI"
    },
    {
      title: "SEO & YouTube Algorithm Mastery",
      lessons: 3,
      description: "Rank your videos on page 1 and get millions of views"
    },
    {
      title: "Monetization Strategies",
      lessons: 4,
      description: "Multiple income streams: AdSense, sponsorships, affiliate marketing"
    },
    {
      title: "Scaling to ₹10L+/Month",
      lessons: 3,
      description: "Advanced strategies to scale beyond your first lakh"
    }
  ];

  const features = [
    {
      icon: Video,
      title: "24 Structured Video Lessons",
      description: "Step-by-step training from beginner to advanced automation expert"
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Learn at your own pace with unlimited access to all course materials"
    },
    {
      icon: Zap,
      title: "AI-Powered Workflow",
      description: "Complete automation toolkit that does 90% of the work for you"
    },
    {
      icon: TrendingUp,
      title: "Proven System",
      description: "Same strategies used by channels earning ₹7-10 lakhs monthly"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of successful automation entrepreneurs"
    },
    {
      icon: DollarSign,
      title: "Multiple Revenue Streams",
      description: "Learn 5+ ways to monetize your automated YouTube channel"
    }
  ];

  const stats = [
    { value: "₹7-10L", label: "Monthly Earning Potential" },
    { value: "24", label: "Video Lessons" },
    { value: "100%", label: "AI Automation" },
    { value: "Lifetime", label: "Course Access" }
  ];

  const faqs = [
    {
      question: "Do I need any technical skills to start?",
      answer: "Not at all! This course is designed for complete beginners. We walk you through every step, from setting up your channel to publishing your first automated video."
    },
    {
      question: "How long does it take to start earning?",
      answer: "Most students start seeing their first revenue within 60-90 days. However, with consistent implementation of the strategies taught, you can potentially reach ₹1 lakh/month within 4-6 months."
    },
    {
      question: "Do I need to show my face on camera?",
      answer: "No! This is 100% faceless YouTube automation. You'll never need to appear on camera or record your own voice. Everything is done using AI tools."
    },
    {
      question: "What tools do I need to get started?",
      answer: "We cover all the best (and most affordable) AI tools in the course. You can start with free tools and upgrade as you grow. Initial investment is minimal."
    },
    {
      question: "Is this legal and compliant with YouTube policies?",
      answer: "Absolutely! Everything taught in this course is 100% compliant with YouTube's terms of service. We teach white-hat strategies used by successful channels."
    },
    {
      question: "What if I don't get results?",
      answer: "This course teaches proven strategies. However, success depends on your consistent implementation. We provide all the tools and knowledge you need to succeed."
    }
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <motion.div 
              className="logo-container"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={springConfig}
            >
              <img src={LOGO_URL} alt="Evolve Digital" className="logo" />
              <span className="brand-name">Evolve Digital</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springConfig, delay: 0.1 }}
            >
              <Button 
                className="btn-primary btn-small"
                onClick={() => window.open(CHECKOUT_LINK, '_blank')}
              >
                Enroll Now
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section gradient-hero">
        <div className="gradient-overlay">
          <div className="container">
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.2 }}
                className="hero-text"
              >
                <div className="hero-badge">
                  <Star className="icon-star" />
                  <span>Proven YouTube Automation System</span>
                </div>
                <h1 className="display-hero">
                  Earn ₹7-10 Lakhs/Month with <span className="text-highlight">AI-Powered</span> YouTube Automation
                </h1>
                <p className="body-large hero-description">
                  24 structured video lessons teaching you how to build and scale a faceless YouTube channel that generates $7,000+ monthly. No camera, no voice, 100% automated.
                </p>
                
                <div className="hero-cta-group">
                  <Button 
                    className="btn-primary btn-hero"
                    onClick={() => window.open(CHECKOUT_LINK, '_blank')}
                  >
                    Start Earning ₹7 Lakh+
                  </Button>
                  <Button 
                    className="btn-secondary"
                    onClick={() => {
                      document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Play className="icon-inline" />
                    Watch Preview
                  </Button>
                </div>

                <div className="hero-stats">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="stat-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...springConfig, delay: 0.4 + (index * 0.1) }}
                    >
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="video-section" className="video-section">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="section-header-center"
          >
            <h2 className="heading-large">See How It Works</h2>
            <p className="body-large text-secondary">
              Watch this preview to understand how YouTube automation can transform your income
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
            className="video-container"
          >
            <video
              controls
              className="showcase-video"
              poster={LOGO_URL}
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="why-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="section-header-center"
          >
            <h2 className="heading-large">Why YouTube Automation Works in 2026</h2>
            <p className="body-large text-secondary">
              The perfect storm of AI technology and YouTube's massive reach
            </p>
          </motion.div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springConfig, delay: index * 0.1 }}
              >
                <Card className="feature-card">
                  <CardContent className="feature-content">
                    <div className="feature-icon">
                      <feature.icon className="icon" />
                    </div>
                    <h3 className="heading-medium">{feature.title}</h3>
                    <p className="body-standard text-secondary">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="curriculum-section">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="section-header-center"
          >
            <h2 className="heading-large">Complete Course Curriculum</h2>
            <p className="body-large text-secondary">
              24 comprehensive video lessons structured for your success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="curriculum-accordion">
              {courseModules.map((module, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="accordion-trigger">
                    <div className="module-header">
                      <span className="module-number">Module {index + 1}</span>
                      <span className="module-title">{module.title}</span>
                      <span className="module-lessons">{module.lessons} lessons</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content">
                    <p className="body-standard">{module.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Income Breakdown Section */}
      <section className="income-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="section-header-center"
          >
            <h2 className="heading-large">Your Path to ₹7-10 Lakhs/Month</h2>
            <p className="body-large text-secondary">
              Here's how the numbers add up with YouTube automation
            </p>
          </motion.div>

          <div className="income-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springConfig}
            >
              <Card className="income-card">
                <CardContent className="income-content">
                  <div className="income-icon">
                    <TrendingUp className="icon-large" />
                  </div>
                  <h3 className="income-value">₹7,00,000</h3>
                  <p className="income-label">Month 6 Target</p>
                  <ul className="income-breakdown">
                    <li><Check className="check-icon" /> 500K+ monthly views</li>
                    <li><Check className="check-icon" /> High CPM niche (₹300-500)</li>
                    <li><Check className="check-icon" /> AdSense + Sponsorships</li>
                    <li><Check className="check-icon" /> Affiliate commissions</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springConfig}
            >
              <Card className="income-card income-card-premium">
                <CardContent className="income-content">
                  <div className="premium-badge">Premium Goal</div>
                  <div className="income-icon">
                    <DollarSign className="icon-large" />
                  </div>
                  <h3 className="income-value">₹10,00,000+</h3>
                  <p className="income-label">Scaling Phase</p>
                  <ul className="income-breakdown">
                    <li><Check className="check-icon" /> 1M+ monthly views</li>
                    <li><Check className="check-icon" /> Multiple channels</li>
                    <li><Check className="check-icon" /> Brand partnerships</li>
                    <li><Check className="check-icon" /> Digital products</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="section-header-center"
          >
            <h2 className="heading-large">Frequently Asked Questions</h2>
            <p className="body-large text-secondary">
              Everything you need to know before getting started
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="faq-accordion">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="faq-trigger">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="faq-content">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section gradient-waitlist">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="cta-content"
          >
            <h2 className="heading-large text-center">Ready to Start Your Journey to ₹7 Lakh+/Month?</h2>
            <p className="body-large text-secondary text-center">
              Join thousands who are already earning through YouTube automation
            </p>
            <div className="cta-button-wrapper">
              <Button 
                className="btn-primary btn-hero"
                onClick={() => window.open(CHECKOUT_LINK, '_blank')}
              >
                Start Earning ₹7 Lakh+
              </Button>
            </div>
            <p className="body-small text-caption text-center">
              Lifetime access • 24 video lessons • Start today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={LOGO_URL} alt="Evolve Digital" className="footer-logo-img" />
              <span className="brand-name">Evolve Digital</span>
            </div>
            <p className="body-small text-caption">
              © 2026 Evolve Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
