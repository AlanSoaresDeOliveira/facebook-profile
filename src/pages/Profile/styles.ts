import styled from 'styled-components/native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 0px 16px 0px 16px;
`;

export const ContainerImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 17px 0px 20px;
  /* padding-top: 15px; */
`;

export const ImageProfileCover = styled.ImageBackground.attrs({
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
})`
  width: 100%;
  height: 227px;
  align-items: center;
  position: relative;
`;

export const ImageProfilePicture = styled.Image`
  width: 180px;
  height: 180px;
  margin-top: 137px;
  border-radius: 90px;
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

export const Icon = styled(IconEntypo)``;

export const PhotoProfile = styled.View`
  background: #d4d8e8;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  margin-left: 35%;
  margin-top: 65px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 28px;
  /* font-weight: bold; */
  color: #000;
  margin-top: 100px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;

export const AddStoryButton = styled(RectButton)`
  width: 82.5%;
  height: 37px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-direction: row;
  background: #1877f2;
`;

export const TextButtonAddStory = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-left: 4px;
`;

export const ProfileSettingButton = styled(RectButton)`
  width: 15%;
  height: 36px;
  background: #d4d8e8;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
export const SectionInfo = styled.View`
  flex: 1;
  padding-bottom: 17px;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;

export const ContainerInfo = styled.View`
  padding: 10px 0px 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const ContexInfo = styled.View`
  flex: 1;
  padding-left: 10px;
  /* border-width: 0.5px; */
`;

export const TextInfo = styled.Text`
  font-size: 17px;
`;

export const EditDetailsButton = styled(RectButton)`
  width: 100%;
  height: 37px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-direction: row;
  background: #e5f3ff;
`;

export const TextButtonEditDetails = styled.Text`
  color: #1877f2;
  font-size: 15px;
`;

export const SectionFriends = styled.View`
  flex: 1;
  border-width: 0.5px;
  border-color: red;
  margin-top: 15px;
`;

export const ContainerFriends = styled.View`
  border-width: 0.5px;
  border-color: blue;
  margin-bottom: 5px;
`;

export const ContainerTitleFindFriends = styled.View`
  border-width: 0.5px;
  border-color: green;
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleFriendsView = styled.View``;

export const TitleFriends = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CountFriend = styled.Text`
  color: gray;
`;
export const TextFindFriends = styled.Text`
  font-size: 16px;
  color: #1877f2;
`;
