export function StatusBar() {
  return (
    <div className="border-t border-border px-4 py-1.5 text-xs text-muted-foreground flex items-center justify-between terminal-glow">
      <span>{'РЕЖИМ: ВВОД'}</span>
      <span>{'UTF-8'}</span>
      <span>{'ЗАДАЧНИК v2.0'}</span>
    </div>
  )
}
