import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/objects";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#1A1C1E]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-black uppercase tracking-tight text-lg">
          Уральские <span className="text-[#FFB800]">склады</span>
        </Link>
        <nav className="hidden md:flex gap-8 font-mono text-xs uppercase text-[#A0AEC0]">
          <a href="/#catalog" className="hover:text-white">Каталог</a>
          <a href="/#why" className="hover:text-white">Преимущества</a>
          <a href="#contact" className="hover:text-white">Контакты</a>
        </nav>
        <a href={PHONE_HREF} className="flex items-center gap-2 bg-[#FFB800] text-black font-bold px-4 h-11 text-sm">
          <Phone className="w-4 h-4" /> <span className="hidden sm:inline">{PHONE}</span><span className="sm:hidden">Позвонить</span>
        </a>
      </div>
    </header>
  );
}