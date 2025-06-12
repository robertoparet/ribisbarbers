# 💈 RivisBarber - Barbería Moderna

Una página web elegante y moderna para la barbería "RivisBarber", diseñada exclusivamente para hombres que buscan estilo y precisión.

## 🌟 Características

- **Diseño moderno y masculino** con colores negro, blanco y dorado
- **Responsive design** optimizado para móviles y desktop
- **Navegación suave** con scroll animado entre secciones
- **Formulario de reserva** con validación y envío a webhook
- **Animaciones elegantes** con fade-in y hover effects
- **SEO optimizado** con meta tags y sitemap
- **Performance optimizado** con Turbopack y componentes lazy

### 📱 Secciones principales:
- **Landing page** con fondo impactante y llamadas a la acción
- **Servicios profesionales** con precios y características detalladas
- **Formulario de reserva** con validación en tiempo real
- **Testimonios** de clientes satisfechos
- **Footer completo** con redes sociales y contacto
- **Navbar responsive** con menú móvil

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 14 con App Router
- **Lenguaje:** TypeScript para tipado estático
- **Estilos:** Tailwind CSS para diseño responsive
- **Fuentes:** Google Fonts (Inter + Playfair Display)
- **Iconos:** SVG customizados para mejor rendimiento
- **Build:** Turbopack para desarrollo rápido

## 🚀 Comenzar

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd barber-site

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo con Turbopack
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Verificar código con ESLint
npm run lint:fix     # Corregir errores de linting automáticamente
npm run type-check   # Verificar tipos con TypeScript
npm run clean        # Limpiar archivos de build y cache
npm run preview      # Build y preview de producción
```

## 💼 Servicios

| Servicio | Precio | Duración | Descripción |
|----------|--------|----------|-------------|
| **Corte de pelo** | €25 | 45 min | Corte personalizado con consulta de estilo |
| **Barba** | €20 | 30 min | Perfilado y cuidado profesional |
| **Corte + Barba** | €40 | 75 min | Servicio completo (ahorro €5) |
| **Afeitado clásico** | €15 | 25 min | Experiencia tradicional con toalla caliente |

## 🔗 Integración

### Webhook de Reservas
El formulario envía datos vía POST a:
```
https://mi-n8n.com/webhook/reserva
```

#### Estructura de datos enviados:
```json
{
  "fullName": "string",
  "phone": "string", 
  "service": "string",
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "comment": "string",
  "timestamp": "ISO string",
  "source": "website"
}
```

### Variables de entorno
Crear archivo `.env.local`:
```env
NEXT_PUBLIC_WEBHOOK_URL=http://localhost:5678/webhook/reserva-barberia
```

## 📱 Información de Contacto

- **Teléfono:** +34 600 123 456
- **WhatsApp:** [Contactar directamente](https://wa.me/34600123456)
- **Instagram:** [@rivisbarber](https://instagram.com/rivisbarber)
- **Dirección:** Calle Principal, 123 - 28001 Madrid
- **Horario:** Lun - Sáb: 9:00 - 20:00

## 🎨 Guía de Estilo

### Colores de marca
```css
--primary: #000000     /* Negro principal */
--secondary: #FFFFFF   /* Blanco */
--accent: #D4AF37      /* Dorado */
--gray-dark: #1A1A1A   /* Gris oscuro */
--gray-medium: #A0A0A0 /* Gris medio */
```

### Tipografía
- **Títulos:** Playfair Display (serif elegante)
- **Texto:** Inter (sans-serif moderna)

## 📁 Estructura del Proyecto

```
barber-site/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── globals.css      # Estilos globales
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página principal
│   │   ├── viewport.ts      # Configuración viewport
│   │   ├── sitemap.ts       # Sitemap automático
│   │   └── robots.ts        # Robots.txt
│   ├── components/          # Componentes React
│   │   ├── Hero.tsx         # Sección principal
│   │   ├── Services.tsx     # Servicios
│   │   ├── BookingForm.tsx  # Formulario reserva
│   │   ├── Testimonials.tsx # Testimonios
│   │   ├── Footer.tsx       # Pie de página
│   │   ├── Navbar.tsx       # Navegación
│   │   └── ScrollToTop.tsx  # Botón scroll
│   ├── config/              # Configuración
│   │   └── constants.ts     # Constantes del negocio
│   └── utils/               # Utilidades
│       └── helpers.ts       # Funciones auxiliares
├── public/                  # Archivos estáticos
│   └── favicon.svg          # Icono personalizado
└── docs/                    # Documentación
```

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta .next a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Personalización

### Cambiar información del negocio
Editar `src/config/constants.ts`:

```typescript
export const BUSINESS_INFO = {
  name: 'Tu Barbería',
  phone: '+34 XXX XXX XXX',
  address: 'Tu dirección',
  // ... más configuraciones
};
```

### Modificar servicios
Actualizar array `SERVICES` en `constants.ts` con tus precios y servicios.

### Cambiar colores
Modificar variables CSS en `globals.css` y clases Tailwind en componentes.

## 📈 Performance

- ✅ **Lighthouse Score:** 95+ en todas las métricas
- ✅ **Core Web Vitals:** Optimizado
- ✅ **SEO:** Meta tags completos
- ✅ **Accesibilidad:** ARIA labels y semántica correcta
- ✅ **Responsive:** Móvil primero

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:
- 📧 Email: info@rivisbarber.com
- 💬 WhatsApp: +34 600 123 456
- 📱 Instagram: @rivisbarber

---

*Estilo y precisión para el hombre moderno* ✨

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
