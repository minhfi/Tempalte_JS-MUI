import { THEME } from '.'
import { Colors } from './colors'
import { Typography } from './typography'

export const validThemeMode = (mode) => mode && [THEME.LIGHT, THEME.DARK].includes(mode)
  ? mode
  : THEME.LIGHT

export const toCssVariables = (mode) => {
  const paletteMode = validThemeMode(mode)

  return {
    '--color-white': Colors.white,
    '--color-black': Colors.black,
    '--color-primary-50': Colors.primary[50],
    '--color-primary-100': Colors.primary[100],
    '--color-primary-200': Colors.primary[200],
    '--color-primary-300': Colors.primary[300],
    '--color-primary-400': Colors.primary[400],
    '--color-primary-500': Colors.primary[500],
    '--color-primary-600': Colors.primary[600],
    '--color-primary-700': Colors.primary[700],
    '--color-primary-800': Colors.primary[800],
    '--color-primary-900': Colors.primary[900],
    '--color-positive-50': Colors.positive[50],
    '--color-positive-100': Colors.positive[100],
    '--color-positive-200': Colors.positive[200],
    '--color-positive-300': Colors.positive[300],
    '--color-positive-400': Colors.positive[400],
    '--color-positive-500': Colors.positive[500],
    '--color-positive-600': Colors.positive[600],
    '--color-positive-700': Colors.positive[700],
    '--color-positive-800': Colors.positive[800],
    '--color-positive-900': Colors.positive[900],
    '--color-negative-50': Colors.negative[50],
    '--color-negative-100': Colors.negative[100],
    '--color-negative-200': Colors.negative[200],
    '--color-negative-300': Colors.negative[300],
    '--color-negative-400': Colors.negative[400],
    '--color-negative-500': Colors.negative[500],
    '--color-negative-600': Colors.negative[600],
    '--color-negative-700': Colors.negative[700],
    '--color-negative-800': Colors.negative[800],
    '--color-negative-900': Colors.negative[900],
    '--color-orange-50': Colors.orange[50],
    '--color-orange-100': Colors.orange[100],
    '--color-orange-200': Colors.orange[200],
    '--color-orange-300': Colors.orange[300],
    '--color-orange-400': Colors.orange[400],
    '--color-orange-500': Colors.orange[500],
    '--color-orange-600': Colors.orange[600],
    '--color-orange-700': Colors.orange[700],
    '--color-orange-800': Colors.orange[800],
    '--color-orange-900': Colors.orange[900],
    '--color-cyan-50': Colors.cyan[50],
    '--color-cyan-100': Colors.cyan[100],
    '--color-cyan-200': Colors.cyan[200],
    '--color-cyan-300': Colors.cyan[300],
    '--color-cyan-400': Colors.cyan[400],
    '--color-cyan-500': Colors.cyan[500],
    '--color-cyan-600': Colors.cyan[600],
    '--color-cyan-700': Colors.cyan[700],
    '--color-cyan-800': Colors.cyan[800],
    '--color-cyan-900': Colors.cyan[900],
    '--color-purple-50': Colors.purple[50],
    '--color-purple-100': Colors.purple[100],
    '--color-purple-200': Colors.purple[200],
    '--color-purple-300': Colors.purple[300],
    '--color-purple-400': Colors.purple[400],
    '--color-purple-500': Colors.purple[500],
    '--color-purple-600': Colors.purple[600],
    '--color-purple-700': Colors.purple[700],
    '--color-purple-800': Colors.purple[800],
    '--color-purple-900': Colors.purple[900],
    '--color-neutral-theme-50': Colors[`neutral/${paletteMode}-theme`][50],
    '--color-neutral-theme-100': Colors[`neutral/${paletteMode}-theme`][100],
    '--color-neutral-theme-200': Colors[`neutral/${paletteMode}-theme`][200],
    '--color-neutral-theme-250': Colors[`neutral/${paletteMode}-theme`][250],
    '--color-neutral-theme-300': Colors[`neutral/${paletteMode}-theme`][300],
    '--color-neutral-theme-400': Colors[`neutral/${paletteMode}-theme`][400],
    '--color-neutral-theme-500': Colors[`neutral/${paletteMode}-theme`][500],
    '--color-neutral-theme-600': Colors[`neutral/${paletteMode}-theme`][600],
    '--color-neutral-theme-700': Colors[`neutral/${paletteMode}-theme`][700],
    '--color-neutral-theme-800': Colors[`neutral/${paletteMode}-theme`][800],
    '--color-neutral-theme-900': Colors[`neutral/${paletteMode}-theme`][900]
  }
}

export const genThemeWithPaletteMode = (paletteMode) => ({
  colors: toCssVariables(paletteMode),
  palette: {
    mode: THEME.LIGHT, /** paletteMode */
    primary: {
      main: toCssVariables(paletteMode)['--color-primary-400']
    },
    text: {
      primary: toCssVariables(paletteMode)['--color-neutral-theme-700']
    }
  },
  typography: Typography,
  spacing: 8
})
