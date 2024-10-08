import { VelocityScroll } from "@/components/velocityScroll";

export default function TextVelocity() {
  const content = [
    { type: 'text' as const, content: 'Découvrez notre ' },
    { type: 'image' as const, content: '/projets/bdMovies/alien1.webp' },
    { type: 'text' as const, content: 'expertise en ' },
    { type: 'image' as const, content: '/projets/tattoo/tattoo1.jpg' },
    { type: 'text' as const, content: 'développement web' },
    { type: 'image' as const, content: '/projets/portfoliov2/oeil.jpg' },
    { type: 'text' as const, content: 'et en design' },
    { type: 'image' as const, content: '/projets/sophieBluel/sophie-bluel.png' },
    { type: 'text' as const, content: 'graphique.' },

  ];

  return (
    <section className="h-full w-full bg-stone-100 relative overflow-hidden">
      <div className="relative w-full py-4 z-[201] bg-black/90">
        <VelocityScroll
          content={content}
          default_velocity={1}
          className="font-display text-center text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white leading-normal py-4"
        />
      </div>
    </section>
  );
}
