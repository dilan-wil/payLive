import { View, StyleSheet, FlatList, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import slides from '@/constants/slides';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import NextButton from './NextButton';

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: Array<any> }) => {
    if (viewableItems && viewableItems[0]?.index !== undefined) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1 && slidesRef.current) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      onComplete(); // Mark onboarding as complete and transition
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton
        percentage={(currentIndex + 1) * (100 / slides.length)}
        scrollTo={scrollTo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sliderContainer: {
    flex: 3,
  },
});

export default Onboarding;
