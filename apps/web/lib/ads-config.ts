/**
 * Configuración centralizada de Bloques Manuales de Google AdSense.
 * 
 * En Google AdSense:
 * 1. Desactiva "Anuncios automáticos" (Auto ads) en tu panel para evitar anuncios intrusivos.
 * 2. Ve a Anuncios -> Por bloque de anuncios -> Crear bloque de anuncios de display.
 * 3. Copia el número 'data-ad-slot' (ejemplo: 8492019482) de cada bloque y colócalo aquí
 *    o en tus variables de entorno (.env.local).
 */

export const ADS_CONFIG = {
  // Tu ID oficial de editor de Google AdSense
  clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-1982658636778600",

  // Bloques manuales definidos por ubicación:
  slots: {
    // 1. Sección Artículos: Al pie del listado de publicaciones (/articulos)
    articulosFeed: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICULOS_FEED || "",

    // 2. Sección Artículos: Al final de la lectura de cada artículo técnico (/articulos/[slug])
    articuloBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICULO_BOTTOM || "",

    // 3. Sección Proyectos: Al pie del catálogo de proyectos (/proyectos)
    proyectosCatalog: process.env.NEXT_PUBLIC_ADSENSE_SLOT_PROYECTOS_FEED || "",

    // 4. Sección Proyectos: Dentro de la ficha técnica de cada proyecto (/proyectos/[slug])
    proyectoDetail: process.env.NEXT_PUBLIC_ADSENSE_SLOT_PROYECTO_DETAIL || "",
  },
} as const
