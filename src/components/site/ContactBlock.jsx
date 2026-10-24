import { Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/objects";

export default function ContactBlock() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[#141618]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28 text-center">
        <p className="font-mono text-xs uppercase text-[#FFB800] tracking-widest">[ Прямая связь ]</p>
        <h2 className="mt-4 text-3xl md:text-6xl font-black uppercase tracking-tight">Сделка напрямую с собственником</h2>
        <p className="mt-4 text-[#A0AEC0]">Антон — генеральный директор. Покажет объект и ответит на любые вопросы.</p>
        <a href={PHONE_HREF} className="mt-10 inline-flex items-center gap-4 bg-[#FFB800] text-black font-black text-2xl md:text-5xl px-8 md:px-12 py-6 md:py-8 hover:bg-white transition-colors">
          <Phone className="w-7 h-7 md:w-10 md:h-10" /> {PHONE}
        </a>
        <p className="mt-6 font-mono text-xs text-[#A0AEC0]">Агентов просьба не беспокоить</p>
      </div>
      <footer className="border-t border-white/10 py-6 text-center font-mono text-xs text-[#A0AEC0]">
        © {new Date().getFullYear()} Уральские склады · Екатеринбург и Свердловская область
      </footer>
    </section>
  );
}