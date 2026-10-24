import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallButton from "@/components/site/CallButton";

const LOGO = "https://media.base44.com/images/public/6adc6b588f36fadc6ae176ca/b83be67b1_logo_antsklad.svg";

export default function Header() {
  const [alpha, setAlpha] = useState(0);

  useEffect(() => {
    const onScroll = () => setAlpha(Math.min(window.scrollY / 200, 1) * 0.95);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-sm transition-colors"
      style={{ backgroundColor: `rgba(75, 85, 99, ${alpha})`, borderBottom: `1px solid rgba(255,255,255,${alpha * 0.1})` }}
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