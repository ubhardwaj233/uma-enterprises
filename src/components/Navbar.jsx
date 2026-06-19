import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, ShoppingBag, Moon, Sun, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("uma-theme");
    const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("uma-theme", next ? "dark" : "light");
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6`}>
        <div
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-lg" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group" data-testid="navbar-logo-link">
            <Logo className="max-h-14 transition-all duration-300 group-hover:scale-[1.02]" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
               className={({ isActive }) =>
  `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
  after:absolute after:left-1/2 after:-bottom-1 after:h-[2px]
  after:w-0 after:bg-copper after:transition-all after:duration-300
  after:-translate-x-1/2 hover:after:w-[70%]
  ${
    isActive
      ? "text-copper after:w-[70%] drop-shadow-[0_0_10px_rgba(255,180,80,0.9)]"
      : "text-foreground/80 hover:text-white"
  }`
}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="theme-toggle-button"
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCartOpen(true)}
              data-testid="cart-open-button"
              aria-label="Open cart"
              className="rounded-full relative"
            >
              <ShoppingBag className="h-4 w-4" />
              {count > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 grid place-items-center text-[10px] font-semibold rounded-full bg-copper text-white"
                  data-testid="cart-count-badge"
                >
                  {count}
                </span>
              )}
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  data-testid="hamburger-menu-button"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88%] sm:w-[420px] p-0">
                <SheetHeader className="px-6 pt-6 pb-3 text-left">
                  <SheetTitle className="font-display text-2xl title-underline">
                    <span className="copper-gradient-text">UMA Enterprises</span>
                  </SheetTitle>
                  <p className="text-sm text-muted-foreground">Quality Supplies For Every Product</p>
                </SheetHeader>
                <nav className="px-3 py-4 flex flex-col">
                  {links.map((l, idx) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      end={l.to === "/"}
                      onClick={() => setOpen(false)}
                      data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                      style={{ animationDelay: `${idx * 60}ms` }}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-4 py-4 rounded-xl text-lg font-display animate-fade-up ${
                          isActive ? "bg-copper/10 text-copper" : "hover:bg-muted"
                        }`
                      }
                    >
                      <span>{l.label}</span>
                      <span className="opacity-40 group-hover:opacity-100 transition-opacity">→</span>
                    </NavLink>
                  ))}
                </nav>
                <div className="px-6 py-4 mt-auto border-t border-border/60">
                  <a
                    href="tel:+918931066049"
                    data-testid="mobile-menu-call-link"
                    className="flex items-center gap-3 text-sm text-foreground/80 hover:text-copper transition"
                  >
                    <Phone className="h-4 w-4" /> +91 89310 66049
                  </a>
                  <Button
                    className="mt-4 w-full rounded-full bg-copper hover:bg-copper-dark text-white"
                    onClick={() => { setOpen(false); navigate("/products"); }}
                    data-testid="mobile-menu-explore-button"
                  >
                    Explore Our Products
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
