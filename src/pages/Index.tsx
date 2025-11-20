import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InspectionSteps from "@/components/InspectionSteps";
import AboutCompany from "@/components/AboutCompany";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Documents from "@/components/Documents";
import YandexMap from "@/components/YandexMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <InspectionSteps />
        <AboutCompany />
        <Pricing />
        <Documents />
        <ContactForm />
        <YandexMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
