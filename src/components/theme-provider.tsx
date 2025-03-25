import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ComponentProps } from 'react'

export const ThemeProvider: React.FC<
  ComponentProps<typeof NextThemesProvider>
> = ({ children, ...props }) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
)

ThemeProvider.displayName = 'ThemeProvider'
