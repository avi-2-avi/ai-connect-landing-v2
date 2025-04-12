import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ai-dark/80 backdrop-blur-md shadow-md py-2"
          : "bg-ai-dark/60 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.avif" alt="AI CONNECT" className="w-52 hover:cursor-pointer" onClick={() => scrollToSection("hero")} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-ai-teal transition-colors cursor-pointer"
          >
            Quienes Somos
          </a>
          <a
            onClick={() => scrollToSection("objectives")}
            className="text-white hover:text-ai-teal transition-colors cursor-pointer"
          >
            Que Hacemos
          </a>
          <a
            onClick={() => scrollToSection("schedule")}
            className="text-white hover:text-ai-teal transition-colors cursor-pointer"
          >
            Eventos
          </a>
          <a
            onClick={() => scrollToSection("leaders")}
            className="text-white hover:text-ai-teal transition-colors cursor-pointer"
          >
            AI Leaders
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-ai-teal transition-colors cursor-pointer"
          >
            Conectemos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-ai-dark/80 backdrop-blur-md shadow-md z-40">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-ai-teal transition-colors cursor-pointer"
            >
              Quienes Somos
            </a>
            <a
              onClick={() => scrollToSection("objectives")}
              className="text-white hover:text-ai-teal transition-colors cursor-pointer"
            >
              Que Hacemos
            </a>
            <a
              onClick={() => scrollToSection("schedule")}
              className="text-white hover:text-ai-teal transition-colors cursor-pointer"
            >
              Eventos
            </a>
            <a
              onClick={() => scrollToSection("leaders")}
              className="text-white hover:text-ai-teal transition-colors cursor-pointer"
            >
              AI Leaders
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-ai-teal transition-colors cursor-pointer"
            >
              Conectemos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
