import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Форматирование сообщения для WhatsApp
    const message = `Новая заявка на ТО:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nEmail: ${formData.email}\nКомментарий: ${formData.comment}`;
    const whatsappUrl = `https://wa.me/79505992222?text=${encodeURIComponent(message)}`;
    // Открываем WhatsApp
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    // Очистка формы
    setFormData({ name: "", phone: "", email: "", comment: "" });
  };

  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Записаться на техосмотр</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для уточнения деталей
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Комментарий (необязательно)"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    Отправить заявку
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <a href="tel:+79505992222" className="text-muted-foreground hover:text-primary transition-colors block">
                    8-950-599-2222
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:adekt42avtotex@mail.ru" className="text-muted-foreground hover:text-accent transition-colors">
                    adekt42avtotex@mail.ru
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 09:00 - 19:00</p>
                  <p className="text-muted-foreground">Сб: 09:00 - 18:00</p>
                  <p className="text-muted-foreground">Вс: Выходной день</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Адрес станции</h3>
                  <p className="text-muted-foreground">г. Кемерово, Космическая улица, 16а к1</p>
                  <p className="text-muted-foreground text-sm">Южный м-н, Заводский район</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
