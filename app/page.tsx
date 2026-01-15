"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PropertyCard } from "@/components/PropertyCard";
import { Container } from "@/components/Container";
import { SearchBar } from "@/components/SearchBar";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { GoogleMapComponent } from "@/components/GoogleMap";
import { featuredProperties, allProperties } from "@/data/properties";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const amenities = [
  { icon: "🏊", title: "Infinity Pool", description: "Private pool with panoramic views" },
  { icon: "🏋️", title: "Fitness Center", description: "State-of-the-art equipment" },
  { icon: "🍷", title: "Wine Cellar", description: "Temperature-controlled storage" },
  { icon: "🚗", title: "Valet Parking", description: "Concierge parking service" },
  { icon: "🌳", title: "Private Gardens", description: "Landscaped outdoor spaces" },
  { icon: "🔐", title: "24/7 Security", description: "Advanced security systems" }
];

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      
      {/* Hero Section - Full Screen Luxury Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />
        </div>

        <Container className="relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-center space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white/90 border border-white/20"
            >
              Ultra-Luxury Real Estate
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white leading-[1.1]"
            >
              <span className="block">Where</span>
              <span className="block font-normal">Elegance</span>
              <span className="block">Meets</span>
              <span className="block font-normal">Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 font-light leading-relaxed"
            >
              Discover extraordinary properties crafted for the most discerning
              clientele. Each residence is a masterpiece of design, location, and
              unparalleled luxury.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link
                href="/listings"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-medium text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Explore Properties</span>
                <span className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                Schedule Viewing
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-white/60 rounded-full"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* About / Project Overview Section */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="space-y-6"
            >
              <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                About Luminous Estates
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
                Curated Excellence
                <span className="block font-normal mt-2">Since 2010</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                We specialize in connecting discerning clients with extraordinary
                properties. Our portfolio represents the pinnacle of architectural
                design, prime locations, and uncompromising quality.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                Each property in our collection undergoes rigorous selection,
                ensuring it meets our exacting standards for luxury, location, and
                lifestyle. From penthouses with panoramic city views to waterfront
                villas, we curate spaces that inspire.
              </p>
              <div className="pt-4">
                <Link
                  href="/listings"
                  className="group inline-flex items-center gap-3 text-slate-900 font-medium text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300"
                >
                  View Our Portfolio
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Luxury property"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Property Highlights Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
              Featured Properties
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900">
              Exceptional
              <span className="block font-normal">Residences</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 font-light">
              A selection of our most prestigious properties, each representing
              the highest standards of luxury living.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/listings"
              className="group inline-flex items-center gap-3 text-slate-900 font-medium text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300"
            >
              View All Properties
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
              Property Gallery
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900">
              Visual
              <span className="block font-normal">Excellence</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allProperties.slice(0, 8).map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-medium text-sm mb-1">{property.title}</h3>
                  <p className="text-white/80 text-xs">{property.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Amenities Section */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-white/60">
              Premium Amenities
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
              World-Class
              <span className="block font-normal">Facilities</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/70 font-light">
              Every property includes access to exceptional amenities designed
              to enhance your lifestyle.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-medium mb-2 text-white">{amenity.title}</h3>
                <p className="text-white/60 text-sm font-light">{amenity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Location / Map Section */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                Prime Locations
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
                Exceptional
                <span className="block font-normal">Neighborhoods</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Our properties are strategically located in the most desirable
                districts, offering unparalleled access to culture, dining,
                shopping, and natural beauty.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-slate-900 mt-2" />
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Central Business District</h4>
                    <p className="text-sm text-slate-600 font-light">Heart of the city, minutes from everything</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-slate-900 mt-2" />
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Waterfront Communities</h4>
                    <p className="text-sm text-slate-600 font-light">Stunning views and coastal living</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-slate-900 mt-2" />
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Historic Quarters</h4>
                    <p className="text-sm text-slate-600 font-light">Charm meets modern luxury</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <GoogleMapComponent
                center={{ lat: 40.7128, lng: -74.006 }}
                zoom={12}
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Call To Action Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              Ready to Begin
              <span className="block font-normal mt-2">Your Journey?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed">
              Connect with our team of luxury real estate specialists. We&apos;re
              here to help you find the perfect property that matches your vision
              and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-slate-900 rounded-full font-medium text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/listings"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white rounded-full font-medium text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                Browse Properties
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
