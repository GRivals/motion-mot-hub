import { Card, CardContent } from "@/components/ui/card";
import { Building2, Award, Users, MapPin } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const AboutCompany = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">О нашей компании</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональная станция техосмотра с многолетним опытом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Официальная аккредитация</h3>
                  <p className="text-sm text-muted-foreground">
                    ОГРН: 1234567890123<br />
                    ИНН: 1234567890<br />
                    Аттестат аккредитации №АА-12345
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Наши достижения</h3>
                  <p className="text-sm text-muted-foreground">
                    15+ лет успешной работы<br />
                    50,000+ проведенных осмотров<br />
                    Рейтинг 4.9/5.0 по отзывам клиентов
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Наши адреса</h3>
                  <p className="text-sm text-muted-foreground">
                    г. Москва, ул. Примерная, д. 123<br />
                    г. Москва, ул. Тестовая, д. 456
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <img
              src={teamPhoto}
              alt="Наша команда"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Профессиональная команда</h3>
              <p className="text-muted-foreground">
                Наши специалисты имеют все необходимые сертификаты и регулярно проходят обучение
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
          <Card className="text-center border-border/50">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Лет на рынке</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10</div>
              <div className="text-sm text-muted-foreground">Опытных специалистов</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Рейтинг клиентов</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
