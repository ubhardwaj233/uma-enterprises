import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import SEO from "../components/SEO";
import { useCart } from "../context/CartContext";
import { buildOrderMessage, openWhatsApp } from "../lib/whatsapp";
import { toast } from "sonner";
import { Minus, Plus, MessageCircle } from "lucide-react";

const API = "";

const emptyForm = { customer_name: "", mobile: "", address: "", city: "", state: "", pin_code: "", notes: "" };

export default function Checkout() {
  const { items, updateQty, removeItem, total, clearCart } = useCart();
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const orderItems = useMemo(
    () => items.map((it) => ({ product_id: it.id, name: it.name, price: it.price, quantity: it.quantity })),
    [items]
  );

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.customer_name.trim()) return "Please enter your name";
    if (!/^[0-9]{10}$/.test(form.mobile.trim())) return "Please enter a valid 10-digit mobile number";
    if (!form.address.trim()) return "Please enter your full address";
    if (!form.city.trim()) return "Please enter your city";
    if (!form.state.trim()) return "Please enter your state";
    if (!/^[0-9]{6}$/.test(form.pin_code.trim())) return "Please enter a valid 6-digit PIN code";
    if (items.length === 0) return "Your cart is empty";
    return null;
  };

  const handleConfirm = async () => {
    const err = validate();
    if (err) { toast.error(err); return; }
    setSubmitting(true);
    try {
      await axios.post(`${API}/orders`, {
        ...form,
        items: orderItems,
        total,
      });
      const msg = buildOrderMessage({ customer: form, items: orderItems, total });
      openWhatsApp(msg);
      toast.success("Order placed. Redirecting to WhatsApp...");
      clearCart();
      setTimeout(() => navigate("/"), 1500);
    } catch (e) {
      toast.error("Could not save order. Sending via WhatsApp anyway.");
      const msg = buildOrderMessage({ customer: form, items: orderItems, total });
      openWhatsApp(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl sm:text-4xl">Your cart is empty</h1>
        <p className="text-muted-foreground mt-3">Add some products to place an order.</p>
        <Button asChild className="mt-6 rounded-full bg-copper hover:bg-copper-dark text-white">
          <Link to="/products" data-testid="checkout-empty-shop-link">Shop Products</Link>
        </Button>
      </section>
    );
  }

  return (
    <>
      <SEO
        title="Checkout — UMA Enterprises"
        description="Complete your kitchen appliance order. Orders confirmed instantly via WhatsApp."
      />

      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <h1 className="font-display text-4xl sm:text-5xl title-underline">Place Your Order</h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Fill in your details and we'll redirect you to WhatsApp with a ready-to-send order message.
        </p>

        <div className="mt-10 grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="customer_name">Full Name</Label>
                  <Input id="customer_name" name="customer_name" value={form.customer_name} onChange={onChange} placeholder="e.g. Ramesh Kumar" data-testid="checkout-input-name" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" name="mobile" value={form.mobile} onChange={onChange} placeholder="10-digit number" inputMode="numeric" maxLength={10} data-testid="checkout-input-mobile" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Full Address</Label>
                <Textarea id="address" name="address" value={form.address} onChange={onChange} placeholder="House no., street, locality" data-testid="checkout-input-address" className="mt-1.5" rows={3} />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" value={form.city} onChange={onChange} data-testid="checkout-input-city" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input id="state" name="state" value={form.state} onChange={onChange} data-testid="checkout-input-state" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="pin_code">PIN Code</Label>
                  <Input id="pin_code" name="pin_code" value={form.pin_code} onChange={onChange} inputMode="numeric" maxLength={6} data-testid="checkout-input-pin" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea id="notes" name="notes" value={form.notes} onChange={onChange} placeholder="Preferred delivery time, landmark, etc." data-testid="checkout-input-notes" className="mt-1.5" rows={3} />
              </div>
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6 sticky top-24">
              <h2 className="font-display text-2xl">Order Summary</h2>
              <ul className="mt-4 space-y-3 max-h-72 overflow-y-auto pr-1">
                {items.map((it) => (
                  <li key={it.id} className="flex gap-3 items-start" data-testid={`checkout-summary-${it.id}`}>
                    <img src={it.image} alt={it.name} className="w-14 h-14 rounded-lg object-cover bg-muted" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{it.name}</div>
                      <div className="mt-1 inline-flex items-center rounded-full border border-border text-xs">
                        <button className="w-6 h-6 grid place-items-center" onClick={() => updateQty(it.id, it.quantity - 1)} data-testid={`checkout-dec-${it.id}`}>
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 tabular-nums">{it.quantity}</span>
                        <button className="w-6 h-6 grid place-items-center" onClick={() => updateQty(it.id, it.quantity + 1)} data-testid={`checkout-inc-${it.id}`}>
                          <Plus className="h-3 w-3" />
                        </button>
                        <button className="ml-2 mr-1 text-[10px] text-muted-foreground hover:text-destructive" onClick={() => removeItem(it.id)} data-testid={`checkout-remove-${it.id}`}>Remove</button>
                      </div>
                    </div>
                    <div className="text-sm font-semibold whitespace-nowrap">Rs. {(it.price * it.quantity).toLocaleString("en-IN")}</div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-display text-2xl text-copper" data-testid="checkout-total">Rs. {total.toLocaleString("en-IN")}</span>
              </div>

              <Button
                className="mt-5 w-full rounded-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white"
                onClick={handleConfirm}
                disabled={submitting}
                data-testid="checkout-confirm-order-button"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {submitting ? "Placing order..." : "Confirm Order via WhatsApp"}
              </Button>
              <p className="text-[11px] text-muted-foreground text-center mt-3">
                No payment required online. We'll confirm details on WhatsApp.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
