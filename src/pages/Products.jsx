import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import TiltCard from "../components/TiltCard";
import { categories, products } from "../data/products";

export default function Products() {
  return (
    <>
      <SEO
        title="Shop Kitchen Appliances — UMA Enterprises"
        description="Browse mixer grinders, induction cookers, OTG & air fryers, toasters and irons. Premium quality kitchen appliances at honest prices."
      />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <header className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-copper">Our Catalogue</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3">Shop by category</h1>
          <p className="mt-4 text-muted-foreground">
            Discover a carefully curated range of kitchen appliances — built for performance, designed for everyday Indian homes.
          </p>
        </header>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((c, i) => {
            const count = products.filter((p) => p.category === c.slug).length;
            return (
              <TiltCard
                as={Link}
                to={`/products/${c.slug}`}
                key={c.slug}
                data-testid={`products-category-card-${c.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-border/60 bg-card scroll-fade product-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-5/4 overflow-hidden bg-muted">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                     <h2 className="font-display text-2xl title-underline">
  {c.name}
</h2>
                      <p className="text-sm text-muted-foreground mt-1">{c.tagline}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-copper/10 text-copper whitespace-nowrap">{count} items</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-copper">
                    Browse range <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>
    </>
  );
}
