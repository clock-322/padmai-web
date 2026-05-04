"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

type AppState = "welcome" | "countdown" | "launched";

export default function Home() {
  const [state, setState] = useState<AppState>("welcome");
  const [count, setCount] = useState(5);

  const fireConfetti = useCallback(() => {
    const duration = 4000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#6366f1", "#a855f7", "#ec4899", "#f59e0b", "#10b981"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#6366f1", "#a855f7", "#ec4899", "#f59e0b", "#10b981"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Big burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#6366f1", "#a855f7", "#ec4899", "#f59e0b", "#10b981"],
    });
  }, []);

  useEffect(() => {
    if (state !== "countdown") return;

    if (count === 0) {
      setState("launched");
      fireConfetti();
      return;
    }

    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [state, count, fireConfetti]);

  const handleLaunch = () => {
    setState("countdown");
    setCount(5);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-500/20"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, Math.random() * -200, Math.random() * 200],
              x: [null, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <AnimatePresence mode="wait">
          {state === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center max-w-4xl mx-auto"
            >
              {/* Logo / School Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 1, bounce: 0.5 }}
                className="mb-8"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl animate-pulse-glow">
                  <svg
                    className="w-14 h-14 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
              >
                Kilbil High School
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-8"
              >
                Your School, One App Away
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-gray-400 text-lg mb-12 max-w-2xl leading-relaxed"
              >
                A complete school management solution that brings together{" "}
                <span className="text-indigo-400 font-semibold">Parents</span>,{" "}
                <span className="text-purple-400 font-semibold">Teachers</span>, and{" "}
                <span className="text-pink-400 font-semibold">School Owners</span>{" "}
                on one unified platform.
              </motion.p>

              {/* Feature Cards */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full"
              >
                <FeatureCard
                  icon="👨‍👩‍👧"
                  title="For Parents"
                  features={[
                    "Track attendance & grades",
                    "Fee payment & receipts",
                    "Direct teacher communication",
                    "Homework & event updates",
                  ]}
                  gradient="from-blue-500/10 to-indigo-500/10"
                  border="border-indigo-500/20"
                  delay={1.0}
                />
                <FeatureCard
                  icon="👩‍🏫"
                  title="For Teachers"
                  features={[
                    "Mark attendance digitally",
                    "Share assignments & notes",
                    "Grade management system",
                    "Parent-teacher meetings",
                  ]}
                  gradient="from-purple-500/10 to-fuchsia-500/10"
                  border="border-purple-500/20"
                  delay={1.2}
                />
                <FeatureCard
                  icon="🏫"
                  title="For School Owners"
                  features={[
                    "Complete admin dashboard",
                    "Fee collection & reports",
                    "Staff management",
                    "Analytics & insights",
                  ]}
                  gradient="from-pink-500/10 to-rose-500/10"
                  border="border-pink-500/20"
                  delay={1.4}
                />
              </motion.div>

              {/* Launch Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLaunch}
                className="relative px-12 py-5 text-xl font-bold text-white rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl animate-pulse-glow cursor-pointer overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                  Launch App
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="mt-6 text-sm text-gray-500"
              >
                Click to begin the countdown to our app launch!
              </motion.p>
            </motion.div>
          )}

          {state === "countdown" && (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl md:text-3xl text-gray-300 mb-8"
              >
                Launching in...
              </motion.p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={count}
                  initial={{ scale: 0, rotateY: -90, opacity: 0 }}
                  animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                  exit={{ scale: 0, rotateY: 90, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-2xl">
                    <span className="text-8xl md:text-9xl font-bold text-white">
                      {count}
                    </span>
                  </div>
                  {/* Ring animation */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-indigo-400"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-purple-400"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                  />
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex gap-2"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < 5 - count
                        ? "bg-indigo-500"
                        : "bg-gray-600"
                    }`}
                    animate={
                      i < 5 - count
                        ? { scale: [1, 1.3, 1] }
                        : {}
                    }
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {state === "launched" && (
            <motion.div
              key="launched"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex flex-col items-center text-center max-w-2xl mx-auto"
            >
              {/* Success icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, bounce: 0.6 }}
                className="mb-8"
              >
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl">
                  <motion.svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              >
                We&apos;re Live!
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-300 mb-8"
              >
                Kilbil High School App is now available on Google Play Store!
              </motion.p>

              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.kilbil.highschool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black border-2 border-gray-700 rounded-xl hover:border-green-500 transition-all duration-300 shadow-xl"
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
                    fill="#4285F4"
                  />
                  <path
                    d="M17.556 8.248l-3.764 3.752 3.764 3.752 4.247-2.392a1.003 1.003 0 0 0 0-1.72l-4.247-2.392z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M3.609 1.814l10.183 10.183 3.764-3.749L6.534.527C6.1.298 5.594.254 5.13.4c-.226.07-.438.183-.624.343l-.002.002-.894.87-.001.2z"
                    fill="#34A853"
                  />
                  <path
                    d="M3.609 22.186l.895.869.001.002c.186.16.398.274.624.343.464.146.97.102 1.404-.127l11.022-5.72-3.763-3.753-10.183 10.186z"
                    fill="#EA4335"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Get it on
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Google Play
                  </p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12 grid grid-cols-3 gap-8 text-center"
              >
                <div>
                  <p className="text-3xl font-bold text-indigo-400">3</p>
                  <p className="text-sm text-gray-400">User Roles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-400">20+</p>
                  <p className="text-sm text-gray-400">Features</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-pink-400">1</p>
                  <p className="text-sm text-gray-400">Platform</p>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setState("welcome");
                  setCount(5);
                }}
                className="mt-10 px-6 py-3 text-sm text-gray-400 border border-gray-700 rounded-full hover:text-white hover:border-gray-500 transition-all cursor-pointer"
              >
                Watch Again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  features,
  gradient,
  border,
  delay,
}: {
  icon: string;
  title: string;
  features: string[];
  gradient: string;
  border: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`p-6 rounded-2xl bg-gradient-to-br ${gradient} border ${border} backdrop-blur-sm`}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <ul className="text-sm text-gray-400 space-y-2 text-left">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-indigo-400 mt-0.5">&#x2022;</span>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
