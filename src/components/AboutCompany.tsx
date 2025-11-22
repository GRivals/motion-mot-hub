import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Award, MapPin, FileText, Phone, Mail, Building } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import AnimatedCounter from "./AnimatedCounter";
import { Button } from "@/components/ui/button";

const AboutCompany = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">О компании</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональная станция техосмотра с многолетним опытом
          </p>
        </div>

        {/* Company Legal Information */}
        <div className="mb-16">
          <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                <Building2 className="h-6 w-6 text-primary" />
                Общество с ограниченной ответственностью "АДЕКТ АВТО"
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50">
                  <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Номер ОТО</div>
                    <div className="font-bold text-lg text-primary">14823</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-accent/50">
                  <Award className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div className="w-full">
                    <div className="text-xs text-muted-foreground mb-2">Аттестат аккредитации</div>
                    <Button variant="link" className="h-auto p-0 text-accent font-semibold text-sm">
                      Посмотреть →
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50">
                  <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">ИНН</div>
                    <div className="font-semibold">4205414144</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50">
                  <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">КПП</div>
                    <div className="font-semibold">420501001</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50">
                  <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">ОГРН</div>
                    <div className="font-semibold">1234200006149</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50 md:col-span-2 lg:col-span-3">
                  <Building className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Юридический адрес</div>
                    <div className="font-medium text-sm">650511, Россия, Кемеровская область - Кузбасс, Кемеровский М.О., Березово с., Весенняя ул., д. 50</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-lg animate-slide-in-left group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg group-hover:text-accent transition-colors">
                  <MapPin className="h-5 w-5 text-accent" />
                  Фактический адрес
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-lg font-bold">Кемерово, Космическая улица, 16а к1</p>
                <p className="text-muted-foreground">Южный м-н, Заводский район</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg animate-slide-in-right group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg group-hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href="tel:89505992222" className="font-semibold hover:text-primary transition-colors text-lg">
                    8-950-599-2222
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href="mailto:adekt42avtotex@mail.ru" className="font-semibold hover:text-primary transition-colors">
                    adekt42avtotex@mail.ru
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
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
                    Аккредитованная станция технического осмотра<br />
                    Все необходимые лицензии и сертификаты<br />
                    Соответствие требованиям законодательства РФ
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
                    Более 15+ лет успешной работы<br />
                    17,700+ проведенных осмотров<br />
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
                  <h3 className="font-semibold mb-2">Наш адрес</h3>
                  <p className="text-sm text-muted-foreground">
                    г. Кемерово, Космическая улица, 16а к1<br />
                    Южный м-н, Заводский район
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
          <Card className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Лет на рынке</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                <AnimatedCounter end={17.7} suffix="K+" />
              </div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Специалистов в штате</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                4.9
              </div>
              <div className="text-sm text-muted-foreground">Рейтинг клиентов</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
