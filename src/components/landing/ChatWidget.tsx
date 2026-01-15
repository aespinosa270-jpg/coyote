'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Send, MapPin, Package, User, ChevronRight, CheckCheck, RefreshCcw, Sparkles } from 'lucide-react';

// --- CONFIGURACIÓN ---
const WHATSAPP_NUMBER = '525573799162'; // <--- NÚMERO ACTUALIZADO
const BOT_NAME = 'Coyote Ventas';

// --- ICONO DE COYOTE PERSONALIZADO (SVG) ---
const CoyoteIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12,2L2,22H22L12,2M12,6L17.5,17H6.5L12,6M12,10.5C11.17,10.5 10.5,11.17 10.5,12C10.5,12.83 11.17,13.5 12,13.5C12.83,13.5 13.5,12.83 13.5,12C13.5,11.17 12.83,10.5 12,10.5Z" />
  </svg>
);

// --- TIPOS ---
type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: Option[];
};

type Option = {
  label: string;
  nextStep: string;
  icon?: React.ReactNode;
  value?: string; 
};

// --- CEREBRO DEL VENDEDOR (LÓGICA) ---
const CHAT_FLOW: Record<string, { text: string; options?: Option[]; action?: 'link' }> = {
  // El saludo inicial se genera dinámicamente en el código (por hora)
  menu_principal: {
    text: "¿En qué te podemos echar la mano hoy?",
    options: [
      { label: '📦 Cotizar Telas', nextStep: 'telas', icon: <Package size={14}/> },
      { label: '📍 Ver Dónde Están', nextStep: 'ubicacion', icon: <MapPin size={14}/> },
      { label: '👤 Hablar con Alguien', nextStep: 'humano', icon: <User size={14}/> },
    ],
  },
  telas: {
    text: "¡Va! Vámonos a lo bueno. ¿Qué tipo de tela andas buscando para tu taller?",
    options: [
      { label: 'Deportiva (Licra/DryFit)', nextStep: 'cantidad', value: 'Interés: Deportivas', icon: <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_yellow]"/> },
      { label: 'Escolar (Felpa/Piqué)', nextStep: 'cantidad', value: 'Interés: Escolares', icon: <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_blue]"/> },
      { label: 'Insumos / Otros', nextStep: 'cantidad', value: 'Interés: Insumos', icon: <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"/> },
    ],
  },
  cantidad: {
    text: "¿Más o menos cuánto ocupas? Así te digo si entra en precio de mayoreo.",
    options: [
      { label: '🔥 Mayoreo (+10 Rollos)', nextStep: 'cierre_venta', value: 'Volumen: Mayoreo (+10)' },
      { label: '📦 Medio Mayoreo (1-9)', nextStep: 'cierre_venta', value: 'Volumen: Medio Mayoreo' },
      { label: '✂️ Solo Muestras', nextStep: 'cierre_venta', value: 'Volumen: Muestras' },
    ],
  },
  cierre_venta: {
    text: "¡Listo! Ya armé tu ficha. Dale clic al botón verde de abajo para mandarnos el mensaje por WhatsApp y cerrarlo allá. 👇",
    action: 'link', 
  },
  ubicacion: {
    text: "Estamos en el mero corazón textil. \n\n📍 República de Guatemala 97-A, Centro Histórico CDMX.\nHorario: 10am a 6pm.",
    options: [
      { label: '🗺️ Abrir Mapa', nextStep: 'accion_mapa' },
      { label: '↩️ Regresar', nextStep: 'menu_principal' },
    ],
  },
  humano: {
    text: "¿Prefieres saltarte el bot y hablar directo?",
    options: [
      { label: '✅ Sí, pásame con ventas', nextStep: 'accion_humano', value: 'Solicitud: Asesor Humano' },
      { label: '❌ No, déjame ver el menú', nextStep: 'menu_principal' },
    ],
  },
  accion_mapa: { text: "Abriendo Google Maps...", action: 'link' },
  accion_humano: { text: "Te conecto en un segundo...", action: 'link' }
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userSelection, setUserSelection] = useState<string[]>([]); 
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- SALUDO INTELIGENTE ---
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "¡Buenos días!";
    if (hour < 19) return "¡Buenas tardes!";
    return "¡Buenas noches!";
  };

  // --- INICIALIZACIÓN ---
  useEffect(() => {
    if (messages.length === 0) {
      // Mensaje de bienvenida con delay
      setTimeout(() => {
        const greeting = getGreeting();
        const initialMsg: Message = {
          id: 'init',
          sender: 'bot',
          text: `${greeting} Bienvenido a Coyote Textil. 🐺`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages([initialMsg]);
        
        // Seguir al menú principal automáticamente
        setTimeout(() => addBotMessage('menu_principal', 1000), 800);
      }, 1500);
    }
  }, []);

  // --- AUTO SCROLL INTELIGENTE ---
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  // --- MOTOR DE MENSAJES ---
  const addBotMessage = (stepKey: string, delay = 800) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const stepData = CHAT_FLOW[stepKey];
      
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: 'bot',
        text: stepData.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: stepData.options,
      };

      setMessages(prev => [...prev, newMessage]);

      // MANEJO DE LINKS FINALES
      if (stepData.action === 'link') {
        if (stepKey === 'accion_mapa') {
          window.open('https://maps.google.com/?q=Republica+de+Guatemala+97-A+Centro+Historico+CDMX', '_blank');
        } else {
           // Generador de Mensaje para WhatsApp
           const details = userSelection.join(' // '); 
           const waText = stepKey === 'accion_humano' 
             ? "Qué tal, quiero que me atienda un vendedor directamente." 
             : `Qué tal, vengo de la web. ${details}. ¿Me cotizan?`;
           
           setTimeout(() => {
             const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
             window.open(url, '_blank');
           }, 1500);
        }
      }
    }, delay); // Delay variable para sentirlo natural
  };

  const handleOptionClick = (option: Option) => {
    // 1. Registrar lo que dijo el usuario
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: option.label,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, userMsg]);

    // 2. Guardar el dato para el pedido
    if (option.value) {
      setUserSelection(prev => [...prev, option.value!]);
    }

    // 3. Continuar flujo
    addBotMessage(option.nextStep, 700);
  };

  const handleReset = () => {
    setMessages([]);
    setUserSelection([]);
    // Reiniciar proceso
    const greeting = getGreeting();
    setMessages([{
      id: 'restart',
      sender: 'bot',
      text: `${greeting} ¿En qué te ayudamos ahora?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }]);
    addBotMessage('menu_principal', 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans select-none">
      
      {/* --- BOCADILLO DE LLAMADA (CALLOUT) --- */}
      {!isOpen && (
        <div 
          onClick={() => setIsOpen(true)}
          className="relative mr-2 cursor-pointer group hidden md:block animate-in slide-in-from-right-10 fade-in duration-1000"
        >
          <div className="bg-white text-black px-5 py-3 rounded-2xl rounded-br-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/20 transform transition-transform group-hover:-translate-y-1">
            <div className="flex flex-col">
              <span className="font-bold text-sm flex items-center gap-2">
                ¿Buscas surtir tu taller?
                <Sparkles size={12} className="text-yellow-500 fill-yellow-500 animate-pulse" />
              </span>
              <span className="text-xs text-neutral-600 font-medium">Cotiza directo aquí.</span>
            </div>
          </div>
          {/* Triangulito del bocadillo */}
          <div className="absolute -bottom-1 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-[-50%]"></div>
        </div>
      )}

      {/* --- VENTANA PRINCIPAL (ESTILO INDUSTRIAL) --- */}
      {isOpen && (
        <div className="w-[340px] md:w-[380px] h-[580px] flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#050505] shadow-[0_0_60px_-15px_rgba(0,0,0,0.8)] animate-in zoom-in-95 slide-in-from-bottom-10 duration-300 origin-bottom-right">
          
          {/* HEADER: GLOSSY & TECH */}
          <div className="relative z-20 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-xl p-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Avatar Coyote */}
                <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-400 flex items-center justify-center border-2 border-[#0a0a0a] shadow-lg">
                   <CoyoteIcon className="h-6 w-6 text-black" />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0a0a0a] bg-green-500 animate-pulse"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-white flex items-center gap-1 uppercase tracking-wide">
                  {BOT_NAME} 
                  <CheckCheck size={14} className="text-blue-500" />
                </span>
                <span className="text-[10px] text-neutral-400 font-medium tracking-wider">Atención Inmediata</span>
              </div>
            </div>
            
            {/* Controles Header */}
            <div className="flex items-center gap-1">
               <button onClick={handleReset} className="p-2 rounded-full text-neutral-500 hover:bg-white/10 hover:text-white transition-all" title="Reiniciar chat">
                  <RefreshCcw size={16} />
               </button>
               <button onClick={() => setIsOpen(false)} className="p-2 rounded-full text-neutral-500 hover:bg-red-500/20 hover:text-red-500 transition-all">
                  <X size={20} />
               </button>
            </div>
          </div>

          {/* CUERPO DEL CHAT */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-[#050505] relative custom-scrollbar">
            
            {/* Textura de ruido de fondo (Noise Texture) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Marca de tiempo inicial */}
            <div className="flex justify-center pt-2">
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    Hoy
                </span>
            </div>

            {messages.map((msg, idx) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                
                <div className={`flex items-end gap-2 max-w-[90%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                   {/* Avatar pequeño en mensajes del bot */}
                   {msg.sender === 'bot' && (
                     <div className="h-6 w-6 rounded-full bg-neutral-800 flex-shrink-0 flex items-center justify-center border border-white/5 shadow-sm">
                        <CoyoteIcon className="h-3 w-3 text-yellow-500" />
                     </div>
                   )}

                   {/* BURBUJA DE MENSAJE */}
                   <div className={`p-4 text-sm shadow-md relative backdrop-blur-sm ${
                     msg.sender === 'user' 
                       ? 'bg-yellow-500 text-black rounded-2xl rounded-tr-none font-medium' 
                       : 'bg-[#151515]/90 border border-white/10 text-neutral-200 rounded-2xl rounded-tl-none'
                   }`}>
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                      
                      {/* Hora del mensaje */}
                      <span className={`text-[9px] block mt-1.5 font-bold opacity-60 text-right ${msg.sender === 'user' ? 'text-black' : 'text-neutral-500'}`}>
                        {msg.timestamp}
                      </span>
                   </div>
                </div>

                {/* OPCIONES INTERACTIVAS */}
                {msg.options && (
                  <div className="mt-3 ml-9 flex flex-col gap-2 w-[80%] animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        disabled={messages.indexOf(msg) !== messages.length - 1} // Desactivar opciones viejas
                        className={`group flex items-center justify-between w-full p-3.5 rounded-xl border text-left transition-all duration-300 ${
                           messages.indexOf(msg) !== messages.length - 1 
                             ? 'opacity-40 cursor-not-allowed border-transparent bg-transparent pl-0 py-0 h-0 overflow-hidden' 
                             : 'bg-[#111] border-white/10 hover:border-yellow-500 hover:bg-[#1a1a1a] hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:-translate-y-0.5'
                        }`}
                      >
                         <div className="flex items-center gap-3">
                           {opt.icon && <span className="text-yellow-500">{opt.icon}</span>}
                           <span className="text-sm text-neutral-300 group-hover:text-white font-medium">{opt.label}</span>
                         </div>
                         <ChevronRight size={14} className="text-neutral-600 group-hover:text-yellow-500 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* INDICADOR DE "ESCRIBIENDO..." */}
            {isTyping && (
              <div className="flex items-center gap-2 ml-9 animate-in fade-in duration-300">
                <div className="bg-[#151515] border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 h-10 w-fit">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce"></span>
                </div>
                <span className="text-[10px] text-neutral-600 animate-pulse">Escribiendo...</span>
              </div>
            )}
            
            <div ref={scrollRef} />
          </div>

          {/* FOOTER (INPUT FALSO) */}
          <div className="bg-[#0a0a0a] p-3 border-t border-white/5 relative z-20">
             <div 
               onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20tengo%20una%20duda%20general.`, '_blank')}
               className="flex items-center gap-3 bg-[#111] border border-white/10 rounded-full px-5 py-3 cursor-pointer hover:border-yellow-500/50 hover:bg-[#151515] transition-all group"
             >
                <span className="text-sm text-neutral-500 flex-1 group-hover:text-neutral-300 transition-colors">Escribe un mensaje...</span>
                <div className="bg-neutral-800 p-1.5 rounded-full text-neutral-400 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300 transform group-hover:rotate-45">
                   <Send size={14} className="ml-0.5" />
                </div>
             </div>
             <div className="text-center mt-2 flex justify-center items-center gap-2 opacity-40">
                <span className="h-px w-8 bg-neutral-700"></span>
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest">Powered by Coyote</p>
                <span className="h-px w-8 bg-neutral-700"></span>
             </div>
          </div>
        </div>
      )}

      {/* --- BOTÓN FLOTANTE (TRIGGER) --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-full bg-yellow-500 text-black shadow-[0_10px_40px_-10px_rgba(234,179,8,0.5)] transition-all hover:scale-110 active:scale-95 z-50 border-4 border-[#050505]"
        >
          {/* Ondas expansivas */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-20 duration-1000"></span>
          
          {/* Icono Lobo */}
          <CoyoteIcon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]" />
          
          {/* Badge de Notificación */}
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-black"></span>
          </span>
        </button>
      )}
    </div>
  );
}