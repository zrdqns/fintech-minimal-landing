# Numera — Landing Fintech Minimalista

Landing page de demostración para una plataforma ficticia de infraestructura de pagos B2B (**Numera**). Diseño minimalista moderno en modo claro, con mucho espacio en blanco, glassmorphism sutil y micro-animaciones.

> **Demo solo-frontend.** No hay backend, API ni lógica de servidor. Todos los datos (balances, estadísticas, precios, testimonios) son estáticos/mock y no se procesa ningún pago real. El objetivo es mostrar capacidad visual y de interacción.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- Componentes estilo **shadcn/ui** (Button, Card, Badge con `class-variance-authority`)
- **Framer Motion** para animaciones
- **lucide-react** para iconografía SVG

## Diseño

- **Paleta:** fondo blanco/gris frío, tinta casi negra (`#0A0A0A`), acento azul eléctrico (`#2563EB`) y teal secundario (`#0D9488`).
- **Tipografía:** Geist Sans (geométrica) + Geist Mono para metadatos.
- **Layout:** grid limpio, vertical clásico, mucho whitespace.

## Animaciones

- Gradiente animado y blobs ambientales en el hero.
- Reveals por scroll (fade + slide) con `IntersectionObserver` vía Framer Motion.
- Contadores numéricos animados en la sección de estadísticas.
- Hover elevado en cards y CTA.
- Marquee infinito en la banda de logos.
- Respeta `prefers-reduced-motion`.

## Secciones

Navbar sticky · Hero con CTA · Banda de logos · Grid de features · Stats con counters · Pricing (3 planes) · Testimonios · CTA final · Footer.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```
