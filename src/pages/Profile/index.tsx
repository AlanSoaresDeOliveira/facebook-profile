import React from 'react';
import {ScrollView, View} from 'react-native';
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
  ContainerInfo,
  StudyInfo,
  StudyFromText,
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

          <ContainerInfo>
            <View style={{borderWidth: 0.5, borderColor: 'red'}}>
              <Icon name="graduation-cap" size={25} />
            </View>
            <StudyInfo>
              <StudyFromText>
                Studies at Fatec de Presidente Prudente
              </StudyFromText>
            </StudyInfo>
          </ContainerInfo>
          <ContainerInfo>
            <View style={{borderWidth: 0.5, borderColor: 'red'}}>
              <Icon name="home" size={25} />
            </View>
            <StudyInfo>
              <StudyFromText>Lives in São Paulo, Brazil</StudyFromText>
            </StudyInfo>
          </ContainerInfo>
          <ContainerInfo>
            <View style={{borderWidth: 0.5, borderColor: 'red'}}>
              <Icon name="location-pin" size={25} />
            </View>
            <StudyInfo>
              <StudyFromText>From Pirapozinho</StudyFromText>
            </StudyInfo>
          </ContainerInfo>
          <ContainerInfo>
            <View style={{borderWidth: 0.5, borderColor: 'red'}}>
              <Icon name="clock" size={25} />
            </View>
            <StudyInfo>
              <StudyFromText>Joined June 2012</StudyFromText>
            </StudyInfo>
          </ContainerInfo>
          <ContainerInfo>
            <View style={{borderWidth: 0.5, borderColor: 'red'}}>
              <Icon name="dots-three-horizontal" size={25} />
            </View>
            <StudyInfo>
              <StudyFromText>See Your About Info</StudyFromText>
            </StudyInfo>
          </ContainerInfo>
        </ScrollView>
      </Container>
    </>
  );
};

export default Profile;
