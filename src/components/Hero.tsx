import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-station.jpg";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContacts = () => {
    const element = document.getElementById("contacts");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Станция технического осмотра"
          className="w-full h-full object-cover transition-transform duration-100"
          style={{ transform: `translateY(${scrollY * 0.5}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <img src={logo} alt="АДЕКТ АВТО" className="h-28 sm:h-32 md:h-40 w-auto mb-6 sm:mb-8" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Техосмотр <span className="text-primary">быстро</span> и{" "}
            <span className="text-accent">надежно</span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Профессиональная диагностика автомобиля за 30 минут. Аккредитованная
            станция с опытными специалистами.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button onClick={scrollToContacts} variant="hero" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
              Записаться на ТО
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              onClick={() =>
                document.getElementById("steps")?.scrollIntoView({ behavior: "smooth" })
              }
              variant="hero-outline"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              Как это работает
            </Button>
          </div>

          {/* Quick Info удалён полностью */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
