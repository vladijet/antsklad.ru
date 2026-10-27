const SITE = "https://antsklad1.base44.app";

export const HOME_SEO = {
  title: "Уральские склады — готовые склады и коммерческие здания в Екатеринбурге от собственника",
  description: "В хороших локациях, с адаптацией под любой бизнес",
  path: "/",
  image: "https://media.base44.com/images/public/6adc6b588f36fadc6ae176ca/5ede929c7_home.png",
};

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setPageSeo({ title, description, path, image, jsonLd }) {
  const url = SITE + path;
  document.title = title;
  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", image);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", image);
  document.head.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  const ld = document.getElementById("page-jsonld");
  if (ld) ld.textContent = jsonLd ? JSON.stringify(jsonLd) : "{}";
}