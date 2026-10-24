import { Link } from "react-router-dom";
import Header from "@/components/site/Header";
import Benefits from "@/components/site/Benefits";
import ObjectCard from "@/components/site/ObjectCard";
import ContactBlock from "@/components/site/ContactBlock";
import { OBJECTS } from "@/lib/objects";

export default function Home() {
  const hero = OBJECTS[0];
  return (
    <div className="min-h-screen bg-[#1A1C1E] text-[#F2F4F7]">
      <Header />
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <img src={hero.cover} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E] via-[#1A1C1E]/60 to-[#1A1C1E]/20" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-end pb-16">
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {["СТАТУС: ПОСТРОЕН", "ДОКУМЕНТЫ: ГОТОВЫ", "ЦЕНА: ФИКСИРОВАНА"].map((t) => (
              <span key={t} className="border border-[#FFB800] text-[#FFB800] px-3 py-1.5 bg-black/40">[ {t} ]</span>
            ))}
          </div>
          <h1 className="mt-6 text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] max-w-4xl">
            Новые здания для бизнеса в Екатеринбурге
          </h1>
          <p className="mt-6 text-lg text-[#A0AEC0] max-w-2xl">
            Здание и участок в собственности, все разрешения и коммуникации. Покупаете — и сразу начинаете работать.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#catalog" className="rounded-full bg-[#FFB800] text-black font-bold uppercase px-7 h-14 inline-flex items-center hover:bg-white transition-colors">Смотреть объекты</a>
            <Link to={`/objects/${hero.slug}`} className="rounded-full border border-white/30 font-bold uppercase px-7 h-14 inline-flex items-center hover:border-white">{hero.address}</Link>
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