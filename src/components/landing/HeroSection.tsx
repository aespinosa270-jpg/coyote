"use client";

import Image from "next/image";
import { ArrowRight, Star, MessageCircle } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#050505] border-b border-white/5">

            {/* --- 1. FONDO (LA TELA COMO PROTAGONISTA) --- */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/coyote.png" 
                    alt="Textura Tela Premium"
                    fill
                    className="object-cover object-center opacity-60 grayscale-[0.1]" 
                    priority
                    quality={95}
                />
                {/* Degradado cinematográfico */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10"></div>
            </div>

            {/* --- 2. MARCA DE AGUA (Sello de Marca) --- */}
            <div className="absolute right-[-10%] bottom-[-10%] md:right-0 md:bottom-0 z-10 pointer-events-none opacity-20 mix-blend-overlay">
                <Image
                    src="/assets/logo2.png"
                    alt="Coyote Sello"
                    width={900}
                    height={900}
                    className="object-contain"
                />
            </div>

            {/* --- 3. CONTENIDO UI (Estilo Editorial) --- */}
            <div className="absolute inset-0 z-20 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">

                {/* ETIQUETA SUPERIOR */}
                <div className="mb-6 flex items-center gap-4">
                    <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">
                        Proveedor Oficial
                    </span>
                    <div className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-white/60 text-[10px] ml-2 tracking-wide uppercase">Calidad Premium</span>
                    </div>
                </div>

                {/* TITULAR GIGANTE */}
                <div className="max-w-4xl relative">
                    <h1 className="text-white font-heading font-black text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] uppercase tracking-tight mb-2">
                        Textiles de <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                            Alto Nivel.
                        </span>
                    </h1>
                    
                    {/* Subtítulo elegante */}
                    <p className="text-2xl md:text-4xl text-neutral-400 font-serif italic mt-4 md:pl-2">
                        "El origen de una gran confección."
                    </p>
                </div>

                {/* DESCRIPCIÓN Y CTA (Solo WhatsApp) */}
                <div className="mt-12 max-w-lg border-l-2 border-yellow-500 pl-6">
                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
                        Distribuimos telas por rollo y mayoreo para marcas exigentes. 
                        <strong> Envíos seguros a toda la República Mexicana</strong> garantizados.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Botón Principal Único: WhatsApp */}
                        <a 
                            href="https://wa.me/525512345678?text=Hola,%20me%20interesa%20cotizar%20telas%20con%20envío%20a..." 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white text-black px-8 py-4 flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-yellow-500 transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
                        >
                            <MessageCircle size={20} className="stroke-2" />
                            Cotización Directa
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>

            {/* --- 4. FOOTER DEL HERO (Alcance Nacional) --- */}
            <div className="absolute bottom-8 left-0 w-full px-6 md:px-12 z-30 hidden md:flex justify-between items-end border-t border-white/10 pt-6">
                <div className="flex gap-8 text-xs text-neutral-500 uppercase tracking-widest">
                    <span>Poliester / Algodón</span>
                    <span>Licra / Nylon</span>
                    <span>Dry-Fit Tech</span>
                </div>
                <div className="text-right">
                    <span className="block text-white font-bold text-lg">MÉXICO</span>
                    <span className="text-yellow-500 text-xs uppercase tracking-wider">Cobertura Nacional</span>
                </div>
            </div>

        </section>
    );
};