import { LogOut, Settings } from 'lucide-react'
import { useRouter } from 'next/router'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ThemeToggle } from './theme-toggle'
import Image from 'next/image'

interface INavUser {
  user: IUser
}

export const NavUser: React.FC<INavUser> = ({
  user,
}) => {
  const router = useRouter()

  const handleSettings = () => {
    router.push('/settings')
  }

  const handleLogout = () => {
    router.push('/logout')
  }

  return (
    <div className="flex items-center space-x-2">
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center focus:outline-none">
            <Avatar className="size-8 rounded-full">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-full relative">
                <Image
                  src="/favicon.ico"
                  alt="Fallback"
                  className="size-full rounded-full"
                  fill
                />
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="mt-2">
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="size-8 rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-full relative">
                  <Image
                    src="/favicon.ico"
                    alt="Fallback"
                    className="size-full rounded-full"
                    fill
                  />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-gray-500">{user.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={handleSettings}>
              <Settings className="mr-2 size-4" />
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={handleLogout}>
            <LogOut className="mr-2 size-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

NavUser.displayName = 'NavUser'
