import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 sm:h-24 items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="АДЕКТ АВТО" className="h-16 sm:h-20 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-xs lg:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection("prices")}
              className="text-xs lg:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Цены
            </button>
            <button
              onClick={() => scrollToSection("documents")}
              className="text-xs lg:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Документы
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-xs lg:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contacts")}
              variant="hero"
              size="default"
              className="hidden sm:inline-flex text-xs sm:text-sm px-3 sm:px-4"
            >
              <span className="hidden lg:inline">Записаться на ТО</span>
              <span className="lg:hidden">Записаться</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
