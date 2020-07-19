import styled from 'styled-components/native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 0px 16px 0px 16px;
`;

export const ContainerImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 100px;
  padding-top: 15px;
`;

export const ImageProfileCover = styled.ImageBackground`
  width: 100%;
  height: 227px;
  align-items: center;
  position: relative;
`;

export const ImageProfilePicture = styled.Image`
  width: 180px;
  height: 180px;
  margin-top: 137px;
  border-radius: 100px;
  position: absolute;
  border-width: 5px;
  border-color: #fff;
`;

export const PhotoCover = styled.View`
  background: #ccc;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-left: 82%;
  margin-top: 177px;
  justify-content: center;
  align-items: center;
`;

export const IconPhotoCover = styled(IconEntypo)``;

export const PhotoProfile = styled.View`
  background: red;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 313px;
  margin-top: 177px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 30px;
  /* font-weight: bold; */
  color: #000;
  margin-top: 100px;
`;
