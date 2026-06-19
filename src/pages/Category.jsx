import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "../components/ui/button";
import SEO from "../components/SEO";
import TiltCard from "../components/TiltCard";
import { getCategory, getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export default function Category() {
  const { slug } = useParams();
  const category = getCategory(slug);
  const items = getProductsByCategory(slug);
  const { addItem } = useCart();

  if (!category) return <Navigate to="/products" replace />;

  return (
    <>
      <SEO
        title={`${category.name} — UMA Enterprises`}
        description={`Shop ${category.name.toLowerCase()} at UMA Enterprises. ${category.tagline}.`}
        image={category.image}
      />

      {/* Category hero */}
      <section className="relative overflow-hidden" data-testid={`category-hero-${slug}`}>
        <div className="absolute inset-0 -z-10">
          <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <Link to="/products" className="text-xs text-muted-foreground hover:text-copper" data-testid="category-back-link">← All categories</Link>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 title-underline">{category.name}</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">{category.tagline}.</p>
        </div>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {items.map((p, i) => (
            <TiltCard
              as="article"
              key={p.id}
              data-testid={`product-card-${p.id}`}
              className="group rounded-2xl overflow-hidden border border-border/60 bg-card scroll-fade flex flex-col product-item-card"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Link to={`/product/${p.id}`} className="block aspect-square overflow-hidden bg-muted relative">
               <img
  src={p.image}
  alt={p.name}
  loading="lazy"
  className="w-full h-full object-cover"
/>
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full glass">{category.name}</span>
              </Link>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-display text-lg leading-tight title-underline">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display text-xl text-copper">₹{p.price.toLocaleString("en-IN")}</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Button asChild variant="outline" className="flex-1 rounded-full" size="sm" data-testid={`view-details-${p.id}`}>
                    <Link to={`/product/${p.id}`}>
                      Details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full bg-copper hover:bg-copper-dark text-white"
                    onClick={() => { addItem(p, 1); toast.success(`${p.name} added to cart`); }}
                    data-testid={`add-to-cart-${p.id}`}
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
}
