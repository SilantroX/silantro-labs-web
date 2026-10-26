export type Social = {
  platform: string
  url: string
}

export type ProjectModule = {
  icon: string
  title: string
  description: string
}

export type ProjectItem = {
  title: string
  slug: string
  shortDescription: string
  tags: string[]
  githubUrl?: string
  youtubePlaylistUrl?: string
  tiktokPlaylistUrl?: string
  youtubeComingSoon?: boolean
  tiktokComingSoon?: boolean
  diagramUrl?: string
  demoUrl?: string
  learnings?: string
  date?: string
  status?: "Completado" | "En desarrollo" | "Experimento"
  modules?: ProjectModule[]
  continuousImprovementNotice?: string
  continuousImprovementTitle?: string
  contextNotice?: string | string[]
}

export type ArticleItem = {
  title: string
  date: string
  slug: string
  tag?: string
  excerpt?: string
  mobileExcerpt?: string
}

export type Portfolio = {
  name: string
  hero: {
    title: string
    subtitle: string
  }
  heroImage: string
  about: {
    statement: string
    detail: string
  }
  projects: ProjectItem[]
  articles: ArticleItem[]
  community: {
    label: string
    url: string
  }
  contact: {
    heading: string
    cta: string
    email: string
    socials: Social[]
  }
}

export const portfolio: Portfolio = {
  name: "SILANTRO LABS",
  hero: {
    title: "SILANTRO LABS",
    subtitle: "Productos digitales, software e ideas.",
  },
  heroImage: "/logo-transparent.png",
  about: {
    statement:
      "Un espacio para crear proyectos, probar ideas y aprender haciendo.",
    detail:
      "Desde pequeñas herramientas hasta aplicaciones completas, sin miedo a experimentar.",
  },
  projects: [
    {
      title: "Silantro Tools",
      slug: "silantro-tools",
      shortDescription:
        "Suite de micro-herramientas de cómputo local y código abierto. Procesamiento 100% en el navegador con Zero Server Egress (0 bytes transmitidos a servidores), sin rastreadores ni telemetría.",
      tags: [
        "Astro",
        "TypeScript",
        "Preact",
        "Tailwind CSS",
        "Zero Egress",
        "Web Crypto API",
        "Cloudflare",
      ],
      githubUrl: "https://github.com/SilantroX/SilantroTools",
      demoUrl: "https://tools.silantrolabs.com",
      learnings:
        "Demostramos que la gran mayoría de herramientas web no necesitan enviar los datos del usuario a un servidor. Usando APIs nativas del navegador (FileReader, TypedArray, Web Crypto y el motor V8), logramos herramientas ultrarrápidas con costo $0 de infraestructura y, sobre todo, inmunidad total frente a fugas de datos en backend.",
      date: "26.10.2026",
      status: "En desarrollo",
      modules: [
        {
          icon: "qr",
          title: "Generador de Códigos QR (ISO/IEC 18004)",
          description:
            "Codificación óptica local con corrección de error Reed-Solomon en GF(2^8), soporte de logotipos incrustados sin pérdida de lectura y exportación SVG/PNG de alta fidelidad.",
        },
        {
          icon: "terminal",
          title: "Formateador e Inspector JSON",
          description:
            "Validación de esquemas, indentación y visualización en árbol de payloads complejos utilizando directamente el parser nativo V8 del cliente sin registrar logs remotos.",
        },
        {
          icon: "lock",
          title: "Criptografía y Generador de Claves",
          description:
            "Generación de entropía y pares de claves criptoseguras apoyadas en la Web Crypto API sin transmitir contraseñas ni secretos a través de la red.",
        },
        {
          icon: "zap",
          title: "Conversor Base64 & Binario",
          description:
            "Manipulación y conversión de archivos a cadenas Base64 y Data URIs directamente en la memoria volátil a través de TypedArray y FileReader.",
        },
        {
          icon: "shield",
          title: "Zero Server Egress & Privacidad Radical",
          description:
            "Diseño estático puro sin backend ejecutable: la información nunca abandona el dispositivo del usuario, previniendo brechas de seguridad por arquitectura.",
        },
      ],
      continuousImprovementTitle: "Evolución y próximos módulos",
      continuousImprovementNotice:
        "El catálogo se expande de manera modular incorporando analizadores semánticos de texto, convertidores tipográficos y micro-herramientas de desarrollo, manteniendo intacto el compromiso de 0 bytes transmitidos.",
      contextNotice: [
        "Silantro Tools nace como un manifiesto de soberanía y privacidad digital: la gran mayoría de utilidades online envían datos confidenciales a servidores remotos donde quedan registrados en logs o telemetría. Este proyecto demuestra que una ingeniería responsable puede ejecutar toda la computación en el cliente con cero costo operativo.",
        "El proyecto es completamente de código abierto bajo licencia MIT y se compila como sitio estático puro (SSG) distribuido globalmente en la red Anycast de Cloudflare Pages.",
      ],
    },
    {
      title: "Cuadrio",
      slug: "cuadrio",
      shortDescription:
        "SaaS B2B Multi-tenant de gestión comercial: punto de venta (POS) ágil, inventario con Costo Promedio Ponderado (CPP), kardex inmutable, tesorería multicuenta y cartera de fiados con recibos por WhatsApp.",
      tags: [
        "Node.js",
        "Express",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "React",
        "Docker",
        "DevSecOps",
      ],
      demoUrl: "https://cuadrio.silantrolabs.com",
      learnings:
        "La gestión de dinero y stock en el comercio real exige tolerancia cero a inconsistencias: la integridad transaccional y la sincronización de caja requieren diseño defensivo desde la base de datos hasta la interfaz. Construir una plataforma multi-tenant sólida nos enseñó que la seguridad y el aislamiento de datos no son un añadido posterior, sino un pilar arquitectónico que se valida continuamente.",
      date: "24.10.2026",
      status: "En desarrollo",
      modules: [
        {
          icon: "cart",
          title: "Punto de Venta (POS) & Recibos WhatsApp",
          description:
            "Registro ágil de ventas en mostrador (contado, crédito o abonos parciales) con despacho inmediato de recibos de compra e información de saldo por WhatsApp.",
        },
        {
          icon: "box",
          title: "Inventario & Kardex Inmutable (CPP)",
          description:
            "Control estricto de existencias con cálculo automático de Costo Promedio Ponderado en tiempo real, trazabilidad histórica y protección de stock.",
        },
        {
          icon: "wallet",
          title: "Tesorería Multicuenta en Vivo",
          description:
            "Conciliación en tiempo real entre el dinero en efectivo en caja física y saldos en cuentas bancarias o billeteras digitales (Nequi, Daviplata) mediante libros auxiliares inmutables.",
        },
        {
          icon: "users",
          title: "Cartera & Control de Fiados",
          description:
            "Administración ordenada de cuentas por cobrar, abonos parciales y estados de cuenta automáticos para clientes de confianza sin fricción contable.",
        },
        {
          icon: "shield",
          title: "Seguridad y Confiabilidad Empresarial",
          description:
            "Aislamiento estricto de datos por comercio, cifrado robusto de credenciales, comunicaciones seguras y políticas continuas de DevSecOps para proteger la información operativa.",
        },
      ],
      continuousImprovementTitle: "Evolución y estado operativo",
      continuousImprovementNotice:
        "Actualmente en fase beta privada activa con comercios seleccionados, optimizando la agilidad de respuesta en mostrador, el análisis de rendimiento financiero y adaptando la experiencia para terminales móviles y tablets.",
      contextNotice: [
        "Cuadrio es una plataforma diseñada desde cero para digitalizar comercios de mostrador que necesitan rapidez absoluta sin sacrificar el rigor contable ni la privacidad de sus datos financieros.",
        "Bajo una arquitectura moderna y robusta, cada comercio cuenta con aislamiento estricto de información, trazabilidad inmutable de operaciones y altos estándares de confiabilidad para el día a día del negocio.",
      ],
    },
    {
      title: "Bot de Discord para SILANTRO LABS",
      slug: "bot-discord-python-silantro-labs",
      shortDescription:
        "El bot oficial de la comunidad: moderación automatizada, tickets de soporte privados, votaciones para sugerencias y menús interactivos para elegir roles.",
      tags: [
        "Python",
        "Discord.py",
        "SQLite",
        "AsyncIO",
        "Automatización",
      ],
      githubUrl: "https://github.com/SilantroX/SL-DiscordBot",
      youtubeComingSoon: true,
      tiktokComingSoon: true,
      diagramUrl:
        "https://app.diagrams.net/?grid=1&pv=0#R5V1Zd%2BK4Ev4t98HnpB%2FCMTYk8GiMSXOHJTeQWZ5yhFFA3bbFeMnSv%2F6qJNnYxmlEOiyhe%2BYkWJYlo%2FpU9VWVpGimrZm9F9%2FTDP0JhxGhgWZ2NcOo13T2k5XiwKVzEixE8f20d9mCG2ZPMx1NtzTT9l8eiYdZ1SWNYlENrVa1OUGLEPlRLcCxaAotcCArWEFM2N0nEr%2ByG1ZfVCi8gdGo6eIlREeGDv%2BbtmyXXQTIx7K58N%2BExNiNkxCxG9Bmz0u%2B0Yh96FDWvd4lkUvDueiHzMVjMxpfzsWNSxS6y3JnaZf%2By02IVsshnWMYqPmLHKMrXQ7S%2FFWWGGnJIkw7qa8LJuSHfOF6Wi0hcxwVKsaUejFZFQtdGgTs6xXKUBjS52K1R%2BoVe12xMd8omLjI2yz9i8zjpSxtpV8DbnzFZLFMu26kd2bI%2Fb4IaRLIDjXDfGw9th%2BRuO2jtDFZP1qiOX3OFW0OdDrcIWUie%2Bv2WiY29rycMEU%2Fvd0fzMYgzOBZbOunzf3n8hLQ1h9Apbpmwq%2FbgTW1euO7IVx0%2BxN7fMda1f8BNI6n7CcrcNgv9ujObxth92GeB%2FMT8hIpTa2na%2B2e1rK1tl7o2bHHk38mU2fIPl9Yt33e%2FBXyV5rZgdcZ9J3RdPJFSip%2BTeERPRPfQwG76jwv2QSbrJALt57ZdGBly5gpDrPLvnWHqQDPph4N%2BYNms3XV7BlQToM4V%2F7I%2F7HyKA7pd5y707huGnZDPjGRr1DnNVEYy5ljsiHpcNDhubzN5q282eJfRuqRGL%2B8Kd36z%2BC3MfMx9XEcgkqRLTYkol%2BLl8%2Fr%2BdO4kmXL3NQx0kIk5%2Bwia1kJt6yOBMPOmEmi8MHH%2FgyHm5Axrjz2gp0Z%2B7CADxJD7bpmNVjV%2ByhBIaG87R77OSSsnZCmj7HC9ZNpU2Fa0g9iHCKmtmxT61hI6DHQHTSmAQblPAe7EVIPLmxQfsT9juNI6vAoWWAmNpewIStDs4iC3dD5Ngoz3CoBqTQX3w8powip5iakMsOSh9T1URHFJiYbRGVAdTSrrjk9rdPSWoCkiXhc4sqa%2ByQgTB7MSoRq6HKCJwCW1UWiFRQkDCoAVQwgW4XkiTUmcOUz051RAxQTHHDkZXA7a3A1Phu65Nd%2BWDwrwMsxtLYF2MqRPP0GxfgZvWo5O5dZuztnAjaYm0EVnP2FZxOaqqUL%2FMQkxIklRxmDkr8CzIUYeV94f9DH1%2Bn0dt3VRU7D%2BTiI0Lf0ykUB42LRpuX9FQTiGZ5jdSOrH1vd1SsQ2TAqENn6WETuTrzYV8dvsS5mLttXWsrwnNFNfwQc7%2BL2n%2BnX8Yh9Mmt1iQ6h8iQ9q90CL3wyPpB9GbbRM81d2Bf779qwPgP7am6nX80To1%2BAmgcfkUDdWFoaYF2Hh2qrVzU9BZqQPWVBH8LptT0UgabqByQmyCM%2FmOUDAvazJyfsmSU8S30fBaBLpyEGWzl5DdyfP9p9ZR45cfnDC%2FZzQNE8pZx7N64Z5pVVWTqZ90rbGhVQ%2FGA1tisSGQd%2FJAtly9pu51mbLR%2BWOqyGGQlTQqfUdg%2FT8R%2FOaPP2zX1%2F0H3od4VZHIxvJg%2F2V2s0cgaTcwZQ%2B1MiaD5T12SG1gEzOPnfgIkJlAQYwAtEaPSvx0q%2BqKFnimYefFl410VCvPlDhOOYBAvJo0jwCI4m025lRxIumB%2B5wFHuLvAx5hEHibxGQcAw5WJWVOENREu0go%2Fuq0cY8EJzO%2BpmAqKDWVaQhcvGScyayeyrsJ715iZU223L6jSroHpttNrdsrXWN%2B29zv8dFtJ1vQjpKnJnXldguv2xmFYP2hkCVkNwJttm934wZipHrwtkGOKXqSlF60S7uZa0LCZodYf9UX8yvbPsvrg%2FUmuzkogicJffYqIbrna99uYLXLgU5lCPN8ioxgeyUKfbMBrNXViorZtN8%2FozsNASCTWrQJ6W5UFuppTh8JqbSfjB9SuCxmXNzZgfI37cxRVkEPCrREDZXRSICcM%2Bf2cqOLuIiY9EmfXrodRmF09ozA4kJnPUKmsE7O5tk%2BiWK8y88dzWThYlhgEuNXQ28zE9%2F6LQxT%2Bm6wDcuM%2FIEeohBvhrGSBGlmLeS3cptMKD2JJ%2FRmz3e9AhfFonCoq6qYiLI7H%2FgAW%2BAW721FhrTziwgzXJyhwCc8AmIEaHvIBOl1ETLqQucpyEeerKOrtMiaaapg4XrAWMOFRFX9SshNGPdh9fUjnA7rIT%2FwsQtvtqAHlK4mYeiCIJ%2BXBuRB2hAf5HX%2BGIXohkgOmx2nO%2BQLnuoibqrBYZZC%2F2Tw06y6yY0m%2Bp337D2cKvPu9jLiQyqnIiTuaBdAyaoXeutw3Hd%2BO76Y8WCvZsGzsY%2Flw87ntFJ2W%2BWlbSCJqdFms%2Fsp%2BHDJllUS4iqv74iEOP4eP6yYIL3tqutWVNN75Bvkem5hnVIUs8HD6gxHWkAOd62Z04ZWm5XYIefD%2BpQjT2t2D6SsMlAqK6vcRNsrIa5yn45HiAEsPp0jBbAMRTW9R0M%2F8QRjUQGJFSVBTDVhvro4ckOyyjGnc4ZDmfZU4aEqqXNcPLhLFCipj3SuNyAcyuY6JH1BjaQrFICgiHFUQwrTPz6JqIyHWgn3kXTBlCfrVRnnipaS8qjkyFXa43gcGdCShae3x1%2BCWC4YSM2BWvil2bnDrod8ZkjAfoCVsXEY5i6nIQq4Xjl%2FC6PkSVXplOOixPVoVLHEYAMjhAkW86bKzlMm4x29budlRcMY3KWv0%2BGA1Z3%2BDV44FAjnidsl7BHmq%2FClfEKLnTOGrpvbnSqjAkLHdqpMYRgm9zfOnTOy%2B9avOFZRUuHbZ8k9vu7KrG30lnpSudTbx3pTPce5btq7eFPdlm02nM%2FgTbVKFq7Sm6rSXUf0ppig1dIL2bJNID48ajPJlvkq5xn4ymACrAdama3dK77U82B6KQOhsl6Ss%2Bk38pwAGFgE47ZCQ8bsxCrxP2mMdrRhHbmwvOxk17UWMKAJyZhQ7g4Efkb0cIToCKBR8a9ODzUhfiJYYQnwHasXrYGSukCKnNlahXSW48iMQy%2FRD1lwroAoaZF6BbOpBsTHMpsdAcEMdaxAji03Tvhqx5z2SPMBKqAQomEcJlUSPb6%2Bsbd24zuN9VJvnppKDpqaOgEN8kkQo7JSLYvmcgIilvWrZqBumNjn8NQTFZsCYMhCHK0SRnrR%2BcKhtd0zyhBzXM9ILvIyKxd5wQ43WH3P3uq9y7saMgh3Px3fjQfOr3haMuhT7WtBAgssVKNW6m0zAjB0RvwVuQ%2FoDByb70GRDhnv5IMXenUazXbqWCkhtmMYznW6QeGkXbHSQq%2FrNIe6bbfnET0xJmFYHZustqu%2Biaimr7i924E3yTVi%2FCV6sjMdQSBaBi65FmWSzmF6%2F4n3N3C4%2BzLY7K336qdVKcjjMW6AzY7pUOGndfLet8iQKsUbpbPHuDtja2WXLVV3jocX3M%2B%2F4yI5GCc%2FLSxt38F5gmCC9fXbsTRkmoJvD9d40nPF5I1m%2FDgR51HEiXysut9cbk6sJaQ2wR6cl8Hs3iQOSbAQ118y0PqJF5PLCEoPnWM9LWgVkVVF609sczBAC61W3quCeSOBG9Kg5Al2CUecVfeJqxhxFIcn1NB8Lsb8Qrh%2FsLY%2BxD59woVi4GCPGM9hz8dvianGpwTVvn1FuYepuPtIOIxQQFe5%2FPDvBZh6SQt9mkRbUzp%2Fo%2FuR3ece5cXo3vlzDHrgvV5ggJ%2FfdAJhtRjcadaKvcKOytxxP9mmnvy2tg9Ov%2FWspv6zLWebm3vsViN74qR9vvIW8yqn76pqEfYRnT5AjVr%2BjW8GK%2Fhv2cEpSrT9G3aTWCxbKriNQhnKVQHr01dEig9lx7scmm1lQFVWaOkE3Kvv16qAz%2FHoOkeP4vJGvoL6vWsc88cFTAW9jxOP%2FrziUByZoqWUa4jC73P6vOUggyHO7zvRL7SGjpn0X2mwbomVLXG43oRc3dL93YD97PtwfmH2aAfW%2FoXnDGIFFFc5na2jBfw5ileqWUO%2BaOVPwsP0%2Bi08JT6A3lJ0C4YQ5efHSqXBjDd0YPHYs%2FV%2BykIisnT2x20yE1uospQ1nMfQhdP9%2BBJSF3sHTVIeAYIN83NCECQXLbdDkMfy7zDfKpfXVTcenXEEpVFUaaEjxeXBAjk5WNJH4optUsI7vYUDXTksH8kiCQVIeWcirpcCWERmoDWosJCvdbZ4axXhVr%2FexJtRabiPizel3XdNQfuYwEO%2FALZXjsEFkDNFI54lPTP3V7%2BIwbnVSidpfJHNBzQmjwKRGaKTOYkvD7gr7xh4MlUAVbnx%2B%2BB%2BrT0eOfZ0fMdTijeDccd6fy7TrW%2FIFM8XOPX5aBgv6YIyFeOsS0tOX07CQpLp6cSVu7dLBytCZwXJRjQJXVlUPguVOZ8LLIe9fO7gR%2FiUITPTMXkqvtARzu0xTlwmudNEfxeRmAcWSemEq5%2BKpDzueZmUzrM7J5E0TlgkpWHfkEgavz51eShao7%2F77MeEX9y82xI1P16eb%2B%2F0f6%2F0CifznLr0dhn9q72OfmlT0HtHv7QN%2FJzG%2F3qv419advje8S9sHDmn0W%2FtV%2FekCbxfG%2F3SYrFzGv%2F2ftFf9CffO%2F7FvM2pD%2F%2BujmQuRdkfTZ270fjdljzYg1NZlZ1UEGdRZhvSzOVRPjCkcCqzKtiDI%2FkrcsiN9oYkVvlcwDnKQnqQubhfljU4KSEVBLEppny8%2FBzFtAev8pekkR%2FvDWlk0eRPIonKyrzaG39HTDaR%2B5Nu%2BTr8bvo35sQN%2BQD%2FK3em838%3D",
      learnings:
        "El principal objetivo fue crear una base estable y ordenada. Separar las funciones en módulos independientes facilitó el mantenimiento, mientras que SQLite asegura que la información de tickets y sugerencias no se pierda si el bot se reinicia. Además, usar los componentes interactivos nativos de Discord (botones, modales y menús desplegables) hizo que la experiencia fuera rápida y cómoda para cualquier usuario.",
      date: "14.10.2026",
      status: "Completado",
      modules: [
        {
          icon: "shield",
          title: "Moderación y seguridad",
          description:
            "Comandos para sancionar usuarios con control de jerarquías para evitar abusos, además de un canal privado donde queda registrado todo lo que sucede.",
        },
        {
          icon: "ticket",
          title: "Sistema de tickets",
          description:
            "Canales de soporte privados que se crean al instante para resolver dudas, con opción de que el staff tome el caso y se guarde una copia del chat al cerrar.",
        },
        {
          icon: "lightbulb",
          title: "Sugerencias de la comunidad",
          description:
            "Canal para proponer ideas y votar a favor o en contra con botones en tiempo real, con protección contra votos duplicados y avisos al autor sobre el estado de su propuesta.",
        },
        {
          icon: "roles",
          title: "Selección de roles",
          description:
            "Menú desplegable privado donde cada miembro puede elegir o quitarse roles según sus temas de interés, sin llenar de mensajes el chat público.",
        },
        {
          icon: "megaphone",
          title: "Anuncios oficiales",
          description:
            "Herramienta interna para redactar comunicados con vista previa de confirmación antes de lanzarlos al canal general, evitando equivocaciones.",
        },
      ],
      continuousImprovementTitle: "Evolución del bot",
      continuousImprovementNotice:
        "Este bot se irá mejorando continuamente con nuevas funciones, ajustes y herramientas adicionales según las necesidades de la comunidad.",
      contextNotice: [
        "Este bot está pensado como una pieza central para la comunidad de SILANTRO LABS. Además de resolver la gestión diaria del servidor, el proyecto está completamente documentado y publicado con código abierto para que cualquiera pueda explorar cómo está hecho o usarlo de referencia.",
        "El repositorio en GitHub incluye la estructura de archivos, la base de datos y la guía de configuración. Las explicaciones en video se publicarán próximamente en YouTube y TikTok.",
      ],
    },
  ],
  articles: [
    {
      title:
        "Seguridad en la era de la IA: Lecciones de Cuadrio, Silantro Tools y la avalancha de vulnerabilidades en Node.js",
      date: "26.10.2026",
      slug: "seguridad-desarrollo-era-ia-cuadrio-silantrotools",
      tag: "Ingeniería & Seguridad",
      excerpt:
        "La IA nos permite programar a una velocidad sin precedentes, pero el código rápido sin criterio técnico es una trampa. Analizamos las recientes vulnerabilidades críticas de Node.js, los desafíos de blindar una plataforma comercial como Cuadrio y por qué diseñamos Silantro Tools bajo el principio de Zero Server Egress.",
      mobileExcerpt:
        "Peligros de la IA, vulnerabilidades en Node.js y lecciones construyendo Cuadrio y Silantro Tools.",
    },
    {
      title: "El comienzo de SILANTRO LABS",
      date: "07.10.2026",
      slug: "el-comienzo-de-silantro-labs",
      tag: "Publicación 01",
      excerpt:
        "Detrás de Silantro estoy yo: Miguel. Esta es la historia de cómo pasé de 'hackear' juegos a los 15 años a crear mi propio laboratorio de software.",
      mobileExcerpt: "De hackear juegos a crear este laboratorio de software.",
    },
  ],
  community: {
    label: "Unirse a la comunidad",
    url: "https://discord.gg/QG6T3DUwj",
  },
  contact: {
    heading: "¿Hablamos?",
    cta: "Contactar →",
    email: "hello@silantrolabs.com",
    socials: [
      { platform: "Discord", url: "https://discord.gg/QG6T3DUwj" },
      { platform: "X", url: "https://x.com" },
      { platform: "GitHub", url: "https://github.com" },
    ],
  },
}
