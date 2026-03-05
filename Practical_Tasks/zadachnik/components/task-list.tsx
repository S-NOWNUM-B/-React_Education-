"use client"

import type { Task } from "@/lib/types"

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground terminal-glow">
        <p>{'>>> Список задач пуст.'}</p>
        <p className="mt-1 text-xs">{'>>> Введите команду ниже для добавления задачи.'}</p>
      </div>
    )
  }

  const completed = tasks.filter((t) => t.done).length
  const total = tasks.length

  return (
    <div className="flex-1 overflow-y-auto p-4 terminal-glow">
      <div className="mb-3 text-xs text-muted-foreground">
        <span>{'ВСЕГО: ' + total}</span>
        <span className="mx-3">{'|'}</span>
        <span>{'ВЫПОЛНЕНО: ' + completed}</span>
        <span className="mx-3">{'|'}</span>
        <span>{'ОСТАЛОСЬ: ' + (total - completed)}</span>
      </div>

      <div className="border border-border">
        {/* Table header */}
        <div className="border-b border-border px-3 py-2 text-xs text-muted-foreground flex">
          <span className="w-8 shrink-0">{'#'}</span>
          <span className="w-12 shrink-0">{'СТАТ'}</span>
          <span className="flex-1">{'ЗАДАЧА'}</span>
          <span className="w-20 shrink-0 text-right hidden sm:block">{'ВРЕМЯ'}</span>
          <span className="w-10 shrink-0 text-right">{'УДЛ'}</span>
        </div>

        {/* Task rows */}
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`border-b border-terminal-dim px-3 py-2 text-sm flex items-center group transition-colors hover:bg-terminal-dim/30 ${
              task.done ? "text-muted-foreground" : "text-foreground"
            }`}
          >
            <span className="w-8 shrink-0 text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>

            <button
              onClick={() => onToggle(task.id)}
              className="w-12 shrink-0 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              aria-label={task.done ? "Отметить как невыполненное" : "Отметить как выполненное"}
            >
              {task.done ? (
                <span className="text-foreground">{'[x]'}</span>
              ) : (
                <span className="text-muted-foreground">{'[ ]'}</span>
              )}
            </button>

            <span
              className={`flex-1 truncate ${task.done ? "line-through" : ""}`}
            >
              {task.text}
            </span>

            <span className="w-20 shrink-0 text-right text-xs text-muted-foreground hidden sm:block">
              {task.time}
            </span>

            <span className="w-10 shrink-0 text-right">
              <button
                onClick={() => onDelete(task.id)}
                className="text-xs text-destructive opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-ring"
                aria-label={'Удалить задачу: ' + task.text}
              >
                {'[DEL]'}
              </button>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 text-xs text-muted-foreground">
        <p>{'--- КОНЕЦ СПИСКА ---'}</p>
      </div>
    </div>
  )
}
