import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { MainContent } from '@/components/app-content'
import { AppHeader } from '@/components/app-header'
import { AppSidebar } from '@/components/app-sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <MainContent />
        </SidebarInset>
        <main>
          <Component {...pageProps} />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}

App.displayName = 'App'

export default App
