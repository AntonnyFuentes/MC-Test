import {useState, useEffect, useCallback} from 'react';
import {Animated} from 'react-native';

import {heightVisibleOfHiddenView} from '../constants';

import {useAppSelector} from '../../../config/hooks';
import {useCardDataActions} from '../../../store/cardData.slice';
import {screenWidth} from '../../../Utils/DeviceUtils';
import {Transaction} from '../../../database/types';
import {dummuyTransactions} from '../../../database/Dummy';

const bounceValue = new Animated.Value(heightVisibleOfHiddenView);

export function useCardData() {
  const {cards, cardSelected, cardIsHidden} = useAppSelector(
    state => state.cardData,
  );
  const {setCards, setCardIsHidden, setCardSelected} = useCardDataActions();

  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [cardTransactions, setCardTransactions] = useState<Transaction[]>([]);

  const getTransactionById = useCallback(() => {
    return dummuyTransactions.filter(transaction => {
      return (
        transaction.cardId === cardSelected.id &&
        transaction.userId === cardSelected.userId
      );
    });
  }, [cardSelected]);

  useEffect(() => {
    const currentTransactions = getTransactionById();
    setCardTransactions(currentTransactions);
  }, [getTransactionById]);

  const hideShowCards = () => {
    const toValue = cardIsHidden ? 0 : heightVisibleOfHiddenView;

    Animated.spring(bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();

    setCardIsHidden(!cardIsHidden);
  };

  const onPressLock = () => {
    const newCards = cards.map(card => {
      if (cardSelected.number === card.number) {
        const isAlreadyLocked = card.isLocked;
        const lockedCard = {
          ...card,
          isLocked: !isAlreadyLocked,
        };

        setCardSelected(lockedCard);
        return lockedCard;
      }

      return card;
    });

    setCards(newCards);
  };

  const onScrollCard = (index: number) => {
    const width = screenWidth();
    const widthScroll = index * -1;
    const newIndex = Math.round(widthScroll / width);

    if (newIndex !== currentCardIndex) {
      setCurrentCardIndex(newIndex);
      setCardSelected(cards[newIndex]);
    }
  };

  return {
    cards,
    cardTransactions,
    bounceValue,
    cardSelected,
    cardIsHidden,
    onPressLock,
    onScrollCard,
    hideShowCards,
  };
}
