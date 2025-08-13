import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const features = [
    { icon: "🎯", title: "AI Webcam Focus", desc: "Smart tools that help you monitor and improve your study habits." },
    { icon: "⏱️", title: "Distraction Timer", desc: "Track how long you get distracted and build better focus." },
    { icon: "📊", title: "Study Insights", desc: "Get daily reports and personalized suggestions." }
  ];

  const steps = [
    { step: "1", title: "Enable Webcam", desc: "Allow the app to access your webcam for real-time focus tracking." },
    { step: "2", title: "Stay in Frame", desc: "Make sure you’re visible in the camera while studying." },
    { step: "3", title: "Get Insights", desc: "Receive instant alerts when distracted and daily focus summaries." }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300">

        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero */}
        <section className="text-center py-12 px-4">
          <h2 className="text-4xl font-bold mb-4">Stay Focused. Study Smart.</h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            AI + Webcam powered app to keep distractions away and give you real-time focus insights.
          </p>
          <img
            src="https://i.ibb.co/Rp7KzcRP/Screenshot-2025-05-12-011300.png"
            alt="App"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </section>

        {/* Features */}
        <section id="features" className="bg-gray-50 dark:bg-gray-800 py-12 px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">Features</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.desc}
              />
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-12 px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">How It Works</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center">
                <div className="text-2xl font-bold text-indigo-500 mb-2">{step.step}</div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-12 px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">What Users Say</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
              <p>"It beeped exactly when I looked at my phone. Game changer for studying!"</p>
              <span className="block text-right mt-2">– Student, Delhi</span>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
              <p>"I could see how long I was distracted every day. Helped me build discipline."</p>
              <span className="block text-right mt-2">– Learner, Bangalore</span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-600 text-white py-12 px-4 text-center">
          <h3 className="text-3xl font-semibold mb-4">Ready to Improve Your Focus?</h3>
          <p className="mb-6">Join our early users and start tracking your distractions today.</p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
            Get Started
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 py-6 text-center text-sm border-t border-gray-200 dark:border-gray-700">
          <p>© 2025 Smart Focus App. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#how-it-works" className="hover:underline">How It Works</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
