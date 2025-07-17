import Footer from "@/components/home/footer/page";
import Navbar from "@/components/home/header/navbar/page";
import HeroSection from "@/components/home/heroSection/hero-section";
import TopArticles from "@/components/home/toparticles/page";
import { createUserIfNotExists } from "@/lib/createUser";

export default async function Home() {
  await createUserIfNotExists();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section>
        <TopArticles />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
