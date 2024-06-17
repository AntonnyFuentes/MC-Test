import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useAppSelector} from '../../config/hooks';
import {MainRoutes} from '../../navigator/Routes';

export function useOnBoarding() {
  const {hasOneServiceConnected} = useAppSelector(state => state.onBoarding);
  const navigation = useNavigation();

  const [allSetModalVisible, setAllSetModalVisible] = useState<boolean>(false);

  const openAllSetModal = () => {
    setAllSetModalVisible(true);
  };

  const closeAllSetModal = () => {
    setAllSetModalVisible(false);
  };

  const goToMainDashboard = () => {
    navigation.navigate(MainRoutes.MainNavigator as never);
  };

  return {
    allSetModalVisible,
    hasOneServiceConnected,
    openAllSetModal,
    closeAllSetModal,
    goToMainDashboard,
  };
}
