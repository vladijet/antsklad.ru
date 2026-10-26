import { Image } from "@/components/ui/image";

const BASE = "https://media.base44.com/images/public/6adc6b588f36fadc6ae176ca/";
const ITEMS = [
  ["Автосервиса", BASE + "3aedcaa9d_.jpg"],
  ["Даркстора", BASE + "d9e400a79_.jpg"],
  ["Мебельного производства", BASE + "4f8b42a46_.jpg"],
];

export default function UseCases() {
  return (
    <section>
      <h2 className="text-2xl font-black">Запускай сам или сдавай в аренду для:</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {ITEMS.map(([title, src]) => (
          <div key={title} className="rounded-3xl bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
            <Image src={src} alt={title} className="w-full aspect-square rounded-2xl" fittingType="fit" />
            <p className="mt-3 text-center font-bold text-[#2f3640]">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}