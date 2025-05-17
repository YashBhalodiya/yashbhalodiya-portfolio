
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Yash Bhalodiya. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <span className="text-sm">Toggle theme:</span>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
