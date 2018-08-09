import glamorous from 'glamorous'
import v from '../../../styles/variables'

export const SignInWrapper = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: 'calc(100vh - 130px)',
  boxSizing: 'border-box'
}, 'SignInWrapper');

export const Content = glamorous.div({
  maxWidth: '500px',
  margin: '10px',
  padding: '100px',
  backgroundColor: v.colorPrimaryLightest
}, 'Content');

export const SignInBtn = glamorous.div({
  marginTop: '40px'
}, 'SignInBtn');