export default function FloatingParticles() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${20 + Math.random() * 15}s`,
          }}
        />
      ))}
    </>
  );
}