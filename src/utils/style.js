import styledNormalize from 'styled-normalize'
import { css } from 'styled-components'

// Example palette Material 500
// https://material.io/guidelines/style/color.html
const palette = {
  red: "#F44336",
  pink: "#E91E63",
  purple: "#9C27B0",
  deeppurple: "#673AB7",
  cyan: "#00BCD4",
  indigo: "#3F51B5",
  lightblue: "#03A9F4",
  blue: "#2196F3",
  green: "#4CAF50",
  teal: "#009688",
  orange: "#FF9800",
  deeporange: "#FF5722",
  brown: "#795548",
  darkgray: "#4f4f4f",
  bluegray: "#607D8B",
  lightgreen: '#8BC34A',
  lime: '#CDDC39',
  yellow: '#FFEB3B',
  amber: '#FFC107',
  lightgray: '#d8d8d8',
  gray: '#9E9E9E',
  whitesmoke: '#fafafa'
}

export const theme = {
  danger: palette.red,
  link: palette.blue,
  background: palette.whitesmoke,
  shadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'
}

export const normalize = styledNormalize

export const defaultFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  '"Helvetica Neue"',
  'sans-serif'
].join()

export const typography = css`
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: ${theme.link};

      &:hover,
      &:active,
      &:focus {
        text-decoration: underline;
      }
    }
`
