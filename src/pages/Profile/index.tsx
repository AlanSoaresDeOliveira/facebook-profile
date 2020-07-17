import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../../components/Header';

import {
  Container,
  ContainerImage,
  ImageProfileCover,
  ImageProfilePicture,
  Name,
  IconPhotoCover,
} from './styles';

import alan from '../../assets/alan.jpg';
import cover from '../../assets/cover.jpg';

const Profile: React.FC = () => {
  return (
    <Container>
      <Header />
      <ScrollView>
        <ContainerImage>
          <ImageProfileCover source={cover}>
            <ImageProfilePicture source={alan} />
            <IconPhotoCover />
          </ImageProfileCover>
        </ContainerImage>
        <Name>Alan Soares de Olivera</Name>
      </ScrollView>
    </Container>
  );
};

export default Profile;
