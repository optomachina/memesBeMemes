'use client'

interface NavigationProps {
  emoji: string
}

export function Navigation({ emoji }: NavigationProps) {
  return (
    <nav className="nav">
      <a href="#top" style={{ color: '#000' }}>{emoji}</a>
      <a href="#shop">shop</a>
    </nav>
  )
} 