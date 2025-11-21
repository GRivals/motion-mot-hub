import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              ТО
            </div>
            <span className="text-lg font-semibold">Станция ТО</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection("prices")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Цены
            </button>
            <button
              onClick={() => scrollToSection("documents")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Документы
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contacts")}
              variant="hero"
              size="default"
              className="hidden md:inline-flex"
            >
              Записаться на ТО
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
