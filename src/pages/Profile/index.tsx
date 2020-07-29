import React from 'react';
import {ScrollView, Text} from 'react-native';
import Header from '../../components/Header';

import api from '../../services/api';

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
  ContexInfo,
  TextInfo,
  EditDetailsButton,
  TextButtonEditDetails,
  SectionInfo,
  SectionFriends,
  ContainerFriends,
  ContainerTitleFindFriends,
  TitleFriendsView,
  TitleFriends,
  CountFriend,
  TextFindFriends,
  ImageFriendView,
  ImageFriend,
  NameFriendText,
  SeeAllFriendsButton,
  SeeAllFriendsText,
} from './styles';

import alan from '../../assets/alan.jpg';
import cover from '../../assets/cover.jpg';

import angela from '../../assets/angela.jpg';
import jeff from '../../assets/jeff.jpg';
import obama from '../../assets/obama.jpg';
import stevejobs from '../../assets/stevejobs.jpg';
import timcook from '../../assets/timcook.jpg';
import mark from '../../assets/mark.jpg';

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
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

          <SectionInfo>
            <ContainerInfo>
              <>
                <Icon name="graduation-cap" size={21} color="gray" />
              </>
              <ContexInfo>
                <TextInfo>
                  Studies at{' '}
                  <Text style={{fontWeight: 'bold'}}>
                    Fatec de Presidente Prudente
                  </Text>
                </TextInfo>
              </ContexInfo>
            </ContainerInfo>
            <ContainerInfo>
              <>
                <Icon name="home" size={21} color="gray" />
              </>
              <ContexInfo>
                <TextInfo>
                  Lives in{' '}
                  <Text style={{fontWeight: 'bold'}}>São Paulo, Brazil</Text>
                </TextInfo>
              </ContexInfo>
            </ContainerInfo>
            <ContainerInfo>
              <>
                <Icon name="location-pin" size={21} color="gray" />
              </>
              <ContexInfo>
                <TextInfo>
                  From <Text style={{fontWeight: 'bold'}}>Pirapozinho</Text>
                </TextInfo>
              </ContexInfo>
            </ContainerInfo>
            <ContainerInfo>
              <>
                <Icon name="clock" size={21} color="gray" />
              </>
              <ContexInfo>
                <TextInfo>Joined June 2012</TextInfo>
              </ContexInfo>
            </ContainerInfo>
            <ContainerInfo>
              <>
                <Icon name="dots-three-horizontal" size={21} color="gray" />
              </>
              <ContexInfo>
                <TextInfo>See Your About Info</TextInfo>
              </ContexInfo>
            </ContainerInfo>
            <EditDetailsButton>
              <TextButtonEditDetails>Edit Public Details</TextButtonEditDetails>
            </EditDetailsButton>
          </SectionInfo>
          <SectionFriends>
            <ContainerTitleFindFriends>
              <TitleFriendsView>
                <TitleFriends>Friends</TitleFriends>
                <CountFriend>1,045 friends</CountFriend>
              </TitleFriendsView>
              <TextFindFriends>Find Friends</TextFindFriends>
            </ContainerTitleFindFriends>
            <ContainerFriends>
              <ImageFriendView>
                <ImageFriend source={angela} />
                <NameFriendText>Angela Merkel</NameFriendText>
              </ImageFriendView>
              <ImageFriendView>
                <ImageFriend source={jeff} />
                <NameFriendText>Jeff</NameFriendText>
              </ImageFriendView>
              <ImageFriendView>
                <ImageFriend source={timcook} />
                <NameFriendText>Tim Cook</NameFriendText>
              </ImageFriendView>
              <ImageFriendView>
                <ImageFriend source={obama} />
                <NameFriendText>Barack Obama</NameFriendText>
              </ImageFriendView>
              <ImageFriendView>
                <ImageFriend source={stevejobs} />
                <NameFriendText>Steves Jobs</NameFriendText>
              </ImageFriendView>
              <ImageFriendView>
                <ImageFriend source={mark} />
                <NameFriendText>Mark Zuckerberg</NameFriendText>
              </ImageFriendView>
            </ContainerFriends>
            <SeeAllFriendsButton>
              <SeeAllFriendsText>See All Friends</SeeAllFriendsText>
            </SeeAllFriendsButton>
          </SectionFriends>
        </ScrollView>
      </Container>
    </>
  );
};

export default Profile;
