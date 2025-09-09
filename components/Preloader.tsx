import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  withDelay,
  Easing,
  runOnJS
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const PlaceholderImage = require("../assets/images/white2.jpg");
const { width, height } = Dimensions.get('window');

type PreloaderProps = {
  onFinish: () => void;
};

export default function Preloader({ onFinish }: PreloaderProps) {
  const welcomeOpacity = useSharedValue(0);
  const iconsOpacity = useSharedValue(0);
  const iconsScale = useSharedValue(0.5);

  useEffect(() => {
    // Показываем приветствие
    welcomeOpacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.ease),
    });

    // Через 3 секунды скрываем приветствие и переходим к основному экрану
    setTimeout(() => {
      runOnJS(onFinish)();
    }, 3000);
  }, []);

  const welcomeAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: welcomeOpacity.value,
    };
  });


  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      
      {/* Welcome Text */}
      <Animated.View style={[styles.welcomeContainer, welcomeAnimatedStyle]}>
        <Text style={styles.welcomeText}>Welcome to your planner</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#25292e',
    opacity: 0.7,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});