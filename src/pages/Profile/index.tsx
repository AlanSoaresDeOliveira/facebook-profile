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
  IconPhotoCover,
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
            <ImageProfileCover
              source={cover}
              imageStyle={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
              <ImageProfilePicture source={alan} />

              <PhotoCover>
                <IconPhotoCover name="camera" size={20} />
              </PhotoCover>
            </ImageProfileCover>
            <Name>Alan Soares</Name>
          </ContainerImage>
        </ScrollView>
      </Container>
    </>
  );
};

export default Profile;
