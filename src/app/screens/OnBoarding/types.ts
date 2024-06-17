import {ImageSourcePropType} from 'react-native';
import {
  STARBUCKS_LOGO,
  UBER_EATS_LOGO,
  NETFLIX_LOGO,
  SPOTIFY_LOGO,
} from '../../constants/images';

export enum ServicesIds {
  NETFLIX = 'Netlix',
  SPOTIFY = 'Spotify',
  UBER_EATS = 'Uber Eats',
  STARBUCKS = 'Starbucks',
}

export type Service = {
  id: ServicesIds;
  image: ImageSourcePropType;
  isConnected: boolean;
  mainColor: string;
};

export const services: Service[] = [
  {
    id: ServicesIds.NETFLIX,
    image: NETFLIX_LOGO,
    isConnected: false,
    mainColor: '#831010',
  },
  {
    id: ServicesIds.SPOTIFY,
    image: SPOTIFY_LOGO,
    isConnected: false,
    mainColor: '#1ED760',
  },
  {
    id: ServicesIds.UBER_EATS,
    image: UBER_EATS_LOGO,
    isConnected: false,
    mainColor: 'black',
  },
  {
    id: ServicesIds.STARBUCKS,
    image: STARBUCKS_LOGO,
    isConnected: false,
    mainColor: '#036635',
  },
];
