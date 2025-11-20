import { ClipboardCheck, Wrench, FileCheck, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Запись и регистрация",
    description: "Запишитесь онлайн или по телефону. При посещении предоставьте документы на автомобиль.",
  },
  {
    icon: Wrench,
    title: "Диагностика автомобиля",
    description: "Наши специалисты проведут полный осмотр по 65 пунктам на современном оборудовании.",
  },
  {
    icon: FileCheck,
    title: "Оформление документов",
    description: "Подготовка диагностической карты и внесение данных в единую автоматизированную систему.",
  },
  {
    icon: CheckCircle2,
    title: "Получение результата",
    description: "Получите диагностическую карту на руки или в электронном виде. Готово для ОСАГО!",
  },
];

const InspectionSteps = () => {
  return (
    <section id="steps" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Как проходит техосмотр
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой и понятный процесс из 4 шагов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-scale-in"
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
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InspectionSteps;
