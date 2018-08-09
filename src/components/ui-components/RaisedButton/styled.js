import glamorous from 'glamorous'
import { RaisedButton } from 'material-ui/'
import v from '../../../styles/variables'

export const StyledRaisedButton = glamorous(RaisedButton)({
  '&.gc-raisedPrimary': {
    fontWeight: v.fontWeightRegular,
    paddingTop: '11px'
  },
  '&.gc-raisedSecondary': {},
});