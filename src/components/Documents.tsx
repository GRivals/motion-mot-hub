import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const documents = [
  {
    title: "Аттестат аккредитации",
    description: "Официальный документ аккредитации станции ТО",
    file: "attestat.pdf",
  },
  {
    title: "Порядок проведения осмотра",
    description: "Регламент проведения технического осмотра",
    file: "poryadok.pdf",
  },
  {
    title: "Договор на ТО (образец)",
    description: "Типовой договор на проведение техосмотра",
    file: "dogovor.pdf",
  },
  {
    title: "ФЗ-170 о техосмотре",
    description: "Федеральный закон о техническом осмотре ТС",
    file: "fz170.pdf",
  },
  {
    title: "Постановление №1008",
    description: "Правила проведения техосмотра",
    file: "postanovlenie.pdf",
  },
  {
    title: "Перечень неисправностей",
    description: "Список проверяемых параметров и неисправностей",
    file: "perechen.pdf",
  },
];

const Documents = () => {
  const handleDownload = (fileName: string) => {
    // В реальном приложении здесь будет загрузка файла
    console.log(`Downloading ${fileName}`);
  };

  return (
    <section id="documents" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Документы и регламенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Вся необходимая документация для прохождения техосмотра
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 line-clamp-2">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {doc.description}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => handleDownload(doc.file)}
                  variant="outline"
                  size="sm"
                  className="w-full group/btn"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-y-0.5" />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <Card className="border-accent/50 bg-accent/5 inline-block">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground max-w-2xl">
                Все документы представлены в соответствии с действующим законодательством РФ. 
                При возникновении вопросов обращайтесь к нашим специалистам.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Documents;
