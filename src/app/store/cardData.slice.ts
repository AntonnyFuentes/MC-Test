import {useRef} from 'react';
import {createSlice, PayloadAction, bindActionCreators} from '@reduxjs/toolkit';

import {useAppDispatch} from '../config/hooks';
import {Card} from '../database/types';

import {dummyCards} from '../database/Dummy';

interface CardDataState {
  cards: Card[];
  cardIsHidden: boolean;
  cardSelected: Card;
}

export const initialState: CardDataState = {
  cards: dummyCards,
  cardIsHidden: true,
  cardSelected: dummyCards[0],
};

export const cardDataSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    setCardIsHidden: (state, action: PayloadAction<boolean>) => {
      state.cardIsHidden = action.payload;
    },
    setCardSelected: (state, action: PayloadAction<Card>) => {
      state.cardSelected = action.payload;
    },
  },
});

export function useCardDataActions() {
  const dispatch = useAppDispatch();
  const actions = {
    ...cardDataSlice.actions,
  };
  const refActions = useRef(bindActionCreators(actions, dispatch));
  return refActions.current;
}

export default cardDataSlice.reducer;
