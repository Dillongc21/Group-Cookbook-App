import glamorous from 'glamorous'
import v from '../../../styles/variables'

export const AboutWrapper = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100vw'
});

export const AboutHeader = glamorous.span({
  color: v.colorBlack80,
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: v.fontWeightThin,
  width: '100vw',
  margin: '50px',
  fontSize: v.fontSizeJumbo
});

export const AboutItems = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100vw'
});

export const AboutItem = glamorous.div({
  flex: 1,
  maxWidth: '300px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 50px 50px 50px'
});

export const ItemHeader = glamorous.div({
  color: v.colorPrimaryDark,
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: v.fontWeightNormal,
  fontSize: v.fontSizeXlarge,
  width: '100%'
});

