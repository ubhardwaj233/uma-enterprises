export const WHATSAPP_NUMBER = "918931066049";
export const SHOP_PHONE_DISPLAY = "+91 89310 66049";
export const SHOP_EMAIL = "umaenterprises.fzd@gmail.com";
export const SHOP_ADDRESS = "Shri Ji Plaza Market, Vijay Talkies, Firozabad";

export function buildOrderMessage({ customer, items, total }) {
  const lines = [];
  lines.push("*NEW ORDER — UMA ENTERPRISES*");
  lines.push("");
  lines.push("*Customer Details*");
  lines.push(`Name: ${customer.customer_name}`);
  lines.push(`Mobile: ${customer.mobile}`);
  lines.push(`Address: ${customer.address}`);
  lines.push(`City: ${customer.city}`);
  lines.push(`State: ${customer.state}`);
  lines.push(`PIN: ${customer.pin_code}`);
  if (customer.notes) lines.push(`Notes: ${customer.notes}`);
  lines.push("");
  lines.push("*Order Items*");
  items.forEach((it, i) => {
    lines.push(`${i + 1}. ${it.name} x ${it.quantity} — Rs. ${it.price * it.quantity}`);
  });
  lines.push("");
  lines.push(`*Total: Rs. ${total}*`);
  lines.push("");
  lines.push("Placed via umaenterprises.in");
  return lines.join("\n");
}

export function openWhatsApp(text) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
