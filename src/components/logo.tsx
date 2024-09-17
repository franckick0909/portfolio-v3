import Link from "next/link";

export default function Logo ({className}: {className: string}) {
    return (
        <Link
            href="/"
            className={`text-2xl text-white hover:text-gray-300 transition-colors flex flex-col items-start font-serif font-semibold group z-[300] ${className}`}
          >
            <div className="flex items-center">
              <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-6 mr-2"></span>
              <span className="transform transition-all duration-300 group-hover:translate-x-2">Franck</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-[1px] bg-white transition-all duration-300 group-hover:w-0 mr-2"></span>
              <span className="font-light transform transition-all duration-300 group-hover:-translate-x-2">Chapelon</span>
            </div>
          </Link>
    )
}