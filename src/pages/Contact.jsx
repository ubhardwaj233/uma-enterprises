import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import SEO from "../components/SEO";
import { SHOP_ADDRESS, SHOP_EMAIL, SHOP_PHONE_DISPLAY, WHATSAPP_NUMBER } from "../lib/whatsapp";

export default function Contact() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent("Shri Ji Plaza Market, Vijay Talkies, Firozabad")}&output=embed`;

  return (
    <>
      <SEO
        title="Contact UMA Enterprises — Firozabad Kitchen Appliances Store"
        description="Visit, call, email or WhatsApp UMA Enterprises in Firozabad. Open Mon–Sat, 9 AM – 7 PM."
      />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-copper">Get in touch</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 title-underline">Contact Information</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          We'd love to hear from you. Drop by the store, give us a call, or chat with us on WhatsApp.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: MapPin,
                label: "Address",
                value: SHOP_ADDRESS,
                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_ADDRESS)}`,
                testId: "contact-address-link",
                external: true,
              },
              {
                icon: Phone,
                label: "Phone",
                value: SHOP_PHONE_DISPLAY,
                href: "tel:+918931066049",
                testId: "contact-call-link",
              },
              {
                icon: Mail,
                label: "Email",
                value: SHOP_EMAIL,
                href: `mailto:${SHOP_EMAIL}`,
                testId: "contact-email-link",
              },
              {
                icon: Clock,
                label: "Business Hours",
                value: "Monday – Saturday · 9:00 AM – 7:00 PM",
                testId: "contact-hours-info",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                data-testid={c.testId}
                className={`flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card hover:border-copper transition ${c.href ? "" : "pointer-events-none"}`}
              >
                <div className="w-11 h-11 rounded-xl bg-copper/15 grid place-items-center text-copper">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium mt-0.5">{c.value}</div>
                </div>
              </a>
            ))}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello UMA Enterprises!")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-button"
              className="flex items-center justify-between gap-3 p-5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white transition shadow-lg shadow-emerald-500/20"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">Chat on WhatsApp</span>
              </span>
              <span className="text-sm opacity-80">+91 89310 66049</span>
            </a>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border/60 min-h-[360px] lg:min-h-[480px]" data-testid="contact-map">
            <iframe
              title="UMA Enterprises location"
              src={mapsSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
