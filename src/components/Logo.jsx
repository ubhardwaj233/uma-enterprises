import navbarLogo from "../asset/navbar.png";

export default function Logo({ className = "" }) {
  return (
    <img
      src={navbarLogo}
      alt="UMA Enterprises"
     className={`h-14 sm:h-16 w-auto object-contain ${className}`}
    />
  );
}