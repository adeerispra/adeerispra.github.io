import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CurrentlyExploring />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
