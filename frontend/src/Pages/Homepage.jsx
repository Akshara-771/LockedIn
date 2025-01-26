import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import FAQSection from "../Components/FAQSection/FAQSection";
import avatar_icon from "../Assets/My little star.jpg";

import "./Homepage.css";

const Homepage = () => {
  const [features, setFeatures] = useState([
    {
      title: "Track Your Tasks",
      description: "Add and organize tasks with deadlines.",
      icon: "📝",
      isActive: false, // Track if description is visible
    },
    {
      title: "Set Goals",
      description: "Establish daily, weekly, or monthly productivity goals.",
      icon: "🎯",
      isActive: false,
    },
    {
      title: "Focus Mode",
      description: "Block distractions to maintain concentration.",
      icon: "💡",
      isActive: false,
    },
    {
      title: "Pomodoro Timer",
      description: "Utilize built-in timers for focused work sessions.",
      icon: "⏱️",
      isActive: false,
    },
    {
      title: "Analyze Progress",
      description: "Access detailed productivity insights.",
      icon: "📊",
      isActive: false,
    },
    {
      title: "Earn Rewards",
      description: "Complete tasks to unlock motivational rewards.",
      icon: "🏆",
      isActive: false,
    },
  ]);

  const handleToggle = (index) => {
    const updatedFeatures = [...features];
    updatedFeatures[index].isActive = !updatedFeatures[index].isActive;
    setFeatures(updatedFeatures);
  };

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header tagline="LockedIn" />

      <Hero
        description="An easy-to-use app that helps you stay on track by tracking tasks, setting time limits, and providing reminders."
        image={avatar_icon}
      />

      {/* Features Section */}
      <div className="features max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card p-4 rounded-lg shadow-md bg-white ${
              feature.isActive ? "border-2 border-indigo-500" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="mr-2">{feature.icon}</span>
              {feature.title}
            </h3>
            {feature.isActive && (
              <p className="text-gray-700 mt-2">{feature.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="faq-section max-w-3xl mx-auto text-center mt-12 p-4">
        <FAQSection
          faqs={[
            {
              question: "How does the app help me stay focused?",
              answer:
                "The app provides tools like task management, focus mode, and Pomodoro timers to keep you on track.",
            },
            {
              question: "Is the app free to use?",
              answer:
                "Yes, the basic features are free. We also offer premium features for advanced productivity tools.",
            },
            {
              question: "Can I sync my tasks across devices?",
              answer:
                "Absolutely! Your tasks and data sync seamlessly across all devices.",
            },
            {
              question: "What is Focus Mode?",
              answer:
                "Focus Mode blocks distractions and keeps you focused on your current task.",
            },
            {
              question: "How do I earn rewards?",
              answer:
                "You earn rewards by completing tasks and staying consistent with your goals.",
            },
          ]}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
