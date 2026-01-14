import { Facebook, Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/10 pt-16 pb-8 text-white font-sans">
      
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* 1. MARCA & DESCRIPCIÓN */}
          <div className="max-w-sm">
            <h2 className="font-heading text-3xl font-black uppercase tracking-tighter mb-4 text-white">
              COYOTE<span className="text-yellow-500">TEXTIL</span>
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Surtimos tu taller con las mejores telas deportivas y escolares. 
              Venta por rollo cerrado y mayoreo con envíos a todo México.
            </p>
            
            {/* Botón WhatsApp (Número corregido) */}
            <a 
              href="https://wa.me/525573799161"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-widest text-white hover:text-yellow-500 transition-colors group"
            >
              <MessageCircle size={18} className="text-yellow-500 group-hover:text-white transition-colors" />
              Pedir Cotización
            </a>
          </div>

          {/* 2. UBICACIÓN Y TELÉFONOS */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-widest text-xs text-neutral-600 mb-1">Visítanos</h3>
            
            <div className="flex items-start gap-3 text-neutral-400 text-sm">
               <MapPin size={18} className="text-yellow-500 shrink-0 mt-0.5" />
               <span>
                 República de Guatemala 97-A <br/>
                 Centro Histórico, CDMX
               </span>
            </div>
            
            {/* Sección de Teléfonos (Los dos números solicitados) */}
            <div className="flex flex-col gap-2 mt-2">
               <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Phone size={18} className="text-yellow-500 shrink-0" />
                  <span>55 5522 4339</span>
               </div>
               <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Phone size={18} className="text-yellow-500 shrink-0" />
                  <span>55 5542 1527</span>
               </div>
            </div>
          </div>

          {/* 3. REDES SOCIALES */}
          <div className="flex flex-col gap-4">
             <h3 className="font-bold uppercase tracking-widest text-xs text-neutral-600 mb-1">Síguenos</h3>
             <div className="flex gap-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#111] border border-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-sm"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#111] border border-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-sm"
                >
                  <Instagram size={18} />
                </a>
             </div>
          </div>

        </div>

        {/* BARRA LEGAL */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-medium">
          <p>© {new Date().getFullYear()} Coyote Textil. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}