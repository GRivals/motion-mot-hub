import { Card, CardContent } from "@/components/ui/card";
import { Building2, Award } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const CompanyFeatures = () => {
  return (
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
  );
};

export default CompanyFeatures;
