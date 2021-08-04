import { defaultThemeStyled } from '@common/providers/ThemeProvider/styledthemes'
import {} from 'styled-components/cssprop'

type Theme = typeof defaultThemeStyled
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
