import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Truck, Sparkles, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import SEO from "../components/SEO";
import TiltCard from "../components/TiltCard";
import { categories } from "../data/products";

const HERO_IMG = "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800";

export default function Home() {
  const [count, setCount] = useState(0);

useEffect(() => {
  let start = 0;

  const timer = setInterval(() => {
    start += 20;

    if (start >= 1000) {
      start = 1000;
      clearInterval(timer);
    }

    setCount(start);
  }, 15);

  return () => clearInterval(timer);
}, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "UMA Enterprises",
    image: HERO_IMG,
    "@id": "https://umaenterprises.in",
    url: "https://umaenterprises.in",
    telephone: "+918931066049",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shri Ji Plaza Market, Vijay Talkies",
      addressLocality: "Firozabad",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    priceRange: "₹₹",
  };

  return (
    <>
      <SEO
        title="UMA Enterprises — Premium Kitchen Appliances in Firozabad"
        description="Trusted supplier of mixer grinders, induction cookers, air fryers, toasters & irons. Quality appliances with dependable service. Order via WhatsApp."
        image={HERO_IMG}
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 -z-10">
          <img src={HERO_IMG} alt="Modern kitchen appliances" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,hsl(var(--primary)/0.18),transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs glass mb-6 animate-fade-up">
              <Sparkles className="h-3.5 w-3.5 text-copper" />
              <span className="tracking-wide uppercase text-foreground/80">Firozabad's trusted kitchen store</span>
            </div>
<div className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.15] tracking-tight animate-fade-up">

 <div className="hero-brand">
  UMA
</div>

<div className="hero-brand">
  ENTERPRISES
</div>
</div>
            <p className="mt-6 text-2xl sm:text-3xl font-heading italic text-foreground/90 animate-fade-up" style={{ animationDelay: "140ms" }}>
  “Quality Supplies For Every Product”
</p>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "220ms" }}>
              From powerful mixer grinders to smart induction cookers, UMA Enterprises brings you durable, dependable kitchen appliances — backed by genuine warranties and warm customer service.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Button asChild size="lg" data-testid="hero-explore-products-button" className="rounded-full bg-copper hover:bg-copper-dark text-white h-12 px-7 text-base shadow-lg shadow-copper/25">
                <Link to="/products">
                  Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 text-base">
                <Link to="/contact" data-testid="hero-contact-button">Visit Our Store</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "380ms" }}>

  <div className="flex items-center gap-2">
    <ShieldCheck className="h-4 w-4 text-copper" />
    Genuine brand-quality
  </div>

  <div className="flex items-center gap-2">
    <Truck className="h-4 w-4 text-copper" />
    Fast local delivery
  </div>

  <div className="flex items-center gap-2">
    <Star className="h-4 w-4 text-copper" />
    {count}+ happy families
  </div>

 </div>
</div>
</div>
</section>


      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-20" data-testid="home-categories-section">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10 scroll-fade">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper">Shop by category</p>
            <h2 className="font-display text-4xl sm:text-5xl mt-2">Find your kitchen essential</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-copper hover:underline" data-testid="home-view-all-link">
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
         {categories.map((c, i) => (
            <TiltCard
              as={Link}
              to={`/products/${c.slug}`}
              key={c.slug}
              data-testid={`home-category-card-${c.slug}`}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card scroll-fade ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`relative ${i === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-4/3"} overflow-hidden`}>
                <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
                  <h3 className="font-display text-xl sm:text-2xl title-underline">
  {c.name}
</h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-1 hidden sm:block title-underline">
  {c.tagline}
</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-copper-light">
                    Shop now <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-5">
          {[
            { icon: ShieldCheck, title: "Quality First", text: "Every appliance is hand-picked from trusted manufacturers. Built to last seasons of daily cooking." },
            { icon: Truck, title: "Fast Local Delivery", text: "Same-day delivery within Firozabad. Across UP & nearby districts in 2–4 days." },
            { icon: Sparkles, title: "After-Sales Care", text: "Genuine warranty support, replacement assistance and friendly guidance — always a call away." },
          ].map((f, i) => (
            <div key={i} className="scroll-fade glass rounded-2xl p-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-11 h-11 rounded-xl bg-copper/15 grid place-items-center text-copper mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
