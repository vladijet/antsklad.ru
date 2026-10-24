import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ObjectCard({ o }) {
  const metrics = [["Площадь", o.area], ["Участок", o.land], ["Мощность", o.power], ["Цена", o.price]];
  return (
    <Link to={`/objects/${o.slug}`} className="group block border border-white/10 hover:border-[#FFB800] transition-colors">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={o.cover} alt={o.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 font-mono text-xs bg-black/70 px-2 py-1">{o.lot}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold uppercase">{o.title}</h3>
        <p className="text-[#A0AEC0] text-sm mt-1">{o.address}</p>
        <div className="mt-5 grid grid-cols-2 gap-px bg-white/10">
          {metrics.map(([k, v]) => (
            <div key={k} className="bg-[#1A1C1E] p-3">
              <div className="font-mono text-[10px] uppercase text-[#A0AEC0]">{k}</div>
              <div className="font-mono font-bold mt-1">{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-[#FFB800] font-bold uppercase text-sm">
          Подробнее <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}