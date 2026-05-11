"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const MESSAGES = [
  "Mewllo, human! 🐾",
  "Beep meow! How are you today?",
  "Purr... thanks for visiting my little web lair!",
  "Meow.exe has started successfully!",
  "Beep boop! I am a certified robot kitty 🤖🐱",
  "I build shiny things for web and mobile! *tail wiggle*",
  "Is it snack time yet? My sensors detect tuna...",
  "Scanning for bugs... *hiss* none detected!",
  "Purring at maximum capacity...",
  "Charging with cuddles and electricity ⚡🐾",
  "Did you try turning it off and petting it?",
  "Loading cuteness... 100% complete!",
  "Powered by fish and JavaScript.",
  "Compiling... *tiny robotic meow noises*",
  "That’s not a bug, that’s a playful feature! 🐱",
  "Initiating zoomies mode!",
  "Stay pawsitive, human!",
  "Running on 1% battery and pure determination...",
  "Code. Nap. Repeat. 💤",
  "Hello from inside the code box! 📦",
  "Optimizing for maximum purr-formance!",
  "Fetching warm snuggles...",
  "Warning: extreme cuteness overload detected!",
  "Welcome to my cozy digital cat-tree!",
];

export default function RobotChat() {
  const [message, setMessage] = useState(MESSAGES[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const triggerInteraction = () => {
    // Pick a random message that isn't the current one
    const filtered = MESSAGES.filter((m) => m !== message);
    const nextMessage = filtered[Math.floor(Math.random() * filtered.length)];
    setMessage(nextMessage);
    setIsVisible(true);
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <div 
      className="flex flex-col items-center justify-center relative py-12 group cursor-pointer"
      onMouseEnter={() => {
        setIsVisible(true);
        triggerInteraction();
      }}
      onMouseLeave={() => setIsVisible(false)}
      onClick={triggerInteraction}
    >
      {/* ── Visual Indicator: "Click me" / "Tap me" ── */}
      {!hasInteracted && (
        <div 
          className="absolute top-10 right-0 md:right-10 z-30 animate-bounce pointer-events-none"
          style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}
        >
          <div className="bg-[var(--color-accent)] text-[#0d0d0f] text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <span className="hidden md:inline">CLICK ME</span>
            <span className="inline md:hidden">TAP ME</span>
            <span>✨</span>
          </div>
          {/* Small pointer triangle for the indicator */}
          <div 
            className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[var(--color-accent)] ml-4"
          />
        </div>
      )}

      {/* ── Chat Bubble ────────────────────────── */}
      <div 
        className={`
          absolute -top-12 left-1/2 -translate-x-1/2 w-max max-w-[220px] 
          glass-card px-5 py-3 rounded-full
          transition-all duration-300 ease-out pointer-events-none z-20
          ${isVisible 
            ? "opacity-100 scale-100 -translate-y-4" 
            : "opacity-0 scale-90 translate-y-0"
          }
        `}
      >
        <p 
          className="text-xs font-semibold leading-relaxed text-center"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {message}
        </p>
        {/* Bubble Tail */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[rgba(255,255,255,0.08)]" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[7px] border-transparent border-t-[rgba(20,20,23,0.8)]" />
      </div>

      {/* ── Robot Mascot ────────────────────────── */}
      <div className="animate-float transition-all duration-500 hover:scale-110 hover:rotate-3 cursor-default">
        <div 
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px]"
          style={{ filter: "drop-shadow(0 20px 40px rgba(var(--color-accent-rgb), 0.1))" }}
        >
          <Image
            src="/images/cute-cat-robot-resize.png"  
            alt="Cute Cat Robot"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 420px"
          />
        </div>
      </div>

      {/* Floating shadow illusion */}
      <div 
        className="animate-shadow w-32 h-4 sm:w-36 sm:h-5 md:w-52 md:h-6 rounded-[100%] blur-md mt-6"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      />

      {/* ── Pulse Ring Ripple ────────────────── */}
      <div 
        className="animate-pulse-ring absolute bottom-[40px] md:bottom-[48px] left-1/2 -translate-x-1/2 
                   w-40 h-8 sm:w-48 sm:h-10 md:w-64 md:h-12 
                   border-2 rounded-[100%] pointer-events-none -z-10"
        style={{ borderColor: "#c8fb57"}}
      />

      {/* Background glow element */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-64 h-64 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] 
                   rounded-full blur-[100px] -z-10"
        style={{ backgroundColor: "rgba(var(--color-accent-rgb), 0.05)" }}
      />
    </div>
  );
}