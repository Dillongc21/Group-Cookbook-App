import { css } from 'glamor'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

export const globalStyles = css.global('html, body', {
  height: '100%',
  margin: 0,
  padding: 0,
  fontFamily: 'Roboto, sans-serif',
  width: '100%',
  'div': {
    boxSizing: 'border-box'
  },
  'a': {
    textDecoration: 'none'
  }
});