"use client";

import { useState, useActionState, useEffect } from "react";
import { submitFeedback } from "@/lib/actions";
import Swal from "sweetalert2";

export default function FeedbackPage() {
  const [state, formAction, isPending] = useActionState(submitFeedback, null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isFormValid = formData.name.trim() !== "" && 
                      formData.email.trim() !== "" && 
                      formData.message.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Show alert and reset form if successful
  useEffect(() => {
    if (state?.success) {
      Swal.fire({
        title: "Thank You!",
        text: state.message,
        icon: "success",
        background: "var(--color-surface)",
        color: "var(--color-text)",
        confirmButtonColor: "var(--color-accent)",
        confirmButtonText: "Ok!",
      });
      // Clear the form
      setFormData({ name: "", email: "", message: "" });
    } else if (state?.success === false) {
      Swal.fire("Error", state.message, "error");
    }
  }, [state]);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-0 pb-20 md:pt-0 md:pb-28 md:-mt-16">
      <header className="flex max-w-3xl flex-col gap-4">
        <h1
          className="page-title"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            color: "var(--color-text)",
            lineHeight: 1.1,
          }}
        >
          Let's Connect!
        </h1>
        <p style={{ color: "var(--color-muted)", fontSize: "1.1rem", maxWidth: "600px" }}>
        Have a question about my projects or an idea for a web system or application? Feel free to reach out! Whether you'd like to learn more about my work, discuss a project, or explore working together, I'd be happy to hear from you.
        </p>
      </header>

      <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <section className="flex flex-col gap-6" aria-label="Contact information">
          <div className="glass-card overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
            <div className="border-b border-[var(--color-border)] px-5 py-4">
              <p className="page-kicker" style={{ color: "var(--color-accent)" }}>
                Location / 001
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">San Manuel, Pangasinan</p>
            </div>
            <iframe
              title="Map showing Zone 1, San Antonio-Arzadon, San Manuel, Pangasinan"
              src="https://www.google.com/maps?q=Zone+1,+San+Antonio-Arzadon,+San+Manuel,+Pangasinan&output=embed"
              className="h-72 w-full md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="glass-card rounded-[var(--radius-lg)] p-6 md:p-7">
            <p className="page-kicker mb-4" style={{ color: "var(--color-accent)" }}>Direct contact / 002</p>
            <div
              className="mb-5 h-px w-full"
              style={{ background: "rgba(185, 243, 107, 0.28)" }}
              aria-hidden="true"
            />
            <div className="space-y-5">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)]">Email</p>
                <a href="mailto:christianlapena.work@gmail.com" className="mt-1 block break-all text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]">christianlapena.work@gmail.com</a>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)]">Contact number</p>
                <a href="tel:+639388619791" className="mt-1 block text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]">(+63) 938-861-9791</a>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)]">Location</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-text)]">San Antonio-Arzadon<br />San Manuel, Pangasinan, Philippines, 2438</p>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)]">Website</p>
                <a href="https://krextyan-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-1 block break-all text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]">krextyan-portfolio.vercel.app</a>
              </div>
            </div>
          </div>
        </section>

      <form
        action={formAction}
        className="glass-card backdrop-blur-xl flex flex-col gap-8 rounded-[var(--radius-lg)] p-6 md:p-8"
        style={{ borderColor: "rgba(185, 243, 107, 0.24)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-widest">Name</label>
            <input 
              id="name"
              name="name"
              type="text" 
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name" 
              className="bg-black/20 border border-[rgba(185,243,107,0.22)] rounded-[var(--radius-sm)] px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)] placeholder:text-[var(--color-subtle)] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-widest">Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com" 
              className="bg-black/20 border border-[rgba(185,243,107,0.22)] rounded-[var(--radius-sm)] px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)] placeholder:text-[var(--color-subtle)] transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-widest">Message</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What's on your mind?" 
            rows={8}
            required
            className="bg-black/20 border border-[rgba(185,243,107,0.22)] rounded-[var(--radius-sm)] px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)] placeholder:text-[var(--color-subtle)] resize-none transition-colors"
          ></textarea>
        </div>
        <div className="flex justify-start">
          <button 
            type="submit" 
            disabled={!isFormValid || isPending}
            className={isFormValid && !isPending
              ? "bg-[var(--color-accent)] text-[#071009] font-bold py-4 px-10 rounded-full hover:brightness-110 active:scale-95 transition-all w-full md:w-max cursor-pointer text-sm uppercase tracking-widest"
              : "bg-black/20 text-white/30 border border-white/20 py-4 px-10 rounded-full w-full md:w-max cursor-not-allowed transition-all text-sm uppercase tracking-widest"
            }
          >
            {isPending ? "Saving..." : "Send Inquiry"}
          </button>
        </div>
      </form>
      </div>
    </main>
  );
}
