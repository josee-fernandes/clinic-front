import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import Header from "@/components/app-header"
import MainContent from "@/components/app-content"
import { ThemeProvider } from "@/components/theme-provider"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (

    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>

    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
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