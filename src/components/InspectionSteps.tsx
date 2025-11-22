import { Phone, Car, CreditCard, FileText, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Phone,
    title: "Свяжитесь с нами для записи",
    description: "Позвоните по номеру: 8-950-599-2222 для записи на первичный осмотр. Мы подберем удобное для вас время.",
    highlight: "8-950-599-2222",
  },
  {
    icon: Car,
    title: "Приведите автомобиль",
    description: "Приведите автомобиль к назначенному времени. Предоставьте документ, удостоверяющий личность, свидетельство о регистрации ТС или его паспорт.",
    documents: ["Документ, удостоверяющий личность", "Свидетельство о регистрации ТС или паспорт ТС"],
  },
  {
    icon: CreditCard,
    title: "Оплата госпошлины",
    description: "Оплатите государственную пошлину за внесение сведений в ЕАИСТО (500 ₽). Можем помочь с оформлением на месте.",
    highlight: "500 ₽",
  },
  {
    icon: CheckCircle2,
    title: "Получение диагностической карты",
    description: "После прохождения технического осмотра по 65 пунктам, получите диагностическую карту на руки или в электронном виде. Готово для ОСАГО!",
  },
];

const InspectionSteps = () => {
  return (
    <section id="steps" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Пройдите техосмотр с комфортом
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всего четыре простых шага для получения диагностической карты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  
                  {step.highlight && (
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md font-semibold text-sm">
                      {step.highlight}
                    </div>
                  )}
                  
                  {step.documents && (
                    <div className="mt-3 space-y-1">
                      {step.documents.map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <FileText className="h-3 w-3 mt-0.5 shrink-0" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="tel:+79515852222">
              <Phone className="mr-2 h-5 w-5" />
              Записаться на техосмотр
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InspectionSteps;
