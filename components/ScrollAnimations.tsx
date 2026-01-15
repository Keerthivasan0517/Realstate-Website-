"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  if (ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
}

export function ScrollAnimations() {
  useEffect(() => {
    // Smooth scroll setup
    gsap.to("body", {
      scrollBehavior: "smooth",
      duration: 0
    });

    // Fade in on scroll animations
    gsap.utils.toArray<HTMLElement>(".fade-in-on-scroll").forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 60
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Slide in from left
    gsap.utils.toArray<HTMLElement>(".slide-in-left").forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -80
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Slide in from right
    gsap.utils.toArray<HTMLElement>(".slide-in-right").forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: 80
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stagger children animation
    gsap.utils.toArray<HTMLElement>(".stagger-children").forEach((container) => {
      const children = container.children;
      gsap.fromTo(
        Array.from(children),
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
