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
  padding: 22px 20px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 28px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  height: 37px;
  padding: 0 16px;
  margin-left: 20px;
  background: #f5f5f5;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
`;

export const Icon = styled(IconEvil)`
  margin-right: 4px;
`;
