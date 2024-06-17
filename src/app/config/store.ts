import {configureStore} from '@reduxjs/toolkit';
import onBoardingReducer from '../store/onBoarding.slice';
import cardDataReducer from '../store/cardData.slice';

const store = configureStore({
  reducer: {
    onBoarding: onBoardingReducer,
    cardData: cardDataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
