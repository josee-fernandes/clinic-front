import { useEffect, useState } from 'react'

import { getUser } from '@/api/get-user'
import { NavUser } from '@/components/app-user'

export const AppHeader: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null)

  const handleGetUser = async () => {
    try {
      const response = await getUser()

      setUser(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleGetUser()
  }, [])

  return (
    <header className="flex items-center justify-between p-4 text-sidebar-primary-foreground">
      <div className="flex-1">
        {/* Espaço para o título ou outros elementos, se necessário */}
      </div>
      <div className="flex items-center">{user && <NavUser user={user} />}</div>
    </header>
  )
}

AppHeader.displayName = 'AppHeader'
