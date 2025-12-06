import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CompanyContactCards = () => {
  const [flipped, setFlipped] = useState<{ [key: string]: boolean }>({
    phone: false,
    email: false,
    hours: false,
    address: false,
  });

  const toggleFlip = (card: string) => {
    setFlipped((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
      {/* Phone Card */}
      <div
        className="relative h-[180px] sm:h-[200px] cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => toggleFlip("phone")}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped.phone ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <Card
            className="absolute inset-0 border-primary/30 hover:border-primary/60 transition-colors"
            style={{ backfaceVisibility: "hidden" }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <Phone className="h-5 w-5 text-primary" />
                Телефон
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xl sm:text-2xl font-bold">8-950-599-2222</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Нажмите для связи
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
            <CardContent className="h-full flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6">
              <Button
                asChild
                variant="default"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm h-9 sm:h-10"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href="https://wa.me/89505992222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                className="w-full bg-[#0088cc] hover:bg-[#006699] text-white text-xs sm:text-sm h-9 sm:h-10"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href="https://t.me/89505992222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  Telegram
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                className="w-full text-xs sm:text-sm h-9 sm:h-10"
                onClick={(e) => e.stopPropagation()}
              >
                <a href="tel:89505992222" className="flex items-center gap-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  Позвонить
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Email Card */}
      <div
        className="relative h-[180px] sm:h-[200px] cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => toggleFlip("email")}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped.email ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <Card
            className="absolute inset-0 border-accent/30 hover:border-accent/60 transition-colors"
            style={{ backfaceVisibility: "hidden" }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <Mail className="h-5 w-5 text-accent" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base sm:text-lg font-bold break-all">
                adekt42avtotex@mail.ru
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Нажмите для отправки письма
              </p>
            </CardContent>
          </Card>

          {/* Back */}
          <Card
            className="absolute inset-0 border-accent/30 bg-card"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <CardContent className="h-full flex flex-col items-center justify-center gap-4 p-4 sm:p-6">
              <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />
              <Button
                asChild
                variant="default"
                className="w-full text-xs sm:text-sm h-9 sm:h-10"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href="mailto:adekt42avtotex@mail.ru"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  Отправить письмо
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Working Hours Card */}
      <div
        className="relative h-[180px] sm:h-[200px] cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => toggleFlip("hours")}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped.hours ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <Card
            className="absolute inset-0 border-primary/30 hover:border-primary/60 transition-colors"
            style={{ backfaceVisibility: "hidden" }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-base sm:text-lg font-semibold">
                Пн-Пт: 09:00 - 19:00
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
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
            <CardContent className="h-full flex flex-col justify-center p-4 sm:p-6 space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="font-semibold">Пн-Пт:</span>
                <span className="text-primary">09:00 - 19:00</span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="font-semibold">Суббота:</span>
                <span className="text-primary">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="font-semibold">Воскресенье:</span>
                <span className="text-muted-foreground">Выходной</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Address Card */}
      <div
        className="relative h-[180px] sm:h-[200px] cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => toggleFlip("address")}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped.address ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <Card
            className="absolute inset-0 border-accent/30 hover:border-accent/60 transition-colors"
            style={{ backfaceVisibility: "hidden" }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <MapPin className="h-5 w-5 text-accent" />
                Адрес станции
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base sm:text-lg font-bold">
                Кемерово, Космическая улица, 16а
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Нажмите для маршрута
              </p>
            </CardContent>
          </Card>

          {/* Back */}
          <Card
            className="absolute inset-0 border-accent/30 bg-card"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <CardContent className="h-full flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6">
              <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />
              <p className="text-center font-semibold text-sm sm:text-base">
                г. Кемерово, Космическая улица, 16а
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                Южный м-н, Заводский район
              </p>
              <Button
                asChild
                variant="default"
                className="w-full text-xs sm:text-sm h-9 sm:h-10"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href="https://yandex.ru/maps/?rtext=~55.318581, 86.091864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Navigation className="h-3 w-3 sm:h-4 sm:w-4" />
                  Построить маршрут
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompanyContactCards;
