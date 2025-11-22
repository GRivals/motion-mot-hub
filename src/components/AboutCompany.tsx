import CompanyLegalInfo from "./about/CompanyLegalInfo";
import CompanyContactCards from "./about/CompanyContactCards";
import CompanyFeatures from "./about/CompanyFeatures";
import CompanyStats from "./about/CompanyStats";

const AboutCompany = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">О компании</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональная станция техосмотра с многолетним опытом
          </p>
        </div>

        <div className="mb-16">
          <CompanyLegalInfo />
          <CompanyContactCards />
        </div>

        <CompanyFeatures />
        <CompanyStats />
      </div>
    </section>
  );
};

export default AboutCompany;
