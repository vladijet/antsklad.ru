import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Phone, MapPin, ArrowLeft } from "lucide-react";
import Header from "@/components/site/Header";
import Benefits from "@/components/site/Benefits";
import ContactBlock from "@/components/site/ContactBlock";
import { OBJECTS, PHONE, PHONE_HREF } from "@/lib/objects";

export default function ObjectPage() {
  const { slug } = useParams();
  const o = OBJECTS.find((x) => x.slug === slug);
  const [img, setImg] = useState(0);
  if (!o) return <div className="min-h-screen bg-[#1A1C1E] text-white p-10">Объект не найден. <Link to="/" className="text-[#FFB800]">В каталог</Link></div>;
  const others = OBJECTS.filter((x) => x.slug !== slug);

  return (
    <div className="min-h-screen bg-[#1A1C1E] text-[#F2F4F7]">
      <Header />
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[#A0AEC0] hover:text-white"><ArrowLeft className="w-4 h-4" /> Каталог</Link>
        <p className="mt-6 font-mono text-xs text-[#FFB800]">[ {o.lot} ]</p>
        <h1 className="mt-2 text-3xl md:text-6xl font-black uppercase tracking-tight">{o.title}</h1>
        <p className="mt-3 flex items-center gap-2 text-[#A0AEC0]"><MapPin className="w-4 h-4" /> {o.address}</p>

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <div className="aspect-[16/10] border border-white/10 overflow-hidden">
                <img src={o.gallery[img]} alt={o.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 flex gap-3">
                {o.gallery.map((g, i) => (
                  <button key={g} onClick={() => setImg(i)} className={`w-28 aspect-[16/10] overflow-hidden border-2 ${i === img ? "border-[#FFB800]" : "border-transparent opacity-60"}`}>
                    <img src={g} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-black uppercase">Характеристики</h2>
              <div className="mt-6 grid sm:grid-cols-2 border-t border-l border-white/10">
                {o.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-r border-b border-white/10 px-5 py-4">
                    <span className="text-[#A0AEC0]">{k}</span><span className="font-mono font-bold text-right">{v}</span>
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
              <ul className="mt-4 font-mono text-sm text-[#A0AEC0] space-y-1">{o.metro.map((m) => <li key={m}>● м. {m}</li>)}</ul>
              <iframe title="map" className="mt-6 w-full h-80 border border-white/10" src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(o.address)}&z=15`} />
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 border border-white/10 p-6 bg-[#141618]">
              <div className="font-mono text-xs uppercase text-[#A0AEC0]">Стоимость · {o.vat}</div>
              <div className="mt-2 text-4xl font-black text-[#FFB800]">{o.price}</div>
              <div className="mt-1 font-mono text-sm text-[#A0AEC0]">{o.pricePerM}</div>
              <div className="mt-6 grid grid-cols-2 gap-px bg-white/10">
                {[["Площадь", o.area], ["Участок", o.land], ["Мощность", o.power], ["Потолки", o.height]].map(([k, v]) => (
                  <div key={k} className="bg-[#141618] p-3"><div className="font-mono text-[10px] uppercase text-[#A0AEC0]">{k}</div><div className="font-mono font-bold">{v}</div></div>
                ))}
              </div>
              <a href={PHONE_HREF} className="mt-6 flex items-center justify-center gap-3 h-14 bg-[#FFB800] text-black font-black uppercase hover:bg-white transition-colors">
                <Phone className="w-5 h-5" /> Позвонить Антону
              </a>
              <p className="mt-3 text-center font-mono text-sm">{PHONE}</p>
              <p className="mt-1 text-center text-xs text-[#A0AEC0]">Генеральный директор, собственник</p>
            </div>
          </aside>
        </div>

        {others.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-black uppercase">Другие объекты</h2>
            <div className="mt-6 flex flex-wrap gap-4">{others.map((x) => <Link key={x.slug} to={`/objects/${x.slug}`} className="text-[#FFB800] underline">{x.title}</Link>)}</div>
          </section>
        )}
      </div>
      <Benefits />
      <ContactBlock />
    </div>
  );
}