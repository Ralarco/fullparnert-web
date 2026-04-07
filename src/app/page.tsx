'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import Innovation from '@/components/Innovation';
import Team from '@/components/Team';
import Gallery from '@/components/Gallery';
import Trust from '@/components/Trust';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Team />
        <Gallery />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
