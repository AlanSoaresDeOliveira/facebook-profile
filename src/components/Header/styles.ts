import styled from 'styled-components/native';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import {Platform} from 'react-native';

export const Container = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 33 : 0}px;
  background: #fff;
  width: 100%;
  height: 60px;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  justify-content: center;
  padding: 22px 16px 18px 16px;
  /* border-width: 1px; */
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  margin-left: 20px;
  background: #f5f5f5;
  border-radius: 18px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16.5px;
`;

export const Icon = styled(IconEvil)`
  margin-right: 3px;
`;
