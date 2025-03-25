import { Users } from 'lucide-react'

const user: IUser = {
  name: 'Brunobg',
  email: 'bruno@gmail.com',
  avatar: '/path/to/avatar.jpg',
}

const navMain: INavMenu[] = [
  {
    title: 'MENU 01',
    url: '#',
    icon: Users,
  },
  {
    title: 'MENU 02',
    url: '#',
    icon: Users,
  },
  {
    title: 'MENU 03',
    url: '#',
    icon: Users,
  },
]

export const data = {
  user,
  navMain,
}
