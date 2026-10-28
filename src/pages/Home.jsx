import Header from "@/components/site/Header";
import HeroImage from "@/components/site/HeroImage";
import Benefits from "@/components/site/Benefits";
import ObjectCard from "@/components/site/ObjectCard";
import ContactBlock from "@/components/site/ContactBlock";
import { OBJECTS } from "@/lib/objects";
import Reveal from "@/components/site/Reveal";

export default function Home() {
  const hero = OBJECTS[0];
  return (
    <div className="min-h-screen bg-[#4B5563] text-[#FAF5F0] overflow-x-hidden">
      <Header />
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <HeroImage />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4B5563] via-[#4B5563]/60 to-[#4B5563]/20" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-end pb-16">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] max-w-4xl">
            Помещения для бизнеса в Екатеринбурге
          </h1>
          <p className="mt-6 text-lg text-[#E5E7EB] max-w-2xl">
            Здания и участки в собственности. Все разрешения получены, а коммуникации подключены. Покупаете — и сразу начинаете работать.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a href="#catalog" onClick={(e) => { e.preventDefault(); document.getElementById("catalog").scrollIntoView({ behavior: "smooth" }); }} className="rounded-full bg-[#E9F056] text-black font-bold uppercase px-7 h-14 inline-flex items-center transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5">Смотреть объекты</a>
          </div>
        </div>
      </section>
      <section id="catalog" className="scroll-mt-20 max-w-7xl mx-auto px-5 md:px-10 py-20 border-b border-white/10">
        <Reveal>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Объекты</h2>
          </div>

        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OBJECTS.map((o, i) => <Reveal key={o.slug} delay={i * 0.1}><ObjectCard o={o} /></Reveal>)}
        </div>
        </Reveal>
      </section>
      <Reveal><Benefits /></Reveal>
      <Reveal><ContactBlock /></Reveal>
    </div>
  );
}