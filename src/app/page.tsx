import { HeroSection } from "@/components/landing/HeroSection";
import { Navbar } from "@/components/layout/Navbar"; 
import { Footer } from "@/components/layout/Footer"; 
import { ArrowRight, MapPin, Truck, Star, Package, Scissors, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500 selection:text-black font-sans overflow-x-hidden">
      
      <Navbar />
      <HeroSection />

      {/* --- SECCIÓN: INFRAESTRUCTURA TEXTIL --- */}
      <section id="nosotros" className="py-24 md:py-32 relative bg-[#050505]">
        
        {/* Fondo: Patrón de corte (sutil) */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          
          {/* ENCABEZADO */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-neutral-800 pb-8">
            <div className="max-w-2xl">
              <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase mb-3 block">
                Socios de Confección
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                Infraestructura para <br/>
                <span className="text-neutral-500 italic font-serif">tu producción.</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Cotizaciones Abiertas</span>
            </div>
          </div>

          {/* GRID BENTO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* 1. TARJETA: LOGÍSTICA (CON ANIMACIÓN ACTIVA) */}
            <div className="md:col-span-2 relative group rounded-xl bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.1)]">
              
              {/* FONDO: Mapa sutil que aparece al hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none mix-blend-screen" 
                   style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415-.828-.828-.828.828-1.415-1.415.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828zM22.485 0l.83.828-1.415 1.415-.828-.828-.828.828-1.415-1.415.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828zM0 22.485l.828.83-1.415 1.415-.828-.828-.828.828L-3.66 22.485l.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828zM0 54.627l.828.83-1.415 1.415-.828-.828-.828.828L-3.66 54.627l.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828zM54.627 60l.83-.828-1.415-1.415-.828.828-.828-.828-1.415 1.415.828.828-.828.828 1.415 1.415.828-.828.828.828 1.415-1.415-.828-.828zM22.485 60l.83-.828-1.415-1.415-.828.828-.828-.828-1.415 1.415.828.828-.828.828 1.415 1.415.828-.828.828.828 1.415-1.415-.828-.828z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
              </div>

              {/* HEADER DE LA TARJETA */}
              <div className="relative z-10 flex justify-between items-start">
                  {/* Icono Camión: Se invierte el color al hover */}
                  <div className="w-14 h-14 bg-[#111] border border-white/5 flex items-center justify-center text-yellow-500 rounded-lg group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300 shadow-xl group-hover:scale-110">
                    <Truck size={28} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
                  </div>

                  {/* INDICADOR RADAR: Aparece deslizándose */}
                  <div className="hidden md:flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white">Ruta Nacional</span>
                  </div>
              </div>

              {/* CONTENIDO TEXTO */}
              <div className="relative z-10">
                 <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">Logística Nacional</h3>
                 <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg group-hover:text-neutral-300 transition-colors">
                   Entendemos los tiempos de la moda. Coordinamos envíos seguros a todo México para que tu tela llegue impecable a la mesa de corte.
                 </p>
              </div>

              {/* BARRA DE PROGRESO INFERIOR */}
              <div className="absolute bottom-0 left-0 h-1 bg-yellow-500 w-0 group-hover:w-full transition-all duration-700 ease-in-out shadow-[0_0_15px_#EAB308]"></div>
            </div>

            {/* 2. TARJETA: DISPONIBILIDAD */}
            <div className="relative group rounded-xl bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-300">
               <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-[#111] border border-white/5 flex items-center justify-center text-white rounded-lg group-hover:border-white/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                        <path d="M3 7v13a2 2 0 0 0 2 2h16" />
                        <circle cx="5" cy="7" r="2" />
                      </svg>
                  </div>
               </div>
               <div>
                  <span className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest mb-1 block">Stock Físico</span>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Disponibilidad</h3>
                  <p className="text-neutral-500 text-sm">Rollos cerrados y venta por mayoreo listos para envío.</p>
               </div>
            </div>

            {/* 3. TARJETA: CALIDAD */}
            <div className="relative group rounded-xl bg-neutral-100 border border-white/5 overflow-hidden flex flex-col justify-center p-8 hover:bg-white transition-colors">
              <div className="text-black">
                <div className="flex items-center gap-2 mb-4">
                  <Star size={20} className="text-yellow-500 fill-yellow-500" />
                  <Star size={20} className="text-yellow-500 fill-yellow-500" />
                  <Star size={20} className="text-yellow-500 fill-yellow-500" />
                </div>
                <h3 className="font-heading text-3xl font-black uppercase leading-none mb-2">
                  Calidad <br/>Garantizada
                </h3>
                <p className="text-neutral-700 font-medium text-sm">
                  Gramaje, ancho y solidez de color revisados metro a metro.
                </p>
              </div>
            </div>

            {/* 4. TARJETA: CTA WHATSAPP (NÚMERO ACTUALIZADO) */}
            <a 
              href="https://wa.me/525573799161?text=Hola,%20quisiera%20cotizar%20un%20pedido%20de%20telas." 
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-2 relative group rounded-xl bg-yellow-500 overflow-hidden flex items-center justify-between p-8 md:p-12 hover:bg-yellow-400 transition-colors shadow-[0_0_40px_rgba(234,179,8,0.2)] hover:shadow-[0_0_60px_rgba(234,179,8,0.4)]"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 opacity-70">
                    <MessageCircle size={18} className="text-black stroke-[2.5]" />
                    <span className="text-black font-bold uppercase text-xs tracking-widest">Atención Directa</span>
                </div>
                <h3 className="font-heading text-3xl md:text-5xl font-black text-black uppercase leading-none">
                  Iniciar <br/>Cotización
                </h3>
              </div>
              
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight size={32} />
              </div>

              <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
                 <Scissors size={200} strokeWidth={0.5} />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* --- SECCIÓN: SHOWROOM / UBICACIÓN --- */}
      <section id="ubicacion" className="relative h-[600px] bg-neutral-900 border-t border-white/10">
        <div className="absolute inset-0 z-0 grayscale opacity-60">
           <iframe 
              src="https://maps.google.com/maps?q=Coyote%20Textil%20Rep%C3%BAblica%20de%20Guatemala%2097%20Centro%20CDMX&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

        <div className="absolute bottom-0 left-0 w-full md:w-auto md:top-12 md:left-12 md:bottom-auto z-20">
          <div className="bg-[#050505] p-8 md:p-10 rounded-xl border border-white/10 shadow-2xl max-w-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-500/10 p-3 rounded-lg text-yellow-500">
                 <MapPin size={24} />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-white uppercase">Coyote Textil</h2>
                <span className="text-neutral-500 text-sm">Showroom CDMX</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8 text-sm text-neutral-300">
              <div className="pl-4 border-l-2 border-yellow-500">
                  <strong className="text-white block uppercase text-[10px] tracking-widest mb-1">Dirección</strong>
                  República de Guatemala 97-A,<br/>Centro Histórico.
              </div>
              <div className="pl-4 border-l-2 border-neutral-800">
                  <strong className="text-white block uppercase text-[10px] tracking-widest mb-1">Horario</strong>
                  Lun - Sáb: 10:00 - 18:00
              </div>
            </div>

            <a 
              href="https://maps.google.com/maps?q=Coyote%20Textil%20Rep%C3%BAblica%20de%20Guatemala%2097%20Centro%20CDMX" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-white text-black font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-yellow-500 transition-colors text-xs md:text-sm"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}