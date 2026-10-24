import { Link } from "react-router-dom";
import CallButton from "@/components/site/CallButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#4B5563]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-black uppercase tracking-tight text-lg">
          Уральские <span className="text-[#E9F056]">склады</span>
        </Link>
        <nav className="hidden md:flex gap-8 font-mono text-xs uppercase text-[#E5E7EB]">
          <a href="/#catalog" className="hover:text-white">Объекты</a>
        </nav>
        <CallButton className="px-5 h-11 text-sm" />
      </div>
    </header>
  );
}