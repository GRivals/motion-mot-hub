import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="АДЕКТ АВТО" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональный техосмотр автомобилей с 2008 года
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <a href="tel:+79505992222" className="hover:text-primary transition-colors">
                  8-950-599-2222
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <a href="mailto:adekt42avtotex@mail.ru" className="hover:text-primary transition-colors">
                  adekt42avtotex@mail.ru
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Адрес</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p>г. Кемерово, Космическая улица, 16а к1</p>
                  <p className="text-muted-foreground text-xs">Южный м-н, Заводский район</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Режим работы</h3>
            <div className="text-sm space-y-2">
              <p>Пн-Пт: <span className="text-accent font-semibold">09:00 - 19:00</span></p>
              <p>Сб: <span className="text-accent font-semibold">09:00 - 18:00</span></p>
              <p className="text-muted-foreground">Вс: Выходной день</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2022 - 2025 АДЕКТ АВТО. Все права защищены.</p>
            <p>г. Кемерово, Космическая улица, 16а к1</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
