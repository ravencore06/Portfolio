import { motion, AnimatePresence } from 'motion/react';
import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { GraduationCap, Award, Trophy, Info, BookOpen, Languages, Sparkles } from 'lucide-react';

function EducationAchievements() {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('certifications');

  const tabs = [
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'hackathons', label: 'Hackathons', icon: Trophy },
    { id: 'additional', label: 'Additional Info', icon: Info }
  ];

  const certifications = [
    {
      title: 'McKinsey Forward Program',
      issuer: 'McKinsey & Company',
      date: 'Completed'
    },
    {
      title: 'AWS AI Practitioner Challenge',
      issuer: 'Udacity',
      date: 'May 2026'
    },
    {
      title: 'ServiceNow Virtual Internship',
      issuer: 'ServiceNow University & AICTE-SmartBridge',
      date: 'Apr 2026',
      certId: 'Cert ID: SNU014123'
    },
    {
      title: 'Breast Cancer Prediction using ML',
      issuer: 'Coursera',
      date: 'Sep 2025'
    },
    {
      title: 'Prompt Engineering Basics',
      issuer: 'IBM',
      date: 'Aug 2025'
    },
    {
      title: 'Robotics and Controls Job Simulation',
      issuer: 'Forage / Johnson & Johnson',
      date: 'Completed'
    },
    {
      title: 'Quantum Fundamentals',
      issuer: 'Qubitech',
      date: 'Completed'
    },
    {
      title: 'Inclusive Open Source Community Orientation',
      issuer: 'The Linux Foundation (LFC102)',
      date: 'Completed'
    }
  ];

  const hackathons = [
    {
      title: 'ShareFest 8-Hour Hackathon',
      role: 'Participant / Builder',
      description: 'Rapid prototyping under strict time constraints to deliver an AI agent solution.'
    },
    {
      title: 'Smart India Hackathon (SIH)',
      role: 'Participant / Builder',
      description: 'Worked on a national-level government problem statement challenge.'
    },
    {
      title: 'GenZPulse | TechSprint',
      role: 'Participant',
      description: 'Collaborated in a fast-paced environment on developer tools.'
    },
    {
      title: 'Flipkart Gridlock 2.0 Hackathon',
      role: 'Semi-Finalist',
      description: 'Designed scalable retail tech infrastructure to clear logistics bottlenecks.'
    }
  ];

  const additional = {
    languages: [
      { name: 'English', level: 'Professional' },
      { name: 'Telugu', level: 'Native' }
    ],
    interests: [
      'AI agents', 'code quality', 'open-source', 'assistive technology', 'robotics', 'creator tools'
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="achievements"
      className="py-24 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-[0.08] ${
            theme === 'dark' ? 'bg-[#b8f2e6]' : 'bg-[#aed9e0]'
          }`}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'
            }`}
          >
            Certifications & Achievements
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`h-1 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-[#b8f2e6]' : 'bg-[#aed9e0]'
            }`}
          />
        </motion.div>

        {/* Custom Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  isActive
                    ? theme === 'dark'
                      ? 'bg-[#b8f2e6] text-[#1c1c1c] shadow-lg shadow-[#b8f2e6]/25'
                      : 'bg-[#aed9e0] text-[#5e6472] shadow-lg shadow-[#aed9e0]/40'
                    : theme === 'dark'
                      ? 'bg-[#5e6472]/20 text-[#b8f2e6] hover:bg-[#5e6472]/30 border border-[#b8f2e6]/10'
                      : 'bg-white/40 text-[#5e6472] hover:bg-white/60 border border-[#aed9e0]/20'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className={`min-h-[400px] p-6 md:p-8 rounded-3xl backdrop-blur-sm border ${
          theme === 'dark'
            ? 'bg-[#5e6472]/15 border-[#b8f2e6]/15'
            : 'bg-white/50 border-[#aed9e0]/30'
        } shadow-[0_4px_25px_rgba(0,0,0,0.02)]`}>
          <AnimatePresence mode="wait">

            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                      theme === 'dark'
                        ? 'bg-[#b8f2e6]/5 border-[#b8f2e6]/10 hover:border-[#b8f2e6]/30 hover:bg-[#b8f2e6]/10'
                        : 'bg-[#aed9e0]/10 border-[#aed9e0]/20 hover:border-[#aed9e0]/40 hover:bg-[#aed9e0]/20'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${
                      theme === 'dark' ? 'bg-[#b8f2e6]/15 text-[#b8f2e6]' : 'bg-[#aed9e0]/35 text-[#5e6472]'
                    }`}>
                      <Award size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold leading-snug mb-1 truncate ${
                        theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'
                      }`}>
                        {cert.title}
                      </h3>
                      <p className="text-sm opacity-80 mb-1">{cert.issuer}</p>
                      <div className="flex flex-wrap items-center gap-2 text-xs opacity-65">
                        <span>{cert.date}</span>
                        {cert.certId && (
                          <>
                            <span>•</span>
                            <span className="font-medium">{cert.certId}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'hackathons' && (
              <motion.div
                key="hackathons"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-6"
              >
                {hackathons.map((hack, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={`p-5 rounded-2xl border flex flex-col md:flex-row md:items-start justify-between gap-3 ${
                      theme === 'dark'
                        ? 'bg-[#b8f2e6]/5 border-[#b8f2e6]/10'
                        : 'bg-[#aed9e0]/10 border-[#aed9e0]/20'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl ${
                        theme === 'dark' ? 'bg-[#b8f2e6]/15 text-[#b8f2e6]' : 'bg-[#aed9e0]/35 text-[#5e6472]'
                      }`}>
                        <Trophy size={20} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold ${
                          theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'
                        }`}>
                          {hack.title}
                        </h3>
                        <p className={`text-sm leading-relaxed mt-1 opacity-80 ${
                          theme === 'dark' ? 'text-[#d7f5ef]' : 'text-[#5e6472]'
                        }`}>
                          {hack.description}
                        </p>
                      </div>
                    </div>
                    <span className={`self-start md:self-auto px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                      hack.role === 'Semi-Finalist'
                        ? theme === 'dark'
                          ? 'bg-[#b8f2e6]/25 text-[#b8f2e6]'
                          : 'bg-[#aed9e0]/40 text-[#5e6472]'
                        : theme === 'dark'
                          ? 'bg-[#5e6472]/30 text-[#d7f5ef]'
                          : 'bg-[#5e6472]/10 text-[#5e6472]'
                    }`}>
                      {hack.role}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'additional' && (
              <motion.div
                key="additional"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Languages Card */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-bold flex items-center gap-2 border-b pb-2 ${
                    theme === 'dark' ? 'text-[#b8f2e6] border-[#b8f2e6]/20' : 'text-[#5e6472] border-[#aed9e0]/40'
                  }`}>
                    <Languages size={20} />
                    <span>Languages</span>
                  </h3>
                  <div className="space-y-4 pt-2">
                    {additional.languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-semibold text-lg">{lang.name}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          theme === 'dark' ? 'bg-[#b8f2e6]/20 text-[#b8f2e6]' : 'bg-[#aed9e0]/30 text-[#5e6472]'
                        }`}>
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests Card */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-bold flex items-center gap-2 border-b pb-2 ${
                    theme === 'dark' ? 'text-[#b8f2e6] border-[#b8f2e6]/20' : 'text-[#5e6472] border-[#aed9e0]/40'
                  }`}>
                    <Sparkles size={20} />
                    <span>Interests & Focus</span>
                  </h3>
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {additional.interests.map((interest, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1.5 rounded-xl text-sm font-medium border ${
                          theme === 'dark'
                            ? 'bg-[#b8f2e6]/5 border-[#b8f2e6]/15 text-[#b8f2e6]'
                            : 'bg-[#aed9e0]/10 border-[#aed9e0]/20 text-[#5e6472]'
                        }`}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default EducationAchievements;
