import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Phone, MapPin, ArrowLeft } from "lucide-react";
import Header from "@/components/site/Header";
import Benefits from "@/components/site/Benefits";
import ContactBlock from "@/components/site/ContactBlock";
import { OBJECTS } from "@/lib/objects";
import CallButton from "@/components/site/CallButton";

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

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <div className="aspect-[16/10] rounded-3xl border border-white/10 overflow-hidden">
                <img src={o.gallery[img]} alt={o.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 flex gap-3">
                {o.gallery.map((g, i) => (
                  <button key={g} onClick={() => setImg(i)} className={`w-28 aspect-[16/10] overflow-hidden border-2 ${i === img ? "border-[#E9F056]" : "border-transparent opacity-60"}`}>
                    <img src={g} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-black uppercase">Характеристики</h2>
              <div className="mt-6 flex flex-col">
                {o.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3">
                    <span className="text-[#D1D5DB]">{k}</span><span className="font-mono font-bold text-right">{v}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase">Об объекте</h2>
              <div className="mt-6 space-y-4 text-[#C9D1DC] leading-relaxed">{o.about.map((p) => <p key={p}>{p}</p>)}</div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase">Расположение</h2>
              <ul className="mt-4 font-mono text-sm text-[#D1D5DB] space-y-1">{o.metro.map((m) => <li key={m}>● м. {m}</li>)}</ul>
              <iframe title="map" className="mt-6 w-full h-80 rounded-3xl border border-white/10" src={`https://yandex.ru/map-widget/v1/?ll=60.578242,56.859891&pt=60.578242,56.859891,pm2ywl&z=16`} />
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 rounded-3xl border border-white/10 p-6 bg-[#3F4753]">
              <div className="text-4xl font-black text-[#E9F056]">{o.price}</div>
              <div className="mt-1 font-mono text-sm text-[#D1D5DB]">{o.pricePerM}</div>
              <div className="mt-6 grid grid-cols-2 gap-px bg-white/10">
                {[["Площадь", o.area], ["Участок", o.land], ["Мощность", o.power], ["Потолки", o.height]].map(([k, v]) => (
                  <div key={k} className="bg-[#3F4753] p-3"><div className="font-mono text-[10px] uppercase text-[#D1D5DB]">{k}</div><div className="font-mono font-bold">{v}</div></div>
                ))}
              </div>
              <CallButton className="mt-6 w-full h-14 gap-3 font-black" iconClass="w-5 h-5" />
            </div>
          </aside>
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