import ContactForm from "./_components/contactForm";
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-48 flex flex-col items-center justify-center"
    >
      <div className="px-4 max-w-[48rem] w-full">

 
        <div className="flex flex-col py-2 mb-32">
          <h2 className="font-marcellus text-3xl md:text-4xl lg:text-5xl xl:text-8xl">
            Salut ! 
          </h2>
          <h2 className="font-marcellus text-3xl md:text-4xl lg:text-5xl xl:text-8xl">
            Commençons
          </h2>

          <div className="h-1 w-[10%] bg-stone-300 my-6" />

          <p>Ce formulaire ne prend que deux minutes à remplir et m&apos;aide à mieux comprendre votre situation et vos besoins commerciaux afin que nous puissions démarrer plus rapidement votre projet. Sinon, envoie-moi juste un e-mail</p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
}