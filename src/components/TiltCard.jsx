import { forwardRef, useRef } from "react";

const MAX_ROTATION = 5;
const PERSPECTIVE = 1000;

const TiltCard = forwardRef(({ as: Component = "div", children, className = "", style, ...props }, forwardedRef) => {
  const cardRef = useRef(null);

  const setRefs = (node) => {
    cardRef.current = node;
    if (!forwardedRef) return;
    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else {
      forwardedRef.current = node;
    }
  };

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * MAX_ROTATION * 2;
    const rotateX = ((y / rect.height) - 0.5) * -MAX_ROTATION * 2;

    card.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <Component
      ref={setRefs}
      className={["tilt-card", className].filter(Boolean).join(" ")}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.25s ease, box-shadow 0.35s ease", ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  );
});

export default TiltCard;
