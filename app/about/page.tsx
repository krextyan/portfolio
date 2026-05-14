import Image from 'next/image';
import type { Metadata } from 'next';
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: 'About Me | IT Student Intern',
  description: 'Profile and background of an aspiring software engineer.',
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 flex flex-col items-center text-center">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-glow-color {
          0% { 
            transform: rotate(0deg); 
            filter: drop-shadow(0 0 15px var(--color-accent)) hue-rotate(0deg); 
          }
          100% { 
            transform: rotate(360deg); 
            filter: drop-shadow(0 0 15px var(--color-accent)) hue-rotate(360deg); 
          }
        }
        .animate-spin-glow-color {
          animation: spin-glow-color 3s linear infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 25ch }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: var(--color-accent) }
        }
        .typing-effect {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid var(--color-accent);
          animation: typing 2s steps(20, end), blink-caret 0.75s step-end infinite;
        }
      `}} />

      {/* Profile Photo */}
      <div className="relative w-40 h-40 mb-8 flex items-center justify-center group">
        {/* Animated Glowing Ring (Loading Style) */}
        <div
          className="absolute -inset-3 rounded-full animate-spin-glow-color"
          style={{
            background: 'conic-gradient(from 0deg, transparent 20%, var(--color-accent), var(--color-accent))',
          }}
        />

        {/* Image Container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl z-10">
          <Image
            src="/images/profile.jpg"
            alt="Profile Photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Identity */}
      <div className="typing-effect mb-2">
        <h1 className="text-4xl font-bold text-white">Christian Lapeña</h1>
      </div>
      <p className="text-xl font-medium mb-8" style={{color: "#c8fb57"}}>IT Student Intern</p>

      {/* Description */}
      <div className="max-w-2xl text-lg text-gray-300 leading-relaxed space-y-4 text-justify">
        <p>
          Hello! I am a passionate IT Student Intern currently focused on mastering modern web technologies and software development practices. I have a deep interest in building scalable applications and solving complex technical challenges.
        </p>
        <p>
          During my internship, I have been honing my skills in frameworks like Next.js and React, while learning how to write clean, maintainable code. I am eager to apply my academic knowledge to real-world projects and grow alongside a team of experienced developers.
        </p>
      </div>

      {/* Download Resume Button */}
      <div className="mt-8">
        <Button label="Download CV" href="/resume.pdf" variant="primary" download="Christian_Lapena_Resume.pdf" />
      </div>
    </main>
  );
}