import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "./ui/sheet";
import { Button } from "./ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartSheet() {
  const { open, setOpen, items, updateQty, removeItem, total, count } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setOpen(false);
    navigate("/checkout");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-[92%] sm:w-[440px] p-0 flex flex-col">
        <SheetHeader className="px-6 pt-6 pb-3 text-left border-b border-border/60">
          <SheetTitle className="font-display text-2xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-copper" /> Your Cart
          </SheetTitle>
          <p className="text-xs text-muted-foreground">{count} item{count !== 1 && "s"}</p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-3" data-testid="cart-items-list">
          {items.length === 0 ? (
            <div className="h-full grid place-items-center text-center px-6">
              <div>
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted grid place-items-center">
                  <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="font-display text-lg">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-1">Browse our products and add your favourites.</p>
                <Button
                  className="mt-5 rounded-full bg-copper hover:bg-copper-dark text-white"
                  onClick={() => { setOpen(false); navigate("/products"); }}
                  data-testid="cart-empty-shop-button"
                >
                  Shop Products
                </Button>
              </div>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.id} className="flex gap-3 p-3 rounded-xl border border-border/60 bg-card" data-testid={`cart-item-${it.id}`}>
                  <img src={it.image} alt={it.name} className="w-16 h-16 rounded-lg object-cover bg-muted" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{it.name}</div>
                    <div className="text-xs text-muted-foreground">Rs. {it.price.toLocaleString("en-IN")}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          className="w-7 h-7 grid place-items-center hover:text-copper"
                          onClick={() => updateQty(it.id, it.quantity - 1)}
                          data-testid={`cart-decrement-${it.id}`}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-sm tabular-nums" data-testid={`cart-qty-${it.id}`}>{it.quantity}</span>
                        <button
                          className="w-7 h-7 grid place-items-center hover:text-copper"
                          onClick={() => updateQty(it.id, it.quantity + 1)}
                          data-testid={`cart-increment-${it.id}`}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        className="ml-auto text-xs text-muted-foreground hover:text-destructive flex items-center gap-1"
                        onClick={() => removeItem(it.id)}
                        data-testid={`cart-remove-${it.id}`}
                      >
                        <Trash2 className="h-3 w-3" /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-semibold whitespace-nowrap">
                    Rs. {(it.price * it.quantity).toLocaleString("en-IN")}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t border-border/60 p-5">
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display text-xl font-semibold" data-testid="cart-subtotal">
                  Rs. {total.toLocaleString("en-IN")}
                </span>
              </div>
              <Button
                className="w-full rounded-full bg-copper hover:bg-copper-dark text-white h-11"
                onClick={handleCheckout}
                data-testid="cart-checkout-button"
              >
                Proceed to Order via WhatsApp
              </Button>
              <p className="text-[11px] text-muted-foreground text-center">
                You'll be redirected to WhatsApp to confirm your order.
              </p>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
