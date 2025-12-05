import { useState } from "react";
import {
  Phone,
  Car,
  CreditCard,
  FileText,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Phone,
    title: "Свяжитесь с нами для записи",
    description:
      "Свяжитесь с нами по номеру, чтобы записаться на первичный осмотр. Мы подберём удобное для вас время.",
    highlight: "8-950-599-2222",
  },
  {
    icon: Car,
    title: "Приведите автомобиль",
    description:
      "Привезите автомобиль к назначенному времени и возьмите с собой удостоверение личности, а также СТС или ПТС автомобиля..",
    documents: [
      "Документ, удостоверяющий личность",
      "Свидетельство о регистрации ТС или паспорт ТС",
    ],
  },
  {
    icon: CreditCard,
    title: "Оплата госпошлины",
    description:
      "Оплатите государственную пошлину за внесение сведений в ЕАИСТО (500 ₽). При необходимости оформим её на месте.",
    highlight: "500 ₽",
  },
  {
    icon: CheckCircle2,
    title: "Получение диагностической карты",
    description:
      "После проверки автомобиля по 65 пунктам диагностическая карта будет выдана сразу — в удобном для вас формате. Полностью готова для ОСАГО.",
  },
];

const InspectionSteps = () => {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="steps" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Пройдите техосмотр с комфортом
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Всего четыре простых шага для получения диагностической карты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative h-[320px] sm:h-[340px] md:h-[320px] cursor-pointer animate-scale-in"
                style={{
                  perspective: "1000px",
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => toggleFlip(index)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flipped[index]
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <Card
                    className="absolute inset-0 border-border/50 hover:border-primary/50 transition-colors group"
                    style={{ backfaceVisibility: "hidden" }}
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
                      <h3 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>

                      {step.highlight && (
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md font-semibold text-sm">
                          {step.highlight}
                        </div>
                      )}

                      <p className="text-xs text-muted-foreground mt-4">
                        Нажмите для подробностей
                      </p>
                    </CardContent>
                  </Card>

                  {/* Back */}
                  <Card
                    className="absolute inset-0 border-primary/30 bg-card"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <CardContent className="h-full flex flex-col justify-center p-6">
                      {index === 0 && (
                        <div className="space-y-3">
                          <Button
                            asChild
                            variant="default"
                            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a
                              href="https://wa.me/79515852222"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <MessageCircle className="h-4 w-4" />
                              WhatsApp
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="default"
                            className="w-full bg-[#0088cc] hover:bg-[#006699] text-white"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a
                              href="https://t.me/79515852222"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <MessageCircle className="h-4 w-4" />
                              Telegram
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="default"
                            className="w-full"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a
                              href="tel:+79515852222"
                              className="flex items-center gap-2"
                            >
                              <Phone className="h-4 w-4" />
                              Позвонить
                            </a>
                          </Button>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-3">
                          <h4 className="font-semibold text-center mb-4">
                            Необходимые документы:
                          </h4>
                          {step.documents?.map((doc, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                            >
                              <FileText className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                              <span className="text-sm">{doc}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-4 text-center">
                          <div className="text-4xl font-bold text-primary">
                            500 ₽
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Оплата производится за внесение сведений в единую
                            автоматизированную информационную систему
                            технического осмотра (ЕАИСТО)
                          </p>
                          <p className="text-sm font-semibold">
                            Мы поможем с оформлением оплаты на месте
                          </p>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="space-y-4">
                          <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
                          <h4 className="font-semibold text-center">
                            Получите карту:
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                              <span>На руки в печатном виде</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                              <span>В электронном виде на email</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                              <span>Готова для оформления ОСАГО</span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
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
