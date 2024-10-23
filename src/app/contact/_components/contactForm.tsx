"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contactActions";
import { FaMailBulk } from "react-icons/fa";
import { Modal } from "@/components/modal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  compagny: string;
  website: string;
  project: string[];
  budget: string;
  timeline: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  // Ajoutez d'autres champs si nécessaire
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    compagny: "",
    website: "",
    project: [],
    budget: "",
    timeline: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checkbox = event.target as HTMLInputElement;
      setFormData((prev) => {
        if (checkbox.checked) {
          return { ...prev, project: [...prev.project, value] };
        } else {
          return {
            ...prev,
            project: prev.project.filter((item) => item !== value),
          };
        }
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Validation en temps réel
    if (name === 'name' || name === 'email') {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse email n'est pas valide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const result = await sendContactEmail(formDataToSend);
      if (result.success) {
        setIsSuccess(true);
        setModalMessage("Message envoyé avec succès !");
        setFormData({
          name: "",
          email: "",
          phone: "",
          compagny: "",
          website: "",
          project: [],
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        setIsSuccess(false);
        setModalMessage(`Erreur lors de l'envoi du message : ${result.message}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setIsSuccess(false);
      setModalMessage("Une erreur est survenue lors de l'envoi du message.");
    }
    setIsModalOpen(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      compagny: "",
      website: "",
      project: [],
      budget: "",
      timeline: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center max-w-[48rem] w-full">
      {/* PREMIERE PARTIE */}

      <div className="w-full inline-block">
          <h2 className="font-marcellus text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            D&apos;abord, un peu de
          </h2>
          <div className="flex items-center justify-start">
            <div className="left-0 w-[10%] h-[1px] bg-stone-700" />
          <h2 className="font-pinyon-script text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            &nbsp;vous
          </h2>
          </div>
        </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-14 w-full">
        <div className="flex flex-col relative group">
          <input
            type="text"
            placeholder=" "
            onChange={handleChange}
            value={formData.name}
            name="name"
            id="name"
            className={`px-0 py-1 border-b-2 ${errors.name ? 'border-red-500' : 'border-stone-200'} outline-none bg-transparent peer focus:border-b-black focus:border-b-[3px] text-base z-10`}
            required
            aria-required="true"
          />
          <label
            htmlFor="name"
            className={`absolute left-0 transition-all duration-300 ${errors.name ? 'text-red-500' : 'text-black'} text-base md:text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-stone-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-stone-700`}
          >
            Nom *
          </label>
          <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="flex flex-col relative group">
          <input
            type="email"
            placeholder=" "
            onChange={handleChange}
            value={formData.email}
            name="email"
            id="email"
            className={`px-0 py-1 border-b-2 ${errors.email ? 'border-red-500' : 'border-stone-200'} outline-none bg-transparent peer focus:border-b-black focus:border-b-[3px] text-base z-10`}
            required
            aria-required="true"
          />
          <label
            htmlFor="email"
            className={`absolute left-0 transition-all duration-300 ${errors.email ? 'text-red-500' : 'text-black'} text-base md:text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-stone-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-stone-700`}
          >
            Email *
          </label>
          <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="flex flex-col relative group">
          <input
            type="tel"
            placeholder=" "
            onChange={handleChange}
            value={formData.phone}
            name="phone"
            id="phone"
            className="px-0 py-1 border-b-2 border-stone-200 outline-none bg-transparent peer focus:border-b-black focus:border-b-[3px] text-base z-10"
          />
          <label
            htmlFor="phone"
            className="absolute left-0 transition-all duration-300 text-black text-base md:text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-stone-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-stone-700"
          >
            Tél
          </label>
          <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
        </div>

        {/* DEUXIEME PARTIE */}

        <div className="w-full inline-block mt-20 ">
          <h2 className="font-marcellus text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Maintenant, un peu de
          </h2>
          <div className="flex items-center">
            <div className="left-0 w-[10%] h-[1px] bg-stone-700" />
          <h2 className="font-pinyon-script text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            &nbsp;votre projet
          </h2>
          </div>
        </div>

        <div className="flex flex-col relative group">
          <input
            type="text"
            placeholder=" "
            onChange={handleChange}
            value={formData.compagny}
            name="compagny"
            id="compagny"
            className="px-0 py-1 border-b-2 border-stone-200 outline-none bg-transparent peer focus:border-b-black focus:border-b-[3px] text-base z-10"
          />
          <label
            htmlFor="compagny"
            className="absolute left-0 transition-all duration-300 text-black text-base md:text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-stone-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-stone-700"
          >
            Nom de votre entreprise
          </label>
          <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
        </div>

        <div className="flex flex-col relative group">
          <input
            type="url"
            placeholder=" "
            onChange={handleChange}
            value={formData.website}
            name="website"
            id="urlInput"
            aria-label="URL"
            className="px-0 py-1 border-b-2 border-stone-200 outline-none bg-transparent peer focus:border-b-black focus:border-b-[3px] text-base z-10"
          />
          <label
            htmlFor="urlInput"
            className="absolute left-0 transition-all duration-300 text-black text-base md:text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-stone-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-stone-700"
          >
            Site web actuel
          </label>
          <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-full flex items-center justify-start text-start">
            <div className="left-0 w-[5%] h-[2px] bg-stone-700 mr-2" />
            <h3
              className="font-inter font-medium text-base md:text-base xl:text-lg text-stone-700 uppercase relative inline-block
                          before:content-[''] before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 
                          before:bg-stone-700 before:origin-right before:scale-x-0 hover:before:origin-left hover:before:scale-x-100
                          before:transition-transform before:duration-500 before:ease-in-out"
            >
              Je suis intéressé par :
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              "Image de marque",
              "Web Design",
              "Site vitrine",
              "Juste discuter",
              "Autre",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="project"
                  value={option}
                  onChange={handleChange}
                  className="form-checkbox h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-black"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative w-full flex items-center justify-start text-start">
            <div className="left-0 w-[5%] h-[2px] bg-stone-700 mr-2" />
            <h3
              className="font-inter font-medium text-base md:text-base xl:text-lg text-stone-700 uppercase relative inline-block
                          before:content-[''] before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 
                          before:bg-stone-700 before:origin-right before:scale-x-0 hover:before:origin-left hover:before:scale-x-100
                          before:transition-transform before:duration-500 before:ease-in-out"
            >
              Mon budget est :
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              "< 999€",
              "999€-1200€",
              "1200€-1499€",
              "1499€-2000€",
              "2000€-2499€",
              "> 2500€",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="budget"
                  value={option}
                  onChange={handleChange}
                  className="form-radio h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-black"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col relative group">
          <input
            type="text"
            placeholder=" "
            onChange={handleChange}
            value={formData.budget}
            name="budget"
            id="budget"
            className="px-0 py-1 border-b-2 border-stone-200 outline-none bg-transparent peer focus:border-b-black focus:border-b-[3px] text-base z-10"
          />
          <label
            htmlFor="budget"
            className="absolute left-0 transition-all duration-300 text-black text-base md:text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-stone-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-stone-700"
          >
            Avez-vous un budget exact ?
          </label>
          <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
        </div>

        <div className="flex flex-col relative group">
          <input
            type="text"
            placeholder=" "
            onChange={handleChange}
            value={formData.timeline}
            name="timeline"
            id="timeline"
            className="px-0 py-1 border-b-2 border-stone-200 outline-none bg-transparent peer focus:border-b-black focus:border-b-[3px] text-base z-10"
          />
          <label
            htmlFor="timeline"
            className="absolute left-0 transition-all duration-300 text-black text-base md:text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-stone-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-stone-700"
          >
            Quel est votre délai ?
          </label>
          <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
        </div>

        <div className="flex flex-col relative group">
          <textarea
            placeholder=" "
            onChange={handleChange}
            value={formData.message}
            name="message"
            id="message"
            rows={4}
            className="px-0 py-1 border-b-2 border-stone-200 outline-none bg-transparent peer focus:border-b-black focus:border-b-[3px] text-base z-10 resize-none"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 transition-all duration-300 text-black text-base md:text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-stone-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-stone-700"
          >
            Message
          </label>
          <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            className="bg-black text-white py-2 px-2 md:py-3 md:px-4 lg:py-3 lg:px-6 rounded-full text-lg font-semibold hover:bg-white hover:text-black ring-1 ring-black transition-colors duration-300 relative overflow-hidden group"
          >
            <span className="flex items-center gap-2">
              <span className="relative overflow-hidden inline-flex items-center perspective-1000">
                <span className="relative inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full group-hover:skew-y-3 py-2 px-1 font-marcellus text-sm md:text-lg lg:text-xl font-extralight uppercase">
                  Envoyer la demande
                </span>
                <span className="absolute top-full inset-0 inline-block whitespace-nowrap">
                  <span className="relative inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full text-black py-1 md:pt-2 font-pinyon-script text-2xl md:text-2xl lg:text-4xl font-medium">
                    <div className="flex items-center gap-2">
                      Envoyer
                      <FaMailBulk className="" />
                    </div>
                  </span>
                </span>
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-white text-black py-2 px-2 md:py-3 md:px-4 lg:py-3 lg:px-6 rounded-full text-lg font-semibold hover:bg-black hover:text-white ring-1 ring-black transition-colors duration-300 relative overflow-hidden group"
          >
            <span className="flex items-center gap-2">
              <span className="relative overflow-hidden inline-flex items-center perspective-1000">
              <span className="relative inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full group-hover:skew-y-3 py-2 px-1 font-marcellus text-sm md:text-lg lg:text-xl font-extralight uppercase">
                  Réinitialiser
                </span>
                <span className="absolute top-full inset-0 inline-block whitespace-nowrap">
                  <span className="relative inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full text-white py-2 md:py-1 font-pinyon-script text-2xl md:text-2xl lg:text-4xl font-medium leading-[0.9]">
                    Effacer
                  </span>
                </span>
              </span>
            </span>
          </button>
        </div>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={modalMessage}
        isSuccess={isSuccess}
      />
    </div>
  );
}
