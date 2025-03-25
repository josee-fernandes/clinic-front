import { Users } from 'lucide-react'
import Link from 'next/link'

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'

export const CustomSidebarMenu = ({ description }: { description: string }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link href="#">
            <Users className="mr-2" />
            <span>{description}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

CustomSidebarMenu.displayName = 'CustomSidebarMenu'
