"use client"

import { useEffect, useState } from "react"

export function TerminalHeader() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="border-b border-border p-4 terminal-glow terminal-flicker">
      <div className="flex items-center justify-between">
        <div>
          <pre className="text-foreground text-xs leading-tight sm:text-sm" aria-hidden="true">
{`  ______  ___   ___   ___   ___  __  __ __  __ __ __  __
 /_  __/ / _ | / _ \\ / _ | /  _|/ / / //  |/  // //  |/  /
  / /   / __ |/ // // __ |_/ / / /_/ // /|_/ // // /|_/ / 
 /_/   /_/ |_/____//_/ |_/___/ \\____//_/  /_//_//_/  /_/  `}
          </pre>
          <p className="text-muted-foreground text-xs mt-1">
            {'>>> ЗАДАЧНИК v2.0 | Система управления задачами'}
          </p>
        </div>
        <div className="text-right text-xs text-muted-foreground hidden sm:block">
          <p>{time}</p>
          <p className="mt-1">{'СЕАНС: #' + Math.floor(Math.random() * 9000 + 1000).toString()}</p>
        </div>
      </div>
    </header>
  )
}
