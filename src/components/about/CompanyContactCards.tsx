import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const CompanyContactCards = () => {
  return (
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
  );
};

export default CompanyContactCards;
