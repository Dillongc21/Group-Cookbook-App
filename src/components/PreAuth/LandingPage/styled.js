import glamorous from 'glamorous'
import v from '../../../styles/variables'
import steakImg from '../../../images/steak.jpg'

export const MainContent = glamorous.div({
  background: v.colorBlack30,
  height: '1150px',
  '@media(min-width: 1200px)': {
    height: '850px'
  }
});

export const Image = glamorous.div({
  display: 'inline-block',
  verticalAlign: 'top',
  background: `url(${steakImg}) no-repeat`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  width: '100vw',
  minHeight: '300px',
  '@media(min-width: 1200px)': {
    width: '70%',
    minHeight: '850px'
  }
});

export const SignUp = glamorous.div({
  display: 'inline-block',
  boxSizing: 'border-box',
  background: v.colorBlack30,
  textAlign: 'center',
  borderTop: `15px solid ${v.colorBlack50}`,
  verticalAlign: 'top',
  padding: '2em',
  width: '100vw',
  minHeight: '800px',
  '@media(min-width: 1200px)': {
    width: '30%',
    minHeight: '850px'
  }
});

export const SignUpHeader = glamorous.h2({
  letterSpacing: '3px',
  fontSize: v.fontSizeJumbo,
  fontWeight: v.fontWeightBold,
  color: v.colorBlack90
});

export const CtaButton = glamorous.div ({
  marginTop: '40px',
  marginBottom: '20px'
});

export const FacebookCtaButton = glamorous.div ({
  marginTop: '20px'
});
