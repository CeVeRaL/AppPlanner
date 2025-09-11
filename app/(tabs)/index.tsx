import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Image } from 'expo-image';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  withSpring,
  Easing
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import MiniCalendar from '@/components/MiniCalendar';

const PlaceholderImage = require("../../assets/images/white2.jpg");
const GirlImage = require("../../assets/images/Девушка.jpg");
const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const scale1 = useSharedValue(1);
  const scale2 = useSharedValue(1);
  const scale3 = useSharedValue(1);
  const scale4 = useSharedValue(1);

  const createAnimatedStyle = (scale) => {
    return useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));
  };

  const handlePressIn = (scale) => {
    scale.value = withSpring(0.95, {
      damping: 15,
      stiffness: 300,
    });
  };

  const handlePressOut = (scale) => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 300,
    });
  };

  const animatedStyle1 = createAnimatedStyle(scale1);
  const animatedStyle2 = createAnimatedStyle(scale2);
  const animatedStyle3 = createAnimatedStyle(scale3);
  const animatedStyle4 = createAnimatedStyle(scale4);

  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      
      {/* Top Section with Calendar and Girl Sticker */}
      <View style={styles.topSection}>
        <View style={styles.calendarContainer}>
          <MiniCalendar />
        </View>
        <View style={styles.stickerContainer}>
          <View style={styles.girlSticker}>
            <Image source={GirlImage} style={styles.girlImage} />
          </View>
        </View>
      </View>

      {/* Main Icons Grid */}
      <View style={styles.iconsContainer}>
        <View style={styles.row}>
          <Animated.View style={[animatedStyle1]}>
            <Pressable
              style={styles.iconButton}
              onPressIn={() => handlePressIn(scale1)}
              onPressOut={() => handlePressOut(scale1)}
            >
              <Ionicons name="calendar" size={40} color="#ffd33d" />
              <Text style={styles.iconText}>Calendar</Text>
            </Pressable>
          </Animated.View>
          
          <Animated.View style={[animatedStyle2]}>
            <Pressable
              style={styles.iconButton}
              onPressIn={() => handlePressIn(scale2)}
              onPressOut={() => handlePressOut(scale2)}
            >
              <Ionicons name="checkmark-circle" size={40} color="#ffd33d" />
              <Text style={styles.iconText}>Tasks</Text>
            </Pressable>
          </Animated.View>
        </View>
        
        <View style={styles.row}>
          <Animated.View style={[animatedStyle3]}>
            <Pressable
              style={styles.iconButton}
              onPressIn={() => handlePressIn(scale3)}
              onPressOut={() => handlePressOut(scale3)}
            >
              <Ionicons name="bar-chart" size={40} color="#ffd33d" />
              <Text style={styles.iconText}>Analytics</Text>
            </Pressable>
          </Animated.View>
          
          <Animated.View style={[animatedStyle4]}>
            <Pressable
              style={styles.iconButton}
              onPressIn={() => handlePressIn(scale4)}
              onPressOut={() => handlePressOut(scale4)}
            >
              <Ionicons name="settings" size={40} color="#ffd33d" />
              <Text style={styles.iconText}>Settings</Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
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
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 40,
  },
  calendarContainer: {
    flex: 1,
    marginRight: 20,
  },
  stickerContainer: {
    width: 120,
    height: 120,
  },
  girlSticker: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ffd33d',
    shadowColor: '#ffd33d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  girlImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 30,
    marginHorizontal: 20,
    minWidth: 120,
    minHeight: 120,
    borderWidth: 2,
    borderColor: 'rgba(255, 211, 61, 0.3)',
  },
  iconText: {
    color: '#ffd33d',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});