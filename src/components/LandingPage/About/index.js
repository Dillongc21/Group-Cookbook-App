import React, { PureComponent } from 'react'
import * as Styled from './styled'
import { colorPrimaryDark } from '../../../styles/variables'
import UserPlusIcon from 'react-icons/lib/fa/user-plus'
import CookBookIcon from 'react-icons/lib/go/book'
import GroupIcon from 'react-icons/lib/fa/group'

const iconStyles = {
  color: colorPrimaryDark,
  height: '75px',
  marginBottom: '10px',
  width: '75px',
  alignSelf: 'center'
};

export default class Home extends PureComponent {
  render() {
    return (
      <Styled.AboutWrapper>
        <Styled.AboutHeader>How does GroupCook work?</Styled.AboutHeader>
        <Styled.AboutItems>

          <Styled.AboutItem>
            <div><UserPlusIcon style={iconStyles}/></div>
            <Styled.ItemHeader>Create an account for free</Styled.ItemHeader>
          </Styled.AboutItem>

          <Styled.AboutItem>
            <div><CookBookIcon style={iconStyles}/></div>
            <Styled.ItemHeader>Start a cookbook and/or join an existing one</Styled.ItemHeader>
          </Styled.AboutItem>

          <Styled.AboutItem>
            <div><GroupIcon style={iconStyles}/></div>
            <Styled.ItemHeader>Collaborate and share recipes with your group</Styled.ItemHeader>
          </Styled.AboutItem>

        </Styled.AboutItems>
      </Styled.AboutWrapper>
    );
  }
}
