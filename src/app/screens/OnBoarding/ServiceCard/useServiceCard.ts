import {useState} from 'react';

import {ServicesIds} from '../types';
import {
  connectSpotify,
  connectNetflix,
  connectStarbucks,
  connectUberEats,
} from '../../../Utils/connectServices';
import {useOnBoardingActions} from '../../../store/onBoarding.slice';

export function useServiceCard() {
  const {setHasOneServiceConnected} = useOnBoardingActions();

  const [isServiceConnected, setIsServiceConnected] = useState<boolean>(false);
  const [connectModalVisible, setConnectModalVisible] =
    useState<boolean>(false);
  const [successfullyModalVisible, setSuccessfullyModalVisible] =
    useState<boolean>(false);

  //Real way to connect the services with APIs and Permissions, this wont do anything is just a demo of how I willdoit with real connections
  const onPressConnectServiceCard = async (serviceSelectedId: string) => {
    switch (serviceSelectedId) {
      case ServicesIds.NETFLIX:
        connectNetflix();
        break;
      case ServicesIds.SPOTIFY:
        connectSpotify();
        break;
      case ServicesIds.STARBUCKS:
        connectStarbucks();
        break;
      case ServicesIds.UBER_EATS:
        connectUberEats();
        break;

      default:
        break;
    }

    //Demo way to connect the services with modal
    setConnectModalVisible(true);
  };

  const onPressSubmitData = () => {
    //set connection on store
    setHasOneServiceConnected(true);

    //set connection localy
    setIsServiceConnected(true);

    //initialize successfull process
    closeConnectModal();
    connectionSuccessfully();
  };

  const connectionSuccessfully = () => {
    setSuccessfullyModalVisible(true);
    setTimeout(() => {
      setSuccessfullyModalVisible(false);
    }, 2000);
  };

  const closeConnectModal = () => {
    setConnectModalVisible(false);
  };

  return {
    isServiceConnected,
    connectModalVisible,
    successfullyModalVisible,
    onPressConnectServiceCard,
    onPressSubmitData,
    closeConnectModal,
  };
}
