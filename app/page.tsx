import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import NewsComponent from './components/News';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Technology />
      <NewsComponent />
      <Footer />
    </main>
  );
}
