import { Command, Plus } from 'lucide-react'
import Link from 'next/link'
import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import { CustomSidebarMenu } from './custom-sidebar-menu'

export const AppSidebar: React.FC<ComponentProps<typeof Sidebar>> = ({
  ...props
}) => {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="flex aspect-square size-12 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-8" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Demetrius Residential
                  </span>
                  <span className="truncate text-xs">Yellow House</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="mt-2">
        <CustomSidebarMenu description="MENU" />

        <Button className="flex w-full items-center bg-blue-600 text-white hover:bg-blue-700">
          <Plus className="mr-2" /> Novo Paciente
        </Button>

        <CustomSidebarMenu description="MENU1" />
      </SidebarContent>
    </Sidebar>
  )
}

AppSidebar.displayName = 'AppSidebar'
