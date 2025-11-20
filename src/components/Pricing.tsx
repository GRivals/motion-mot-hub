import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingData = [
  {
    category: "Категория M1",
    description: "Легковые автомобили",
    price: "1 200",
    features: [
      "Проверка тормозной системы",
      "Диагностика рулевого управления",
      "Проверка световых приборов",
      "Контроль выхлопной системы",
      "Диагностическая карта",
    ],
  },
  {
    category: "Категория L",
    description: "Мотоциклы и мототранспорт",
    price: "800",
    features: [
      "Проверка тормозной системы",
      "Диагностика рулевого управления",
      "Проверка световых приборов",
      "Контроль шума",
      "Диагностическая карта",
    ],
  },
  {
    category: "Категория N1",
    description: "Грузовые автомобили до 3,5 т",
    price: "1 500",
    features: [
      "Расширенная проверка тормозов",
      "Диагностика подвески",
      "Проверка световых приборов",
      "Контроль выхлопной системы",
      "Проверка крепления груза",
      "Диагностическая карта",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="prices" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Стоимость техосмотра
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingData.map((item, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{item.category}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-primary">{item.price}</span>
                  <span className="text-xl text-muted-foreground"> ₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-accent/50 bg-accent/5 animate-fade-in">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Дополнительные услуги</h3>
                <p className="text-muted-foreground">
                  Повторный осмотр (в течение 20 дней) — <span className="font-semibold">300 ₽</span><br />
                  Государственная пошлина за внесение изменений — <span className="font-semibold">500 ₽</span>
                </p>
              </div>
              <div className="shrink-0 text-center md:text-right">
                <div className="text-sm text-muted-foreground mb-1">Оплата</div>
                <div className="font-semibold">Наличные / Карта</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
