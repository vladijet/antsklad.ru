import { Link } from "react-router-dom";
import CallButton from "@/components/site/CallButton";

const LOGO = "https://media.base44.com/images/public/6adc6b588f36fadc6ae176ca/b83be67b1_logo_antsklad.svg";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 bg-[#4B5563] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={LOGO} alt="Уральские склады" className="h-9 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-8 font-mono text-xs uppercase text-[#E5E7EB]">
          <a href="/#catalog" className="hover:text-white">Объекты</a>
        </nav>
        <CallButton className="px-5 h-11 text-sm" />
      </div>
    </header>
  );
}