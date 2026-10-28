import { useState } from "react";

const BASE =
  "https://media.base44.com/images/public/6adc6b588f36fadc6ae176ca/0994b00fa_home.png/v1/fill";

const WIDTHS = [640, 1024, 1440, 1920, 2560];

const heroUrl = (w) =>
  `${BASE}/w_${w},h_${Math.round(w * 0.625)},al_c,q_55,usm_0.66_1.00_0.01,enc_auto,quality_auto/0994b00fa_home.png`;

// Static hero background: plain <img> so the browser preload scanner in
// index.html can start the download before React mounts.
export default function HeroImage() {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={heroUrl(1440)}
      srcSet={WIDTHS.map((w) => `${heroUrl(w)} ${w}w`).join(", ")}
      sizes="100vw"
      alt=""
      loading="eager"
      fetchPriority="high"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}