"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type AppState = "welcome" | "inprogress";

export default function Home() {
  const [state, setState] = useState<AppState>("welcome");

  const handleLaunch = () => {
    setState("inprogress");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0d0d1a] via-[#1a1425] to-[#0d0d1a] flex flex-col">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand-gold/15"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [null, `${Math.random() * 80}%`, `${Math.random() * 100}%`],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 py-12">
        <AnimatePresence mode="wait">
          {state === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center max-w-4xl mx-auto"
            >
              {/* Logo */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 1, bounce: 0.4 }}
                className="mb-6 animate-float"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-sm border-2 border-brand-gold/30 flex items-center justify-center shadow-2xl animate-pulse-glow overflow-hidden p-2">
                  <Image
                    src="/logo.jpeg"
                    alt="PADMAI Logo"
                    width={150}
                    height={150}
                    className="object-contain rounded-full"
                    priority
                  />
                </div>
              </motion.div>

              {/* App Name */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-brown-light bg-clip-text text-transparent animate-gradient"
              >
                PADMAI
              </motion.h1>

              {/* Collaboration line */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="text-sm md:text-base text-brand-gold/70 tracking-widest uppercase mb-4"
              >
                In collaboration with Kilbil High School
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-4"
              >
                Your School, One App Away
              </motion.p>

              {/* Since badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 mb-8"
              >
                <span className="text-brand-gold text-sm font-medium">Since 2008</span>
              </motion.div>

              {/* Live status banner */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="mb-10 px-6 py-3 rounded-xl border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm"
              >
                <p className="text-amber-300 text-base md:text-lg font-medium flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
                  </span>
                  Application will be live within 2 - 3 hours in progress
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-gray-400 text-lg mb-12 max-w-2xl leading-relaxed"
              >
                A complete school management solution that brings together{" "}
                <span className="text-brand-blue-light font-semibold">Parents</span>,{" "}
                <span className="text-brand-gold font-semibold">Teachers</span>, and{" "}
                <span className="text-brand-brown-light font-semibold">School Owners</span>{" "}
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
                  gradient="from-brand-blue/10 to-brand-blue-light/5"
                  border="border-brand-blue/20"
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
                  gradient="from-brand-gold/10 to-brand-gold-light/5"
                  border="border-brand-gold/20"
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
                  gradient="from-brand-brown/10 to-brand-brown-light/5"
                  border="border-brand-brown/20"
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
                className="relative px-12 py-5 text-xl font-bold text-white rounded-full bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown shadow-2xl animate-pulse-glow cursor-pointer overflow-hidden group"
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
                Click to check the launch status
              </motion.p>
            </motion.div>
          )}

          {state === "inprogress" && (
            <motion.div
              key="inprogress"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex flex-col items-center text-center max-w-2xl mx-auto"
            >
              {/* Logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1, bounce: 0.5 }}
                className="mb-8"
              >
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-brand-gold/30 flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/logo.jpeg"
                      alt="PADMAI Logo"
                      width={120}
                      height={120}
                      className="object-contain rounded-full"
                    />
                  </div>
                  {/* Spinning ring */}
                  <div className="absolute -inset-3 rounded-full border-2 border-transparent border-t-brand-gold border-r-brand-gold/50 animate-spin-slow" />
                </div>
              </motion.div>

              {/* In Progress Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="mb-6 px-6 py-2 rounded-full bg-amber-500/15 border border-amber-500/30"
              >
                <span className="text-amber-400 font-bold text-lg flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
                  </span>
                  In Progress
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-gold-light to-brand-gold bg-clip-text text-transparent"
              >
                Almost There!
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-gray-300 mb-4"
              >
                The PADMAI app is being prepared for launch.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-brand-gold/60 uppercase tracking-widest mb-8"
              >
                In collaboration with Kilbil High School
              </motion.p>

              {/* Progress info box */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="w-full max-w-md p-6 rounded-2xl bg-white/5 border border-brand-gold/15 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">Estimated Launch</p>
                    <p className="text-gray-400 text-sm">Within 2 - 3 hours</p>
                  </div>
                </div>

                {/* Progress steps */}
                <div className="space-y-3">
                  <ProgressStep label="App Development" done />
                  <ProgressStep label="Testing & QA" done />
                  <ProgressStep label="Play Store Review" active />
                  <ProgressStep label="Going Live" />
                </div>
              </motion.div>

              {/* Play Store placeholder */}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.kilbil.highschool"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-gray-700 rounded-xl hover:border-brand-gold/50 transition-all duration-300 shadow-xl opacity-70 hover:opacity-100"
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#4285F4" />
                  <path d="M17.556 8.248l-3.764 3.752 3.764 3.752 4.247-2.392a1.003 1.003 0 0 0 0-1.72l-4.247-2.392z" fill="#FBBC04" />
                  <path d="M3.609 1.814l10.183 10.183 3.764-3.749L6.534.527C6.1.298 5.594.254 5.13.4c-.226.07-.438.183-.624.343l-.002.002-.894.87-.001.2z" fill="#34A853" />
                  <path d="M3.609 22.186l.895.869.001.002c.186.16.398.274.624.343.464.146.97.102 1.404-.127l11.022-5.72-3.763-3.753-10.183 10.186z" fill="#EA4335" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Coming soon on</p>
                  <p className="text-lg font-semibold text-white">Google Play</p>
                </div>
              </motion.a>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setState("welcome")}
                className="mt-8 px-6 py-3 text-sm text-gray-400 border border-gray-700 rounded-full hover:text-white hover:border-brand-gold/40 transition-all cursor-pointer"
              >
                Back to Home
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="PADMAI"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-brand-gold">PADMAI</p>
                <p className="text-xs text-gray-500">In collaboration with Kilbil High School</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span>Kishor Nerkar</span>
              </div>
              <a href="tel:9021487657" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                <svg className="w-4 h-4 text-brand-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>9021487657</span>
              </a>
              <a href="mailto:kishornerkar258@gmail.com" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                <svg className="w-4 h-4 text-brand-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span>kishornerkar258@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
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
            <span className="text-brand-gold mt-0.5">&#x2022;</span>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProgressStep({ label, done, active }: { label: string; done?: boolean; active?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
          done
            ? "bg-green-500/20 text-green-400 border border-green-500/30"
            : active
            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
            : "bg-gray-700/30 text-gray-500 border border-gray-700/30"
        }`}
      >
        {done ? (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        ) : active ? (
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-gray-600" />
        )}
      </div>
      <span
        className={`text-sm ${
          done ? "text-green-400" : active ? "text-amber-300" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
