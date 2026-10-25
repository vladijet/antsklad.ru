import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CallButton from "@/components/site/CallButton";

const LOGO = "https://media.base44.com/images/public/6adc6b588f36fadc6ae176ca/a1285096b_logo_AntSklad_3.svg";

export default function Header() {
  const isHome = useLocation().pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`${isHome ? "fixed inset-x-0" : "sticky"} top-0 z-40 transition-colors duration-300 ${transparent ? "bg-transparent border-b border-transparent" : "bg-[#4B5563] border-b border-white/10"}`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={LOGO} alt="Уральские склады" className="h-[31.5px] w-auto" />
        </Link>
        <nav className={`hidden md:flex gap-8 font-mono text-base uppercase ${transparent ? "text-[#2F3640]" : "text-[#E5E7EB]"}`}>
          <a href="/#catalog" className={transparent ? "hover:text-black" : "hover:text-white"}>Объекты</a>
        </nav>
        <CallButton className="px-5 h-11 text-sm" />
      </div>
    </header>
  );
}