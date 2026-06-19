import FloatingParticles from "./FloatingParticles";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import CartSheet from "./CartSheet";
import { Toaster } from "./ui/sonner";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Layout() {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const [mousePos, setMousePos] = useState({
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
});

useEffect(() => {
  const move = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", move);

  return () => {
    window.removeEventListener("mousemove", move);
  };
}, []);

useEffect(() => {
  setLoading(true);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 800);

  return () => clearTimeout(timer);
}, [pathname]);

  useEffect(() => {
  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress =
      (window.scrollY / totalHeight) * 100;

    setScrollProgress(progress);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

 
  // Scroll-reveal observer for elements with .scroll-fade
  useEffect(() => {
    const els = document.querySelectorAll(".scroll-fade");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  if (loading) {
  return <Loader />;
}


return (
  <>
  <div
  className="scroll-progress"
  style={{ width: `${scrollProgress}%` }}
/>

    <div
      className="mouse-glow"
      style={{
        left: mousePos.x,
        top: mousePos.y,
      }}
    />

    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FloatingParticles />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartSheet />
      <Toaster richColors position="top-center" />
    </div>
  </>
);
}