import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div
          className={`space-y-6 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-medium">Hi there, I'm</p>
          <h1 className="font-bold">
            Yash <span className="text-primary">Bhalodiya</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Frontend & Mobile App Developer
          </h2>
          <p className="text-lg max-w-md">
            Passionate about crafting smooth, modern mobile apps with React Native, Flutter, and Android. Always exploring new tools & tech in mobile development.

          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors hover-scale"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary bg-transparent rounded-lg hover:bg-primary/10 transition-colors hover-scale"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
            {/* Profile image placeholder - replace with actual image when available */}
            <div className="w-full h-full rounded-full overflow-hidden bg-secondary flex items-center justify-center border-4 border-primary/20">
              <img
                src="src\assets\ProfileImg.jpg"
                alt="Yash Bhalodiya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="text-primary" size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
