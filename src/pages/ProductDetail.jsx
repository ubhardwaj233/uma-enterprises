import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Zap, ShieldCheck, Truck } from "lucide-react";
import { Button } from "../components/ui/button";
import SEO from "../components/SEO";
import { getCategory, getProduct, getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const [qty, setQty] = useState(1);
  const { addItem, setOpen } = useCart();
  const navigate = useNavigate();

  if (!product) return <Navigate to="/products" replace />;

  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.description,
    brand: { "@type": "Brand", name: "UMA Enterprises" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "UMA Enterprises" }
    }
  };

  const handleAdd = () => {
    addItem(product, qty);
    toast.success(`Added ${qty} × ${product.name} to cart`);
  };

  const handleBuyNow = () => {
    addItem(product, qty);
    setOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      <SEO
        title={`${product.name} — UMA Enterprises`}
        description={product.description}
        image={product.image}
        jsonLd={productJsonLd}
      />

      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-2 flex-wrap">
          <Link to="/products" className="hover:text-copper">Products</Link>
          <span>/</span>
          <Link to={`/products/${product.category}`} className="hover:text-copper">{category?.name}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-muted aspect-square" data-testid="product-detail-image">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 text-[11px] uppercase tracking-wider px-3 py-1 rounded-full glass">{category?.name}</span>
          </div>

          <div className="lg:pt-4">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight title-underline" data-testid="product-detail-name">{product.name}</h1>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-display text-3xl text-copper" data-testid="product-detail-price">₹{product.price.toLocaleString("en-IN")}</span>
              <span className="text-xs text-muted-foreground">Inclusive of all taxes</span>
            </div>

            <p className="mt-5 text-foreground/80 leading-relaxed" data-testid="product-detail-description">{product.description}</p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              {[
                { icon: ShieldCheck, label: "Quality assured" },
                { icon: Truck, label: "Fast delivery" },
                { icon: Zap, label: "Best price" },
              ].map((f) => (
                <div key={f.label} className="rounded-xl border border-border/60 p-3 flex items-center gap-2">
                  <f.icon className="h-4 w-4 text-copper" />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-border">
                <button
                  className="w-10 h-10 grid place-items-center hover:text-copper"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  data-testid="product-detail-qty-decrement"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center tabular-nums" data-testid="product-detail-qty">{qty}</span>
                <button
                  className="w-10 h-10 grid place-items-center hover:text-copper"
                  onClick={() => setQty((q) => q + 1)}
                  data-testid="product-detail-qty-increment"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-xs text-muted-foreground">Select quantity</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="rounded-full bg-copper hover:bg-copper-dark text-white h-12 px-7"
                onClick={handleBuyNow}
                data-testid="product-detail-buy-now"
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-7"
                onClick={handleAdd}
                data-testid="product-detail-add-to-cart"
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Orders are confirmed via WhatsApp. We'll redirect you with a ready-to-send message.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl sm:text-3xl mb-6">You may also like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group rounded-2xl overflow-hidden border border-border/60 bg-card" data-testid={`related-${p.id}`}>
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-3">
                    <div className="text-sm font-medium truncate">{p.name}</div>
                    <div className="text-copper text-sm mt-0.5">₹{p.price.toLocaleString("en-IN")}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
