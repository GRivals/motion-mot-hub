import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
    detailedInfo: {
      frequency: "Каждые 2 года для автомобилей старше 4 лет",
      duration: "30-40 минут",
      documents: ["ПТС или СТС", "Паспорт владельца", "Доверенность (если необходимо)"],
      equipment: "Современное диагностическое оборудование с автоматизированной системой проверки",
    },
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
    detailedInfo: {
      frequency: "Каждые 2 года",
      duration: "20-30 минут",
      documents: ["ПТС или СТС", "Паспорт владельца", "Водительское удостоверение"],
      equipment: "Специализированное оборудование для двухколесного транспорта",
    },
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
    detailedInfo: {
      frequency: "Ежегодно",
      duration: "40-60 минут",
      documents: ["ПТС или СТС", "Паспорт владельца", "Путевой лист (для коммерческого транспорта)"],
      equipment: "Профессиональное оборудование для грузового транспорта с усиленной диагностикой",
    },
  },
];

const Pricing = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="prices" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Стоимость техосмотра
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Прозрачные цены без скрытых платежей
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="default" 
                size="lg"
                className="mt-6 gap-2 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-accent-foreground/20 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-3.5"
              >
                <Info className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="font-semibold leading-tight">
                  <span className="hidden sm:inline">Обязательная госпошлина 500₽ – узнать подробнее</span>
                  <span className="sm:hidden">Госпошлина 500₽ – подробнее</span>
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Государственная пошлина за внесение сведений в ЕАИСТО</DialogTitle>
                <DialogDescription className="text-base mt-4 space-y-4">
                  <p>
                    <strong>С 1 сентября 2025 г.</strong> вступил в силу Федеральный закон от 31 июля 2025 г. № 271-ФЗ 
                    «О внесении изменений в часть вторую Налогового кодекса Российской Федерации», предусматривающий 
                    взимание государственной пошлины за внесение сведений в единую автоматизированную информационную 
                    систему технического осмотра при оформлении диагностической карты по результатам технического 
                    осмотра транспортных средств в размере <strong className="text-primary">500 рублей</strong>.
                  </p>
                  
                  <p>
                    Государственная пошлина подлежит уплате в отношении каждого из представляемых к осмотру транспортных 
                    средств. При этом уплата должна осуществляться по реквизитам территориального органа МВД России, 
                    на территории размещения которого осуществляется проведение технического осмотра.
                  </p>
                  
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
                    <p className="font-semibold mb-2">⚠️ Важно!</p>
                    <p>
                      Необходимо заранее уточнить уникальный присваиваемый номер операции (УПНО), состоящий из 32 цифр, 
                      у банка, принявшего уплату, в случае его отсутствия в платежном поручении либо чеке об оплате 
                      государственной пошлины. Это необходимо для внесения соответствующей информации в единую 
                      автоматизированную информационную систему технического осмотра.
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Федеральный закон от 31 июля 2025 г. № 270-ФЗ «О внесении изменений в отдельные законодательные 
                    акты Российской Федерации»
                  </p>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-2">Реквизиты для уплаты</h3>
                    <p>
                      Реквизиты для уплаты государственной пошлины за внесение сведений в ЕАИСТО при оформлении 
                      диагностической карты по результатам технического осмотра транспортных средств на территории 
                      г. Кемерово можно уточнить у наших специалистов.
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pricingData.map((item, index) => {
            const isFlipped = flippedCards.includes(index);
            return (
              <div
                key={index}
                className="relative h-[480px] sm:h-[500px] perspective-1000 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => toggleCard(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  <Card className="absolute w-full h-full backface-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="text-center pb-3 sm:pb-4">
                      <CardTitle className="text-xl sm:text-2xl mb-2">{item.category}</CardTitle>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                      <div className="mt-3 sm:mt-4">
                        <span className="text-4xl sm:text-5xl font-bold text-primary">{item.price}</span>
                        <span className="text-lg sm:text-xl text-muted-foreground"> ₽</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 sm:space-y-3">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                            <div className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            </div>
                            <span className="text-xs sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-center text-muted-foreground mt-4 sm:mt-6 italic">
                        Нажмите для подробностей
                      </p>
                    </CardContent>
                  </Card>

                  {/* Back Side */}
                  <Card className="absolute w-full h-full backface-hidden rotate-y-180 border-accent/50 bg-accent/5">
                    <CardHeader className="text-center pb-3 sm:pb-4">
                      <CardTitle className="text-xl sm:text-2xl mb-2">{item.category}</CardTitle>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm mb-2 text-primary">Периодичность</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.detailedInfo.frequency}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm mb-2 text-primary">Длительность</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.detailedInfo.duration}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm mb-2 text-primary">Необходимые документы</h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {item.detailedInfo.documents.map((doc, docIndex) => (
                            <li key={docIndex} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-accent shrink-0 mt-0.5" />
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm mb-2 text-primary">Оборудование</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.detailedInfo.equipment}</p>
                      </div>
                      
                      <p className="text-xs text-center text-muted-foreground mt-3 sm:mt-4 italic">
                        Нажмите чтобы вернуться
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        <Card className="border-accent/50 bg-accent/5 animate-fade-in">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="w-full md:w-auto">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Дополнительные услуги</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Повторный осмотр (в течение 20 дней) — <span className="font-semibold whitespace-nowrap">300 ₽</span><br />
                  Государственная пошлина за внесение изменений — <span className="font-semibold whitespace-nowrap">500 ₽</span>
                </p>
              </div>
              <div className="shrink-0 text-left md:text-right w-full md:w-auto">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Оплата</div>
                <div className="text-sm sm:text-base font-semibold">Наличные / Карта</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
