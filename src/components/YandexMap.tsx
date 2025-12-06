import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Загружаем Яндекс.Карты API
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.ymaps) {
        // @ts-ignore
        window.ymaps.ready(() => {
          if (!mapRef.current) return;

          // Координаты: г. Кемерово, Космическая 16а
          // @ts-ignore
          const map = new window.ymaps.Map(mapRef.current, {
            center: [55.318581, 86.091864], // Координаты Кемерово, Космическая 16а
            zoom: 16,
            controls: ["zoomControl", "fullscreenControl"],
          });

          // Добавляем метку
          // @ts-ignore
          const placemark = new window.ymaps.Placemark(
            [55.318581, 86.091864],
            {
              balloonContentHeader: "АДЕКТ АВТО",
              balloonContentBody:
                "<strong>Адрес:</strong> г. Кемерово, Космическая улица, 16а к1<br><strong>Телефон:</strong> 8-950-599-2222<br><strong>Режим работы:</strong><br>Пн-Пт: 09:00 - 19:00<br>Сб: 09:00 - 18:00<br>Вс: Выходной день",
              balloonContentFooter: "Заводский район, Южный м-н",
              hintContent: "Станция технического осмотра",
            },
            {
              preset: "islands#blueAutoIcon",
              iconColor: "#2563eb",
            }
          );

          map.geoObjects.add(placemark);

          // Анимация появления метки
          setTimeout(() => {
            placemark.balloon.open();
          }, 500);
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Как нас найти</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы находимся в Заводском районе Кемерово, удобный подъезд и парковка
          </p>
        </div>

        <Card className="border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
          <div
            ref={mapRef}
            className="w-full h-[500px] md:h-[600px]"
            style={{ position: "relative" }}
          />
        </Card>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-fade-in">
            <div className="p-6 text-center">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🚗
              </div>
              <h3 className="font-semibold mb-2">Удобный подъезд</h3>
              <p className="text-sm text-muted-foreground">
                Легко добраться на автомобиле с любой части города
              </p>
            </div>
          </Card>

          <Card
            className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="p-6 text-center">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🅿️
              </div>
              <h3 className="font-semibold mb-2">Бесплатная парковка</h3>
              <p className="text-sm text-muted-foreground">
                Просторная парковка для всех клиентов
              </p>
            </div>
          </Card>

          <Card
            className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="p-6 text-center">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                ⏱️
              </div>
              <h3 className="font-semibold mb-2">Без очередей</h3>
              <p className="text-sm text-muted-foreground">
                Предварительная запись по телефону
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YandexMap;
