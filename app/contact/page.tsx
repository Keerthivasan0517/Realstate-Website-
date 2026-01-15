"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please fill out this field";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="bg-slate-50">
      <Container className="grid gap-10 py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start md:py-16">
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Let&apos;s talk about your next move
            </h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Share a few details about what you&apos;re looking for and a
              dedicated advisor will respond with a tailored shortlist of
              properties.
            </p>
          </header>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="space-y-5 rounded-3xl bg-emerald-50 border border-emerald-200 p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                      Message sent successfully!
                    </h3>
                    <p className="text-sm text-emerald-700">
                      Thank you for contacting us. We&apos;ll get back to you
                      within 24 hours with a personalized response.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl bg-white p-6 shadow-soft md:p-7"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium uppercase tracking-[0.22em] text-slate-500"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-2xl border px-3.5 py-2.5 text-sm text-slate-900 outline-none transition ${
                        errors.name
                          ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                          : "border-slate-200 bg-slate-50 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
                      }`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium uppercase tracking-[0.22em] text-slate-500"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-2xl border px-3.5 py-2.5 text-sm text-slate-900 outline-none transition ${
                        errors.email
                          ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                          : "border-slate-200 bg-slate-50 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-[0.22em] text-slate-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full resize-none rounded-2xl border px-3.5 py-2.5 text-sm text-slate-900 outline-none transition ${
                      errors.message
                        ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-slate-200 bg-slate-50 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
                    }`}
                    placeholder="Tell us about your ideal property, budget, and preferred neighborhoods."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-50 shadow-soft transition hover:-translate-y-0.5 hover:bg-black hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 sm:w-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send message"
                  )}
                </button>

                <p className="text-xs text-slate-500">
                  This form is for demonstration only. No data will be submitted
                  or stored.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <aside className="space-y-5 rounded-3xl bg-slate-900 px-6 py-6 text-slate-50 md:px-7 md:py-7">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Why Luminous Estates
            </p>
            <p className="text-sm text-slate-200">
              We combine market insight with a design-first approach to help you
              discover spaces that feel effortless to live in.
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-200">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                Response time
              </p>
              <p>Within one business day for all inquiries.</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                Availability
              </p>
              <p>Viewings 7 days a week, including evenings.</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                Offices
              </p>
              <p>Based in central districts with local specialists.</p>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
