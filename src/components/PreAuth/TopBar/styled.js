import glamorous from 'glamorous';
import v from '../../../styles/variables';

export const TopBar = glamorous.div({
  alignItems: 'center',
  backgroundColor: v.colorWhite,
  display: 'flex',
  margin: '0 10px 10px',
  '@media(min-width: 1100px)':{
    margin: '0 100px 50px'
  },
  '@media(min-width: 600px)':{
    margin: '0 50px 25px'
  },
  justifyContent: 'space-between',
});

export const Title = glamorous.span({
  color: v.colorWhite,
  boxShadow: `0px 0px 10px 3px ${v.colorBlack30}`,
  background: v.colorPrimary,
  padding: '50px 10px 30px',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: v.fontSizeLarge,
  letterSpacing: '5.08px',
  fontWeight: v.fontWeightRegular
});
