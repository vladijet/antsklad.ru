import Header from "@/components/site/Header";
import { Image } from "@/components/ui/image";
import Benefits from "@/components/site/Benefits";
import ObjectCard from "@/components/site/ObjectCard";
import ContactBlock from "@/components/site/ContactBlock";
import { OBJECTS } from "@/lib/objects";

export default function Home() {
  const hero = OBJECTS[0];
  return (
    <div className="min-h-screen bg-[#4B5563] text-[#FAF5F0]">
      <Header />
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <Image src={hero.cover} alt="" loading="eager" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4B5563] via-[#4B5563]/60 to-[#4B5563]/20" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-end pb-16">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] max-w-4xl">
            Помещения для бизнеса в Екатеринбурге
          </h1>
          <p className="mt-6 text-lg text-[#E5E7EB] max-w-2xl">
            Здание и участок в собственности, все разрешения и коммуникации. Покупаете — и сразу начинаете работать.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a href="#catalog" className="rounded-full bg-[#E9F056] text-black font-bold uppercase px-7 h-14 inline-flex items-center transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5">Смотреть объекты</a>
          </div>
        </div>
      </section>
      <section id="catalog" className="max-w-7xl mx-auto px-5 md:px-10 py-20 border-b border-white/10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Объекты</h2>
          </div>

        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OBJECTS.map((o) => <ObjectCard key={o.slug} o={o} />)}
        </div>
      </section>
      <Benefits />
      <ContactBlock />
    </div>
  );
}