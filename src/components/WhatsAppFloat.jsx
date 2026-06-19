import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../lib/whatsapp";

export default function WhatsAppFloat() {
  const text = encodeURIComponent("Hello UMA Enterprises, I'd like to know more about your products.");
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-button"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-20 right-4 sm:bottom-6 sm:right-6 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/50 animate-ping" />
      <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl transition-all group-hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-full bg-foreground text-background text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  );
}
