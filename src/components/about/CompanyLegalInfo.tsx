import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Award, FileText, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompanyLegalInfo = () => {
  return (
    <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
        <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
          <Building2 className="h-6 w-6 text-primary" />
          ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "АДЕКТ АВТО ТЕХ"
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-card hidden">
            <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />{" "}
            {/*чтобы вернуть ОТО поменяй эту строку на "<div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50 md:col-span-2 lg:col-span-3"></div>*/}
            <div>
              <div className="text-xs text-muted-foreground mb-1">
                Номер ОТО
              </div>
              <div className="font-bold text-lg text-primary">14823</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-accent/50">
            <Award className="h-5 w-5 text-accent shrink-0 mt-1" />
            <div className="w-full">
              <div className="text-xs text-muted-foreground mb-2">
                Аттестат аккредитации
              </div>
              <Button
                variant="link"
                className="h-auto p-0 text-accent font-semibold text-sm"
                onClick={() => window.open("/files/attest.PDF", "_blank")}
              >
                Посмотреть →
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50">
            <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
            <div>
              <div className="text-xs text-muted-foreground mb-1">ИНН</div>
              <div className="font-semibold">4205432104</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50">
            <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
            <div>
              <div className="text-xs text-muted-foreground mb-1">КПП</div>
              <div className="font-semibold">420501001</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50">
            <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
            <div>
              <div className="text-xs text-muted-foreground mb-1">ОГРН</div>
              <div className="font-semibold">1254200013308</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/50 md:col-span-2 lg:col-span-3">
            <Building className="h-5 w-5 text-primary shrink-0 mt-1" />
            <div>
              <div className="text-xs text-muted-foreground mb-1">
                Юридический адрес
              </div>
              <div className="font-medium text-sm">
                650003, Кемеровская область - Кузбасс, г. о. Кемеровский, г.
                Кемерово, пр-кт Восточный, д. 21, к. 2, кв. 17
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyLegalInfo;
