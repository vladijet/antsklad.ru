import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";

export default function ObjectCard({ o }) {
  const metrics = [["Площадь", o.area], ["Участок", o.land], ["Мощность", o.power], ["Цена", o.price]];
  return (
    <Link to={`/objects/${o.slug}`} className="group block rounded-3xl overflow-hidden bg-[#FAF5F0] text-[#2F3640] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={o.cardCover} loading="lazy" alt={o.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 font-mono text-xs bg-[#4B5563]/90 text-[#FAF5F0] rounded-full px-3 py-1">{o.lot}</span>
        {o.status && <span className="absolute top-3 right-3 text-xs font-bold bg-[#E9F056] text-[#2F3640] rounded-full px-3 py-1">{o.status}</span>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{o.title}</h3>
        <p className="text-[#6B7280] text-sm mt-1">Свободная планировка</p>
        <div className="mt-5 grid grid-cols-2 gap-px bg-[#4B5563]/15 rounded-xl overflow-hidden">
          {metrics.map(([k, v]) => (
            <div key={k} className="bg-[#FAF5F0] p-3">
              <div className="font-mono text-[10px] uppercase text-[#6B7280]">{k}</div>
              <div className="font-mono font-bold mt-1">{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E9F056] px-4 py-2 text-[#2F3640] font-bold uppercase text-sm">
          Подробнее <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}