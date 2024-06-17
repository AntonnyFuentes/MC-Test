import {useRef} from 'react';
import {createSlice, PayloadAction, bindActionCreators} from '@reduxjs/toolkit';

import {useAppDispatch} from '../config/hooks';

interface OnBoardingState {
  hasOneServiceConnected: boolean;
}

export const initialState: OnBoardingState = {
  hasOneServiceConnected: false,
};

export const onBoardingSlice = createSlice({
  name: 'onBoarding',
  initialState,
  reducers: {
    setHasOneServiceConnected: (state, action: PayloadAction<boolean>) => {
      state.hasOneServiceConnected = action.payload;
    },
  },
});

export function useOnBoardingActions() {
  const dispatch = useAppDispatch();
  const actions = {
    ...onBoardingSlice.actions,
  };
  const refActions = useRef(bindActionCreators(actions, dispatch));
  return refActions.current;
}

export default onBoardingSlice.reducer;
