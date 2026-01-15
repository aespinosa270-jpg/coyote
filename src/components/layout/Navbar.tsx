"use client"; // Aseguramos que sea cliente para usar window.scrollTo

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  
  // Función para ir al inicio suavemente
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita la navegación estándar si ya estás ahí
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      
      {/* 1. FONDO CRISTAL (Glassmorphism Premium) */}
      <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-xl border-b border-white/10 z-0"></div>
      
      <div className="container relative z-20 mx-auto flex h-24 md:h-32 items-center justify-between px-6 lg:px-12">
        
        {/* LOGO GIGANTE (Con Scroll Top) */}
        <div className="flex items-center shrink-0">
           <Link 
             href="/" 
             onClick={scrollToTop} 
             className="hover:opacity-80 transition-opacity duration-300 drop-shadow-[0_0_25px_rgba(234,179,8,0.2)]"
           >
             <Image
               src="/assets/logo2.png"
               alt="Coyote Textil"
               width={280} 
               height={100}
               className="h-16 w-auto md:h-24 object-contain" 
               priority
             />
           </Link>
        </div>

        {/* MENÚ DE NAVEGACIÓN */}
        <div className="hidden md:flex items-center gap-10">
          
          {/* Link 1: NOSOTROS */}
          <a href="#nosotros" className="group relative px-2 py-1">
            <span className="font-heading font-bold text-sm md:text-base uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
              Nosotros
            </span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#EAB308]"></span>
          </a>

          {/* Link 2: UBICACIÓN */}
          <a href="#ubicacion" className="group relative px-2 py-1">
            <span className="font-heading font-bold text-sm md:text-base uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
              Ubicación
            </span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#EAB308]"></span>
          </a>
          
          {/* BOTÓN COTIZAR */}
          <div className="ml-8">
            <a 
              href="https://wa.me/525573799162?text=Hola,%20quisiera%20cotizar%20telas."
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center rounded-sm bg-yellow-500 px-10 py-4 font-bold text-sm uppercase tracking-widest text-black shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] -skew-x-12 group"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 skew-x-12"></div>
              
              <span className="relative z-20 flex items-center gap-2 skew-x-12">
                <MessageCircle size={20} strokeWidth={2.5} />
                Cotizar
              </span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}