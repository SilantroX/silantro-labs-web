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
  slotName?: string
  format?: AdFormat
  className?: string
  clientId?: string
}

export function AdSlot({
  slotId,
  slotName,
  format = "horizontal",
  className,
  clientId,
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement | null>(null)
  const pushedRef = useRef(false)

  const activeClientId =
    clientId || process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-1982658636778600"

  const cleanSlotId = slotId?.trim()
  const isNumericSlot = Boolean(cleanSlotId && /^\d{8,16}$/.test(cleanSlotId))

  useEffect(() => {
    if (pushedRef.current) return

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
  }, [])

  return (
    <aside
      className={cn(
        "ad-slot-container my-6 flex flex-col items-center justify-center mx-auto w-full transition-all overflow-hidden",
        className
      )}
      data-ad-slot-name={slotName || cleanSlotId || "AdSense"}
      aria-label="Espacio de publicidad"
    >
      <ins
        ref={adRef}
        className="adsbygoogle block w-full"
        style={{ display: "block" }}
        data-ad-client={activeClientId}
        {...(isNumericSlot ? { "data-ad-slot": cleanSlotId } : {})}
        data-ad-format={format === "rectangle" ? "rectangle" : "auto"}
        data-full-width-responsive="true"
      />
    </aside>
  )
}
