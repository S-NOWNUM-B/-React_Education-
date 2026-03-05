"use client"

import { useState, useCallback, useEffect } from "react"
import type { Task } from "@/lib/types"
import { TerminalHeader } from "./terminal-header"
import { TaskList } from "./task-list"
import { CommandInput } from "./command-input"
import { StatusBar } from "./status-bar"

const BOOT_LINES = [
  "ЗАДАЧНИК v2.0 — Система управления задачами",
  "Инициализация модулей...",
  "Загрузка данных .............. [OK]",
  "Подключение хранилища ........ [OK]",
  "Проверка целостности ......... [OK]",
  "Система готова к работе.",
  "",
]

export function TerminalManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [booting, setBooting] = useState(true)
  const [bootLines, setBootLines] = useState<string[]>([])

  useEffect(() => {
    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine < BOOT_LINES.length) {
        setBootLines((prev) => [...prev, BOOT_LINES[currentLine]])
        currentLine++
      } else {
        clearInterval(interval)
        setTimeout(() => setBooting(false), 400)
      }
    }, 200)
    return () => clearInterval(interval)
  }, [])

  const addTask = useCallback((text: string) => {
    const now = new Date()
    const time = now.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      done: false,
      time,
    }
    setTasks((prev) => [...prev, newTask])
  }, [])

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    )
  }, [])

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }, [])

  const clearTasks = useCallback(() => {
    setTasks([])
  }, [])

  if (booting) {
    return (
      <div className="flex h-screen flex-col bg-background text-foreground font-mono">
        <div className="crt-overlay" aria-hidden="true" />
        <div className="flex-1 p-6 terminal-glow">
          {bootLines.map((line, i) => (
            <p key={i} className="text-sm leading-relaxed">
              {line || "\u00A0"}
            </p>
          ))}
          <span className="cursor-blink text-foreground">{'_'}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col bg-background text-foreground font-mono">
      <div className="crt-overlay" aria-hidden="true" />
      <TerminalHeader />
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </main>
      <CommandInput onSubmit={addTask} onClear={clearTasks} />
      <StatusBar />
    </div>
  )
}
