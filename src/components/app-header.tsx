import * as React from "react"
import { NavUser } from "@/components/app-user"
import { data } from "@/components/data"
import { useTheme } from "next-themes"

export function AppHeader() {
  return (
    <header className="flex items-center justify-between p-4 text-sidebar-primary-foreground">
      <div className="flex-1">
        {/* Espaço para o título ou outros elementos, se necessário */}
      </div>
      <div className="flex items-center">
        <NavUser user={data.user} />
      </div>
    </header>
  )
}

export default AppHeader