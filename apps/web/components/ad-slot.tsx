"use client"

import { useEffect, useRef } from "react"
import { cn } from "@workspace/ui/lib/utils"

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>
  }
}

export type AdFormat = "horizontal" | "leaderboard" | "rectangle" | "in-article" | "auto"

interface AdSlotProps {
  slotId?: string
  format?: AdFormat
  className?: string
  label?: boolean
  clientId?: string
}

// Strict height & width definitions guaranteeing Zero Cumulative Layout Shift (CLS = 0)
const FORMAT_CLASSES: Record<AdFormat, string> = {
  horizontal: "min-h-[100px] sm:min-h-[120px] w-full max-w-4xl",
  leaderboard: "min-h-[90px] w-full max-w-[728px]",
  rectangle: "min-h-[250px] w-[300px] sm:w-[336px] max-w-full",
  "in-article": "min-h-[120px] sm:min-h-[160px] w-full max-w-[680px]",
  auto: "min-h-[100px] w-full",
}

export function AdSlot({
  slotId = "default-slot",
  format = "horizontal",
  className,
  label = true,
  clientId,
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement | null>(null)
  const pushedRef = useRef(false)

  const activeClientId =
    clientId || process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-1982658636778600"

  const isConfigured = Boolean(
    activeClientId &&
    activeClientId !== "ca-pub-XXXXXXXXXXXXXXXX" &&
    slotId &&
    slotId !== "default-slot"
  )

  useEffect(() => {
    if (!isConfigured || pushedRef.current) return

    try {
      if (typeof window !== "undefined" && adRef.current) {
        const alreadyFilled = adRef.current.getAttribute("data-adsbygoogle-status")
        if (!alreadyFilled) {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
          pushedRef.current = true
        }
      }
    } catch (err) {
      console.debug("AdSense push notification:", err)
    }
  }, [isConfigured])

  return (
    <aside
      className={cn(
        "ad-slot-container my-8 flex flex-col items-center justify-center mx-auto w-full",
        className
      )}
      aria-label="Espacio de publicidad"
    >
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1.5 select-none">
          Publicidad
        </span>
      )}
      <div
        className={cn(
          "relative flex items-center justify-center border border-dashed border-black/15 bg-black/[0.015] text-center overflow-hidden transition-all rounded-2xl w-full",
          FORMAT_CLASSES[format]
        )}
      >
        {isConfigured ? (
          <ins
            ref={adRef}
            className="adsbygoogle block w-full"
            style={{ display: "block" }}
            data-ad-client={activeClientId}
            data-ad-slot={slotId}
            data-ad-format={format === "rectangle" ? "rectangle" : "auto"}
            data-full-width-responsive="true"
          />
        ) : (
          <div className="p-4 sm:p-6 font-mono text-[11px] text-muted-foreground flex flex-col items-center gap-1.5 select-none">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40 animate-pulse" />
              <span className="tracking-wider uppercase font-medium text-foreground/80">
                [ Espacio Publicitario AdSense ]
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground/60">
              Formato: {format} · Zero Layout Shift (CLS = 0)
            </span>
            {slotId && slotId !== "default-slot" && (
              <span className="text-[9px] text-muted-foreground/40">
                Slot: {slotId}
              </span>
            )}
          </div>
        )}
      </div>
    </aside>
  )
}
