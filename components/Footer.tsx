"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/50 bg-white/80 backdrop-blur-sm">
      <Container className="py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-4"
        >
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-light tracking-tight text-slate-900">
              Luminous Estates
            </h3>
            <p className="max-w-md text-sm text-slate-600 font-light leading-relaxed">
              Curating extraordinary properties for discerning clients. Where
              elegance meets excellence in every detail.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-slate-600 font-light transition-colors hover:text-slate-900"
              >
                Home
              </Link>
              <Link
                href="/listings"
                className="text-sm text-slate-600 font-light transition-colors hover:text-slate-900"
              >
                Listings
              </Link>
              <Link
                href="/contact"
                className="text-sm text-slate-600 font-light transition-colors hover:text-slate-900"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Connect
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600 font-light">
              <a
                href="mailto:info@luminousestates.com"
                className="transition-colors hover:text-slate-900"
              >
                info@luminousestates.com
              </a>
              <a
                href="tel:+1234567890"
                className="transition-colors hover:text-slate-900"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"
        >
          <p className="font-light">
            © {new Date().getFullYear()} Luminous Estates. All rights reserved.
          </p>
          <p className="font-light">
            Conceptual interface for demonstration purposes only.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
