import { useState } from "react";
import { Phone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PHONE, PHONE_HREF } from "@/lib/objects";

export default function CallButton({ className = "", iconClass = "w-4 h-4" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#FFB800] text-black font-bold uppercase hover:bg-white transition-colors ${className}`}>
        <Phone className={iconClass} /> Позвонить
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#1A1C1E] border-white/10 text-white rounded-3xl text-center">
          <DialogTitle className="font-black uppercase">Антон, собственник</DialogTitle>
          <p className="mt-2 font-mono text-2xl md:text-3xl font-bold">{PHONE}</p>
          <a href={PHONE_HREF} className="mt-4 flex items-center justify-center gap-2 h-14 rounded-full bg-[#FFB800] text-black font-black uppercase hover:bg-white transition-colors">
            <Phone className="w-5 h-5" /> Позвонить
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
}