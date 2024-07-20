import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqData = [
    {
      question: "What is the ERROR_418 Hackathon?",
      answer: "Error 418 Hackathon is a 36-hour event hosted by MuLearn UCEK that brings together students to collaborate on real projects, share knowledge, and innovate in technology."
    },
    {
      question: "Who can participate?",
      answer: "The hackathon is open to all students with a passion for technology and innovation, regardless of experience level."
    },
    {
      question: "What types of projects are encouraged?",
      answer: "Participants are encouraged to work on innovative projects that address real-world challenges, bringing unique ideas and solutions to life."
    },
    {
      question: "How can I join the ERROR_418 Hackathon?",
      answer: "Register via our official website or the provided registration link. Stay updated for registration dates and deadlines."
    },
    {
      question: "Can I participate individually in the hackathon?",
      answer: "Yes, participants can join individually or in teams of up to 4 members."
    },
    {
      question: "How do I know my registration is confirmed?",
      answer: "The organizing team will approve and confirm your participation. Shortlisted teams will receive a confirmation email."
    },
    {
      question: "What are the perks of participating?",
      answer: "Participants can expect access to mentorship from industry experts, valuable networking opportunities, recognition for innovative projects, and exclusive tech talks."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white pb-24 px-8 sm:px-16 lg:px-32" style={{ backgroundColor: "#020b12" }}>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <h1 className="custom-heading2">FAQ</h1>
        </div>

        {faqData.map((faq, index) => (
          <div key={index} className="relative border-b border-gray-300 py-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-medium" style={{ color: "#E292E7" }}>{faq.question}</h3>
              <span className="text-3xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="lg:text-lg text-m mt-4" style={{ color: "#EEE8DA" }}>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
