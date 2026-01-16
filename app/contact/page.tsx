"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">Contact</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/70 font-light">
              Have questions about our projects, features, or pricing? Need a demo? Our teams will help you.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Office Locations */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-slate-900">Head Office</h2>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Mumbai</p>
                </div>
              </div>
              <div className="pl-16 space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  <strong className="block text-slate-900 font-medium">Luminous Estates,</strong>
                  Bandra Kurla Complex,<br />
                  Mumbai - 400051.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Luminous+Estates+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700 underline underline-offset-4"
                >
                  Get Direction
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-slate-900">Corporate Office</h2>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Chennai</p>
                </div>
              </div>
              <div className="pl-16 space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  <strong className="block text-slate-900 font-medium">Luminous Estates,</strong>
                  Anna Nagar,<br />
                  Chennai - 600040.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Luminous+Estates+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700 underline underline-offset-4"
                >
                  Get Direction
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Inquiries & Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-widest">For Inquiries & Booking</h3>
                <h2 className="text-3xl font-light text-slate-900">Contact Us</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:+918220713217" className="text-lg font-medium text-slate-900 hover:text-slate-700 transition-colors">
                    +91 8220713217
                  </a>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:info@luminousestates.com" className="text-lg font-medium text-slate-900 hover:text-slate-700 transition-colors">
                    info@luminousestates.com
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all bg-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-900">
                  Phone number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all bg-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium tracking-wide hover:bg-slate-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent" : "Submit"}
                {!isSubmitting && !isSubmitted && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>
        </div>
      </Container>

      {/* Location / Image Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full mt-12 bg-slate-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/10 z-10" />
          {/* Fallback to the image used in home page or similar luxury house */}
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="North Facing House"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6 drop-shadow-lg">
              Visit Our Locations
            </h2>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 font-medium tracking-wide"
            >
              <MapPin className="w-5 h-5" />
              Locate Our Nearest Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
