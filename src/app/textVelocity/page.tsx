import { VelocityScroll } from "@/components/velocityScroll";

export default function TextVelocity() {
  const content = [
    { type: 'text' as const, content: 'Découvrez notre ' },
    { type: 'image' as const, content: '/projets/bdMovies/alien1.webp' },
    { type: 'text' as const, content: 'expertise en ' },
    { type: 'image' as const, content: '/projets/tattoo/covertattoo.webp' },
    { type: 'text' as const, content: 'développement web' },
    { type: 'image' as const, content: '/projets/portfoliov2/oeil.webp' },
    { type: 'text' as const, content: 'et en design' },
    { type: 'image' as const, content: '/projets/sophieBluel/sophie1.webp' },
    { type: 'text' as const, content: 'graphique.' },

  ];

  return (
    <section className="h-full w-full bg-stone-100 relative overflow-hidden">
      <div className="relative w-full py-4 z-[201] bg-gradient-to-br from-black to-gray-900">
        <VelocityScroll
          content={content}
          default_velocity={1}
          className="font-display text-center text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-black tracking-[-0.02em] text-white drop-shadow-sm leading-normal py-4"
        />
      </div>
    </section>
  );
}
