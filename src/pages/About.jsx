import { ShieldCheck, Heart, Sparkles, Award } from "lucide-react";
import SEO from "../components/SEO";

const SHOP_IMG = "https://images.unsplash.com/photo-1644395175647-7fc09bdae7c1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600";

export default function About() {
  return (
    <>
      <SEO
        title="About UMA Enterprises — Our Story & Mission"
        description="UMA Enterprises is a trusted kitchen appliance supplier in Firozabad committed to quality products, honest prices and lasting customer relationships."
      />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-copper">About us</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 max-w-3xl">About <span className="copper-gradient-text title-underline">UMA Enterprises</span></h1>
        <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
          A neighbourhood name in Firozabad, built on trust, quality and warm service.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center pb-16 scroll-fade">
        <div className="relative rounded-3xl overflow-hidden border border-border/60 aspect-[4/3]">
          <img src={SHOP_IMG} alt="UMA Enterprises store interior" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Our Story</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            What began as a small counter in Shri Ji Plaza Market, Vijay Talkies, Firozabad, has grown into a beloved
            destination for kitchen essentials. For years, UMA Enterprises has been the place where families come for
            their first mixer grinder, their daughter's wedding gift hamper, and their everyday irons and toasters.
          </p>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            We stock only what we'd put in our own kitchens — appliances tested for durability, backed by genuine
            warranties, and chosen for honest value. No upsells, no hidden surprises. Just dependable products and
            people who know them well.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center scroll-fade">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              To make every Indian kitchen better-equipped — with products that perform reliably, prices that stay
              honest, and service that feels personal.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Customer Satisfaction above everything",
                "Quality Products from trusted manufacturers",
                "Affordable Pricing without compromise",
                "Long-Term Trust through transparent service",
              ].map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-copper" />
                  <span className="text-foreground/85">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: ShieldCheck, label: "Quality First", text: "Every product hand-picked for durability." },
              { icon: Heart, label: "Trust & Transparency", text: "Honest pricing, no hidden fees." },
              { icon: Sparkles, label: "Service Excellence", text: "Friendly help before & after the sale." },
              { icon: Award, label: "Years of Heritage", text: "A name Firozabad has grown up with." },
            ].map((v, i) => (
              <div key={v.label} className="glass rounded-2xl p-5 scroll-fade" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-xl bg-copper/15 grid place-items-center text-copper mb-3">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg">{v.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
