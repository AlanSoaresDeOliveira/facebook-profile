import React from 'react';
import {ScrollView, Text} from 'react-native';
import Header from '../../components/Header';

import {
  Container,
  ContainerImage,
  ImageProfileCover,
  ImageProfilePicture,
  Name,
  PhotoCover,
  IconPhotoCover,
  ContainerButton,
  AddStoryButton,
  ProfileSettingButton,
  IconAddStory,
} from './styles';

import alan from '../../assets/alan.jpg';
import cover from '../../assets/cover.jpg';

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ScrollView>
          <ContainerImage>
            <ImageProfileCover source={cover}>
              <ImageProfilePicture source={alan} />

              <PhotoCover>
                <IconPhotoCover name="camera" size={20} />
              </PhotoCover>
            </ImageProfileCover>
            <Name>Alan Soares</Name>
          </ContainerImage>

          <ContainerButton>
            <AddStoryButton>
              <IconAddStory name="circle-with-plus" size={20} color="white" />
            </AddStoryButton>
            <ProfileSettingButton>
              <Text>...</Text>
            </ProfileSettingButton>
          </ContainerButton>
        </ScrollView>
      </Container>
    </>
  );
};

export default Profile;
