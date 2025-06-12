// Configuration constants for RivisBarber
export const BUSINESS_INFO = {
  name: 'RivisBarber',
  slogan: 'Estilo y precisión para el hombre moderno',
  phone: '+34 600 123 456',
  whatsapp: '34600123456',
  address: 'Calle Principal, 123',
  city: 'Madrid',
  postalCode: '28001',
  country: 'España',
  email: 'info@rivisbarber.com',
  instagram: '@rivisbarber',
  instagramUrl: 'https://instagram.com/rivisbarber',
  schedule: {
    weekdays: 'Lun - Sáb: 9:00 - 20:00',
    weekend: 'Domingo: Cerrado'
  }
};

export const SERVICES = [
  {
    id: 'corte',
    title: 'Corte de pelo',
    description: 'Corte personalizado adaptado a tu estilo y tipo de cabello',
    price: 25,
    duration: 45,
    features: ['Consulta de estilo', 'Lavado incluido', 'Peinado final', 'Productos premium']
  },
  {
    id: 'barba',
    title: 'Barba',
    description: 'Perfilado y cuidado profesional de barba',
    price: 20,
    duration: 30,
    features: ['Recorte preciso', 'Perfilado', 'Hidratación', 'Aceites naturales']
  },
  {
    id: 'corte-barba',
    title: 'Corte + Barba',
    description: 'Servicio completo para un look impecable',
    price: 40,
    duration: 75,
    features: ['Corte personalizado', 'Arreglo de barba', 'Tratamiento completo', 'Ahorro de 5€']
  },
  {
    id: 'afeitado',
    title: 'Afeitado clásico',
    description: 'Experiencia tradicional con toalla caliente',
    price: 15,
    duration: 25,
    features: ['Toalla caliente', 'Navaja tradicional', 'Bálsamo aftershave', 'Experiencia relajante']
  }
];

export const COLORS = {
  primary: '#000000',
  secondary: '#FFFFFF',
  accent: '#D4AF37',
  gray: {
    light: '#F5F5F5',
    medium: '#A0A0A0',
    dark: '#1A1A1A'
  }
};

export const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL || 'http://localhost:5678/webhook/reserva-barberia';
