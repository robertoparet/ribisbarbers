interface Testimonial {
  name: string;
  comment: string;
  rating: number;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos M.",
    comment: "Excelente servicio y atención. El corte quedó perfecto, exactamente como lo pedí. El ambiente es muy profesional y relajante.",
    rating: 5,
    service: "Corte + Barba"
  },
  {
    name: "Miguel R.",
    comment: "La mejor barbería de la ciudad. El afeitado clásico es una experiencia única. Muy recomendado para quien busca calidad.",
    rating: 5,
    service: "Afeitado clásico"
  },
  {
    name: "David L.",
    comment: "Llevo viniendo aquí desde hace meses y siempre salgo satisfecho. Los productos que usan son de primera calidad.",
    rating: 5,
    service: "Corte de pelo"
  },
  {
    name: "Antonio J.",
    comment: "Profesionales de verdad. Me ayudaron a encontrar el estilo perfecto para mi tipo de cara. El trato es excepcional.",
    rating: 5,
    service: "Corte + Barba"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}              <p className="text-gray-300 text-center mb-6 italic">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              {/* Author info */}
              <div className="text-center">
                <h4 className="text-white font-bold mb-1">{testimonial.name}</h4>
                <p className="text-yellow-500 text-sm font-medium">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
