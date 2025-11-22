import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-station.jpg";
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
      {/* Background Image with Parallax */}
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
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Техосмотр <span className="text-primary">быстро</span> и{" "}
            <span className="text-accent">надежно</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Профессиональная диагностика автомобиля за 30 минут. Аккредитованная станция с опытными специалистами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToContacts}
              variant="hero"
              size="lg"
              className="group"
            >
              Записаться на ТО
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => document.getElementById("steps")?.scrollIntoView({ behavior: "smooth" })}
              variant="hero-outline"
              size="lg"
            >
              Как это работает
            </Button>
          </div>

          {/* Quick Info */}
          <div
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-2xl font-bold">30</span>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Всего</div>
                <div className="font-semibold">Минут</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <span className="text-2xl font-bold">15+</span>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Лет</div>
                <div className="font-semibold">Опыта</div>
              </div>
            </div>
          </div>
    </section>
  );
};

export default Hero;
