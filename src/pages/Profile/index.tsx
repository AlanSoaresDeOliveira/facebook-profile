import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Header';

import {
  Container,
  ContainerImage,
  ImageProfileCover,
  ImageProfilePicture,
  Name,
  PhotoCover,
  PhotoProfile,
  Icon,
  ContainerButton,
  AddStoryButton,
  ProfileSettingButton,
  TextButtonAddStory,
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
                <Icon name="camera" size={18} />
              </PhotoCover>
              <PhotoProfile>
                <Icon name="camera" size={18} />
              </PhotoProfile>
            </ImageProfileCover>
            <Name>Alan Soares</Name>
          </ContainerImage>

          <ContainerButton>
            <AddStoryButton>
              <Icon name="circle-with-plus" size={20} color="white" />
              <TextButtonAddStory>Add to Story</TextButtonAddStory>
            </AddStoryButton>
            <ProfileSettingButton>
              <Icon name="dots-three-horizontal" size={15} />
            </ProfileSettingButton>
          </ContainerButton>
        </ScrollView>
      </Container>
    </>
  );
};

export default Profile;
