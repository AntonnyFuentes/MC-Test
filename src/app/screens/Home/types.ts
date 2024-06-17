import {ImageSourcePropType} from 'react-native';

export enum CardType {
  MASTERCARD = 'Mastercard',
  VISA = 'Visa',
  AMEX = 'American Express',
}

export interface Card {
  userdId: string;
  number: number;
  expirationMonth: number;
  expirationYear: number;
  cvc: number;
  typeCard: CardType;
  isLocked: boolean;
  cardImage: ImageSourcePropType;
  cardImageLocked: ImageSourcePropType;
  currentBalance: number;
  totalCreditLimit: number;
  statementBalance: number;
  minimunPayment: number;
  daysToPay: number;
}
