import glamorous from 'glamorous'
import v from '../../styles/variables'

export const Content = glamorous.div({
  display: 'flex'
});

export const SignUp = glamorous.div({
  background: v.colorBlack30,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30%',
  height: '100%'
});
export const Image = glamorous.div({
  background: 'url("https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg") no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  width: '70%',
  height: '700px'
});