import CallButton from "@/components/site/CallButton";

export default function ContactBlock() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[#3F4753]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight">Сделка напрямую с собственником</h2>
        <p className="mt-4 text-[#D1D5DB]">Владелец здания покажет объект и ответит на любые вопросы.</p>
        <CallButton className="mt-10 font-black px-5 h-11 text-sm gap-2 sm:gap-4 sm:text-2xl md:text-4xl sm:px-10 md:px-14 sm:h-auto sm:py-6" iconClass="w-4 h-4 sm:w-7 sm:h-7 md:w-9 md:h-9" />
      </div>
      <footer className="border-t border-white/10 py-6 text-center font-mono text-xs text-[#D1D5DB]">
        © {new Date().getFullYear()} Уральские склады · Екатеринбург и Свердловская область
      </footer>
    </section>
  );
}