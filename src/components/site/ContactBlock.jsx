import CallButton from "@/components/site/CallButton";

export default function ContactBlock() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[#141618]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28 text-center">
        <p className="font-mono text-xs uppercase text-[#FFB800] tracking-widest">[ Прямая связь ]</p>
        <h2 className="mt-4 text-3xl md:text-6xl font-black uppercase tracking-tight">Сделка напрямую с собственником</h2>
        <p className="mt-4 text-[#A0AEC0]">Антон — генеральный директор. Покажет объект и ответит на любые вопросы.</p>
        <CallButton className="mt-10 gap-4 font-black text-2xl md:text-4xl px-10 md:px-14 py-6" iconClass="w-7 h-7 md:w-9 md:h-9" />
        <p className="mt-6 font-mono text-xs text-[#A0AEC0]">Агентов просьба не беспокоить</p>
      </div>
      <footer className="border-t border-white/10 py-6 text-center font-mono text-xs text-[#A0AEC0]">
        © {new Date().getFullYear()} Уральские склады · Екатеринбург и Свердловская область
      </footer>
    </section>
  );
}