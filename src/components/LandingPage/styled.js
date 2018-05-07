import glamorous from 'glamorous'
import v from '../../styles/variables'
import steakImg from '../../images/steak.jpg'

export const MainContent = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  background: v.colorBlack30,
  height: 'calc(100vh - 180px)',

});

export const Image = glamorous.div({
  background: `url(${steakImg}) no-repeat`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  width: '70%',
  height: '100%'
});

export const SignUp = glamorous.div({
  boxSizing: 'border-box',
  background: v.colorBlack30,
  textAlign: 'center',
  width: '30%',
  height: '100%',
  borderTop: `15px solid ${v.colorBlack50}`,
  padding: '2em',
  '@media(maxHeight: 850px)': {
    width: '100vw',
    height: '800px'
  }
});

export const SignUpHeader = glamorous.h2({
  letterSpacing: '3px',
  fontSize: v.fontSizeJumbo,
  fontWeight: v.fontWeightBold,
  color: v.colorBlack90
});
