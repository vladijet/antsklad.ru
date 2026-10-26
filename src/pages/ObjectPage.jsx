import { useState } from "react";
import { Image } from "@/components/ui/image";
import { useParams, Link } from "react-router-dom";
import { Phone, MapPin, ArrowLeft } from "lucide-react";
import Header from "@/components/site/Header";
import Benefits from "@/components/site/Benefits";
import ContactBlock from "@/components/site/ContactBlock";
import UseCases from "@/components/site/UseCases";
import { OBJECTS } from "@/lib/objects";

export default function ObjectPage() {
  const { slug } = useParams();
  const o = OBJECTS.find((x) => x.slug === slug);
  const [img, setImg] = useState(0);
  if (!o) return <div className="min-h-screen bg-[#4B5563] text-white p-10">Объект не найден. <Link to="/" className="text-[#E9F056]">В каталог</Link></div>;
  const others = OBJECTS.filter((x) => x.slug !== slug);

  return (
    <div className="min-h-screen bg-[#4B5563] text-[#FAF5F0]">
      <Header />
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[#D1D5DB] hover:text-white"><ArrowLeft className="w-4 h-4" /> Объекты</Link>
        <h1 className="mt-6 text-3xl md:text-6xl font-bold tracking-tight leading-tight">{o.title}</h1>
        <p className="mt-3 text-[#D1D5DB]">Свободная планировка</p>
        {o.status && <span className="mt-4 inline-block text-sm font-bold bg-[#E9F056] text-[#2F3640] rounded-full px-4 py-1.5">{o.status}</span>}

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12 space-y-12">
            <div>
              <div className="aspect-[16/10] rounded-3xl border border-white/10 overflow-hidden">
                <Image src={o.gallery[img]} alt={o.title} loading="eager" fetchPriority="high" className="w-full h-full object-cover" />
              </div>
              <div className={`mt-1 flex gap-3 overflow-x-auto pt-2 pb-2 px-1 ${o.gallery.length < 2 ? "hidden" : ""}`}>
                {o.gallery.map((g, i) => (
                  <button key={g} onClick={() => setImg(i)} className={`shrink-0 w-28 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-transform hover:scale-105 ${i === img ? "border-[#E9F056]" : "border-transparent opacity-60"}`}>
                    <Image src={g} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-[#E9F056]">{o.price}</div>
                  <div className="mt-1 font-mono text-sm text-[#D1D5DB]">{o.pricePerM}</div>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-black uppercase">Характеристики</h2>
              <div className="mt-6 flex flex-col">
                {o.specs.map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 py-3 border-b border-white/10 sm:border-0 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-mono font-bold">{k}</span><span className="hidden sm:block flex-1 border-b border-white/10" /><span className="text-[#C9D1DC] leading-relaxed sm:text-right">{v}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase">Об объекте</h2>
              <div className="mt-6 space-y-4 text-[#C9D1DC] leading-relaxed">{o.about.map((p) => <p key={p}>{p}</p>)}</div>
            </section>

            {o.map && <section>
              <h2 className="text-2xl font-black uppercase">Расположение</h2>
              <ul className="mt-4 font-mono text-sm text-[#D1D5DB] space-y-1">{o.metro.map((m) => <li key={m}>● м. {m}</li>)}</ul>
              <iframe title="map" loading="eager" className="mt-6 w-full h-[416px] rounded-3xl border border-white/10" src={o.map} />
            </section>}

            {o.slug === "pilotnaya-11" && <UseCases />}
          </div>

        </div>

        {others.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-black uppercase">Другие объекты</h2>
            <div className="mt-6 flex flex-wrap gap-4">{others.map((x) => <Link key={x.slug} to={`/objects/${x.slug}`} className="text-[#E9F056] underline">{x.title}</Link>)}</div>
          </section>
        )}
      </div>
      <Benefits />
      <ContactBlock />
    </div>
  );
}