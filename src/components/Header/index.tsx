import React from 'react';
import IconAwe5 from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  HeaderContainer,
  TextInput,
  Icon,
  SearchContainer,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <IconAwe5 name="arrow-left" size={20} />
        <SearchContainer>
          <Icon name="search" size={25} />
          <TextInput placeholder="Search" autoFocus={false} />
        </SearchContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
