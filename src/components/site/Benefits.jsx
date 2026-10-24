const ITEMS = [
  ["01", "Фиксированная цена", "Окончательная стоимость, которая не растёт в процессе переговоров. Никаких непредвиденных расходов и смет «по факту»."],
  ["02", "Документы готовы", "Разрешения, согласования с сетевыми компаниями, ввод в эксплуатацию — всё уже получено. Без лет ожидания и штрафов."],
  ["03", "Гарантия до 3 лет", "Гарантия на работы и материалы. Строим «как себе» — только надёжные подрядчики и качественные материалы."],
  ["04", "Собственность", "Готовое здание и участок в собственности, исключительные права на объекты. Коммуникации подключены."],
  ["05", "Хорошие локации", "Участки уже подобраны в Екатеринбурге и области — без поиска, подводных камней и скрытых ограничений."],
  ["06", "Безопасная сделка", "Сильная юридическая экспертиза и опыт. Прозрачная и защищённая сделка для покупателя."],
];

export default function Benefits() {
  return (
    <div className="bg-[#FAF5F0] text-[#2F3640]">
      <section id="why" className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <p className="font-mono text-xs uppercase text-[#4B5563] tracking-widest">[ Почему готовый склад ]</p>
        <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight max-w-3xl">Без долгостроя, согласований и сюрпризов в бюджете</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#4B5563]/15">
          {ITEMS.map(([n, t, d]) => (
            <div key={n} className="border-r border-b border-[#4B5563]/15 p-8 hover:bg-[#A7F3D0]/30 transition-colors">
              <span className="inline-block font-mono text-sm bg-[#E9F056] rounded-full px-3 py-1">{n}</span>
              <h3 className="mt-6 text-xl font-bold uppercase">{t}</h3>
              <p className="mt-3 text-[#6B7280] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}