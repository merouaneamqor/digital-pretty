import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import PopularServices from "./_components/PopularServices";
import TopProfessionals from "./_components/TopProfessionals";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PopularServices />
      <TopProfessionals />
    </main>
  )
}
