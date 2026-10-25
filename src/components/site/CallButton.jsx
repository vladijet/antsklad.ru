import { useState } from "react";
import { Phone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PHONE, PHONE_HREF } from "@/lib/objects";

export default function CallButton({ className = "", iconClass = "w-4 h-4", label = "Позвонить" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#E9F056] text-black font-bold uppercase transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5 ${className}`}>
        <Phone className={iconClass} /> {label}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#FAF5F0] border-[#4B5563]/15 text-[#2F3640] rounded-3xl text-center">
          <DialogTitle className="font-black uppercase">Антон, собственник</DialogTitle>
          <p className="mt-2 font-mono text-2xl md:text-3xl font-bold">{PHONE}</p>
          <a href={PHONE_HREF} className="mt-4 flex items-center justify-center gap-2 h-14 rounded-full bg-[#E9F056] text-black font-black uppercase transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5">
            <Phone className="w-5 h-5" /> Позвонить
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
}