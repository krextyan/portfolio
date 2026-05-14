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
    <div className="max-w-3xl mx-auto px-6 py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
            color: "var(--color-text)",
            lineHeight: 1.1,
          }}
        >
          Feedback
        </h1>
        <p style={{ color: "var(--color-muted)", fontSize: "1.1rem", maxWidth: "600px" }}>
          I&apos;d love to hear your thoughts, suggestions, or just a simple hello. 
          Your feedback helps me improve!
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-widest">Name</label>
            <input 
              id="name"
              name="name"
              type="text" 
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name" 
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] text-white transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-widest">Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com" 
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] text-white transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-widest">Message</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What's on your mind?" 
            rows={8}
            required
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] text-white resize-none transition-colors"
          ></textarea>
        </div>
        <div className="flex justify-start">
          <button 
            type="submit" 
            disabled={!isFormValid || isPending}
            className={isFormValid && !isPending
              ? "bg-[var(--color-accent)] text-black font-bold py-4 px-10 rounded-md hover:opacity-90 active:scale-95 transition-all w-full md:w-max cursor-pointer text-sm uppercase tracking-widest" 
              : "bg-black text-white/30 border border-white/20 py-4 px-10 rounded-md w-full md:w-max cursor-not-allowed transition-all text-sm uppercase tracking-widest"
            }
          >
            {isPending ? "Saving..." : "Submit Feedback"}
          </button>
        </div>
      </form>
    </div>
  );
}