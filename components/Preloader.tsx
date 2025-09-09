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

    // Через 3 секунды скрываем приветствие и показываем иконки
    setTimeout(() => {
      welcomeOpacity.value = withTiming(0, {
        duration: 500,
        easing: Easing.in(Easing.ease),
      });

      // Показываем иконки с задержкой
      iconsOpacity.value = withDelay(600, withTiming(1, {
        duration: 800,
        easing: Easing.out(Easing.ease),
      }));

      iconsScale.value = withDelay(600, withTiming(1, {
        duration: 800,
        easing: Easing.out(Easing.back(1.2)),
      }));

      // Завершаем через 2 секунды после показа иконок
      setTimeout(() => {
        runOnJS(onFinish)();
      }, 2800);
    }, 3000);
  }, []);

  const welcomeAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: welcomeOpacity.value,
    };
  });

  const iconsAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: iconsOpacity.value,
      transform: [{ scale: iconsScale.value }],
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

      {/* Icons */}
      <Animated.View style={[styles.iconsContainer, iconsAnimatedStyle]}>
        <View style={styles.iconRow}>
          <View style={styles.iconItem}>
            <View style={styles.iconCircle}>
              <Ionicons name="calendar" size={32} color="#ffd33d" />
            </View>
            <Text style={styles.iconLabel}>Monthly</Text>
          </View>
          
          <View style={styles.iconItem}>
            <View style={styles.iconCircle}>
              <Ionicons name="calendar-outline" size={32} color="#ffd33d" />
            </View>
            <Text style={styles.iconLabel}>Weekly</Text>
          </View>
        </View>

        <View style={styles.iconRow}>
          <View style={styles.iconItem}>
            <View style={styles.iconCircle}>
              <Ionicons name="today" size={32} color="#ffd33d" />
            </View>
            <Text style={styles.iconLabel}>Daily</Text>
          </View>
          
          <View style={styles.iconItem}>
            <View style={styles.iconCircle}>
              <Ionicons name="list" size={32} color="#ffd33d" />
            </View>
            <Text style={styles.iconLabel}>Tasks</Text>
          </View>
        </View>

        <View style={styles.iconRow}>
          <View style={styles.iconItem}>
            <View style={styles.iconCircle}>
              <Ionicons name="notifications" size={32} color="#ffd33d" />
            </View>
            <Text style={styles.iconLabel}>Reminders</Text>
          </View>
          
          <View style={styles.iconItem}>
            <View style={styles.iconCircle}>
              <Ionicons name="settings" size={32} color="#ffd33d" />
            </View>
            <Text style={styles.iconLabel}>Settings</Text>
          </View>
        </View>
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
  iconsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  iconItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 211, 61, 0.1)',
    borderWidth: 2,
    borderColor: '#ffd33d',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});