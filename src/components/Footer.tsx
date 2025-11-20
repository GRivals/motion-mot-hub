import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                ТО
              </div>
              <span className="text-lg font-semibold">Станция ТО</span>
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
                <div>
                  <p>+7 (900) 123-45-67</p>
                  <p>+7 (900) 765-43-21</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <p>info@techosmotr.ru</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Адреса</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <p>г. Москва, ул. Примерная, д. 123</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <p>г. Москва, ул. Тестовая, д. 456</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Режим работы</h3>
            <div className="text-sm space-y-2">
              <p>Понедельник - Воскресенье</p>
              <p className="text-accent font-semibold">08:00 - 20:00</p>
              <p className="text-muted-foreground">Без выходных</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Станция ТО. Все права защищены.</p>
            <div className="flex gap-6">
              <p>ОГРН: 1234567890123</p>
              <p>ИНН: 1234567890</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
