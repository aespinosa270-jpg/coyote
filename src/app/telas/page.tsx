import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/landing/ChatWidget";
import { Tag, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

// DATOS DE EJEMPLO (Simulando tu inventario real)
const categorias = [
  { id: 'escolar', name: 'Línea Escolar' },
  { id: 'deportivo', name: 'Línea Deportiva' },
  { id: 'moda', name: 'Moda y Casual' },
];

const telas = [
  {
    id: 1,
    categoria: "Deportivo",
    nombre: "Dry-Fit Premium",
    descripcion: "La tela número uno para deportes. Fresca, ligera y con excelente caída.",
    caracteristicas: ["Ancho: 1.80 m", "100% Poliéster", "Secado Rápido"],
    idealPara: "Playeras de fútbol, Jerseys, Ropa de gimnasio",
    color: "bg-blue-500", // Solo para simular la foto
  },
  {
    id: 2,
    categoria: "Escolar",
    nombre: "Felpa Sport",
    descripcion: "Resistente y suave por dentro. El estándar para el pants escolar mexicano.",
    caracteristicas: ["Ancho: 1.60 m", "50% Algodón / 50% Poli", "No hace bolitas"],
    idealPara: "Pants escolares, Sudaderas, Chamarras universitarias",
    color: "bg-red-500",
  },
  {
    id: 3,
    categoria: "Licras",
    nombre: "Licra Colombiana",
    descripcion: "Elasticidad superior y tacto suave. No se transparenta al estirar.",
    caracteristicas: ["Ancho: 1.50 m", "Poliester / Elastano", "Bi-stretch"],
    idealPara: "Leggings, Tops, Ciclismo, Trajes de baño",
    color: "bg-purple-500",
  },
  {
    id: 4,
    categoria: "Escolar",
    nombre: "Piqué Polo",
    descripcion: "El clásico para la playera tipo Polo. Fresco y duradero para el uso diario.",
    caracteristicas: ["Ancho: 2.00 m (Tubular)", "Algodón / Poliéster", "Fácil planchado"],
    idealPara: "Uniformes escolares, Playeras empresariales",
    color: "bg-yellow-500",
  },
  {
    id: 5,
    categoria: "Moda",
    nombre: "Bramante",
    descripcion: "Tela versátil y económica para múltiples usos.",
    caracteristicas: ["Ancho: 1.50 m", "100% Poliéster", "Gran variedad de colores"],
    idealPara: "Caminos de mesa, Decoración, Disfraces",
    color: "bg-green-500",
  },
  {
    id: 6,
    categoria: "Deportivo",
    nombre: "Microfibra",
    descripcion: "Tela plana ligera y resistente al agua.",
    caracteristicas: ["Ancho: 1.50 m", "100% Poliéster", "Repelente"],
    idealPara: "Shorts de fútbol, Rompevientos",
    color: "bg-neutral-500",
  },
];

export default function TelasPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* 1. PORTADA AMIGABLE */}
      <section className="relative pt-32 pb-16 bg-neutral-900 border-b border-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Catálogo de <span className="text-yellow-500">Telas</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Encuentra la tela perfecta para tu próximo proyecto. Venta por rollo cerrado y mayoreo con envíos a todo México.
          </p>
          
          {/* Filtros Rápidos (Visuales) */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categorias.map((cat) => (
              <button 
                key={cat.id}
                className="px-6 py-2 rounded-full border border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-yellow-500 hover:text-yellow-500 transition-colors text-sm font-medium"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. GRID DE PRODUCTOS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {telas.map((tela) => (
              <div key={tela.id} className="group bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden hover:border-yellow-500/50 hover:shadow-xl transition-all duration-300 flex flex-col">
                
                {/* Imagen Simulada (Aquí iría la foto real) */}
                <div className={`h-48 w-full ${tela.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tela.categoria}
                  </span>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">{tela.nombre}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {tela.descripcion}
                    </p>
                  </div>

                  {/* Características Rápidas */}
                  <div className="space-y-2 mb-6 bg-neutral-950/50 p-4 rounded-xl border border-neutral-800">
                    {tela.caracteristicas.map((car, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 size={12} className="text-yellow-500" />
                        {car}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <p className="text-xs text-neutral-500 font-bold uppercase mb-3 flex items-center gap-2">
                      <Tag size={12} />
                      Ideal para: <span className="text-neutral-300 font-normal normal-case">{tela.idealPara}</span>
                    </p>
                    
                    <a 
                      href={`https://wa.me/525573799161?text=Hola,%20me%20interesa%20cotizar%20la%20tela:%20${tela.nombre}`}
                      target="_blank"
                      className="flex items-center justify-center gap-2 w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                      Cotizar Precio
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. SECCIÓN: ¿NO ENCUENTRAS LO QUE BUSCAS? */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">¿Buscas una tela específica?</h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Manejamos más de 50 tipos de textiles. Si no ves lo que necesitas aquí, escríbenos y te enviamos fotos y precios de lo que buscas.
          </p>
          <a 
            href="https://wa.me/525573799161"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
          >
            Preguntar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  );
}