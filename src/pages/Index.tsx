import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Pillars from "../components/Pillars";
import Schedule from "../components/Schedule";
import Volunteers from "../components/Volunteers";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Set smooth scrolling behavior when navigating to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href") || "");
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    // Animation for volunteer cards on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('#volunteers .card').forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-ai-dark">
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <About />
        <Pillars />
        <Schedule />
        <Volunteers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
