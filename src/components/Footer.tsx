import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img src={logo} alt="АДЕКТ АВТО" className="h-8 sm:h-10 w-auto" />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Профессиональный техосмотр автомобилей с 2008 года
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Контакты
            </h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5" />
                <a
                  href="tel:+79505992222"
                  className="hover:text-primary transition-colors"
                >
                  8-950-599-2222
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5" />
                <a
                  href="mailto:adekt42avtotex@mail.ru"
                  className="hover:text-primary transition-colors break-all"
                >
                  adekt42avtotex@mail.ru
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Адрес
            </h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5" />
                <div>
                  <p>г. Кемерово, Космическая улица, 16а</p>
                  <p className="text-muted-foreground text-xs">
                    Южный м-н, Заводский район
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Режим работы
            </h3>
            <div className="text-xs sm:text-sm space-y-1.5 sm:space-y-2">
              <p>
                Пн-Пт:{" "}
                <span className="text-accent font-semibold">09:00 - 19:00</span>
              </p>
              <p>
                Сб:{" "}
                <span className="text-accent font-semibold">09:00 - 18:00</span>
              </p>
              <p className="text-muted-foreground">Вс: Выходной день</p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p className="text-center md:text-left">
              © 2022 - 2025 АДЕКТ АВТО. Все права защищены.
            </p>
            <p className="text-center md:text-right">
              г. Кемерово, Космическая улица, 16а
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
