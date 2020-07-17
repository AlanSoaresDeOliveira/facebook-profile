import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ContainerImage = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0px 20px 80px 20px;
  padding-top: 15px;
`;

export const ImageProfileCover = styled.ImageBackground`
  width: 100%;
  height: 240px;
  border-radius: 100px;
  align-items: center;
  position: relative;
`;

export const ImageProfilePicture = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 140px;
  border-radius: 100px;
  position: absolute;
  border-width: 5px;
  border-color: #fff;
`;

export const IconPhotoCover = styled.View`
  background: #ccc;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 290px;
  margin-top: 180px;
`;

export const Name = styled.Text`
  font-size: 18px;
  background: #000;
  color: #fff;
  margin-top: 0px;
`;
