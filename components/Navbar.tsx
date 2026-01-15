"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md"
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.span
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-xs font-light tracking-wider text-white shadow-lg transition-colors group-hover:bg-black"
          >
            LE
          </motion.span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-light tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
              Luminous Estates
            </span>
            <span className="text-[10px] text-slate-500 font-light tracking-wide">
              Ultra-Luxury Properties
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm sm:flex">
          {navItems.map((item, index) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className={`relative py-2 font-light transition-colors ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-slate-900"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm px-5 py-2 text-xs font-medium text-slate-900 shadow-sm transition-all hover:border-slate-300 hover:bg-white hover:shadow-md sm:inline-flex"
          >
            <motion.span
              whileHover={{ x: 2 }}
              className="inline-flex items-center gap-2"
            >
              Get in touch
              <span className="text-[10px]">→</span>
            </motion.span>
          </Link>
        </motion.div>
      </Container>
    </motion.header>
  );
}
