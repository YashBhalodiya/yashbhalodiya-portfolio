import { useEffect, useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const timelineItems: TimelineItem[] = [
    {
      year: "2021-2024",
      title: "Diploma in Computer Engineering",
      institution: "LJ Polytechnic",
      description: "Comprehensive study of computer engineering fundamentals",
    },
    {
      year: "2024-2027 (Expected)",
      title: "B.Tech in Information Technology",
      institution: "Charotar University of Science and Technology",
      description: "Currently pursuing advanced studies in Information Technology",
    },
    {
      year: "2024",
      title: "Smart India Hackathon Grand Finale",
      institution: "IIT Jammu",
      description: "Participated with focus on Mobile Application Development",
    },
  ];

  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get To Know Me</p>
          <h2 className="mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-semibold">
              A passionate React Native developer crafting seamless mobile
              experiences
            </h3>
            <p className="text-lg leading-relaxed">
              I'm a React Native developer focused on building high-quality,
              responsive, and intuitive mobile applications. I love turning
              ideas into real-world apps that deliver smooth user experiences.
            </p>
            <p className="text-lg leading-relaxed">
              Always eager to explore new tools and stay current with the latest
              trends in mobile development, I strive to write clean, scalable,
              and maintainable code while creating apps that feel native and
              perform great.
            </p>
            <div>
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg inline-block hover:bg-primary/90 transition-colors hover-scale"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 200} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="absolute -left-3 w-6 h-6 rounded-full bg-primary"></div>
                <div className="glass p-6 rounded-lg">
                  <span className="text-sm font-medium text-primary">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-medium mt-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
