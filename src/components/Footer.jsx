import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SHOP_ADDRESS, SHOP_EMAIL, SHOP_PHONE_DISPLAY } from "../lib/whatsapp";

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-border/60 bg-muted/30" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-copper to-copper-light grid place-items-center text-white font-display font-bold">U</div>
            <div>
              <div className="font-display text-xl title-underline">UMA Enterprises</div>
              <div className="text-xs text-muted-foreground">Quality Supplies For Every Product</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Trusted supplier of premium kitchen appliances in Firozabad. Mixer grinders, induction cookers, air fryers, toasters, irons and more — built for everyday Indian kitchens.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base mb-3">Browse</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-copper">Home</Link></li>
            <li><Link to="/products" className="hover:text-copper">Products</Link></li>
            <li><Link to="/about" className="hover:text-copper">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-copper">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-3">Reach Us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-copper" /> {SHOP_ADDRESS}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-copper" /> <a href="tel:+918931066049" className="hover:text-copper">{SHOP_PHONE_DISPLAY}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-copper" /> <a href={`mailto:${SHOP_EMAIL}`} className="hover:text-copper break-all">{SHOP_EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} UMA Enterprises. All rights reserved.</span>
          <span>Made with care in Firozabad, India.</span>
        </div>
      </div>
    </footer>
  );
}
