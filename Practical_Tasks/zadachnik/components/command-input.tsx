"use client"

import { useState, useRef, useEffect } from "react"

interface CommandInputProps {
  onSubmit: (text: string) => void
  onClear: () => void
}

export function CommandInput({ onSubmit, onClear }: CommandInputProps) {
  const [value, setValue] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return

    if (trimmed.toLowerCase() === "clear" || trimmed.toLowerCase() === "очистить") {
      onClear()
      setValue("")
      setHistory((prev) => [...prev, trimmed])
      setHistoryIndex(-1)
      return
    }

    if (trimmed.toLowerCase() === "help" || trimmed.toLowerCase() === "помощь") {
      setValue("")
      return
    }

    onSubmit(trimmed)
    setHistory((prev) => [...prev, trimmed])
    setHistoryIndex(-1)
    setValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length === 0) return
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setValue(history[newIndex])
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex === -1) return
      const newIndex = historyIndex + 1
      if (newIndex >= history.length) {
        setHistoryIndex(-1)
        setValue("")
      } else {
        setHistoryIndex(newIndex)
        setValue(history[newIndex])
      }
    }
  }

  return (
    <div className="border-t border-border p-4 terminal-glow">
      <div className="mb-2 text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
        <span>{'Введите задачу'}</span>
        <span>{'| "очистить" — удалить все'}</span>
        <span className="hidden sm:inline">{'| ↑↓ — история команд'}</span>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-foreground shrink-0">{'user@tasks:~$'}</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-foreground caret-foreground focus:outline-none placeholder:text-terminal-dim font-mono"
          placeholder="ввести задачу..."
          autoComplete="off"
          spellCheck={false}
          aria-label="Командная строка для добавления задач"
        />
        <span className="cursor-blink text-foreground">{'_'}</span>
      </form>
    </div>
  )
}
