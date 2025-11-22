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
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  Техосмотр <span className="text-primary">быстро</span> и{" "}
                  <span className="text-accent">надежно</span>
                </h1>

                <p
                  className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Профессиональная диагностика автомобиля за 30 минут. Аккредитованная станция с опытными специалистами.
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-4 animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Button onClick={scrollToContacts} variant="hero" size="lg" className="group">
                    Записаться на ТО
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    onClick={() =>
                      document.getElementById("steps")?.scrollIntoView({ behavior: "smooth" })
                    }
                    variant="hero-outline"
                    size="lg"
                  >
                    Как это работает
                  </Button>
                </div>

                  {/* Quick Info */}
                    <div
                      className="mt-12 flex items-center gap-4 animate-fade-in"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-3xl font-bold">4.9</span>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Средняя оценка</div>
                        <div className="font-semibold flex items-center gap-1">
                          Клиентов
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>


              </div>
            </div>
          </section>
        );
      };

      export default Hero;
