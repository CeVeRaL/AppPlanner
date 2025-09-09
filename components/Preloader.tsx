import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  Easing 
} from 'react-native-reanimated';

const PlaceholderImage = require("../assets/images/white2.jpg");

export default function Preloader() {
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(0.3);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1
    );
    
    opacity.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.backgroundImage} />
        <View style={styles.overlay} />
      </View>
      
      <View style={styles.content}>
        <Animated.View style={[styles.spinner, animatedStyle]}>
          <View style={styles.spinnerInner} />
        </Animated.View>
        
        <Text style={styles.title}>Planner</Text>
        <Text style={styles.subtitle}>Loading your experience...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#25292e',
    opacity: 0.8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  spinner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#ffd33d',
    marginBottom: 30,
  },
  spinnerInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: '#ffd33d',
    opacity: 0.5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    opacity: 0.8,
  },
});