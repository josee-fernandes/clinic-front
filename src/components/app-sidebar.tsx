import { Users, Plus, Settings, Command } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button" // Certifique-se de que o caminho está correto
import SidebarMenuComponent from "./SidebarMenuComponent"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-12 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-8" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Demetrius Residential</span>
                  <span className="truncate text-xs">Yellow House</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="mt-2">
        <SidebarMenuComponent description="MENU" />

        <Button className="flex items-center bg-blue-600 text-white hover:bg-blue-700 w-full"
        >
          <Plus className="mr-2" /> Novo Paciente
        </Button>
        
        
        <SidebarMenuComponent description="MENU1" />
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar