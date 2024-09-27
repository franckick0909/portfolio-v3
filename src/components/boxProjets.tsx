import { AnimatedText } from "./animatedText";

export default function BoxProjets({
  titles,
  subtitle,
  description1,
  description2,
  traitBg = 'bg-black'
}: {
  titles: string;
  subtitle: string;
  description1: string;
  description2: string;
  traitBg?: string 
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-64 bg-white px-4">
        <AnimatedText
        text={titles}
        className="text-6xl font-normal text-black font-marcellus mb-20"
        />
      <div className={`h-36 w-[2px] ${traitBg} mb-20 rounded-full`} />

      <div className="max-w-3xl w-full border-[3px] border-stone-200 flex flex-col p-14 bg-white relative">
        {/* Ajout des éléments pour créer l'effet de bordure */}
        <div className="absolute -top-3 left-3 right-3 -bottom-3 border-[3px] border-stone-200"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-normal text-black font-marcellus uppercase text-center mb-4">
            {subtitle}
          </h3>
          <div className="h-[3px] bg-stone-200 w-16 mx-auto mb-6" />

          <p className="text-base md:text-lg text-stone-500 mb-4">
            {description1}
          </p>
          <p className="text-base md:text-lg text-stone-500">{description2}</p>
        </div>
      </div>
    </div>
  );
}
