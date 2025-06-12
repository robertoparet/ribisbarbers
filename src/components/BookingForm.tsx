'use client';

import { useState } from 'react';
import { SERVICES, WEBHOOK_URL } from '@/config/constants';

interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  comment: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Client-side validation
    if (!formData.fullName.trim()) {
      setSubmitMessage('Por favor, ingresa tu nombre completo.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim()) {
      setSubmitMessage('Por favor, ingresa tu número de teléfono.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.service) {
      setSubmitMessage('Por favor, selecciona un servicio.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.date) {
      setSubmitMessage('Por favor, selecciona una fecha.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.time) {
      setSubmitMessage('Por favor, selecciona una hora.');
      setIsSubmitting(false);
      return;
    }

    // Check if date is not in the past
    const selectedDate = new Date(`${formData.date}T${formData.time}`);
    const now = new Date();
    if (selectedDate < now) {
      setSubmitMessage('Por favor, selecciona una fecha y hora futura.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website'
        })
      });

      if (response.ok) {
        setSubmitMessage('¡Reserva enviada con éxito! Te contactaremos pronto.');
        setFormData({
          fullName: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          comment: ''
        });
      } else {
        throw new Error('Error al enviar la reserva');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Error al enviar la reserva. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="reserva" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Reserva tu cita</h2>
          <p className="text-gray-300">Agenda tu próxima sesión de estilo</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                WhatsApp / Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="+34 600 000 000"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                Servicio *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
              >
                <option value="">Selecciona un servicio</option>
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title} - €{service.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                Fecha *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
                Hora *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-2">
              Comentario (opcional)
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
              placeholder="Alguna petición especial o comentario..."
            />
          </div>

          {submitMessage && (
            <div className={`mt-4 p-4 rounded-lg ${submitMessage.includes('éxito') ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-4 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting && <div className="spinner"></div>}
            {isSubmitting ? 'Enviando...' : 'Reservar cita'}
          </button>
        </form>
      </div>
    </section>
  );
}
