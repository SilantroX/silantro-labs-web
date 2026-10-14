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
      title: "Bot de Discord en Python para SILANTRO LABS",
      slug: "bot-discord-python-silantro-labs",
      shortDescription:
        "Bot oficial de la comunidad: arquitectura modular con Cogs en discord.py v2, persistencia asíncrona SQLite, moderación con jerarquías, tickets persistentes, sugerencias comunitarias, autoroles efímeros y anuncios con vista previa.",
      tags: [
        "Python 3.10+",
        "discord.py v2",
        "SQLite (aiosqlite)",
        "AsyncIO",
        "Vistas Persistentes",
        "Modales",
        "Architecture",
      ],
      githubUrl: "https://github.com/SilantroX/SL-DiscordBot",
      youtubeComingSoon: true,
      tiktokComingSoon: true,
      diagramUrl:
        "https://app.diagrams.net/?grid=1&pv=0#R5V1Zd%2BK4Ev4t98HnpB%2FCMTYk8GiMSXOHJTeQWZ5yhFFA3bbFeMnSv%2F6qJNnYxmlEOiyhe%2BYkWJYlo%2FpU9VWVpGimrZm9F9%2FTDP0JhxGhgWZ2NcOo13T2k5XiwKVzEixE8f20d9mCG2ZPMx1NtzTT9l8eiYdZ1SWNYlENrVa1OUGLEPlRLcCxaAotcCArWEFM2N0nEr%2ByG1ZfVCi8gdGo6eIlREeGDv%2BbtmyXXQTIx7K58N%2BExNiNkxCxG9Bmz0u%2B0Yh96FDWvd4lkUvDueiHzMVjMxpfzsWNSxS6y3JnaZf%2By02IVsshnWMYqPmLHKMrXQ7S%2FFWWGGnJIkw7qa8LJuSHfOF6Wi0hcxwVKsaUejFZFQtdGgTs6xXKUBjS52K1R%2BoVe12xMd8omLjI2yz9i8zjpSxtpV8DbnzFZLFMu26kd2bI%2Fb4IaRLIDjXDfGw9th%2BRuO2jtDFZP1qiOX3OFW0OdDrcIWUie%2Bv2WiY29rycMEU%2Fvd0fzMYgzOBZbOunzf3n8hLQ1h9Apbpmwq%2FbgTW1euO7IVx0%2BxN7fMda1f8BNI6n7CcrcNgv9ujObxth92GeB%2FMT8hIpTa2na%2B2e1rK1tl7o2bHHk38mU2fIPl9Yt33e%2FBXyV5rZgdcZ9J3RdPJFSip%2BTeERPRPfQwG76jwv2QSbrJALt57ZdGBly5gpDrPLvnWHqQDPph4N%2BYNms3XV7BlQToM4V%2F7I%2F7HyKA7pd5y707huGnZDPjGRr1DnNVEYy5ljsiHpcNDhubzN5q282eJfRuqRGL%2B8Kd36z%2BC3MfMx9XEcgkqRLTYkol%2BLl8%2Fr%2BdO4kmXL3NQx0kIk5%2Bwia1kJt6yOBMPOmEmi8MHH%2FgyHm5Axrjz2gp0Z%2B7CADxJD7bpmNVjV%2ByhBIaG87R77OSSsnZCmj7HC9ZNpU2Fa0g9iHCKmtmxT61hI6DHQHTSmAQblPAe7EVIPLmxQfsT9juNI6vAoWWAmNpewIStDs4iC3dD5Ngoz3CoBqTQX3w8powip5iakMsOSh9T1URHFJiYbRGVAdTSrrjk9rdPSWoCkiXhc4sqa%2ByQgTB7MSoRq6HKCJwCW1UWiFRQkDCoAVQwgW4XkiTUmcOUz051RAxQTHHDkZXA7a3A1Phu65Nd%2BWDwrwMsxtLYF2MqRPP0GxfgZvWo5O5dZuztnAjaYm0EVnP2FZxOaqqUL%2FMQkxIklRxmDkr8CzIUYeV94f9DH1%2Bn0dt3VRU7D%2BTiI0Lf0ykUB42LRpuX9FQTiGZ5jdSOrH1vd1SsQ2TAqENn6WETuTrzYV8dvsS5mLttXWsrwnNFNfwQc7%2BL2n%2BnX8Yh9Mmt1iQ6h8iQ9q90CL3wyPpB9GbbRM81d2Bf779qwPgP7am6nX80To1%2BAmgcfkUDdWFoaYF2Hh2qrVzU9BZqQPWVBH8LptT0UgabqByQmyCM%2FmOUDAvazJyfsmSU8S30fBaBLpyEGWzl5DdyfP9p9ZR45cfnDC%2FZzQNE8pZx7N64Z5pVVWTqZ90rbGhVQ%2FGA1tisSGQd%2FJAtly9pu51mbLR%2BWOqyGGQlTQqfUdg%2FT8R%2FOaPP2zX1%2F0H3od4VZHIxvJg%2F2V2s0cgaTcwZQ%2B1MiaD5T12SG1gEzOPnfgIkJlAQYwAtEaPSvx0q%2BqKFnimYefFl410VCvPlDhOOYBAvJo0jwCI4m025lRxIumB%2B5wFHuLvAx5hEHibxGQcAw5WJWVOENREu0go%2Fuq0cY8EJzO%2BpmAqKDWVaQhcvGScyayeyrsJ715iZU223L6jSroHpttNrdsrXWN%2B29zv8dFtJ1vQjpKnJnXldguv2xmFYP2hkCVkNwJttm934wZipHrwtkGOKXqSlF60S7uZa0LCZodYf9UX8yvbPsvrg%2FUmuzkogicJffYqIbrna99uYLXLgU5lCPN8ioxgeyUKfbMBrNXViorZtN8%2FozsNASCTWrQJ6W5UFuppTh8JqbSfjB9SuCxmXNzZgfI37cxRVkEPCrREDZXRSICcM%2Bf2cqOLuIiY9EmfXrodRmF09ozA4kJnPUKmsE7O5tk%2BiWK8y88dzWThYlhgEuNXQ28zE9%2F6LQxT%2Bm6wDcuM%2FIEeohBvhrGSBGlmLeS3cptMKD2JJ%2FRmz3e9AhfFonCoq6qYiLI7H%2FgAW%2BAW721FhrTziwgzXJyhwCc8AmIEaHvIBOl1ETLqQucpyEeerKOrtMiaaapg4XrAWMOFRFX9SshNGPdh9fUjnA7rIT%2FwsQtvtqAHlK4mYeiCIJ%2BXBuRB2hAf5HX%2BGIXohkgOmx2nO%2BQLnuoibqrBYZZC%2F2Tw06y6yY0m%2Bp337D2cKvPu9jLiQyqnIiTuaBdAyaoXeutw3Hd%2BO76Y8WCvZsGzsY%2Flw87pntFJ2W%2BWlbSCJqdFms%2Fsp%2BHDJllUS4iqv74iEOP4eP6yYIL3tqutWVNN75Bvkem5hnVIUs8HD6gxHWkAOd62Z04ZWm5XYIefD%2BpQjT2t2D6SsMlAqK6vcRNsrIa5yn45HiAEsPp0jBbAMRTW9R0M%2F8QRjUQGJFSVBTDVhvro4ckOyyjGnc4ZDmfZU4aEqqXNcPLhLFCipj3SuNyAcyuY6JH1BjaQrFICgiHFUQwrTPz6JqIyHWgn3kXTBlCfrVRnnipaS8qjkyFXa43gcGdCShae3x1%2BCWC4YSM2BWvil2bnDrod8ZkjAfoCVsXEY5i6nIQq4Xjl%2FC6PkSVXplOOixPVoVLHEYAMjhAkW86bKzlMm4x29budlRcMY3KWv0%2BGA1Z3%2BDV44FAjnidsl7BHmq%2FClfEKLnTOGrpvbnSqjAkLHdqpMYRgm9zfOnTOy%2B9avOFZRUuHbZ8k9vu7KrG30lnpSudTbx3pTPce5btq7eFPdlm02nM%2FgTbVKFq7Sm6rSXUf0ppig1dIL2bJNID48ajPJlvkq5xn4ymACrAdama3dK77U82B6KQOhsl6Ss%2Bk38pwAGFgE47ZCQ8bsxCrxP2mMdrRhHbmwvOxk17UWMKAJyZhQ7g4Efkb0cIToCKBR8a9ODzUhfiJYYQnwHasXrYGSukCKnNlahXSW48iMQy%2FRD1lwroAoaZF6BbOpBsTHMpsdAcEMdaxAji03Tvhqx5z2SPMBKqAQomEcJlUSPb6%2Bsbd24zuN9VJvnppKDpqaOgEN8kkQo7JSLYvmcgIilvWrZqBumNjn8NQTFZsCYMhCHK0SRnrR%2BcKhtd0zyhBzXM9ILvIyKxd5wQ43WH3P3uq9y7saMgh3Px3fjQfOr3haMuhT7WtBAgssVKNW6m0zAjB0RvwVuQ%2FoDByb70GRDhnv5IMXenUazXbqWCkhtmMYznW6QeGkXbHSQq%2FrNIe6bbfnET0xJmFYHZustqu%2Biaimr7i924E3yTVi%2FCV6sjMdQSBaBi65FmWSzmF6%2F4n3N3C4%2BzLY7K336qdVKcjjMW6AzY7pUOGndfLet8iQKsUbpbPHuDtja2WXLVV3jocX3M%2B%2F4yI5GCc%2FLSxt38F5gmCC9fXbsTRkmoJvD9d40nPF5I1m%2FDgR51HEiXysut9cbk6sJaQ2wR6cl8Hs3iQOSbAQ118y0PqJF5PLCEoPnWM9LWgVkVVF609sczBAC61W3quCeSOBG9Kg5Al2CUecVfeJqxhxFIcn1NB8Lsb8Qrh%2FsLY%2BxD59woVi4GCPGM9hz8dvianGpwTVvn1FuYepuPtIOIxQQFe5%2FPDvBZh6SQt9mkRbUzp%2Fo%2FuR3ece5cXo3vlzDHrgvV5ggJ%2FfdAJhtRjcadaKvcKOytxxP9mmnvy2tg9Ov%2FWspv6zLWebm3vsViN74qR9vvIW8yqn76pqEfYRnT5AjVr%2BjW8GK%2Fhv2cEpSrT9G3aTWCxbKriNQhnKVQHr01dEig9lx7scmm1lQFVWaOkE3Kvv16qAz%2FHoOkeP4vJGvoL6vWsc88cFTAW9jxOP%2FrziUByZoqWUa4jC73P6vOUggyHO7zvRL7SGjpn0X2mwbomVLXG43oRc3dL93YD97PtwfmH2aAfW%2FoXnDGIFFFc5na2jBfw5ileqWUO%2BaOVPwsP0%2Bi08JT6A3lJ0C4YQ5efHSqXBjDd0YPHYs%2FV%2BykIisnT2x20yE1uospQ1nMfQhdP9%2BBJSF3sHTVIeAYIN83NCECQXLbdDkMfy7zDfKpfXVTcenXEEpVFUaaEjxeXBAjk5WNJH4optUsI7vYUDXTksH8kiCQVIeWcirpcCWERmoDWosJCvdbZ4axXhVr%2FexJtRabiPizel3XdNQfuYwEO%2FALZXjsEFkDNFI54lPTP3V7%2BIwbnVSidpfJHNBzQmjwKRGaKTOYkvD7gr7xh4MlUAVbnx%2B%2BB%2BrT0eOfZ0fMdTijeDccd6fy7TrW%2FIFM8XOPX5aBgv6YIyFeOsS0tOX07CQpLp6cSVu7dLBytCZwXJRjQJXVlUPguVOZ8LLIe9fO7gR%2FiUITPTMXkqvtARzu0xTlwmudNEfxeRmAcWSemEq5%2BKpDzueZmUzrM7J5E0TlgkpWHfkEgavz51eShao7%2F77MeEX9y82xI1P16eb%2B%2F0f6%2F0CifznLr0dhn9q72OfmlT0HtHv7QN%2FJzG%2F3qv419advje8S9sHDmn0W%2FtV%2FekCbxfG%2F3SYrFzGv%2F2ftFf9CffO%2F7FvM2pD%2F%2BujmQuRdkfTZ270fjdljzYg1NZlZ1UEGdRZhvSzOVRPjCkcCqzKtiDI%2FkrcsiN9oYkVvlcwDnKQnqQubhfljU4KSEVBLEppny8%2FBzFtAev8pekkR%2FvDWlk0eRPIonKyrzaG39HTDaR%2B5Nu%2BTr8bvo35sQN%2BQD%2FK3em838%3D",
      learnings:
        "Arquitectura asíncrona profesional con discord.py v2: implementación de Cogs modulares desacoplados, persistencia relacional no bloqueante con SQLite (aiosqlite) integrada con el loop de AsyncIO, uso intensivo del framework discord.ui (Vistas Persistentes que sobreviven al ciclo de vida del bot, Modales dinámicos tipados y Select Menus efímeros), validación exhaustiva de jerarquías de roles en cada acción y auditoría centralizada con exportador de transcripciones HTML.",
      date: "14.10.2026",
      status: "Completado",
      modules: [
        {
          icon: "🛡️",
          title: "Administración y Moderación",
          description:
            "Comandos slash (/kick, /ban, /unban, /timeout, /warn, /warnings, /clear), verificación estricta de jerarquía de roles para impedir sanciones indebidas, canal de auditoría #mod-logs y monitor de eventos críticos en tiempo real.",
        },
        {
          icon: "🎫",
          title: "Tickets de Soporte",
          description:
            "Panel persistente (discord.ui.View con timeout=None) que sobrevive a reinicios, formulario modal estructurado (discord.ui.Modal), canales privados automáticos con permisos aislados, controles de staff (reclamar/cerrar) y exportación de transcripciones HTML estilo Discord Dark Mode.",
        },
        {
          icon: "💡",
          title: "Sugerencias Comunitarias",
          description:
            "Comando /sugerir con embeds dinámicos y votación interactiva en vivo (👍 / 👎). Sistema anti-trampas con prevención de auto-voto, toggle y cambio de sentido, más panel administrativo para resolver sugerencias con notificación privada por DM al autor.",
        },
        {
          icon: "🎭",
          title: "Autoroles Interactivos",
          description:
            "Panel público con botón interactivo y selector multi-opción efímero (discord.ui.Select con ephemeral=True) que evita inundar el chat. Pre-selección visual de roles activos, sincronización atómica de altas/bajas y verificación de jerarquías.",
        },
        {
          icon: "📢",
          title: "Anuncios desde Canal Privado",
          description:
            "Comando /anuncio en canal interno de staff con modal de redacción, vista previa interactiva obligatoria (Preview con botones Publicar/Cancelar) antes de difundir, y replicación automática al canal público #anuncios con registro en base de datos.",
        },
      ],
      continuousImprovementNotice:
        "Este bot se irá mejorando continuamente con nuevas funcionalidades, optimizaciones de rendimiento, analíticas de comunidad y herramientas adicionales según las necesidades de SILANTRO LABS.",
    },
  ],
  articles: [
    {
      title: "El comienzo de SILANTRO LABS",
      date: "07.10.2026",
      slug: "el-comienzo-de-silantro-labs",
      tag: "Publicación 01",
      excerpt: "Detrás de Silantro estoy yo: Miguel. Esta es la historia de cómo pasé de 'hackear' juegos a los 15 años a crear mi propio laboratorio de software.",
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
