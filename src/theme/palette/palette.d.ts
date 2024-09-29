//This file is from Design System
import '@mui/material/styles/createPalette';
import { PaletteColor, TypeText } from '@mui/material/styles/createPalette';

interface ICommonPaletteColorOptions extends PaletteColor {
  main?: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}

declare module '@mui/material' {
  export interface Color {
    main?: string;
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    7?: string;
    8?: string;
    9?: string;
    10?: string;
    11?: string;
    12?: string;
    13?: string;
    14?: string;
    15?: string;
    16?: string;
  }
}

declare module '@mui/material/styles' {
  export interface Palette {
    primary: ICommonPaletteColorOptions;
    secondary: ICommonPaletteColorOptions;
    error: ICommonPaletteColorOptions;
    warning: ICommonPaletteColorOptions;
    info: ICommonPaletteColorOptions;
    inherit: ICommonPaletteColorOptions;
    default: ICommonPaletteColorOptions;
    success: ICommonPaletteColorOptions;
    grey: ICommonPaletteColorOptions;
    shadow: ICommonPaletteColorOptions;
    text: Partial<TypeText>;
    divider: string;
    background: Partial<TypeBackground>;
  }

  // allow configuration using `createTheme`
  export interface PaletteOptions {
    primary: ICommonPaletteColorOptions;
    secondary: ICommonPaletteColorOptions;
    error: ICommonPaletteColorOptions;
    warning: ICommonPaletteColorOptions;
    info?: ICommonPaletteColorOptions;
    inherit: ICommonPaletteColorOptions;
    success: ICommonPaletteColorOptions;
    grey: ICommonPaletteColorOptions;
    text: Partial<TypeText>;
    divider: string;
    shadow: ICommonPaletteColorOptions;
    background: Partial<TypeBackground>;
    default: ICommonPaletteColorOptions;
  }
  export interface TypeBackground {
    main: string;
    default: string;
    paper: string;
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    shadow?: string;
    shadowInset?: string;
  }
}

declare module '@mui/material/styles/createPalette' {
  export interface PaletteColor {
    main?: string;
    16?: string;
    15?: string;
    14?: string;
    13?: string;
    12?: string;
    11?: string;
    10?: string;
    9?: string;
    8?: string;
    7?: string;
    6?: string;
    5?: string;
    4?: string;
    3?: string;
    2?: string;
    1?: string;
  }
  export interface SimplePaletteColorOptions {
    main?: string;
    16?: string;
    15?: string;
    14?: string;
    13?: string;
    12?: string;
    11?: string;
    10?: string;
    9?: string;
    8?: string;
    7?: string;
    6?: string;
    5?: string;
    4?: string;
    3?: string;
    2?: string;
    1?: string;
  }

  export interface TypeText {
    primary?: string;
    secondary?: string;
    disabled?: string;
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    7?: string;
    8?: string;
    9?: string;
    10?: string;
    11?: string;
    12?: string;
    13?: string;
    14?: string;
    15?: string;
    16?: string;
  }
}
