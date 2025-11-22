import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "../AnimatedCounter";

const CompanyStats = () => {
  const stats = [
    { value: 15, suffix: "+", label: "Лет на рынке", color: "primary" },
    { value: 17.7, suffix: "K+", label: "Довольных клиентов", color: "accent" },
    { value: 20, suffix: "+", label: "Специалистов в штате", color: "primary" },
    { value: 4.9, suffix: "", label: "Рейтинг клиентов", color: "accent" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`text-center border-border/50 hover:border-${stat.color}/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer`}
        >
          <CardContent className="p-6">
            <div className={`text-4xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
              {stat.suffix ? (
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              ) : (
                stat.value
              )}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CompanyStats;
