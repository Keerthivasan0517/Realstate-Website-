"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface Property {
  id: string;
  title: string;
  location: string;
  priceFormatted: string;
  image: string;
  beds: number;
  baths: number;
  size: number;
  status: string;
}

interface PropertyCardProps {
  property: Property;
  compact?: boolean;
}

export function PropertyCard({ property, compact }: PropertyCardProps) {
  const content = (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 transition-all duration-500 hover:shadow-2xl hover:ring-slate-200"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={property.image}
          alt={property.title}
          className="h-48 w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute left-4 top-4 rounded-full bg-slate-900/90 px-3 py-1.5 text-[11px] font-medium text-white shadow-lg backdrop-blur-sm"
        >
          {property.status}
        </motion.span>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-base font-semibold tracking-tight text-slate-900 sm:text-lg group-hover:text-slate-700 transition-colors">
            {property.title}
          </h3>
          <p className="line-clamp-1 text-sm text-slate-500 font-light">
            {property.location}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4 text-slate-600">
            <span className="inline-flex items-center gap-2 font-light">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>
                {property.beds} bd · {property.baths} ba
              </span>
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
            <span className="hidden text-slate-500 font-light sm:inline">
              {property.size} m²
            </span>
          </div>
          <p className="text-lg font-semibold text-slate-900">
            {property.priceFormatted}
          </p>
        </div>
        {!compact && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="mt-2 flex items-center justify-between pt-3 border-t border-slate-100"
          >
            <p className="text-[11px] text-slate-500 font-light">
              Tap for gallery & full details.
            </p>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-8 items-center justify-center rounded-full bg-slate-900 px-4 text-[11px] font-medium text-white transition-colors group-hover:bg-black"
            >
              View details
            </motion.span>
          </motion.div>
        )}
      </div>
    </motion.article>
  );

  return (
    <Link href={`/listings/${property.id}`} className="block h-full">
      {content}
    </Link>
  );
}
