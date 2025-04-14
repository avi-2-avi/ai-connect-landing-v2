
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Schedule from "../components/Schedule";
import Volunteers from "../components/Volunteers";
import PartnersCarousel from "../components/PartnersCarousel";
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

    // Update section title colors to match our new color scheme
    document.querySelectorAll("h2 span").forEach((span) => {
      span.classList.add("text-ai-purple"); // Apply secondary color to highlighted parts
    });

    document.querySelectorAll("p.text-ai-teal").forEach((p) => {
      p.classList.add("text-ai-teal"); // Apply primary color to subtitles
    });
  }, []);

  return (
    <div className="min-h-screen bg-ai-dark">
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <About />
        <Schedule />
        <Volunteers />
        <PartnersCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
