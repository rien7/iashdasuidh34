export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full Screen Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://images.rien7.com/%E9%A3%9E%E4%B9%A620260115-180859.m4v" type="video/mp4" />
      </video>
    </section>
  );
}
